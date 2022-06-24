<template>
<v-container fluid>
   <v-app-bar
          color="indigo lighten-2"
          dark
        >
          <v-btn to="/" outlined tile class="ml-3">
           
              Авторизация
           
          </v-btn>
          <v-btn to="/analytics" outlined tile class="ml-3">
            
              Аналитика
           
          </v-btn>
        </v-app-bar>
</v-container>
</template>

<script>
export default {
    name: 'navBar',

}
</script>

<style lang="less">
  .link-style {
    color: white!important;
    text-decoration: none!important;
  }
</style>