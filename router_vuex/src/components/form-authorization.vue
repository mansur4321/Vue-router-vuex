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

        pageRedirectEmit(){
            this.$emit('redirectpage', this.stringID);
        },

        async actionManage() {
            let request = new RequestApiClass(this.stringID);
            let boolReq = await request.requestId();

            if(boolReq) {
                this.pageRedirectEmit();
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