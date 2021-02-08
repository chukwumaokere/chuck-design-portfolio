<template>
  <div class="h-screen w-screen flex z-10 bg-black dark:bg-opacity-60 bg-opacity-40 fixed overflow-auto top-0 left-0 p-10 sm:p-0">
      <div class="container m-auto h-auto sm:w-1/3 sm:h-auto bg-white rounded-xl p-5 sm:p-8 dark:bg-gray-700">
        <div class="container h-auto">
            <button @click="emitCloseModal" class="float-right">
                <svg class="w-6 h-6 dark:text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
            <div class="sm:flex">
                <h1 class="circular-font text-4xl sm:text-4xl dark:text-white">Lets talk business!</h1>
            </div>
            <p class="pt-5 pb-8 text-lg sm:text-xl text-gray-400 dark:text-gray-400">Please fill out all fields so I know you're real!</p> 
            <div class="h-full relative">
                <div class="flex flex-col sm:grid sm:grid-cols-2 sm:gap-10">
                    <div class="pb-5">
                        <input
                            type="text"
                            class="flex sm:p-6 placeholder-gray-400 dark:placeholder-gray-400 dark:bg-gray-600 dark:border-transparent dark:focus:border-gray-800 dark:text-white w-full border rounded-xl focus:border-indigo-300 pl-4 h-10 transition ease-in duration-200 focus:outline-none focus:shadow-outline focus:shadow-lg active:shadow-lg"
                            placeholder="Name: John Doe"
                            id="name"
                            autocomplete="off"
                        />
                    </div>
                    <div class="pb-5">
                        <input
                            type="text"
                            class="flex sm:p-6 placeholder-gray-400 dark:placeholder-gray-400 dark:bg-gray-600 dark:border-transparent dark:focus:border-gray-800 dark:text-white w-full border rounded-xl focus:border-indigo-300 pl-4 h-10 transition ease-in duration-200 focus:outline-none focus:shadow-outline focus:shadow-lg active:shadow-lg"
                            placeholder="Email: email@yourdomain.com"
                            id="email"
                            autocomplete="off"
                        />
                    </div>
                </div>
                <div class="pb-5">
                    <input
                        type="text"
                        class="flex sm:p-6 placeholder-gray-400 dark:placeholder-gray-400 dark:bg-gray-600 dark:border-transparent dark:focus:border-gray-800 dark:text-white w-full border rounded-xl focus:border-indigo-300 pl-4 h-10 transition ease-in duration-200 focus:outline-none focus:shadow-outline focus:shadow-lg active:shadow-lg"
                        placeholder="Subject: I'm interested!"
                        id="subject"
                        autocomplete="off"
                    />
                </div>
                <div class="h-48 pb-5">
                    <textarea
                        class="p-2 sm:p-5 flex form-textarea box-border w-full h-full sm:h-full placeholder-gray-400 dark:placeholder-gray-400 dark:bg-gray-600 dark:border-transparent dark:focus:border-gray-800 dark:text-white  border rounded-xl focus:outline-none focus:border-indigo-300 px-4 transition ease-in duration-200 focus:shadow-outline focus:shadow-lg active:shadow-lg"
                        placeholder="Message: I dont know, something like 'Hey! Lets work together sometime! My company is looking for a product designer and you'd be great for the role! Contact me @ ....' Put your own spin on it!"
                        id="body"
                        
                        autocomplete="off"
                    ></textarea>
                </div>
                <div class="float-right">
                    <button @click="sendMail" class="flex items-center px-4 py-2 sm:px-4 sm:py-2 focus:outline-none justify-center rounded transition ease-in bg-blue-400 hover:bg-blue-600 shadow-xl text-white dark:bg-red-500 dark:hover:bg-red-700 dark:text-gray-100">
                        <svg class="w-5 h-5 transform rotate-90 -mr-px"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                        </svg>
                        <span class="pl-2">Send Email</span>
                    </button>
                </div>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
const formData = require('form-data');
const Mailgun = require('mailgun.js');
const mailgun = new Mailgun(formData);
const mg = mailgun.client({username: process.env.VUE_APP_MG_USERNAME, key: process.env.VUE_APP_MG_API_KEY})
const dm = process.env.VUE_APP_MG_DOMAIN;
import Swal from 'sweetalert2'

export default {
    emits: ['close-modal'],
    methods: {
        sendMail(){
            let email = document.getElementById('email').value;
            let subject = document.getElementById('subject').value;
            let name = document.getElementById('name').value;
            let body = document.getElementById('body').value;
            if(body != '' && email != '' && subject != '' && name != ''){
                let from_string = `${name} <${email}>`;
                let data = {
                    from: `postmaster@mg.socialites.app`,
                    to: 'chukwumaokere@yahoo.com,chuckokere@socialites.app',
                    subject: subject,
                    text: `${from_string}\n\n${body}`,
                };
                //console.log(data, mg, this.mg, dm);
                
                mg.messages.create(dm, data).then(msg => {
                    //console.log('message sent', msg);
                    if(msg.message == 'Queued. Thank you.'){
                        document.getElementById('email').value = '';
                        document.getElementById('subject').value = '';
                        document.getElementById('name').value = '';
                        document.getElementById('body').value = '';
                        this.emitCloseModal();
                        Swal.fire('Thank You!', 'Your message has been sent.', 'success');    
                    }else{
                        //console.log('error received', msg.message);
                        Swal.fire('Error', `Something went wrong. Please try again.\n${msg.message}`, 'error');
                    }
                }).catch(err => {
                    //console.log('error received', err);
                    Swal.fire('Error', `Something went wrong. Please try again.\n${err}`, 'error');
                });
            }else{
                Swal.fire('Error', `Please fill out all fields to proceed.`, 'error');
            }
            
        },
        emitCloseModal(){
            this.$emit('close-modal');
        }
    }
}
</script>

<style>

</style>