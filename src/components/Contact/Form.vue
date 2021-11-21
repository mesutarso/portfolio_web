<template>
  <div>
    <b-form @submit.stop.prevent="onSubmit">
      <b-form-group
        id="civilite-group-2"
        label="Civilités"
        label-for="civilite"
      >
        <b-form-select
          id="civilite"
          name="civilite"
          v-model="form.civilite"
          v-validate="{ required: true }"
          :options="civilites"
          :state="validateState('civilite')"
          aria-describedby="civilite-live-feedback"
          data-vv-as="Civilité"
        ></b-form-select>

        <b-form-invalid-feedback id="civilite-live-feedback">{{
          veeErrors.first("civilite")
        }}</b-form-invalid-feedback>
      </b-form-group>
      <b-form-group id="noms-group-1" label="Nom Complet" label-for="noms">
        <b-form-input
          id="noms"
          name="noms"
          v-model="form.noms"
          v-validate="{ required: true, min: 3 }"
          :state="validateState('noms')"
          aria-describedby="noms-live-feedback"
          data-vv-as="Noms"
        ></b-form-input>

        <b-form-invalid-feedback id="noms-live-feedback">{{
          veeErrors.first("noms")
        }}</b-form-invalid-feedback>
      </b-form-group>
      <b-form-group id="email-group-1" label="Email" label-for="email">
        <b-form-input
          id="email"
          name="email"
          v-model="form.email"
          v-validate="{ required: true, min: 3 }"
          :state="validateState('email')"
          aria-describedby="email-live-feedback"
          data-vv-as="email"
        ></b-form-input>

        <b-form-invalid-feedback id="email-live-feedback">{{
          veeErrors.first("email")
        }}</b-form-invalid-feedback>
      </b-form-group>
      <b-form-group id="phone-group-1" label="Telephone" label-for="phone">
        <b-form-input
          id="phone"
          name="phone"
          v-model="form.telephone"
          type="tel"
          v-validate="{ required: true, min: 3 }"
          :state="validateState('phone')"
          aria-describedby="phone-live-feedback"
          data-vv-as="phone"
        ></b-form-input>

        <b-form-invalid-feedback id="phone-live-feedback">{{
          veeErrors.first("phone")
        }}</b-form-invalid-feedback>
      </b-form-group>
      <b-form-group
        id="service-group-2"
        label="Type de Service"
        label-for="service"
      >
        <b-form-select
          id="service"
          name="service"
          v-model="form.service"
          v-validate="{ required: true }"
          :options="services"
          :state="validateState('service')"
          aria-describedby="service-live-feedback"
          data-vv-as="Civilité"
        ></b-form-select>

        <b-form-invalid-feedback id="service-live-feedback">{{
          veeErrors.first("service")
        }}</b-form-invalid-feedback>
      </b-form-group>
      <b-form-group
        id="contrat-group-2"
        label="Type de contrat"
        label-for="contrat"
      >
        <b-form-select
          id="contrat"
          name="contrat"
          v-model="form.contrat"
          v-validate="{ required: true }"
          :options="contrats"
          :state="validateState('contrat')"
          aria-describedby="contrat-live-feedback"
          data-vv-as="Civilité"
        ></b-form-select>

        <b-form-invalid-feedback id="contrat-live-feedback">{{
          veeErrors.first("contrat")
        }}</b-form-invalid-feedback>
      </b-form-group>

      <b-button type="submit" class="btn-link">Envoyer la demande</b-button>
    </b-form>
  </div>
</template>



<script>
export default {
  name: "Form",
  data() {
    return {
      foods: [
        { value: null, text: "Choose..." },
        { value: "apple", text: "Apple" },
        { value: "orange", text: "Orange" },
      ],
      form: {
        civilite: null,
        nom: "",
        email: "",
        telephone: "",
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
    };
  },
  methods: {
    validateState(ref) {
      if (
        this.veeFields[ref] &&
        (this.veeFields[ref].dirty || this.veeFields[ref].validated)
      ) {
        return !this.veeErrors.has(ref);
      }
      return null;
    },
    resetForm() {
      this.form = {
        name: null,
        food: null,
      };

      this.$nextTick(() => {
        this.$validator.reset();
      });
    },
    onSubmit() {
      this.$validator.validateAll().then((result) => {
        if (!result) {
          return;
        }
      });
    },
  },
};
</script>