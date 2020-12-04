<template>
  <div class="flex flex-col bg-gray-800">
    <span class="font-bold block bg-blue-900 text-white py-1 text-center">{{ item.name }}</span>

    <div class="flex p-2">
      <div class="relative flex flex-col justify-center content-center">
        <div class="w-16 h-16 border flex justify-center content-center" :class="[item.rarity]">
          <div class="relative flex flex-col justify-center content-center">
            <div :class="['icon', item.class]" class="block w-12 h-12" />
            <span class="absolute font-bold text-white text-lg stack" v-if="item.amount > 1">x{{ item.amount }}</span>
          </div>
        </div>
      </div>

      <div class="relative flex flex-col justify-center content-center ml-2 text-white">
        <span class="text-left" v-html="item.effect(item.amount, equipment)"></span>
      </div>
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

  import { Item, Equipment } from '../data'

  @Component({
    name: 'item-info',
  })
  export default class App extends Vue {
    @Prop({ required: true })
    item!: Item

    @Prop()
    equipment!: Equipment
  }
</script>
