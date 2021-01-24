import {
  ADD_TODO,
  DEL_ITEM,
  ONE_STATE,
  ALL_STATE,
  DEL_ALL_DONE,
} from "./mutation-type";
const mutations = {
  [ADD_TODO](state, task) {
    state.todos.unshift({ id: Date.now(), task, isChecked: false });
  },
  [DEL_ITEM](state, id) {
    state.todos = state.todos.filter((item) => {
      return item.id !== id;
    });
  },
  [ONE_STATE](state, id) {
    state.todos = state.todos.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          isChecked: !item.isChecked,
        };
      }
      return item;
    });
  },
  [ALL_STATE](state, isState) {
    state.todos = state.todos.map((item) => ({ ...item, isChecked: isState }));
  },
  [DEL_ALL_DONE](state) {
    state.todos = state.todos.filter((item) => {
      return !item.isChecked;
    });
  },
};

export default mutations;
