import Main from '../../layout/Main'
import NFTCard from '../../components/assets/NFTCard'
import withAuth from '../../auth/withAuth'

const index = () => (
  <Main title="Asssets">
    <div className="grid grid-flow-row gap-6">
      <MarketplaceHeader />
      {
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(2)].map((_, i) => (
            <NFTCard />
          ))}
        </div>
      }
    </div>
  </Main>
)

const MarketplaceHeader = () => (
  <div className="grid grid-flow-row gap-0.5">
    <p className="text-white text-2xl">Lorem Ipsum</p>
    <p className="text-white/50 text-sm">Lorem ipsum dolor sit amet</p>
  </div>
)

export default withAuth(index)
