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
    {
        name:"RegisterCandidatePage",
        path:"/candidate/add",
        component:()=>import("@/views/RegisterCandidate")
    },
    {
        name:"RegisterEmployerPage",
        path:"/employer/add",
        component:()=>import("@/views/RegisterEmployer")
    },
    {
        name:"EmployerDetailPage",
        path:"/employers/employer/:id",
        component:()=>import("@/views/EmployerDetail")
    },
]

const router = createRouter({
    routes,
    history: createWebHashHistory()
});


export default router;

