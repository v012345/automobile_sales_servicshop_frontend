<template>
    <div>
        <van-overlay :show="true">
            <div class="wrapper" @click.stop>
                <van-button type="primary" @click="buy">支付0.01元</van-button>
            </div>
        </van-overlay>
    </div>
</template>

<script>
import { Toast } from "vant";
import { mapState } from 'vuex'
export default {
    name: "Pay",
    data() {
        return {
            isPaying: false
        }
    },
    computed: {
        ...mapState(['user']),
    },
    methods: {
        buy() {
            if (!this.user.id) {
                Toast({ message: "正加在载个人信息,请稍等" });
                return;
            }

            if (this.isPaying) {
                Toast({ message: "正在购买,请稍等" });
                return;
            }
            this.isPaying = true;
            this.axios.post(this.$api + "v3/self/pay", {
                open_id: this.user.open_id,
                hostname: window.location.origin,
            }).then((response) => {
                this.isPaying = false;
                this.$wx.chooseWXPay({
                    ...response.data,
                    timestamp: response.data.timeStamp,
                    success: () => {
                        Toast({ message: "支付成功" })
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
    },
}
</script>

<style>
.wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
}

.block {
    width: 120px;
    height: 120px;
    background-color: #fff;
}
</style>