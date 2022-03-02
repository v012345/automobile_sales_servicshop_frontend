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
      <van-field required v-model.trim="sign_up_form.phoneNumber" label="手机号" placeholder="手机号" />
      <van-field required v-model.trim="sign_up_form.name" label="姓名" placeholder="姓名" />
      <van-field required v-model.trim="sign_up_form.carModel" label="车型" placeholder="车型" />
    </van-form>
    <div class="count-down">
      <img src="./assets/countdown.png" />
      <div class="text">
        <template v-if="activity.state == 'inProgress'">
          <div>报名参加活动</div>
          <div>活动倒计时</div>
          <div>
            <van-count-down @finish="activityEnds" :time="countDown" format="DD 天 HH时 mm分 ss秒" />
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
        <div class="avatar" v-for="i in Math.min(33, activity.participants.length)" :key="i.id">
          <van-image
            width="90%"
            round
            fit="cover"
            :src="activity.participants[i - 1].participant_info.avatar"
          />
        </div>
      </div>
      <div class="van-hairline--bottom">已参与{{ normalCoupons.total + activity.offset.coupons }}人</div>
      <div>
        <van-notice-bar :scrollable="false" style="padding: 0; height: 60px">
          <van-swipe class="notice-swipe" vertical :autoplay="3000" :show-indicators="false">
            <van-swipe-item v-for="i in Math.ceil(normalCoupons.coupons.length / 2)" :key="i">
              <div class="swipe-item">
                <div class="row" v-for="j in 2" :key="j">
                  <div class="avatar">
                    <van-image
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

                  <div style="margin-right: 0.5rem">
                    {{
                      normalCoupons.coupons[
                        (i * 2 - (j % 2) - 1) % normalCoupons.coupons.length
                      ].participant.participant_info.name
                    }}
                  </div>
                  <div style="margin-right: 0.5rem">
                    {{
                      normalCoupons.coupons[
                        (i * 2 - (j % 2) - 1) % normalCoupons.coupons.length
                      ].participant.license_plate_number.replace(
                        /^(..)(.*)(.)$/,
                        "$1**$3"
                      )
                    }}
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
                        (i * 2 - (j % 2)) % normalCoupons.coupons.length
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
      <div @click="showCoupons = true">
        <img src="./assets/myCoupons.jpg" />
      </div>
      <div @click="scan">
        <img src="./assets/useCoupons.jpg" />
      </div>
    </div>

    <template v-if="activity.id">
      <van-image v-for="(image, i) in activity.propaganda_images" :key="i" :src="$backend + image" />
    </template>

    <div class="footer">由{{ config.tech_surppot }}提供技术支持</div>

    <div class="share-button" @click="generatePoster">
      <van-icon size="40" color="#b8b8b8" name="share-o" />
    </div>

    <div class="bottom-buttons">
      <div class="introduction-button" @click="showIntroduction = true">
        <p>活动锦囊</p>
      </div>
      <template v-if="activity.state == 'end'">
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

    <div v-if="user.id && activity.id">
      <van-popup
        v-model="showCoupons"
        closeable
        position="bottom"
        :style="{
          height: '100vh',
          paddingTop: '3rem',
          boxSizing: 'border-box',
        }"
      >
        <van-tabs type="card">
          <van-tab title="可用的" name="available">
            <div
              v-for="coupon in availableCoupons"
              @click="dealWithTheCoupon(coupon)"
              :key="coupon.id"
            >
              <Coupon
                :value="coupon.value"
                :allow_to_use_at="activity.allow_to_use_at"
                :expire_at="activity.expire_at"
                :description="activity.description"
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
                :value="coupon.value"
                :allow_to_use_at="activity.allow_to_use_at"
                :expire_at="activity.expire_at"
                :available="coupon.state == 'available'"
              ></Coupon>
            </div>
          </van-tab>
          <van-tab title="失效的" name="expired">
            <div v-for="coupon in expiredCoupons" :key="coupon.id">
              <Coupon
                :value="coupon.value"
                :allow_to_use_at="activity.allow_to_use_at"
                :expire_at="activity.expire_at"
                :available="false"
              ></Coupon>
            </div>
          </van-tab>
        </van-tabs>
      </van-popup>
    </div>
    <div>
      <van-popup v-model="showQrcode">
        <van-image :src="qrcode" />
      </van-popup>
    </div>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";

import { Toast, Dialog } from "vant";
import Coupon from "./components/Coupon.vue";

export default {
  name: "App",
  data() {
    return {
      qrcode: "",
      showQrcode: false,
      inviter: undefined,
      showIntroduction: false,
      user: {},
      config: {},
      activity: {},

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
      showCoupons: false,
    };
  },
  components: {
    Coupon,
  },
  watch: {
    activity() { },
  },
  computed: {
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
    normalCoupons() {
      if (this.activity.id) {
        let coupons = this.activity.coupons.filter(
          (coupon) => coupon.type == "normal"
        );
        coupons = coupons.reverse();
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
      if (!(this.user.id && this.activity.id)) {
        return;
      }

      if (
        !(
          this.sign_up_form.licensePlateNumber &&
          this.sign_up_form.phoneNumber &&
          this.sign_up_form.name &&
          this.sign_up_form.carModel
        )
      ) {
        Toast({ message: "请登记完整信息" });
        this.$refs.sign_up_form.scrollIntoView({ behavior: "smooth" });
        return;
      }
      this.axios
        .post(this.$api + "pay", {
          amount: 0.01,
          payer: this.user.id,
          open_id: this.user.open_id,
          activityId: this.activity.id,
          inviter: this.inviter,
          ...this.sign_up_form,
        })
        .then((response) => {
          console.log(response.data);
          this.$wx.chooseWXPay({
            ...response.data,
            timestamp: response.data.timeStamp,
            success: () => {
              //起websocket的,等之后吧
              setTimeout(() => {
                this.axios
                  .post(this.$api + "login", {
                    temporaryId: localStorage.temporaryId,
                  })
                  .then((response) => {
                    if (response.status == 200) {
                      this.user = response.data;
                    }
                  });
              }, 3000);
            },
          });
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

    dealWithTheCoupon(coupon) {
      if (coupon.state == "available") {
        this.qrcode = this.$qrcode.getQrBase64(coupon.id.toString());
        this.showQrcode = true;
        return;
      }
      Toast({ message: "此券已经核销" });
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
    localStorage.activityId =
      window.location.href.match(/(?<=\/activity\/)(\d+)/g) ||
      localStorage.activityId;

    localStorage.inviter =
      window.location.href.match(/(?<=\/inviter\/)(\d+)/g) ||
      localStorage.inviter;
    if (localStorage.inviter != "undefined") {
      this.inviter = localStorage.inviter;
    }

    if (!localStorage.temporaryId) {
      localStorage.temporaryId = this.$uuid.v1();
    }

    this.axios.get(this.$api + "system/config").then((response) => {
      this.config = response.data
    });

    this.axios
      .get(this.$api + "activity/" + localStorage.activityId)
      .then((response) => {
        document.title = response.data.title;
        if (!this.$dayjs().isBefore(response.data.end_at)) {
          response.data.state = "ended";
        } else {
          response.data.state = "inProgress";
        }
        this.activity = response.data;
        this.$emit("updateShareData");
        localStorage.activityId = response.data.id;
      });
    this.axios
      .post(this.$api + "login", {
        temporaryId: localStorage.temporaryId,
      })
      .then((response) => {
        if (response.status == 204) {
          this.axios
            .get(this.$api + "wechat/redirect_uri/" + localStorage.temporaryId)
            .then((response) => {
              window.location.href = response.data;
            });
        } else if (response.status == 200) {
          this.user = response.data;
          this.$emit("updateShareData");
          if (
            localStorage.activityId &&
            localStorage.activityId != "undefined"
          ) {
            this.axios.post(this.$api + "activity/participate", {
              userId: this.user.id,
              activityId: localStorage.activityId,
            });
          }
        }
      });
    this.$on("updateShareData", () => {
      if (this.user.id && this.activity.id) {
        let config = {
          title: `${this.user.name}向您分享${this.activity.title}`,
          desc: this.activity.description,
          link:
            window.location.origin +
            `/activity/${this.activity.id}/inviter/${this.user.id}`,
          imgUrl: this.$backend + this.activity.poster,
        };
        // this.$wx.updateAppMessageShareData(config);
        this.$wx.updateTimelineShareData(config);
        this.$wx.onMenuShareAppMessage(config);
      }
    });

    this.axios
      .get(this.$api + "wechat/jssdk", {
        params: {
          url: window.location.href,
        },
      })
      .then((response) => {
        this.$wx.config({
          ...response.data,
        });
        this.$emit("updateShareData");
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


