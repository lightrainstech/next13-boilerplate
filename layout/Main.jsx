import Footer from '../components/ui/Footer'
import Navbar from '../components/ui/Navbar'
import { NextSeo } from 'next-seo'
import withAuth from '../auth/withAuth'

const Layout = ({ children, title = 'Limoverse Corporate VO' }) => (
  <div className="min-h-screen flex flex-col">
    <NextSeo title={title} />
    <Navbar />
    <div className="container flex-1 py-10">{children}</div>
    <Footer />
  </div>
)

export default Layout
/* By default, all pages with `Main` layout is protected. If want otherwise, remove `withAuth` export from here and add it to only pages that need protection individually */
