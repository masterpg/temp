<style scoped lang="sass"></style>

<template>
  <div class="layout vertical center">
    <div>Hello Wold!</div>
    <hello-world-one></hello-world-one>
  </div>
</template>

<script lang="ts">
import { BaseComponent, Resizable } from 'temp'
import { Component } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'

@Component({
  name: 'app-page',
})
export default class AppPage extends mixins(BaseComponent, Resizable) {
  mounted() {
    console.log(this.notifyResize)
  }
}
</script>
