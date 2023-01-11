import Image from 'next/image'
import Layout from '../layout/Blank'
import LoginForm from '../components/landing/LoginForm'
import { site_name } from '../seo-config'

export default function Home() {
  return (
    <Layout title="Login">
      <div className="grid lg:grid-cols-2 w-full h-full">
        <div className="hidden lg:block">
          <Banner />
        </div>
        <div className="w-full h-full flex items-center justify-center">
          <LoginForm />
        </div>
      </div>
    </Layout>
  )
}

const Banner = () => (
  <div className="relative w-full h-full flex justify-center items-center">
    <p className="font-black uppercase text-white text-7xl">{site_name}</p>
    <div className="absolute -top-28">
      <Image
        src="/images/sneaker-landing-cover.svg"
        alt="sneaker"
        width={600}
        height={400}
      />
    </div>
  </div>
)
