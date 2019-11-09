<style scoped lang="sass"></style>

<template>
  <div class="layout vertical center">
    <div>Hello Wold!</div>
    <hello-world-one ref="helloWorldOne"></hello-world-one>
    <hello-world-two ref="helloWorldTwo"></hello-world-two>
  </div>
</template>

<script lang="ts">
import { BaseComponent, Resizable } from 'temp'
import { HelloWorldOne, HelloWorldTwo } from 'temp'
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
  }
}
</script>
