import Image from 'next/image'
import { colors } from '../../../utils/colors';

export default function Hero() {
  return (
    <div className="relative w-full h-screen">
      {/* Background Image with fill */}
      <Image
        className='absolute inset-0 bg-center filter brightness-105'
        src="/images/cover.png"
        alt="Cover image"
        fill
        style={{ objectFit: 'cover' }}
        priority
      />

      {/* Content on top */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 mt-10 md:mt-36 text-center md:text-left px-4 md:px-0">
          <span className="block mb-4">
            Your Data, Always There
            <span className="inline-block w-2 sm:w-2.5 md:w-3 h-2 sm:h-2.5 md:h-3 bg-white rounded-full"></span>
          </span>

          <div className="flex justify-center items-center">
            Always Safe
            <span className="inline-block w-2 sm:w-2.5 md:w-3 h-2 sm:h-2.5 md:h-3 bg-white rounded-full ml-2"></span>
          </div>
        </h1>

        <p style={{ color: colors.primary }} className="font-bold mt-2">
          Reclaim Your Peace of Mind: Our Automated, Secure, and Scalable <br /> Backups
          Guarantee Business Continuity, No Matter What.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-24">
          <a href='#'
            style={{ backgroundColor: colors.primary }} className="text-white px-6 py-3 rounded-full font-semibold">
            Start Free Trial
          </a>
          <a href='#'
            style={{ borderColor: colors.primary }}
            className="bg-transparent text-white px-6 py-3 rounded-full font-semibold border-2"
          >
            View Pricing
          </a>

        </div>
      </div>
    </div>
  )
}
