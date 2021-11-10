<template>
  <section class="skills">
    <b-row class="flex-wrap align-items-center">
      <b-col md="6" sm="12">
        <SubHeading title="Mes Compétences" class="primary-color" />
        <div class="skills__hardSkills">
          <SkillsList
            skillsTitle="Compétences Techniques"
            :skills="hardSkills"
          />
        </div>
        <div class="skills__softSkills">
          <SkillsList
            skillsTitle="Compétences Tranversales"
            :skills="softSkills"
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
export default {
  name: "Skills",
  components: {
    Bouton,
    SkillsCardList,
    SubHeading,
    SkillsList,
  },
  data() {
    return {
      hardSkills: [
        {
          name: "Vue.js",
          icon: "bx:bxl-vuejs",
        },

        {
          name: "MySQL",
          icon: "cib:mysql",
        },
        {
          name: "WordPress",
          icon: "bi:wordpress",
        },
        {
          name: "Git",
          icon: "bi:git",
        },
        {
          name: "Laravel",
          icon: "fontisto:laravel",
        },
        {
          name: "React Js",
          icon: "akar-icons:react-fill",
        },
        {
          name: "Node Js",
          icon: "akar-icons:node-fill",
        },
        {
          name: "Flutter",
          icon: "cib:flutter",
        },
        {
          name: "Next js",
          icon: "cib:next-js",
        },
        {
          name: "AWS",
          icon: "cib:amazon-aws",
        },
        {
          name: "Docker",
          icon: "bx:bxl-docker",
        },
        {
          name: "Mongo DB",
          icon: "cib:mongodb",
        },
      ],
      softSkills: [
        {
          name: "Communication",
          icon: "carbon:communication-unified",
        },
        {
          name: "SCRUM",
          icon: "eos-icons:project-outlined",
        },
        {
          name: "TéléTravail",
          icon: "eos-icons:project-outlined",
        },
        {
          name: "Code Review",
          icon: "bx:bx-code-block",
        },
      ],
    };
  },
};
</script>
