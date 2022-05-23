<template>
  <v-app light>
    <v-toolbar class="white">
      <v-toolbar-side-icon
        ><img :src="imageLink.logo" height="100%"
      /></v-toolbar-side-icon>
      <v-toolbar-title class="mx-0" v-text="title"></v-toolbar-title>
      <p>Thomas Errington</p>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn flat>About</v-btn>
        <v-btn flat>Experience</v-btn>
        <v-btn flat>Projects</v-btn>
        <v-btn flat>Blog</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <section></section>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: function () {
    return {
      title: "Thomas Errington",
      imageLink: {
        logo: "@/assets/logo.png",
      },
    };
  },
  methods: {},
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
