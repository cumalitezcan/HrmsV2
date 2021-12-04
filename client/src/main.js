import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import {appAxios} from "@/utils/appAxios";
import store from './store';

import navbar from "@/components/Navbar";
import footer from "@/components/Footer";
import card from "@/views/home/Card";
import jobcard from "@/views/job-posting/JobCard";
import pagesize from "@/views/job-posting/PageSize";
import dropdown from "@/views/job-posting/Dropdown";
import imagecard from "@/views/candidate/ImageCard";
import employerbox from "@/views/employer/EmployerBox";
import detail from "@/components/Detail";
import datetime from "@/components/DateTime";


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'


const app = createApp(App);

app.component("Navbar",navbar);
app.component("Footer",footer);
app.component("Card",card);
app.component("PageSize",pagesize);
app.component("Dropdown",dropdown);
app.component("ImageCard",imagecard);
app.component("EmployerBox",employerbox);
app.component("JobCard",jobcard);
app.component("Detail",detail);
app.component("DateTime",datetime);

app.use(router);
app.use(store);
app.config.globalProperties.$appAxios = appAxios;

app.mount('#app');
