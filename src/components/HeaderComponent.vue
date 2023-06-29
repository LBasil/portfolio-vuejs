<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <RouterLink class="navbar-brand" to="/">
          <img src="chemin_vers_votre_logo" alt="Logo" />
        </RouterLink>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul class="navbar-nav">
            <li class="nav-item">
              <RouterLink class="nav-link" to="/accueil">Accueil</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/projets">Projets</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/contact">Contact</RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <nav aria-label="breadcrumb" class="bg-light">
      <div class="container">
        <ol class="breadcrumb mb-0">
          <li class="breadcrumb-item">
            <RouterLink to="/">Accueil</RouterLink>
          </li>
          <li class="breadcrumb-item">
            <RouterLink to="/projets">Projets</RouterLink>
          </li>
          <li class="breadcrumb-item active" aria-current="page">Projet 1</li>
        </ol>
      </div>
    </nav>
  </header>
</template>

<script lang="ts">
import { RouterLink } from "vue-router";
export default {
  name: "HeaderComponent",
  components: {
    RouterLink,
  },
};
</script>

<style scoped>
header {
  margin-bottom: 20px;
}

.navbar-brand img {
  height: 30px;
  margin-right: 10px;
}

.breadcrumb {
  margin-bottom: 0;
}

.breadcrumb-item + .breadcrumb-item::before {
  content: "/";
  display: inline-block;
  padding: 0 0.5rem;
  color: #6c757d;
}

.breadcrumb-item + .breadcrumb-item:hover::before {
  color: #007bff;
}

.breadcrumb-item a {
  color: #6c757d;
  text-decoration: none;
}

.breadcrumb-item.active {
  color: #343a40;
}
</style>
