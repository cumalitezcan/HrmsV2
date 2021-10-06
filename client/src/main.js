import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import {appAxios} from "@/utils/appAxios";
import store from './store';

import navbar from "@/components/Navbar";
import footer from "@/components/Footer";
import card from "@/components/Card";
import pages from "@/components/Pages";
import pagesize from "@/components/PageSize";
import dropdown from "@/components/Dropdown";
import imagecard from "@/components/ImageCard";
import employerbox from "@/components/EmployerBox";


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'


const app = createApp(App);

app.component("Navbar",navbar);
app.component("Footer",footer);
app.component("Card",card);
app.component("Pages",pages);
app.component("PageSize",pagesize);
app.component("Dropdown",dropdown);
app.component("ImageCard",imagecard);
app.component("EmployerBox",employerbox);
app.use(router);
app.use(store);
app.config.globalProperties.$appAxios = appAxios;

app.mount('#app');
