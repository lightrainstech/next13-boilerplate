import axiosInstance from './axios'

const api = axiosInstance()

export const apiLogin = data => api.post('/corporate/signin', data)

export const apiGetUsers = () => api.get('/corporate/users')
