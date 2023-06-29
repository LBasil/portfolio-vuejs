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
                v-model="formData.name"
                required
              />
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input
                type="email"
                class="form-control custom-input"
                id="email"
                v-model="formData.email"
                required
              />
            </div>
            <div class="form-group">
              <label for="message">Message</label>
              <textarea
                class="form-control custom-input"
                id="message"
                rows="5"
                v-model="formData.message"
                required
              ></textarea>
            </div>
            <button type="submit" class="btn btn-primary custom-button">
              Envoyer
            </button>
          </form>
        </div>
        <div class="col-md-6">
          <h4>Informations de contact</h4>
          <p><strong>Email:</strong> contact@exemple.com</p>
          <p><strong>Téléphone:</strong> 123-456-7890</p>
          <p><strong>Adresse:</strong> 123 rue du Contact, Ville, Pays</p>
          <h4>Suivez-moi sur les réseaux sociaux</h4>
          <div class="social-icons">
            <a href="#" class="social-icon github-icon"
              ><i class="fab fa-github"></i
            ></a>
            <a href="#" class="social-icon linkedin-icon"
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
export default {
  name: "ContactComponent",
  data() {
    return {
      formData: {
        name: "",
        email: "",
        message: "",
      },
    };
  },
  methods: {
    submitForm() {
      // Logique pour envoyer le formulaire
      console.log("Formulaire envoyé !");
    },
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

.contact-form {
  animation: fadeIn 0.8s;
  background-color: #f7f7f7;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.custom-input {
  border-radius: 8px;
  border: none;
  background-color: #eee;
  padding: 10px;
  transition: background-color 0.3s;
}

.custom-input:focus {
  background-color: #fff;
}

.custom-button {
  border-radius: 8px;
  padding: 12px 24px;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 1px;
  background-color: #007bff;
  border: none;
  transition: background-color 0.3s;
}

.custom-button:hover {
  background-color: #0056b3;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Ajoutez des styles personnalisés ici */
</style>
