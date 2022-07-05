<template>
  <v-container class="container-wrapper" fluid>
    <h1>
        <p class="main-title">
            LeadHit
        </p>
    </h1>

    <formA/>
  </v-container>
</template>

<script>
import FormA from '../components/form-authorization.vue';

export default {
    name: 'Authorization',
    components: {
        FormA,
    }
}
</script>

<style>

    .main-title {
        font-size: 45px;
        color: #000!important;
        margin-bottom: 70px!important;
    }

    .container-wrapper {
        padding: 30px 20px 0!important;
    }

</style>