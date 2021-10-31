<template>
  <div>
    <div class="list_top">
      <p>Gists</p>
    </div>
    <div class='list-container'>
      <div v-for="user in this.getUsersList" :key='user.id'>
          <AppUser :user= 'user'/>
      </div>
    </div>
  </div>
</template>

<script>
import AppUser from '@/components/AppUser.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'AppList',
  components: {
    AppUser
  },
  computed: {
    ...mapGetters(['getUsersList'])
  }
}
</script>

<style scoped src="@/styles/main.css">
</style>
