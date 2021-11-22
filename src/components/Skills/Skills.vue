<template>
  <section class="skills" id="competences">
    <b-row class="flex-wrap align-items-center">
      <b-col md="6" sm="12">
        <SubHeading title="Mes Compétences" class="primary-color" />
        <div class="skills__hardSkills">
          <SkillsList
            skillsTitle="Compétences Techniques"
            :skills="getHardSkills"
          />
        </div>
        <div class="skills__softSkills">
          <SkillsList
            skillsTitle="Compétences Tranversales"
            :skills="getSoftSkills"
          />
        </div>
      </b-col>
      <b-col md="6" sm="12">
        <SkillsCardList />
        <div class="skills__btn mt-5">
          <Bouton title="Me Contacter" link="#contact" class="btn-link" />
        </div>
      </b-col>
    </b-row>
  </section>
</template>
<script>
import Bouton from "../Shared/Bouton.vue";
import SkillsCardList from "./CardList.vue";
import SubHeading from "../Shared/SubHeading.vue";
import SkillsList from "./List.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Skills",
  components: {
    Bouton,
    SkillsCardList,
    SubHeading,
    SkillsList,
  },

  methods: {
    ...mapActions(["fetchSkills"]),
  },
  computed: {
    ...mapGetters(["getHardSkills", "getSoftSkills"]),
  },
  created() {
    this.fetchSkills();
  },
};
</script>
