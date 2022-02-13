import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const actions = {
    add(context, value) {
        context.commit("ADD", value)
    },
    setConfig(context, value) {
        context.commit("SET_CONFIG", value)
    },
    setActivity(context, value) {
        context.commit("SET_ACTIVITY", value)
    },
    setUser(context, value) {
        context.commit("SET_USER", value)
    },
    setInviter(context, value) {
        if (value == "undefined") return;
        context.commit("SET_INVITER", parseInt(value))
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
    SET_USER(state, value) {
        state.user = value
    },
    SET_INVITER(state, value) {
        state.inviter = value
    }
}
const state = {
    sum: 1,
    user: {},
    config: {},
    activity: {},
    inviter: undefined,
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