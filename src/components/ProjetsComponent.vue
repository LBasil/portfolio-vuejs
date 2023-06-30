<template>
  <div id="projets">
    <div class="container">
      <h2 class="text-center">Mes Projets</h2>
      <div class="row">
        <div v-for="projet in projets" :key="projet.id" class="col-md-6">
          <div class="card">
            <div class="card-inner">
              <div class="project-image">
                <img
                  :src="projet.image"
                  class="card-img-top"
                  :alt="projet.titre"
                />
                <div v-if="projet.privacy" class="privacy-indicator">
                  Confidentiel
                </div>
                <div v-else class="noprivacy-indicator">Non confidentiel</div>
              </div>
              <div class="card-body">
                <h5 class="card-title">{{ projet.titre }}</h5>
                <p class="card-text">{{ projet.description }}</p>
                <a :href="projet.lien" class="btn btn-primary"
                  >Voir le projet</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import projet_misyl from "@/assets/projet_misyl.png";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import projet_spring from "@/assets/projet_tricount.png";
export default {
  name: "ProjetsComponent",
  data() {
    return {
      projets: [
        {
          id: 1,
          titre: "Participation à la création d'un framework de développement",
          description:
            "Stage de fin de Licence Profesionelle DA2I effectué chez Misyl Services du 03/04 au 31/07",
          privacy: true,
          image: projet_misyl,
          lien: "/misyl-project",
        },
        {
          id: 2,
          titre: "Projet web - 'THE DA2I TRICOUNT'",
          description:
            "Projet réalisé durant ma formation DA2I. L'objectif est de créer un système de gestion de comptes entre amis similaire à Tricount, idéal pour organiser des séjours ou gérer les dépenses entre colocataires.",
          privacy: false,
          image: projet_spring,
          lien: "/tricount-project",
        },
        {
          id: 3,
          titre: "Gestion d'agenda inspiré de Doctolib",
          description:
            "Projet réalisé durant ma formation DA2I. Ce projet vise à développer un site web de gestion de rendez-vous multi-utilisateurs, à l'instar de prendreunrendezvous ou Doctolib. Il s'agit d'un framework général permettant d'adapter le site à différentes situations en définissant des paramètres spécifiques.",
          privacy: false,
          image: projet_spring,
          lien: "/doctolib-project",
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
  object-fit: cover;
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
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

.card-inner {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.card-body {
  flex-grow: 1;
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

.privacy-indicator {
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 5px 10px;
  background-color: #dc3545;
  color: white;
  font-weight: bold;
  border-radius: 5px;
  font-size: 12px;
  z-index: 1;
}

.noprivacy-indicator {
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 5px 10px;
  background-color: #29a20d;
  color: white;
  font-weight: bold;
  border-radius: 5px;
  font-size: 12px;
  z-index: 1;
}
</style>
