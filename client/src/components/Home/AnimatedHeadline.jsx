import { AnimatePresence, motion } from 'framer-motion'
import { Crown, Rocket, Sparkles, Star, Zap } from 'lucide-react'
import React, { useEffect, useState } from 'react'

const AnimatedHeadline = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const words = [
    {
      text: 'Collaboration',
      color: 'text-fuchsia-500',
      gradient: 'from-fuchsia-500/20 to-purple-500/20',
      icon: Sparkles,
    },
    {
      text: 'Innovation',
      color: 'text-purple-500',
      gradient: 'from-purple-500/20 to-indigo-500/20',
      icon: Zap,
    },
    {
      text: 'Excellence',
      color: 'text-indigo-500',
      gradient: 'from-indigo-500/20 to-blue-500/20',
      icon: Star,
    },
    {
      text: 'Growth',
      color: 'text-blue-500',
      gradient: 'from-blue-500/20 to-cyan-500/20',
      icon: Rocket,
    },
    {
      text: 'Success',
      color: 'text-cyan-500',
      gradient: 'from-cyan-500/20 to-fuchsia-500/20',
      icon: Crown,
    },
  ]

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % words.length)
      }, 3000)
      return () => clearInterval(interval)
    }
  }, [isHovered])

  const CurrentIcon = words[currentIndex].icon

  return (
    <div className='relative min-h-[70vh] flex items-center justify-center bg-gray-50 overflow-hidden'>
      <div className='container mx-auto px-4 py-20'>
        {/* Accent Line */}
        <motion.div
          className='w-20 h-1 bg-gradient-to-r from-fuchsia-500 to-cyan-500 rounded-full mx-auto mb-8'
          initial={{ width: 0 }}
          animate={{ width: 80 }}
          transition={{ duration: 1, delay: 0.2 }}
        />

        <motion.h2
          className='text-lg md:text-xl text-gray-600 text-center mb-4 font-medium'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Elevate Your Business with
        </motion.h2>

        <h1 className='relative text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-gray-900 text-center max-w-7xl mx-auto leading-tight'>
          <div className='inline'>
            The Customer Success Platform that Maximizes{' '}
          </div>

          <div
            className='inline-block w-[340px] md:w-[500px]'
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <AnimatePresence mode='wait'>
              <motion.div
                key={currentIndex}
                initial={{ y: 40, opacity: 0, scale: 0.9 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                exit={{ y: -40, opacity: 0, scale: 0.9 }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 30,
                  duration: 0.5,
                }}
                className='relative'
              >
                <motion.div
                  className={`inline-flex items-center gap-4 ${words[currentIndex].color}`}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                >
                  <CurrentIcon className='w-12 h-12' />
                  <span>{words[currentIndex].text}</span>
                </motion.div>

                {/* Underline effect */}
                <motion.div
                  className={`absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r ${words[currentIndex].gradient} rounded-full`}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </h1>

        {/* Subtitle */}
        <motion.p
          className='mt-8 text-xl md:text-2xl text-gray-600 text-center max-w-3xl mx-auto'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Empower your team with AI-driven insights and seamless automation
        </motion.p>
      </div>

      {/* Background decorative elements */}
      <div className='absolute inset-0 -z-10 overflow-hidden'>
        {/* Primary gradient background */}
        <div className='absolute inset-0 bg-gradient-to-b from-gray-50 via-gray-50 to-gray-100' />

        {/* Animated blobs */}
        <motion.div
          className='absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-fuchsia-100 to-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70'
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <motion.div
          className='absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70'
          animate={{
            scale: [1, 1.1, 1],
            x: [0, -30, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        />

        <motion.div
          className='absolute bottom-1/4 left-1/3 w-96 h-96 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70'
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 40, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
        />

        {/* Decorative dots grid */}
        <div
          className='absolute inset-0'
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.05) 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Optional particle effect */}
      <div className='absolute inset-0 pointer-events-none'>
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className='absolute w-1 h-1 bg-gray-300 rounded-full'
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default AnimatedHeadline
