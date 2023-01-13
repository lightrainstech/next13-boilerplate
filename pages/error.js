import Blank from '../layout/Blank'
import { Button } from 'baseui/button'
import Image from 'next/image'
import Router from 'next/router'
import { logout } from '../redux/storeSlice'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'

export default () => {
  const ErrorAlert = () => {
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(logout())
    }, [])

    return (
      <div className="h-full w-full flex flex-col gap-6 items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <Image
            src="/images/globe-error-icon.svg"
            width={200}
            height={200}
            alt="Network error"
          />
          <p className="font-medium text-xl text-yellow-500">Network Error</p>
          <p className="text-white/50">
            Make sure you are connected to the internet. If the problem still
            persists, try loging in again.
          </p>
        </div>
        <Button
          kind="secondary"
          onClick={() => Router.push('/')}
          overrides={{
            BaseButton: {
              style: {
                width: 'max-content',
                paddingLeft: '46px',
                paddingRight: '46px'
              }
            }
          }}>
          Login
        </Button>
      </div>
    )
  }

  return (
    <Blank title="Network Error">
      <ErrorAlert />
    </Blank>
  )
}
