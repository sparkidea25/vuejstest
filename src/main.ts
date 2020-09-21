import { createApp } from 'vue'
import App from './App.vue'

// import VueFirestore from 'vue-firestore';

// createApp.use(VueFirestore)

import './assets/tailwind.css';

import store from './store'


createApp(App).use(store).mount('#app')





