<template>
  <li class="todo" @mouseenter="showView(true)" @mouseleave="showView(false)" :style="{background: bgColor}">
    <div class="view">
      <input type="checkbox" v-model="todo.complete">
      <div class="item-view">
      <span class="index">{{index}}</span>
      <label for="">{{todo.inputTodo}}</label>
      <button class="destroy" v-show="isShow" @click="deletItem">删除</button>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  name: 'TodoItem',
  data () {
    return {
      bgColor: 'white',
      isShow: false
    }
  },
  props: {
    todo: Object,
    index: Number
  },
  methods: {
    showView (isT) {
      if (isT) {
        this.bgColor = '#eee'
        this.isShow = true
      } else {
        this.bgColor = 'white'
        this.isShow = false
      }
    },
    deletItem () {
      const {index, todo} = this
      if (window.confirm(`确定要删除${todo.inputTodo}`)) {
        // deletTodo(index)
        this.$store.dispatch('deletTodo', index)
      }
    }
  }
}
</script>

<style scoped>
.list-group-item{
    position: relative;
    width: 720px;
    height: 80px;
    border: 1.5px #eee solid;
}
.handle{
    position: absolute;
    right: 2%;
}
.view{
  width: 500px;
}
.item-view{
  display: inline-block;
}
.destroy{
  background: tomato;
}
</style>
