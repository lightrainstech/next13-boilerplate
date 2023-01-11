import DashboardHeader from '../../components/dashboard/DashboardHeader'
import Main from '../../layout/Main'
import UsersTable from '../../components/dashboard/UsersTable'
import withAuth from '../../auth/withAuth'

const index = () => (
  <Main title="Dashboard">
    <div className="grid grid-flow-row gap-12">
      <DashboardHeader />
      <UsersTable />
    </div>
  </Main>
)

// export default withAuth(index)
export default index
