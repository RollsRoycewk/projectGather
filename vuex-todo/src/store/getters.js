const getters = {
  // 全部数量
  allNum(state) {
    return state.todos.length;
  },
  // 已经完成的数量
  allDoneNum(state) {
    return state.todos.reduce((p, c) => {
      return p + (c.isChecked ? 1 : 0);
    }, 0);
  },
};

export default getters;
