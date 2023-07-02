<template>
  <div class="container">
    <h2 class="text-center">Projet CONFIDENTIEL</h2>
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card mb-4">
          <div class="card-body">
            <h5 class="card-title animated-title" data-animation="slide-up">
              Titre du Projet
            </h5>
            <p class="card-text">
              Description détaillée du projet. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Sed et ultricies eros. Integer
              elementum convallis risus, id scelerisque purus luctus nec. Sed
              eget feugiat mi. Donec dictum, nisl in dictum feugiat, enim diam
              commodo sapien, eu tincidunt nisl metus eu lectus. Proin efficitur
              leo sit amet urna congue, et fringilla eros faucibus. In hac
              habitasse platea dictumst. Donec scelerisque nulla in orci
              porttitor, ac fringilla ipsum feugiat. Sed nec lacinia metus, id
              dapibus nisl. In hac habitasse platea dictumst. Mauris sit amet
              convallis urna. Sed consequat tortor et vulputate ultrices. Nam
              vel turpis sed nunc ultrices commodo. Fusce nec bibendum sem.
              Nullam rhoncus pulvinar nisl. Quisque aliquet odio libero, a
              luctus velit lobortis sed.
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
                    <li class="list-group-item">Compétence 1</li>
                    <li class="list-group-item">Compétence 2</li>
                    <li class="list-group-item">Compétence 3</li>
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
                    <li class="list-group-item">Technologie 1</li>
                    <li class="list-group-item">Technologie 2</li>
                    <li class="list-group-item">Technologie 3</li>
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
                  <p>120 heures</p>
                </div>
                <div class="col-md-6">
                  <h6
                    class="project-info animated-title"
                    data-animation="slide-up"
                  >
                    Nombre de personnes impliquées
                  </h6>
                  <p>3 personnes</p>
                </div>
              </div>
            </div>
            <a href="#" class="btn btn-primary">Voir le projet</a>
            <div class="confidential-label">Confidentiel</div>
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
</style>
