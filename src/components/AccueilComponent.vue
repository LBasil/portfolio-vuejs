<template>
  <div id="accueil">
    <div class="container">
      <h1 class="display-4">Bienvenue sur mon portfolio</h1>
      <p class="lead">Découvrez mes projets et mon parcours professionnel.</p>
      <div class="row">
        <div class="col-md-6">
          <h2>À propos de moi</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae
            lorem ut metus luctus semper. Nullam condimentum consequat ex sed
            elementum.
          </p>
          <p>
            Ut dapibus scelerisque augue, a condimentum enim tempor at. Mauris
            interdum, ligula ac ultricies cursus, tellus felis congue odio, non
            ultrices urna nisi non nisi.
          </p>
        </div>
        <div class="col-md-6">
          <h2>Mes compétences</h2>
          <ul>
            <li>HTML5 / CSS3</li>
            <li>JavaScript / Vue.js</li>
            <li>Ant Design</li>
            <li>Jest / Puppeteer</li>
            <li>Java / Spring boot</li>
          </ul>
        </div>
      </div>

      <div class="row mt-4 align-items-stretch">
        <div class="col-md-6 d-flex">
          <div class="card">
            <img
              src="../assets/projets.png"
              class="card-img-top img-fluid"
              alt="Image 1"
            />
            <div class="card-body">
              <h5 class="card-title">Mes projets</h5>
              <p class="card-text">
                Venez découvrir mes différents projets sous VueJS ou bien Spring
              </p>
              <router-link to="/projets" class="btn btn-primary"
                >Découvrir les projets
              </router-link>
            </div>
          </div>
        </div>
        <div class="col-md-6 d-flex">
          <div class="card">
            <img
              src="../assets/contact.png"
              class="card-img-top img-fluid"
              alt="Image 2"
            />
            <div class="card-body">
              <h5 class="card-title">Me contacter</h5>
              <p class="card-text">
                Vous êtes une entreprise située dans la MEL ? Découvrez comment
                me contacter
              </p>
              <router-link to="/contact" class="btn btn-primary"
                >Me contacter</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "AccueilComponent",
};
</script>

<style scoped>
#accueil {
  padding: 50px 0;
}

.card {
  margin-bottom: 20px;
}

.card-img-top {
  object-fit: fill;
}
</style>
