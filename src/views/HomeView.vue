<template>
  <v-app id="home">
    <v-container fluid class="main" style="padding-left:24px; padding-right:24px;">
      <!-- Navbar component -->
      <NavBar />
        <v-container style="max-width: 1325px; padding-left:0px; padding-right:0px;">
          <!-- Head/Welcome component -->
          <WelcomeHead />
          <!-- Experience component -->
          <Experience />
          <!-- Projects component -->
          <Projects />
          <!-- Technologies component -->
          <Technologies />
          <!-- Timeline component -->
          <Timeline />
          <!-- Accomplishments component -->
          <Accomplishments />
          <!-- Contact component -->
          <Contact />
        </v-container>
    </v-container>
    <!-- Footer component -->
    <FooterView/>
  </v-app>
</template>

<script>
import { defineComponent } from 'vue';
import NavBar from '@/components/NavBar.vue';
import FooterView from '@/components/FooterView.vue';
import WelcomeHead from '@/components/WelcomeHead.vue';
import Experience from '@/components/Experience.vue';
import Projects from '@/components/Projects.vue';
import Technologies from '@/components/Technologies.vue';
import Accomplishments from '@/components/Accomplishments.vue';
import Contact from '@/components/Contact.vue';
import Timeline from '@/components/Timeline.vue';

// Components
export default defineComponent({
  name: 'HomeView',
  methods: {},
  setup(){
    return {
      items: [
        {
          img:"@/assets/profilepic.jpg",
        }
      ]
    }
  },
  components: {
    NavBar,
    WelcomeHead,
    Experience,
    Projects,
    Technologies,
    Timeline,
    Accomplishments,
    Contact,
    FooterView,
},
});
</script>

<style>

</style>