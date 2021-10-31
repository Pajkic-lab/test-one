<template>
<div class="pagination_body">
  <div class="pagination_container">
    <div class="pagination_numerics">
      <span @click='selectPage(numeric)' v-for='numeric in this.paginationNumerics' :key='numeric'
      :active='numeric==getParams.page'
      >
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
      if (pageNum <1) return
      this.setPage(pageNum)
      this.retriveData()
      this.makePaginationArray()
      scroll(0,0)
    },
    makePaginationArray() {
      if (this.getParams.page == 1 || this.getParams.page < 1 ) {
        this.paginationNumerics = [1, 2, 3]
        return
      }
      this.paginationNumerics = [this.getParams.page-1, this.getParams.page, this.getParams.page+1]
    }
  },
  computed: {
    ...mapGetters(['getParams']),
  },
  created() {
    this.makePaginationArray()
  }
}
</script>

<style scoped src="@/styles/main.css">
</style>