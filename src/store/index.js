import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    projects: [],
    services: [],
    skills: [],
  },
  mutations: {
    setProject(state, project) {
      state.projects = project;
    },
    setSkill(state, skill) {
      state.skills = skill;
    },
    setService(state, service) {
      state.services = service;
    },
  },
  actions: {
    async getProjects({ commit }) {
      let project = (await Axios.get("/api/projects")).data;
      commit("setProject", project);
    },
  },
  modules: {},
});
