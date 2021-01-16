/* 使用localstorage存储数据的工具模板
   1、函数
   2、对象
   需要向外暴露2个功能
*/
const TODOS_KEY = 'todos_key';
export default {
  saveTodos(todos) {
    window.localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
  },
  readTodos() {
    //   千万别忘了写return！！
    return JSON.parse(window.localStorage.getItem(TODOS_KEY) || '[]');
  }
};
