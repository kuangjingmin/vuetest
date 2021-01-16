/* 包含多个接受组件通知触发mutation调用间接更新状态的方法的对象 */

import {ADD_TODO, DELET_TODO, SELECT_ALL_TODOS, CLEAR_ALL_COMPLETED} from './mutation-types'

export default {
  addTodo ({commit}, todo) {
    // 提交对mutation的请求
    commit(ADD_TODO, {todo})
  },
  deletTodo ({commit}, index) {
    // 提交对mutation的请求
    commit(DELET_TODO, {index})
  },
  selectAllTodos ({commit}, value) {
    // 提交对mutation的请求
    commit(SELECT_ALL_TODOS, {value})
  },
  clearAllCompleted ({commit}) {
    commit(CLEAR_ALL_COMPLETED)
  }
}

