<template>
<!-- Projects component -->
<v-container fluid class="mt-16 px-0" id="projects">
    <div class="componentdivider"></div>      
    <v-row>
      <v-col cols="8">
        <h1 class="headerfont">
          Projects
        </h1>
      </v-col>
    </v-row>

    <!-- row1 -->
    <v-row>
        <!-- card 1 -->
        <v-col cols="12" sm="12" md="6">
            <v-card class="experiencecard" shaped>
                <v-row>
                    <v-col cols="12" style="padding: 0;">
                        <v-img src="@/assets/GoBook.png"></v-img>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12">
                        <v-card-title class="cardtitle text-wrap">GoBook</v-card-title>
                    </v-col>
                </v-row>
                <v-row style="margin: 0;">
                    <v-col cols="12" style="padding-bottom: 0;">
                        <div class="yellowsection"></div>
                    </v-col>
                </v-row>
                <v-row style="margin: 0;">
                    <v-col cols="12" style="padding-top :0; padding-bottom: 0;">
                        <v-card-text class="cardtext pb-0 px-0">
                            A one-stop class booking application built using a Microservice Architecture to 
                            manage a company’s class and user system, storing & displaying information for the 
                            classes and users, along with a class reviewing functionality and a class recommendation 
                            feature for users based on their previously attended classes. This project aims to tackle
                            the sustainability issue of paper-based processes and GoBook offers a digitalised solution
                            for streamlining such processes. <br><br>
                            <em>This project was shortlisted for the VMware Tanzu Award in
                            Singapore Management University (Top 3 Teams in the cohort).</em>        
                        </v-card-text>
                    </v-col>
                </v-row>
                <v-row class="mx-0 mt-2 mb-0.5">
                    <v-col cols="12" style="padding-top: 0; padding-bottom: 0;">
                        <v-card-text class="cardtechstack">
                            Tech Stack
                        </v-card-text>
                    </v-col>
                </v-row>
                <v-row style="margin: 0;">
                    <v-col cols="12" style="padding-top: 0; text-align: center;">
                        <ul class="techstacklist">
                            <li class="techstackitem">React</li> 
                            <li class="techstackitem">Javascript</li>
                            <li class="techstackitem">Tailwind CSS</li>
                            <li class="techstackitem">Flask</li>
                            <li class="techstackitem">Springboot</li>
                            <li class="techstackitem">Node.js</li>
                            <li class="techstackitem">Express.js</li>
                            <li class="techstackitem">Toast Notifications</li>
                            <li class="techstackitem">Kafka</li>
                            <li class="techstackitem">RabbitMQ</li>
                            <li class="techstackitem">MongoDB</li>
                            <li class="techstackitem">Docker</li>
                            <li class="techstackitem">Kong API Gateway</li>
                            <li class="techstackitem">Vite</li>
                        </ul>
                    </v-col>
                </v-row>
                <v-row class="mx-0 mt-3 mb-1">
                    <v-col cols="4" class="text-center">
                        <v-btn class="projectbutton text-none text-wrap" href="https://github.com/TeoSean00/GoBook-Frontend" target="_blank">
                            Frontend
                        </v-btn>
                    </v-col>
                    <v-col cols="4" class="text-center">
                        <v-btn class="projectbutton text-none text-wrap" href="https://github.com/TeoSean00/GoBook-Backend" target="_blank">
                            Backend
                        </v-btn>
                    </v-col>
                    <v-col cols="4" class="text-center">
                        <v-btn class="projectbutton text-none text-wrap" href="https://www.youtube.com/watch?v=S4vLItXFAvE" target="_blank">
                            Demo
                        </v-btn>
                    </v-col>
                </v-row>
            </v-card>
        </v-col>
        
        <!-- card 2 -->
        <v-col cols="12" sm="12" md="6">
            <v-card class="experiencecard" shaped>
                <v-row>
                    <v-col cols="12" style="padding: 0;">
                        <v-img class="projectimg" src="@/assets/vendorFormSystem.png"></v-img>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12">
                        <v-card-title class="cardtitle text-wrap">Vendor and Form Management System</v-card-title>
                    </v-col>
                </v-row>
                <v-row style="margin: 0;">
                    <v-col cols="12" style="padding-bottom: 0;">
                        <div class="yellowsection"></div>
                    </v-col>
                </v-row>
                <v-row style="margin: 0;">
                    <v-col cols="12" style="padding-top :0; padding-bottom: 0;">
                        <v-card-text class="cardtext pb-0 px-0">
                            A one stop Vendor and Form Management System which addresses all the basic business needs 
                            while adding in additional useful features such as the ability to create fully customisable forms that 
                            can be easily assigned to vendors to be filled up and rejecting the filled forms afterwards if need be too, 
                            along with manual/automated email reminder notifications specific to both vendors and forms, 
                            and with curated Dashboards 
                            to highlight the various business insights generated throughout the business process.
                            <br><br>
                            <em>This project achieved the highest grade in Singapore Management University (A+).</em>        
                        </v-card-text>
                    </v-col>
                </v-row>
                <v-row class="mx-0 mt-2 mb-0.5">
                    <v-col cols="12" style="padding-top: 0; padding-bottom: 0;">
                        <v-card-text class="cardtechstack">
                            Tech Stack
                        </v-card-text>
                    </v-col>
                </v-row>
                <v-row style="margin: 0;">
                    <v-col cols="12" style="padding-top: 0; text-align: center;">
                        <ul class="techstacklist">
                            <li class="techstackitem">Vue.js</li> 
                            <li class="techstackitem">Javascript</li>
                            <li class="techstackitem">CSS</li>
                            <li class="techstackitem">Bootstrap</li>
                            <li class="techstackitem">SASS</li>
                            <li class="techstackitem">Vue Pinia Store</li>
                            <li class="techstackitem">Chart.js</li>
                            <li class="techstackitem">Moment.js</li>
                            <li class="techstackitem">Toast Notifications</li>
                            <li class="techstackitem">Java</li>
                            <li class="techstackitem">Springboot</li>
                            <li class="techstackitem">MongoDB</li>
                            <li class="techstackitem">Docker</li>
                            <li class="techstackitem">Vite</li>

                        </ul>
                    </v-col>
                </v-row>
                <v-row class="mx-0 mt-3 mb-1">
                    <v-col cols="4" class="text-center">
                        <v-btn class="projectbutton text-none text-wrap" href="https://github.com/TeoSean00/Vendor_Form_Management_System_Frontend" target="_blank">
                            Frontend
                        </v-btn>
                    </v-col>
                    <v-col cols="4" class="text-center">
                        <v-btn class="projectbutton text-none text-wrap" href="https://github.com/TeoSean00/Vendor_Form_Management_System_Backend" target="_blank">
                            Backend
                        </v-btn>
                    </v-col>
                    <v-col cols="4" class="text-center">
                        <v-btn class="projectbutton text-none text-wrap" href="https://youtu.be/mXnO4Y1JEVU" target="_blank">
                            Demo
                        </v-btn>
                    </v-col>
                </v-row>
            </v-card>
        </v-col>
    </v-row>
    
    <!-- row2 -->
    <v-row>
        <!-- card3 -->
      <v-col cols="12" sm="12" md="6">
        <v-card class="experiencecard" shaped>
            <v-row>
                <v-col cols="12" style="padding: 0;">
                    <v-img class="projectimg" src="@/assets/SGXchange.png"></v-img>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12">
                    <v-card-title class="cardtitle text-wrap">SGXChange</v-card-title>
                </v-col>
            </v-row>
            <v-row style="margin: 0;">
                <v-col cols="12" style="padding-bottom: 0;">
                    <div class="yellowsection"></div>
                </v-col>
            </v-row>
            <v-row style="margin: 0;">
                <v-col cols="12" style="padding-top :0; padding-bottom: 0;">
                    <v-card-text class="cardtext pb-0 px-0" >
                        A website designed to help students with the overseas exchange application process by 
                        web scraping and consolidating all the vital scattered information, along with originally 
                        designed and self-built system functionalities such as automated modules mapping, user 
                        authentication, nearby attractions locater, a review system for reading/ adding and a university 
                        favouriting system functionality that is made unique to every university. A collaborative team 
                        effort brainstormed and developed together with a group of friends!
                        <br><br>
                        <em>This project achieved the highest grade in Singapore Management University (A+).</em>        
                    </v-card-text>
                </v-col>
            </v-row>
            <v-row class="mx-0 mt-2 mb-0.5">
                <v-col cols="12" style="padding-top: 0; padding-bottom: 0;">
                    <v-card-text class="cardtechstack">
                        Tech Stack
                    </v-card-text>
                </v-col>
            </v-row>
            <v-row style="margin: 0;">
                <v-col cols="12" style="padding-top: 0; text-align: center;">
                    <ul class="techstacklist">
                        <li class="techstackitem">Vue.js</li> 
                        <li class="techstackitem">Javascript</li>
                        <li class="techstackitem">CSS</li>
                        <li class="techstackitem">HTML</li>
                        <li class="techstackitem">Bootstrap</li>
                        <li class="techstackitem">ANT Design</li>
                        <li class="techstackitem">Google Map APIs</li>
                        <li class="techstackitem">NoSQL Firestore</li>
                        <li class="techstackitem">NoSQL Realtime Database</li>
                        <li class="techstackitem">Firebase Authentication</li>
                        <li class="techstackitem">Vercel</li>
                        <li class="techstackitem">Vite</li>
                    </ul>
                </v-col>
            </v-row>
            <v-row class="mx-0 mt-3 mb-1">
                <v-col cols="6" class="text-center">
                    <v-btn class="projectbutton text-none text-wrap" href="https://github.com/TeoSean00/SMU-WAD2-SGXChange" target="_blank">
                        Code
                    </v-btn>
                </v-col>
                <v-col cols="6" class="text-center">
                    <v-btn class="projectbutton text-none text-wrap" href="https://smu-wad2-teosean-sgxchange.vercel.app/" target="_blank">
                        Website
                    </v-btn>
                </v-col>
            </v-row>
        </v-card>
      </v-col>

      <!-- card4 -->
      <v-col cols="12" sm="12" md="6">
        <v-card class="experiencecard" shaped>
            <v-row>
                <v-col cols="12" style="padding: 0;">
                    <v-img src="@/assets/portfolio.png"></v-img>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12">
                    <v-card-title class="cardtitle text-wrap">Portfolio Website</v-card-title>
                </v-col>
            </v-row>
            <v-row style="margin: 0;">
                <v-col cols="12" style="padding-bottom: 0;">
                    <div class="yellowsection"></div>
                </v-col>
            </v-row>
            <v-row style="margin: 0;">
                <v-col cols="12" style="padding-top :0; padding-bottom: 0;">
                    <v-card-text class="cardtext pb-0 px-0">
                        My first developer portfolio website that documents my journey in the software engineering realm thus far! It showcases my relevant
                        tech experience, projects, tech stacks, my developer timeline and accomplishments thus far.
                        Built primarily using Vue.js, Vuetify, CSS, Bootstrap, together with EmailJS and deployed via Github Pages with a 
                        custom personal domain, a constant work in progress!
                    </v-card-text>
                </v-col>
            </v-row>
            <v-row class="mx-0 mt-2 mb-0.5">
                <v-col cols="12" style="padding-top: 0; padding-bottom: 0;">
                    <v-card-text class="cardtechstack">
                        Tech Stack
                    </v-card-text>
                </v-col>
            </v-row>
            <v-row style="margin: 0;">
                <v-col cols="12" style="padding-top: 0; text-align: center;">
                    <ul class="techstacklist">
                        <li class="techstackitem">Vue.js</li> 
                        <li class="techstackitem">Vuetify</li>
                        <li class="techstackitem">Javascript</li>
                        <li class="techstackitem">CSS</li>
                        <li class="techstackitem">HTML</li>
                        <li class="techstackitem">Bootstrap</li>
                        <li class="techstackitem">EmailJS</li>
                        <li class="techstackitem">Github Pages</li>
                        <li class="techstackitem">Vue CLI</li>
                    </ul>
                </v-col>
            </v-row>
            <v-row class="mx-0 mt-3 mb-1">
                <v-col cols="6" class="text-center">
                    <v-btn class="projectbutton text-none text-wrap" href="https://github.com/TeoSean00/TeoSean-Developer-Portfolio-Website" target="_blank">
                        Code
                    </v-btn>
                </v-col>
                <v-col cols="6" class="text-center">
                    <v-btn class="projectbutton text-none text-wrap" href="https://teosean.me">
                        Website
                    </v-btn>
                </v-col>
            </v-row>
        </v-card>
      </v-col>
    </v-row>

    <!-- row3 -->
    <v-row>
        <!-- card5 -->
        <v-col cols="12" sm="12" md="6">
          <v-card class="experiencecard" shaped>
              <v-row>
                  <v-col cols="12" style="padding: 0;">
                      <v-img src="@/assets/reactmovie.png"></v-img>
                  </v-col>
              </v-row>
              <v-row>
                  <v-col cols="12">
                      <v-card-title class="cardtitle text-wrap">React MovieApp</v-card-title>
                  </v-col>
              </v-row>
              <v-row style="margin: 0;">
                  <v-col cols="12" style="padding-bottom: 0;">
                      <div class="yellowsection"></div>
                  </v-col>
              </v-row>
              <v-row style="margin: 0;">
                  <v-col cols="12" style="padding-top :0; padding-bottom: 0;">
                      <v-card-text class="cardtext pb-0 px-0">
                        My very first React and Solo Project. This project aims to create a movie catalogue by fetching movie data 
                        from an external api, "http://omdbapi.com/apikey.aspx". It then displays the 
                        relevant movies' poster picture, title, 
                        along with its type (movie/series) specific to every returned show that fufilled 
                        the initial user search.         
                      </v-card-text>
                  </v-col>
              </v-row>
              <v-row class="mx-0 mt-2 mb-0.5">
                  <v-col cols="12" style="padding-top: 0; padding-bottom: 0;">
                      <v-card-text class="cardtechstack">
                          Tech Stack
                      </v-card-text>
                  </v-col>
              </v-row>
              <v-row style="margin: 0;">
                  <v-col cols="12" style="padding-top: 0; text-align: center;">
                      <ul class="techstacklist">
                          <li class="techstackitem">React</li> 
                          <li class="techstackitem">Javascript</li>
                          <li class="techstackitem">CSS</li>
                          <li class="techstackitem">HTML</li>
                          <li class="techstackitem">Vercel</li>
                      </ul>
                  </v-col>
              </v-row>
              <v-row class="mx-0 mt-3 mb-1">
                  <v-col cols="6" class="text-center">
                      <v-btn class="projectbutton text-none text-wrap" href="https://github.com/TeoSean00/React-First-Project-Movie-Application" target="_blank">
                          Code
                      </v-btn>
                  </v-col>
                  <v-col cols="6" class="text-center">
                      <v-btn class="projectbutton text-none text-wrap" href="https://teosean-react-first-solo-project-movieapp.vercel.app/" target="_blank">
                          Website
                      </v-btn>
                  </v-col>
              </v-row>
          </v-card>
        </v-col>

        <!-- card6 -->
      </v-row>
  </v-container>
</template>

<script>
export default {

}
</script>

<style>
.projectimg{
    max-height: 850px !important;
}
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
.button{
    color: hsl(204,23.8%,95.9%); 
    font-family: Space Grotesk;
    font-size: 1.3rem;
    background-color: #fff;
    background: linear-gradient(270deg,#13ADC7 0%,#945DD6 100%);
    width: 100%;
}
.experiencecard{
    width: 100%;
    height: 100%;
    color: hsl(204,23.8%,95.9%); 
    font-family: Space Grotesk;
    background-color: #0F1624;
    box-shadow:3px 3px 20px 5px rgb(80 78 78 / 50%);
    padding: 0.8rem;
}
.cardtitle{
    color: #9cc9e3;
    text-align: center;
    font-size: 1.5rem !important;
    padding: 0;
}

@media only screen and (max-width: 390px){
    .cardtitle{
        color: #9cc9e3;
        text-align: center;
        font-size: 1.4rem !important;
        padding: 0;
    }
  }
.yellowsection{
    background: #d0bb57;
    width: 3.5rem;
    height: 0.15rem;
    border: 0;
    margin-left: auto;
    margin-right: auto;
}
.cardtext{
    text-align: justify;
    font-size: 1.1rem;
}
@media only screen and (max-width: 398px) {
    .cardtext{
        text-align: justify;
        font-size: 1.1rem !important;
    }
}
.cardtechstack{
    text-align: center;
    font-size: 1.3rem;
    color: #9cc9e3;
    padding-top: 1.1rem;
    padding-bottom: 1rem;
}
.techstacklist{
    display: inline-flex;
    justify-content: space-evenly;
    flex-direction: row;
    flex-wrap: wrap;
    list-style: none;
    text-align: center;
    margin-bottom: 0;
}
.techstackitem{
    display: inline;
    font-size: 1.1rem;
    color: #d8bfbf;
    text-align: center;
    padding: 0.5rem;
    margin-bottom: 0;
}
.projectbutton{
    color: #d4c0c0;
    background: #6b3030;
    transition: 0.1s;
    font-size: 1rem;
}
.projectbutton:hover{
    transform: translateY(-2px);
    box-shadow:3px 3px 30px 5px rgb(80 78 78 / 50%);
}
@media only screen and (max-width: 445px){
    .projectbutton{
        color: #d4c0c0;
        background: #6b3030;
        transition: 0.5s;
        font-size: 0.8rem !important;
        transition: 0.05s;
    }
}

@media only screen and (max-width: 385px){
    .projectbutton{
        color: #d4c0c0;
        background: #6b3030;
        transition: 0.5s;
        font-size: 0.68rem !important;
        transition: 0.05s;
    }
}
@media only screen and (max-width: 350px){
    .projectbutton{
        color: #d4c0c0;
        background: #6b3030;
        transition: 0.5s;
        font-size: 0.62rem !important;
        transition: 0.05s;
    }
}

</style>