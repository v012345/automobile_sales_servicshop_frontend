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
  created() {
    if (sessionStorage.getItem("store")) {
      this.$store.replaceState(Object.assign({}, this.$store.state, JSON.parse(sessionStorage.getItem("store"))))
    }
    window.addEventListener("beforeunload", () => {
      sessionStorage.setItem("store", JSON.stringify(this.$store.state))
    })
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
          this.$store.dispatch("setUser", response.data)
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
}
</script>