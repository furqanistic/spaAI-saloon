import { AnimatePresence, motion } from 'framer-motion'
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
} from 'lucide-react'
import React, { useEffect, useState } from 'react'

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(null)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isHovered, setIsHovered] = useState(false)

  const slides = [
    {
      image:
        'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNwYXxlbnwwfHwwfHx8Mg%3D%3D',
      title: 'Transform Your Med Spa Experience',
      description: 'AI-powered solutions that elevate every client interaction',
      tag: 'Platform Overview',
      color: 'from-[#38b5ff]/80 to-blue-600/80',
      cta: 'Explore Platform',
      stats: [
        { label: 'Client Satisfaction', value: '98%' },
        { label: 'Time Saved', value: '40%' },
        { label: 'Revenue Growth', value: '2.5x' },
      ],
    },
    {
      image:
        'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80',
      title: 'Intelligent Client Management',
      description: 'Build lasting relationships with data-driven insights',
      tag: 'Smart Features',
      color: 'from-blue-600/80 to-purple-600/80',
      cta: 'See Features',
      stats: [
        { label: 'Client Retention', value: '95%' },
        { label: 'Booking Rate', value: '85%' },
        { label: 'Reviews', value: '4.9★' },
      ],
    },
    {
      image:
        'https://images.unsplash.com/photo-1583417657209-d3dd44dc9c09?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fHNwYXxlbnwwfHwwfHx8Mg%3D%3D',
      title: 'Seamless Automation',
      description: 'Let AI handle the routine while you focus on growth',
      tag: 'Automation',
      color: 'from-purple-600/80 to-pink-600/80',
      cta: 'Learn More',
      stats: [
        { label: 'Tasks Automated', value: '75%' },
        { label: 'Response Time', value: '2min' },
        { label: 'Efficiency', value: '3x' },
      ],
    },
  ]

  useEffect(() => {
    let timer
    if (isPlaying && !isHovered) {
      timer = setInterval(() => {
        nextSlide()
      }, 5000)
    }
    return () => clearInterval(timer)
  }, [currentIndex, isPlaying, isHovered])

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 1.1,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.9,
    }),
  }

  const swipeConfidenceThreshold = 10000
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity
  }

  const paginate = (newDirection) => {
    setDirection(newDirection)
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection
      if (nextIndex >= slides.length) nextIndex = 0
      if (nextIndex < 0) nextIndex = slides.length - 1
      return nextIndex
    })
  }

  const nextSlide = () => paginate(1)
  const prevSlide = () => paginate(-1)

  return (
    <div
      className='relative w-full h-screen overflow-hidden bg-gray-900'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Progress Bar */}
      {isPlaying && !isHovered && (
        <motion.div
          className='absolute top-0 left-0 h-1 bg-white z-20 origin-left'
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 5, ease: 'linear' }}
          key={currentIndex}
        />
      )}

      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial='enter'
          animate='center'
          exit='exit'
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.5 },
            scale: { duration: 0.5 },
          }}
          drag='x'
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x)
            if (swipe < -swipeConfidenceThreshold) {
              paginate(1)
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1)
            }
          }}
          className='absolute inset-0 w-full h-full'
        >
          <div className='relative w-full h-full'>
            {/* Image with Ken Burns effect */}
            <motion.img
              src={slides[currentIndex].image}
              alt={slides[currentIndex].title}
              className='w-full h-full object-cover'
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 5 }}
            />

            {/* Gradient Overlay */}
            <div
              className={`absolute inset-0 bg-gradient-to-r ${slides[currentIndex].color} mix-blend-multiply`}
            />

            <div className='absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60' />

            {/* Content */}
            <div className='absolute inset-0 flex items-center justify-center p-4 md:p-8'>
              <div className='max-w-6xl mx-auto w-full'>
                <div className='grid md:grid-cols-2 gap-8 items-center'>
                  {/* Left Content */}
                  <motion.div
                    className='text-left space-y-6'
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <motion.span
                      className='inline-block px-4 py-1 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-medium'
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      {slides[currentIndex].tag}
                    </motion.span>
                    <motion.h2
                      className='text-3xl md:text-5xl lg:text-6xl font-bold text-white'
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      {slides[currentIndex].title}
                    </motion.h2>
                    <motion.p
                      className='text-lg md:text-xl text-white/90 max-w-xl'
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      {slides[currentIndex].description}
                    </motion.p>
                    <motion.button
                      className='group inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full text-white font-medium transition-all duration-300'
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {slides[currentIndex].cta}
                      <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform' />
                    </motion.button>
                  </motion.div>

                  {/* Right Content - Stats */}
                  <motion.div
                    className='grid grid-cols-3 gap-4'
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    {slides[currentIndex].stats.map((stat, index) => (
                      <motion.div
                        key={stat.label}
                        className='text-center p-4 rounded-2xl bg-white/10 backdrop-blur-sm'
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                      >
                        <motion.p
                          className='text-2xl md:text-3xl font-bold text-white mb-1'
                          initial={{ scale: 0.5 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.6 + index * 0.1 }}
                        >
                          {stat.value}
                        </motion.p>
                        <p className='text-sm text-white/80'>{stat.label}</p>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-4 z-20'>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={prevSlide}
          className='w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors flex items-center justify-center text-white'
        >
          <ChevronLeft className='w-5 h-5 md:w-6 md:h-6' />
        </motion.button>

        <div className='flex space-x-2'>
          {slides.map((_, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1)
                setCurrentIndex(index)
              }}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-white scale-125'
                  : 'bg-white/50 hover:bg-white/70'
              }`}
            />
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={nextSlide}
          className='w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors flex items-center justify-center text-white'
        >
          <ChevronRight className='w-5 h-5 md:w-6 md:h-6' />
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsPlaying(!isPlaying)}
          className={`w-10 h-10 md:w-12 md:h-12 rounded-full ${
            isPlaying ? 'bg-white/20' : 'bg-white/10'
          } backdrop-blur-sm hover:bg-white/20 transition-colors flex items-center justify-center text-white`}
        >
          {isPlaying ? (
            <Pause className='w-5 h-5 md:w-6 md:h-6' />
          ) : (
            <Play className='w-5 h-5 md:w-6 md:h-6' />
          )}
        </motion.button>
      </div>
    </div>
  )
}

export default ImageSlider
