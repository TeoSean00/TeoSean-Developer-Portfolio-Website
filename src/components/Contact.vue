<template>
    <!-- Contact component -->
    <v-container fluid class="mt-16 px-0" id="contact">
    <div class="componentdivider"></div>
    <v-row>
        <v-col cols="8">
        <h1 class="headerfont">
            Contact
        </h1>
        </v-col>
    </v-row>
    <v-row>
        <v-col cols="12" sm="12">
        <v-row>
            <v-col cols="12" md="3">
                <div>
                    <h1 class="subheaderfont2">Contact Info</h1>
                    <span class="linkfont">Click on the icons to be redirected!</span><br />
                    <v-btn icon="fab fa-github" class="mt-10 text-center" variant="outlined" href="https://github.com/TeoSean00/" target="_blank"></v-btn><br />
                    <span class="linkfont">github.com/TeoSean00</span><br />
            
                    <v-btn icon="fab fa-linkedin" class="mt-10 text-center" variant="outlined" href="https://www.linkedin.com/in/teosean/" target="_blank"></v-btn><br />
                    <span class="linkfont">linkedin.com/in/teosean</span><br />
            
                    <v-btn icon="fas fa-envelope" class="mailtoui mt-10 text-center" variant="outlined" href="mailto:teosean@outlook.com" target="_blank"></v-btn><br />
                    <span class="linkfont">teosean@outlook.com</span><br />
                </div>
            </v-col>

            <v-col cols="12" md="9">
                <h1 class="subheaderfont2">Send your message</h1>
                <v-divider></v-divider>
                <span class="pfontcontact">
                    Feel free to drop me a message regarding anything under the sun (collaboration, opportunities, networking,
                    hobbies), I look forward to receiving them!
                </span>
                <form ref="form" @submit.prevent="sendEmail">
                    <v-row class="mt-5">
                        <v-col cols="12" sm="4">
                            <v-text-field v-model="sender_name" name="sender_name" label="Name" persistent-hint variant="outlined"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="4">
                            <v-text-field v-model="sender_org" name="sender_org" label="Organisation" persistent-hint variant="outlined"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="4">
                            <v-text-field v-model="sender_email" name="sender_email" label="Email" persistent-hint variant="outlined"></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row class="mt-1">
                        <v-col cols="12">
                            <v-textarea v-model="sender_message" name="sender_message" label="Message" persistent-hint variant="outlined"></v-textarea>
                        </v-col>
                    </v-row>
                    <v-btn class="mt-2 formbutton text-none text-wrap" type="submit" value="Send">Submit</v-btn>
                </form>
            </v-col>
        </v-row>
        </v-col>
    </v-row>
    </v-container>
</template>

<script>
import emailjs from '@emailjs/browser';
import { useToast } from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';

export default {
    data() {
        return {
            sender_name: '',
            sender_org: '',
            sender_email: '',
            sender_message: '',
        }
    },
    methods: {
    sendEmail() {
        const $toast = useToast();
        if(this.sender_name !== '' && this.sender_org !== '' && this.sender_message !== '' && this.sender_email !== ''){
            emailjs.sendForm('service_zavzs48', 'template_dm0un79', this.$refs.form, 'Fia4_4nphvVTgneZc')
            .then(() => {
                $toast.success(
                    'You have successfully sent over your message, I will get back to you promptly! The page will now be refreshed.',
                    {
                        position: 'top',
                        duration: '5500',
                        dismissible: false
                    }
                );
                setTimeout(() => {
                    location.reload();
                }, 5500);
            }, (error) => {
                $toast.error(
                    'Unsuccessful, please refresh the page and try again. This will be looked into immediately, for other methods of communication, please feel free to click on the various social icons instead!',
                    {
                        position: 'top',
                        duration: '6000',
                        dismissible: true,
                        queue: true
                    }
                );
                console.log('FAILED', error.text);
            });
        }
        else{
            $toast.warning(
                'Please fill in all of the applicable fields before submitting the message, thank you!',
                {
                    position: 'top',
                    duration: '5000',
                    dismissible: true,
                    queue: true
                }
            )
        }
    }
  }
}

</script>

<style>
.pfontcontact{
    color: rgb(133, 137, 163);
    font-size: 1.3rem;
}
@media only screen and (max-width: 600px){
    .pfontcontact{
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
.subheaderfont2{
    font-size: 2rem;
}
.linkfont{
  color: rgb(133, 137, 163);
  font-size: 1rem;
  font-family: Space Grotesk;
}
.button{
    color: hsl(204,23.8%,95.9%); 
    font-family: Space Grotesk;
    font-size: 1.3rem;
    background-color: #fff;
    background: linear-gradient(270deg,#13ADC7 0%,#945DD6 100%);
    width: 100%;
}
.formbutton{
    color: hsl(204,23.8%,95.9%); 
    font-family: Space Grotesk;
    background-color: #fff;
    background: linear-gradient(270deg,#13ADC7 0%,#945DD6 100%);
    width: 25%;
    font-size: 0.95rem;
    transition: 0.05s;
}
.formbutton:hover{
    transform: translateY(-2px);
    box-shadow:3px 3px 30px 5px rgb(80 78 78 / 50%);
}
@media only screen and (max-width: 410px) {
    .formbutton{
        color: hsl(204,23.8%,95.9%); 
        font-family: Space Grotesk;
        background-color: #fff;
        background: linear-gradient(270deg,#13ADC7 0%,#945DD6 100%);
        width: 25%;
        font-size: 0.8rem !important ;
        transition: 0.05s;
    }
    .formbutton:hover{
        transform: translateY(-2px);
        box-shadow:3px 3px 30px 5px rgb(80 78 78 / 50%);
    }
}
</style>