<template>
    <div>
        <h1>
            {{this.$store.state.second}}
        </h1>
        <button @click="increment">点击我增加</button>
    </div>    
</template>
<script>
    export default{
        data() {
            return {
                
            }
        },
        methods:{
            increment(){
                this.$store.commit('increment')
            }
        }
    }
</script>
