<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <SelectField
        label="Civilité"
        id="civilite"
        v-model="form.civilite"
        :options="civilites"
      />
      <InputField
        label="Nom Complet"
        id="name"
        placeholder="Écrivez Votre Nom complet"
        v-model="form.name"
      />
      <InputField
        label="Adresse Electronique"
        id="email"
        type="email"
        placeholder="Écrivez Votre Adresse Electronique"
        v-model="form.email"
      />
      <InputField
        label="Téléphone"
        id="email"
        type="tel"
        placeholder="Écrivez Votre Numéro de Téléphone"
        v-model="form.phone"
      />
      <SelectField
        label="Type de service"
        id="service"
        v-model="form.service"
        :options="services"
      />
      <SelectField
        label="Type de contrat"
        id="service"
        v-model="form.contrat"
        :options="contrats"
      />

      <b-button type="submit" class="btn-link text-center w-50"
        >Envoyer</b-button
      >
    </b-form>
    {{ form }}
  </div>
</template>

<script>
import InputField from "./InputField.vue";
import SelectField from "./SelectField.vue";
export default {
  name: "Form",
  components: {
    InputField,
    SelectField,
  },
  data() {
    return {
      form: {
        civilite: null,
        name: "",
        email: "",
        phone: "",
        service: null,
        contrat: null,
      },
      civilites: [
        { text: "Civilité", value: null },
        "Monsieur",
        "Madame",
        "Entreprise",
      ],
      services: [
        { text: "Selectionner le type de service", value: null },
        "Développement d'un site Vitrine",
        "Développement d'un site e-commerce",
        "Développement d'une application Mobile",
        "Développement d'une application web sur mesure ",
        "Développement d'une application Desktop sur mesure ",
        "Refonte du Site Internet",
        "Refonte du Site e-commerce",
        "Refonte d'une application Mobile",
        "Refonte d'une application web sur mesure ",
        "Refonte d'une application Desktop sur mesure ",
        "Maintenance de Votre Logiciel",
        "audit de mon système",
      ],
      contrats: [
        { text: "Selectionner le type de contrat", value: null },
        "Contrat à Durée detérminé (CDD)",
        "Contrat à Durée Indetérminé (CDI) ",
        "Contrat de Prestation de Service",
        "Contrat de Maintenance",
        "Contrat de Consultance",
        "Contrat de Formation",
        "Contrat de Télé-Travail",
      ],
      show: true,
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.food = null;
      this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>
