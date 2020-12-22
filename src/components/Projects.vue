<template>
  <div class="projects__container">
    <div class="project__background">
      <h1 id="project" class="title" style="padding-bottom: 5vh;">Projects</h1>

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
#project {
  z-index: 999;
}
.projects__container {
  z-index: 999;
  /* padding-top: 10vh; */
  text-align: center;
}

.project__background {
  z-index: 999;
  padding-top: 75px;
  padding-bottom: 30px;
  background-color: rgb(10, 10, 10);
}
</style>
