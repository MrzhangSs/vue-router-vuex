<template>
    <div>
        <h1>
            {{this.$store.state.first}}
        </h1>
        <button @click="reduce">点击减少</button>
    </div>
    

</template>
<script>
    export default{
        data() {
            return {

            }
        },
        methods:{
            reduce(){
                this.$store.commit('reduce')
            }
        }
    }
</script>
