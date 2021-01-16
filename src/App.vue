<template>
  <div>
    <div class="head">
      <!-- <h1 class="header">Hello,Vue!</h1> -->
      <TodoHeader/>
    </div>
    <div class="container">
      <!-- 3、使用组件标签 -->
      <TodoList/>
      <TodoFooter/>
    </div>
  </div>
</template>

<script>
// 1、引入组件标签
import TodoHeader from './components/TodoHeader'
import TodoList from './components/TodoList'
import TodoFooter from './components/TodoFooter'
export default {
  // 2、映射组件标签
  components: {
    TodoHeader,
    TodoList,
    TodoFooter
  },
  // methods: {
  //   addTodo (todo) {
  //     this.todos.unshift(todo)
  //   },
  //   deletTodo (index) {
  //     this.todos.splice(index, 1)
  //   },
  //   // 删除所有选中的todo，即数组过滤，过滤掉complete==true的，留下complete==false的
  //   clearCompleteItem () {
  //     this.todos = this.todos.filter(todo => !todo.complete)
  //   },
  //   // 全选/全不选
  //   selectAllCheck (check) {
  //     this.todos.forEach(todo => {
  //       todo.complete = check
  //     })
  //   }
  // },
  watch: {// 监视
    todos: {
      deep: true, // 深度监视
      handler: function (value) {
        //  将todos最新的json值，保存到localstorage
        window.localStorage.setItem('todos_key', JSON.stringify(value))
      }
    }
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
.head {
  position: relative;
  width: 100%;
  height: 100px;
}
.header {
  width: 200px;
  height: 50px;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
}
.container {
  position: relative;
  width: 100%;
  height: 300px;
}
</style>
