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
    ...mapGetters(['getErrorMessage', "getByKey"]),
    // ...mapState(["isLoading"]),
  },
  mounted() {
    // console.log(this.getByKey("isLoading"));
    // console.log("STATE: ", this.isLoading);
  },
}
</script>

<style scoped>
.error_container{
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 28px);
  width: 100%;
}
.error_container h1{
  font-family: Helvetica;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 28px;
}
</style>