import { Card, CardContent } from '@/components/ui/card'
import { motion } from 'framer-motion'
import { Sparkles, Users } from 'lucide-react'
import React from 'react'

const Mission = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  }

  // Background circle animation variants
  const circleVariants = {
    initial: { scale: 0, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: 'easeOut',
      },
    },
  }

  return (
    <div className='relative min-h-screen overflow-hidden'>
      {/* Animated background elements */}
      <div className='absolute inset-0 overflow-hidden'>
        <motion.div
          className='absolute top-20 left-10 w-96 h-96 rounded-full bg-gradient-to-r from-[#38b5ff]/10 to-blue-300/10 blur-3xl'
          variants={circleVariants}
          initial='initial'
          animate='animate'
        />
        <motion.div
          className='absolute bottom-20 right-10 w-96 h-96 rounded-full bg-gradient-to-l from-[#38b5ff]/10 to-blue-300/10 blur-3xl'
          variants={circleVariants}
          initial='initial'
          animate='animate'
          transition={{ delay: 0.3 }}
        />
        <motion.div
          className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full'
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 2 }}
        >
          <div className='w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-[#38b5ff]/5 to-transparent' />
        </motion.div>
      </div>

      {/* Hero Section */}
      <motion.section
        className='container mx-auto px-4 pt-20 pb-16 text-center relative z-10'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className='inline-block mb-6'
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, type: 'spring' }}
        >
          <span className='px-4 py-2 bg-[#38b5ff]/10 rounded-full text-[#38b5ff] font-semibold'>
            Our Mission
          </span>
        </motion.div>
        <motion.h1
          className='text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#38b5ff] to-blue-600'
          {...fadeIn}
        >
          Transforming Med Spa Success
          <br />
          Starts With Us
        </motion.h1>
        <motion.p
          className='text-lg md:text-xl text-gray-600 max-w-3xl mx-auto'
          {...fadeIn}
          transition={{ delay: 0.2 }}
        >
          We've built an intelligent platform that seamlessly connects med spas
          with their clients, combining powerful automation with a human touch.
        </motion.p>
      </motion.section>

      {/* Mission Section */}
      <section className='container mx-auto px-4 py-16 md:py-24 relative z-10'>
        <div className='grid md:grid-cols-2 gap-12 items-center'>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='relative'
          >
            <motion.div
              className='absolute -top-6 -left-6 w-24 h-24 bg-[#38b5ff]/10 rounded-full'
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            />
            <h2 className='text-3xl md:text-4xl font-bold mb-6'>
              Empowering Excellence
            </h2>
            <p className='text-lg text-gray-600 mb-6'>
              RadiantAI's mission is to empower med spas and beauty clinics to
              deliver exceptional client experiences through intelligent
              automation and personalized service.
            </p>
            <p className='text-lg text-gray-600 mb-8'>
              We believe in combining cutting-edge AI technology with the
              irreplaceable human touch, creating a perfect balance that helps
              your business thrive.
            </p>
            <div className='space-y-4'>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Card className='border-l-4 border-[#38b5ff] bg-white/80 backdrop-blur-sm'>
                  <CardContent className='p-4'>
                    <div className='flex items-center space-x-3'>
                      <Sparkles className='h-6 w-6 text-[#38b5ff]' />
                      <p className='font-medium'>Innovative AI Solutions</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Card className='border-l-4 border-[#38b5ff] bg-white/80 backdrop-blur-sm'>
                  <CardContent className='p-4'>
                    <div className='flex items-center space-x-3'>
                      <Users className='h-6 w-6 text-[#38b5ff]' />
                      <p className='font-medium'>Human-Centered Approach</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className='relative'
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className='absolute -top-8 -right-8 w-32 h-32 bg-[#38b5ff]/10 rounded-full'
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            />
            <div className='relative rounded-2xl overflow-hidden'>
              <img
                src='https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                alt='Team collaboration'
                className='w-full h-full object-cover'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent' />
            </div>
            <motion.div
              className='absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg'
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.9, type: 'spring' }}
            >
              <div className='flex items-center space-x-2'>
                <Sparkles className='h-8 w-8 text-[#38b5ff]' />
                <div>
                  <p className='font-bold text-2xl text-[#38b5ff]'>500+</p>
                  <p className='text-sm text-gray-600'>Happy Clients</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Mission
