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

<style scoped>
.user{
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

.user img{
    width: 74px;
    height: 74px;
    position: static;
    margin-right: 16px;
}

.user p{
    height: 18px;
    font-family: Helvetica;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 18px;
    color: #303133; 
}

.user_bottom_line{
    border: 1px solid #EAEAEA;
    margin: 13px 14px 12px 0px;
}

[active=true] p{
    color: #06A9F6;
}

[active=true] img{
    filter: brightness(50%);
}
</style>
