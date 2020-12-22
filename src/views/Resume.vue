<template>
  <pdf src="@/assets/Manuel_Toledo_Resume.pdf"></pdf>
</template>

<script>
import pdf from "vue-pdf";
export default {
  name: "Resume",
  component: {
    pdf,
  },
};
</script>

<style scoped></style>
