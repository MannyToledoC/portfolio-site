<template>
  <header
    id="nav"
    class="fixed-top nav__transparent"
    :class="{ nav__scrolled: scrolled }"
  >
    <i
      class="fas fa-fire-alt nav-icon"
      style="color: white; font-size: 30px;"
    ></i>
    <!-- <h5 class="name">Toledo</h5> -->
    <nav>
      <ul class="nav__links">
        <li class="nav__list">
          <!-- <a href="#home"><router-link to="/">Home</router-link></a> -->
          <a href="#" v-scroll-to="'#home'">Home</a>
        </li>
        <li class="nav__list">
          <a href="#" v-scroll-to="'#project'">Projects</a>
        </li>
        <li class="nav__list">
          <a href="/resume/Manuel_Toledo_Resume.pdf">Resume</a>
        </li>
        <li class="nav__list">
          <a href="#" v-scroll-to="'#contact'">Contact</a>
        </li>
      </ul>
    </nav>
    <!-- <a class="cta" href="#"><button class="contact__button">Contact</button></a> -->
  </header>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      scrolled: false,
      lastScrollPosition: 0,
    };
  },
  methods: {
    checkScrolled() {
      const scrollPosition = window.scrollY;
      if (scrollPosition >= 200) {
        this.scrolled = true;
      } else {
        this.scrolled = false;
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", this.checkScrolled);
  },
  destroy() {
    window.removeEventListener("scroll", this.checkScrolled);
  },
};
</script>

<style scoped>
#nav {
  display: flex;
  visibility: visible;
  justify-content: space-between;
  align-items: center;
  padding: 30px 10%;
  padding-bottom: 10px;
}

.nav__scrolled {
  background-color: rgba(26, 26, 26, 0.9) !important;
  transition: background-color 400ms linear;
}

.nav__transparent {
  background-color: transparent;
}

.nav__list,
a,
button {
  font-family: "Dosis", sans-serif;
  font-weight: 800;
  font-size: 16px;
  color: white;
  text-decoration: none;
}

.nav__links {
  display: flex;
}

.nav__links li {
  display: inline-block;
  padding: 0px 20px;
}

.nav__links li a {
  transition: all 0.3s ease 0s;
}

.nav__links li a:hover {
  color: rgb(10, 10, 10);
  text-decoration: none;
}

.contact__button {
  background-color: transparent;
  transition: all 0.3s ease 0s;
  border: none;
}

.contact__button:hover {
  color: black;
  border-bottom: 1px white solid;
}

.name {
  font-family: "SketsaRamadhan";
  color: white;
  font-size: 28px;
}
</style>
