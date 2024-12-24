import React from 'react'
import Link from 'next/link'

export const CustomHeroType5: React.FC = () => {
  return (
    <div className="md:flex mx-auto container md:gap-6 px-4 justify-between items-center pt-5">
      <div className="md:w-1/2">
        <h1 className="text-6xl font-semibold mb-7">
          The right mortgage at the <span className="text-[#FF56BB]">right moment</span>
        </h1>
        <p className="text-lg">
          Property Fox empowers advisors with the expertise to seamlessly transition their clients
          between mortgage products as circumstances and opportunities evolve.
        </p>
        <Link href="#pricing" passHref>
          <button className="bg-[#FF56BB] hover:bg-[#d21185] mt-5 text-white px-4 py-2 rounded">
            Try It Today
          </button>
        </Link>
      </div>
      <div className="flex md:w-1/2 relative flex-col items-center justify-center h-max w-fit">
        <img
          src="https://res.cloudinary.com/dz3facqgc/image/upload/v1734980984/cf7stcylitnborjjmbsh.png"
          alt="Image 1"
          className="order-1 md:left-4 w-64 mb-2 absolute sm:top-5 top-6 xl:top-28 xl:left-8 2xl:left-52 2xl:top-5 lg:top-12 md:top-3"
        />
        <img
          src="https://res.cloudinary.com/dz3facqgc/image/upload/v1734980944/xs0asdxwlswnc1lhyket.png"
          loading="lazy"
          alt="Image 2"
          className="order-2 mb-2 w-full"
        />
        <img
          src="https://res.cloudinary.com/dz3facqgc/image/upload/v1734981016/wkfx1lkjekjbejcmnzsz.png"
          alt="Image 3"
          className="order-3 mb-2 absolute bottom-16 md:bottom-2 md:right-1 right-14 2xl:right-14 2xl:bottom-56 sm:bottom-24 lg:bottom-36 w-64"
        />
      </div>
    </div>
  )
}

