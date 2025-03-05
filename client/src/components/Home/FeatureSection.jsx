import { motion, useScroll, useTransform } from 'framer-motion'
import { Heart, Moon, SparkleIcon, Sparkles, Star } from 'lucide-react'
import React, { useRef } from 'react'

// Shimmer Effect Component - Reduced opacity
const ShimmerEffect = ({
  color = 'from-pink-200/10 via-purple-200/10 to-blue-200/10',
}) => {
  return (
    <motion.div
      className={`absolute inset-0 bg-gradient-to-r ${color} opacity-30`}
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

// Animated Feature Badge - Changed from rounded-full to rounded
const FeatureBadge = ({ icon: Icon, text }) => {
  return (
    <motion.span
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className='inline-flex items-center px-5 py-2.5 rounded bg-gradient-to-r from-pink-100 to-purple-100 text-pink-700 font-semibold text-sm mb-6 shadow-lg shadow-pink-100/50'
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
        {/* Minimal Decorative Elements - No circles */}
        <div className='absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none'>
          <ShimmerEffect
            color={
              isEven
                ? 'from-pink-200/5 via-purple-200/5 to-blue-200/5'
                : 'from-blue-200/5 via-purple-200/5 to-pink-200/5'
            }
          />
          <div className='absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-pink-100/10 to-transparent'></div>
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

                <h2 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight leading-tight bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-purple-600'>
                  {feature.title}
                </h2>
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
                      className='w-12 h-12 rounded-md bg-gradient-to-br from-pink-50 to-purple-50 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-pink-100/50 transition-all duration-300'
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

          {/* Image - Simplified with no overlays or floating elements */}
          <div className='w-full lg:w-1/2'>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className='relative max-w-xl mx-auto'
            >
              <div className='w-full h-[300px] sm:h-[400px] lg:h-[500px] relative mx-auto'>
                {/* Layered shadow effect */}
                <div className='absolute -inset-1 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 opacity-70 blur-md'></div>

                {/* Main background with subtle pattern */}
                <div className='absolute inset-0 bg-white bg-opacity-90'></div>

                {/* Inner container with elegant border */}
                <div className='absolute inset-3 border border-pink-200 bg-white shadow-inner flex items-center justify-center p-4'>
                  {/* Elegant subtle diagonal pattern background */}
                  <div className='absolute inset-0 opacity-5 bg-[linear-gradient(45deg,#f3f3f3_25%,transparent_25%,transparent_50%,#f3f3f3_50%,#f3f3f3_75%,transparent_75%,transparent)] bg-[length:16px_16px]'></div>

                  {/* Image container with subtle inner shadow */}
                  <div className='relative w-full h-full shadow-inner overflow-hidden'>
                    <img
                      src={feature.image}
                      alt={feature.imageAlt}
                      className='w-full h-full object-cover'
                    />

                    {/* Elegant gold-inspired decorative accents at corners */}
                    <div className='absolute top-0 left-0 w-16 h-16 pointer-events-none'>
                      <div className='absolute top-2 left-0 h-px w-8 bg-gradient-to-r from-transparent to-pink-400'></div>
                      <div className='absolute top-0 left-2 w-px h-8 bg-gradient-to-b from-transparent to-pink-400'></div>
                    </div>
                    <div className='absolute top-0 right-0 w-16 h-16 pointer-events-none'>
                      <div className='absolute top-2 right-0 h-px w-8 bg-gradient-to-l from-transparent to-purple-400'></div>
                      <div className='absolute top-0 right-2 w-px h-8 bg-gradient-to-b from-transparent to-purple-400'></div>
                    </div>
                    <div className='absolute bottom-0 left-0 w-16 h-16 pointer-events-none'>
                      <div className='absolute bottom-2 left-0 h-px w-8 bg-gradient-to-r from-transparent to-purple-400'></div>
                      <div className='absolute bottom-0 left-2 w-px h-8 bg-gradient-to-t from-transparent to-purple-400'></div>
                    </div>
                    <div className='absolute bottom-0 right-0 w-16 h-16 pointer-events-none'>
                      <div className='absolute bottom-2 right-0 h-px w-8 bg-gradient-to-l from-transparent to-pink-400'></div>
                      <div className='absolute bottom-0 right-2 w-px h-8 bg-gradient-to-t from-transparent to-pink-400'></div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

// Main Feature Section Component - No background circles or patterns
const FeatureSection = () => {
  const features = [
    {
      title: 'AI Staff & Automations',
      subtitle: 'Enhanced Efficiency',
      description:
        'Revolutionize your beauty practice operations with AI-powered staff and automations that ensure consistent service delivery and seamless scaling of your business.',
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
        "Take control of your beauty practice's online presence with our comprehensive reputation management system. Automatically collect and showcase reviews while improving customer satisfaction.",
      features: ['Review Collection', 'Rating Management', 'Client Feedback'],
      image:
        'https://images.pexels.com/photos/18069421/pexels-photo-18069421/free-photo-of-artificial-intelligence-ai-this-image-depicts-how-ai-could-assist-in-genomic-studies-and-its-applications-it-was-created-by-artist-nidia-dias-as-part-of-the.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      imageAlt: 'Reputation Dashboard',
    },
  ]

  return (
    <div className='relative bg-gradient-to-b from-pink-50 via-white to-purple-50 overflow-hidden min-h-screen'>
      {/* Simple grid background - No circles or patterns */}
      <div className='absolute inset-0 bg-grid-gray-900/[0.02] -z-1'></div>

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
