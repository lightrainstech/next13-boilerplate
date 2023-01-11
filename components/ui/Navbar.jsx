import Image from 'next/image'
import Link from 'next/link'
import NavMenu from '../user/NavMenu'
import { useRouter } from 'next/router'

const Navbar = () => {
  const router = useRouter()
  const isUserLoggedIn = false

  const comparePaths = path => new RegExp(`^/${path}`).test(router.pathname)
  const navLinks = {
    guestNavLinks: [
      {
        title: 'Dahboard',
        route: 'dashboard',
        isActive: comparePaths('dashboard')
      },
      {
        title: 'Assets',
        route: '/assets',
        isActive: comparePaths('assets')
      }
    ],
    userNavLinks: [
      {
        title: 'Dashboard',
        route: '/dashboard',
        isActive: comparePaths('dashboard')
      },
      {
        title: 'NFTs',
        route: '/assets',
        isActive: comparePaths('assets')
      }
    ]
  }
  const menuItems = isUserLoggedIn
    ? navLinks.userNavLinks
    : navLinks.guestNavLinks

  return (
    <nav className="sticky top-0 w-full bg-[#1B1C21] border-b border-white/10 bg-blend-difference backdrop-filter backdrop-blur-sm bg-opacity-10">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <div className="flex h-[70px]">
          <div className="flex items-center mr-12">
            <Link href="/dashboard">
              <Image
                src="/images/limoverse-logo.svg"
                height={30}
                width={120}
                alt="Limoverse logo"
              />
            </Link>
          </div>

          <div className="hidden lg:flex">
            <ul className="flex gap-x-5 items-center box-border font-medium">
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.route}
                  className="h-full flex items-center text-white text-opacity-50 hover:text-opacity-100 box-border">
                  <li
                    className={`relative font-medium
                        ${
                          item.isActive && 'text-white flex items-center h-full'
                        }`}>
                    {item.isActive && (
                      <div className="w-full h-1 bg-yellow-400 absolute justify-center bottom-0 flex items-end" />
                    )}
                    {item.title}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
        <NavMenu />
      </div>
    </nav>
  )
}

export default Navbar
