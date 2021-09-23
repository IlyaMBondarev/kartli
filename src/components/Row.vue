<template>
  <div class="info-row">
    <div 
      class="info-column"
      :class="`info-column_${columnName}`"
      v-for="columnName in Object.keys(row)" 
      :key="columnName"
      @click="clicked(idx, columnName)"
    >
      <div class="info-cell info-cell_large">{{ row[columnName].name }}</div>
      <div class="info-cell">{{ row[columnName].value }}</div>
    </div>

    <div class="info-column info-column_saldo">
      <div class="info-cell">{{ pretNum(findSaldo(...Object.values(row).map(a => a.value))) }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Row',
  props: {
      row: Object,
      idx: Number,
  },
  methods: {
    clicked(idx, columnName) {
      this.$emit('clicked', { idx, columnName })
    },
    pretIntNum(num) {
      let res = [];
      num.toString().split('').reverse().forEach(sym => {
        if (res.length && (res.length + 1) % 4 === 0 && sym !== '-') {
          res.push(' ');
        }
        res.push(sym)
      })
      
      return res.reverse().join('');
    },
    pretNum(num) {
      let arrIfFloat = num.toString().split('.').map(a => this.pretIntNum(a))
      return arrIfFloat.length > 1 ? arrIfFloat.join('.') : arrIfFloat[0]
    },
    makeNum(num) {
      return +(num.split(' ').join(''))
    },
    findSaldo(a, b) {
      return this.makeNum(a) - this.makeNum(b)
    }
  }
}
</script>
