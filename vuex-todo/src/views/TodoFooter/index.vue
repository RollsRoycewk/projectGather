<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="allComputed" />
    </label>
    <span>
      <span>已完成 {{ allDoneNum }}</span> / 全部 {{ allNum }}
    </span>
    <button class="btn btn-danger" @click="delalldone">清除已完成任务</button>
  </div>
</template>

<script>
import { ALL_STATE, DEL_ALL_DONE } from "../../store/mutation-type";
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "TodoFooter",
  methods: {
    ...mapMutations([ALL_STATE, DEL_ALL_DONE]),
    delalldone() {
      if (window.confirm("确定要删除所有已完成任务吗")) {
        this[DEL_ALL_DONE]();
      }
    },
  },
  computed: {
    ...mapGetters(["allNum", "allDoneNum"]),
    allComputed: {
      get() {
        return this.allNum === this.allDoneNum && this.allNum !== 0;
      },
      set(boolean) {
        this[ALL_STATE](boolean);
      },
    },
  },
};
</script>

<style>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>