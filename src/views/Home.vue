<template>
  <div class="home">
    <Intro />
    <Projects />
    <Contact />
  </div>
</template>

<script>
// @ is an alias to /src

import Projects from "@/components/Projects.vue";
import Intro from "@/components/Intro.vue";
import Contact from "@/components/Contact.vue";
export default {
  name: "Home",
  components: {
    Projects,
    Intro,
    Contact,
  },
};
</script>
