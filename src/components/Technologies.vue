<template>
      <!-- Technologies component -->
      <v-container fluid class="mt-16 px-0" id="technologies" style="padding-bottom: 0;">
        <div class="componentdivider"></div>      
        <v-row>
          <v-col cols="12" sm="10" md="8">
            <h1 class="headerfont">
              Technologies
            </h1>
            <p class="pfonttech">
              I have worked with a range of technologies in the Software Development realm thus far. 
              From Back-End to Front-End to Full-Stack Development, along with DevOps and Design Thinking as well.
            </p>
          </v-col>
        </v-row>
        <v-row class="mt-10 mb-10">
            <!-- Frontend Tech Stack -->
            <v-col cols="12" xs="12" sm="6" md="5" lg="5">
                <h4 class="subheaderfont">
                    Front-End
                </h4>
                <p class="pfont2 mb-1">Experience with:</p>
                <ul class="techlist">
                    <li class="techlistitem mb-2">
                        React
                        <v-icon left class="ml-1 mb-2 iconsize">fab fa-react</v-icon>
                    </li>
                    <li class="techlistitem mb-2">
                        Next.js
                        <v-icon left class="ml-1 mb-2 iconsize">fab fa-react</v-icon>
                    </li>
                    <li class="techlistitem mb-2">
                        Vue.js
                        <v-icon left class="ml-1 mb-2 iconsize">fab fa-vuejs</v-icon>
                    </li>
                    <li class="techlistitem mb-2">
                        tRPC
                        <v-icon left class="ml-1 mb-2 iconsize">fas fa-circle-nodes</v-icon>
                    </li>
                    <li class="techlistitem mb-2">
                        Vuetify
                        <v-icon left class="ml-1 mb-2 iconsize">fab fa-vuejs</v-icon>
                    </li>
                    <li class="techlistitem mb-2">
                        Typescript
                        <v-icon left class="ml-1 mb-2 iconsize">fas fa-code</v-icon>
                    </li>
                    <li class="techlistitem mb-2">
                        Javascript
                        <v-icon left class="ml-1 mb-2 iconsize">fab fa-js-square</v-icon>
                    </li>
                    <li class="techlistitem mb-2 mb-1">
                        HTML
                        <v-icon left class="ml-1 mb-2 iconsize">fab fa-html5</v-icon>
                    </li>
                    <li class="techlistitem mb-2">
                        CSS
                        <v-icon left class="ml-1 mb-2 iconsize">fab fa-css3-alt</v-icon>
                    </li>
                    <li class="techlistitem mb-2">
                        Tailwind CSS
                        <v-icon left class="ml-1 mb-2 iconsize">fab fa-css3-alt</v-icon>
                    </li>
                    <li class="techlistitem mb-2">
                        Bootstrap
                        <v-icon left class="ml-1 mb-2 iconsize">fab fa-bootstrap</v-icon>
                    </li>
                    <li class="techlistitem mb-2">
                        Ant Design
                        <v-icon left class="ml-1 mb-2 iconsize">fas fa-wand-magic-sparkles</v-icon>
                    </li>
                    <li class="techlistitem mb-2">
                        Chart.js
                        <v-icon left class="ml-1 mb-2 iconsize">fas fa-chart-line</v-icon>
                    </li>
                </ul>
            </v-col>
            
            <!-- Backend Tech Stack -->
            <v-col cols="12" xs="12" sm="6" md="5" lg="6">
                <h4 class="subheaderfont">
                    Back-End
                </h4>
                <p class="pfont2 mb-1">Experience with:</p>
                <ul class="techlist">
                    <li class="techlistitem mb-2">
                        Python
                        <v-icon left class="ml-1 mb-2 iconsize">fab fa-python</v-icon>
                    </li>
                    <li class="techlistitem mb-2">
                        Java
                        <v-icon left class="ml-1 mb-2 iconsize">fab fa-java</v-icon>
                    </li>
                    <li class="techlistitem mb-2">
                        PHP
                        <v-icon left class="ml-1 mb-2 iconsize">fab fa-php</v-icon>
                    </li>
                    <li class="techlistitem mb-2">
                        Flask Framework
                        <v-icon left class="ml-1 mb-2 iconsize">fab fa-python</v-icon>
                    </li>
                    <li class="techlistitem mb-2">
                        Springboot Framework
                        <v-icon left class="ml-1 mb-2 iconsize">fab fa-java</v-icon>
                    </li>
                    <li class="techlistitem mb-2">
                        Prisma
                        <v-icon left class="ml-1 mb-2 iconsize">fas fa-code</v-icon>
                    </li>
                    <li class="techlistitem mb-2">
                        SQLAlchemy
                        <v-icon left class="ml-1 mb-2 iconsize">fab fa-python</v-icon>
                    </li>
                    <li class="techlistitem mb-2">
                        PyMongo
                        <v-icon left class="ml-1 mb-2 iconsize">fab fa-python</v-icon>
                    </li>
                    <li class="techlistitem mb-2">
                        Pandas
                        <v-icon left class="ml-1 mb-2 iconsize">fab fa-python</v-icon>
                    </li>
                    <li class="techlistitem mb-2">
                        Openpyxl
                        <v-icon left class="ml-1 mb-2 iconsize">fab fa-python</v-icon>
                    </li>
                    <li class="techlistitem mb-2">
                        Streamlit
                        <v-icon left class="ml-1 mb-2 iconsize">fab fa-python</v-icon>
                    </li>
                    <li class="techlistitem mb-2">
                        PlanetScale
                        <v-icon left class="ml-1 mb-2 iconsize">fas fa-database</v-icon>
                    </li>
                    <li class="techlistitem mb-2">
                        MySQL
                        <v-icon left class="ml-1 mb-2 iconsize">fas fa-database</v-icon>
                    </li>
                    <li class="techlistitem mb-2">
                        MongoDB
                        <v-icon left class="ml-1 mb-2 iconsize">fas fa-database</v-icon>
                    </li>
                    <li class="techlistitem mb-2">
                        NoSQL Firebase
                        <v-icon left class="ml-1 mb-2 iconsize">fas fa-database</v-icon>
                    </li>
                    <li class="techlistitem mb-2">
                        Postman API Platform
                        <v-icon left class="ml-1 mb-2 iconsize">fas fa-desktop</v-icon>
                    </li>
                    <li class="techlistitem mb-2">
                        Kong API Gateway
                        <v-icon left class="ml-1 mb-2 iconsize">fas fa-desktop</v-icon>
                    </li>
                    <li class="techlistitem mb-2">
                        RabbitMQ
                        <v-icon left class="ml-1 mb-2 iconsize">fas fa-desktop</v-icon>
                    </li>
                </ul>
            </v-col>

            <!-- DevOps Tech Stack -->
            <v-col cols="12" xs="12" sm="6" md="5" lg="5" class="mt-1">
                <h4 class="subheaderfont">
                    DevOps
                </h4>
                <p class="pfont2 mb-1">Experience with:</p>
                <ul class="techlist">
                    <li class="techlistitem mb-2">
                        Kubernetes
                        <v-icon left class="iconsize ml-1 mb-2">fas fa-gear</v-icon>
                    </li>
                    <li class="techlistitem mb-2">
                        Docker
                        <v-icon left class="iconsize ml-1 mb-2">fab fa-docker</v-icon>
                    </li>
                    <li class="techlistitem mb-2">
                        Github
                        <v-icon left class="ml-1 mb-2 iconsize">fab fa-github</v-icon>
                    </li>
                    <li class="techlistitem mb-2">
                        Vercel
                        <v-icon left class="ml-1 mb-2 iconsize">fas fa-desktop</v-icon>
                    </li>
                    <li class="techlistitem mb-2">
                        Netlify
                        <v-icon left class="ml-1 mb-2 iconsize">fas fa-desktop</v-icon>
                    </li>
                </ul>
            </v-col>

            <!-- Design Tech Stack -->
            <v-col cols="12" xs="12" sm="6" md="5" lg="6" class="mt-1">
                <h4 class="subheaderfont">
                    Design
                </h4>
                <p class="pfont2 mb-1">Experience with:</p>
                <ul class="techlist">
                    <li class="techlistitem mb-2">
                        Figma
                        <v-icon left class="iconsize ml-1 mb-2 iconsize">fab fa-figma</v-icon>
                    </li>
                    <li class="techlistitem mb-2">
                        Canva
                        <v-icon left class="ml-1 mb-2 iconsize">fas fa-pen-ruler</v-icon>
                    </li>
                    <li class="techlistitem mb-2">
                        Excalidraw
                        <v-icon left class="ml-1 mb-2 iconsize">fas fa-pen-ruler</v-icon>
                    </li>
                    <li class="techlistitem mb-2">
                        Maze Testing
                        <v-icon left class="ml-1 mb-2 iconsize">fas fa-pen-ruler</v-icon>
                    </li>
                </ul>
            </v-col>
        </v-row>
      </v-container>
</template>

<script>
export default {

}

</script>

<style>
.componentdivider{
    width: 4.5rem;
    height: 0.3rem;
    border-radius: 10px;
    background-color: #fff;
    background: linear-gradient(270deg,#13ADC7 0%,#945DD6 100%);
}
.main{
    background-color: #0F1624; 
    color: hsl(204,23.8%,95.9%); 
    font-family: Space Grotesk;
  }
.headerfont{
  font-size: 3.5rem;
}
.subheaderfont{
  font-size: 1.85rem;
}
.pfonttech{
  color: rgb(133, 137, 163);
  font-size: 1.3rem;
}
@media only screen and (max-width: 390px){
    .pfonttech{
      font-size: 1.1rem !important;
    }
}  
.button{
    color: hsl(204,23.8%,95.9%); 
    font-family: Space Grotesk;
    font-size: 1.3rem;
    background-color: #fff;
    background: linear-gradient(270deg,#13ADC7 0%,#945DD6 100%);
    width: 100%;
}
.pfont2{
    color: rgb(133, 137, 163);
    font-size: 1.2rem;
}
.techlist{
    list-style: none;
}
.techlistitem{
    color: rgb(133, 137, 163);
    font-size: 1.3rem;
    margin-bottom: 0;
    padding-bottom: 0;
}
@media only screen and (max-width: 415px){
    .techlistitem{
        color: rgb(133, 137, 163);
        font-size: 1.1rem !important;
        margin-bottom: 0;
        padding-bottom: 0;
    }
}
.iconsize{
    font-size: 1.4rem;
}

</style>