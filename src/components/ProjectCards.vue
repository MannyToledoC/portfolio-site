<template>
  <div class="col-lg-4 col-md-6">
    <a
      href="/projects/RoboticsAcademy"
      class="card project__card project__anchor"
    >
      <img
        src="/images/recording.gif"
        class="card-img-top"
        alt=""
        style="max-height: 300px;"
      />
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
        <div class="project__link">
          <object>
            <a href="https://roboticsacademy.fiu.edu/" target="_blank">
              <i class="fas fa-share"></i>
            </a>
          </object>
        </div>
      </div>
    </a>
  </div>

  <div class="col-lg-4 col-md-6">
    <a href="/projects/midas" class="card project__card project__anchor">
      <img
        src="/images/Sample.gif"
        class="card-img-top"
        alt=""
        style="max-height: 300px;"
      />
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
        <div class="project__link">
          <object>
            <a href="https://github.com/MannyToledoC/MIDAS" target="_blank">
              <i class="fab fa-github github"></i>
            </a>
          </object>
        </div>
      </div>
    </a>
  </div>

  <div class="col-lg-4 col-md-6">
    <a href="/projects/resolution" class="card project__card project__anchor">
      <img
        src="https://picsum.photos/200/300"
        class="card-img-top"
        alt=""
        style="max-height: 300px;"
      />
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
          Changes monitor resolution once a desired application runs or closes
        </p>
        <div class="project__link">
          <object>
            <a
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
    <a href="/projects/resolution" class="card project__card project__anchor">
      <img
        src="https://picsum.photos/200/300"
        class="card-img-top"
        alt=""
        style="max-height: 300px;"
      />
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
          Changes monitor resolution once a desired application runs or closes
        </p>
        <div class="project__link">
          <object>
            <a
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
    <a href="/projects/resolution" class="card project__card project__anchor">
      <img
        src="https://picsum.photos/200/300"
        class="card-img-top"
        alt=""
        style="max-height: 300px;"
      />
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
          Changes monitor resolution once a desired application runs or closes
        </p>
        <div class="project__link">
          <object>
            <a
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
</template>

<script>
export default {
  name: "ProjectCards",
};
</script>

<style scoped>
.project__card {
  min-height: 400px;
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

/* .project__link {
  grid-column: 2/3;
  grid-row: 2/3;
} */

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
}

.project__card:hover {
  cursor: pointer;
  transform: scale(1.1);
  transition: all 0.3s ease 0s;
}

.project__link:hover {
  color: rgb(10, 10, 10);
}

.project__anchor:hover {
  color: white;
  text-decoration: none;
}

a {
  color: white;
}
</style>
