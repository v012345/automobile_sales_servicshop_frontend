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
    if (sessionStorage.getItem("store")) {
      // this.$store.replaceState(Object.assign({}, this.$store.state, JSON.parse(sessionStorage.getItem("store"))))
    }

    // report user browse duration
    localStorage.open_at = this.$dayjs().unix()
    window.addEventListener("pagehide", () => {
      sessionStorage.setItem("store", JSON.stringify(this.$store.state))
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

    try {
      let response = await this.axios.post(this.$api + "v3/init", {
        activityId: localStorage.activityId,
        temporaryId: localStorage.temporaryId
      })
      console.log(response.data)
      if (response.data.activity) {
        let activity = response.data.activity
        document.title = activity.title;
        if (!this.$dayjs().isBefore(activity.end_at)) {
          activity.state = "ended";
        } else {
          activity.state = "inProgress";
        }
        this.$store.dispatch("setActivity", activity);
        localStorage.activityId = activity.id;
      }
      if (response.data.user) {
        let user = response.data.user
        this.$store.dispatch("setUser", user)
        this.axios.post(this.$api + "activity/participate", {
          userId: user.id,
          activityId: localStorage.activityId,
        });
      } else {
        throw new Error()
      }

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

    // fetch the activity
    // try {
    //   let response = await this.axios.get(this.$api + "activity/" + localStorage.activityId)
    //   console.log("fetched the activity", response.data);
    //   document.title = response.data.title;
    //   if (!this.$dayjs().isBefore(response.data.end_at)) {
    //     response.data.state = "ended";
    //   } else {
    //     response.data.state = "inProgress";
    //   }
    //   this.$store.dispatch("setActivity", response.data);
    //   localStorage.activityId = response.data.id;
    // } catch (err) {
    //   if (err.response) {
    //     let status = err.response.status;
    //     if (status == 404) {
    //       console.log("no activity");
    //       document.title = "目前还没有活动,请耐心等待"
    //     }
    //   }
    // }

    //fetch activity config
    try {
      let response = await this.axios.post(this.$api + "v3/activity/configration", {
        activityId: localStorage.activityId,
      })
      this.$store.dispatch("setActivityConfig", response.data);
      console.log("activity config", response.data);
      localStorage.activityId = response.data.activity_id;
    } catch (err) {
      console.log("no activity config")
    }


    // login
    // try {
    //   let response = await this.axios.post(this.$api + "v3/login", {
    //     temporaryId: localStorage.temporaryId,
    //   })
    //   console.log("user login", response.data);
    //   this.$store.dispatch("setUser", response.data)
    //   this.axios.post(this.$api + "activity/participate", {
    //     userId: this.user.id,
    //     activityId: localStorage.activityId,
    //   });

    // } catch (err) {
    //   if (err.response) {
    //     let status = err.response.status;
    //     if (status == 404) {
    //       this.axios
    //         .get(this.$api + "v3/wechat/redirect_uri/" + localStorage.temporaryId, {
    //           params: {
    //             hostname: window.location.origin,
    //             redirect_to: window.location.href
    //           }
    //         })
    //         .then((response) => {
    //           window.location.href = response.data;
    //         });
    //     }
    //     if (status == 400) {
    //       console.error("missing temporary id")
    //     }
    //   }
    // }

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
  },
}
</script>