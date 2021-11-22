<template>
  <section class="projects" id="projects">
    <b-row class="flex-wrap align-items-start">
      <b-col cols="12" md="6" class="mb-5">
        <SubHeading title="Mes Récents Project" class="secondary-color" />
        <Description
          content="Voici quelques-uns des projets sur lesquels j'ai travaillé."
          class="white-color"
        />
        <CardList :projects="getLastProjects" />
      </b-col>
      <b-col cols="12" md="6" class="mb-5">
        <CardList :projects="getProjects" />
      </b-col>
    </b-row>
  </section>
</template>
<script>
import SubHeading from "../Shared/SubHeading.vue";
import Description from "../Shared/Description.vue";
import CardList from "./CardList.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Projects",
  components: {
    SubHeading,
    Description,
    CardList,
  },

  methods: {
    ...mapActions(["fetchProjects"]),
  },
  computed: mapGetters(["getProjects", "getLastProjects"]),
  created() {
    this.fetchProjects();
  },
};
</script>
