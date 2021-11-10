<template>
  <div class="home">
    <Header />
    <Hero />
    <About />
  </div>
</template>

<script>
// @ is an alias to /src

import Header from "@/components/Header/Header.vue";
import Hero from "@/components/Hero/Hero.vue";
import About from "@/components/About/About.vue";

export default {
  name: "Home",
  components: {
    Header,
    Hero,
    About,
  },
};
</script>
