import { AnimatePresence, motion } from 'framer-motion'
import {
  ChevronLeft,
  ChevronRight,
  Flower2,
  HandMetal,
  Heart,
  HeartPulse,
  Paintbrush,
  Scissors,
  Smile,
  Sparkles,
} from 'lucide-react'
import React, { useRef, useState } from 'react'

const CategorySlider = () => {
  const sliderRef = useRef(null)
  const [isHovered, setIsHovered] = useState(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const categories = [
    {
      name: 'Barbershops',
      icon: Scissors,
      color: 'bg-purple-50',
      textColor: 'text-purple-900',
      iconColor: 'text-purple-500',
      gradient: 'from-purple-500/20 to-purple-600/20',
    },
    {
      name: 'Med Spas',
      icon: Sparkles,
      color: 'bg-blue-50',
      textColor: 'text-blue-900',
      iconColor: 'text-blue-500',
      gradient: 'from-blue-500/20 to-blue-600/20',
    },
    {
      name: 'Tattoo Studios',
      icon: Paintbrush,
      color: 'bg-pink-50',
      textColor: 'text-pink-900',
      iconColor: 'text-pink-500',
      gradient: 'from-pink-500/20 to-pink-600/20',
    },
    {
      name: 'Hair Salons',
      icon: Scissors,
      color: 'bg-amber-50',
      textColor: 'text-amber-900',
      iconColor: 'text-amber-500',
      gradient: 'from-amber-500/20 to-amber-600/20',
    },
    {
      name: 'Spas',
      icon: Flower2,
      color: 'bg-green-50',
      textColor: 'text-green-900',
      iconColor: 'text-green-500',
      gradient: 'from-green-500/20 to-green-600/20',
    },
    {
      name: 'Nail Salons',
      icon: HandMetal,
      color: 'bg-rose-50',
      textColor: 'text-rose-900',
      iconColor: 'text-rose-500',
      gradient: 'from-rose-500/20 to-rose-600/20',
    },
    {
      name: 'Massage Therapy',
      icon: HeartPulse,
      color: 'bg-teal-50',
      textColor: 'text-teal-900',
      iconColor: 'text-teal-500',
      gradient: 'from-teal-500/20 to-teal-600/20',
    },
    {
      name: 'Beauty Salons',
      icon: Heart,
      color: 'bg-indigo-50',
      textColor: 'text-indigo-900',
      iconColor: 'text-indigo-500',
      gradient: 'from-indigo-500/20 to-indigo-600/20',
    },
  ]

  const checkScroll = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  const scroll = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = direction === 'left' ? -200 : 200
      sliderRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
      })
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className='w-full bg-white py-6 md:py-12'
    >
      <div className='container mx-auto px-4'>
        <div className='text-center mb-8 md:mb-12'>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='text-xs md:text-sm text-[#38b5ff] font-medium mb-2 md:mb-3'
          >
            BOOKING SOFTWARE BUILT FOR
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='text-2xl md:text-3xl font-bold text-gray-900'
          >
            Choose Your Industry
          </motion.h2>
        </div>

        <div className='relative'>
          {/* Left Shadow Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: canScrollLeft ? 1 : 0 }}
            className='absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none'
          />

          {/* Right Shadow Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: canScrollRight ? 1 : 0 }}
            className='absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none'
          />

          {/* Navigation Buttons */}
          <AnimatePresence>
            {canScrollLeft && (
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                onClick={() => scroll('left')}
                className='absolute left-1 md:left-4 top-1/2 -translate-y-1/2 w-8 h-8 md:w-12 md:h-12 rounded-full bg-white shadow-lg z-20 flex items-center justify-center text-gray-600 hover:text-[#38b5ff] transition-colors hover:shadow-xl'
              >
                <ChevronLeft className='w-4 h-4 md:w-6 md:h-6' />
              </motion.button>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {canScrollRight && (
              <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                onClick={() => scroll('right')}
                className='absolute right-1 md:right-4 top-1/2 -translate-y-1/2 w-8 h-8 md:w-12 md:h-12 rounded-full bg-white shadow-lg z-20 flex items-center justify-center text-gray-600 hover:text-[#38b5ff] transition-colors hover:shadow-xl'
              >
                <ChevronRight className='w-4 h-4 md:w-6 md:h-6' />
              </motion.button>
            )}
          </AnimatePresence>

          {/* Categories Slider */}
          <div
            ref={sliderRef}
            onScroll={checkScroll}
            className='overflow-x-auto scrollbar-hide flex gap-3 md:gap-6 px-8 md:px-16 pb-4 md:pb-6'
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch',
            }}
          >
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className='flex-shrink-0'
                onHoverStart={() => setIsHovered(index)}
                onHoverEnd={() => setIsHovered(null)}
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative w-32 h-24 md:w-56 md:h-40 rounded-xl md:rounded-2xl ${category.color} flex flex-col items-center justify-center gap-2 md:gap-4 transition-all duration-300 shadow-sm hover:shadow-xl overflow-hidden`}
                >
                  <motion.div
                    initial={false}
                    animate={{
                      scale: isHovered === index ? 1.2 : 1,
                      opacity: isHovered === index ? 0.8 : 0,
                    }}
                    className={`absolute inset-0 bg-gradient-to-br ${category.gradient}`}
                  />
                  <motion.div
                    animate={{
                      y: isHovered === index ? -5 : 0,
                    }}
                    className='z-10'
                  >
                    <category.icon
                      className={`w-6 h-6 md:w-10 md:h-10 ${category.iconColor}`}
                    />
                  </motion.div>
                  <motion.span
                    animate={{
                      y: isHovered === index ? 5 : 0,
                    }}
                    className={`font-medium ${category.textColor} text-sm md:text-lg z-10 px-2 text-center`}
                  >
                    {category.name}
                  </motion.span>
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom CSS for hiding scrollbar */}
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </motion.div>
  )
}

export default CategorySlider
