import Vue from 'vue';
import Vuex from 'vuex';
import { LocalStorageManage } from '../API/localStorage/localStorage';



Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        data: [],
    },

    actions: {

    },

    getters: {
        data(state) {
            return state.data;
        }
    },

    mutations: {
        storageAddItem(item) {
            let storage = new LocalStorageManage(item);
            storage.setId();
        },

        storageAddData(state) {
            let storage = new LocalStorageManage('');
            storage.setItemData('data', JSON.stringify(state.data));
        },

        storageSetData(state) {
            let storage = new LocalStorageManage('');
            state.data = JSON.parse(storage.getItemId('data'));
        },
    },
})