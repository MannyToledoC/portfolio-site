<template>
  <vue-particles
    class="attempt"
    color="#dedede"
    :particleOpacity="0.7"
    :particlesNumber="50"
    shapeType="circle"
    :particleSize="4"
    linesColor="#dedede"
    :linesWidth="1"
    :lineLinked="true"
    :lineOpacity="0"
    :linesDistance="150"
    :moveSpeed="2"
    :hoverEffect="true"
    hoverMode="grab"
    :clickEffect="true"
    clickMode="push"
  >
    <!-- color="#dedede" -->
  </vue-particles>
</template>

<script>
import "particles.js";
export default {
  name: "Stars",
};
</script>

<style scoped>
.attempt {
  z-index: 0;
  width: 100%;
  height: 120%;
  position: absolute;
  top: 0;
  left: 0;
}
</style>
