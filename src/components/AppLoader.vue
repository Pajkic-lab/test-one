<template>
<div v-if='this.getIsLoading' class="loader_container">
  <h1>Loading...</h1>
</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'AppLoader',
  computed: {
    ...mapGetters(['getIsLoading'])
  }
}
</script>

<style scoped src="@/styles/minor.css">
</style>