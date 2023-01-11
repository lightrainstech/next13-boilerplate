import { setAuthToken, setUserCreds } from '../../redux/storeSlice'

import { Button } from 'baseui/button'
import InputField from '../ui/InputField'
import { apiLogin } from '../../axios/Index'
import { site_name } from '../../seo-config'
import { toaster } from 'baseui/toast'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import { useState } from 'react'

export default () => {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm()
  const router = useRouter()
  const dispatch = useDispatch()

  // States
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState(false)
  const resetErrorMessage = () => setErrorMessage('')

  const loginHandler = async formatData => {
    try {
      resetErrorMessage()
      setIsLoading(true)
      let loginData = {
        email: formatData.email,
        password: formatData.password
      }
      let resp = await apiLogin(loginData)
      let token = resp?.headers?.authorization
      if (resp?.headers && resp?.headers?.authorization) {
        dispatch(setAuthToken(token))
        router.push('/dashboard')
      }
      let userCreds = {
        key: resp?.data?.data?.data?.corpId,
        secret: resp?.data?.data?.data?.corpSecret
      }
      dispatch(setUserCreds(userCreds))
      setIsLoading(false)
    } catch (e) {
      let errMsg = e?.response?.data?.response?.message || e?.message
      toaster.negative(errMsg)
      setErrorMessage(errMsg)
      setIsLoading(false)
      console.error(errMsg)
    }
  }

  return (
    <div className="flex flex-col gap-6 relative">
      <div>
        <p className="text-white text-xl font-light">{'Welcome to'}</p>
        <p className="text-white text-4xl font-medium mb-5">{site_name}</p>
      </div>
      <form onSubmit={handleSubmit(loginHandler)} autoComplete="false">
        <InputField
          name="email"
          control={control}
          otherProps={{
            label: 'Email address',
            placeholder: 'Enter email address',
            startEnhancer: <i className="ri ri-mail-open-line text-white/50" />
          }}
          rules={{
            required: {
              value: true,
              message: 'Email is required'
            }
          }}
        />
        <InputField
          name="password"
          control={control}
          otherProps={{
            label: 'Password',
            placeholder: 'Enter password',
            type: 'password',
            startEnhancer: <i className="ri ri-key-line text-white/50" />
          }}
          rules={{
            required: {
              value: true,
              message: 'Password is required'
            }
          }}
        />
        <Button
          type="submit"
          isLoading={isLoading}
          overrides={{
            BaseButton: {
              style: {
                marginTop: '12px',
                width: '100%'
              }
            }
          }}>
          Login
        </Button>
      </form>
      <p
        className={`text-red-500 text-xs font-light text-center transition-opacity duration-200 ease-linear ${
          errorMessage ? 'opacity-100' : 'opacity-0'
        }`}>
        {errorMessage}
      </p>
    </div>
  )
}
