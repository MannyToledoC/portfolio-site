<template>
  <div id="home" class="container title__container">
    <div class="row">
      <div class="head__container col">
        <h1 class="title" style="font-size: 100px;">Hi, I'm Manuel</h1>
        <h1 class="subtitle" style="font-size: 40px;">Software Engineer</h1>
      </div>

      <img
        src="@/assets/new.jpg"
        style="filter:drop-shadow(0px 8px 10px black); height: 528px; width: 528px;"
        alt=""
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Intro",
};
</script>

<style scoped>
.title__container {
  padding-top: 25vh;

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
</style>
