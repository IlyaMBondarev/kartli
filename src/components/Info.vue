<template>
    <div class="info" v-if="head && rows">
      <div class="info-head">
        <div 
          class="info-column"
          :class="`info-column_${columnName}`"
          v-for="columnName in Object.keys(head)" 
          :key="columnName" 
        >
          <div class="info-cell" 
            :class="cell.large ? 'info-cell_large' : ''"
            v-for="cell in head[columnName]"
            :key="cell.name"
          >
            {{ cell.name }}
            </div>
        </div>
        <div class="info-column info-column_saldo">
          <div class="info-cell">Сальдо</div>
        </div>
      </div>

      <Row v-for="key in Object.keys(rows)" :key="key" :row="rows[key]" :idx="+key" @clicked="clicked" />

    </div>
</template>

<script>
import Row from './Row'

export default {
  name: 'Info',
  props: {
    head: Object,
    rows: Object
  },
  components: {
      Row
  },
  methods: {
    clicked(info) {
      alert(`Информация: индекс - ${info.idx}, столбец - ${info.columnName}`);
    }
  }
}

</script>