import { motion } from 'framer-motion'
import { Building2, Target, Users } from 'lucide-react'
import React from 'react'

const WhoWeAre = () => {
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
    hover: { y: -8, transition: { duration: 0.3, ease: 'easeOut' } },
  }

  const features = [
    {
      icon: <Building2 className='w-6 h-6' aria-hidden='true' />,
      title: 'Med Spa Excellence',
      description: 'Leading med spa marketing agency in Alberta',
    },
    {
      icon: <Target className='w-6 h-6' aria-hidden='true' />,
      title: 'Strategic Growth',
      description: 'Generating high-value patient acquisitions',
    },
    {
      icon: <Users className='w-6 h-6' aria-hidden='true' />,
      title: 'Client-Focused',
      description: 'Empowering beauty and medical professionals',
    },
  ]

  return (
    <section
      className='relative py-20 overflow-hidden'
      aria-labelledby='who-we-are-heading'
    >
      {/* Animated Background Elements */}
      <motion.div
        className='absolute inset-0 bg-gradient-to-br from-white via-blue-50/50 to-white'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      <div className='relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          variants={boxVariants}
          initial='initial'
          animate='animate'
          className='relative bg-white/50 backdrop-blur-lg border border-[#38b5ff]/20 rounded-2xl p-8 sm:p-12 shadow-xl'
        >
          {/* Decorative Elements */}
          <div className='absolute -top-4 -left-4 w-8 h-8 border-2 border-[#38b5ff] rounded-lg bg-white' />
          <div className='absolute -bottom-4 -right-4 w-8 h-8 border-2 border-[#38b5ff] rounded-lg bg-white' />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className='text-center mb-12 sm:mb-16'
          >
            <h2
              id='who-we-are-heading'
              className='text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-[#38b5ff] bg-clip-text text-transparent'
            >
              Who Are We?
            </h2>
            <p className='text-gray-600 max-w-2xl mx-auto text-sm sm:text-base'>
              RadiantMD Consulting empowers beauty professionals through
              strategic marketing and cutting-edge solutions.
            </p>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8'>
            {features.map((feature, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={cardVariants}
                initial='initial'
                animate='animate'
                whileHover='hover'
                className='group relative'
              >
                <div
                  className='relative h-full p-6 sm:p-8 bg-white rounded-xl border border-[#38b5ff]/10 shadow-lg shadow-blue-100/20 
                             transition-all duration-300 hover:shadow-xl hover:shadow-blue-200/20'
                >
                  <div
                    className='absolute inset-0 bg-gradient-to-br from-[#38b5ff]/5 to-transparent opacity-0 
                               group-hover:opacity-100 rounded-xl transition-opacity duration-300'
                  />
                  <div className='relative'>
                    <div
                      className='mb-4 sm:mb-6 p-3 rounded-xl bg-[#38b5ff]/10 w-fit 
                                  group-hover:bg-[#38b5ff]/20 transition-colors duration-300'
                    >
                      <div className='text-[#38b5ff]'>{feature.icon}</div>
                    </div>
                    <h3 className='text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-gray-900'>
                      {feature.title}
                    </h3>
                    <p className='text-sm sm:text-base text-gray-600'>
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Floating Animation Elements */}
      <motion.div
        className='absolute top-20 right-20 w-64 h-64 rounded-full bg-[#38b5ff]/5 blur-3xl'
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className='absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-[#38b5ff]/5 blur-3xl'
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
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
