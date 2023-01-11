import APICreds from '../../components/user/APICreds'
import CorporateSignup from '../../components/user/CorporateSignup'
import Layout from '../../layout/Main'
import ManagersList from '../../components/user/ManagersList'
import ProfileCard from '../../components/user/ProfileCard'
import withAuth from '../../auth/withAuth'

const index = () => (
  <Layout title="Profile">
    <div className="w-full flex flex-col lg:flex-row gap-8">
      <div className="flex flex-1 flex-col gap-6">
        <ProfileCard />
        <CorporateSignup />
      </div>
      <div className="w-full flex flex-1 flex-col gap-6">
        <APICreds />
        <ManagersList />
      </div>
    </div>
  </Layout>
)

export default withAuth(index)
