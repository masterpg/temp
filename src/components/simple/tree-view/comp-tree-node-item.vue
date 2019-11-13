<style lang="sass" scoped>
@import '../../../styles/lib.variables'

.item
  cursor: pointer
  white-space: nowrap

  &:hover
    text-decoration: underline

  &.selected
    color: var(--comp-tree-selected-color, $pink-5)

  &.unselectable
    color: var(--comp-tree-unselectable-color, $grey-9)
    cursor: default
    &:hover
      text-decoration: none
</style>

<template>
  <span class="item" :class="{ selected, unselectable }" @click="itemOnClick()">{{ label }}</span>
</template>

<script lang="ts">
import CompTreeBaseNodeItem from './comp-tree-base-node-item'
import { Component } from 'vue-property-decorator'

@Component
export default class CompTreeNodeItem extends CompTreeBaseNodeItem {}
</script>
