<template>
  <div>
    <!-- <div>
      <video
        preload="auto"
        width="100%"
        height="300"
        controls="controls"
        x5-video-player-fullscreen="false"
        x5-playsinline=""
        playsinline=""
        webkit-playsinline="true"
        poster="http://amap.100pq.cn/disk/20220106/dc3fc9b725f6919b3e3df356c03399fb.png"
      >
        <source
        src=http://amap.100pq.cn/disk/videos/20220112/806133f34c30cf034b72db456a037f9d.mp4
        type="video/mp4" />
      </video>
    </div> -->

    <!-- <div>
      <van-image
        fit="cover"
        src="http://amap.100pq.cn/disk/20220106/367af4492c4a056063ec77bb530055bc.jpg"
      />
    </div> -->

    <van-form>
      <van-field
        v-model="activity.shop"
        label="门店名称"
        readonly
        placeholder="门店名称"
      />
      <van-field
        v-model="activity.tel"
        label="门店电话"
        readonly
        placeholder="门店电话"
      />
      <van-field
        readonly
        v-model="activity.address"
        label="门店地址"
        placeholder="门店地址"
      />
    </van-form>
    <div>
      <h3>信息登记处</h3>
    </div>
    <van-form>
      <van-field
        v-model="client.licensePlateNumber"
        required
        label="车牌号"
        placeholder="车牌号"
      />
      <van-field
        required
        v-model="client.phoneNumber"
        label="手机号"
        placeholder="手机号"
      />
      <van-field
        required
        v-model="client.name"
        label="姓名"
        placeholder="姓名"
      />
      <van-field
        required
        v-model="client.carModel"
        label="车型"
        placeholder="车型"
      />
    </van-form>
    <div class="count-down">
      <img src="./assets/countdown.png" />
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

    <template v-if="activity.id"
      ><div class="van-hairline--bottom">
        已有{{ activity.participants.length }}人关注
      </div>
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
      <div class="van-hairline--bottom">
        已参与{{ activity.participantCount }}人
      </div></template
    >

    <div class="coupon-buttons">
      <div @click="showCoupons = true">
        <img src="./assets/myCoupons.jpg" />
      </div>
      <div @click="scan">
        <img src="./assets/useCoupons.jpg" />
      </div>
    </div>

    <!-- <div>
      <van-image
        src="http://amap.100pq.cn/disk/20220106/d821587a0c06f5cd0dc22a4d9f87343b.png"
        alt=""
      />
      <van-image
        src="http://amap.100pq.cn/disk/20220106/f97757c1f61b926720136f88cdbf3416.jpg"
        alt=""
      />
      <van-image
        src="http://amap.100pq.cn/disk/20220106/e6f042229ada92fbe64fe5f6b345971e.jpg"
        alt=""
      />
      <van-image
        src="http://amap.100pq.cn/disk/20220106/8175e53403c11236d720e71a448b709c.jpg"
        alt=""
      />
    </div> -->
    <div class="footer">由****提供技术支持</div>

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
        position="top"
        :style="{ minHeight: '100vw', paddingTop: '1rem' }"
      >
        <van-tabs type="card">
          <van-tab title="活动说明">
            <div>
              <van-button round type="default">参与记录</van-button>
              <div v-if="haveACoupon">
                {{ availableCoupons[0].created_at }}参加活动
              </div>
              <div v-else>未参加</div>
            </div>
            <div>
              <van-button round type="default">活动时间</van-button>
              <div>{{ activity.start_at }} 至 {{ activity.end_at }}</div>
            </div>
            <div>
              <van-button round type="default">技术支持</van-button>
              <div>页面技术由"***"提供</div>
            </div>
          </van-tab>
          <van-tab title="我的奖品"> </van-tab> </van-tabs
      ></van-popup>
    </div>

    <div>
      <van-popup v-model="poster.show" closeable>
        <div class="poster"><van-image width="100%" :src="poster.src" /></div>
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
                :state="coupon.state"
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
                :state="coupon.state"
              ></Coupon></div
          ></van-tab>
          <van-tab title="失效的" name="expired">
            <div v-for="coupon in expiredCoupons" :key="coupon.id">
              <Coupon
                :value="coupon.value"
                :allow_to_use_at="activity.allow_to_use_at"
                :expire_at="activity.expire_at"
                :state="coupon.state"
              ></Coupon></div
          ></van-tab>
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

import { Toast } from "vant";
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
      activity: {},

      poster: {
        show: false,
        src: "",
      },
      client: {
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
    activity() {},
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
        return this.user.coupons.filter((coupon) => {
          return (
            coupon.activity_id == this.activity.id &&
            this.$dayjs().isBefore(this.activity.expire_at) &&
            coupon.type == "normal"
          );
        });
      }
      return [];
    },
    sharedCoupons() {
      if (this.user.id && this.activity.id) {
        return this.user.coupons.filter((coupon) => {
          return (
            coupon.activity_id == this.activity.id &&
            this.$dayjs().isBefore(this.activity.expire_at) &&
            coupon.type == "shared"
          );
        });
      }
      return [];
    },
    expiredCoupons() {
      if (this.user.id && this.activity.id) {
        return this.user.coupons.filter((coupon) => {
          return (
            coupon.activity_id == this.activity.id &&
            !this.$dayjs().isBefore(this.activity.expire_at)
          );
        });
      }
      return [];
    },
  },
  methods: {
    test1() {
      this.axios.post(this.$api + "posters/test").then((response) => {
        this.poster.src = response.data;
        this.poster.show = true;
      });
    },
    buyCoupon() {
      if (!(this.user.id && this.activity.id)) {
        return;
      }
      this.axios
        .post(this.$api + "pay", {
          amount: 0.01,
          payer: this.user.id,
          open_id: this.user.open_id,
          activityId: this.activity.id,
        })
        .then((response) => {
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
              Toast({ duration: 0, message: JSON.stringify(response.data) });
            });
          // var result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
        },
      });
    },

    dealWithTheCoupon(coupon) {
      if (coupon.state == "available") {
        this.qrcode = this.$qrcode.getQrBase64(coupon.id.toString());
        this.showQrcode = true;
      }
    },

    generatePoster() {
      this.axios
        .post("http://localhost/api/posters", {
          userId: 123,
        })
        .then((response) => {
          // console.log(response.data);
          this.poster.src = response.data;
          this.poster.show = true;
        });
    },
  },
  mounted() {
    localStorage.activityId =
      window.location.href.match(/(?<=\/activity\/)(\d+)/g) ||
      localStorage.activityId;

    this.axios
      .get(this.$api + "activity/" + localStorage.activityId)
      .then((response) => {
        if (!this.$dayjs().isBefore(response.data.end_at)) {
          response.data.state = "ended";
        } else {
          response.data.state = "inProgress";
        }
        this.activity = response.data;
        localStorage.activityId = response.data.id;
      });

    localStorage.inviter =
      window.location.href.match(/(?<=\/inviter\/)(\d+)/g) ||
      localStorage.inviter;
    this.inviter = localStorage.inviter;

    if (!localStorage.temporaryId) {
      localStorage.temporaryId = this.$uuid.v1();
    }
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
          if (
            localStorage.activityId &&
            localStorage.activityId != "undefined"
          ) {
            this.axios.post(this.$api + "user/activity", {
              userId: this.user.id,
              activityId: localStorage.activityId,
            });
          }
        }
      });

    this.$wx.ready(() => {
      //需在用户可能点击分享按钮前就先调用
      this.$wx.updateAppMessageShareData({
        title: "title321", // 分享标题
        desc: "desc123", // 分享描述
        link: "http://amap.100pq.cn/activity/1/inviter/12", // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        imgUrl:
          "https://www.google.com/url?sa=i&url=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3AUser_icon_2.svg&psig=AOvVaw2H1JS2UmBkgL1TBmSZ3la6&ust=1643260367689000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCKi4-4XUzvUCFQAAAAAdAAAAABAD", // 分享图标
        success: () => {
          Toast({ message: "updateAppMessageShareData" });
        },
      });
      this.$wx.updateTimelineShareData({
        title: "title321", // 分享标题
        link: "http://amap.100pq.cn/activity/1/inviter/12", // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        imgUrl:
          "https://www.google.com/url?sa=i&url=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3AUser_icon_2.svg&psig=AOvVaw2H1JS2UmBkgL1TBmSZ3la6&ust=1643260367689000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCKi4-4XUzvUCFQAAAAAdAAAAABAD", // 分享图标

        success: () => {
          Toast({ message: "updateTimelineShareData" });
        },
      });
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
      });
  },
};
</script>

<style lang="less" scoped>
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
