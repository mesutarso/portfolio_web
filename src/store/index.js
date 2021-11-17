import Vuex from "vuex";
import Vue from "vue";
import projects from "./modules/projects";
import skills from "./modules/skills";

// Load Vuex
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
  modules: {
    projects,
    skills,
  },
});
