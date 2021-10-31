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

<style scoped>
.list_top{
  background: #F3F3F3;
  height: 28px;
}

.list_top p{
  position: absolute;
  width: 37px;
  height: 18px;
  left: 16px;
  top: 6px;
  font-weight: bold;
  font-family: Helvetica;
  font-size: 15px;
  line-height: 17px;
  display: flex;
  align-items: flex-end;
  letter-spacing: -0.016em;
  color: #000000;
}

.list-container{
  padding: 16px;
  padding-top: 13px;
}

.list-container:last-child{
  margin-bottom: 10px;
}
</style>
