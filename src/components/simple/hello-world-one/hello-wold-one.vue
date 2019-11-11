<style scoped lang="sass">
@import '../../../styles/lib.variables'

.container
  color: $indigo-12
</style>

<template>
  <div class="container">
    HelloWoldOne {{ msg }}
    <q-btn flat rounded color="primary" label="OK" />
  </div>
</template>

<script lang="ts">
import { BaseComponent, Resizable } from '../../../base/component'
import { Component, Prop } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'

@Component
export default class HelloWorldOne extends mixins(BaseComponent, Resizable) {
  @Prop({ default: 'specify message' })
  msg!: string
}
</script>
