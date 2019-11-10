const colors = require('colors')
const shell = require('shelljs')
const glob = require('glob')
const path = require('path')
const fs = require('fs-extra')
const wbl = require('web-base-lib')

/**
 * パスの余分な部分(先頭の"./"と末尾の"/")を削除します。
 * 例: "./src/docs/" → "src/docs"
 * @param path
 * @returns {string}
 */
function removeExtraPart(path) {
  path = path.replace(/^\./, '')
  return wbl.removeBothEndsSlash(path)
}

/**
 * `fromDir`ベースのパスを`toDir`ベースへ変換します。
 * 例: xxx/src/docs/memo.txt → yyy/sources/docs/memo.txt
 * @param fromDir 例: xxx/src
 * @param toDir 例: yyy/sources
 * @param fromFilePath xxx/src/docs/memo.txt
 */
function toOutFilePath(fromDir, toDir, fromFilePath) {
  fromDir = removeExtraPart(fromDir)
  toDir = removeExtraPart(toDir)
  fromFilePath = removeExtraPart(fromFilePath)
  const srcReg = new RegExp(`/?(${fromDir})/`)
  return fromFilePath.replace(srcReg, (match, $1, offset) => {
    return match.replace($1, toDir)
  })
}

/**
 * 本ライブラリのビルドを行います。
 */
function build() {
  const SRC_DIR = `src`
  const DIST_DIR = `dist`

  const SRC_STYLES_DIR = path.join(SRC_DIR, 'styles')
  const SRC_COMPONENTS_DIR = path.join(SRC_DIR, 'components/**/*.d.ts')
  const DIST_INDEX_FILE = path.join(DIST_DIR, 'types/index.d.ts')

  // "dist"へビルドファイルを生成するコマンド
  const BUILD_LIB = `vue-cli-service build --target lib --name vue-front-lib ./src/index.ts --dest ${DIST_DIR}`
  // ".d.ts"ファイルを"dist/types"へ生成するコマンド
  const BUILD_TYPES = `tsc --emitDeclarationOnly --declaration --project tsconfig.types.json --outDir ${DIST_DIR}/types`
  // "src/style"を"dist/styles"へコピーするコマンド
  const COPY_STYLES = `cp -rf ${SRC_STYLES_DIR} ${DIST_DIR}`

  // ビルドを実行
  if (shell.exec(`${BUILD_LIB} && ${BUILD_TYPES} && ${COPY_STYLES}`).code !== 0) {
    console.log('ERROR'.bgRed, 'Build failed'.red)
    shell.exit(1)
  }

  // "src/components"配下の".d.ts"ファイル一覧を取得
  const dtsFilePaths = glob.sync(`${SRC_COMPONENTS_DIR}`, { nodir: true })
  for (const fromFilePath of dtsFilePaths) {
    // "src/components/**/*.d.ts"ファイルを"dist/types/components"配下へコピー
    const destDir = path.join(DIST_DIR, 'types')
    const toFilePath = toOutFilePath(SRC_DIR, destDir, fromFilePath)
    fs.copySync(fromFilePath, toFilePath)
    // "dist/types/index.d.ts"に".d.ts"ファイルのexport節を追加書き込み
    const reg1 = new RegExp(`^${DIST_DIR}/types/`)
    const reg2 = new RegExp(`.d.ts$`)
    const importDtsFilePath = toFilePath.replace(reg1, './').replace(reg2, '')
    fs.appendFileSync(DIST_INDEX_FILE, `\nexport * from '${importDtsFilePath}'`)
  }
}

build()
