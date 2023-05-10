<template>
<!-- Head/Welcome component -->
<v-container fluid class="mt-16 px-0" id="about">
    <v-row class="mb-1">
      <v-col cols="12" md="8" class="py-0" style="padding-right: 12px;">
        <div class="container" style="display:inline-block; max-width: 100%;">
          <h1 class="typewriter pb-7">
            Hi there, Welcome to my Developer Portfolio!
          </h1>  
        </div>
        <p class="pfont pb-8">
          I am <strong><em>Teo Sean, an aspiring Full Stack Developer.</em></strong>
          I am passionate about building products that bring about meaning, benefits and a positive impact on the users that use them.
        </p>
        <p class="pfont">
          Feel free to take a look at my portfolio and do not hesitate to connect with me via any of my socials in the
          navbar! Alternatively, you may drop me an email for anything under the sun 
          by clicking on the Contact button in the navbar 😎, thank you for your time!             
        </p>
      </v-col>
      <v-col cols="12" sm="12" md="4" class="image-col" style="display: flex; flex-direction: column; justify-content: center; text-align:left">
        <v-img src="@/assets/profilepic2.jpg" class="image"></v-img>
      </v-col>
    </v-row>
    <!-- <v-row>
      <v-col cols="12" md="8">
        <v-btn text @click="scroll('experience')" class="text-none text-wrap button">Find out more!</v-btn>
      </v-col>
    </v-row> -->
    <v-row class="mt-4">
        <div id="mouse-scroll" :class="{ 'hidden': showArrow }">
          <div class="mouse">
            <div class="mouse-in"></div>
          </div>
          <div>
            <span class="down-arrow-1"></span>
            <span class="down-arrow-2"></span>
            <span class="down-arrow-3"></span>
          </div>
        </div>   
    </v-row>
</v-container>
</template>

<script>
import "@fontsource/space-grotesk";
export default {
  data() {
    return {
      showArrow: false,
      lastScrollTop: 0
    };
  },
  methods: {
      scroll(name) {
          const element = document.getElementById(name);
          element.scrollIntoView({behavior: 'smooth'});
      },
      onScroll() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > this.lastScrollTop) {
          // Scrolling down
          this.showArrow = true;
        } else {
          // Scrolling up
          this.showArrow = false;
        }
        this.lastScrollTop = scrollTop;
      } 
  },
  mounted() {
      window.addEventListener('scroll', this.onScroll);
  },
  unmounted() {
      window.removeEventListener('scroll', this.onScroll);
  },
}
</script>

<style>
.main{
    background-color: #0F1624; 
    color: hsl(204,23.8%,95.9%); 
    font-family: Space Grotesk;
}
.headerfont{
  font-size: 3.5rem;
}
/*for gradient text effect: background-image: linear-gradient(45deg, hsl(0, 0%, 50%), hsl(0, 0%, 100%));
background-clip: text;
color: transparent;*/
.typewriter{
  font-size: 2.55rem;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  animation:
    typing 3.5s steps(44) 1;
}
/* typing effect */
@keyframes typing {
  from {width: 0}
  to {width: 100%}
}
@media (max-width: 1380px) {
  .typewriter{
    font-size: 2.4rem;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    animation:
      typing 3.5s steps(44) 1;
  }
}
@media (max-width: 1310px) {
  .typewriter{
    font-size: 2.2rem;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    animation:
      typing 3.5s steps(44) 1;
  }
}
@media (max-width: 1205px) {
  .typewriter{
    font-size: 2rem;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    animation:
      typing 3.5s steps(44) 1;
  }
}
@media (max-width: 1125px) {
  .typewriter{
    font-size: 1.9rem;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    animation:
      typing 3.5s steps(44) 1;
  }
}
@media (max-width: 1050px) {
  .typewriter{
    font-size: 1.75rem;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    animation:
      typing 3.5s steps(44) 1;
  }
}
@media (max-width: 975px) and (min-width: 960px) {
  .typewriter{
    font-size: 1.65rem !important;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    animation:
      typing 3.5s steps(44) 1;
  }
}
@media (max-width: 960px) {
  .typewriter {
    font-size: 2.3rem;
    width: 100%;
    overflow: hidden;
    animation:
      typing 3.5s steps(44) 1;
  }
}
@media (max-width: 860px) {
  .typewriter {
    font-size: 2rem;
    width: 100%;
    overflow: hidden;
    animation:
      typing 3.5s steps(44) 1;
  }
}
@media (max-width: 750px) {
  .typewriter {
    font-size: 1.8rem;
    width: 100%;
    overflow: hidden;
    animation:
      typing 3.5s steps(44) 1;
  }
}
@media (max-width: 685px) {
  .typewriter {
    font-size: 1.58rem;
    width: 100%;
    overflow: hidden;
    animation:
      typing 3.5s steps(44) 1;
  }
}
@media (max-width: 595px) {
  .typewriter {
    font-size: 1.5rem;
    width: 100%;
    border-right: 3px solid;
    white-space: normal;
    animation:
      typing 3.5s steps(44) 1;
  }
}
@media only screen and (max-width: 585px){
  .headerfont{
    font-size: 2.5rem !important;
  }
}
@media only screen and (max-width: 400px){
  .headerfont{
    font-size: 1.8rem !important;
  }
}
@media only screen and (max-width: 345px){
  .headerfont{
    font-size: 1.8rem !important;
  }
}
.pfont{
  color: rgb(133, 137, 163);
  font-size: 1.5rem;
}
@media only screen and (max-width: 1148px){
  .pfont{
    font-size: 1.4rem !important;
  }
}
@media only screen and (max-width: 750px){
  .pfont{
    font-size: 1.2rem !important;
  }
}
@media only screen and (max-width: 610px){
  .pfont{
    font-size: 1.1rem !important;
  }
}
.image{
  height: 100%;
  width: 100%;
  text-align: center;
  max-height: 385px;
}
@media only screen and (max-width:960px) {
  .v-img__img--contain{
    object-fit: cover;
    object-position: center;
  }
  .image{
    height: 300px;
    width: 300px;
    border-radius: 50%;
    margin: 0 auto;
  }
  .image-col {
    margin-top: 8px;
    margin-bottom: 8px;
  }
}
@media only screen and (max-width: 450px) {
  .v-img__img--contain{
    object-fit: cover;
    object-position: center;
  }
  .image {
    height: 250px;
    width: 250px;
    border-radius: 50%;
    margin: 0 auto;
  }
  .image-col {
    margin-top: 8px;
    margin-bottom: 8px;
  }
}
.button{
  color: hsl(204,23.8%,95.9%); 
  font-family: Space Grotesk;
  font-size: 1.3rem;
  background-color: #fff;
  background: linear-gradient(270deg,#13ADC7 0%,#945DD6 100%);
  width: 100%;
  transition: 0.05s;
}
.button:hover{
  transform: translateY(-2px);
  box-shadow:3px 3px 30px 5px rgb(80 78 78 / 50%);
}
@media only screen and (max-width: 350px){
  .button{
    color: hsl(204,23.8%,95.9%); 
    font-family: Space Grotesk;
    font-size: 1.1rem !important;
    background-color: #fff;
    background: linear-gradient(270deg,#13ADC7 0%,#945DD6 100%);
    width: 100%;
    transition: 0.05s;
  }
}
.hidden {
  opacity: 0;
  pointer-events: none;
}
#mouse-scroll {
  display: block;
  margin: auto;
  z-index: 100;
  width: 100%;
  transition: opacity 1.5s ease-in-out;
}
@media screen and (max-width: 960px) {
  #mouse-scroll {
    display: block;
    margin: auto;
    z-index: 100;
    width: 100%;
    transition: opacity 2s ease-in-out;
  }  
}
#mouse-scroll span{
  display: block;
  width: 12px; 
  height: 12px;
  transform: rotate(45deg);
  border-right: 2px solid #fff; 
  border-bottom: 2px solid #fff;
  margin: auto;
}
#mouse-scroll .mouse {
  height: 52px;
  width: 38px;
  border-radius: 10px;
  transform: none;
  margin: auto;
  border: 2px solid #ffffff;
  top: 170px;
}
#mouse-scroll .down-arrow-1 {
  margin-top: 6px;
}
#mouse-scroll .down-arrow-1, #mouse-scroll .down-arrow-2, #mouse-scroll .down-arrow-3 {
  animation: mouse-scroll 1s infinite; 
}
#mouse-scroll .down-arrow-1 {
   animation-delay: .1s; 
   animation-direction: alternate;
}
#mouse-scroll .down-arrow-2 {
  animation-delay: .2s; 
  animation-direction: alternate;
}
#mouse-scroll .down-arrow-3 {
   animation-delay: .3s;
   -moz-animation-dekay: .3s;
   animation-direction: alternate;
}
#mouse-scroll .mouse-in {
  height: 12px;
  width: 3px;
  display: block; 
  margin: 7px auto;
  background: #ffffff;
  position: relative;
}
#mouse-scroll .mouse-in {
  animation: animated-mouse 1.4s ease infinite;
}

@keyframes animated-mouse {
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(6px);
  }
}
@keyframes mouse-scroll {
  0% {
    opacity: 1;
  }
  50% {
    opacity: .5;
  }
  100% {
    opacity: 1;
  } 
}
@keyframes mouse-scroll {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}
</style>