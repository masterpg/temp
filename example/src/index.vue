<style scoped lang="sass"></style>

<template>
  <div class="layout vertical center">
    <div>Hello Wold!</div>
    <hello-world-one ref="helloWorldOne"></hello-world-one>
    <hello-world-two ref="helloWorldTwo"></hello-world-two>
    <comp-tree-view ref="treeView" />
  </div>
</template>

<script lang="ts">
import { BaseComponent, Resizable } from 'temp'
import { CompTreeView, HelloWorldOne, HelloWorldTwo } from 'temp'
import { Component } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'

@Component({
  name: 'app-page',
})
export default class AppPage extends mixins(BaseComponent, Resizable) {
  mounted() {
    const helloWorldOne = this.$refs.helloWorldOne as HelloWorldOne
    console.log(helloWorldOne.msg)

    const helloWorldTwo = this.$refs.helloWorldTwo as HelloWorldTwo
    console.log(helloWorldTwo.msg)

    const treeView = this.$refs.treeView as CompTreeView
    treeView.buildTree([
      {
        label: 'node1',
        value: 'node1',
        opened: false,
        icon: 'folder',
        iconColor: 'purple-5',
        children: [
          {
            label: 'node1-1',
            value: 'node1-1',
            opened: true,
            icon: 'folder',
            children: [{ label: 'node1-1-1', value: 'node1-1-1' }, { label: 'node1-1-2', value: 'node1-1-2' }],
          },
          {
            label: 'node1-2',
            value: 'node1-2',
            unselectable: true,
            icon: 'folder',
            children: [
              { label: 'node1-2-1', value: 'node1-2-1' },
              {
                label: 'node1-2-2',
                value: 'node1-2-2',
                children: [
                  {
                    label: 'node1-2-2-1',
                    value: 'node1-2-2-1',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        label: 'node2',
        value: 'node2',
        opened: true,
        icon: 'folder',
      },
    ])
  }
}
</script>
