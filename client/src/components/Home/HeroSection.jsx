import { Button } from '@/components/ui/button'
import { motion, useAnimationControls } from 'framer-motion'
import { ArrowRight, CheckCircle, Sparkles } from 'lucide-react'
import React, { useEffect, useState } from 'react'

const HeroSection = () => {
  const [isHovered, setIsHovered] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const controls = useAnimationControls()

  // Track mouse position for parallax effect
  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - left) / width - 0.5
    const y = (e.clientY - top) / height - 0.5
    setMousePosition({ x, y })
  }

  // Enhanced image animation with more dynamic spring physics
  const imageAnimation = {
    initial: { scale: 1, rotate: 0, y: 0 },
    hover: {
      scale: 1.05,
      rotate: 1,
      y: -5,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 25,
      },
    },
  }

  // Improved floating card animation with mouse-based movement
  const getFloatingCardAnimation = (index) => ({
    initial: { y: 0, x: 0 },
    animate: {
      y: mousePosition.y * 20,
      x: mousePosition.x * 20,
      transition: {
        type: 'spring',
        stiffness: 150,
        damping: 15,
      },
    },
  })

  // Enhanced glow effect with mouse tracking
  const glowAnimation = {
    initial: { opacity: 0.3, scale: 1 },
    animate: {
      opacity: [0.2, 0.4, 0.2],
      scale: 1.1,
      x: mousePosition.x * 50,
      y: mousePosition.y * 50,
      transition: {
        opacity: {
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        },
        x: {
          type: 'spring',
          stiffness: 50,
          damping: 20,
        },
        y: {
          type: 'spring',
          stiffness: 50,
          damping: 20,
        },
      },
    },
  }

  return (
    <section className='relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-br from-white via-[#38b5ff]/5 to-white'>
      {/* Enhanced Background Elements */}
      <div className='absolute inset-0 pointer-events-none'>
        <div className='absolute right-0 top-0 w-[900px] h-[900px] bg-gradient-radial from-[#38b5ff]/10 to-transparent rounded-full blur-3xl -translate-y-1/2 animate-pulse'></div>
        <div className='absolute left-0 bottom-0 w-[700px] h-[700px] bg-gradient-radial from-[#38b5ff]/10 to-transparent rounded-full blur-3xl translate-y-1/2 animate-pulse'></div>
      </div>

      {/* Main Content */}
      <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16'>
        <div className='grid lg:grid-cols-2 gap-16 items-center'>
          {/* Left Column - Enhanced Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className='space-y-8'
          >
            {/* Enhanced Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className='inline-flex items-center px-6 py-2 rounded-full bg-gradient-to-r from-[#38b5ff]/20 to-[#38b5ff]/5 border border-[#38b5ff]/20 backdrop-blur-sm'
            >
              <Sparkles className='w-4 h-4 mr-2 text-[#38b5ff]' />
              <span className='text-sm font-semibold text-[#38b5ff]'>
                #1 Med Spa Management Platform
              </span>
            </motion.div>

            {/* Enhanced Heading */}
            <h1 className='text-6xl sm:text-7xl font-bold tracking-tight'>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className='text-gray-900 block'
              >
                Transform Your
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className='text-[#38b5ff] block bg-gradient-to-r from-[#38b5ff] to-[#2b8cc5] bg-clip-text text-transparent'
              >
                Med Spa Growth
              </motion.span>
            </h1>

            {/* Enhanced Feature List */}
            <div className='space-y-4 pt-4'>
              {[
                'Smart booking & automated reminders',
                'AI virtual assistant for 24/7 support',
                'Real-time analytics & insights',
              ].map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className='flex items-center gap-3 p-3 rounded-lg hover:bg-[#38b5ff]/5 transition-colors duration-300'
                >
                  <CheckCircle className='w-5 h-5 text-[#38b5ff]' />
                  <span className='text-gray-700'>{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* Enhanced CTAs */}
            <div className='flex flex-col sm:flex-row gap-4 pt-6'>
              <Button className='h-14 px-8 bg-[#38b5ff] hover:bg-[#38b5ff]/90 shadow-lg hover:shadow-xl hover:shadow-[#38b5ff]/20 transition-all duration-300'>
                <span className='flex items-center gap-2'>
                  Book Live Demo
                  <ArrowRight className='w-4 h-4' />
                </span>
              </Button>
              <Button
                variant='outline'
                className='h-14 px-8 border-2 hover:bg-[#38b5ff]/5 transition-colors duration-300'
              >
                Start Product Tour
              </Button>
            </div>

            {/* Enhanced Social Proof */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className='pt-8 border-t border-gray-200'
            >
              <div className='grid grid-cols-3 gap-6'>
                {[
                  { value: '500+', label: 'Med Spas Trust Us' },
                  { value: '95%', label: 'Client Satisfaction' },
                  { value: '24/7', label: 'Support & Uptime' },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 + index * 0.1 }}
                    className='flex flex-col p-4 rounded-lg hover:bg-[#38b5ff]/5 transition-colors duration-300'
                  >
                    <span className='text-3xl font-bold bg-gradient-to-r from-[#38b5ff] to-[#2b8cc5] bg-clip-text text-transparent'>
                      {stat.value}
                    </span>
                    <span className='text-sm text-gray-600'>{stat.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Enhanced Product Visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className='relative'
            onMouseMove={handleMouseMove}
          >
            {/* Multi-layered Glow Effect */}
            <motion.div
              initial='initial'
              animate='animate'
              variants={glowAnimation}
              className='absolute inset-0 bg-gradient-to-r from-[#38b5ff]/20 via-[#38b5ff]/10 to-transparent rounded-2xl blur-3xl'
            />
            <motion.div
              initial='initial'
              animate='animate'
              variants={glowAnimation}
              className='absolute inset-0 bg-gradient-to-b from-[#38b5ff]/15 via-transparent to-[#38b5ff]/10 rounded-2xl blur-2xl'
            />

            {/* Enhanced Dashboard Preview */}
            <motion.div
              className='relative group'
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
              initial='initial'
              animate={isHovered ? 'hover' : 'initial'}
              variants={imageAnimation}
            >
              <div className='relative bg-white rounded-2xl shadow-2xl overflow-hidden transition-all duration-500 hover:shadow-[0_25px_60px_rgba(56,181,255,0.35)]'>
                {/* Improved Shine Effect */}
                <div className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000'>
                  <div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:translate-x-full transform-gpu duration-2000' />
                  <div className='absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-transparent translate-y-full group-hover:translate-y-0 transform-gpu duration-1500 delay-200' />
                </div>

                {/* Main Image with Enhanced Container */}
                <div className='aspect-[4/3] relative overflow-hidden'>
                  <motion.img
                    src='https://images.pexels.com/photos/4004120/pexels-photo-4004120.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                    alt='RadiantMD Dashboard'
                    className='w-full h-full object-cover'
                    initial={{ scale: 1 }}
                    animate={{
                      scale: isHovered ? 1.05 : 1,
                      x: mousePosition.x * 10,
                      y: mousePosition.y * 10,
                    }}
                    transition={{
                      scale: { duration: 0.4 },
                      x: { type: 'spring', stiffness: 150, damping: 15 },
                      y: { type: 'spring', stiffness: 150, damping: 15 },
                    }}
                  />

                  {/* Dynamic Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: isHovered ? 0.4 : 0,
                      background: `radial-gradient(circle at ${
                        50 + mousePosition.x * 100
                      }% ${
                        50 + mousePosition.y * 100
                      }%, transparent 0%, rgba(0,0,0,0.3) 100%)`,
                    }}
                    transition={{ duration: 0.3 }}
                    className='absolute inset-0'
                  />
                </div>

                {/* Interactive Particles */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className='absolute w-2 h-2 bg-[#38b5ff]/20 rounded-full'
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                      opacity: [0, 1, 0],
                      scale: [0.2, 1.5, 0.2],
                      x: mousePosition.x * (20 + i * 5),
                      y: mousePosition.y * (20 + i * 5),
                    }}
                    transition={{
                      opacity: {
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.2,
                      },
                      scale: { duration: 2, repeat: Infinity, delay: i * 0.2 },
                      x: { type: 'spring', stiffness: 50, damping: 20 },
                      y: { type: 'spring', stiffness: 50, damping: 20 },
                    }}
                    style={{
                      top: `${20 + i * 10}%`,
                      left: `${10 + i * 10}%`,
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
