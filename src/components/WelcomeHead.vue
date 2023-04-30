<template>
<!-- Head/Welcome component -->
<v-container fluid class="mt-16 px-0" id="about">
    <!-- <v-row>
      <v-col cols="12" style="padding-top:12px; padding-bottom:0;">
        <div class="container" style="display:inline-block; max-width: 100%;">
          <h1 class="typewriter mb-2">
            Hi there, Welcome to my Developer Portfolio!
          </h1>  
        </div>
      </v-col>
    </v-row> -->
    <v-row>
      <v-col cols="12" md="8" class="py-0" style="padding-right: 12px;">
        <div class="container" style="display:inline-block; max-width: 100%;">
          <h1 class="typewriter mb-7">
            Hi there, Welcome to my Developer Portfolio!
          </h1>  
        </div>
        <p class="pfont mb-7">
          I am Teo Sean, an aspiring Full Stack Developer. 
          I am passionate about building products that bring about meaning, benefits and a positive impact on the users that use them.
        </p>
        <p class="pfont">
          Feel free to take a look at my portfolio and do not hesitate to connect with me via any of my socials in the
          NavBar! Alternatively, you may drop me an email for anything under the sun 
          by clicking on the Contact button in the navbar 😎, thank you for your time!             
        </p>
      </v-col>
      <v-col cols="12" sm="12" md="4" class="image-col" style="display: flex; flex-direction: column; justify-content: center; text-align:left">
        <v-img src="@/assets/profilepic2.jpg" class="image"></v-img>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="8">
        <v-btn text @click="scroll('experience')" class="text-none text-wrap button">Find out more!</v-btn>
      </v-col>
    </v-row>
</v-container>
</template>

<script>
import "@fontsource/space-grotesk";
export default {
  methods: {
      scroll(name) {
          const element = document.getElementById(name);
          element.scrollIntoView({behavior: 'smooth'});
      },
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
  max-height: 390px;
}
@media only screen and (max-width:960px) {
  .v-img__img--contain{
    object-fit: cover;
    object-position: center;
  }
  .image {
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
</style>