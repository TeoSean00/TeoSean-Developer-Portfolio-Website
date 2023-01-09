<template>
<!-- Head/Welcome component -->
<v-container fluid class="mt-16 px-10" id="about">
    <v-row>
      <v-col cols="12" md="8">
        <h1 class="headerfont mb-7">
          Welcome To <br/>
          Sean's Developer Portfolio
        </h1>
        <p class="mb-7 pfont">
          Hello! I am Teo Sean, an aspiring Full Stack Developer. 
          I am passionate about building products that bring about meaning, benefits and a positive impact on the users that use them.
        </p>
        <p class="pfont">
          Feel free to take a look at my portfolio and do not hesitate to connect with me via any of my socials in the
          NavBar! Alternatively, you may drop me an email for anything under the sun 
          by clicking on the Contact button in the navbar 😎, thank you for your time!             
        </p>
      </v-col>
      <v-col cols="12" sm="7" md="4">
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
import "@fontsource/space-grotesk"
export default {
    // data() {
    //     return{
    //         openlist: false,
    //         drawermed: false,
    //         drawersmall: false,
    //         drawersmallmed: false,
    //     }
    // },
    // beforeUnmount () {
    //   if (typeof window === 'undefined') return

    //   window.removeEventListener('resize', this.onResize, { passive: true })
    //   window.removeEventListener('resize', this.onResizeSmall, { passive: true })
    //   window.removeEventListener('resize', this.onResizeSmallMed, { passive: true })
    // },
    // mounted () {
    //   this.onResize()
    //   this.onResizeSmall()
    //   this.onResizeSmallMed()

    //   window.addEventListener('resize', this.onResize, { passive: true })
    //   window.addEventListener('resize', this.onResizeSmall, { passive: true })
    //   window.addEventListener('resize', this.onResizeSmallMed, { passive: true })
    // },
    methods: {
        scroll(name) {
            const element = document.getElementById(name);
            element.scrollIntoView({behavior: 'smooth'});
        },
    //     onResize () {
    //         this.drawermed = window.innerWidth < 1080
    //   },
    //     onResizeSmall () {
    //         this.drawersmall = window.innerWidth < 730
    //     },
    //     onResizeSmallMed () {
    //         this.drawersmallmed = window.innerWidth < 970
    //     },
    //     openList(){
    //         if(this.openlist == false){
    //             this.openlist = true
    //         } else{
    //             this.openlist = false
    //         }
    //     }
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
.pfont{
  color: rgb(133, 137, 163);
  font-size: 1.3rem;
}
.image{
  height: 100%;
  width: 100%;
  text-align: center;
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
}
</style>