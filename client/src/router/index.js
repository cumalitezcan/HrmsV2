import {createRouter, createWebHistory} from "vue-router";


const routes = [
    {
        name:"HomePage",
        path:"/",
        component:()=>import('@/views/home/index')
    },
    {
        name:"LoginPage",
        path:"/login",
        component:()=>import("@/views/Login")
    },
   
    {
        name:"JobPostingPage",
        path:"/jobPostings",
        component:()=>import('@/views/job-posting/index')
    },
    {
        name:"CandidatePage",
        path:"/candidates",
        component:()=>import("@/views/candidate/index")
    },
    {
        name:"EmployerPage",
        path:"/employers",
        component:()=>import('@/views/employer/index')
    },
    {
        name:"AboutPage",
        path:"/about",
        component:()=>import('@/views/about')
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
    history: createWebHistory(),
    
    
});


export default router;

