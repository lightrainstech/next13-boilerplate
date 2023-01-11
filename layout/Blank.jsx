import Footer from '../components/ui/Footer'
import Image from 'next/image'
import Link from 'next/link'
import { NextSeo } from 'next-seo'

export default ({ children, title = 'Limoverse Corporate VO' }) => (
  <div className="min-h-screen flex flex-col">
    <NextSeo title={title} />
    <Nav />
    <main className="container flex-1 flex items-center">{children}</main>
    <Footer />
  </div>
)

const Nav = () => (
  <nav className="container pt-10">
    <Link href="/">
      <Image
        src="/images/limoverse-logo.svg"
        height={40}
        width={140}
        alt="Limoverse logo"
      />
    </Link>
  </nav>
)
