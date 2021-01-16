/* 包含多个由action触发mutation调用直接更新状态的方法的对象 */

import {ADD_TODO, DELET_TODO, SELECT_ALL_TODOS, CLEAR_ALL_COMPLETED} from './mutation-types'
export default {
  // 常量变量函数名的用法 [ADD_TODO] 对应于add_todo，即常量的值
  [ADD_TODO] (state, {todo}) {
    state.todos.unshift(todo)
  },
  [DELET_TODO] (state, {index}) {
    state.todos.splice(index, 1)
  },
  [SELECT_ALL_TODOS] (state, {value}) {
    state.todos.forEach(todo => {
      todo.complete = value
    })
  },
  [CLEAR_ALL_COMPLETED] (state) {
    state.todos = state.todos.filter(todo => {
      return !todo.complete
    })
  }
}
