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

  const duplicatedBrands = [
    ...brands,
    ...brands,
    ...brands,
    ...brands,
    ...brands,
    ...brands,
  ]

  useEffect(() => {
    if (containerRef.current) {
      setSliderWidth(containerRef.current.scrollWidth / 6)
    }
  }, [])

  const startAnimation = () => {
    controls.set({ x: 0 })
    controls.start({
      x: -sliderWidth,
      transition: {
        duration: 20,
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

  // Brighter, more vibrant background colors
  const bgColors = [
    'bg-gradient-to-br from-purple-200 via-pink-100 to-rose-200',
    'bg-gradient-to-br from-blue-200 via-cyan-100 to-teal-200',
    'bg-gradient-to-br from-yellow-200 via-amber-100 to-orange-200',
    'bg-gradient-to-br from-emerald-200 via-green-100 to-lime-200',
    'bg-gradient-to-br from-indigo-200 via-violet-100 to-purple-200',
  ]

  return (
    <div className='relative py-6 bg-transparent w-screen'>
      <div className='w-full'>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='text-4xl font-bold text-center mb-8 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent'
        >
          Trusted by 150+ Beauty Practices
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className='relative overflow-hidden'
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className='py-2' ref={containerRef}>
            <motion.div
              className='flex gap-2'
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
                  <div
                    className={`rounded-xl shadow-lg ${
                      bgColors[index % bgColors.length]
                    } border border-white/30 hover:border-white/50 transition-all duration-300 hover:shadow-xl`}
                  >
                    <div className='relative group p-4'>
                      <img
                        src={brand.logo}
                        alt={brand.name}
                        className='w-full h-16 object-contain mix-blend-multiply filter brightness-100 contrast-100'
                        style={{
                          mixBlendMode: 'multiply',
                          WebkitFilter: 'brightness(1) contrast(1)',
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
