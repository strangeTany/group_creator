import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    updateTime: 5,
    groups: [],
    notes: new Array()
  },
  mutations: {
    countDown(state) {
      if (state.updateTime != 0) {
        state.updateTime--
      } else {
        this.commit('mixUp')
        state.updateTime = 5
      }
    },
    addNewGroup(state, groupName) {
      state.groups.push(groupName)
      state.notes.push(new Array())
    },
    addNewNote(state, params) {
      state.notes[params.groupId].push(params.note)
      console.log(params.note)
    },
    deleteGroup(state, groupId) {
      state.groups.splice(groupId, 1)
      state.notes.splice(groupId, 1)
    },
    deleteNote(state, params) {
      state.notes.splice(params.noteId, 1)
    },
    mixUp(state) {
      if (state.notes.length > 0) {
        state.notes.push(state.notes[0]);
        state.notes.splice(0, 1)
      }
    }
  },
  actions: {

  }
})
