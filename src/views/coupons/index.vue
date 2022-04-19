<template>
    <div>
        <div v-if="user.id && activity.id && activityConfig.activity_id" class="card-container">
            <van-tabs type="card">
                <van-tab title="可用的" name="available">
                    <div v-for="coupon in availableCoupons" @click="dealWithTheCoupon(coupon)" :key="coupon.id">
                        <Coupon :value="activityConfig.normal_coupon_value" :allow_to_use_at="activity.allow_to_use_at"
                            :expire_at="activity.expire_at" :description="activityConfig.normal_coupon_description"
                            :available="coupon.state == 'available'"></Coupon>
                    </div>
                    <div v-for="coupon in sharedCoupons" @click="dealWithTheCoupon(coupon)" :key="coupon.id">
                        <Coupon :value="activityConfig.shared_coupon_value" :allow_to_use_at="activity.allow_to_use_at"
                            :expire_at="activity.expire_at" :description="activityConfig.shared_coupon_description"
                            :available="coupon.state == 'available'"></Coupon>
                    </div>
                </van-tab>
                <!-- <van-tab title="分享的" name="shared">
                    <div v-for="coupon in sharedCoupons" @click="dealWithTheCoupon(coupon)" :key="coupon.id">
                        <Coupon :value="activityConfig.shared_coupon_value" :allow_to_use_at="activity.allow_to_use_at"
                            :expire_at="activity.expire_at" :description="activityConfig.shared_coupon_description"
                            :available="coupon.state == 'available'"></Coupon>
                    </div>
                </van-tab> -->
                <van-tab title="失效的" name="expired">
                    <div v-for="coupon in expiredCoupons" :key="coupon.id">
                        <template v-if="coupon.type == 'normal'">
                            <Coupon :value="activityConfig.normal_coupon_value"
                                :allow_to_use_at="activity.allow_to_use_at" :expire_at="activity.expire_at"
                                :description="activityConfig.normal_coupon_description" :available="false"></Coupon>
                        </template>
                        <template v-else>
                            <Coupon :value="activityConfig.shared_coupon_value"
                                :allow_to_use_at="activity.allow_to_use_at" :expire_at="activity.expire_at"
                                :description="activityConfig.shared_coupon_description" :available="false"></Coupon>
                        </template>
                    </div>
                </van-tab>
            </van-tabs>
        </div>
        <div>
            <van-popup v-model="showQrcode">
                <van-image :src="qrcode" />
            </van-popup>
        </div>
        <div>
            <van-popup v-model="showOfficialAccountQrcode">
                <van-image :src="'http://cdn4s.100pq.cn/official_account_qrcode.jpg'" />
            </van-popup>
        </div>
        <div class="footer-nav">
            <van-button type="info" block @click="$router.back()">返回首页 <br> 已有人{{ activity.sales_number }}参与
            </van-button>
            <div class="middle-button">
                <van-button type="danger" @click="showOfficialAccountQrcode = true" size="large" block>关注公众号<br>获取更多好礼
                </van-button>
            </div>

            <van-button type="info" block @click="generatePoster">分享活动海报<br>获取活动奖品</van-button>
        </div>
    </div>
</template>

<script>
import { Toast } from "vant";
import Coupon from "@/components/Coupon.vue";
import { mapState } from 'vuex'
export default {
    name: "Coupons",
    data() {
        return {
            qrcode: "",
            showQrcode: false,
            showOfficialAccountQrcode: false,
        }
    },
    components: {
        Coupon,
    },
    computed: {
        ...mapState(['activity', 'user', "config", 'activityConfig', 'myPoster']),
        availableCoupons() {
            if (this.user.id && this.activity.id) {
                return this.user.coupons.filter(
                    (coupon) =>
                        coupon.activity_id == this.activity.id &&
                        this.$dayjs().isBefore(this.activity.expire_at) &&
                        coupon.type == "normal"
                );
            }
            return [];
        },
        sharedCoupons() {
            if (this.user.id && this.activity.id) {
                return this.user.coupons.filter(
                    (coupon) =>
                        coupon.activity_id == this.activity.id &&
                        this.$dayjs().isBefore(this.activity.expire_at) &&
                        coupon.type == "shared"
                );
            }
            return [];
        },
        expiredCoupons() {
            if (this.user.id && this.activity.id) {
                return this.user.coupons.filter(
                    (coupon) =>
                        coupon.activity_id == this.activity.id &&
                        !this.$dayjs().isBefore(this.activity.expire_at)
                );
            }
            return [];
        },
    },
    methods: {
        dealWithTheCoupon(coupon) {
            if (coupon.state == "available") {
                this.qrcode = this.$qrcode.getQrBase64(coupon.id.toString());
                this.showQrcode = true;
                return;
            } else if (coupon.state == "unactivated") {
                Toast({ message: "此券还没有激活,邀请好友后激活" });
                return;
            }
            Toast({ message: "此券已经核销" });
        },
        generatePoster() {

            if (this.myPoster) {
                if (this.myPoster.activity_id == this.activity.id) {
                    this.$router.push('/poster')
                    return
                }
            }

            if (this.user.id && this.activity.id) {
                Toast.loading({
                    message: "正在为您生成海报",
                    forbidClick: true,
                    duration: 0,
                });

                this.axios.post(this.$api + `v3/activity/${this.activity.id}/participant/${this.user.id}/poster`, {
                    content: window.location.origin + `/activity/${this.activity.id}/inviter/${this.user.id}`,
                    image: this.$qrcode.getQrBase64(window.location.origin + `/activity/${this.activity.id}/inviter/${this.user.id}`, {
                        width: 150,
                        height: 150,
                    })
                }).then((response) => {
                    Toast.clear();
                    this.$store.dispatch("setMyPoster", {
                        activity_id: this.activity.id,
                        src: response.data,
                    })
                    this.$router.push('/poster')
                });
            }
        },
    },
    created() {
        this.$Echo.channel(`4s`)
            .listen('Used', (e) => {
                if (e.user_id == this.user.id) {

                    this.axios.post(this.$api + "v3/init", {
                        activityId: localStorage.activityId,
                        temporaryId: localStorage.temporaryId
                    }).then((response) => {
                        this.showQrcode = false;
                        this.$store.dispatch("init", response.data);
                    })

                    // this.axios
                    //     .post(this.$api + "login", {
                    //         temporaryId: localStorage.temporaryId,
                    //     })
                    //     .then((response) => {
                    //         if (response.status == 200) {
                    //             this.$store.dispatch("setUser", response.data)
                    //         }
                    //     });
                }
            });
    }

}
</script>

<style lang="less" scoped>
.card-container {
    padding-top: 20px;
}

.footer-nav {
    position: fixed;
    width: 100vw;
    bottom: 0;
    display: flex;
    justify-content: space-around;
    align-items: flex-end;

    .middle-button {
        min-width: 38vw;
        margin: 0 5px;
    }
}
</style>