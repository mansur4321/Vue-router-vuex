<template>
  <v-form class="form-id">
      <v-container>
        <v-row>
            <v-text-field
              label="ID for Authorization"
              required
              color="indigo lighten-2"
              v-model="stringID"
              :rules="errorRule"
              @keydown.enter="validID"
            ></v-text-field>
            <v-btn text outlined tile color="indigo lighten-2"
              @click="validID"
            >
                Войти                         
            </v-btn>
        </v-row>
      </v-container>
    </v-form>
</template>

<script>
import { RequestApiClass } from '../API/fetch/fetch.js';
import { LocalStorageManage } from '../API/localStorage/localStorage';

export default {
    name: 'FormA',

    data: () => ({
        stringID: '',
        errorRule: [],
    }),

    watch: {
        stringID() {
            this.errorRule = [];
        }
    },

    methods: {
        validID(event) {
            event.preventDefault();

            if(this.stringID.length == 24) {
                this.actionManage();                
            } else {
                this.errorRule = [
                    value => {
                        if(value.length != 24) {
                            return 'id сайта должен содержать 24 символа';
                        }
                    },
                ]
            }
        },

        pageRedirect(){
            window.location.href = '/analytics';
        },

        async actionManage() {
            let request = new RequestApiClass(this.stringID);
            let boolReq = await request.requestId();

            if(boolReq) {
                let storage = new LocalStorageManage(this.stringID);
                storage.setId();

                this.pageRedirect();
            } else {
                alert('Не правильный ID');
            }
        },
    },
}
</script>

<style lang="less">
    .form-id {
        width: 500px!important;
        border: 2px solid #7986CB;
        border-radius: 5px;
        padding: 30px;
    }
</style>