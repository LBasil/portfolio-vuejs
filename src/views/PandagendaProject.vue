<template>
  <div class="container">
    <h2 class="text-center">Premier projet DA2I</h2>
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card mb-4 animated-card">
          <div class="card-body">
            <h5 class="card-title animated-title" data-animation="slide-up">
              Systèmes de gestion de rendez-vous en ligne
            </h5>
            <p class="card-text">
              Dans le cadre de ma formation, j'ai développé un site web de
              gestion de rendez-vous multi-utilisateurs qui permet aux
              utilisateurs de consulter les créneaux disponibles et de saisir
              leurs rendez-vous, en respectant les contraintes spécifiques à
              chaque type de rendez-vous. Le site offre une flexibilité en
              termes de paramétrage et peut être adapté à différentes
              situations, permettant la gestion de plannings avec des
              contraintes variées.
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
                    <li class="list-group-item">Autonomie</li>
                    <li class="list-group-item">Gestion de projet</li>
                    <li class="list-group-item">Rigueur</li>
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
                    <li class="list-group-item">Spring Boot</li>
                    <li class="list-group-item">Boostrap</li>
                    <li class="list-group-item">H2</li>
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
                    <li class="list-group-item">6 semaines</li>
                  </ul>
                </div>
                <div class="col-md-6">
                  <h6
                    class="project-info animated-title"
                    data-animation="slide-up"
                  >
                    Nombre de personnes impliquées
                  </h6>
                  <p>1 personne</p>
                </div>
              </div>
            </div>
            <div class="no-confidential-label">Non confidentiel</div>
          </div>
        </div>
      </div>
    </div>
    <div class="knowledge-exchange">
      <h3 class="text-center">Connaissances acquises</h3>
      <div class="knowledge-exchange-content">
        <p>
          J'ai grâce à ce projet renforcé mes connaissances en lien avec
          l'utilisation du framework Spring Boot. C'était le premier vrai projet
          complexe que je mettais en place sous Spring Boot avec l'utilisation
          de JSP. J'ai ainsi pu avoir une première expérience ce qui m'a permis
          de fournir un deuxième projet encore plus complet et performant que
          celui-ci. Le fait d'être seul pour le réalisé a augmenter ma confiance
          en moi et la confiance que j'ai en ma capacité de fournir un code
          répondant aux besoins de l'utilisateur.
        </p>
      </div>
      <div id="carouselExample" class="carousel slide">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div
              class="d-flex align-items-center justify-content-center carousel-image-container"
            >
              <img
                src="../assets/pandagenda/accueil.png"
                class="d-block img-fluid carousel-image"
                alt="Image 1"
              />
            </div>
          </div>
          <div class="carousel-item">
            <div
              class="d-flex align-items-center justify-content-center carousel-image-container"
            >
              <img
                src="../assets/pandagenda/profil_fr.png"
                class="d-block img-fluid carousel-image"
                alt="Image 2"
              />
            </div>
          </div>
          <div class="carousel-item">
            <div
              class="d-flex align-items-center justify-content-center carousel-image-container"
            >
              <img
                src="../assets/pandagenda/profil_es.png"
                class="d-block img-fluid carousel-image"
                alt="Image 3"
              />
            </div>
          </div>
          <div class="carousel-item">
            <div
              class="d-flex align-items-center justify-content-center carousel-image-container"
            >
              <img
                src="../assets/pandagenda/places.png"
                class="d-block img-fluid carousel-image"
                alt="Image 5"
              />
            </div>
          </div>
          <div class="carousel-item">
            <div
              class="d-flex align-items-center justify-content-center carousel-image-container"
            >
              <img
                src="../assets/pandagenda/creneaux.png"
                class="d-block img-fluid carousel-image"
                alt="Image 7"
              />
            </div>
          </div>
          <div class="carousel-item">
            <div
              class="d-flex align-items-center justify-content-center carousel-image-container"
            >
              <img
                src="../assets/pandagenda/mail.png"
                class="d-block img-fluid carousel-image"
                alt="Image 6"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.animateTitles();
    const carousel = document.getElementById("carouselExample");
    let currentIndex = 0;
    const slides = carousel.querySelectorAll(".carousel-item");

    const showSlide = (index) => {
      slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === index);
      });
    };

    const nextSlide = () => {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
    };

    setInterval(nextSlide, 3000);
  },
  methods: {
    animateTitles() {
      const animatedTitles = document.querySelectorAll(".animated-title");
      animatedTitles.forEach((title) => {
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

.no-confidential-label {
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
  margin-bottom: 20px;
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

.carousel-image-container {
  height: 600px; /* Ajustez la hauteur souhaitée */
  margin-bottom: 25px;
  margin-top: 25px;
}

.carousel-image {
  object-fit: cover;
  height: 100%;
}
</style>
