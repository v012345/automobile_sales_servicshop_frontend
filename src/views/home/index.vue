<template>
    <div>
        <template v-if="activity.id">
            <video
                preload="auto"
                width="100%"
                height="300"
                controls="controls"
                x5-video-player-fullscreen="false"
                x5-playsinline
                playsinline
                webkit-playsinline="true"
                :poster="$backend + activity.video_thumbnail"
            >
                <source :src="$backend + activity.video" type="video/mp4" />
            </video>

            <van-image width="100vw" fit="cover" :src="$backend + activity.poster" />
        </template>

        <van-form>
            <van-field v-model="activity.shop" label="门店名称" readonly placeholder="门店名称" />
            <van-field
                @click="call(activity.tel)"
                clickable
                v-model="activity.tel"
                label="门店电话"
                readonly
                placeholder="门店电话"
                right-icon="phone-o"
            />

            <van-field
                @click="locate(activity.location)"
                clickable
                readonly
                v-model="activity.address"
                label="门店地址"
                placeholder="门店地址"
                right-icon="location-o"
            />
        </van-form>
        <h3 ref="sign_up_form">信息登记处</h3>

        <van-form>
            <van-field
                v-model.trim="sign_up_form.licensePlateNumber"
                required
                label="车牌号"
                placeholder="车牌号"
            />
            <van-field
                required
                v-model.trim="sign_up_form.phoneNumber"
                label="手机号"
                placeholder="手机号"
                type="number"
            />
            <van-field required v-model.trim="sign_up_form.name" label="姓名" placeholder="姓名" />
            <van-field required v-model.trim="sign_up_form.carModel" label="车型" placeholder="车型" />
        </van-form>
        <div class="count-down">
            <img src="@/assets/countdown.png" />
            <div class="text">
                <template v-if="activity.state == 'inProgress'">
                    <div>报名参加活动</div>
                    <div>活动倒计时</div>
                    <div>
                        <van-count-down
                            @finish="activityEnds"
                            :time="countDown"
                            format="DD 天 HH时 mm分 ss秒"
                        />
                    </div>
                </template>
                <template v-else>
                    <div>活动已结束</div>
                    <div>下一场活动马上开启</div>
                </template>
            </div>
        </div>

        <template v-if="activity.id">
            <div
                class="van-hairline--bottom"
            >已有{{ activity.participants.length + activity.offset.participants }}人关注</div>
            <div class="participant-avatar">
                <div
                    class="avatar"
                    v-for="i in Math.min(33, activity.participants.length)"
                    :key="i.id"
                >
                    <van-image
                        width="90%"
                        round
                        fit="cover"
                        :src="activity.participants[i - 1].participant_info.avatar"
                    />
                </div>
            </div>
            <div
                class="van-hairline--bottom"
            >已参与{{ normalCoupons.total + activity.offset.coupons }}人</div>
            <div>
                <van-notice-bar :scrollable="false" style="padding: 0; height: 60px">
                    <van-swipe
                        class="notice-swipe"
                        vertical
                        :autoplay="3000"
                        :show-indicators="false"
                    >
                        <van-swipe-item
                            v-for="i in Math.ceil(normalCoupons.coupons.length / 2)"
                            :key="i"
                        >
                            <div class="swipe-item">
                                <div class="row" v-for="j in 2" :key="j">
                                    <div class="avatar">
                                        <van-image
                                            @click="log(normalCoupons.coupons[
                                                (i * 2 - (j % 2) - 1) % normalCoupons.coupons.length
                                            ].participant)"
                                            height="25px"
                                            width="25px"
                                            fit="cover"
                                            round
                                            :src="
                                                normalCoupons.coupons[
                                                    (i * 2 - (j % 2) - 1) % normalCoupons.coupons.length
                                                ].participant.participant_info.avatar
                                            "
                                        />
                                    </div>

                                    <div style="margin-right: 0.5rem;">
                                        {{
                                            normalCoupons.coupons[
                                                (i * 2 - (j % 2) - 1) % normalCoupons.coupons.length
                                            ].participant.participant_info.name
                                        }}
                                    </div>
                                    <div
                                        style="margin-right: 0.5rem"
                                        v-if="normalCoupons.coupons[
                                            (i * 2 - (j % 2) - 1) % normalCoupons.coupons.length
                                        ].participant.license_plate_number"
                                    >
                                        {{
                                            normalCoupons.coupons[
                                                (i * 2 - (j % 2) - 1) % normalCoupons.coupons.length
                                            ].participant.license_plate_number.replace(
                                                RegExp("^(...)(.*)(..)$"),
                                                "$1**$3"
                                            )
                                        }}
                                        <!-- .replace(
                                                /^(..)(.*)(.)$/,
                                                "$1**$3"
                                        )-->
                                    </div>
                                    <div style="margin-right: 0.5rem">
                                        {{
                                            normalCoupons.coupons[
                                                (i * 2 - (j % 2) - 1) % normalCoupons.coupons.length
                                            ].created_at
                                        }}
                                    </div>
                                    <div>
                                        已支付{{
                                            normalCoupons.coupons[
                                                (i * 2 - (j % 2) - 1) % normalCoupons.coupons.length
                                            ].value
                                        }}元
                                    </div>
                                </div>
                            </div>
                        </van-swipe-item>
                    </van-swipe>
                </van-notice-bar>
            </div>
        </template>

        <div class="coupon-buttons">
            <!-- <div @click="showCoupons = true"> -->
            <div @click="toCouponsView">
                <img src="@/assets/myCoupons.jpg" />
            </div>
            <div @click="scan">
                <img src="@/assets/useCoupons.jpg" />
            </div>
        </div>

        <template v-if="activity.id">
            <van-image
                v-for="(image, i) in activity.propaganda_images"
                :key="i"
                :src="$backend + image"
            />
        </template>
        <div style="display:flex;justify-content:center">
            <img @click="franchise" width="150px" height="45px" src="@/assets/apply_button.png" />
        </div>

        <div class="footer">{{ config.tech_surppot }}提供技术支持</div>

        <div class="share-button" @click="generatePoster">
            <van-icon size="40" color="#b8b8b8" name="share-o" />
        </div>

        <div class="bottom-buttons">
            <div class="introduction-button" @click="showIntroduction = true">
                <p>活动锦囊</p>
            </div>
            <template v-if="activity.state == 'ended'">
                <div class="sign-up-button">
                    <p>活动已结束</p>
                </div>
            </template>
            <template v-else>
                <template v-if="!haveACoupon">
                    <div class="sign-up-button" @click="buyCoupon">
                        <p>马上参与({{ activity.signing_up_fee }}元)</p>
                    </div>
                </template>
                <template v-if="haveACoupon">
                    <div class="sign-up-button">
                        <p>已参与({{ activity.signing_up_fee }}元)</p>
                    </div>
                </template>
            </template>
        </div>
        <div>
            <van-popup
                v-model="showIntroduction"
                closeable
                position="top"
                :style="{
                    minHeight: '100vw',
                    paddingTop: '3rem',
                    boxSizing: 'border-box',
                }"
            >
                <van-tabs type="card">
                    <van-tab title="活动说明">
                        <div style="margin-top: 1rem">
                            <van-button round type="default">参与记录</van-button>
                            <div
                                v-if="haveACoupon && availableCoupons.length > 0"
                            >{{ availableCoupons[0].created_at }}参加活动</div>
                            <div v-else>未参加</div>
                        </div>
                        <div>
                            <van-button round type="default">活动时间</van-button>
                            <div>{{ activity.start_at }} 至 {{ activity.end_at }}</div>
                        </div>
                        <div>
                            <van-button round type="default">技术支持</van-button>
                            <div>页面技术由{{ config.tech_surppot }}提供</div>
                        </div>
                    </van-tab>
                    <van-tab title="我的奖品">
                        <div v-for="coupon in availableCoupons" :key="coupon.id">
                            <Coupon
                                :value="coupon.value"
                                :allow_to_use_at="activity.allow_to_use_at"
                                :expire_at="activity.expire_at"
                                :description="activity.description"
                                :available="true"
                            ></Coupon>
                        </div>
                    </van-tab>
                </van-tabs>
            </van-popup>
        </div>

        <div>
            <van-popup v-model="poster.show" closeable>
                <div class="poster">
                    <van-image width="100%" :src="poster.src" />
                </div>
            </van-popup>
        </div>
    </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";

import { Toast, Dialog } from "vant";
import Coupon from "@/components/Coupon.vue";
import { mapState } from 'vuex'

export default {
    name: "Home",
    data() {
        return {

            showIntroduction: false,
            isPaying: false,
            poster: {
                show: false,
                src: "",
            },
            sign_up_form: {
                licensePlateNumber: "",
                phoneNumber: "",
                name: "",
                carModel: "",
            },

        };
    },
    components: {
        Coupon,

    },
    watch: {
    },
    computed: {
        ...mapState(['activity', 'user', "config", "inviter"]),
        haveACoupon() {
            if (this.user.id && this.activity.id) {
                let coupons = this.user.coupons.filter((coupon) => {
                    return (
                        coupon.activity_id == this.activity.id && coupon.type == "normal"
                    );
                });

                if (coupons.length > 0) {
                    return true;
                }
            }
            return false;
        },
        countDown() {
            if (this.activity.end_at) {
                if (!this.$dayjs().isBefore(this.activity.end_at)) {
                    return 0;
                }
                return Math.abs(
                    this.$dayjs().diff(this.activity.end_at, "millisecond")
                );
            }
            return 1 * 24 * 60 * 60 * 1000;
        },
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

        normalCoupons() {
            if (this.activity.id) {
                let coupons = this.activity.coupons.filter(
                    (coupon) => coupon.type == "normal"
                );
                coupons.reverse();
                return {
                    total: coupons.length,
                    coupons: coupons.slice(0, 50),
                };
            }
            return {
                total: 0,
                coupons: [],
            };
        },
    },
    methods: {
        log(n) { console.log(n) },
        toCouponsView() {
            this.$router.push('/coupons')
        },
        franchise() {
            this.$router.push('/franchise')
        },
        locate(coordinate) {
            this.$wx.openLocation({
                ...coordinate,
                scale: 17,
            });
        },
        call(n) {
            window.location.href = "tel://" + n;
        },
        buyCoupon() {
            if (!(this.user && this.user.id && this.activity && this.activity.id)) {
                Toast({ message: "请登记完整信息" });
                this.$refs.sign_up_form.scrollIntoView({ behavior: "smooth" });
                return;
            }



            if (
                !(
                    this.sign_up_form.licensePlateNumber &&
                    this.sign_up_form.licensePlateNumber.length > 5 &&
                    this.sign_up_form.phoneNumber &&
                    this.sign_up_form.name &&
                    this.sign_up_form.carModel
                )
            ) {
                Toast({ message: "请登记完整信息" });
                this.$refs.sign_up_form.scrollIntoView({ behavior: "smooth" });
                return;
            }
            if (this.isPaying) {
                return;
            }
            this.isPaying = true;
            this.axios
                .post(this.$api + "pay", {
                    amount: this.activity.signing_up_fee,
                    payer: this.user.id,
                    open_id: this.user.open_id,
                    activityId: this.activity.id,
                    inviter: this.inviter,
                    ...this.sign_up_form,
                })
                .then((response) => {
                    this.isPaying = false;
                    console.log(response.data);
                    this.$wx.chooseWXPay({
                        ...response.data,
                        timestamp: response.data.timeStamp,
                        success: () => {
                        },
                    });
                }).catch((error) => {
                    this.isPaying = false;
                    if (error.response.status == 500) {
                        Toast({ message: "请在微信内置浏览器中购买" })
                    } else if (error.response.status == 400) {
                        Toast({ message: "邀请好友购买后,您可以购买" })
                    }

                });
        },

        activityEnds() {
            this.activity.state = "ended";
        },

        scan() {
            //注意角色权限
            if (this.user.permission == "employee") {
                this.$wx.scanQRCode({
                    needResult: 1, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
                    // scanType: ["qrCode", "barCode"], // 可以指定扫二维码还是一维码，默认二者都有
                    success: (res) => {
                        // Toast({ message: res.resultStr });
                        this.axios
                            .put(this.$api + `coupon/${res.resultStr}/use`, {
                                temporaryId: localStorage.temporaryId,
                            })
                            .then((response) => {
                                if (response.status == 203) {
                                    Dialog.alert({
                                        title: "已核销",
                                        message: "请勿重复核销",
                                    });
                                    return;
                                }
                                Toast({ message: "核销成功" });
                            })
                            .catch(() => {
                                Toast({ message: "无核销权限" });
                            });
                    },
                });
            } else {
                Toast({ message: "请找工作人员进行核销" });
            }
        },

        generatePoster() {
            if (this.poster.src) {
                this.poster.show = true;
                return;
            }
            if (this.user.id && this.activity.id) {
                Toast.loading({
                    message: "正在为您生成海报",
                    forbidClick: true,
                    duration: 0,
                });

                this.axios
                    .get(
                        this.$api +
                        `activity/${this.activity.id}/participant/${this.user.id}/poster/`
                    )
                    .then((response) => {
                        Toast.clear();
                        this.poster.src = response.data;
                        this.poster.show = true;
                    });
            }
        },
    },
    mounted() {
        this.$bus.$on("activityReady", () => {
            this.sign_up_form.licensePlateNumber = this.activity.prefix
        });
        this.sign_up_form.licensePlateNumber = this.activity.prefix
        this.$Echo.channel(`4s`)
            .listen('Paid', (e) => {
                if (e.user_id == this.user.id) {
                    this.axios
                        .post(this.$api + "login", {
                            temporaryId: localStorage.temporaryId,
                        })
                        .then((response) => {
                            if (response.status == 200) {
                                this.$store.dispatch("setUser", response.data)
                            }
                        });
                    this.axios
                        .get(this.$api + "activity/" + this.activity.id)
                        .then((response) => {
                            if (!this.$dayjs().isBefore(response.data.end_at)) {
                                response.data.state = "ended";
                            } else {
                                response.data.state = "inProgress";
                            }
                            this.$store.dispatch("setActivity", response.data);
                        });
                }
            });
    },
};
</script>

<style lang="less" scoped>
.notice-swipe {
    height: 60px;
    line-height: 60px;
    .swipe-item {
        height: 60px;
        line-height: 60px;
        display: flex;
        flex-direction: column;
        .row {
            height: 30px;
            line-height: 30px;
            display: flex;
            align-items: center;
            .avatar {
                display: flex;
                align-items: center;
            }
        }
    }
}
.participant-avatar {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    .avatar {
        display: flex;
        justify-content: center;
        width: 9.09vw;
        height: 9.09vw;
    }
}
.coupon-buttons {
    display: flex;
    div {
        width: 50%;
        img {
            width: 100%;
        }
    }
}
.count-down {
    position: relative;
    width: 100vw;
    .text {
        color: aliceblue;
        height: 100%;
        position: absolute;
        top: 0;
        left: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
    }
    img {
        width: 100%;
    }
}
.poster {
    width: 80vw;
    height: 75vh;
    overflow: scroll;
    &::-webkit-scrollbar {
        display: none;
    }
}
.share-button {
    border: 3px solid #b8b8b8;
    position: fixed;
    bottom: 100px;
    border-radius: 50%;
    right: 10px;
    background-color: rgba(0, 0, 0, 0.397);
}
.footer {
    height: 140px;
    text-align: center;
}
.bottom-buttons {
    position: fixed;
    bottom: 2rem;
    display: flex;
    width: 100vw;

    .sign-up-button,
    .introduction-button {
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50%;
        height: 60px;
    }
    .introduction-button {
        background-color: rgb(255, 80, 1);
    }
    .sign-up-button {
        background-color: rgb(255, 144, 0);
    }
}
</style>


