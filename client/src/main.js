import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import {appAxios} from "@/utils/appAxios";
import store from './store';

import navbar from "@/components/Navbar";
import footer from "@/components/Footer";


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'





const app = createApp(App);

app.component("Navbar",navbar);
app.component("Footer",footer);
app.use(router);
app.use(store);
app.config.globalProperties.$appAxios = appAxios;

app.mount('#app');
