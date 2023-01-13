import Router from 'next/router'
import axios from 'axios'
import { store } from '../redux/store'

const state = store.getState()
const token = state.store.token

const axiosInstance = () => {
  const instance = axios.create({
    baseURL: `${process?.env?.NEXT_PUBLIC_BACKEND_URL}/api/`,
    headers: {
      'Content-type': 'application/json',
      Authorization: 'Bearer ' + token
    }
  })

  instance.interceptors.response.use(
    response => response,
    error => {
      if (typeof error.response === 'undefined') {
        Router.push('/error')
      }
      return Promise.reject(error)
    }
  )

  return instance
}

export default axiosInstance
