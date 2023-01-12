<template>
<!-- Projects component -->
<v-container fluid class="mt-16 px-10" id="projects">
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
        <!-- card1 -->
      <v-col cols="12" sm="12" md="6">
        <v-card class="experiencecard" shaped>
            <v-row>
                <v-col cols="12" style="padding: 0;">
                    <v-img src="@/assets/SGXchange.png"></v-img>
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
                    <v-card-text class="cardtext" style="padding-bottom: 0;">
                        A website designed to help students with the overseas exchange application process by 
                        web scraping and consolidating all the vital scatterered information, along with originally 
                        designed and self-built system functionalities such as automated modules mapping, user 
                        authentication, nearby attractions locater, a review system for reading/adding and a university 
                        favouriting system functionality that is made unique to every university. A collaborative team 
                        effort brainstormed and developed together with a group of friends!
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
                        <li class="techstackitem">Vue Router</li> 
                        <li class="techstackitem">Javascript</li>
                        <li class="techstackitem">CSS</li>
                        <li class="techstackitem">HTML</li>
                        <li class="techstackitem">Bootstrap</li>
                        <li class="techstackitem">ANT Design</li>
                        <li class="techstackitem">NoSQL Firebase</li>
                        <li class="techstackitem">Firebase Authentication</li>
                        <li class="techstackitem">Vercel</li>
                    </ul>
                </v-col>
            </v-row>
            <!-- <v-row class="mx-0 mt-2">
                <v-col cols="4" class="techstackitemright">
                    Vue.js
                </v-col>
                <v-col cols="4" class="techstackitem">
                    Javascript
                </v-col>
                <v-col cols="4" class="techstackitemleft">
                    Firebase
                </v-col>
            </v-row>
            <v-row class="mx-0 mt-4">
                <v-col cols="4" class="techstackitemright">
                    Ant Design
                </v-col>
                <v-col cols="4" class="techstackitem">
                    Vercel
                </v-col>
                <v-col cols="4" class="techstackitemleft">
                    Bootstrap
                </v-col>
            </v-row> -->
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

      <!-- card2 -->
      <v-col cols="12" sm="12" md="6">
        <v-card class="experiencecard" shaped>
            <v-row>
                <v-col cols="12" style="padding: 0;">
                    <v-img src="@/assets/portfolioss.jpg"></v-img>
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
                    <v-card-text class="cardtext" style="padding-bottom: 0;">
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
                    </ul>
                </v-col>
            </v-row>
            <!-- <v-row class="mx-0 mt-2">
                <v-col cols="4" class="techstackitemright">
                    Vue.js
                </v-col>
                <v-col cols="4" class="techstackitem">
                    Javascript
                </v-col>
                <v-col cols="4" class="techstackitemleft">
                    Firebase
                </v-col>
            </v-row>
            <v-row class="mx-0 mt-4">
                <v-col cols="4" class="techstackitemright">
                    Ant Design
                </v-col>
                <v-col cols="4" class="techstackitem">
                    Vercel
                </v-col>
                <v-col cols="4" class="techstackitemleft">
                    Bootstrap
                </v-col>
            </v-row> -->
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

    <!-- row2 -->
    <v-row>
        <!-- card3 -->
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
                      <v-card-text class="cardtext" style="padding-bottom: 0;">
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
              <!-- <v-row class="mx-0 mt-2">
                  <v-col cols="4" class="techstackitemright">
                      Vue.js
                  </v-col>
                  <v-col cols="4" class="techstackitem">
                      Javascript
                  </v-col>
                  <v-col cols="4" class="techstackitemleft">
                      Firebase
                  </v-col>
              </v-row>
              <v-row class="mx-0 mt-4">
                  <v-col cols="4" class="techstackitemright">
                      Ant Design
                  </v-col>
                  <v-col cols="4" class="techstackitem">
                      Vercel
                  </v-col>
                  <v-col cols="4" class="techstackitemleft">
                      Bootstrap
                  </v-col>
              </v-row> -->
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
        
        <!-- card4 -->
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
.pfont{
  color: rgb(133, 137, 163);
  font-size: 1.3rem;
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
    font-size: 1.6rem;
    padding: 0;
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
.cardtechstack{
    text-align: center;
    font-size: 1.2rem;
    color: #9cc9e3;
    padding-top: 1.1rem;
    padding-bottom: 1rem;
}
.techstacklist{
    display: inline-flex;
    flex-direction: row;
    flex-wrap: wrap;
    list-style: none;
    text-align: center;
    margin-bottom: 0;
}
.techstackitem{
    display: inline;
    font-size: 1rem;
    color: #d8bfbf;
    text-align: center;
    padding: 0.5rem;
    margin-bottom: 0;
}
.techstackitemright{
    font-size: 1rem;
    color: #d8bfbf;
    text-align: right;
    padding: 0;
}
.techstackitemleft{
    font-size: 1rem;
    color: #d8bfbf;
    text-align: left;
    padding: 0;
}
.projectbutton{
    color: #d4c0c0;
    background: #6b3030;
    transition: 0.5s;
    font-size: 1rem;
}
</style>