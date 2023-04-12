import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import orderBy from "lodash.orderby";

Vue.use(Vuex);

const useOrganizationStructureStore = new Vuex.Store({
  state: {
    users: [],
    sortBy: null,
    sortDirection: null,
  },
  mutations: {
    addUser: (state, payload) => {
      const lastUser = state.users.at(-1);
      const lastId = lastUser ? lastUser.id : 0;
      state.users.push({ ...payload, id: lastId + 1 });
    },
    toggleSort: (state, payload) => {
      state.sortBy = payload;

      if (!state.sortDirection) {
        state.sortDirection = 'desc';
        return;
      }
      if (state.sortDirection === 'desc') {
        state.sortDirection = 'asc';
        return;
      }
      if (state.sortDirection === 'asc') {
        state.sortDirection = null;
        state.sortBy = null;
        return;
      }
    },
  },
  getters: {
    sortedUsers(state) {
      const result = state.sortBy
        ? orderBy(state.users, row => row[state.sortBy], state.sortDirection)
        : state.users;
      return result;
    },
    getChildren: (state, getters) => id => {
      return getters.sortedUsers.filter(user => user.chief === id);
    }
  },
  plugins: [createPersistedState()]
});

export default useOrganizationStructureStore;
