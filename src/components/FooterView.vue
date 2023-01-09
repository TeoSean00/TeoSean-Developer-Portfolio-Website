<template>
    <!-- Footer component -->
    <v-container fluid class="pt-10 pb-5 text-center main" id="footer">
        <v-row class="pt-1">
            <v-col cols="12">
                <h1 class="footerfont">
                    © {{ new Date().getFullYear() }} Teo Sean | All Rights Reserved
                </h1>
            </v-col>
        </v-row>
    </v-container>

    <!-- <v-footer>
            <v-card elevation="0" rounded="0" width="100%" class="bg-grey text-center">
                <v-card-text>
                    <v-btn class="mx-3" icon="fas fa-comment" variant="plain" color="white"></v-btn>
                    <v-btn class="mx-3" icon="fas fa-university" variant="plain" color="white"></v-btn>
                    <v-btn class="mx-3" icon="fas fa-wifi" variant="plain" color="white"></v-btn>
                    <v-btn class="mx-3" icon="fas fa-podcast" variant="plain" color="white"></v-btn>
                </v-card-text>
                <v-card-text class="text-white">
                    
                </v-card-text>
            </v-card>
        </v-footer> -->
</template>

<script>
export default {

}

</script>

<style>
.v-footer{
    padding: 8px 0 !important;
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
.footerfont{
    font-size: 1.1rem;
    color: rgb(133, 137, 163);
}
</style>