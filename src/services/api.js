import axios from 'axios'

const httpClient = axios.create({
    baseURL: `https://api.github.com`,
    withCredentials: false,
    headers: {
        'Content-Type': 'application/json',
    }
})

export default {
    getListUsersData(params) {
        return httpClient.get(`gists?since=${params.since}&per_page=${params.per_page}&page=${params.page}`)
    }
}
