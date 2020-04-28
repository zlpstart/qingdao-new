<template>
    <div class="A">
        <button @click="add">传参</button>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                res:[],
            }
        },
        methods:{
            add(){
                axios.get("http://jsonplaceholder.typicode.com/users")
                    .then(res => {
                        this.res = res
                        console.log(this.res)
                    })
                this.$router.push({
                    path:'/B',
                    query:{
                        data:this.res
                    }
                })
            }
        }
    }
</script>

<style>

</style>