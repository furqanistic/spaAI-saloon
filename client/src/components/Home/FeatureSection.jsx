import { motion, useScroll, useTransform } from 'framer-motion'
import {
  CloudRain,
  Heart,
  Moon,
  SparkleIcon,
  Sparkles,
  Star,
  Sun,
} from 'lucide-react'
import React, { useEffect, useRef, useState } from 'react'

// Floating Particles Component
const FloatingParticles = () => {
  const particleCount = 20
  const icons = [Star, Heart, SparkleIcon, Moon, Sun]
  const particles = Array.from({ length: particleCount })

  return (
    <div className='absolute inset-0 overflow-hidden pointer-events-none'>
      {particles.map((_, index) => {
        const Icon = icons[index % icons.length]
        const size = Math.random() * 20 + 10
        const duration = Math.random() * 15 + 10
        const delay = Math.random() * 5
        const leftPosition = Math.random() * 100
        const opacityLevel = Math.random() * 0.5 + 0.1

        return (
          <motion.div
            key={index}
            className='absolute text-pink-300/40'
            style={{ left: `${leftPosition}%`, top: '-5%' }}
            initial={{ y: -100, opacity: 0, rotate: 0 }}
            animate={{
              y: ['0vh', '100vh'],
              opacity: [0, opacityLevel, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration,
              delay,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            <Icon size={size} />
          </motion.div>
        )
      })}
    </div>
  )
}

// Shimmer Effect Component
const ShimmerEffect = ({
  color = 'from-pink-200/30 via-purple-200/30 to-blue-200/30',
}) => {
  return (
    <motion.div
      className={`absolute inset-0 bg-gradient-to-r ${color} opacity-70`}
      animate={{
        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
      }}
      transition={{
        duration: 15,
        repeat: Infinity,
        ease: 'linear',
      }}
      style={{ backgroundSize: '200% 100%' }}
    />
  )
}

// Sparkle Effect Component
const SparkleEffect = ({ children }) => {
  return (
    <div className='relative'>
      {children}
      <motion.div
        className='absolute inset-0 overflow-hidden'
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        {Array.from({ length: 15 }).map((_, i) => {
          const size = Math.random() * 6 + 2
          const x = Math.random() * 100
          const y = Math.random() * 100
          return (
            <motion.div
              key={i}
              className='absolute rounded-full bg-white'
              style={{
                left: `${x}%`,
                top: `${y}%`,
                width: size,
                height: size,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 2 + 1,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: 'easeInOut',
              }}
            />
          )
        })}
      </motion.div>
    </div>
  )
}

// Animated Feature Badge
const FeatureBadge = ({ icon: Icon, text }) => {
  return (
    <motion.span
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className='inline-flex items-center px-5 py-2.5 rounded-full bg-gradient-to-r from-pink-100 to-purple-100 text-pink-700 font-semibold text-sm mb-6 shadow-lg shadow-pink-100/50'
      whileHover={{
        scale: 1.05,
        boxShadow: '0 10px 25px -5px rgba(236, 72, 153, 0.3)',
      }}
    >
      <Icon className='w-4 h-4 mr-2' />
      {text}
    </motion.span>
  )
}

// Feature Card Component
const FeatureCard = ({ feature, scrollYProgress, index }) => {
  const y = useTransform(scrollYProgress, [0, 1], [-100, 100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8])

  // Alternate layout for even indices
  const isEven = index % 2 === 0

  // Define a different icon for each feature item
  const featureIcons = [Sparkles, Star, Heart, SparkleIcon, Moon]

  return (
    <motion.div
      style={{ y, scale }}
      className='relative min-h-screen py-24 px-4 sm:px-6 lg:px-20 max-w-8xl mx-auto'
    >
      <motion.div
        style={{ opacity }}
        className='flex flex-col lg:flex-row items-center gap-8 lg:gap-20 bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-2xl rounded-[2.5rem] p-6 sm:p-8 lg:p-12 shadow-2xl border border-white/30 relative overflow-hidden'
      >
        {/* Decorative Elements */}
        <div className='absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none'>
          <ShimmerEffect
            color={
              isEven
                ? 'from-pink-200/20 via-purple-200/20 to-blue-200/20'
                : 'from-blue-200/20 via-purple-200/20 to-pink-200/20'
            }
          />
          <div className='absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-pink-100/30 to-transparent' />
          <div className='absolute -top-32 -right-32 w-64 h-64 bg-purple-200/20 rounded-full blur-3xl' />
          <div className='absolute -bottom-32 -left-32 w-64 h-64 bg-pink-200/20 rounded-full blur-3xl' />
        </div>

        {/* Content Order based on even/odd */}
        <div
          className={`flex flex-col ${
            isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
          } w-full items-center gap-12 lg:gap-20 relative z-10`}
        >
          {/* Content */}
          <div className='w-full lg:w-1/2 relative z-10'>
            <motion.div
              initial={{ opacity: 0, x: isEven ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className='max-w-xl mx-auto lg:mx-0'
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className='mb-10'
              >
                <FeatureBadge icon={Star} text={feature.subtitle} />

                <SparkleEffect>
                  <h2 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight leading-tight bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-purple-600'>
                    {feature.title}
                  </h2>
                </SparkleEffect>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className='text-lg sm:text-xl text-gray-600 mb-10 leading-relaxed'
              >
                {feature.description}
              </motion.p>

              <div className='space-y-6'>
                {feature.features.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 + 0.2 }}
                    className='flex items-center gap-4 group'
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className='w-12 h-12 rounded-2xl bg-gradient-to-br from-pink-50 to-purple-50 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-pink-100/50 transition-all duration-300'
                    >
                      {React.createElement(
                        featureIcons[i % featureIcons.length],
                        {
                          className: 'w-5 h-5 text-pink-600',
                        }
                      )}
                    </motion.div>
                    <span className='text-base sm:text-lg text-gray-700 font-medium group-hover:text-pink-600 transition-colors duration-200'>
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Image */}
          <div className='w-full lg:w-1/2'>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className='relative max-w-xl mx-auto'
            >
              <div className='w-full h-[300px] sm:h-[400px] lg:h-[500px] rounded-3xl overflow-hidden bg-gradient-to-br from-pink-50 to-purple-50 p-6 shadow-2xl shadow-pink-100/50'>
                <div className='absolute inset-0 bg-gradient-to-br from-pink-500/5 to-purple-500/5' />
                <img
                  src={feature.image}
                  alt={feature.imageAlt}
                  className='w-full h-full object-cover rounded-2xl shadow-2xl'
                />

                {/* Decorative elements */}
                <div className='absolute inset-0 bg-gradient-to-t from-purple-500/20 to-transparent rounded-2xl' />

                {/* Floating badges around the image */}
                {Array.from({ length: 3 }).map((_, i) => {
                  const angle = i * 120 * (Math.PI / 180)
                  const radius = 140
                  const x = Math.cos(angle) * radius
                  const y = Math.sin(angle) * radius

                  return (
                    <motion.div
                      key={i}
                      className='absolute rounded-full bg-white/80 backdrop-blur-md p-3 flex items-center justify-center shadow-md'
                      style={{
                        left: `calc(50% + ${x}px)`,
                        top: `calc(50% + ${y}px)`,
                        transformOrigin: 'center',
                      }}
                      animate={{
                        y: [0, -15, 0],
                        x: [0, 10, 0],
                        scale: [1, 1.05, 1],
                        rotate: [0, 5, 0],
                      }}
                      transition={{
                        duration: 4 + i,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: i * 1.5,
                      }}
                    >
                      {React.createElement(
                        featureIcons[(i + 2) % featureIcons.length],
                        {
                          className: 'w-6 h-6 text-pink-500',
                        }
                      )}
                    </motion.div>
                  )
                })}
              </div>

              {/* Floating elements */}
              <motion.div
                className='absolute -top-4 -right-4 w-20 h-20 rounded-full bg-gradient-to-br from-pink-400 to-purple-500 opacity-75'
                animate={{
                  y: [0, -15, 0],
                  opacity: [0.5, 0.8, 0.5],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              <motion.div
                className='absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 opacity-75'
                animate={{
                  y: [0, 15, 0],
                  opacity: [0.5, 0.8, 0.5],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 2,
                }}
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

// Background Bubble Component
const BackgroundBubble = ({ size, position, delay, color }) => {
  return (
    <motion.div
      className={`absolute rounded-full ${color} filter blur-3xl opacity-30`}
      style={{
        width: size,
        height: size,
        ...position,
      }}
      animate={{
        y: [0, -20, 0],
        x: [0, 10, 0],
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: 8,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  )
}

// Main Feature Section Component
const FeatureSection = () => {
  const features = [
    {
      title: 'AI Staff & Automations',
      subtitle: 'Enhanced Efficiency',
      description:
        'Revolutionize your med spa operations with AI-powered staff and automations that ensure consistent service delivery and seamless scaling of your business.',
      features: [
        '24/7 availability',
        'Consistent follow-ups',
        'Effortless scaling',
      ],
      image: '/Virtual.png',
      imageAlt: 'AI Staff Dashboard',
    },
    {
      title: 'Human Receptionist & Sales Team',
      subtitle: 'Personal Touch',
      description:
        'Combine the power of human connection with advanced technology to create meaningful relationships with your clients while driving business growth.',
      features: [
        'Build stronger client loyalty',
        'Boost sales naturally',
        'Solve problems instantly',
      ],
      image: '/humanRec.webp',
      imageAlt: 'Human Receptionist Interface',
    },
    {
      title: 'Reputation Management',
      subtitle: 'Build Trust & Credibility',
      description:
        "Take control of your med spa's online presence with our comprehensive reputation management system. Automatically collect and showcase reviews while improving customer satisfaction.",
      features: ['Review Collection', 'Rating Management', 'Client Feedback'],
      image:
        'https://images.pexels.com/photos/18069421/pexels-photo-18069421/free-photo-of-artificial-intelligence-ai-this-image-depicts-how-ai-could-assist-in-genomic-studies-and-its-applications-it-was-created-by-artist-nidia-dias-as-part-of-the.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      imageAlt: 'Reputation Dashboard',
    },
  ]

  // Create a ref for parallax background movement
  const sectionRef = useRef(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window

      // Calculate position as percentage of viewport
      const x = clientX / innerWidth - 0.5
      const y = clientY / innerHeight - 0.5

      setMousePosition({ x, y })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div
      ref={sectionRef}
      className='relative bg-gradient-to-b from-pink-50 via-white to-purple-50 overflow-hidden min-h-screen'
    >
      {/* Enhanced background with grid, gradient and particles */}
      <div className='absolute inset-0 bg-grid-gray-900/[0.02] -z-1' />

      {/* Background animated bubbles */}
      <BackgroundBubble
        size='40rem'
        position={{ top: '-10%', left: '-5%' }}
        delay={0}
        color='bg-pink-200'
      />
      <BackgroundBubble
        size='35rem'
        position={{ bottom: '-15%', right: '-10%' }}
        delay={2}
        color='bg-purple-200'
      />
      <BackgroundBubble
        size='25rem'
        position={{ top: '30%', right: '-5%' }}
        delay={4}
        color='bg-blue-200'
      />

      {/* Parallax background that moves with mouse */}
      <motion.div
        className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0wIDQwQzAgMTcuOTEgMTcuOTEgMCA0MCAwQzYyLjA5IDAgODAgMTcuOTEgODAgNDBDODAgNjIuMDkgNjIuMDkgODAgNDAgODBDMTcuOTEgODAgMCA2Mi4wOSAwIDQwWk04MCA0MEMxMDIuMDkgNDAgMTIwIDIyLjA5IDEyMCAwQzEyMCAxNy45MSAxMDIuMDkgNDAgODAgNDBaIiBmaWxsPSIjRkRFMUZGIi8+PC9zdmc+')] opacity-5"
        animate={{
          x: mousePosition.x * -20,
          y: mousePosition.y * -20,
        }}
        transition={{
          type: 'spring',
          damping: 50,
          stiffness: 100,
        }}
      />

      {/* Floating Particles */}
      <FloatingParticles />

      {/* Feature Cards */}
      {features.map((feature, index) => {
        const sectionRef = useRef(null)
        const { scrollYProgress } = useScroll({
          target: sectionRef,
          offset: ['start end', 'end start'],
        })

        return (
          <div ref={sectionRef} key={index}>
            <FeatureCard
              feature={feature}
              scrollYProgress={scrollYProgress}
              index={index}
            />
          </div>
        )
      })}
    </div>
  )
}

export default FeatureSection
