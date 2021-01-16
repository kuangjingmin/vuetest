<template>
  <div>
    <p>clicked:{{count}}times,count is {{oddOreven}}</p>
    <button @click="crement">+</button>
    <button @click="decrement">-</button>
    <button @click="addOdd">increment if odd</button>
    <button @click="addAsync">increment async</button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      count: 0
    }
  },
  computed: {
    oddOreven () {
      return this.count % 2 === 0 ? '偶数' : '奇数'
    }
  },
  methods: {
    crement () {
      const count = this.count
      this.count = count + 1
    },
    decrement () {
      const count = this.count
      this.count = count - 1
    },
    addOdd () {
      const count = this.count
      if (count % 2 === 1) {
        this.count = count + 1
      }
    },
    addAsync () {
      setTimeout(() => {
        const count = this.count
        this.count = count + 1
      }, 1000)
    }
  }
}
</script>
<style lang="">

</style>
