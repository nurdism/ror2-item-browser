<template>
  <div class="w-16 h-16 border flex justify-center content-center" :class="[equipment.rarity]">
    <div class=" relative flex flex-col justify-center content-center">
      <div :class="['icon', equipment.class]" class="block w-12 h-12" />
      <span class=" absolute font-bold text-white cooldown" v-if="equipment.cooldown > 1">{{ equipment.cooldown }}s</span>
    </div>
  </div>
</template>

<style scoped>
  .cooldown {
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
    name: 'equipment-square',
  })
  export default class App extends Vue {
    @Prop({ required: true })
    equipment!: Item
  }
</script>
