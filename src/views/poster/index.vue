<template>
    <div>
        <div>
            <van-image :src="myPoster.src" />
        </div>
        <div>
            <p v-html="activityConfig.poster_desc"></p>
        </div>
    </div>
</template>

<script>
// import { Toast } from "vant";
import { mapState } from 'vuex'
export default {
    name: "Pay",
    data() {
        return {

        }
    },
    computed: {
        ...mapState(['myPoster', "activityConfig"]),
    },
    methods: {

    },
    beforeDestroy() {
       
    }
}
</script>

<style>
</style>