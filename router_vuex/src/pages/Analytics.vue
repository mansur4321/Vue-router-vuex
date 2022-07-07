<template>
  <v-container class="container-wrapper" fluid>
    <h1>
        <p class="main-title">
            Аналитика
        </p>
    </h1>

    <chart></chart>
  </v-container>
</template>

<script>
import chart from '../components/chart.vue'
import { LocalStorageManage } from '../API/localStorage/localStorage';

export default {
    components: { chart },
    name: 'Analytics',

    created() {
        let storageM = new LocalStorageManage('');

        if(!storageM.existenceCheck('')) {
            storageM.setItemData('warning', 'is');
            window.location.href = '/';
        }
    },
}
</script>

<style>

</style>