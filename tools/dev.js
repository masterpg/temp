#!/usr/bin/env node

const colors = require('colors')
const chokidar = require('chokidar')
const glob = require('glob')
const path = require('path')
const fs = require('fs-extra')
const wbl = require('web-base-lib')
const debounce = require('lodash/debounce')

/**
 * `fromDir`ベースのパスを`toDir`ベースへ変換します。
 * 例: xxx/src/docs/memo.txt → yyy/sources/docs/memo.txt
 * @param fromDir 例: xxx/src
 * @param toDir 例: yyy/sources
 * @param fromFilePath xxx/src/docs/memo.txt
 */
function toOutFilePath(fromDir, toDir, fromFilePath) {
  const srcReg = new RegExp(`/?(${fromDir})/`)
  return fromFilePath.replace(srcReg, (match, $1, offset) => {
    return match.replace($1, toDir)
  })
}

/**
 * 本ライブラリを使用する側のプロジェクトに修正内容を即時反映するための環境設定を行います。
 * 本ライブラリを修正しビルドをかけると、使用する側のnode_modulesにある本ライブラリの
 * リソース（`dist`と`src`ディレクトリのファイル）が更新されます。
 *
 * @param libDir 本ライブラリのプロジェクトルートの絶対または相対パスを指定。
 * @param nodeDir 本ライブラリのnode_modulesの絶対または相対パスを指定。
 * @param watch 本ライブラリのプロジェクトルートにあるリソースの変更を監視するか否かを指定。
 */
function setup(libDir, nodeDir, watch) {
  libDir = wbl.removeEndSlash(path.resolve(process.cwd(), libDir))
  nodeDir = wbl.removeEndSlash(path.resolve(process.cwd(), nodeDir))
  console.log(`libDir: ${libDir}\ndevProjectDir: ${nodeDir}`)

  const libDistDir = path.join(libDir, 'dist')
  const nodeDistDir = path.join(nodeDir, 'dist')
  const libSrcDir = path.join(libDir, 'src')
  const nodeSrcDir = path.join(nodeDir, 'src')

  // 監視前の準備処理
  if (!watch) {
    // "nodeDistDir"と"nodeSrcDir"を一旦削除
    fs.removeSync(nodeDistDir)
    fs.removeSync(nodeSrcDir)

    // "libDistDir"ディレクトリを"nodeDistDir"へコピー
    fs.copySync(libDistDir, nodeDistDir)

    // "libSrcDir"配下の全ファイルを"nodeSrcDir"へシンボリックリンクを作成
    const libSrcFilePaths = glob.sync(`${libSrcDir}/**/*`, { nodir: true })
    for (const fromFilePath of libSrcFilePaths) {
      const toFilePath = toOutFilePath(libSrcDir, nodeSrcDir, fromFilePath)
      fs.ensureSymlinkSync(fromFilePath, toFilePath)
    }
  }
  // 監視処理
  else {
    // "libDistDir"の変更監視
    chokidar.watch(libDistDir, { persistent: true }).on(
      'change',
      debounce(() => {
        console.log('CHANGE'.bgBlue.white, `${libDistDir}`.blue)
        fs.copy(libDistDir, nodeDistDir)
      }, 3000)
    )

    // "libSrcDir"配下のファイルの変更監視
    chokidar
      .watch(libSrcDir, { persistent: true })
      .on('add', fromFilePath => {
        // console.log(`add: ${fromFilePath}`)
        const toFilePath = toOutFilePath(libSrcDir, nodeSrcDir, fromFilePath)
        fs.ensureSymlink(fromFilePath, toFilePath)
      })
      .on('unlink', fromFilePath => {
        // console.log(`unlink: ${fromFilePath}`)
        const toFilePath = toOutFilePath(libSrcDir, nodeSrcDir, fromFilePath)
        fs.remove(toFilePath)
      })
  }
}

const argv = require('yargs')
  .usage('Usage: $0 [libDir] [nodeDir]')
  .demandCommand(2)
  .options({
    watch: {
      description: 'watch for changes',
      boolean: true,
      alias: 'w',
    },
  }).argv

const libDir = argv._[0]
const nodeDir = argv._[1]
const watch = argv.watch

setup(libDir, nodeDir, watch)
