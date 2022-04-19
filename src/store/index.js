import Vue from 'vue'
import Vuex from 'vuex'
import dayjs from 'dayjs'
Vue.use(Vuex)

const actions = {
    add(context, value) {
        context.commit("ADD", value)
    },

    init(context, value) {
        if (value.user) {
            context.commit("SET_USER", value.user)
        }
        if (value.activity_config) {
            context.commit("SET_ACTIVITY_CONFIG", value.activity_config)
        }
        if (value.activity) {
            let activity = value.activity;
            if (!dayjs().isBefore(activity.end_at)) {
                activity.state = "ended";
            } else {
                activity.state = "inProgress";
            }
            document.title = activity.title;
            localStorage.activityId = activity.id;
            context.commit("SET_ACTIVITY", activity)
            // this.$store.dispatch("setActivity", activity);
        }
    },
    setMyPoster(context, value) {
        context.commit("SET_MY_POSTER", value)
    },

    setConfig(context, value) {
        context.commit("SET_CONFIG", value)
    },
    setActivity(context, value) {
        context.commit("SET_ACTIVITY", value)
    },
    setActivityConfig(context, value) {
        context.commit("SET_ACTIVITY_CONFIG", value)
    },
    setUser(context, value) {
        context.commit("SET_USER", value)
    },
    setInviter(context, value) {
        if (value == "undefined") return;
        context.commit("SET_INVITER", parseInt(value))
    },
    setApi(context, value) {
        context.commit("SET_API", value)
    },
}
const mutations = {
    ADD(state, value) {
        state.sum += value
    },
    SET_CONFIG(state, value) {
        state.config = value
    },
    SET_ACTIVITY(state, value) {
        state.activity = value
    },
    SET_ACTIVITY_CONFIG(state, value) {
        state.activityConfig = value
    },
    SET_USER(state, value) {
        state.user = value
    },
    SET_INVITER(state, value) {
        state.inviter = value
    },
    SET_API(state, value) {
        state.api = value
    },
    SET_MY_POSTER(state, value) {
        state.myPoster = value
    }
}
const state = {
    sum: 1,
    user: {},
    config: {},
    activity: {},
    activityConfig: {},
    inviter: undefined,
    api: "",
    myPoster: {
        activity_id: undefined,
        src: undefined,
    },
}
// 类似与计算属性
const getters = {
    multiple(state) {
        return state.sum * 10
    }
}

export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})