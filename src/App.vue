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
  created() {
    // window.addEventListener("beforeunload", function () {
    //   navigator.sendBeacon(this.$api + "analytics", {
    //     user: this.user.id,
    //     activity: this.activity.id,
    //     duration: 10,
    //   });
    // })


    // navigator.sendBeacon(this.$api + "analytics",
    //  ;

    // console.log(this.$dayjs());

    if (sessionStorage.getItem("store")) {
      this.$store.replaceState(Object.assign({}, this.$store.state, JSON.parse(sessionStorage.getItem("store"))))
    }
    localStorage.open_at = this.$dayjs().unix()

    // window.addEventListener("beforeunload", () => {
    //   sessionStorage.setItem("store", JSON.stringify(this.$store.state))

    //   let left_at = Math.floor(Date.now() / 1000)
    //   let open_at = parseInt(localStorage.open_at)
    //   let duration = left_at - open_at
    //   navigator.sendBeacon(this.$store.state.api + "analytics",
    //     new Blob([JSON.stringify({ user: this.$store.state.user.id, activity: this.$store.state.activity.id, duration })]));
    // })
    window.addEventListener("pagehide", () => {
      sessionStorage.setItem("store", JSON.stringify(this.$store.state))
      let left_at = Math.floor(Date.now() / 1000)
      let open_at = parseInt(localStorage.open_at)
      let duration = left_at - open_at
      navigator.sendBeacon(this.$store.state.api + "analytics",
        new Blob([JSON.stringify({ user: this.$store.state.user.id, activity: this.$store.state.activity.id, duration })]));
    })



    this.$store.dispatch("setApi", this.$api)

    this.axios.get(this.$api + "system/config").then((response) => {
      this.$store.dispatch("setConfig", response.data)
    });


    // localStorage.activityId =
    //   window.location.href.match(RegExp("(?<=/activity/)([0-9]+)", 'g'))

    let result = window.location.href.match(RegExp("(/activity/)([0-9]+)"));
    if (result) {
      localStorage.activityId = result[result.length - 1]
    }


    result = window.location.href.match(RegExp("(/inviter/)([0-9]+)"));
    if (result) {
      localStorage.inviter = result[result.length - 1]
    }

    // localStorage.activityId =
    //   window.location.href.match(/(?<=\/activity\/)(\d+)/g) 

    // localStorage.inviter =
    //   window.location.href.match(/(?<=\/inviter\/)(\d+)/g) 

    this.$store.dispatch("setInviter", localStorage.inviter)

    // if (localStorage.inviter != "undefined") {
    //   this.inviter = localStorage.inviter;
    // }

    if (!localStorage.temporaryId) {
      localStorage.temporaryId = this.$uuid.v1();
    }

    this.axios
      .get(this.$api + "activity/" + localStorage.activityId)
      .then((response) => {
        document.title = response.data.title;
        if (!this.$dayjs().isBefore(response.data.end_at)) {
          response.data.state = "ended";
        } else {
          response.data.state = "inProgress";
        }
        this.$store.dispatch("setActivity", response.data);
        this.$emit("updateShareData");
        localStorage.activityId = response.data.id;
      });





    // login
    this.axios
      .post(this.$api + "v3/login", {
        temporaryId: localStorage.temporaryId,
      })
      .then((response) => {
        console.log(123);
        console.log(response);
        this.$store.dispatch("setUser", response.data)
        this.$emit("updateShareData");
        this.$bus.$emit("activityReady");
        if (
          localStorage.activityId &&
          localStorage.activityId != "undefined"
        ) {
          this.axios.post(this.$api + "activity/participate", {
            userId: this.user.id,
            activityId: localStorage.activityId,
          });
        }
      }).catch((err) => {
        if (err.response) {
          let status = err.response.status;
          if (status == 404) {
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
          if (status == 400) {
            console.error("missing temporary id")
          }

          // console.log(err.response.status); // 👉️ 404
          // console.log(err.response.statusText); // 👉️ Not Found
          // console.log(err.message); // 👉️ Request failed with status code 404
          // console.log(err.response.headers); // 👉️ {... response headers here}
          // console.log(err.response.data); // 

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
}
</script>