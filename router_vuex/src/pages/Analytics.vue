<template>
  <v-container class="container-wrapper" fluid>
    <h1>
        <p class="main-title">
            Аналитика
        </p>
    </h1>

    <chart 
        @varning="varning"
    ></chart>
  </v-container>
</template>

<script>
import chart from '../components/chart.vue'

export default {
    components: { chart },
    name: 'Analytics',

    methods: {
        varning() {
            this.$emit('varnings');
        }
    },
}
</script>

<style>

</style>