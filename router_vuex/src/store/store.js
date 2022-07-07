import Vue from 'vue';
import Vuex from 'vuex';
import { LocalStorageManage } from '../API/localStorage/localStorage';



Vue.use(Vuex);

export default new Vuex.Store({
    state() {
    },

    actions: {

    },

    getters: {

    },

    mutations: {
        storageAddItem(item) {
            let storage = new LocalStorageManage(item);
            storage.setId();
        },
    },
})