import axios from "axios";

const state = {
  projects: [],
  lastProjects: [],
  isloading: false,
};

const getters = {
  getLastProjects: (state) => (state.lastProjects = state.projects.slice(0, 2)),
  getProjects: (state) => state.projects.slice(2),
};

const actions = {
  async fetchProjects({ commit }) {
    const response = await axios.get(
      "https://mesutarso.herokuapp.com/api/projects"
    );
    const data = response.data;
    commit("setProjects", data.data);
  },
};
const mutations = {
  setProjects: (state, projects) => (state.projects = projects),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
