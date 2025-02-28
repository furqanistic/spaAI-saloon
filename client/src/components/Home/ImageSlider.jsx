import { AnimatePresence, motion } from 'framer-motion'
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Clock,
  Heart,
  Pause,
  Play,
  Sparkles,
  Star,
  TrendingUp,
  Trophy,
  Zap,
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
      color: 'from-fuchsia-600/90 to-purple-800/90',
      accent: 'bg-fuchsia-400',
      icon: Sparkles,
      cta: 'Explore Platform',
      stats: [
        { label: 'Client Satisfaction', value: '98%', icon: Star },
        { label: 'Time Saved', value: '40%', icon: Clock },
        { label: 'Revenue Growth', value: '2.5x', icon: TrendingUp },
      ],
    },
    {
      image:
        'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80',
      title: 'Intelligent Client Management',
      description: 'Build lasting relationships with data-driven insights',
      tag: 'Smart Features',
      color: 'from-purple-800/90 to-indigo-900/90',
      accent: 'bg-purple-400',
      icon: Heart,
      cta: 'See Features',
      stats: [
        { label: 'Client Retention', value: '95%', icon: Heart },
        { label: 'Booking Rate', value: '85%', icon: Zap },
        { label: 'Reviews', value: '4.9★', icon: Trophy },
      ],
    },
    {
      image:
        'https://images.unsplash.com/photo-1583417657209-d3dd44dc9c09?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fHNwYXxlbnwwfHwwfHx8Mg%3D%3D',
      title: 'Seamless Automation',
      description: 'Let AI handle the routine while you focus on growth',
      tag: 'Automation',
      color: 'from-indigo-900/90 to-pink-800/90',
      accent: 'bg-pink-400',
      icon: Zap,
      cta: 'Learn More',
      stats: [
        { label: 'Tasks Automated', value: '75%', icon: Zap },
        { label: 'Response Time', value: '2min', icon: Clock },
        { label: 'Efficiency', value: '3x', icon: TrendingUp },
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

  const CurrentIcon = slides[currentIndex].icon

  return (
    <div
      className='relative w-full h-screen overflow-hidden bg-gray-900'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Decorative Elements */}
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute top-0 left-0 w-64 h-64 bg-purple-500/20 rounded-full filter blur-3xl transform -translate-x-32 -translate-y-32'></div>
        <div className='absolute bottom-0 right-0 w-96 h-96 bg-pink-500/20 rounded-full filter blur-3xl transform translate-x-32 translate-y-32'></div>
      </div>

      {/* Progress Bar */}
      {isPlaying && !isHovered && (
        <motion.div
          className={`absolute top-0 left-0 h-1 ${slides[currentIndex].accent} z-20 origin-left`}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 5, ease: 'linear' }}
          key={`progress-${currentIndex}`}
        />
      )}

      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={`slide-${currentIndex}`}
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
              animate={{ scale: isPlaying ? [1.1, 1, 1.05] : 1 }}
              transition={{
                scale: isPlaying
                  ? {
                      times: [0, 0.7, 1],
                      duration: 7,
                    }
                  : { duration: 0.5 },
              }}
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
                    <motion.div
                      className='flex items-center space-x-2'
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <motion.div
                        animate={{
                          rotate: isPlaying ? [0, 10, -10, 0] : 0,
                          scale: isPlaying ? [1, 1.2, 1] : 1,
                        }}
                        transition={{
                          duration: 2,
                          repeat: isPlaying ? Infinity : 0,
                          repeatDelay: 3,
                        }}
                      >
                        <CurrentIcon className='w-5 h-5 text-white' />
                      </motion.div>
                      <span className='inline-block px-4 py-1 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-medium'>
                        {slides[currentIndex].tag}
                      </span>
                    </motion.div>

                    <motion.h2
                      className='text-4xl md:text-6xl lg:text-7xl font-bold text-white'
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      {slides[currentIndex].title}
                    </motion.h2>

                    <motion.p
                      className='text-xl md:text-2xl text-white/90 max-w-xl'
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      {slides[currentIndex].description}
                    </motion.p>

                    <motion.button
                      onClick={() => (window.location.href = '/services')}
                      className={`group inline-flex items-center gap-2 px-8 py-4 ${slides[currentIndex].accent} rounded-full text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                      whileHover={{
                        scale: 1.05,
                        boxShadow: '0 10px 25px -5px rgba(147, 51, 234, 0.5)',
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {slides[currentIndex].cta}
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          repeatType: 'loop',
                        }}
                      >
                        <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform' />
                      </motion.div>
                    </motion.button>
                  </motion.div>

                  {/* Right Content - Stats */}
                  <motion.div
                    className='grid grid-cols-3 gap-4'
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    {slides[currentIndex].stats.map((stat, index) => {
                      const StatIcon = stat.icon
                      return (
                        <motion.div
                          key={stat.label}
                          className='text-center p-6 rounded-2xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors group cursor-pointer'
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5 + index * 0.1 }}
                          whileHover={{
                            y: -5,
                            boxShadow: '0 15px 30px -5px rgba(0, 0, 0, 0.3)',
                            backgroundColor: 'rgba(255, 255, 255, 0.25)',
                          }}
                        >
                          <motion.div
                            className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${slides[
                              currentIndex
                            ].accent.replace(
                              'bg-',
                              'bg-'
                            )}/20 mb-4 group-hover:scale-110 transition-transform`}
                            initial={{ scale: 0.5 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.6 + index * 0.1 }}
                          >
                            <StatIcon className='w-6 h-6 text-white' />
                          </motion.div>
                          <motion.p
                            className='text-3xl md:text-4xl font-bold text-white mb-2'
                            initial={{ scale: 0.5 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.6 + index * 0.1 }}
                          >
                            {stat.value}
                          </motion.p>
                          <p className='text-sm text-white/80'>{stat.label}</p>
                        </motion.div>
                      )
                    })}
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
          className='w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors flex items-center justify-center text-white'
        >
          <ChevronLeft className='w-6 h-6 md:w-8 md:h-8' />
        </motion.button>

        <div className='flex space-x-3'>
          {slides.map((_, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1)
                setCurrentIndex(index)
              }}
              className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? slides[currentIndex].accent + ' scale-125'
                  : 'bg-white/50 hover:bg-white/70'
              }`}
              initial={index === currentIndex ? { scale: 0.8 } : { scale: 1 }}
              animate={
                index === currentIndex
                  ? {
                      scale: [1, 1.2, 1],
                    }
                  : { scale: 1 }
              }
              transition={
                index === currentIndex
                  ? {
                      duration: 2,
                      repeat: Infinity,
                      repeatType: 'loop',
                    }
                  : {}
              }
            />
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={nextSlide}
          className='w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors flex items-center justify-center text-white'
        >
          <ChevronRight className='w-6 h-6 md:w-8 md:h-8' />
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsPlaying(!isPlaying)}
          className={`w-12 h-12 md:w-14 md:h-14 rounded-full ${
            isPlaying ? 'bg-white/20' : 'bg-white/10'
          } backdrop-blur-sm hover:bg-white/20 transition-colors flex items-center justify-center text-white`}
        >
          {isPlaying ? (
            <Pause className='w-6 h-6 md:w-8 md:h-8' />
          ) : (
            <Play className='w-6 h-6 md:w-8 md:h-8' />
          )}
        </motion.button>
      </div>

      {/* Slide number indicator */}
      <motion.div
        className='absolute top-4 left-4 z-30 text-white font-medium bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full'
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <motion.span
          key={currentIndex}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
        >
          {currentIndex + 1}/{slides.length}
        </motion.span>
      </motion.div>

      {/* Decorative floating elements */}
      <motion.div
        className='absolute top-20 right-20 w-24 h-24 opacity-20'
        animate={{
          y: [0, -20, 0],
          rotate: [0, 45, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <div className='w-full h-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500 blur-xl' />
      </motion.div>

      <motion.div
        className='absolute bottom-40 left-20 w-16 h-16 opacity-20'
        animate={{
          y: [0, 20, 0],
          rotate: [0, -45, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
      >
        <div className='w-full h-full rounded-full bg-gradient-to-r from-fuchsia-500 to-purple-500 blur-xl' />
      </motion.div>
    </div>
  )
}

export default ImageSlider
