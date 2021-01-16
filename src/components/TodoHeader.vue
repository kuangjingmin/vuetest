<template>
  <!-- 输入框 -->
  <header class="header">
    <h1>小黑记事本</h1>
    <input v-model="inputTodo" @keyup.enter="add" autofocus="autofocus" autocomplete="off" type="text"
    placeholder="请输入任务名称，按回车键确认" class="new-todo">
  </header>
</template>

<script>
export default {
  name: 'TodoHearder',
  data () {
    return {
      inputTodo: '' // 组件内部使用的状态，不存在共享问题-->不需要vuex管理它
    }
  },
  methods: {
    add () {
      // 检查输入的合法性
      const inputTodo = this.inputTodo.trim()
      if (!inputTodo) {
        alert('必须输入')
        return
      }
      // 根据输入生成一个todo对象
      const todo = {
        inputTodo: inputTodo,
        complete: false
      }
      // 添加到todos数组
      // this.addTodo(todo)
      this.$store.dispatch('addTodo', todo)
      // 清除输入
      this.inputTodo = ''
    }
  }
}
</script>

<style>
.left{
  position: absolute;
  width: 40%;
  left: 2%;
}
.content{
  margin-top: 10px;
}
/* label和input、textarea垂直对齐问题，
默认label for属性绑定input应该是垂直对齐的，
有些不对齐的可以在input和textarea加样式 vertical-align: middle; */
.uLabel{
    width: 100px;
    display: inline-block;
}
.uText{
    width: 100px;
    display: inline-block;
}
.textA{
  vertical-align: middle;
}

.btn{
  position: absolute;
  top: 200px;
  right: 55%;
}
</style>
