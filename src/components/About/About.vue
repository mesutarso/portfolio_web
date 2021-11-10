<template>
  <section class="about">
    <b-row class="flex-wrap align-items-center">
      <b-col md="6" sm="12"> </b-col>
      <b-col md="6" sm="12">
        <div class="about__title">
          <SubHeading
            title="5 ans d'expérience dans le développement web et mobile"
            class="secondary-color"
          />
          <p class="description primary-color">
            Je suis un développeur web passionné par le développement web et
            l'informatique.
          </p>
        </div>
        <div class="about__description">
          <Description
            content="Depuis le début de mon parcours en tant que développeur full-stack il y a près de 5 ans, j'ai travaillé à distance pour des agences, consulté pour le démarrage et collaboré avec des personnes talentueuses à la fois pour les entreprises et les consommateurs. Je suis tranquillement confiant, curieux de nature et travaille continuellement à m'améliorer dans chaque projet."
          />
        </div>
        <div class="about__btn mt-5">
          <Bouton title="Télecharger mon CV" link="" class="btn-link" />
        </div>
      </b-col>
    </b-row>
  </section>
</template>
<script>
import SubHeading from "../Shared/SubHeading.vue";
import Description from "../Shared/Description.vue";
import Bouton from "../Shared/Bouton.vue";
export default {
  name: "About",
  components: {
    SubHeading,
    Description,
    Bouton,
  },
};
</script>