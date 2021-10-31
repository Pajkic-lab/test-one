<template>
<div class="pagination_body">
  <div class="pagination_container">
    <div class="pagination_numerics">
      <span @click='selectPage(numeric)' v-for='numeric in this.paginationNumerics' :key='numeric'
      :active='numeric==getParams.page'>
        {{numeric}}
      </span>
    </div>
    <div class="pagination_buttons">
      <div @click='selectPage(getParams.page-1)' class="pagination_button_container">
        <img src="../media/Rectangle.png" />
        <img id='arrow' src="../media/backArrow.png" />
      </div>
      <div @click='selectPage(getParams.page+1)' class="pagination_button_container">
        <img src="../media/Rectangle.png" />
        <img id='arrow' src="../media/nextArrow.png" />
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'

export default {
  name: 'AppPagination',
  data(){
    return{
      paginationNumerics: []
    }
  },
  methods: {
    ...mapActions(['retriveData']),
    ...mapMutations(['setPage']),
    selectPage(pageNum) {
      this.setPage(pageNum)
      this.retriveData()
      scroll(0,0)
      this.makePaginationArray()
    },
    makePaginationArray() {
      if (this.getParams.page == 1 || this.getParams.page < 1 ) {
        this.paginationNumerics = [1, 2, 3]
      }
      this.paginationNumerics = [this.getParams.page-1, this.getParams.page, this.getParams.page+1]
    }
  },
  computed: {
    ...mapGetters(['getParams']),
  },
  mounted() {
    this.makePaginationArray()
  }
}
</script>

<style scoped>
.pagination_container{
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  background-color: white;
}

.pagination_numerics span{
  font-family: Helvetica;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  color: #06A9F6;
  cursor: pointer;
}

.pagination_buttons{
  display: flex;
  justify-content: end;
  align-items: center;
  margin: 8px;
  margin-right: 30px;
  cursor: pointer;
}

.pagination_button_container{
  height: 24px;
  width: 24px;
  position: relative;
}

.pagination_button_container:first-of-type{
  margin-right: 5px;
}

#arrow{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.pagination_numerics span[active]{
  color:black;
  cursor: default;
}
</style>