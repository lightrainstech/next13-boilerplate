import Router from 'next/router'
import axios from 'axios'
import { logout } from '../redux/storeSlice'
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

  // Response interceptor to handle response errors
  // instance.interceptors.response.use(
  //   response => {
  //     console.log('Response:', response)
  //     return response
  //   },
  //   error => {
  //     if (
  //       error &&
  //       error?.response &&
  //       error?.response?.data?.response?.message === 'JWT_MALFORMED'
  //     ) {
  //       store.dispatch(logout())
  //     }
  //     console.error('Response error:', error)
  //     return Promise.reject(error)
  //   }
  // )

  return instance
}

export default axiosInstance
