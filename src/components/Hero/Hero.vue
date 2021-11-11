<template>
  <section class="hero">
    <b-row class="flex-wrap-reverse align-items-center">
      <b-col md="6" sm="12">
        <Heading title="FullStack Developer" class="primary-color" />
        <SubHeading
          title="Je tranforme vos besoins dans le numérique."
          class="sub-heading secondary-color mt-4"
        />

        <Description
          content="j'aime résoudre les problèmes avec des solutions propres et
          évolutives. j'ai une véritable passion pour le design et le code."
          class="text-color mt-4"
        />

        <div class="hero__btn mt-5">
          <Bouton title="Me contacter" link="#contact" />
        </div>
      </b-col>
      <b-col md="6" sm="12">
        <Illustration source="/img/bg.gif" />
      </b-col>
    </b-row>
  </section>
</template>
<script>
import Illustration from "../Shared/Illustration.vue";
import Heading from "../Shared/Heading.vue";
import SubHeading from "../Shared/SubHeading.vue";
import Description from "../Shared/Description.vue";
import Bouton from "../Shared/Bouton.vue";

export default {
  name: "Hero",
  components: {
    Illustration,
    Heading,
    SubHeading,
    Description,
    Bouton,
  },
};
</script>
