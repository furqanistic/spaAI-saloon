import { motion, useAnimationControls } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'

const BrandShowcase = () => {
  const [sliderWidth, setSliderWidth] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const containerRef = useRef(null)
  const controls = useAnimationControls()

  const brands = [
    { name: 'Derma Lesions', logo: '/derma.png' },
    { name: 'Urban Touch', logo: '/urban.jpg' },
    { name: 'The Beauty', logo: '/thebeauty.webp' },
    { name: 'Radiant Medical', logo: '/radiantmed.png' },
    { name: 'Avous', logo: '/avous.png' },
    { name: 'Nisa', logo: '/nisa.jpg' },
    { name: 'Bionix', logo: '/bionix.webp' },
    { name: 'Cosmetica', logo: '/Cosmetica.png' },
    { name: 'Body Smoking', logo: '/bodysmoking.png' },
    { name: "Relax N' Glow", logo: '/relax.png' },
    { name: 'Skin Institute', logo: '/skin.png' },
  ]

  const duplicatedBrands = [...brands, ...brands, ...brands, ...brands]

  useEffect(() => {
    if (containerRef.current) {
      setSliderWidth(containerRef.current.scrollWidth / 4)
    }
  }, [])

  const startAnimation = () => {
    controls.set({ x: 0 })
    controls.start({
      x: -sliderWidth,
      transition: {
        duration: 30,
        ease: 'linear',
        repeat: Infinity,
        repeatType: 'loop',
        repeatDelay: 0,
      },
    })
  }

  useEffect(() => {
    let timeoutId
    if (!isHovered) {
      timeoutId = setTimeout(() => {
        startAnimation()
      }, 100)
    } else {
      controls.stop()
    }
    return () => {
      if (timeoutId) clearTimeout(timeoutId)
    }
  }, [isHovered, sliderWidth, controls])

  return (
    <div className='relative py-12 bg-transparent'>
      <div className='max-w-7xl mx-auto'>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='text-4xl font-bold text-center mb-8 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent'
        >
          Our Proud Partners
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className='relative overflow-hidden mx-auto'
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className='py-4' ref={containerRef}>
            <motion.div
              className='flex gap-8'
              animate={controls}
              initial={{ x: 0 }}
            >
              {duplicatedBrands.map((brand, index) => (
                <motion.div
                  key={index}
                  className='flex-none w-40'
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.2, ease: 'easeOut' },
                  }}
                >
                  <div className='bg-transparent p-3'>
                    <div className='relative group'>
                      <img
                        src={brand.logo}
                        alt={brand.name}
                        className='w-full h-16 object-contain mix-blend-multiply filter brightness-95 contrast-105'
                        style={{
                          mixBlendMode: 'multiply',
                          WebkitFilter: 'brightness(0.95) contrast(1.05)',
                        }}
                        onError={(e) => {
                          e.target.onerror = null
                          e.target.src = '/api/placeholder/128/64'
                        }}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default BrandShowcase
