import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://my-json-server.typicode.com/Code-Pop/Touring-Vue-Router',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getEvents(itemsPerPage, page) {
    return apiClient.get(`/events?_limit=${itemsPerPage}&_page=${page}`)
  },
  getEvent(id) {
    return apiClient.get('/events/' + id)
  }
}
