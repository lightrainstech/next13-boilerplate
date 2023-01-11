import Router from 'next/router'
import { useSelector } from 'react-redux'
import { useState } from 'react'

export default (Component = null) => {
  const withAuth = props => {
    const [calledPush, setCalledPush] = useState(false)
    const token = useSelector(state => state.store.token)
    if (!token && !calledPush) {
      Router.push('/')
      setCalledPush(true)
    }
    return <Component {...props} />
  }
  return withAuth
}
