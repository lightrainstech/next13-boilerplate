export default () => {
  return (
    <div className="flex flex-col lg:flex-row gap-6 lg:justify-between">
      <div>
        <p className="text-white font-medium text-3xl mb-2">
          Lorem ipsum dolor sit amet
        </p>
        <p className="text-sm text-white/50 lg:w-8/12">
          Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum
          dolor sit amet
        </p>
      </div>
      <NFTStats />
    </div>
  )
}

const NFTStats = () => (
  <div className="bg-[#1B1C21] rounded-2xl p-6 flex w-max items-center justify-center gap-6 bordered">
    <div>
      <p className="font-medium text-3xl text-yellow-500">210</p>
      <p className="text-sm">Lorem Ipsum</p>
    </div>
    <div className="bg-white/20 h-12 lg:h-full w-[1.1px]" />
    <div>
      <p className="font-medium text-3xl text-yellow-500">210</p>
      <p className="text-sm">Lorem Ipsum</p>
    </div>
  </div>
)
