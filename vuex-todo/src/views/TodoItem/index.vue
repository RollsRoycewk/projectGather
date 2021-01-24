<template>
  <li @mouseenter="isShow = true" @mouseleave="isShow = false">
    <label>
      <input type="checkbox" v-model="isComputed" />
      <span> {{ item.task }}</span>
    </label>
    <button class="btn btn-danger" @click="del(item.id)" v-show="isShow">
      删除
    </button>
  </li>
</template>

<script>
import { mapMutations } from "vuex";
import { DEL_ITEM, ONE_STATE } from "../../store/mutation-type";

export default {
  name: "TodoItem",
  props: ["item"],
  data() {
    return {
      isShow: false,
    };
  },
  methods: {
    ...mapMutations([DEL_ITEM, ONE_STATE]),
    del(id) {
      if (window.confirm(`你确认要删除${this.item.task}吗?`)) {
        this.DEL_ITEM(id);
      }
    },
  },
  computed: {
    isComputed: {
      get() {
        return this.item.isChecked;
      },
      set() {
        this[ONE_STATE](this.item.id);
      },
    },
  },
};
</script>

<style>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
</style>
