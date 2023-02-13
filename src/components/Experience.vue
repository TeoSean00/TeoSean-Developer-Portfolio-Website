<template>
<!-- Experience component -->
<v-container fluid class="mt-16 px-10" id="experience">
    <div class="componentdivider"></div>      
    <v-row>
      <v-col cols="8">
        <h1 class="headerfont">
          Relevant Experience
        </h1>
      </v-col>
    </v-row>
    <v-row>
      <!-- card1 -->
      <v-col cols="12" md="12" lg="6">
        <v-card shaped class="experiencecard">
          <v-row>
            <v-col cols="12" xs="12" sm="7" md="9">
              <v-row>
                <v-col cols="12">
                  <v-card-title style="font-size: 1.35rem; " class="text-wrap">
                    Infocomm Media Development Authority (IMDA)
                  </v-card-title>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" xs="12" sm="12" md="5">
                  <v-card-subtitle style="font-size: 1.2rem;" class="text-wrap">
                    Full Stack Developer
                  </v-card-subtitle>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="7">
                  <v-card-subtitle style="font-size: 1.2rem;" class="text-wrap">
                    May 2022 – Nov 2022
                  </v-card-subtitle>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="12" xs="12" sm="5" md="3" style="display: flex; align-items: center;">
              <v-img src="@/assets/imdalogo.png"
                style="height: 100%; width: 100%; margin-top: 0.5em; padding-right: 2em;"></v-img>
            </v-col>
          </v-row>
          <v-row class="mt-2">
            <v-col cols="12" class="pt-0">
              <v-card-text style="font-size: 1.1rem;" class="text-wrap">
                <ul>
                  <li class="experiencelist">
                    Created approximately 40 unique Back-End RESTful API endpoint routes, each returning JSON data specific to what the
                    frontend requires, utilizing self-created SQLAlchemy schemas, Flask Marshmallow schemas and Python
                  </li>
                  <li class="experiencelist">
                    Developed a dashboard with ReactJS, Flask and MySQL using patent and scientific literature datasets which allows internal
                    stakeholders to rapidly analyze and forecast emerging technology trends from it
                  </li>
                  <li class="experiencelist">Designed and built 2 relational MySQL databases and schemas using SQLAlchemy and MySQL Workbench</li>
                  <li class="experiencelist">
                    Created a Python data engineering script to automate & transform unstructured csv patent files to structured data, then
                    loading the data into MySQL databases with SQLAlchemy & Openpyxl; automated approximately 70 csv files
                  </li>
                  <li class="experiencelist">Built a 2nd customized web scraping & data engineering script with Python, SQLAlchemy, Pandas & an external API, SerpAPI</li>
                  <li class="experiencelist">Researched & constructed a 4-levelled taxonomy on Artificial Intelligence through desktop research on its emerging tech</li>
                  <li>Showcased dashboard to Assistant Chief Executive of Business Tech Group & received notable & positive feedbacks</li>
                </ul>
              </v-card-text>
            </v-col>
          </v-row>
        </v-card>
      </v-col>

      <!-- card2 -->
      <v-col cols="12" md="12" lg="6">
        <v-card shaped class="experiencecard">
          <v-row>
            <v-col cols="12" xs="12" sm="7" md="9">
              <v-row>
                <v-col cols="12">
                  <v-card-title style="font-size: 1.4rem; " class="text-wrap">
                    SMU Web Application Development 2 Module
                  </v-card-title>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" xs="12" sm="12" md="5">
                  <v-card-subtitle style="font-size: 1.2rem;" class="text-wrap">
                    Full Stack Developer
                  </v-card-subtitle>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="7">
                  <v-card-subtitle style="font-size: 1.2rem;" class="text-wrap">
                    Sep 2022 – Nov 2022
                  </v-card-subtitle>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="12" xs="12" sm="5" md="3" style="display: flex; align-items: center;">
              <v-img src="@/assets/smuscislogo.png"
                style="height: 100%; width: 100%; margin-top: 0.5em; padding-right: 2em;"></v-img>
            </v-col>
          </v-row>
          <v-row class="mt-2">
            <v-col cols="12" class="pt-0">
              <v-card-text style="font-size: 1.1rem;" class="text-wrap">
                <ul>
                  <li class="experiencelist">
                    Built a dynamic & responsive web application to help students with the overseas exchange application by web scraping vital
                    info from multiple websites, storing the data in a NoSQL Firebase Firestore Cloud Database & displaying the info accordingly
                  </li>
                  <li class="experiencelist">
                    Designed & curated the Cloud Database by organizing the data into relevant collections to documents to key-value pairs with
                    the overall aim of minimizing the various Client-side rendering duration across the web application when fetching data
                  </li>
                  <li class="experiencelist">
                    Developed & crafted the web app to have specially curated pages & unique nearby attractions function (Vue components)
                    specific to each university using REST country, Google maps & Google places API
                  </li>
                  <li class="experiencelist">
                    Created an automated web application-wide module mapping, user authentication & profile functionality, along with a review
                    viewing/ adding & favouriting system functionality that is unique to every university as well
                  </li>
                  <li class="experiencelist">
                    Developed with Vue.js, CSS, Bootstrap, Ant Design, JavaScript, Firebase's Firestore & Realtime Database (database, querying,
                    authentication) & deployed using Vercel, Website Link: <a href="https://smu-wad2-teosean-sgxchange.vercel.app/" target="__blank" style="color: #9cc9e3">SGXchange.vercel.app</a>
                  </li>
                </ul>
              </v-card-text>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default{

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
.experiencecard{
  width: 100%;
  height: 100%;
  color: hsl(204,23.8%,95.9%); 
  font-family: Space Grotesk;
  background-color: #0F1624;
  box-shadow:3px 3px 20px 5px rgb(80 78 78 / 50%);
  padding: 0.8rem;
}
.experiencelist{
  margin-bottom: 0.75em;
}
@media only screen and (max-width: 341px) {
  .experiencelist{
    margin-bottom: 0.75em;
    font-size: 0.95rem !important;
  }
}
</style>