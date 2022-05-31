<template>
  <v-app light>
    <div>
      <v-toolbar class="toolbar">
        <v-spacer></v-spacer>
        <v-toolbar-items class="toolbar-items">
          <v-btn flat @click="gotoAbout">About</v-btn>
          <v-btn flat @click="gotoExperience">Experience</v-btn>
          <v-btn flat @click="gotoProjects">Projects</v-btn>
          <v-btn flat>Pulsar Creations</v-btn>
          <v-btn icon x-large @click="toggleDarkmode">
            <v-icon>mdi-theme-light-dark</v-icon>
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
    </div>
    <v-content>
      <section>
        <v-parallax dark src="@/assets/image5.png">
          <v-row align="center" justify="center">
            <v-col class="text-center" cols="12">
              <h1 class="text-h2 font-weight-thin mb-4">Thomas Errington</h1>
              <h4 class="subheading">Software Developer</h4>
            </v-col>
          </v-row>
        </v-parallax>
      </section>
      <section class="about" id="about">
        <div class="about-overview">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis
            egestas pretium aenean pharetra magna ac placerat. Euismod nisi
            porta lorem mollis aliquam ut. Placerat orci nulla pellentesque
            dignissim enim sit. Diam maecenas ultricies mi eget mauris pharetra
            et. Gravida neque convallis a cras semper auctor neque vitae tempus.
            Aliquet bibendum enim facilisis gravida neque convallis a cras
            semper. Facilisi cras fermentum odio eu feugiat pretium. Sit amet
            nulla facilisi morbi tempus. Lobortis feugiat vivamus at augue eget
            arcu dictum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis
            egestas pretium aenean pharetra magna ac placerat. Euismod nisi
            porta lorem mollis aliquam ut. Placerat orci nulla pellentesque
            dignissim enim sit. Diam maecenas ultricies mi eget mauris pharetra
            et. Gravida neque convallis a cras semper auctor neque vitae tempus.
            Aliquet bibendum enim facilisis gravida neque convallis a cras
            semper. Facilisi cras fermentum odio eu feugiat pretium. Sit amet
            nulla facilisi morbi tempus. Lobortis feugiat vivamus at augue eget
            arcu dictum.
          </p>
        </div>
      </section>
      <section class="experience" id="experience"></section>
      <section class="projects" id="projects">
        <v-carousel
          cycle
          height="800"
          hide-delimter-background
          show-arrows-on-hover
        >
          <v-carousel-item class="turtle-zoo"
            ><v-sheet></v-sheet
          ></v-carousel-item>
          <v-carousel-item class="public-places"
            ><v-sheet></v-sheet
          ></v-carousel-item>
          <v-carousel-item class="beacons-kontakt"
            ><v-sheet></v-sheet
          ></v-carousel-item>
        </v-carousel>
      </section>
    </v-content>
    <div class="returnTop">
      <v-btn icon @click="gotoTop">
        <v-icon x-large>mdi-arrow-up-bold-circle-outline</v-icon>
      </v-btn>
    </div>
    <v-footer dark padless>
      <v-card class="flex" flat tile>
        <v-card-title class="grey">
          <strong class="subheading">Check out other resrouces ➡️</strong>

          <v-spacer></v-spacer>

          <v-btn class="mx-4" dark icon @click="linkedin">
            <v-icon size="24px"> mdi-linkedin </v-icon>
          </v-btn>
          <v-btn class="mx-4" dark icon @click="github">
            <v-icon size="24px"> mdi-github </v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text class="py-2 white--text text-center">
          ©️ 2022 Thomas Errington. All rights reserved.
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
  }),
  methods: {
    toggleDarkmode: function () {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      localStorage.setItem("dark_theme", this.$vuetify.theme.dark.toString());
    },
    gotoTop: function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    gotoAbout: function () {
      let about = document.getElementById("about");
      about.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    },
    gotoExperience: function () {
      let about = document.getElementById("experience");
      about.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    },
    gotoProjects: function () {
      let about = document.getElementById("projects");
      about.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    },
    linkedin: function () {
      window.open("https://www.linkedin.com/in/erringtontom/", "_blank");
    },
    github: function () {
      window.open("https://www.github.com/thomape", "_blank");
    },
  },
  computed: {
    imgHeight: function () {
      var offset = 320;
      console.log("new image height is " + this.pageHeight - offset);
      return this.pageHeight - offset;
    },
  },

  mounted: function () {
    this.calculateHeight();
  },
};
</script>

<style scoped>
.toolbar {
  height: auto;
  width: auto;
}
.name {
  text-align: center;
}
.image-background {
  height: 200;
}

.about {
  margin: 200px;
  border: 1px solid red;
}
.experience {
  margin: 200px;
  border: 1px solid red;
}
.projects {
  margin: 200px;
  border: 1px solid red;
}
.about-overview {
  font-family: "Times New Roman", Times, serif;
  font-size: 1.5rem;
  max-width: 870px;
  margin-left: auto;
  margin-right: auto;
  line-height: 2rem;
  text-indent: 40px;
}
.about-overview p {
  align-content: center;
}
.returnTop {
  text-align: right;
  padding: 20px;
}
.footer {
  font-style: italic;
  text-align: center;
  font-size: 12px;
}
</style>
