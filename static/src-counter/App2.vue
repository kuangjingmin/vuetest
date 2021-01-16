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
export default {
  computed: {
    oddOreven () {
      return this.$store.getters.oddOreven
    }
  },
  methods: {
    increment () {
      // 通知Vuex去增加
      this.$store.dispatch('increment') // 触发store中的对应的action去调用
    },
    decrement () {
      this.$store.dispatch('decrement')
    },
    addOdd () {
      this.$store.dispatch('addOdd')
    },
    addAsync () {
      this.$store.dispatch('addAsync')
    }
  }
}
</script>
<style lang="">

</style>
