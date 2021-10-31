<template>
<div>
    <div @click='selectUser' class="user" :active='userSelcted' >
        <img :src='user.owner.avatar_url' />
        <p v-for='(fileName, index) in parseUserData()' :key='index'>
            {{fileName}}
        </p>
    </div>
    <div class="user_bottom_line" />
</div>
</template>

<script>

export default {
  name: 'AppUser',
  props: {
      user: {
          type: Object,
          required: true
      }
  },
  data(){
    return {
        userSelcted: false
    }
  },
  methods: {
      parseUserData() {
          return Object.keys(this.user.files)
      },
      selectUser() {
          this.userSelcted = !this.userSelcted
      }
  }
}
</script>

<style scoped src="@/styles/main.css">
</style>
