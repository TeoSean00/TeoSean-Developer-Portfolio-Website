<template>
    <!-- Timeline component -->
    <v-container fluid class="mt-16 px-0" id="timeline">
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
          text: 'Embarked on my first Full Stack Developer Internship at Infocomm Media Development Authority (IMDA) for 8 months'
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
          text: 'Completed my first major school development project, titled \'SGXChange\' by collaborating and brainstorming with some friends. Developed with primarily Vue.js & Firebase with multiple external APIs, and it received notable feedbacks from the professors and achieved the highest grade too'
        },
        {
          year: '2022 Dec',
          text: 'Dived deep and began experimenting with designing and building my Developer Portfolio Website with Vue.js & Vuetify'
        },
        {
          year: '2023 April',
          text: 'Completed 2 major school development projects, titled \'GoBook\' and \'Vendor and Form Management System\'. GoBook was shortlisted for the VMware Tanzu Award in Singapore Management University (Top 3 Teams in the cohort), and the latter project received notable feedbacks from the external vendor and also achieved the highest grade (A+)'
        },
        {
          year: '2023 May',
          text: 'Embarked on a Full Stack Developer and Machine Learning Internship at the Agency for Science, Technology and Research (A*STAR) within the Institue of High Performance Computing (IHPC), under the A*STAR Research Internship Award Programme (ARIA)!'
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
    font-size: 0.9rem !important;
  }
  .month{
    color: rgb(133, 137, 163);
    font-size: 1.3rem !important;
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
.button{
    color: hsl(204,23.8%,95.9%); 
    font-family: Space Grotesk;
    font-size: 1.3rem;
    background-color: #fff;
    background: linear-gradient(270deg,#13ADC7 0%,#945DD6 100%);
    width: 100%;
}

</style>