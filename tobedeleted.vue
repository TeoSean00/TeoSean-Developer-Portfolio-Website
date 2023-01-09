

<!-- About section -->
<!-- <v-col cols="12" class="mt-16" id="about">
  <div>
    <v-row>
      <v-col cols="12" sm="6">
        <div class="aboutdesign">
          <v-img src="@/assets/profilepic.jpg" class="aboutimage"></v-img>
        </div>
      </v-col>
      <v-col cols="12" sm="6">
        <h5 class="mt-16">About Me</h5>
        <div style="width: 120px">
          <v-slider v-model="slider2" color="blue">

          </v-slider>
        </div>
        <h4 class="mt-n4">I am sean</h4>
        <h4>and Developer</h4>
        <p class="text-grey">
          In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is availabl
        </p>
        <br/>
        <p class="text-grey">
          In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is availabl
        </p>
        <v-btn tile dark color="blue" class="mt-4">
          Download Resume
        </v-btn>
      </v-col>
    </v-row>
  </div>
</v-col> -->
<!-- <div class="text-center mt-4">
  <h2>What we Do</h2>
  <div style="width: 120px; margin: 0 auto">
    <v-slider v-model="slider2" color="blue"></v-slider>
  </div>
</div>
<v-col cols="12" class="pad" id="portfolio">
  <div class="first" id="project">
    <v-row>
      <v-col cols="12">
        <div class="child">
          <v-btn icon="fas fa-laptop" color="#2196F3" class="text-white"></v-btn>
          <h3 class="ml-3 mt-4">Web Design</h3>
          <p class="text-grey ml-3 mt-4 text-caption">
            Lorem ipsum is a placeholder text commonly <br/>
            used to demonstrate the visual form of a document <br />
            or a typeface without relying on meaningful content. <br />
            Lorem ipsum may be used as a placeholder before final copy
          </p>
        </div>
        <div class="child">
          <v-btn icon="fas fa-mobile" color="#2196F3" class="text-white"></v-btn>
          <h3 class="ml-3 mt-4">Web Design</h3>
          <p class="text-grey ml-3 mt-4 text-caption">
            Lorem ipsum is a placeholder text commonly <br/>
            used to demonstrate the visual form of a document <br />
            or a typeface without relying on meaningful content. <br />
            Lorem ipsum may be used as a placeholder before final copy
          </p>
        </div>
      </v-col>
    </v-row>
    <v-divider></v-divider>
  </div>
</v-col>

<v-col cols="12" sm="12" id="services">
  <div class="d-flex justify-center mb-6">
    <v-btn color="#2196F3" class="mr-2">Test</v-btn>
    <v-btn class="mr-2" variant="tonal">Test</v-btn>
    <v-btn class="mr-2" variant="tonal">Test</v-btn>
    <v-btn class="mr-2" variant="tonal">Test</v-btn>
  </div>
</v-col>
<v-col cols="12" class="imgHover">
  <v-row class="fill-height" align="center" justify="center">
    <template v-for="(item, index) in items" :key="index">
      <v-col cols="12" md="4">
        <v-hover v-slot="{isHovering, props}">
          <v-card :elevation="isHovering ? 12: 2" 
          :class="{'on-hover': isHovering}"
          v-bind="props">
          <v-img :src="item.img" height="225px" cover></v-img>
        </v-card>
        </v-hover>
      </v-col>
    </template>
  </v-row>
</v-col>

<v-col cols="12" sm="12">
  <div class="d-flex justify-center mb-6">
    <v-btn color="#2196F3" class="mt-4">Load More</v-btn>
  </div>
</v-col>
<v-col cols="12" id="page">
  <div class="pre">
    <v-row>
      <v-col cols="12" sm="4">
        <v-card class="mw-auto" max-width="344px">
          <v-img src="@/assets/profilepic.jpg" height="200px" cover></v-img>
          <v-card-title>We provide u the best</v-card-title>
          <v-card-subtitle>
            By Sean
          </v-card-subtitle>
          <v-card-text>
            In publishing and graphic design
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="4">
        <v-card class="mw-auto" max-width="344px">
          <v-img src="@/assets/profilepic.jpg" height="200px" cover></v-img>
          <v-card-title>We provide u the best</v-card-title>
          <v-card-subtitle>
            By Sean
          </v-card-subtitle>
          <v-card-text>
            In publishing and graphic design
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="4">
        <v-card class="mw-auto" max-width="344px">
          <v-img src="@/assets/profilepic.jpg" height="200px" cover></v-img>
          <v-card-title>We provide u the best</v-card-title>
          <v-card-subtitle>
            By Sean
          </v-card-subtitle>
          <v-card-text>
            In publishing and graphic design                
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</v-col>

<v-col cols="12" id="blog">
  <div class="hire">
    <v-row>
      <v-col cols="12" sm="8">
        <h1>Hire me for your work</h1>
        <p class="text-grey">
          In publishing and graphic design                
        </p>
      </v-col>
      <v-col cols="12" sm="4">
        <v-btn color="#2196F3" class="mt-15">Hire Me</v-btn>
      </v-col>
    </v-row>
  </div>
</v-col> -->


<style scoped>

.v-container{
  padding: 16px 0px;
}
.head{
  position: relative;
  text-align: center;
  padding: 12px;
  margin-bottom: 6px;
  height: 400px;
  color: white;
}
.head::before{
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 50%;
  background: black;
  transform: skew(0deg, 6deg)
}
.head::after{
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 50%;
  background: black;
  transform: skew(0deg, -6deg)
}
.aboutdesign{
  position: relative;
  display: block;
  margin-left: 100px;
  margin-top: 50px;
  width: 356px;
  height: 300px;
  background-color:#2196F3;
  border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
}

.aboutimage{
  width: 50%;
  position: absolute; 
  margin-top: 29%;
  margin-left: 25%;
}

.first{
  width: 100%;
  height: 280px;
  text-align: center;
  padding: 2rem 2rem;
}

.child{
  display: inline-block;
  vertical-align: middle;
  text-align: center;
  margin-right: 8px;
}

.imgHover{
  padding: 0 200px;
}

.pre{
  width: 100%;
  height: 380px;
  text-align: center;
  padding: 0 200px;
  background-color: whitesmoke;
}

.hire{
  width: 100%;
  height: 200px;
  padding: 0 200px;
  background-color: whitesmoke;
  margin-top: 24px;
  color: rgb(71, 75, 106)
}
</style>