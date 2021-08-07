import Vue from "vue";
import Vuex from "vuex";
import login from "./modules/login";
import cookie from "vue-cookies";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    banerSelect: "home",
    name: cookie.get("name") || "",
    token: cookie.get("token") || "",
    status: cookie.get("status") || 0,
    type: cookie.get("type") || "",
  },
  mutations: {
    set_banerSelect: (state, data) => {
      state.banerSelect = data;
    },
    // savetoken: function(state, data) {
    //   //赋值
    //   state.token = data.token;
    //   //写入cookie
    //   cookie.set("token", data.token);
    // },
    set_name: (state, data) => {
      state.name = data;
      cookie.set("name", data);
    },
    // cleartoken: function() {
    //   cookie.set("name", "");
    //   cookie.set("token", "");
    // }
    set_status: (state, data) => {
      state.status = data;
      cookie.set("status", data);
    },
    set_type: (state, data) => {
      state.type = data;
      cookie.set("type", data);
    }
  },
  actions: {},
  modules: {
    login
  }
});
