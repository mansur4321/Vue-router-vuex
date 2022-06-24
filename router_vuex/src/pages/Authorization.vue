<template>
  <v-container fluid>
    <h1>
        <p class="main-title">
            LeadHit
        </p>

        <formA/>
    </h1>
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
        padding-left: 30px;
        font-size: 35px;
        color: #000!important;
        margin-bottom: 50px;
    }

</style>