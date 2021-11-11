<template>
  <div class="home">
    <Header />
    <Hero />
    <About />
    <Skills />
    <Contact />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src

import Header from "@/components/Header/Header.vue";
import Hero from "@/components/Hero/Hero.vue";
import About from "@/components/About/About.vue";
import Skills from "@/components/Skills/Skills.vue";
import Footer from "@/components/Footer/Footer.vue";
import Contact from "@/components/Contact/Contact.vue";

export default {
  name: "Home",
  components: {
    Header,
    Hero,
    About,
    Skills,
    Contact,
    Footer,
  },
};
</script>
