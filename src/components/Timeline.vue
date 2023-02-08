<template>
    <!-- Timeline component -->
    <v-container fluid class="mt-16 px-10" id="timeline">
    <div class="componentdivider"></div>      
    <v-row>
        <v-col cols="8">
        <h1 class="headerfont">
            Timeline
        </h1>
        </v-col>
    </v-row>
    </v-container>

    <v-container fluid class="mt-0 py-0 px-2">
      <v-row>
        <v-col cols="12" class="px-0">
          <v-timeline>
            <v-timeline-item
              v-for="(year, i) in years"
              :key="i"
              small>
              <template v-slot:opposite>
                <span
                  :class="`font-weight-bold month`"
                  v-text="year.year"
                ></span>
              </template>
              <div class="py-2">
                <span :class="`monthtext`"
                  v-text="year.text">
                </span>             
              </div>
            </v-timeline-item>
          </v-timeline>
        </v-col>
    </v-row>
    </v-container>
</template>

<script>

export default {
  data: () => ({
      years: [
        {
          year: '2021 July',
          text: 'Started my programming journey with my very first Python course'
        },
        {
          year: '2021 Aug',
          text: 'Enrolled in Singapore Management University\'s Bachelor of Science (Information Systems)'
        },
        {
          year: '2022 May',
          text: 'Embarked on my first Full Stack Developer Internship at Infocomm Media Development Authority (IMDA) for 7 months'
        },
        {
          year: '2022 Aug',
          text: 'Awarded the prestigious Singapore Digital (SG:D) Scholarship issued by IMDA'
        },
        {
          year: '2022 Sep',
          text: 'Created my first small solo project, a React Movieapp that is listed above!'
        },
        {
          year: '2022 Nov',
          text: 'Completed my first major school development project, titled \'SGXchange\' by collaborating and brainstorming with some friends. Developed with primarily Vue.js & Firebase with multiple external APIs, and it received notable feedbacks from the professors and achieved the highest score'
        },
        {
          year: '2022 Dec',
          text: 'Dived deep and started experimenting on designing and building my own portfolio website with Vue.js & Vuetify'
        },
      ],
    }),
};
</script>

<style>
.v-timeline-divider__before{
  background-color: hsl(204,23.8%,95.9%);
}
.v-timeline-divider__after{
  background-color: hsl(204,23.8%,95.9%);
}
.v-timeline-item__body{
  padding-inline-start: 16px !important;
  padding-inline-end: 16px !important;
}
.v-timeline-item__opposite{
  padding-inline-end: 16px !important;
  padding-inline-start: 16px !important;
}
.month{
  color: rgb(133, 137, 163);
  font-size: 1.4rem;
}
.monthtext{
  color: rgb(133, 137, 163);
  font-size: 1.12rem;
}
@media only screen and (max-width: 390px) {
  .monthtext{
    color: rgb(133, 137, 163);
    font-size: 0.85rem !important;
  }
  .month{
    color: rgb(133, 137, 163);
    font-size: 1.1rem !important;
  }
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
.subheaderfont{
  font-size: 1.85rem;
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

</style>