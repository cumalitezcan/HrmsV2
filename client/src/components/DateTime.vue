<template>
    <h6 class="btn btn-outline-secondary">{{currentDate}}</h6>
</template>

<script>
export default {
    data(){
        return{
            currentDate : new Date().toString().split(' ').slice(0,4).join(' ')
        }
    },

    
}
</script>