<template>
  <div id="contact">
    <div class="container">
      <h2 class="text-center">Contactez-moi</h2>
      <div class="row">
        <div class="col-md-6">
          <form @submit.prevent="submitForm" class="contact-form">
            <div class="form-group">
              <label for="name">Nom</label>
              <input
                type="text"
                class="form-control custom-input"
                id="name"
                required
              />
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input
                type="email"
                class="form-control custom-input"
                id="email"
                required
              />
            </div>
            <div class="form-group">
              <label for="message">Message</label>
              <textarea
                class="form-control custom-input"
                id="message"
                rows="5"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              class="btn btn-primary custom-button"
              :disabled="formDisabled"
            >
              Envoyer
            </button>
          </form>
          <p class="under-development-message" v-if="formDisabled">
            Le formulaire est actuellement indisponible, veuillez me contacter
            par mail.
          </p>
        </div>
        <div class="col-md-6">
          <h4>Informations de contact</h4>
          <p><strong>Email:</strong> basil.lhote@gmail.com</p>
          <p><strong>Téléphone:</strong> 06 51 27 91 93</p>
          <p>
            <strong>Adresse:</strong> 32 rue Allard Dugauquier, Lille, France
          </p>
          <h4>Suivez-moi sur les réseaux sociaux</h4>
          <div class="social-icons">
            <a href="https://github.com/LBasil/" class="social-icon github-icon"
              ><i class="fab fa-github"></i
            ></a>
            <a
              href="https://www.linkedin.com/in/basil-l-h%C3%B4te-a653b8213/"
              class="social-icon linkedin-icon"
              ><i class="fab fa-linkedin"></i
            ></a>
          </div>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col d-flex justify-content-center mb-3">
          <!-- Intégration de la carte -->
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40492.54529652979!2d3.005698435517554!3d50.63112778052203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c2d579b3256e11%3A0x40af13e81646360!2sLille!5e0!3m2!1sfr!2sfr!4v1688045944789!5m2!1sfr!2sfr"
            width="600"
            height="450"
            style="border: 0"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";

export default {
  name: "ContactComponent",
  setup() {
    const formDisabled = ref(false);
    const submitForm = () => {
      // Affiche un message d'avertissement lorsque le formulaire est soumis
      formDisabled.value = true;
    };
    return {
      formDisabled,
      submitForm,
    };
  },
};
</script>

<style scoped>
.social-icons {
  margin-top: 20px;
  display: flex;
  justify-content: center;
}

.social-icon {
  font-size: 32px;
  margin: 0 10px;
  color: #555;
  transition: color 0.3s;
}

.social-icon:hover {
  color: #007bff;
}

.github-icon:hover {
  color: #211f1f;
}

.linkedin-icon:hover {
  color: #0e76a8;
}

.under-development-message {
  text-align: center;
  font-size: 18px;
  color: red;
  margin-top: 50px;
}

/* Ajoutez des styles personnalisés ici */
</style>
