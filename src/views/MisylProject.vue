<template>
  <div class="container">
    <h2 class="text-center">Stage de fin d'études DA2I</h2>
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card mb-4 animated-card">
          <div class="card-body">
            <h5 class="card-title animated-title" data-animation="slide-up">
              Participation à la création d'un framework de développement
            </h5>
            <p class="card-text">
              Depuis le 3 avril, j'ai eu l'opportunité de réaliser un stage au
              sein de l'entreprise Misyl Services, située à Villeneuve d'Ascq.
              Pendant cette période, j'ai pu découvrir et travailler avec un
              framework de programmation appelé VueJS, dans le but de démarrer
              une nouvelle version de l'ERP Orion, utilisé par l'entreprise et
              dans le futur, le transformer en Framework. Je suis donc parti
              d'un Framework et d'une librairie de design que je ne connaissais
              pas, pour finalement fournir une version de démo fonctionnelle,
              possédant son propre interpréteur XML afin d'afficher
              dynamiquement des «Vue» qui stockées sous ce format dans une base
              de données.
            </p>
            <div class="project-details">
              <div class="row">
                <div class="col-md-6">
                  <h6
                    class="project-info animated-title"
                    data-animation="slide-up"
                  >
                    Compétences requises
                  </h6>
                  <ul class="list-group">
                    <li class="list-group-item">Travail d'équipe</li>
                    <li class="list-group-item">Autonomie</li>
                    <li class="list-group-item">Force de proposition</li>
                  </ul>
                </div>
                <div class="col-md-6">
                  <h6
                    class="project-info animated-title"
                    data-animation="slide-up"
                  >
                    Technologies utilisées
                  </h6>
                  <ul class="list-group">
                    <li class="list-group-item">VueJS</li>
                    <li class="list-group-item">Typescript</li>
                    <li class="list-group-item">Ant Design</li>
                  </ul>
                </div>
              </div>
              <div class="row mt-4">
                <div class="col-md-6">
                  <h6
                    class="project-info animated-title"
                    data-animation="slide-up"
                  >
                    Temps investi
                  </h6>
                  <ul class="list-group">
                    <li class="list-group-item">En cours de développement</li>
                    <li class="list-group-item">Temps estimé 560h</li>
                  </ul>
                </div>
                <div class="col-md-6">
                  <h6
                    class="project-info animated-title"
                    data-animation="slide-up"
                  >
                    Nombre de personnes impliquées
                  </h6>
                  <p>
                    4 personnes (chiffre variant entre 1 et 4 suivant la
                    période)
                  </p>
                </div>
              </div>
            </div>
            <div class="confidential-label">Confidentiel</div>
          </div>
        </div>
      </div>
    </div>

    <div class="knowledge-exchange">
      <h3 class="text-center">Échange de connaissances</h3>
      <div class="knowledge-exchange-content">
        <p>
          Mon expérience au sein de cette entreprise m'a permis d'acquérir de
          précieuses connaissances tant sur le plan technique que sur le plan
          humain. J'ai pu approfondir mes compétences en programmation, mais
          j'ai également appris des aspects essentiels du savoir-être et du
          savoir-vivre en milieu professionnel.
        </p>
      </div>
      <div class="knowledge-exchange-content">
        <p>
          En échange, j'ai apporté à l'entreprise des compétences techniques
          spécifiques, une base solide pour le projet et du code réutilisable.
          Mon travail de recherche et d'exploration technique a permis d'élargir
          les possibilités du projet, la réutilisabilité du code et la
          documentation ont contribué à une meilleure efficacité et à une
          maintenance simplifiée.
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  mounted() {
    this.animateTitles();
  },
  methods: {
    animateTitles() {
      const animatedTitles: any = document.querySelectorAll(".animated-title");
      animatedTitles.forEach((title: any) => {
        const animation = title.getAttribute("data-animation");
        title.classList.add(animation);
      });
    },
  },
};
</script>

<style scoped>
.card {
  margin-bottom: 20px;
  animation: slide-up 0.5s ease-out;
}

.card-title,
.project-info {
  font-size: 24px;
  margin-bottom: 10px;
  transition: color 0.3s;
  position: relative;
  display: inline-block;
}

.card-title:hover,
.project-info:hover {
  color: #007bff;
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

.project-details {
  margin-top: 30px;
}

.list-group-item {
  background-color: transparent;
  border: none;
  padding: 0;
  margin-bottom: 5px;
}

.confidential-label {
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

.knowledge-exchange {
  margin-top: 30px;
}

.knowledge-exchange h3 {
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
  color: #007bff;
}

.knowledge-exchange-content {
  background-color: #f8f9fa;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
}

.knowledge-exchange p {
  margin-bottom: 0;
}

@keyframes slide-up {
  0% {
    transform: translateY(20px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

.animated-card {
  background-color: #f8f9fa;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  position: relative;
}

.animated-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, #00b4db, #0083b0);
  z-index: -1;
  transition: transform 0.5s;
}

.animated-card:hover::before {
  transform: translateX(100%);
}

.animated-title::after {
  content: "";
  position: absolute;
  bottom: -5px;
  left: 50%;
  transform: translateX(-50%);
  width: 50px;
  height: 2px;
  background-color: #007bff;
  opacity: 0;
  transition: opacity 0.3s, transform 0.3s;
}

.animated-title:hover::after {
  opacity: 1;
  transform: translateX(-50%) scale(1.2);
}

.project-info:hover::after {
  opacity: 1;
  transform: translateX(-50%) scale(1.2);
}
</style>
