<template>
  <div class="w-16 h-16 border flex justify-center content-center" :class="[item.rarity]">
    <div class=" relative flex flex-col justify-center content-center">
      <div :class="['icon', item.class]" class="block w-12 h-12" />
      <span class=" absolute font-bold text-white text-lg stack" v-if="item.count > 0">x{{ item.count + 1 }}</span>
    </div>
  </div>
</template>

<style scoped>
  .stack {
    top: -3px;
    right: -3px;
    font-family: 'tracer';
    text-shadow: 0px 0px 3px rgba(0, 0, 0, 0.59);
    cursor: pointer;
    user-select: none;
  }
</style>

<script lang="ts">
  import { Component, Vue, Prop } from 'vue-property-decorator'

  import { Item } from '../data'

  @Component({
    name: 'item-square',
  })
  export default class App extends Vue {
    @Prop({ required: true })
    item!: Item
  }
</script>
