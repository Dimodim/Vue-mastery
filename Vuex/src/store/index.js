import { createStore } from 'vuex'

export default createStore({
  state: {
    user: { id: 'abc123', name: 'Adam Jahr' },
    categories: [
      'sustainability',
      'nature',
      'animal welfare',
      'housing',
      'education',
      'food',
      'community'
    ],
    todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false },
      { id: 3, text: '...', done: true },
      { id: 4, text: '...', done: false }
    ],
    events: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false },
      { id: 3, text: '...', done: true },
      { id: 4, text: '...', done: false }
    ]
  },
  mutations: {},
  actions: {},
  modules: {},
  getters:{
    getCategoryLength: (state) =>{
      return state.categories.length;
    },
    getDoneTodos: (state) => {
      return state.todos.filter(todo => todo.done);
    },
    getActiveTodosCount: (state, getters) => {
      return state.todos.length - getters.getDoneTodos.length;
    },
    getEventById: (state) => (id) => {
      return state.events.find(event => event.id === id);
    }
  }
});
