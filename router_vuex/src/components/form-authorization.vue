<template>
  <v-form v-model="valid">
      <v-container>
        <v-row>
            <v-text-field
              label="ID for Authorization"
              required
            ></v-text-field>
        </v-row>
      </v-container>
    </v-form>
</template>

<script>
export default {
    name: 'FormA',
}
</script>

<style>

</style>