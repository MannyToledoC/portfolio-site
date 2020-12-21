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

@font-face {
  font-family: "SketsaRamadhan";
  src: local("SketsaRamadhan"),
    url(./fonts/sketsa_ramadhan/SketsaRamadhan.otf) format("opentype");
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
