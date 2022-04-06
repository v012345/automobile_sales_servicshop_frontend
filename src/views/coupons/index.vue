<template>
    <div>
        <div v-if="user.id && activity.id && activityConfig.activity_id" class="card-container">
            <van-tabs type="card">
                <van-tab title="可用的" name="available">
                    <div
                        v-for="coupon in availableCoupons"
                        @click="dealWithTheCoupon(coupon)"
                        :key="coupon.id"
                    >
                        <Coupon
                            :value="activityConfig.normal_coupon_value"
                            :allow_to_use_at="activity.allow_to_use_at"
                            :expire_at="activity.expire_at"
                            :description="activityConfig.normal_coupon_description"
                            :available="coupon.state == 'available'"
                        ></Coupon>
                    </div>
                </van-tab>
                <van-tab title="分享的" name="shared">
                    <div
                        v-for="coupon in sharedCoupons"
                        @click="dealWithTheCoupon(coupon)"
                        :key="coupon.id"
                    >
                        <Coupon
                            :value="activityConfig.shared_coupon_value"
                            :allow_to_use_at="activity.allow_to_use_at"
                            :expire_at="activity.expire_at"
                            :description="activityConfig.shared_coupon_description"
                            :available="coupon.state == 'available'"
                        ></Coupon>
                    </div>
                </van-tab>
                <van-tab title="失效的" name="expired">
                    <div v-for="coupon in expiredCoupons" :key="coupon.id">
                        <template v-if="coupon.type == 'normal'">
                            <Coupon
                                :value="activityConfig.normal_coupon_value"
                                :allow_to_use_at="activity.allow_to_use_at"
                                :expire_at="activity.expire_at"
                                :description="activityConfig.normal_coupon_description"
                                :available="false"
                            ></Coupon>
                        </template>
                        <template>
                            <Coupon
                                :value="activityConfig.shared_coupon_value"
                                :allow_to_use_at="activity.allow_to_use_at"
                                :expire_at="activity.expire_at"
                                :description="activityConfig.shared_coupon_description"
                                :available="false"
                            ></Coupon>
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
            showQrcode: false
        }
    },
    components: {
        Coupon,
    },
    computed: {
        ...mapState(['activity', 'user', "config", 'activityConfig']),
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
            }
            Toast({ message: "此券已经核销" });
        },
    },
    created() {
        this.$Echo.channel(`4s`)
            .listen('Used', (e) => {
                if (e.user_id == this.user.id) {
                    this.showQrcode = false;
                    this.axios
                        .post(this.$api + "login", {
                            temporaryId: localStorage.temporaryId,
                        })
                        .then((response) => {
                            if (response.status == 200) {
                                this.$store.dispatch("setUser", response.data)
                            }
                        });
                }
            });
    }

}
</script>

<style lang="less" scoped>
.card-container {
    padding-top: 20px;
}
</style>