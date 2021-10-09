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
import jobcard from "@/components/JobCard";


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

const app = createApp(App);

app.component("Navbar",navbar);
app.component("Footer",footer);
app.component("Card",card);
app.component("Pages",pages);
app.component("PageSize",pagesize);
app.component("Dropdown",dropdown);
app.component("ImageCard",imagecard);
app.component("EmployerBox",employerbox);
app.component("JobCard",jobcard);
app.use(router);
app.use(store);
app.config.globalProperties.$appAxios = appAxios;

app.mount('#app');
