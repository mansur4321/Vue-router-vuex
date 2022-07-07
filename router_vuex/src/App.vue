<template>
  <v-app>
    <div class="alert-wrapper"
      :class="{
        'opacity': warningField, 
      }"
    >
      <v-alert
        dense
        outlined
        type="error"
      >
        Доступ <strong>запрещён</strong>. Не установлен <strong>ID</strong>, пройдите регистрацию.
      </v-alert>
    </div>
    <navBar/>
    <v-container>
      <router-view/>
    </v-container>
  </v-app>
</template>

<script>
import navBar from './components/navBar';
import { LocalStorageManage } from './API/localStorage/localStorage';


export default {
  name: 'App',

  components: {
    navBar,
  },

  data: () => ({
    warningField: false,
  }),

  mounted() {
    let storage = new LocalStorageManage('');

    if (storage.existenceCheck('warning')) {
      this.warning();
      storage.delete('warning');
    }
  },

  methods: {
    warning() {
      setTimeout(() => {
        this.warningField = !this.warningField;
      },1000);

      setTimeout(() => {
        this.warningField = !this.warningField;
      },10000);
    }
  }
};
</script>

<style lang="less">
  .container {
    padding: 0!important;
  }

  .alert-wrapper {
    position: absolute;
    z-index: 2;
    top: 10%;
    right: 5%;
    width: 485px;
    opacity: 0;
    transition: .4s;
  }

  .opacity {
    opacity: 1;
    top: 15%;
  }
</style>