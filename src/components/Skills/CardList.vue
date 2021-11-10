<template>
  <div class="skilss__cardList">
    <div class="my-3" v-for="service in services" :key="service.title">
      <SkillsCard
        :cardTitle="service.title"
        :iconClass="service.icon"
        :cardContent="service.content"
      />
    </div>
  </div>
</template>
<script>
import SkillsCard from "./Card.vue";
export default {
  name: "SkillsCardList",
  components: {
    SkillsCard,
  },
  data() {
    return {
      services: [
        {
          title: "WordPress developpement",
          icon: "bi:wordpress",
          content:
            "je developpe les applications sur mesure avec le cms le plus populaire WordPress",
        },
        {
          title: "FullStack developpement",
          icon: "carbon:application-web",
          content:
            "Conception et réalisation des applications web from scratch",
        },
        {
          title: "Mobile Developpement",
          icon: "carbon:application-mobile",
          content:
            "Conception et réalisation des applications mobile from scratch",
        },
      ],
    };
  },
};
</script>
