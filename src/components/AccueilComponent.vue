<template>
  <div id="accueil">
    <div class="container">
      <h1 class="display-4">Bienvenue sur mon portfolio</h1>
      <p class="lead">Découvrez mes projets et mon parcours professionnel.</p>
      <div class="row">
        <div class="col-md-6">
          <h2 class="section-title">À propos de moi</h2>
          <div class="section-content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vitae lorem ut metus luctus semper. Nullam condimentum consequat
              ex sed elementum.
            </p>
            <p>
              Ut dapibus scelerisque augue, a condimentum enim tempor at. Mauris
              interdum, ligula ac ultricies cursus, tellus felis congue odio,
              non ultrices urna nisi non nisi.
            </p>
          </div>
        </div>
        <div class="col-md-6">
          <h2 class="section-title">Mes compétences</h2>
          <ul class="competences-list">
            <li>
              <span class="icon"><i class="fab fa-html5"></i></span>
              <span class="text">HTML5 / CSS3</span>
            </li>
            <li>
              <span class="icon"><i class="fab fa-js"></i></span>
              <span class="text">JavaScript / Vue.js</span>
            </li>
            <li>
              <span class="icon"><i class="fas fa-cogs"></i></span>
              <span class="text">Ant Design</span>
            </li>
            <li>
              <span class="icon"><i class="fas fa-check-circle"></i></span>
              <span class="text">Jest / Puppeteer</span>
            </li>
            <li>
              <span class="icon"><i class="fab fa-java"></i></span>
              <span class="text">Java / Spring boot</span>
            </li>
            <li>
              <span class="icon"><i class="fab fa-user"></i></span>
              <span class="text">Gestion de projet</span>
            </li>
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
  transition: transform 0.3s;
}

.card:hover {
  transform: translateY(-10px);
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
}

.card-img-top {
  object-fit: cover;
}

.card-body {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card-title {
  font-size: 1.2rem;
  margin-bottom: 10px;
}

.card-text {
  margin-bottom: 15px;
}

.btn-primary {
  align-self: flex-start;
}

@media (max-width: 767px) {
  .card {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .card-img-top {
    margin-bottom: 15px;
  }

  .btn-primary {
    align-self: center;
  }
}

.competences-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}

.competences-list li {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  width: 50%;
}

.competences-list .icon {
  margin-right: 10px;
}

.competences-list .text {
  font-weight: bold;
}

.competences-list li {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  width: 50%;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.6s ease forwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
