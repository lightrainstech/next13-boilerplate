import Image from 'next/image'

export default () => (
  <div className="h-[450px] w-full relative rounded-lg overflow-hidden group">
    <Image
      src="/images/sneaker-placeholder.jpg"
      alt="limo sneaker"
      layout="fill"
      objectFit="cover"
    />
    <div className="w-full absolute bottom-0 bg-gradient-to-t from-black via-black/70 to-black/0">
      <div className="p-4 group-hover:-translate-y-4 ease-linear transition-all duration-150">
        <p className="text-white font-medium text-2xl">210</p>
        <p className="text-white/50 font-light text-sm">Available Assets</p>
      </div>
    </div>
  </div>
)
