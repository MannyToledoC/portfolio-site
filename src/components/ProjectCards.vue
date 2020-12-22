<template>
  <div class="col-lg-4 col-md-6">
    <a
      href="https://roboticsacademy.fiu.edu/"
      target="_blank"
      class="card project__card project__anchor"
    >
      <!-- <img
        src="/images/recording.gif"
        class="card-img-top"
        alt=""
        style="max-height: 300px;"
      /> -->
      <div class="card-body">
        <div class="card-title project__title">
          Robotics Academy
        </div>
        <div class="project__badge">
          <span class="badge badge-dark lang-badge">Laravel</span>
          <span class="badge badge-dark lang-badge">PHP</span>
          <span class="badge badge-dark lang-badge">HTML</span>
          <span class="badge badge-dark lang-badge">CSS</span>
          <span class="badge badge-dark lang-badge">JS</span>
          <span class="badge badge-dark lang-badge">MySQL</span>
          <span class="badge badge-dark lang-badge">Scrum</span>
        </div>
        <p class="project__info">
          A web application focused on teaching robotics courses to students,
          worked on for Capstone II. Worked on creating a quiz system for
          instructors and a user management system for admins.
        </p>
        <div class="project__link card-footer">
          <object>
            <a
              class="project__icon"
              href="https://roboticsacademy.fiu.edu/"
              target="_blank"
            >
              <i class="fas fa-share"></i>
            </a>
          </object>
        </div>
      </div>
    </a>
  </div>

  <div class="col-lg-4 col-md-6">
    <a
      href="https://github.com/MannyToledoC/MIDAS"
      target="_blank"
      class="card project__card project__anchor"
    >
      <!-- <img
        src="/images/Sample.gif"
        class="card-img-top"
        alt=""
        style="max-height: 300px;"
      /> -->
      <div class="card-body">
        <div class="card-title project__title">
          MIDAS
        </div>
        <div class="project__badge">
          <span class="badge badge-dark lang-badge">UML</span>
          <span class="badge badge-dark lang-badge">Architecture</span>
          <span class="badge badge-dark lang-badge">Design </span>
        </div>
        <p class="project__info">
          A mobile and web financing application designed for Software
          Engineering II. Designed the system using StarUML and implemented
          architectural and design patterns.
        </p>
        <div class="project__link card-footer">
          <object>
            <a
              class="project__icon"
              href="https://github.com/MannyToledoC/MIDAS"
              target="_blank"
            >
              <i class="fab fa-github github"></i>
            </a>
          </object>
        </div>
      </div>
    </a>
  </div>

  <div class="col-lg-4 col-md-6">
    <a
      href="https://github.com/MannyToledoC/Automatic-Resolution-Changer"
      target="_blank"
      class="card project__card project__anchor"
    >
      <!-- <img
        src="https://picsum.photos/200/300"
        class="card-img-top"
        alt=""
        style="max-height: 300px;"
      /> -->
      <div class="card-body">
        <div class="card-title project__title">
          Automatic-Resolution-Changer
        </div>
        <div class="project__badge">
          <span class="badge badge-dark lang-badge">Python</span>
          <span class="badge badge-dark lang-badge">PySimpleGUI</span>
          <span class="badge badge-dark lang-badge">QRes</span>
          <span class="badge badge-dark lang-badge">Processes</span>
        </div>
        <p class="project__info">
          Changes monitor resolution once a desired application runs or closes.
          Incorporated libraries to streamline functionality. Stored user input
          in a local JSON file.
        </p>
        <div class="project__link card-footer">
          <object>
            <a
              class="project__icon"
              href="https://github.com/MannyToledoC/Automatic-Resolution-Changer"
              target="_blank"
            >
              <i class="fab fa-github github"></i>
            </a>
          </object>
        </div>
      </div>
    </a>
  </div>

  <div class="col-lg-4 col-md-6">
    <a
      href="https://github.com/MannyToledoC/Weather"
      target="_blank"
      class="card project__card project__anchor"
    >
      <!-- <img
        src="https://picsum.photos/200/300"
        class="card-img-top"
        alt=""
        style="max-height: 300px;"
      /> -->
      <div class="card-body">
        <div class="card-title project__title">
          Weather
        </div>
        <div class="project__badge">
          <span class="badge badge-dark lang-badge">Java</span>
          <span class="badge badge-dark lang-badge">OpenWeatherAPI</span>
          <span class="badge badge-dark lang-badge">IPAPI</span>
          <span class="badge badge-dark lang-badge">GSON</span>
        </div>
        <p class="project__info">
          A desktop application that displays user weather and location
          information. Used two different apis to determine nessary user
          information while using GSON to manipulate the json replies.
        </p>
        <div class="project__link card-footer">
          <object>
            <a
              class="project__icon"
              href="https://github.com/MannyToledoC/Weather"
              target="_blank"
            >
              <i class="fab fa-github github"></i>
            </a>
          </object>
        </div>
      </div>
    </a>
  </div>

  <div class="col-lg-4 col-md-6">
    <div class="card project__card project__anchor in__progress">
      <!-- <img
        src="https://picsum.photos/200/300"
        class="card-img-top"
        alt=""
        style="max-height: 300px;"
      /> -->
      <div class="card-body">
        <div class="card-title project__title">
          Henry Website
        </div>
        <div class="project__badge">
          <span class="badge badge-dark lang-badge">HTML</span>
          <span class="badge badge-dark lang-badge">CSS</span>
          <span class="badge badge-dark lang-badge">JavaScript</span>
          <span class="badge badge-dark lang-badge">jQuery</span>
          <span class="badge badge-dark lang-badge">MySQL</span>
        </div>
        <p class="project__info">
          A web application that pulls Book data from a local database. Utilizes
          node.js and express.js to deploy on a local machine. Retrieves stored
          books using SQL queries.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectCards",
};
</script>

<style scoped>
.project__card {
  /* min-height: 400px; */
  min-height: 250px;
  margin-bottom: 30px;
  background-color: rgb(24, 24, 24);
  color: white;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
}

.project__title {
  font-family: "Dosis";
  margin: 10px;
  text-align: left;
  font-size: 20px;
}

.project__badge {
  font-family: "Dosis";
  text-align: left;
  font-size: 17px;
  margin: 10px;
}

.lang-badge {
  background-color: rgb(10, 10, 10);
}

.project__info {
  font-family: "Dosis";
  text-align: left;
  margin: 10px;
  padding-top: 10px;
}

.project__link {
  text-align: right;
  transition: all 0.3s ease 0s;
}

.project__card:hover {
  cursor: pointer;
  transform: scale(1.1);
  transition: all 0.3s ease 0s;
  z-index: 2;
}

.project__link:hover {
  text-decoration: none;
}

.project__anchor:hover {
  color: white;
  text-decoration: none;
}

.project__icon {
  transition: all 0.3s ease 0s;
}

.project__icon:hover {
  color: white;
  font-size: 25px;
}
.card-footer {
  background: transparent;
}

.in__progress {
  cursor: crosshair;
}

a {
  color: white;
}
</style>
