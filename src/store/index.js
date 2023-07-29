import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    allQuestions: 28,
    checkedQuestion: 0,
    checkedQuestionArray: []
  },
  getters: {
    getAllQuestions:       state => state.allQuestions,
    getCheckQuestion:      state => state.checkedQuestion,
    getCheckQuestionArray: state => state.checkedQuestionArray,
  },
  mutations: {
    UPDATE_ALL_QUESTIONS:           (state, payload) => state.allQuestions = payload,
    ADD_CHECKED_QUESTION:        (state, payload) => {
      state.checkedQuestion += 1;
      state.checkedQuestionArray.push(payload);
    },
    REMOVE_CHECKED_QUESTION:        (state, payload) => {
      state.checkedQuestion -= 1;
      //Находим индекс элемента для удаления
      const index = state.checkedQuestionArray.findIndex(item => item === payload);
      state.checkedQuestionArray.splice(index, 1);
    },
  },
  actions: {
    updateAllQuestions({ commit }, payload) {
      commit('UPDATE_ALL_QUESTIONS', payload);
    },
    addCheckQuestion({ commit }, payload) {
      commit('ADD_CHECKED_QUESTION', payload);
    },
    removeCheckQuestion({ commit }, payload) {
      commit('REMOVE_CHECKED_QUESTION', payload);
    }
  },
})
