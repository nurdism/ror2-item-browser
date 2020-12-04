<template>
  <div class="flex flex-col bg-gray-800">
    <span class="font-bold block bg-blue-900 text-white py-1 text-center">{{ equipment.name }}</span>

    <div class="flex p-2">
      <div class="relative flex flex-col justify-center content-center">
        <div class="w-16 h-16 border flex justify-center content-center" :class="[equipment.rarity]">
          <div class="relative flex flex-col justify-center content-center">
            <div :class="['icon', equipment.class]" class="block w-12 h-12" />
          </div>
        </div>
      </div>

      <div class="relative flex flex-col justify-center content-center ml-2 text-white">
        <span class="text-left" v-html="equipment.effect"></span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue, Prop } from 'vue-property-decorator'

  import { Item } from '../data'

  @Component({
    name: 'equipment-info',
  })
  export default class App extends Vue {
    @Prop({ required: true })
    equipment!: Item
  }
</script>
