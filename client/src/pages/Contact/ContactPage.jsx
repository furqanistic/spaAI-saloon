import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { motion } from 'framer-motion'
import { Mail, MapPin, MessageSquare, Phone, Send } from 'lucide-react'
import React from 'react'
import Navbar from '../../components/Layout/Navbar'

const ContactPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.6,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
      },
    },
  }

  return (
    <>
      <Navbar />
      <div className='min-h-screen bg-white'>
        {/* Hero Section */}
        <div className='relative bg-[#2C3988] text-white'>
          <div className='h-[300px] sm:h-[400px] md:h-[500px] flex items-center justify-center flex-col relative z-10 px-4'>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 text-center'
            >
              Let's Create Something Beautiful
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className='text-lg sm:text-xl md:text-2xl text-blue-100 max-w-3xl text-center'
            >
              Transform your beauty practice with RadiantAI's cutting-edge AI
              solutions
            </motion.p>
          </div>

          {/* Curved bottom */}
          <div
            className='absolute bottom-0 left-0 right-0 h-16 sm:h-20 md:h-24 bg-white'
            style={{
              borderTopLeftRadius: '50% 100%',
              borderTopRightRadius: '50% 100%',
            }}
          ></div>
        </div>

        {/* Cards Section */}
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 sm:-mt-24 md:-mt-32 relative z-20'>
          <motion.div
            variants={containerVariants}
            initial='hidden'
            animate='visible'
            className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6'
          >
            {[
              { icon: Phone, label: 'Call Us', info: '+1 (555) 123-4567' },
              { icon: Mail, label: 'Email Us', info: 'contact@radiantai.com' },
              { icon: MapPin, label: 'Visit Us', info: '123 Turkey Drive' },
              {
                icon: MessageSquare,
                label: 'Live Chat',
                info: 'Available 24/7',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  y: -5,
                  boxShadow: '0 10px 30px -10px rgba(0,0,0,0.1)',
                }}
                className='bg-white rounded-2xl p-4 sm:p-6 shadow-lg transition-all duration-300 flex flex-col items-center text-center'
              >
                <div className='bg-blue-50 p-3 sm:p-4 rounded-full mb-3 sm:mb-4'>
                  <item.icon className='w-5 h-5 sm:w-6 sm:h-6 text-blue-600' />
                </div>
                <h3 className='text-lg sm:text-xl font-semibold text-gray-900 mb-1 sm:mb-2'>
                  {item.label}
                </h3>
                <p className='text-sm sm:text-base text-gray-600'>
                  {item.info}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form Section */}
          <div className='mt-12 sm:mt-16 md:mt-24 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start'>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className='relative order-2 lg:order-1'
            >
              <Card className='p-4 sm:p-6 md:p-8 bg-white shadow-xl rounded-2xl border-0'>
                <h2 className='text-2xl sm:text-3xl font-bold mb-6 md:mb-8 text-gray-900'>
                  Send Us a Message
                </h2>
                <form className='space-y-4 sm:space-y-6'>
                  <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6'>
                    <div className='space-y-2'>
                      <label className='text-sm font-medium text-gray-700'>
                        First Name
                      </label>
                      <Input
                        className='rounded-xl border-gray-200 focus:border-blue-500'
                        placeholder='John'
                      />
                    </div>
                    <div className='space-y-2'>
                      <label className='text-sm font-medium text-gray-700'>
                        Last Name
                      </label>
                      <Input
                        className='rounded-xl border-gray-200 focus:border-blue-500'
                        placeholder='Doe'
                      />
                    </div>
                  </div>

                  <div className='space-y-2'>
                    <label className='text-sm font-medium text-gray-700'>
                      Email
                    </label>
                    <Input
                      type='email'
                      className='rounded-xl border-gray-200 focus:border-blue-500'
                      placeholder='john@example.com'
                    />
                  </div>

                  <div className='space-y-2'>
                    <label className='text-sm font-medium text-gray-700'>
                      Message
                    </label>
                    <Textarea
                      className='rounded-xl border-gray-200 focus:border-blue-500 min-h-[120px]'
                      placeholder='Tell us about your needs...'
                    />
                  </div>

                  <Button className='w-full bg-blue-600 hover:bg-blue-700 text-white py-4 sm:py-6 rounded-xl text-base sm:text-lg font-semibold'>
                    <span className='mr-2'>Send Message</span>
                    <Send className='w-4 h-4 sm:w-5 sm:h-5' />
                  </Button>
                </form>
              </Card>
            </motion.div>

            {/* Illustration Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className='order-1 lg:order-2'
            >
              <div className='relative w-full h-[300px] sm:h-[400px] md:h-[500px]'>
                <img
                  src='https://images.pexels.com/photos/3651577/pexels-photo-3651577.jpeg?cs=srgb&dl=pexels-kovyrina-3651577.jpg&fm=jpg'
                  alt='Contact illustration'
                  className='rounded-2xl shadow-lg w-full h-full object-cover'
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactPage
