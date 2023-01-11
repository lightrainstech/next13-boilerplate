import { useEffect, useState } from 'react'

import { Spinner } from 'baseui/spinner'
import { logout } from '../../redux/storeSlice'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'

export default ({ isDesktop }) => {
  const router = useRouter()
  const dispatch = useDispatch()

  // States
  const [isLoggingOut, setIsLoggingOut] = useState(false)
  const [popoverMenu, setPopoverMenu] = useState([
    {
      label: 'Profile',
      icon: 'user',
      action: () => router.push('/profile')
    },
    {
      label: 'Dashboard',
      icon: 'dashboard-2',
      action: () => router.push('/dashboard')
    },
    {
      label: 'NFTs',
      icon: 'copper-coin'
    }
  ])

  // Removig navbar menu items fro popover on larger screens
  useEffect(() => {
    if (isDesktop) {
      setPopoverMenu([
        {
          label: 'Profile',
          icon: 'user',
          action: () => router.push('/profile')
        }
      ])
    }
  }, [])

  const logoutHandler = () => {
    setIsLoggingOut(true)
    dispatch(logout())
    router.push('/')
  }

  return (
    <div className="bg-white/70 rounded-lg bordered">
      <div className="flex gap-6 border-b border-black/10 px-3 py-3.5">
        <div className="w-14 h-14 bg-black flex justify-center items-center rounded-full p-3">
          SH
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-black text-sm font-medium">Super Human</p>
          <p className="text-black/50 text-sm">super@human.com</p>
        </div>
      </div>
      {popoverMenu.map(({ label, icon, action }, i) => (
        <div
          key={i}
          className="flex items-center gap-3 border-b last:border-0 border-black/10 text-black/80 pl-4 pr-2 py-2 hover:bg-black/5"
          role="button"
          onClick={action}>
          <i className={`ri-${icon}-line text-xl text-black/80`} />
          <p className="text-sm">{label}</p>
        </div>
      ))}
      <div
        className="flex items-center gap-3 text-black/80 pl-4 pr-2 py-2 pb-3 hover:bg-black/5"
        role="button"
        onClick={logoutHandler}>
        {isLoggingOut ? (
          <Spinner />
        ) : (
          <i className={`ri-logout-circle-r-line text-xl text-black/80`} />
        )}
        <p className="text-sm">Logout</p>
      </div>
    </div>
  )
}
