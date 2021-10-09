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
        path:"/jobPostings",
        component:()=>import("@/views/JobPosting")
    },
    {
        name:"CandidatePage",
        path:"/candidates",
        component:()=>import("@/views/Candidate")
    },
    {
        name:"EmployerPage",
        path:"/employers",
        component:()=>import("@/views/Employer")
    },
    {
        name:"AboutPage",
        path:"/about",
        component:()=>import("@/views/About")
    },
    {
        name:"JobPostingDetail",
        path:"/jobPostings/jobPosting/:id",
        component:()=>import("@/views/JobPostingDetail")
    },
]

const router = createRouter({
    routes,
    history: createWebHashHistory()
});


export default router;

