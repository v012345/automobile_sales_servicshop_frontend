<template>
    <div>
        <div>
            <van-image :src="myPoster.src" />
        </div>
        <div>
            <p>
                工工工工工工工
            </p>
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
}
</script>

<style>
</style>