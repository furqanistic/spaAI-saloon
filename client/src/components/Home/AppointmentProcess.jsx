import { Button } from '@/components/ui/button'
import { motion, useAnimation, useInView } from 'framer-motion'
import {
  ArrowRight,
  Calendar,
  ChevronRight,
  Heart,
  MessageSquare,
  Sparkles,
  Stars,
  Target,
} from 'lucide-react'
import React, { useEffect, useState } from 'react'

// Decorative Components
const WavyBackground = () => (
  <svg
    className='absolute w-full h-full top-0 left-0 -z-10'
    viewBox='0 0 1440 320'
    preserveAspectRatio='none'
  >
    <path
      fill='rgba(56, 181, 255, 0.05)'
      d='M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,149.3C672,149,768,171,864,165.3C960,160,1056,128,1152,117.3C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
    />
  </svg>
)

const FloatingShape = ({ className, children }) => (
  <motion.div
    className={`absolute ${className}`}
    animate={{
      y: [-10, 10],
      rotate: [-5, 5],
      scale: [0.95, 1.05],
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      repeatType: 'reverse',
      ease: 'easeInOut',
    }}
  >
    {children}
  </motion.div>
)

const TimelineStep = ({ step, index, isLast }) => {
  const controls = useAnimation()
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [isInView, controls])

  const variants = {
    hidden: {
      opacity: 0,
      x: step.align === 'right' ? 50 : -50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  }

  const iconVariants = {
    hidden: {
      opacity: 0,
      scale: 0.5,
      rotate: -180,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.7,
        ease: 'backOut',
      },
    },
  }

  return (
    <div ref={ref} className='relative mb-40 last:mb-0'>
      {/* Connection Line with Enhanced Animation */}
      {!isLast && (
        <motion.div
          initial={{ height: 0 }}
          animate={isInView ? { height: '100%' } : { height: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className='absolute left-1/2 transform -translate-x-1/2 w-px bg-gradient-to-b from-[#38b5ff] to-pink-500 top-16'
          style={{
            backgroundSize: '200% 200%',
            animation: 'gradient 3s ease infinite',
          }}
        />
      )}

      {/* Floating Decorative Elements */}
      <FloatingShape
        className={`${step.align === 'right' ? 'right-20' : 'left-20'} top-0`}
      >
        <div className='p-3 bg-white/30 backdrop-blur-lg rounded-lg shadow-xl'>
          <Stars className='w-6 h-6 text-[#38b5ff]' />
        </div>
      </FloatingShape>

      {/* Interactive Icon */}
      <motion.div
        initial='hidden'
        animate={controls}
        variants={iconVariants}
        className='absolute left-1/2 transform -translate-x-1/2 z-10'
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <motion.div
          className='w-24 h-24 rounded-full bg-white shadow-[0_8px_32px_rgba(56,181,255,0.25)] flex items-center justify-center p-1.5'
          animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className='w-full h-full rounded-full bg-gradient-to-r from-[#38b5ff] to-pink-500 flex items-center justify-center p-0.5'>
            <div className='w-full h-full rounded-full bg-white flex items-center justify-center'>
              <motion.div
                animate={isHovered ? { rotate: 360 } : { rotate: 0 }}
                transition={{ duration: 0.5 }}
              >
                <step.icon className='w-10 h-10 text-[#38b5ff]' />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Content Card with Enhanced Interactions */}
      <div
        className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
          step.align === 'right' ? 'direction-rtl' : ''
        }`}
      >
        <motion.div
          initial='hidden'
          animate={controls}
          variants={variants}
          className={`${step.align === 'right' ? 'lg:col-start-2' : ''}`}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
        >
          <motion.div
            className='relative bg-white rounded-3xl p-10 border border-blue-100 transition-all duration-500 overflow-hidden'
            animate={{
              boxShadow: isHovered
                ? '0 25px 75px rgba(56,181,255,0.2)'
                : '0 20px 60px rgba(56,181,255,0.12)',
            }}
          >
            {/* Shine Effect */}
            <motion.div
              className='absolute inset-0 opacity-0'
              animate={
                isHovered
                  ? {
                      opacity: [0, 0.5, 0],
                      left: ['-100%', '200%'],
                    }
                  : {}
              }
              transition={{
                duration: 1,
                ease: 'easeInOut',
              }}
              style={{
                background:
                  'linear-gradient(45deg, transparent 0%, rgba(255,255,255,0.8) 45%, transparent 100%)',
              }}
            />

            <div className='flex items-center gap-4 mb-6'>
              <motion.span
                className='px-5 py-1.5 text-sm font-semibold rounded-full bg-gradient-to-r from-[#38b5ff]/10 to-pink-500/10 text-[#38b5ff]'
                animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
              >
                Step {index + 1}
              </motion.span>
            </div>

            <motion.h3
              className='text-3xl font-bold mb-4 bg-gradient-to-r from-[#38b5ff] to-pink-500 bg-clip-text text-transparent'
              animate={isHovered ? { x: 10 } : { x: 0 }}
              transition={{ duration: 0.3 }}
            >
              {step.title}
            </motion.h3>

            <motion.p
              className='text-gray-600 leading-relaxed text-lg'
              animate={isHovered ? { x: 10 } : { x: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              {step.description}
            </motion.p>

            {step.align === 'left' && (
              <motion.div
                className='hidden lg:block absolute right-0 top-1/2 transform translate-x-full -translate-y-1/2'
                animate={isHovered ? { x: 10 } : { x: 0 }}
              >
                <ChevronRight className='w-8 h-8 text-[#38b5ff]' />
              </motion.div>
            )}
          </motion.div>
        </motion.div>
        <div className='hidden lg:block' />
      </div>
    </div>
  )
}

const AppointmentTimeline = () => {
  const steps = [
    {
      title: 'Targeted Research & Analysis',
      description:
        'We collect visuals that highlight your craftmanship, gain insights into industry trends and competitor landscapes, and launch targeted ad campaigns identifying decision-makers primed for action.',
      icon: Target,
      align: 'right',
    },
    {
      title: 'Personalized Outreach',
      description:
        'Craft compelling messages that make your clinic stand out. Reach your audience through strategic calls, texts, and emails, maximizing response rates and fostering meaningful interactions.',
      icon: MessageSquare,
      align: 'left',
    },
    {
      title: 'Appointment Setting',
      description:
        'Our SDRs reach out to leads during your available time slots, send reminders to ensure attendance, and take proactive steps to reschedule if needed, prioritizing your success.',
      icon: Calendar,
      align: 'right',
    },
  ]

  const headerControls = useAnimation()
  const headerRef = React.useRef(null)
  const headerInView = useInView(headerRef, { once: true })
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    if (headerInView) {
      headerControls.start('visible')
    }
  }, [headerInView, headerControls])

  return (
    <div className='relative bg-gradient-to-b from-white via-blue-50/30 to-pink-50/30 min-h-screen overflow-hidden'>
      {/* Enhanced Background Elements */}
      <WavyBackground />

      {/* Floating Decorative Elements */}
      <FloatingShape className='top-20 right-20'>
        <div className='p-4 bg-white/30 backdrop-blur-lg rounded-lg shadow-xl'>
          <Sparkles className='w-8 h-8 text-[#38b5ff]' />
        </div>
      </FloatingShape>
      <FloatingShape className='bottom-40 left-20'>
        <div className='p-3 bg-white/30 backdrop-blur-lg rounded-lg shadow-xl'>
          <Heart className='w-6 h-6 text-pink-500' />
        </div>
      </FloatingShape>

      <div className='relative max-w-6xl mx-auto px-4 py-32'>
        {/* Enhanced Header Section */}
        <motion.div
          ref={headerRef}
          initial='hidden'
          animate={headerControls}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.8,
                ease: 'easeOut',
              },
            },
          }}
          className='text-center mb-40'
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
        >
          <motion.span
            className='inline-block px-6 py-2 rounded-full bg-gradient-to-r from-[#38b5ff]/10 to-pink-500/10 text-[#38b5ff] text-sm font-semibold mb-8'
            animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
          >
            OUR PROCESS
          </motion.span>

          <motion.h2
            className='text-5xl md:text-6xl lg:text-7xl font-bold mb-8'
            animate={isHovered ? { y: -10 } : { y: 0 }}
          >
            Our Appointment Setting
            <motion.span
              className='block mt-2 bg-gradient-to-r from-[#38b5ff] to-pink-500 bg-clip-text text-transparent'
              animate={
                isHovered
                  ? {
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                    }
                  : {}
              }
              transition={{ duration: 3, repeat: Infinity }}
            >
              Process
            </motion.span>
          </motion.h2>

          <motion.p
            className='text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed'
            animate={isHovered ? { y: -5 } : { y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Count on us every step of the way to provide you with qualified
            leads ready to convert into loyal customers.
          </motion.p>
        </motion.div>

        {/* Timeline Steps */}
        <div className='relative'>
          {steps.map((step, index) => (
            <TimelineStep
              key={index}
              step={step}
              index={index}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <div className='relative mt-32'>
          {/* Floating elements around CTA */}
          <FloatingShape className='top-0 right-10'>
            <div className='p-3 bg-white/30 backdrop-blur-lg rounded-lg shadow-xl'>
              <Sparkles className='w-6 h-6 text-[#38b5ff]' />
            </div>
          </FloatingShape>
          <FloatingShape className='bottom-0 left-10'>
            <div className='p-3 bg-white/30 backdrop-blur-lg rounded-lg shadow-xl'>
              <Heart className='w-6 h-6 text-pink-500' />
            </div>
          </FloatingShape>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className='text-center relative z-10'
          >
            {/* CTA Container */}
            <motion.div
              className='inline-block'
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Button
                size='lg'
                className='relative h-14 px-8 bg-gradient-to-r from-[#38b5ff] to-pink-500 hover:from-[#38b5ff] hover:to-pink-600 shadow-lg group overflow-hidden'
              >
                {/* Animated gradient overlay */}
                <motion.div
                  className='absolute inset-0 bg-gradient-to-r from-[#38b5ff] to-pink-500'
                  animate={{
                    x: ['-100%', '100%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  style={{
                    opacity: 0.5,
                    mixBlendMode: 'overlay',
                  }}
                />

                {/* Shine effect */}
                <motion.div
                  className='absolute inset-0 bg-white opacity-0 group-hover:opacity-20'
                  animate={{
                    x: [-100, 200],
                  }}
                  transition={{
                    duration: 0.5,
                    ease: 'easeInOut',
                  }}
                />

                {/* Button content */}
                <span className='relative flex items-center gap-2 text-white font-medium'>
                  Book Live Demo
                  <motion.div
                    animate={{
                      x: [0, 4, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatType: 'reverse',
                      ease: 'easeInOut',
                    }}
                  >
                    <ArrowRight className='w-4 h-4' />
                  </motion.div>
                </span>
              </Button>

              {/* Secondary CTA */}
              <Button
                variant='outline'
                className='h-14 px-8 ml-4 border-2 border-[#38b5ff] text-[#38b5ff] hover:bg-[#38b5ff]/5 transition-all duration-300
                  hover:border-[#38b5ff] hover:shadow-lg hover:shadow-[#38b5ff]/10'
              >
                Start Product Tour
              </Button>

              {/* Button glow effect */}
              <motion.div
                className='absolute inset-0 -z-10 bg-gradient-to-r from-[#38b5ff] to-pink-500 rounded-3xl blur-xl opacity-30'
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  ease: 'easeInOut',
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default AppointmentTimeline
