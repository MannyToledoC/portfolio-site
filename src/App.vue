<template>
  <!-- <Fire :isLoading="isLoading" /> -->
  <main :class="{ render: isLoading }">
    <NavBar />
    <router-view class="default" />
  </main>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
// import Fire from "@/components/Fire.vue";
export default {
  data() {
    return {
      isLoading: true,
    };
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 0);
  },
  components: {
    NavBar,
    // Fire,
  },
};
</script>

<style>
@font-face {
  font-family: "Dosis";
  src: local("Dosis"),
    url(./fonts/Dosis/Dosis-VariableFont_wght.ttf) format("truetype");
}

* {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  font-family: "Dosis", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.render {
  opacity: 0;
  visibility: hidden;
  height: 100%;
  overflow-y: hidden;
}

::-webkit-scrollbar {
  width: 0px;
  background: transparent;
}

.default {
  background: #111111;
}

.title {
  color: white;
  font-size: 45px;
  font-weight: bold;
}

.subtitle {
  color: white;
  font-size: 23px;
}

h3 {
  color: white;
}
</style>
