<template>
    <!-- For the dynamic and responsive Navbar -->
    <v-app-bar
        id="navbar" 
        class="px-4" 
        style="z-index: 999; position: fixed; background-color: #0F1624; font-family: Space Grotesk; color: hsl(204,23.8%,95.9%);"
        :class="{ 'hideNavbar': showNavbar }"
    >
        <v-app-bar-nav-icon class="mb-1" @click="openList()" v-if="drawersmall"></v-app-bar-nav-icon>
        <v-btn text @click="scroll('home')" v-if="!drawermed" class="text-none navbarfont mr-n2">
            <v-icon color="white" left class="mr-2 mb-1">fas fa-signature</v-icon>Sean
        </v-btn>

        <v-spacer></v-spacer>

        <v-btn text @click="scroll('about')" v-if="!drawersmall" class="text-none navbarfont mr-n2">About</v-btn>
        <v-btn text @click="scroll('experience')" v-if="!drawersmall" class="text-none navbarfont mr-n2">Experience</v-btn>
        <v-btn text @click="scroll('projects')" v-if="!drawersmall" class="text-none navbarfont mr-n2">Projects</v-btn>
        <v-btn text @click="scroll('technologies')" v-if="!drawersmall" class="text-none navbarfont mr-n2">Technologies</v-btn>
        <v-btn text @click="scroll('timeline')" v-if="!drawersmall" class="text-none navbarfont mr-n2">Timeline</v-btn>
        <v-btn text @click="scroll('accomplishments')" v-if="!drawersmall" class="text-none navbarfont mr-n2">Accomplishments</v-btn>
        <v-btn text @click="scroll('contact')" v-if="!drawersmall" class="text-none navbarfont">Contact</v-btn>

        <v-spacer></v-spacer>

        <v-btn href="https://www.linkedin.com/in/teosean/" target="_blank" v-if="!drawersmallmed" class="text-none navbarfont">
            <v-icon color="white" left class="mr-2 mb-1">fab fa-linkedin</v-icon>Linkedin
        </v-btn>
        <v-btn class="ml-n3 text-none navbarfont" href="https://github.com/TeoSean00/" target="_blank" v-if="!drawersmallmed">
            <v-icon color="white" left class="mr-2 mb-1">fab fa-github</v-icon>Github
        </v-btn>
    </v-app-bar>

    <!-- For the navigational drawer when the hamburger icon is clicked, where hamburger icon appears only when past a certain screen size small enough -->
    <v-navigation-drawer 
        id="hamburger-drawer"
        v-model="openlist" 
        temporary 
        style="position: fixed; background-color: #0F1624; font-family: Space Grotesk; color: hsl(204,23.8%,95.9%); z-index: 1000; font-size: 15.5px;"
        :class="{ 'hideNavbar': showNavbar }"
    >
        <v-list density="compact" nav style="z-index: 1000">
            <v-list-item @click="scroll('home')" style="background-color: #0F1624; font-size: 15.5px;">
                <v-icon left class="mr-3 mb-2">fas fa-signature</v-icon>Sean
            </v-list-item>
            <v-list-item @click="scroll('about')" class="ml-1" style="background-color: #0F1624">
                About
            </v-list-item>
            <v-list-item @click="scroll('experience')" class="ml-1" style="background-color: #0F1624">
                Experience
            </v-list-item>
            <v-list-item @click="scroll('projects')" class="ml-1" style="background-color: #0F1624">
                Projects
            </v-list-item>
            <v-list-item @click="scroll('technologies')" class="ml-1" style="background-color: #0F1624">
                Technologies
            </v-list-item>
            <v-list-item @click="scroll('timeline')" class="ml-1" style="background-color: #0F1624">
                Timeline
            </v-list-item>
            <v-list-item @click="scroll('accomplishments')" class="ml-1" style="background-color: #0F1624">
                Accomplishments
            </v-list-item>
            <v-list-item @click="scroll('contact')" class="ml-1" style="background-color: #0F1624;">
                Contact
            </v-list-item>
            <v-list-item>
                <v-btn class="ml-n3 text-none" href="https://www.linkedin.com/in/teosean/" target="_blank" style="background-color: #0F1624; color: hsl(204,23.8%,95.9%); font-family: Space Grotesk;">
                    <v-icon left class="mb-1 mr-2">fab fa-linkedin</v-icon>Linkedin
                </v-btn>
            </v-list-item>
            <v-list-item>
                <v-btn class="ml-n3 text-none" href="https://github.com/TeoSean00/" target="_blank" style="background-color: #0F1624; color: hsl(204,23.8%,95.9%); font-family: Space Grotesk;">
                    <v-icon left class="mb-1 mr-2">fab fa-github</v-icon>Github
                </v-btn>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>

    <!-- potential pointing up chevron to indicate navbar disappear -->
    <!-- <div id="navbar1-scroll" :class="{ 'hideNavbar': showNavbar }">
        <span class="down-arrow-1"></span>
        <span class="down-arrow-2"></span>
    </div>    -->

</template>

<script>
import "@fontsource/space-grotesk"
export default {
    data() {
        return{
            openlist: false,
            drawermed: false,
            drawersmall: false,
            drawersmallmed: false,
            showNavbar: false,
            lastScrollTop: 0,
        }
    },
    beforeUnmount () {
      if (typeof window === 'undefined') return

      window.removeEventListener('resize', this.onResize, { passive: true })
      window.removeEventListener('resize', this.onResizeSmall, { passive: true })
      window.removeEventListener('resize', this.onResizeSmallMed, { passive: true })
    },
    mounted () {
      this.onResize()
      this.onResizeSmall()
      this.onResizeSmallMed()

      window.addEventListener('resize', this.onResize, { passive: true })
      window.addEventListener('resize', this.onResizeSmall, { passive: true })
      window.addEventListener('resize', this.onResizeSmallMed, { passive: true })
      window.addEventListener('scroll', this.onScroll);
    },
    unmounted() {
      window.removeEventListener('scroll', this.onScroll);
    },
    methods: {
        onScroll() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if (scrollTop > this.lastScrollTop) {
            // Scrolling down
            this.showNavbar = true;
            } else {
            // Scrolling up
            this.showNavbar = false;
            }
            this.lastScrollTop = scrollTop;
        },
        scroll(name) {
            const element = document.getElementById(name);
            element.scrollIntoView({behavior: 'smooth'});
        },
        onResize () {
            this.drawermed = window.innerWidth < 1180
        },
        onResizeSmall () {
            this.drawersmall = window.innerWidth < 835
        },
        onResizeSmallMed () {
            this.drawersmallmed = window.innerWidth < 1070
        },
        openList(){
            if(this.openlist == false){
                this.openlist = true
            } else{
                this.openlist = false
            }
        }
    },
}
</script>

<style>
.navbarfont{
    font-size: 0.95rem;
}
.hideNavbar {
    opacity: 0;
    pointer-events: none;
} 
#navbar, #hamburger-drawer {
    transition: opacity 1.5s ease-in-out;
}
/*
#navbar1-scroll {
    display: block;   
    margin: auto;
    z-index: 999;
    width: 100%;
    transition: opacity 1.3s ease-in-out;
    margin-top: 65px;
}
#navbar1-scroll span{
    display: block;
    width: 14px; 
    height: 14px;
    transform: rotate(225deg);
    border-right: 2px solid #fff; 
    border-bottom: 2px solid #fff;
    margin: auto;
}
#navbar1-scroll .down-arrow-1 {
margin-top: 6px;
}
#navbar1-scroll .down-arrow-1, #navbar1-scroll .down-arrow-2, #navbar1-scroll .down-arrow-3 {
animation: navbar1-scroll 1s infinite; 
}
#navbar1-scroll .down-arrow-1 {
    animation-delay: .1s; 
    animation-direction: alternate;
}
#navbar1-scroll .down-arrow-2 {
animation-delay: .2s; 
animation-direction: alternate;
}
#navbar1-scroll .down-arrow-3 {
    animation-delay: .3s;
    -moz-animation-dekay: .3s;
    animation-direction: alternate;
}
#navbar1-scroll .navbar1-in {
height: 12px;
width: 3px;
display: block; 
margin: 7px auto;
background: #ffffff;
position: relative;
}
#navbar1-scroll .navbar1-in {
animation: animated-navbar1 1.4s ease infinite;
}

@keyframes animated-navbar1 {
0% {
    opacity: 1;
    transform: translateY(0);
}
100% {
    opacity: 0;
    transform: translateY(6px);
}
}
@keyframes navbar1-scroll {
0% {
    opacity: 1;
}
50% {
    opacity: .5;
}
100% {
    opacity: 1;
} 
}
@keyframes navbar1-scroll {
0% {
    opacity: 0;
}
50% {
    opacity: 0.5;
}
100% {
    opacity: 1;
}
}
*/
</style>