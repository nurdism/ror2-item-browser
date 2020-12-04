<template>
  <div class="container mx-auto my-5">
    <div class="border border-gray-900 bg-gray-800 p-1">
      <v-draggable class=" flex flex-row flex-wrap min-h-20 w-full" :list="selected" group="items" @change="onChange">
        <template v-for="(item, index) in selected">
          <div :key="index" class="focus:outline-none p-1" @click="onClick(index)">
            <item-square :item="item" />
          </div>
        </template>
      </v-draggable>
    </div>

    <div class="border-b border-r border-l border-gray-900 bg-gray-800 p-1">
      <v-draggable class="flex flex-row flex-wrap content-center justify-center" :list="items" :group="{ name: 'items', pull: 'clone', put: false }" :sort="false" placement="auto">
        <template v-for="(item, index) in items">
          <div :key="index" class="focus:outline-none p-1 ">
            <item-square :name="`${index}-item`" :item="item" />
          </div>
        </template>
      </v-draggable>
    </div>

    <div class="bg-gray-800">
      <item-info v-for="(item, index) in selected" :key="index" :item="item" class=" shadow-md" />
    </div>
    <template v-for="(item, index) in items">
      <v-tippy :to="`${index}-item`" :key="index" theme="" maxWidth="400px" trigger="mouseenter" placement="right" :followCursor="true" :duration="[0, 0]" :delay="[0, 0]" :distance="20" :animateFill="false">
        <item-info :item="item" class=" shadow-md" />
      </v-tippy>
    </template>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'

  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
  import { TippyComponent } from 'vue-tippy/dist/vue-tippy.esm'

  import { items, Item } from './data'

  import ItemSquare from '@/components/item-square.vue'
  import ItemInfo from '@/components/item-info.vue'
  import Draggable from 'vuedraggable'

  @Component({
    components: {
      'v-draggable': Draggable,
      'v-tippy': TippyComponent,
      'item-square': ItemSquare,
      'item-info': ItemInfo,
    },
  })
  export default class App extends Vue {
    items = items
    selected = [] as Item[]

    onChange(): void {
      const indexes: { [k: string]: number } = {}
      const items: Item[] = []
      for (let i = 0; i < this.selected.length; i++) {
        const cls = this.selected[i].class
        if (typeof indexes[cls] !== 'undefined') {
          items[indexes[cls]].count++
        } else {
          items.push(Object.assign({}, this.selected[i]))
          indexes[cls] = items.length - 1
        }
      }
      this.selected = items
    }

    onClick(index: number) {
      if (this.selected[index]) {
        if (this.selected[index].count === 0) {
          this.selected.splice(index, 1)
        } else {
          this.selected[index].count--
        }
      }
    }
  }
</script>
