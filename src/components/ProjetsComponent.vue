<template>
  <div id="projets">
    <div class="container">
      <h2 class="text-center">Mes Projets</h2>
      <div class="row">
        <div v-for="projet in projets" :key="projet.id" class="col-md-6">
          <div class="card mb-4">
            <img :src="projet.image" class="card-img-top" :alt="projet.titre" />
            <div class="card-body">
              <h5 class="card-title">{{ projet.titre }}</h5>
              <p class="card-text">{{ projet.description }}</p>
              <a :href="projet.lien" class="btn btn-primary">Voir le projet</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjetsComponent",
  data() {
    return {
      projets: [
        {
          id: 1,
          titre: "Projet 1",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          image: "chemin_vers_image_projet_1",
          lien: "#",
        },
        {
          id: 2,
          titre: "Projet 2",
          description: "Nullam condimentum consequat ex sed elementum.",
          image: "chemin_vers_image_projet_2",
          lien: "#",
        },
        // Ajoutez d'autres projets ici
      ],
    };
  },
};
</script>

<style scoped>
/* Ajoutez des styles personnalisés ici */
</style>
