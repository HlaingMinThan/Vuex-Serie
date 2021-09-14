export default {
  state: {
    todos: [
      { title: "title 1", id: 1 },
      { title: "title 2", id: 2 },
      { title: "title 3", id: 3 },
    ],
  },
  getters: {
    myTodos(state) {
      return state.todos;
    },
  },
  mutations: {},
  actions: {},
};
