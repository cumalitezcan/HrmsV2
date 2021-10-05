import {createRouter, createWebHashHistory} from "vue-router";


const routes = [
    {
        name:"HomePage",
        path:"/",
        component:()=>import("@/views/Home")
    },
    {
        name:"LoginPage",
        path:"/login",
        component:()=>import("@/views/Login")
    },
    {
        name:"RegisterPage",
        path:"/register",
        component:()=>import("@/views/Register")
    },
    {
        name:"JobPostingPage",
        path:"/jobposting",
        component:()=>import("@/views/JobPosting")
    },
    {
        name:"CandidatePage",
        path:"/candidate",
        component:()=>import("@/views/Candidate")
    },
    {
        name:"EmployerPage",
        path:"/employer",
        component:()=>import("@/views/Employer")
    },
    {
        name:"AboutPage",
        path:"/about",
        component:()=>import("@/views/About")
    },
]

const router = createRouter({
    routes,
    history: createWebHashHistory()
});


export default router;

