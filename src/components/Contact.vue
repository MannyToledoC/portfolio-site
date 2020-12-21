<template>
  <footer>
    <div id="contact" class="contact__container">
      <h1 class="title">
        Reach out to me!
      </h1>
      <div class="social__container">
        <a href="https://www.linkedin.com/in/manueltoledoc/" target="_blank"
          ><i class="fab fa-linkedin-in fa-2x linkedin"></i
        ></a>
        <a href="https://github.com/MannyToledoC" target="_blank"
          ><i class="fab fa-github fa-2x github"></i
        ></a>
        <i class="fas fa-envelope fa-2x email"></i>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Contact",
};
</script>

<style scoped>
.contact__container {
  padding-top: 10vh;
  margin-left: 10vw;
  padding-bottom: 10vh;
}

.linkedin {
  color: white;
  margin: 10px;
  margin-left: 0px;
}

.linkedin:hover {
  color: #2867b2;
  cursor: pointer;
}

.github {
  size: 20px;
  color: white;
  margin: 10px;
}

.github:hover {
  color: #4078c0;
  cursor: pointer;
}

.email {
  size: 20px;
  color: white;
  margin: 10px;
}

.email:hover {
  color: #4078c0;
  cursor: pointer;
}
</style>
