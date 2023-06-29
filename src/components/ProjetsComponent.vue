<template>
  <div id="projets">
    <div class="container">
      <h2 class="text-center">Mes Projets</h2>
      <div class="row">
        <div v-for="projet in projets" :key="projet.id" class="col-md-6">
          <div class="card mb-4">
            <div class="project-image">
              <img
                :src="projet.image"
                class="card-img-top"
                :alt="projet.titre"
              />
            </div>
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
        {
          id: 3,
          titre: "Projet 3",
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
.project-image {
  position: relative;
  overflow: hidden;
  height: 300px;
}

.project-image::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  opacity: 0;
  transition: opacity 0.3s;
}

.project-image:hover::before {
  opacity: 1;
}

.card {
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

.card-body {
  padding: 20px;
}

.card-title {
  font-size: 24px;
  margin-bottom: 10px;
}

.card-text {
  margin-bottom: 15px;
}

.btn-primary {
  background-color: #007bff;
  border-color: #007bff;
  transition: background-color 0.3s, border-color 0.3s;
}

.btn-primary:hover {
  background-color: #0056b3;
  border-color: #0056b3;
}
</style>
