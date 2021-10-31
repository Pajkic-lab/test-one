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

<style scoped>
.loader_container{
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 100px);
  width: 100%;
}
.loader_container h1{
  font-family: Helvetica;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 28px;
}
</style>