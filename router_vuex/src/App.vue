<template>
  <v-app>
    <div class="alert-wrapper"
      v-if="varningField"
      :class="{
        'opacity': varningField, 
      }"
    >
      <v-alert
        dense
        outlined
        type="error"
      >
        I'm a dense alert with the <strong>outlined</strong> prop and a <strong>type</strong> of error
      </v-alert>
    </div>
    <navBar/>
    <v-container>
      <router-view @varnings="varning"/>
    </v-container>
  </v-app>
</template>

<script>
import navBar from './components/navBar';


export default {
  name: 'App',

  components: {
    navBar,
  },

  data: () => ({
    varningField: false,
  }),

  methods: {
    varning() {
      this.varningField = !this.varningField;

      setTimeout(() => {
        this.varningField = !this.varningField;
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
    transition: .2s;
  }

  .opacity {
    opacity: 1;
    top: 12%;
  }
</style>