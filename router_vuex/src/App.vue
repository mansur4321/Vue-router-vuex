<template>
  <v-app>
    <navBar/>
    <router-view/>

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

  }),
};
</script>

<style lang="less">
  .container {
    padding: 0!important;
  }
</style>