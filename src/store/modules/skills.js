import axios from "axios";

const state = {
  skills: [],
};
const getters = {
  getHardSkills: (state) =>
    state.skills.filter((skill) => skill.type === "HardSkill"),
  getSoftSkills: (state) =>
    state.skills.filter((skill) => skill.type === "SoftSkill"),
};

const actions = {
  async fetchSkills({ commit }) {
    const response = await axios.get(
      "https://mesutarso.herokuapp.com/api/skills"
    );
    const data = response.data;
    commit("setSkills", data.data);
  },
};
const mutations = {
  setSkills: (state, skills) => (state.skills = skills),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
