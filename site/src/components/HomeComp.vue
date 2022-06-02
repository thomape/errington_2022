<template>
  <v-app light>
    <div>
      <v-toolbar class="toolbar">
        <v-spacer></v-spacer>
        <v-toolbar-items class="toolbar-items">
          <v-btn flat @click="gotoAbout">About</v-btn>
          <v-btn flat @click="gotoExperience">Experience</v-btn>
          <v-btn flat @click="gotoProjects">Projects</v-btn>
          <v-btn flat @click="gotoPulsar">Pulsar Creations</v-btn>
          <v-btn flat @click="gotoFoot">Contact</v-btn>
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
          <h2>About</h2>
          <p>
            <i>Welcome to my domain. Take a look around…</i>
          </p>
          <p>
            I am a software developer with an assorted suite of experience
            ranging from website design to image analysis using machine learning
            algorithms with some interesting points in between. In truth, my
            initial intent for a college education did not involve coding of any
            type. I was going to college to become a commercial pilot. While
            flying airplanes still holds a special place to me, I was required
            to take a CS course where I was introduced to the world of coding.
            The following semester I switched programs and have been hooked ever
            since. By happenstance at first and then by choice, I have had the
            opportunity to work with some of the bleeding edge technologies that
            have been introduced within the last five or so years.
          </p>
          <p>
            My personal life has always been about seeking out whatever my focus
            was at the time no matter the distance or the difficulty. I went to
            film school in Arizona for a while, flight school in Florida for a
            spell, spent some time traveling the world in the military and now
            back in my hometown after my travels. I seek out adventure and new
            experiences whenever they are presented.
          </p>
        </div>
      </section>
      <section class="experience" id="experience">
        <div class="experience-overview">
          <h2>Experience</h2>
          <v-row>
            <v-col class="langauges"
              ><h3>Languages</h3>
              <v-card>
                <v-list-item>
                  <v-list-item-title>Python</v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title>C#</v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title>C++</v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title>Java</v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title>Kotlin</v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title>JavaScipt</v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title>HTML</v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title>CSS</v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title>SQL</v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title>GraphQL</v-list-item-title>
                </v-list-item>
              </v-card>
            </v-col>
            <v-col>
              <h3>Technologies</h3>
              <v-card>
                <v-list-item>
                  <v-list-item-title>Git</v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title>Docker</v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title>Kubernetes</v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title>RESTful Web APIs</v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title>SOAP Web services</v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title>Android</v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title>Xamarin Forms</v-list-item-title>
                </v-list-item>
              </v-card>
            </v-col>
            <v-col
              ><h3>Frameworks</h3>
              <v-card>
                <v-list-item>
                  <v-list-item-title>Vue.js</v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title>Node.js</v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title>Django</v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title>Flask</v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title>ASP.NET</v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title>.NET</v-list-item-title>
                </v-list-item>
              </v-card></v-col
            >
          </v-row>
        </div>
      </section>
      <section class="projects" id="projects">
        <div class="projects-overview">
          <h2>Projects</h2>
          <v-carousel
            cycle
            :interval="18000"
            height="800"
            hide-delimter-background
            show-arrows-on-hover
          >
            <v-carousel-item class="turtle-zoo"
              ><v-sheet>
                <v-row>
                  <v-col>
                    <div><img src="@/assets/turtle.jpg" height="500" /></div>
                  </v-col>
                  <v-col>
                    <h3>Capstone Project</h3>
                    <p>
                      The first real project I had the chance to work on was a
                      capstone project that was structure like a real-world
                      software contract. There were actual stakeholders that
                      wanted a real product designed and built for them. Enter
                      our stakeholder from the Toledo Zoo. His vision was to
                      design an app that would be able to identify individual
                      turtles. Think facial recognition but instead of faces it
                      would be a unique pattern on a turtle shell. This was an
                      opportunity to learn machine learning algorithms coupled
                      with image analysis all while helping an endangered
                      species.
                    </p>
                    <p>
                      The goal was to create an app the masses could use to
                      identify, interact with, and even name the turtle if it
                      had not been identified before. Fun for the end-user but
                      would allow for close monitoring of movements and numbers
                      of turtles in the areas that were known to be hotbeds for
                      illegal acquisition of said turtles. At the end of the
                      semester the project was given to the Toledo Zoo to
                      further develop and utilize.
                    </p>
                    <v-btn class="zoo-art" @click="gotoZoo"
                      >Toledo Zoo Article</v-btn
                    >
                  </v-col>
                </v-row>
              </v-sheet></v-carousel-item
            >
            <v-carousel-item class="public-places"
              ><v-sheet>
                <v-row>
                  <v-col>
                    <h3>Public Places</h3>
                    <p>
                      The next exciting project was a green field
                      points-of-interest augmented reality app funded by a small
                      R&D software company. Google had just launched its
                      augmented library and with some experience under my belt
                      in Android development from the turtle project I jumped in
                      headfirst. The app utilized Google’s ARcore augmented
                      reality library which would indicate where certain points
                      of interest were in the surrounding areas. Other features
                      such as maps, advertisements, and data analytics designed
                      in the backend made this an outstanding learning
                      experience. It went from concept to the app store in less
                      than nine months.
                    </p>
                    <v-btn class="public-places" @click="gotoPP"
                      >Public Places</v-btn
                    >
                  </v-col>
                  <v-col>
                    <div><img src="@/assets/AR.jpg" width="600" /></div>
                  </v-col>
                </v-row> </v-sheet
            ></v-carousel-item>
            <v-carousel-item class="beacons-kontakt"
              ><v-sheet>
                <v-row>
                  <v-col
                    ><div><img src="@/assets/web.jpg" height="600" /></div
                  ></v-col>
                  <v-col
                    ><h3>BLE Beacons</h3>
                    <p>
                      I had the opportunity to work with Bluetooth Low Energy
                      beacons that could be used as proximity advertising, asset
                      tracking, gaming, and many other applications. The
                      interesting thing about working with beacons is the
                      connection from the software to the hardware. It’s a bit
                      of the best of both worlds. Many times, writing software
                      yields nothing more than a change of color on a screen,
                      but when using something like BLE beacons the interaction
                      is rooted in the physical world.
                    </p></v-col
                  >
                </v-row></v-sheet
              ></v-carousel-item
            >
            <v-carousel-item class="pulsar-creations"
              ><v-sheet>
                <v-row>
                  <v-col
                    ><h3>Pulsar Creations</h3>
                    <p>
                      I had the opportunity to work with Bluetooth Low Energy
                      beacons that could be used as proximity advertising, asset
                      tracking, gaming, and many other applications. The
                      interesting thing about working with beacons is the
                      connection from the software to the hardware. It’s a bit
                      of the best of both worlds. Many times, writing software
                      yields nothing more than a change of color on a screen,
                      but when using something like BLE beacons the interaction
                      is rooted in the physical world.
                    </p>
                    <v-btn class="pulsar-link" @click="gotoPulsar"
                      >Pulsar Creations</v-btn
                    ></v-col
                  >
                  <v-col
                    ><div><img src="@/assets/pulsar.jpg" height="800" /></div
                  ></v-col> </v-row></v-sheet
            ></v-carousel-item>
          </v-carousel>
        </div>
      </section>
    </v-content>
    <div class="returnTop">
      <v-btn icon @click="gotoTop">
        <v-icon x-large>mdi-arrow-up-bold-circle-outline</v-icon>
      </v-btn>
    </div>
    <v-footer dark padless id="foot">
      <v-card class="flex" flat tile>
        <v-card-title class="links">
          <v-btn class="mx-4" dark icon @click="linkedin">
            <v-icon size="24px"> mdi-linkedin </v-icon>
          </v-btn>
          <v-btn class="mx-4" dark icon @click="github">
            <v-icon size="24px"> mdi-github </v-icon>
          </v-btn>
          <v-btn @click="sendEmail">Email</v-btn>
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
    gotoFoot: function () {
      let about = document.getElementById("foot");
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
    gotoZoo: function () {
      window.open(
        "http://www.toledozoo.org/SafarEmail/2018/05_31_18-PFF.html",
        "_blank"
      );
    },
    gotoPP: function () {
      window.open(
        "https://www.senecio.com/about-software-development",
        "_blank"
      );
    },
    gotoPulsar: function () {
      window.open("https://www.pulsarcreations.com", "_blank");
    },
    sendEmail: function () {
      let link = "mailto:tom.errington58@gmail.com";
      window.location.href = link;
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
.about-overview h2 {
  padding-left: 50px;
  padding-bottom: 50px;
  font-size: 3rem;
}
.about-overview p {
  align-content: center;
}
.experience {
  /* background-color: #3a405a; */
  background-color: #456990;
}
.experience-overview {
  font-family: "Times New Roman", Times, serif;
  font-size: 1.5rem;
  max-width: 870px;
  margin-left: auto;
  margin-right: auto;
  line-height: 2rem;
  text-indent: 40px;
}
.experience-overview h2 {
  padding-left: 50px;
  padding-bottom: 50px;
  padding-top: 50px;
  font-size: 3rem;
}
.projects {
  margin: 200px;
  border: 1px solid #456990;
}
.projects-overview {
  font-family: "Times New Roman", Times, serif;
  font-size: 1.5rem;
  margin-left: auto;
  margin-right: auto;
  line-height: 2rem;
  text-indent: 40px;
}
.projects-overview h2 {
  padding-left: 50px;
  padding-bottom: 50px;
  padding-top: 50px;
  font-size: 3rem;
}
.projects-overview h3 {
  padding-left: 20px;
  padding-bottom: 20px;
  padding-top: 20px;
  font-size: 1.5rem;
}
.projects-overview p {
  padding: 20px;
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
.links {
  background-color: #456990;
  align-items: center;
}
</style>
