<template>
  <div>
    <b-form @submit="onSubmit" v-if="show">
      <SelectField
        label="Civilité"
        id="civilite"
        v-model="getForm.civilite"
        :options="civilites"
      />
      <InputField
        label="Nom Complet"
        id="name"
        placeholder="Écrivez Votre Nom complet"
        v-model="getForm.name"
      />
      <InputField
        label="Adresse Electronique"
        id="email"
        type="email"
        placeholder="Écrivez Votre Adresse Electronique"
        v-model="getForm.email"
      />
      <InputField
        label="Téléphone"
        id="email"
        type="tel"
        placeholder="Écrivez Votre Numéro de Téléphone"
        v-model="getForm.phone"
      />
      <SelectField
        label="Type de service"
        id="service"
        v-model="getForm.service"
        :options="services"
      />
      <SelectField
        label="Type de contrat"
        id="service"
        v-model="getForm.contrat"
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
import axios from "axios";
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
    onSubmit: function (e) {
      e.preventDefault();
      this.sendForm();
    },
    async sendForm() {
      this.show = false;
      const response = await axios.post("/api/contact", this.form);
      this.form = {
        civilite: null,
        name: "",
        email: "",
        phone: "",
        service: null,
        contrat: null,
      };
      this.show = true;
    },
  },
  computed: {},
};
</script>
