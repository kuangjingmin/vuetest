<template>
  <!-- 统计和清空 -->
  <footer class="footer">
    <input type="checkbox" v-model="isAllCheck">
    <span class="todo-count">已完成{{completeCount}}/全部{{totalCount}}</span>
    <button class="clear" @click="clearAllCompleted" v-show="completeCount">清除已完成任务</button>
  </footer>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
  name: 'TodoFooter',
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters(['totalCount', 'completeCount']),
    isAllCheck: {
      get () {
        return this.$store.getters.isAllSelet
      },
      set (value) { // value是当前chekbox最新的值
        // this.selectAllCheck(value)
        // 更新状态 用到dispatch
        this.$store.dispatch('selectAllTodos', value)
      }
    }
  },
  methods: {
    ...mapActions(['clearAllCompleted'])
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
.footer{
  width: 250px;
  position: absolute;
  right: 45%;
  bottom: 10%;
}
.clear{
  position: absolute;
  right: 0;
}
</style>
