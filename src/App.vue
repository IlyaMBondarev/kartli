<template>
  <div id="app">
    <Total />
    <Info :head="info.head" :rows="info.rows" />
  </div>
</template>

<script>
import Total from './components/Total'
import Info from './components/Info'

export default {
  name: 'App',
  data: () => {
    return {
      total: {},
      info: {}
    }
  },
  components: {
    Total,
    Info
  },
  methods: {
    async loadInfo() {
      this.info = await this.$store.dispatch('loadInfo');
    }
  },
  mounted() {
    this.loadInfo()
  }
}
</script>

<style lang="sass">
#app
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  color: #2c3e50
  padding: 20px 0 10px
  margin: 20px
  overflow-x: auto

.total
  width: 100%
  min-width: 800px
  margin: 0 auto 30px
  &-head
    display: flex
    justify-content: flex-start
    align-items: center
    column-gap: 30px
    padding: 12px 0
    font-size: 14px
    line-height: 100%
    color: #ccc
  &-head &-cell
  &-row
    display: flex
    justify-content: flex-start
    align-items: center
    column-gap: 30px
    padding: 12px 0
    font-size: 20px
    line-height: 100%
    color: #6ec756
    border-top: 2px solid #f5f5f5
  &-row &-cell
  &-cell
    flex: 1 1 0
    &:first-child
      flex-grow: 2

.info
  width: 100%
  min-width: 1000px
  margin: 0 auto
  &-head
    display: flex
    justify-content: flex-start
    align-items: stretch
    column-gap: 30px
    font-size: 14px
    line-height: 100%
    color: #bbb
  &-head &-column
    border-radius: 10px 10px 0 0
  &-row
    display: flex
    justify-content: flex-start
    align-items: stretch
    column-gap: 30px
    font-size: 20px
    line-height: 100%
    color: #3a3f39
  &-row &-column
    border-top: 2px solid #eee
    cursor: pointer
    &_actives:hover,
    &_actives.active
      background: #fed
    &_actives::before
      background: #fb8
    &_passives:hover,
    &_passives.active
      background: #f3f3f3
    &_passives::before
      background: #ccc
    &_saldo
      cursor: default
    &_actives::before,
    &_passives::before
      position: absolute
      top: 0
      left: 0
      border-radius: 0 5px 5px 0
      width: 5px
      height: 100%
    &.active-row::before
      content: ''
    &.disabled
      color: #bbb
  &-row:last-child &-column
    border-radius: 0 0 10px 10px
  &-column
    position: relative
    flex: 1 1 0
    display: flex
    justify-content: flex-start
    align-items: stretch
    column-gap: 10px
    padding: 20px
    transition: background .2s ease-in-out
    &_actives
      flex-grow: 3
      background: #fff7ef
    &_passives
      flex-grow: 3
      background: #fcfcfc
    &_saldo
      background: #f4fcf1
  &-cell
    flex: 1 1 0
    display: flex
    align-items: center
    &_large
      flex-grow: 2

</style>
