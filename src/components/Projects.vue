<template>
  <div id="project" class="projects__container">
    <h1 class="title" style="padding-bottom: 5vh;">Projects</h1>
    <div class="project__background">
      <div class="container-fluid" style="max-width: 1700px;">
        <div class="projects justify-content-center row ">
          <ProjectCards />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProjectCards from "@/components/ProjectCards.vue";
export default {
  name: "Projects",
  components: {
    ProjectCards,
  },
};
</script>

<style scoped>
.projects__container {
  padding-top: 10vh;
  text-align: center;
}

.project__background {
  padding-top: 60px;
  padding-bottom: 30px;
  background-color: rgb(10, 10, 10);
}
</style>
