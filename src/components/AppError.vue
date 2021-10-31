<template>
<div v-if="this.getErrorMessage" class="error_container">
  <h1>{{this.getErrorMessage}}</h1>
</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'AppError',
  computed: {
    ...mapGetters(['getErrorMessage'])
  }
}
</script>

<style scoped src="@/styles/minor.css">
</style>