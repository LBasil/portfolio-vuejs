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
  </header>
</template>

<script lang="ts">
import { RouterLink } from "vue-router";
export default {
  name: "HeaderComponent",
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
</style>
