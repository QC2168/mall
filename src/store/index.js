import vue from "vue"
import Vuex from "vuex"
import  mutations from "./mutations"
import actions from "./actions"
import getters from "./getters";
vue.use(Vuex);
const state={
    Products:[],
    id:""
};
const store = new Vuex.Store({
    state,
    mutations,
    getters,
    actions,
});
export default store
