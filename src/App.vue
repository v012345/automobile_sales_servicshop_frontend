<template>
  <div>
    <router-view />
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: "App",
  data() {
    return {
    };
  },
  watch: {
  },
  computed: {
    ...mapState(['activity', 'user'])
  },
  beforeDestroy() {

  },
  async created() {
    // restore context
    // if (sessionStorage.getItem("store")) {
    //   this.$store.replaceState(Object.assign({}, this.$store.state, JSON.parse(sessionStorage.getItem("store"))))
    // }

    // restore context
    if (localStorage.getItem("storeV3")) {
      this.$store.replaceState(Object.assign({}, this.$store.state, JSON.parse(localStorage.getItem("storeV3"))))
    }

    // report user browse duration
    localStorage.open_at = this.$dayjs().unix()
    window.addEventListener("pagehide", () => {
      // sessionStorage.setItem("store", JSON.stringify(this.$store.state))
      localStorage.setItem("storeV3", JSON.stringify(this.$store.state))
      let left_at = Math.floor(Date.now() / 1000)
      let open_at = parseInt(localStorage.open_at)
      let duration = left_at - open_at
      navigator.sendBeacon(process.env.VUE_APP_API + "analytics",
        new Blob([JSON.stringify({ user: this.$store.state.user.id, activity: this.$store.state.activity.id, duration })]));
    })
    this.$store.dispatch("setApi", this.$api)


    // get global config
    this.axios.get(this.$api + "system/config").then((response) => {
      this.$store.dispatch("setConfig", response.data)
      console.log(response.data)
    });


    // extract inviter id
    let result = window.location.href.match(RegExp("(/inviter/)([0-9]+)"));
    if (result) {
      localStorage.inviter = result[result.length - 1]
    }
    this.$store.dispatch("setInviter", localStorage.inviter)

    // generate  temporary id 
    if (!localStorage.temporaryId) {
      localStorage.temporaryId = this.$uuid.v1();
    }


    // extract activity id
    result = window.location.href.match(RegExp("(/activity/)([0-9]+)"))
    if (result) {
      localStorage.activityId = result[result.length - 1]
    }

    // let searchParams = new URLSearchParams(paramsString);

    try {
      let response = await this.axios.post(this.$api + "v3/init", {
        activityId: localStorage.activityId,
        temporaryId: localStorage.temporaryId
      })
      this.$store.dispatch("init", response.data);
      this.axios.post(this.$api + "activity/participate", {
        userId: response.data.user.id,
        activityId: response.data.activity.id,
      });
      this.axios.post(this.$api + "v3/ask/participant/has_coupon", {
        activityId: response.data.activity.id,
        temporaryId: localStorage.temporaryId
      }).then(response => {
        console.log(response.data)
        if (response.data) { this.$router.push('/coupons').catch(() => { }); }
      })
    } catch (err) {
      this.axios
        .get(this.$api + "v3/wechat/redirect_uri/" + localStorage.temporaryId, {
          params: {
            hostname: window.location.origin,
            redirect_to: window.location.href
          }
        })
        .then((response) => {
          window.location.href = response.data;
        });
    }

    this.$Echo.channel(`test`).listen("Test", (e) => {
      console.log(e)
    })


    // config jssdk
    try {
      let response = await this.axios.get(this.$api + "wechat/jssdk", {
        params: {
          url: window.location.href,
        },
      })
      console.log("jssdk configration", response.data);
      this.$wx.config({
        ...response.data,
      });
    } catch (err) {
      console.error("jssdk config failed")
    }

    let config = {
      title: `${this.activity.title}`,
      desc: `${this.user.name}: ` + this.activity.description,
      link:
        window.location.origin +
        `/activity/${this.activity.id}/inviter/${this.user.id}`,
      // imgUrl: this.$backend + this.activity.poster,
      imgUrl: this.$backend + "/storage/20220423/bqyBJR4WBeTl2A334vTbYOslhn8A4PsthoNNSqIs.png",
    };
    // this.$wx.updateAppMessageShareData(config);
    this.$wx.updateTimelineShareData(config);
    this.$wx.onMenuShareAppMessage(config);
  },
}
</script>