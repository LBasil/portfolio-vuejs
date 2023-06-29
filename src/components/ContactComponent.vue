<template>
  <div id="contact">
    <div class="container">
      <h2 class="text-center">Contactez-moi</h2>
      <div class="row">
        <div class="col-md-6">
          <form>
            <div class="form-group">
              <label for="name">Nom</label>
              <input
                type="text"
                class="form-control"
                id="name"
                v-model="formData.name"
                required
              />
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input
                type="email"
                class="form-control"
                id="email"
                v-model="formData.email"
                required
              />
            </div>
            <div class="form-group">
              <label for="message">Message</label>
              <textarea
                class="form-control"
                id="message"
                rows="5"
                v-model="formData.message"
                required
              ></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Envoyer</button>
          </form>
        </div>
        <div class="col-md-6">
          <h4>Informations de contact</h4>
          <p><strong>Email:</strong> contact@exemple.com</p>
          <p><strong>Téléphone:</strong> 123-456-7890</p>
          <p><strong>Adresse:</strong> 123 rue du Contact, Ville, Pays</p>
          <h4>Suivez-moi sur les réseaux sociaux</h4>
          <div class="social-icons">
            <a href="#" class="social-icon"><i class="fab fa-facebook"></i></a>
            <a href="#" class="social-icon"><i class="fab fa-twitter"></i></a>
            <a href="#" class="social-icon"><i class="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
};
</script>

<style scoped>
.social-icons {
  margin-top: 20px;
}

.social-icon {
  font-size: 24px;
  margin-right: 10px;
}

/* Ajoutez des styles personnalisés ici */
</style>
