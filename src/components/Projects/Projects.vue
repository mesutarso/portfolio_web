<template>
  <section class="projects">
    <b-row class="flex-wrap align-items-start">
      <b-col cols="12" md="6" class="mb-5">
        <SubHeading title="Mes Récents Project" class="secondary-color" />
        <Description
          content="Voici quelques-uns des projets sur lesquels j'ai travaillé."
          class="white-color"
        />
        <CardList :projects="lastProjects" />
      </b-col>
      <b-col cols="12" md="6" class="mb-5">
        <CardList :projects="projects" />
      </b-col>
    </b-row>
  </section>
</template>
<script>
import SubHeading from "../Shared/SubHeading.vue";
import Description from "../Shared/Description.vue";
import CardList from "./CardList.vue";
export default {
  name: "Projects",
  components: {
    SubHeading,
    Description,
    CardList,
  },
  data() {
    return {
      projects: [
        {
          title: "Unicompex Congo",
          description:
            "Conception et réalisation du site Internet d'une entreprise de ventes de groupe electrogène",
          image: "/projects/unicompex.png",
          link: "https://unicompex.net",
        },
        {
          title: "Marie Grace Wando Foundation",
          description:
            "Site Internet d'une ONG pour aider les jeunes congolais à se développer dans l'agriculture",
          image: "/projects/mgw.png",
          link: "https://mgw-foundation.org",
        },
      ],
      lastProjects: [
        {
          title: "Site Internet Ministère des finances",
          description:
            "Conception et réalisation du site Internet du ministère en Laravel et Blade",
          image: "/projects/finances.png",
          link: "https://finances.gouv.cd",
        },
        {
          title: "Ouragan Fm",
          description:
            "Site Internet d'un média en Ligne fait en Nuxt js et Wordpress ",
          image: "/projects/ouragan.png",
          link: "https://ouragan.cd",
        },
      ],
    };
  },
};
</script>
