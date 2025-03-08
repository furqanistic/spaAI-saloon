import { motion } from 'framer-motion'
import {
  Calendar,
  CheckCircle,
  Clock,
  Heart,
  Loader,
  Sparkles,
  Star,
} from 'lucide-react'
import React, { useEffect, useState } from 'react'

// Iframe with Loader Component
const IframeWithLoader = ({ src, title }) => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2500) // Fallback in case onLoad doesn't trigger

    return () => clearTimeout(timer)
  }, [])

  const handleIframeLoad = () => {
    setLoading(false)
  }

  return (
    <div className='relative h-full w-full'>
      {loading && (
        <div className='absolute inset-0 flex items-center justify-center bg-white'>
          <div className='flex flex-col items-center justify-center'>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
              className='text-pink-500 mb-3'
            >
              <Loader size={30} />
            </motion.div>
            <p className='text-gray-600 text-sm'>Loading booking calendar...</p>
          </div>
        </div>
      )}

      <iframe
        src={src}
        className='w-full h-full'
        style={{
          height: '100%',
          opacity: loading ? 0 : 1,
          transition: 'opacity 0.3s ease',
        }}
        frameBorder='0'
        title={title}
        onLoad={handleIframeLoad}
        allowFullScreen
      />
    </div>
  )
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

// Background decorations component
const BackgroundDecorations = () => (
  <div className='absolute inset-0 overflow-hidden pointer-events-none'>
    {/* Top blob */}
    <motion.div
      className='absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-pink-200/30 to-purple-200/30 blur-3xl'
      animate={{
        scale: [1, 1.1, 1],
        opacity: [0.2, 0.3, 0.2],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        repeatType: 'reverse',
      }}
    />

    {/* Bottom blob */}
    <motion.div
      className='absolute bottom-0 left-0 w-[700px] h-[700px] rounded-full bg-gradient-to-tr from-cyan-200/30 to-blue-200/30 blur-3xl'
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.2, 0.4, 0.2],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        repeatType: 'reverse',
        delay: 1,
      }}
    />

    {/* Floating elements */}
    <motion.div
      className='absolute top-24 left-10 opacity-50'
      animate={{ y: [-5, 5, -5], rotate: [0, 5, 0] }}
      transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
    >
      <Heart size={20} className='text-pink-300' />
    </motion.div>

    <motion.div
      className='absolute bottom-32 right-10 opacity-50'
      animate={{ y: [5, -5, 5], rotate: [0, -5, 0] }}
      transition={{
        repeat: Infinity,
        duration: 4,
        ease: 'easeInOut',
        delay: 1,
      }}
    >
      <Star size={20} className='text-purple-300' />
    </motion.div>

    <motion.div
      className='absolute top-1/2 right-16 opacity-50'
      animate={{ y: [-8, 8, -8], rotate: [0, 10, 0] }}
      transition={{
        repeat: Infinity,
        duration: 5,
        ease: 'easeInOut',
        delay: 0.5,
      }}
    >
      <Sparkles size={16} className='text-sky-300' />
    </motion.div>
  </div>
)

// Feature item component with enhanced styling
const FeatureItem = ({ icon, title, description }) => (
  <motion.div
    className='flex items-start gap-6 group'
    variants={itemVariants}
    whileHover={{ x: 5 }}
    transition={{ type: 'spring', stiffness: 300 }}
  >
    <div
      className='flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-pink-100 to-purple-100 
      group-hover:from-pink-200 group-hover:to-purple-200
      flex items-center justify-center transition-all duration-300 shadow-sm'
    >
      <div className='text-pink-600'>{icon}</div>
    </div>
    <div>
      <h3 className='text-xl font-semibold text-gray-800 mb-2'>{title}</h3>
      <p className='text-gray-600 leading-relaxed'>{description}</p>
    </div>
  </motion.div>
)

const DemoRequestSection = () => {
  const expectations = [
    {
      icon: <Calendar className='w-5 h-5' />,
      title: 'See RadiantAI in Action',
      description:
        "Get a personalized demo showing how our AI-driven system optimizes your spa's bookings, marketing, and sales.",
    },
    {
      icon: <Clock className='w-5 h-5' />,
      title: 'Try It Hands-On',
      description:
        'Test the platform in a dedicated trial environment built for your business.',
    },
    {
      icon: <CheckCircle className='w-5 h-5' />,
      title: 'Calculate Your ROI',
      description:
        'See exactly how much revenue you can generate with our all-in-one AI-powered system.',
    },
  ]

  return (
    <section className='relative min-h-screen py-20 px-4 md:px-8 bg-gradient-to-b from-white to-gray-50 overflow-hidden'>
      <BackgroundDecorations />

      <div className='relative max-w-7xl mx-auto z-10'>
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={containerVariants}
          className='space-y-16'
        >
          {/* Header Section */}
          <motion.div
            variants={itemVariants}
            className='text-center max-w-3xl mx-auto'
          >
            <motion.div
              className='inline-flex items-center px-4 py-2 rounded-full mb-8'
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 300 }}
              viewport={{ once: true }}
              style={{
                background: 'linear-gradient(to right, #fce7f3, #ede9fe)',
                boxShadow: '0 2px 10px rgba(236, 72, 153, 0.1)',
              }}
            >
              <span className='text-pink-600 font-medium'>
                Built For Success. Ready For Scale.
              </span>
            </motion.div>

            <h1 className='text-4xl md:text-6xl font-bold mb-6 leading-tight'>
              Transform Your Beauty Practice
              <span className='bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600'>
                {' '}
                with AI
              </span>
            </h1>

            <p className='text-lg md:text-xl text-gray-600'>
              A new era of Beauty Practice Success has arrived. Traditional
              marketing and booking systems haven't kept up. It's time for
              something smarter.
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className='grid lg:grid-cols-2 gap-12 items-start'>
            {/* Left Column - Benefits */}
            <motion.div variants={itemVariants} className='flex'>
              <div
                className='bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100'
                style={{
                  height: '600px',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <h2 className='text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent mb-8'>
                  Let's Talk Success
                </h2>

                <p className='text-lg text-gray-600 mb-8'>
                  Whether you're looking to increase revenue, automate
                  operations, or fill your calendar, our Beauty Practice growth
                  experts are ready to help.
                </p>

                <div className='space-y-8 flex-grow'>
                  {expectations.map((item, index) => (
                    <FeatureItem
                      key={index}
                      icon={item.icon}
                      title={item.title}
                      description={item.description}
                    />
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Column - Iframe with loader */}
            <motion.div variants={itemVariants} className='flex'>
              <div
                className='bg-white rounded-2xl shadow-xl p-0 border border-gray-100 overflow-hidden w-full'
                style={{ height: '600px' }}
              >
                <IframeWithLoader
                  src='https://app.radiantmdconsulting.com/widget/booking/ez3275vnjyOjJs6c3k3Z'
                  title='RadiantMD Booking Widget'
                />
              </div>
            </motion.div>
          </div>

          {/* Testimonial area */}
          <motion.div
            variants={itemVariants}
            className='text-center max-w-2xl mx-auto pt-8'
          >
            <div className='inline-flex mb-4'>
              {[...Array(5)].map((_, i) => (
                <Star key={i} className='w-5 h-5 text-pink-400 fill-pink-400' />
              ))}
            </div>
            <p className='text-lg text-gray-700 italic'>
              "The demo absolutely blew us away! We signed up immediately and
              haven't looked back. Our bookings are up 37% in just two months."
            </p>
            <p className='mt-3 font-medium text-gray-900'>
              – Jessica Williams, Pure Glow Medical Spa
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default DemoRequestSection
