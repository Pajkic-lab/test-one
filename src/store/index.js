import api from '../services/api'
import moment from 'moment'
import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        params: {
            since: moment(1609459200000).format('YYYY-MM-DDTHH:MM:SSZ'),
            per_page: 30,
            page: 2
        },
        usersList: [],
        isLoading: true,
        errorMessage: ''
    },
    mutations: {
        setPage: (state, pageNum) => {
            state.params.page = pageNum
            state.usersList = []
            state.isLoading = true
        },
        setUsersList: (state, payload) => {
            state.usersList = payload
            state.isLoading = false
        },
        setErrorMsg: (state, payload) => {
            state.errorMessage = payload.message
            state.isLoading = false
        }
    },
    actions: {
        retriveData: async ({ commit, state }) => {
            try {
                const { data } = await api.getListUsersData(state.params)
                commit('setUsersList', data)
            } catch (err) {
                commit('setUsersList', err)
            }
        }
    },
    getters: {
        getErrorMessage : state => state.errorMessage ,
        getIsLoading : state => state.isLoading,
        getUsersList : state => state.usersList,
        getParams : state => state.params,
    }
})