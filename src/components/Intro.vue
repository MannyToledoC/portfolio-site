<template>
  <div id="home" class="container title__container">
    <Stars />
    <div class="row intro__container">
      <div class="head__container col">
        <h1 class="title" style="font-size: 100px;">Hi, I'm Manuel</h1>
        <h1 class="subtitle" style="font-size: 40px;">Software Engineer</h1>
      </div>

      <img
        src="@/assets/new.jpg"
        class="img-fluid"
        style="filter:drop-shadow(0px 8px 10px black); height: 528px; width: 528px;"
        alt=""
      />
    </div>
  </div>
</template>

<script>
import Stars from "@/components/Stars.vue";
export default {
  name: "Intro",
  components: {
    Stars,
  },
};
</script>

<style scoped>
.title__container {
  padding-top: 25vh;
  height: 120vh;
  justify-content: center;
}

.head__container {
  justify-content: right;
  margin-right: 50px;
  text-align: right;
}

.profile {
  justify-content: left;
}

.intro__container {
  z-index: 999;
  /* background-color: rgb(10, 10, 10); */
}
</style>
