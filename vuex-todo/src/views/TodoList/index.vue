<template>
  <ul class="todo-main">
    <TodoItem v-for="item in todos" :key="item.id" :item="item" />
  </ul>
</template>

<script>
import TodoItem from "../TodoItem/index";
import { mapState } from "vuex";

export default {
  name: "TodoList",
  components: {
    TodoItem,
  },
  // mounted() {
  //   console.log(this);
  // },
  computed: {
    ...mapState(["todos"]),
  },
};
</script>

<style>
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>
