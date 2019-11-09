<style scoped lang="sass">
@import '../../styles/lib.variables'

.container
  color: $red-12
</style>

<template>
  <div class="container">Hello Wold Two {{ msg }}</div>
</template>

<script lang="ts">
import { BaseComponent, Resizable } from '../base'
import { Component, Prop } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'

@Component
export default class HelloWorldTwo extends mixins(BaseComponent, Resizable) {
  @Prop() private msg!: string
}
</script>
