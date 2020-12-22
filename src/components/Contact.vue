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
    <div class="madeby__container">
      <small class="contact__madeby"
        >© Manuel Toledo. All Rights Reserved</small
      >
      <small class="contact__madeby">Made with Vue.js and Boostrap 5</small>
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
  transition: all 0.3s ease 0s;
}

.linkedin:hover {
  color: white;
  cursor: pointer;
  font-size: 50px;
}

.github {
  size: 20px;
  color: white;
  margin: 10px;
  transition: all 0.3s ease 0s;
}

.github:hover {
  color: white;
  cursor: pointer;
  font-size: 50px;
}

.email {
  size: 20px;
  color: white;
  margin: 10px;
  transition: all 0.3s ease 0s;
}

.email:hover {
  color: white;
  cursor: pointer;
  font-size: 50px;
}
.madeby__container {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-bottom: 30px;
}
.contact__madeby {
  color: white;
}
</style>
