import { motion } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'

const BrandShowcase = () => {
  const [sliderWidth, setSliderWidth] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const containerRef = useRef(null)

  const brands = [
    {
      name: 'Derma Lesions',
      subtext: 'Med Spa',
      logo: '/derma.png',
      bgColor: 'bg-[#E8FFE8]', // Brighter mint
      mix: 'mix-blend-multiply',
    },
    {
      name: 'Urban Touch',
      subtext: 'Halo Wellness',
      logo: '/urban.jpg',
      bgColor: 'bg-[#FFF5E6]', // Brighter peach
      mix: 'mix-blend-multiply',
    },
    {
      name: 'The Beauty',
      subtext: 'Rezort',
      logo: '/thebeauty.webp',
      bgColor: 'bg-[#E6EEFF]', // Brighter blue
      mix: 'mix-blend-multiply',
    },
    {
      name: 'Radiant Medical',
      subtext: 'Aesthetics',
      logo: '/radiantmed.png',
      bgColor: 'bg-[#E8FFE8]', // Brighter mint
      mix: 'mix-blend-multiply',
    },
    {
      name: 'Avous',
      subtext: 'Med Spa',
      logo: '/avous.png',
      bgColor: 'bg-[#FFF5E6]', // Brighter peach
      mix: 'mix-blend-multiply',
    },
    {
      name: 'Nisa',
      subtext: 'Med Spa',
      logo: '/nisa.jpg',
      bgColor: 'bg-[#E6EEFF]', // Brighter blue
      mix: 'mix-blend-multiply',
    },
    {
      name: 'Bionix',
      subtext: 'Clinic',
      logo: '/bionix.webp',
      bgColor: 'bg-[#FFFDE6]', // Brighter yellow
      mix: 'mix-blend-multiply',
    },
    {
      name: 'Cosmetica',
      subtext: 'Med Spa',
      logo: '/Cosmetica.png',
      bgColor: 'bg-[#FFE6F5]', // Brighter pink
      mix: 'mix-blend-multiply',
    },
    {
      name: 'Body Smoking',
      subtext: 'Spa',
      logo: '/bodysmoking.png',
      bgColor: 'bg-[#E6FFFA]', // Brighter teal
      mix: 'mix-blend-multiply',
    },
    {
      name: "Relax N' Glow",
      subtext: 'Spa',
      logo: '/relax.png',
      bgColor: 'bg-[#F5E6FF]', // Brighter purple
      mix: 'mix-blend-multiply',
    },
    {
      name: 'Skin Institute',
      subtext: 'Dermatology Centre',
      logo: '/skin.png',
      bgColor: 'bg-[#E6FFF9]', // Brighter mint
      mix: 'mix-blend-multiply',
    },
  ]

  const duplicatedBrands = [...brands, ...brands, ...brands]

  useEffect(() => {
    if (containerRef.current) {
      setSliderWidth(containerRef.current.scrollWidth / 3)
    }
  }, [])

  const sliderVariants = {
    animate: {
      x: [-sliderWidth, 0],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: 30,
          ease: 'linear',
        },
      },
    },
    paused: {
      x: [-sliderWidth, 0],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: 0,
          ease: 'linear',
        },
      },
    },
  }

  return (
    <div className='relative bg-white overflow-hidden py-10'>
      <div className='max-w-[1920px] mx-auto px-4 relative'>
        {/* Header Section */}
        <div className='text-center mb-5'>
          <h2 className='text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-900 to-blue-500 text-transparent bg-clip-text'>
            Our Proud Partners
          </h2>
        </div>

        {/* Infinite Slider */}
        <div
          className='relative overflow-hidden mx-auto'
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Gradient Overlays */}
          <div className='absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-white to-transparent z-10' />
          <div className='absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-white to-transparent z-10' />

          <div className='py-12' ref={containerRef}>
            <motion.div
              className='flex gap-8'
              variants={sliderVariants}
              animate={isHovered ? 'paused' : 'animate'}
            >
              {duplicatedBrands.map((brand, index) => (
                <motion.div
                  key={index}
                  className='flex-none w-64 md:w-72'
                  whileHover={{
                    scale: 1.02,
                    transition: { duration: 0.2 },
                  }}
                >
                  <div className='relative group'>
                    <div
                      className={`relative flex flex-col items-center rounded-2xl ${brand.bgColor} 
                      transition-all duration-300 hover:shadow-sm overflow-hidden`}
                    >
                      {/* Logo Container */}
                      <div className='flex items-center justify-center h-44 w-full p-8'>
                        <img
                          src={brand.logo}
                          alt={brand.name}
                          className={`w-56 h-24 object-contain transition-all duration-300 
                            group-hover:scale-105 ${brand.mix}`}
                          onError={(e) => {
                            e.target.onerror = null
                            e.target.src = '/api/placeholder/240/120'
                          }}
                        />
                      </div>

                      {/* Brand Name Container */}
                      <div className='w-full bg-white/60 backdrop-blur-sm py-4 px-4'>
                        <div className='text-center'>
                          <p className='text-lg font-semibold text-gray-800 leading-snug'>
                            {brand.name}
                          </p>
                          <p className='text-sm text-gray-500 mt-0.5'>
                            {brand.subtext}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BrandShowcase
