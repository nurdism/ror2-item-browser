<template>
  <div class="container mx-auto my-5">
    <div class="bg-gray-800">
      <div class="font-bold bg-blue-900 text-white py-1 text-center flex-grow mb-2">SELECTED</div>
      <div class="flex flex-row">
        <v-draggable class="flex flex-row flex-wrap min-h-20 w-full pb-2 px-2" :list="selected" group="items" @change="onChange">
          <template v-for="(item, index) in selected">
            <div :key="index" class="focus:outline-none p-1" @click="onClick(index)">
              <item-square :item="item" :equipment="equiped" />
            </div>
          </template>
        </v-draggable>
        <div class="flex flex-row flex-wrap min-h-20 pb-1 px-2">
          <div class="focus:outline-none p-1">
            <equipment-square v-if="equiped" :equipment="equiped" @click.native="setEquipment(null)" />
          </div>
        </div>
      </div>
    </div>

    <div class="bg-gray-800 flex flex-row items-start">
      <div class="flex flex-col w-2/3">
        <div class="font-bold bg-blue-900 text-white py-1 text-center flex-grow mb-2">ITEMS</div>
        <div class="flex flex-row flex-wrap min-h-20 justify-center pb-2">
          <template v-for="(item, index) in items">
            <div :key="index" class="focus:outline-none p-1">
              <item-square :name="`${index}-item`" :item="item" :equipment="equiped" @click.native="addItem(item)" />
            </div>
          </template>
        </div>
      </div>
      <div class="flex flex-col w-1/3">
        <div class="font-bold bg-blue-900 text-white py-1 text-center flex-grow mb-2">EQUIPMENT</div>
        <div class="flex flex-row flex-wrap min-h-20 justify-center flex-shrink pb-2">
          <template v-for="(equipment, index) in equipment">
            <div :key="index" class="focus:outline-none p-1">
              <equipment-square :name="`${index}-equipment`" :equipment="equipment" @click.native="setEquipment(equipment)" />
            </div>
          </template>
        </div>
      </div>
    </div>

    <div class="bg-gray-800">
      <equipment-info v-if="equiped" :equipment="equiped" />
      <item-info v-for="(item, index) in selected" :key="index" :item="item" :equipment="equiped" class=" shadow-md" />
    </div>
    <template v-for="(item, index) in items">
      <v-tippy :to="`${index}-item`" :key="`${index}-item`" theme="" maxWidth="400px" trigger="mouseenter" placement="right" :followCursor="true" :duration="[0, 0]" :delay="[0, 0]" :distance="20" :animateFill="false">
        <item-info :item="item" :equipment="equiped" class=" shadow-md" />
      </v-tippy>
    </template>
    <template v-for="(equipment, index) in equipment">
      <v-tippy
        :to="`${index}-equipment`"
        :key="`${index}-equipment`"
        theme=""
        maxWidth="400px"
        trigger="mouseenter"
        placement="right"
        :followCursor="true"
        :duration="[0, 0]"
        :delay="[0, 0]"
        :distance="20"
        :animateFill="false"
      >
        <equipment-info :equipment="equipment" class=" shadow-md" />
      </v-tippy>
    </template>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'

  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
  import { TippyComponent } from 'vue-tippy/dist/vue-tippy.esm'

  import { items, Item, equipment, Equipment } from './data'

  import ItemSquare from '@/components/item-square.vue'
  import ItemInfo from '@/components/item-info.vue'
  import EquipmentSquare from '@/components/equipment-square.vue'
  import EquipmentInfo from '@/components/equipment-info.vue'
  import Draggable from 'vuedraggable'

  @Component({
    components: {
      'v-draggable': Draggable,
      'v-tippy': TippyComponent,
      'item-square': ItemSquare,
      'item-info': ItemInfo,
      'equipment-square': EquipmentSquare,
      'equipment-info': EquipmentInfo,
    },
  })
  export default class App extends Vue {
    equipment = equipment
    items = items
    selected = [] as Item[]
    equiped = null as Equipment | null

    setEquipment(equipment: Equipment): void {
      this.equiped = equipment
    }

    onChange(): void {
      const indexes: { [k: string]: number } = {}
      const items: Item[] = []
      for (let i = 0; i < this.selected.length; i++) {
        const cls = this.selected[i].class
        if (typeof indexes[cls] !== 'undefined') {
          items[indexes[cls]].amount++
        } else {
          items.push(Object.assign({}, this.selected[i]))
          indexes[cls] = items.length - 1
        }
      }
      this.selected = items
    }

    addItem(item: Item): void {
      let add = true

      for (const selected of this.selected) {
        if (selected.class === item.class) {
          selected.amount++
          add = false
          break
        }
      }

      if (add) {
        this.selected.push(Object.assign({}, item))
      }
    }

    onClick(index: number) {
      if (this.selected[index]) {
        if (this.selected[index].amount === 1) {
          this.selected.splice(index, 1)
        } else {
          this.selected[index].amount--
        }
      }
    }
  }
</script>
