<template>
  <b-row class="footer__copyright">
    <b-col>Mesutarso©{{ date.getFullYear() }} Tous droits reservés </b-col>
  </b-row>
</template>
<script>
export default {
  name: "Copyright",
  data() {
    return {
      date: new Date(),
    };
  },
};
</script>