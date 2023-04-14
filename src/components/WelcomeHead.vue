<template>
<!-- Head/Welcome component -->
<v-container fluid class="mt-16 px-0" id="about">
    <v-row>
      <v-col cols="12" style="padding-top:12px; padding-bottom:0;">
        <div class="container" style="display:inline-block; max-width: 100%;">
          <h1 class="typewriter mb-2">
            Hi there, Welcome to my Developer Portfolio!
          </h1>  
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="8">
        <p class="pfont mb-8">
          Hello! I am Teo Sean, an aspiring Full Stack Developer. 
          I am passionate about building products that bring about meaning, benefits and a positive impact on the users that use them.
        </p>
        <p class="pfont">
          Feel free to take a look at my portfolio and do not hesitate to connect with me via any of my socials in the
          NavBar! Alternatively, you may drop me an email for anything under the sun 
          by clicking on the Contact button in the navbar 😎, thank you for your time!             
        </p>
      </v-col>
      <v-col cols="12" sm="7" md="4" style="display: flex; flex-direction: column; justify-content: center; text-align:left">
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
@media (max-width: 1300px) {
  .typewriter{
    font-size: 2.3rem;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    animation:
      typing 3.5s steps(44) 1;
  }
}
@media (max-width: 1210px) {
  .typewriter{
    font-size: 2.1rem;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    animation:
      typing 3.5s steps(44) 1;
  }
}
@media (max-width: 1132px) {
  .typewriter{
    font-size: 1.95rem;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    animation:
      typing 3.5s steps(44) 1;
  }
}
@media (max-width: 1040px) {
  .typewriter{
    font-size: 1.85rem;
    width: 100%;
    white-space: nowrap;
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
@media (max-width: 675px) {
  .typewriter {
    font-size: 1.6rem;
    width: 100%;
    overflow: hidden;
    animation:
      typing 3.5s steps(44) 1;
  }
}
@media (max-width: 610px) {
  .typewriter {
    font-size: 1.5rem;
    width: 100%;
    overflow: hidden;
    animation:
      typing 3.5s steps(44) 1;
  }
}
@media (max-width: 580px) {
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
@media only screen and (max-width:960px) {
  .v-img__img--contain{
    object-position: left !important;
  }
}
.image{
  height: 100%;
  width: 100%;
  text-align: center;
  max-height: 315px;
}
.animation{
  text-align: center;
  position: absolute;
  left: 50%;
  top: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
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