import { FaArrowRight } from 'react-icons/fa'
import React from 'react'

export const CustomHeroType2 = (props: any) => {
  const { introContent, media } = props
  return (
    <div className="container mx-auto flex flex-col lg:flex-row px-5">
      <div className="flex items-center justify-center gap-3">
        <div className="  relative  gap-4 p-5">
          <div className="absolute top-1/3  -right-4 ">
            {' '}
            <img className=" object-cover " src="https://i.ibb.co/VL11ck4/Arrow-3.png" alt="" />
          </div>
          <h1 className="text-5xl text-black justify-start font-[Gilroy] py-2">
            Feel luxurious with premium quality outfits
          </h1>
          <p className="text-black py-4">
            With so much demand for a style of board where every aspect of it flews, we created a
            new series
          </p>
          <button className="btn flex flex-row justify-items-start  bg-[#33644A] px-4 py-4 rounded-xl text-white ">
            Explore Now <FaArrowRight className=" text-2xl p-1" />
          </button>
        </div>
      </div>
      <div className=" flex justify-center items-center">
        <img src="https://i.ibb.co/nMDCgHT/Group-37606.png" alt="" />
      </div>
    </div>
  )
}
