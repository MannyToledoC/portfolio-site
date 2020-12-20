<template>
  <NavBar />
  <router-view class="default" />
</template>

<script>
import NavBar from "@/components/NavBar.vue";
export default {
  components: {
    NavBar,
  },
};
</script>

<style>
* {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  font-family: "Dosis";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

::-webkit-scrollbar {
  width: 0px;
  background: transparent;
}

.default {
  background: #111111;
  font-family: "Dosis";
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
