<template>
  <ul class="todo-list">
    <todo-item v-for="(todo, index) in todos" :key="index" :todo="todo" :index="index"/>
  </ul>
</template>

<script>
import {mapState} from 'vuex'
import TodoItem from './TodoItem'
export default {
  name: 'TodoList',
  components: {
    TodoItem
  },
  computed: {
    ...mapState(['todos'])
  }
}
</script>

<style scoped>
ul,
li {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
.right {
  position: absolute;
  width: 55%;
  right: 2%;
}
.list-group {
  list-style-type: none;
  width: 760px;
  height: 380px;
  overflow-y: auto;
}
.todo-list{
    position: absolute;
    width: 200px;
    height: 200px;
    right: 0;
    top: 0;
    bottom: 0;
    left: 0;
    margin: auto;
}
</style>
