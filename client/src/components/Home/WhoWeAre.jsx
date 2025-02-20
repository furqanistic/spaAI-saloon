import { motion } from 'framer-motion'
import {
  Activity,
  Building2,
  Shield,
  Sparkles,
  Star,
  Target,
  Trophy,
  Users,
  Zap,
} from 'lucide-react'
import React, { useState } from 'react'

const WhoWeAre = () => {
  const [hoveredCard, setHoveredCard] = useState(null)

  const boxVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] },
    },
  }

  const cardVariants = {
    initial: { y: 20, opacity: 0 },
    animate: (i) => ({
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: i * 0.15, ease: [0.4, 0, 0.2, 1] },
    }),
    hover: {
      y: -12,
      scale: 1.02,
      transition: { duration: 0.3, ease: 'easeOut' },
    },
  }

  const features = [
    {
      icon: <Building2 className='w-6 h-6' aria-hidden='true' />,
      secondaryIcon: <Trophy className='w-4 h-4' />,
      title: 'Med Spa Excellence',
      description: 'Leading med spa marketing agency in Alberta',
      color: 'from-purple-600 to-pink-500',
      stats: { value: '150+', label: 'Active Spas' },
    },
    {
      icon: <Target className='w-6 h-6' aria-hidden='true' />,
      secondaryIcon: <Activity className='w-4 h-4' />,
      title: 'Strategic Growth',
      description: 'Generating high-value patient acquisitions',
      color: 'from-pink-500 to-rose-500',
      stats: { value: '200%', label: 'Avg. Growth' },
    },
    {
      icon: <Users className='w-6 h-6' aria-hidden='true' />,
      secondaryIcon: <Star className='w-4 h-4' />,
      title: 'Client-Focused',
      description: 'Empowering beauty and medical professionals',
      color: 'from-blue-500 to-cyan-500',
      stats: { value: '98%', label: 'Satisfaction' },
    },
  ]

  // Particle animation for background
  const generateParticles = (count) => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      size: Math.random() * 4 + 2,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 2,
    }))
  }

  const particles = generateParticles(20)

  return (
    <section
      className='relative py-24 overflow-hidden'
      aria-labelledby='who-we-are-heading'
    >
      {/* Enhanced Background with Animated Gradient */}
      <motion.div
        className='absolute inset-0 bg-gradient-to-br from-white via-purple-50/30 to-pink-50/30'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Animated Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className='absolute rounded-full bg-gradient-to-r from-purple-400/20 to-pink-400/20'
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [-20, 20],
            x: [-20, 20],
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            repeatType: 'reverse',
            delay: particle.delay,
            ease: 'easeInOut',
          }}
        />
      ))}

      <div className='relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          variants={boxVariants}
          initial='initial'
          animate='animate'
          className='relative bg-white/70 backdrop-blur-xl border border-purple-200/30 rounded-2xl p-8 sm:p-12 shadow-xl'
        >
          {/* Enhanced Decorative Elements */}
          <motion.div
            className='absolute -top-4 -left-4 w-8 h-8 border-2 border-purple-400 rounded-lg bg-white'
            animate={{
              rotate: [0, 90, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className='absolute -bottom-4 -right-4 w-8 h-8 border-2 border-pink-400 rounded-lg bg-white'
            animate={{
              rotate: [0, -90, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          {/* Enhanced Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className='text-center mb-16'
          >
            <div className='inline-flex items-center px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 border border-purple-200/30 backdrop-blur-sm mb-6'>
              <Sparkles className='w-4 h-4 mr-2 text-purple-600' />
              <span className='text-sm font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent'>
                Discover Our Story
              </span>
            </div>

            <h2
              id='who-we-are-heading'
              className='text-4xl sm:text-5xl font-bold mb-6'
            >
              <span className='block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent'>
                Who Are We?
              </span>
            </h2>
            <p className='text-gray-600 max-w-2xl mx-auto text-lg'>
              RadiantMD Consulting empowers beauty professionals through
              strategic marketing and cutting-edge solutions that drive real
              results.
            </p>
          </motion.div>

          {/* Enhanced Feature Cards */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {features.map((feature, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={cardVariants}
                initial='initial'
                animate='animate'
                whileHover='hover'
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
                className='group relative'
              >
                <div className='relative h-full p-8 bg-white rounded-xl border border-purple-100 shadow-lg transition-all duration-300 group-hover:shadow-2xl group-hover:border-purple-200'>
                  {/* Animated gradient background */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300`}
                    animate={
                      hoveredCard === index
                        ? {
                            backgroundPosition: ['0% 0%', '100% 100%'],
                          }
                        : {}
                    }
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatType: 'reverse',
                    }}
                  />

                  <div className='relative'>
                    {/* Enhanced Icon Container */}
                    <div className='relative mb-6'>
                      <motion.div
                        className={`p-4 rounded-xl bg-gradient-to-r ${feature.color} w-fit`}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className='text-white'>{feature.icon}</div>
                      </motion.div>

                      {/* Floating Secondary Icon */}
                      <motion.div
                        className='absolute -top-2 -right-2 p-2 bg-white rounded-lg shadow-md'
                        animate={{
                          y: [-4, 4],
                          rotate: [-5, 5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatType: 'reverse',
                        }}
                      >
                        <div
                          className={`bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`}
                        >
                          {feature.secondaryIcon}
                        </div>
                      </motion.div>
                    </div>

                    {/* Enhanced Content */}
                    <h3 className='text-xl font-bold mb-3 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent'>
                      {feature.title}
                    </h3>
                    <p className='text-gray-600 mb-6'>{feature.description}</p>

                    {/* Stats Display */}
                    <div className='pt-4 border-t border-purple-100'>
                      <div className='flex items-center justify-between'>
                        <span
                          className={`text-2xl font-bold bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`}
                        >
                          {feature.stats.value}
                        </span>
                        <span className='text-sm text-gray-500'>
                          {feature.stats.label}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Enhanced Floating Animation Elements */}
      <motion.div
        className='absolute top-20 right-20 w-72 h-72 rounded-full bg-gradient-to-r from-purple-400/10 to-pink-400/10 blur-3xl'
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className='absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-gradient-to-r from-pink-400/10 to-purple-400/10 blur-3xl'
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
          rotate: [0, -90, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </section>
  )
}

export default WhoWeAre
