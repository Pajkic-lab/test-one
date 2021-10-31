<template>
  <div>
    <UsersList />
    <AppLoader />
    <AppError />
    <AppPagination />
  </div>
</template>

<script>
import AppPagination from '@/components/AppPagination.vue'
import UsersList from '@/components/UsersList.vue'
import AppLoader from '@/components/AppLoader.vue'
import AppError from '@/components/AppError.vue'
import { mapActions } from 'vuex'

export default {
  name: 'App',
  components: {
    AppPagination,
    UsersList,
    AppLoader,
    AppError,
  },
  methods: {
    ...mapActions(['retriveData'])
  },
  created() {
    this.retriveData()
  }
}
</script>

<style src="@/styles/common.css">
</style>
