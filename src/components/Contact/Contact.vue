<template>
  <section class="contact">
    <b-row class="flex-wrap-reverse align-items-center">
      <b-col md="6" sm="12"> <Illustration source="/img/contact.gif" /></b-col>
      <b-col md="6" sm="12">
        <SubHeading title="Contact" class="primary-color" />
        <Description
          content=" Si vous avez une question, sentez vous à l'aise, contactez moi."
          class="secondary-color mt-4"
        />
        <Form class="contact__form mt-4" />
      </b-col>
    </b-row>
  </section>
</template>
<script>
import Description from "../Shared/Description.vue";
import Illustration from "../Shared/Illustration.vue";
import SubHeading from "../Shared/SubHeading.vue";
import Form from "./Form.vue";
export default {
  name: "Contact",
  components: {
    Description,
    Illustration,
    SubHeading,
    Form,
  },
};
</script>
