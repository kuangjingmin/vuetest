<template>
  <div>
    <p>clicked:{{$store.state.count}}times,count is {{oddOreven}}</p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="addOdd">increment if odd</button>
    <button @click="addAsync">increment async</button>
  </div>
</template>
<script>
// 这里的map就是映射的意思
import {mapState, mapGetters, mapActions} from 'vuex'
export default {
  computed: {
    // 如果用数组，字符串里的名字就要和store.js里的actions里的名字一样，如果不一样就要用对象
    ...mapState(['count']), // mapState()返回值：{count () {return this.$store.state['count']} }
    // ...mapGetters(['oddOreven']) // mapGetters()返回值：{oddOreven () {return this.$store.getters['oddOreven']} }
    ...mapGetters({oddOreven: 'oddOreven2'})
    // oddOreven () {
    //   return this.$store.getters.oddOreven
    // }
    // count () {
    //   return this.$store.state.count
    // }
  },
  methods: {
    ...mapActions(['increment', 'decrement', 'addOdd', 'addAsync'])
  }
//   methods: {
//     increment () {
//       // 通知Vuex去增加
//       this.$store.dispatch('increment') // 触发store中的对应的action去调用
//     },
//     decrement () {
//       this.$store.dispatch('decrement')
//     },
//     addOdd () {
//       this.$store.dispatch('addOdd')
//     },
//     addAsync () {
//       this.$store.dispatch('addAsync')
//     }
//   }
}
</script>
<style lang="">

</style>
