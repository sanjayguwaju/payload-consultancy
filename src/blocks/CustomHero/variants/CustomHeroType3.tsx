import { motion } from 'framer-motion'
import React from 'react'
import { PiArrowRightFill } from 'react-icons/pi'
export const variants1 = {
  hidden: { opacity: 0, y: -100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
}
export const variants2 = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
}

export const CustomHeroType3 = (props: any) => {
  const { introContent, media } = props
  return (
    <section className="bg_1 lg:pt-[200px] pt-[100px] mb-28">
      <div className="container flex flex-col items-center relative">
        {/* Intro Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={variants1}
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col items-center gap-5 relative z-50 lg:mb-[-60px] mb-10"
        >
          <h1 className="xl:max-w-[870px] lg:max-w-[750px] sm:max-w-[500px] text-center capitalize max-w-[350px]">
            We Help you to Grow Your BUSINESS
          </h1>
          <p className="text_regular xl:max-w-[700px] md:max-w-[500px] max-w-[450px] text-center leading-relaxed">
            Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise
            blessing. Indulgence way everything joy alteration boisterous the attachment.
          </p>
          <a
            href=""
            className="btn primary_btn !text-[0.75em] tracking-[1px] flex items-center gap-3 !pr-3 !rounded-[10px] mt-3 !py-2"
          >
            GET STARTED
            <button className="size-[44px] flex items-center justify-center bg-white text-[#52BD95] leading-none rounded-[10px]">
              <PiArrowRightFill size={15} />
            </button>
          </a>
        </motion.div>

        {/* Images Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={variants2}
          viewport={{ once: true, amount: 0.3 }}
          className="mb-[-50px] flex items-end xl:ml-16 lg:ml-10 max-lg:flex-wrap relative z-20 max-lg:gap-5"
        >
          <div className="relative lg:max-w-[30%] w-full lg:block flex justify-center items-start max-sm:flex-wrap gap-5">
            {/* Image 1 */}
            <div className="lg:absolute xl:left-0 lg:left-[-40px] lg:bottom-[100%] lg:mb-[20px]">
              <img
                src="https://res.cloudinary.com/dz3facqgc/image/upload/v1734978252/cueqwvq7gcfn915rlnm2.png"
                alt="Hero Image 1"
                className="object-contain w-full h-auto drop_shadow_1"
              />
            </div>
            {/* Image 2 */}
            <div className="xl:ml-10">
              <img
                src="https://res.cloudinary.com/dz3facqgc/image/upload/v1734977364/woc0sottvzumisthlch7.png"
                alt="Hero Image 2"
                className="object-contain w-full h-auto drop_shadow_1"
              />
            </div>
          </div>
          <div className="lg:max-w-[70%] w-full flex lg:items-end max-lg:justify-center max-sm:flex-wrap">
            {/* Image 3 */}
            <div>
              <img
                src="https://res.cloudinary.com/dz3facqgc/image/upload/v1734977860/itwa3lechsklimcilnj0.png"
                alt="Hero Image 3"
                className="object-contain w-full h-auto drop_shadow_1 sm:mb-[-20px]"
              />
            </div>
            {/* Image 4 */}
            <div>
              <img
                src="https://res.cloudinary.com/dz3facqgc/image/upload/v1734978318/la9cjcvrbyqfwoaiechc.png"
                alt="Hero Image 4"
                className="object-contain w-full lg:mb-12 drop_shadow_1"
              />
            </div>
          </div>
        </motion.div>
      </div>
      {/* Background Decorations */}
      <div className="size-[272px] bg-[#52AABD] absolute top-[-20px] left-[0px] blur-[200px] z-10"></div>
      <div className="size-[272px] bg-[#52BD95] absolute top-[250px] right-[0px] blur-[200px] z-10"></div>
    </section>
  )
}

