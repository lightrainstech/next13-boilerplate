import Link from 'next/link'

export default () => (
  <footer className="w-full bg-[#1B1C21] text-sm py-7 border-t border-white/10">
    <div className="container flex flex-col md:flex-row gap-6 justify-between">
      <div className="flex gap-4 text-white/30">
        <Link href="/privacy-policy">
          <span className="hover:text-white">Privacy Policy</span>
        </Link>
        <Link href="terms-and-conditions">
          <span className="hover:text-white">Terms and Conditions</span>
        </Link>
      </div>
      <p className="text-white/30 order-1 lg:order-2">
        © 2022 Limoverse. All Rights reserved.
      </p>
    </div>
  </footer>
)
