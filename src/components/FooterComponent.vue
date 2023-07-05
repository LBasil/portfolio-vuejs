<template>
  <footer class="footer bg-dark text-light">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h3>Mon Portfolio</h3>
          <p>© 2023. Tous droits réservés.</p>
        </div>
        <div class="col-md-6">
          <h3>Contact</h3>
          <p>Email: basil.lhote@gmail.com</p>
          <p>Téléphone: 06 51 27 91 93</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent",
};
</script>

<style scoped>
.footer {
  padding: 20px 0;
}

.footer h3 {
  color: #fff;
}

.footer p {
  color: #ccc;
  margin-bottom: 10px;
}
</style>
