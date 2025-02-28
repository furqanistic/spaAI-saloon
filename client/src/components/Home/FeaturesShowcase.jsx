import { motion } from 'framer-motion'
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  Calendar,
  Clock,
  Heart,
  MessageSquare,
  Sparkles,
  Star,
  Users,
  Zap,
} from 'lucide-react'
import React, { useEffect, useState } from 'react'

const FeaturesShowcase = () => {
  const features = [
    {
      id: 1,
      title: 'Client Communication',
      description:
        'Real-time messaging with smart templates and automated follow-ups',
      image: '/feature/fea1.png',
      icon: <MessageSquare className='h-5 w-5' />,
      color: 'from-pink-400 to-pink-600',
      specialRender: false,
    },
    {
      id: 2,
      title: 'Automated Reminders',
      description:
        'Reduce no-shows with smart scheduling and personalized notifications',
      image: '/feature/fea2.png',
      icon: <Clock className='h-5 w-5' />,
      color: 'from-purple-400 to-purple-600',
      specialRender: false,
    },
    {
      id: 3,
      title: 'Content Calendar',
      description:
        'Plan and schedule your marketing with our AI-powered calendar',
      image: '/feature/fea3.png',
      icon: <Calendar className='h-5 w-5' />,
      color: 'from-blue-400 to-blue-600',
      specialRender: false,
    },
    {
      id: 4,
      title: 'Database Integration',
      description: 'Connect all your tools in one powerful central hub',
      image: '/feature/fea4.png',
      icon: <BarChart3 className='h-5 w-5' />,
      color: 'from-indigo-400 to-indigo-600',
      specialRender: false,
    },
    {
      id: 5,
      title: 'Fast Five Engagement',
      description:
        'Convert leads into appointments in record time with guided flows',
      image: '/feature/fea5.png',
      icon: <Zap className='h-5 w-5' />,
      color: 'from-teal-400 to-teal-600',
      specialRender: false,
    },
    {
      id: 6,
      title: 'Patient Revival AI',
      description:
        'Re-engage dormant clients with intelligent, personalized campaigns',
      image: '/feature/fea6.png',
      icon: <Users className='h-5 w-5' />,
      color: 'from-amber-400 to-amber-600',
      specialRender: false, // This feature has a special render function
    },
    {
      id: 7,
      title: 'Reputation Management',
      description:
        'Build and manage your online presence with review automation',
      image: '/feature/fea7.png',
      icon: <Star className='h-5 w-5' />,
      color: 'from-rose-400 to-rose-600',
      specialRender: false,
    },
    {
      id: 8,
      title: 'Smart Nurture',
      description: 'Guide prospects through personalized conversion journeys',
      image: '/feature/fea8.png',
      icon: <Sparkles className='h-5 w-5' />,
      color: 'from-violet-400 to-violet-600',
      specialRender: false,
    },
  ]

  const [activeFeature, setActiveFeature] = useState(0)
  const [direction, setDirection] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  // Autoplay functionality
  useEffect(() => {
    if (!autoplay) return

    const timer = setTimeout(() => {
      setDirection(1)
      setActiveFeature((prev) => (prev + 1) % features.length)
    }, 5000)

    return () => clearTimeout(timer)
  }, [activeFeature, autoplay, features.length])

  const handleFeatureChange = (index) => {
    setDirection(index > activeFeature ? 1 : -1)
    setActiveFeature(index)
    setAutoplay(false)
  }

  const nextFeature = () => {
    setDirection(1)
    setActiveFeature((prev) => (prev + 1) % features.length)
    setAutoplay(false)
  }

  const prevFeature = () => {
    setDirection(-1)
    setActiveFeature((prev) => (prev - 1 + features.length) % features.length)
    setAutoplay(false)
  }

  // Animation variants
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 },
        scale: { duration: 0.4 },
      },
    },
    exit: (direction) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
      scale: 0.95,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 },
        scale: { duration: 0.4 },
      },
    }),
  }

  // Render Standard Feature

  const renderStandardFeature = (feature) => {
    return (
      <div className='relative w-full h-full flex items-center justify-center p-6'>
        {/* Enhanced paper-like background with gradient matching feature color */}
        <div
          className={`absolute inset-8 bg-gradient-to-br ${feature.color} opacity-10 rounded-xl shadow-inner`}
        ></div>

        {/* Decorative elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className='absolute left-0 top-1/4 w-3 h-20 rounded-r-lg bg-gradient-to-b from-gray-100 to-gray-200'
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className='absolute left-0 top-2/4 w-3 h-20 rounded-r-lg bg-gradient-to-b from-gray-100 to-gray-200'
        ></motion.div>

        {/* Featured image with improved presentation - GREATLY ENLARGED */}
        <div className='relative z-10 bg-white rounded-2xl shadow-lg p-5 border border-gray-100 transform transition-all duration-500 hover:scale-102 overflow-hidden flex items-center justify-center w-5/6 h-5/6'>
          {/* Gradient background that matches feature color */}
          <div
            className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-10`}
          ></div>

          {/* Decorative corner accents */}
          <div
            className={`absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-tl ${feature.color} opacity-30 rounded-tl-full`}
          ></div>
          <div
            className={`absolute -top-10 -left-10 w-32 h-32 bg-gradient-to-br ${feature.color} opacity-20 rounded-br-full`}
          ></div>

          <img
            src={feature.image}
            alt={feature.title}
            className='relative z-10 w-full h-full object-contain rounded-md'
          />
        </div>

        {/* Feature label with improved design - moved slightly up to accommodate larger image */}
        <div className='absolute bottom-10 backdrop-blur-md bg-white bg-opacity-90 border-2 border-white rounded-2xl shadow-lg px-6 py-3 flex items-center space-x-3 max-w-sm z-50'>
          <div
            className={`p-3 rounded-full bg-gradient-to-r ${feature.color} text-white shadow-md`}
          >
            {feature.icon}
          </div>
          <div className='flex-1 min-w-0'>
            <h3 className='font-bold text-lg text-gray-800 truncate'>
              {feature.title}
            </h3>
            <p className='text-sm text-gray-600 mt-1 line-clamp-2'>
              {feature.description}
            </p>
          </div>
        </div>
      </div>
    )
  }

  // Updated Database Integration Feature with larger visuals

  const renderDatabaseIntegration = () => {
    return (
      <div className='relative w-full h-full flex items-center justify-center p-6'>
        {/* Paper-like background with lighter color - expanded */}
        <div className='absolute inset-8 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl shadow-inner'></div>

        {/* Central hub graphic - increased size */}
        <div className='relative z-20 w-5/6 h-5/6 flex items-center justify-center'>
          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-28 h-28 bg-indigo-900 rounded-xl shadow-lg flex items-center justify-center z-30'>
            <span className='text-white font-bold text-sm text-center'>
              radiantAI
            </span>
          </div>

          {/* Connection lines - thicker */}
          <div className='absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-300 z-10 border-dashed border-gray-300'></div>
          <div className='absolute top-1/2 left-0 transform -translate-y-1/2 h-1 w-full bg-gray-300 z-10 border-dashed border-gray-300'></div>

          {/* Connection boxes - larger and more prominent */}
          <div className='absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 bg-white px-5 py-3 rounded-full shadow-md z-20 flex items-center gap-2'>
            <span className='text-base font-medium'>Scheduling</span>
            <div className='flex gap-1'>
              <span className='w-6 h-6 rounded-full bg-orange-500'></span>
              <span className='w-6 h-6 rounded-full bg-blue-500'></span>
            </div>
          </div>

          <div className='absolute top-1/4 right-1/4 transform translate-x-1/2 -translate-y-1/2 bg-white px-5 py-3 rounded-full shadow-md z-20 flex items-center gap-2'>
            <span className='text-base font-medium'>Payments</span>
            <div className='flex gap-1'>
              <span className='w-6 h-6 rounded-full bg-blue-500'></span>
              <span className='w-6 h-6 rounded-full bg-gray-800'></span>
            </div>
          </div>

          <div className='absolute bottom-1/4 left-1/4 transform -translate-x-1/2 translate-y-1/2 bg-white px-5 py-3 rounded-full shadow-md z-20 flex items-center gap-2'>
            <span className='text-base font-medium'>Communication</span>
            <div className='flex gap-1'>
              <span className='w-6 h-6 rounded-full bg-green-500'></span>
              <span className='w-6 h-6 rounded-full bg-red-500'></span>
            </div>
          </div>

          <div className='absolute bottom-1/4 right-1/4 transform translate-x-1/2 translate-y-1/2 bg-white px-5 py-3 rounded-full shadow-md z-20 flex items-center gap-2'>
            <span className='text-base font-medium'>Business Growth</span>
            <div className='flex gap-1'>
              <span className='w-6 h-6 rounded-full bg-blue-500'></span>
              <span className='w-6 h-6 rounded-full bg-orange-500'></span>
            </div>
          </div>

          <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white px-5 py-3 rounded-full shadow-md z-20 flex items-center gap-2'>
            <span className='text-base font-medium'>Platforms</span>
            <div className='flex gap-1'>
              <span className='w-6 h-6 rounded-full bg-black'></span>
              <span className='w-6 h-6 rounded-full bg-pink-500'></span>
              <span className='w-6 h-6 rounded-full bg-blue-500'></span>
            </div>
          </div>
        </div>

        {/* Feature label */}
        <div className='absolute bottom-10 backdrop-blur-md bg-white bg-opacity-90 border-2 border-white rounded-2xl shadow-lg px-6 py-3 flex items-center space-x-3 max-w-sm z-50'>
          <div
            className={`p-3 rounded-full bg-gradient-to-r from-indigo-400 to-indigo-600 text-white shadow-md`}
          >
            <BarChart3 className='h-5 w-5' />
          </div>
          <div className='flex-1 min-w-0'>
            <h3 className='font-bold text-lg text-gray-800 truncate'>
              Database Integration
            </h3>
            <p className='text-sm text-gray-600 mt-1 line-clamp-2'>
              Connect all your tools in one powerful central hub
            </p>
          </div>
        </div>
      </div>
    )
  }

  // Render Patient Revival AI Feature (ID: 6)

  const renderPatientRevivalAI = () => {
    return (
      <div className='relative w-full h-full flex items-center justify-center p-6 overflow-visible'>
        {/* Enhanced paper-like background with amber gradient */}
        <div className='absolute inset-8 bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl shadow-inner z-10'></div>

        {/* Single image container - GREATLY ENLARGED */}
        <div className='relative z-30 flex items-center justify-center w-5/6 h-5/6'>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className='bg-white rounded-3xl p-5 shadow-xl transform transition-all duration-300 hover:scale-102 z-30 w-full h-full'
          >
            {/* Gradient background within the container */}
            <div className='absolute inset-0 bg-gradient-to-br from-amber-400 to-amber-600 opacity-10 rounded-3xl'></div>

            <div className='overflow-hidden rounded-2xl border border-gray-200 relative w-full h-full flex items-center justify-center'>
              {/* Decorative elements */}
              <div className='absolute -bottom-12 -right-12 w-48 h-48 bg-gradient-to-tl from-amber-400 to-amber-600 opacity-20 rounded-tl-full z-0'></div>
              <div className='absolute -top-12 -left-12 w-36 h-36 bg-gradient-to-br from-amber-400 to-amber-600 opacity-20 rounded-br-full z-0'></div>

              <img
                src='/feature/fea6.png'
                alt='Patient Revival AI'
                className='w-full h-full object-contain z-10'
              />
            </div>
            {/* Decorative elements */}
            <div className='absolute -bottom-3 -right-3 w-8 h-8 bg-amber-200 rounded-full z-20'></div>
            <div className='absolute -top-3 -left-3 w-6 h-6 bg-amber-300 rounded-full z-20'></div>
          </motion.div>
        </div>

        {/* Feature label - positioned with highest z-index */}
        <div className='absolute bottom-10 backdrop-blur-md bg-white bg-opacity-90 border-2 border-white rounded-2xl shadow-lg px-6 py-3 flex items-center space-x-3 max-w-sm z-50'>
          <div className='p-3 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 text-white shadow-md'>
            <Users className='h-5 w-5' />
          </div>
          <div className='flex-1 min-w-0'>
            <h3 className='font-bold text-lg text-gray-800 truncate'>
              Patient Revival AI
            </h3>
            <p className='text-sm text-gray-600 mt-1 line-clamp-2'>
              Re-engage dormant clients with intelligent, personalized campaigns
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className='w-full py-16 overflow-hidden relative'>
      {/* Feminine, elegant background elements */}
      <div className='absolute inset-0 bg-gradient-to-br from-pink-50 to-purple-50 opacity-90'></div>

      {/* Decorative background elements */}
      <div className='absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none'>
        {/* Floating decorative elements */}
        <div className='absolute top-10 right-10 w-64 h-64 rounded-full bg-gradient-to-r from-pink-200 to-pink-300 opacity-20 blur-2xl'></div>
        <div className='absolute bottom-20 left-10 w-40 h-40 rounded-full bg-gradient-to-r from-purple-200 to-purple-300 opacity-30 blur-xl'></div>
        <div className='absolute top-40 left-20 w-20 h-20 rounded-full bg-gradient-to-r from-rose-300 to-pink-200 opacity-40 blur-lg'></div>

        {/* Elegant curve patterns */}
        <svg
          className='absolute -top-10 -right-10 text-pink-100 w-96 h-96 opacity-30'
          viewBox='0 0 200 200'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fill='currentColor'
            d='M49.9,-59.6C62.8,-49.8,70.2,-32.5,74,-14.3C77.8,3.9,78.2,23,69.4,36.9C60.6,50.8,42.8,59.4,24.8,65.4C6.8,71.3,-11.5,74.5,-27.2,69.8C-42.9,65.1,-56,52.4,-63.5,37.1C-71,21.7,-72.9,3.6,-68.9,-12.6C-64.9,-28.9,-55,-43.2,-42.2,-53.1C-29.5,-63,-14.7,-68.4,1.7,-70.6C18.2,-72.7,36.9,-69.5,49.9,-59.6Z'
            transform='translate(100 100)'
          />
        </svg>

        <svg
          className='absolute bottom-0 left-0 text-purple-100 w-96 h-96 opacity-30'
          viewBox='0 0 200 200'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fill='currentColor'
            d='M47.5,-51.2C59.2,-41.7,65.1,-24.4,66.7,-7.4C68.3,9.7,65.5,26.6,56.1,38.7C46.7,50.9,30.7,58.3,14.3,62.1C-2.1,65.9,-18.9,66,-32.6,59.1C-46.3,52.1,-56.9,38.1,-62,22.4C-67,6.7,-66.4,-10.6,-60,-25.2C-53.5,-39.7,-41.3,-51.5,-27.7,-60C-14.1,-68.4,0.7,-73.4,14.6,-69.9C28.5,-66.3,35.8,-60.7,47.5,-51.2Z'
            transform='translate(100 100)'
          />
        </svg>
      </div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        {/* Heading Section with Gradient Text */}
        <div className='text-center mb-12'>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='text-4xl md:text-5xl font-bold mb-4'
          >
            <span className='bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600'>
              Med Spa Reimagined
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='text-lg text-gray-600 max-w-3xl mx-auto'
          >
            Powerful features designed to elevate your patient experience and
            streamline your operations
          </motion.p>
        </div>

        {/* Main Feature Showcase */}
        <div className='grid grid-cols-1 lg:grid-cols-6 gap-8 mb-16 items-center min-h-[740px]'>
          {/* Feature Tabs - Left Side on Desktop (reduced width) */}
          <div className='lg:col-span-2 flex flex-col space-y-3 order-2 lg:order-1 self-center py-2'>
            {features.map((feature, index) => (
              <motion.button
                key={feature.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                onClick={() => handleFeatureChange(index)}
                className={`flex items-center p-3 rounded-xl text-left transition-all ${
                  activeFeature === index
                    ? `bg-gradient-to-r ${feature.color} text-white shadow-lg`
                    : 'bg-white hover:bg-gray-50 text-gray-700 shadow hover:shadow-md'
                }`}
              >
                <div
                  className={`p-2 rounded-full ${
                    activeFeature === index
                      ? 'bg-white bg-opacity-20'
                      : `bg-gradient-to-r ${feature.color} text-white`
                  }`}
                >
                  {feature.icon}
                </div>
                <div className='ml-4'>
                  <h3 className='font-semibold'>{feature.title}</h3>
                  <p
                    className={`text-sm ${
                      activeFeature === index
                        ? 'text-white text-opacity-90'
                        : 'text-gray-500'
                    }`}
                  >
                    {feature.description}
                  </p>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Feature Image - Right Side on Desktop (expanded width and height) */}
          <div className='lg:col-span-4 relative h-[600px] bg-white rounded-3xl overflow-hidden shadow-xl order-1 lg:order-2 border border-gray-100 self-center flex items-center justify-center'>
            {/* Fancy decorative elements for right section */}
            <div className='absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-pink-200 to-pink-50 rounded-bl-full z-0'></div>
            <div className='absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-purple-200 to-purple-50 rounded-tr-full z-0'></div>

            {/* Scattered beauty elements */}
            <div className='absolute top-8 left-8 w-3 h-3 bg-pink-300 rounded-full'></div>
            <div className='absolute top-12 left-12 w-2 h-2 bg-purple-300 rounded-full'></div>
            <div className='absolute top-10 left-16 w-1 h-1 bg-pink-400 rounded-full'></div>

            <div className='absolute bottom-8 right-8 w-3 h-3 bg-purple-300 rounded-full'></div>
            <div className='absolute bottom-12 right-12 w-2 h-2 bg-pink-300 rounded-full'></div>
            <div className='absolute bottom-10 right-16 w-1 h-1 bg-purple-400 rounded-full'></div>

            <motion.div
              key={activeFeature}
              custom={direction}
              variants={slideVariants}
              initial='enter'
              animate='center'
              exit='exit'
              className='absolute inset-0 flex flex-col items-center justify-center z-10'
            >
              {/* Stylish background elements */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${features[activeFeature].color} opacity-5`}
              ></div>
              <div className='absolute top-0 left-0 w-full h-full opacity-20'>
                <div
                  className={`absolute top-10 right-10 w-40 h-40 rounded-full bg-gradient-to-r ${features[activeFeature].color} filter blur-xl transform -rotate-12`}
                ></div>
                <div
                  className={`absolute bottom-10 left-10 w-32 h-32 rounded-full bg-gradient-to-r ${features[activeFeature].color} filter blur-lg`}
                ></div>
              </div>

              {/* Choose between different feature displays based on the feature */}
              {features[activeFeature].id === 4
                ? renderDatabaseIntegration()
                : features[activeFeature].id === 6
                ? renderPatientRevivalAI()
                : renderStandardFeature(features[activeFeature])}
            </motion.div>

            {/* Improved navigation arrows */}
            <button
              onClick={prevFeature}
              className='absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:shadow-xl z-50 transition-all duration-300 hover:-translate-x-1 border border-gray-100 group'
            >
              <ArrowLeft className='h-5 w-5 text-gray-700 group-hover:text-pink-500' />
            </button>
            <button
              onClick={nextFeature}
              className='absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:shadow-xl z-50 transition-all duration-300 hover:translate-x-1 border border-gray-100 group'
            >
              <ArrowRight className='h-5 w-5 text-gray-700 group-hover:text-pink-500' />
            </button>

            {/* Enhanced progress indicators */}
            <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3 bg-white bg-opacity-70 backdrop-blur-sm px-6 py-3 rounded-full shadow-md z-50'>
              {features.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleFeatureChange(index)}
                  className='relative group'
                >
                  <span
                    className={`block w-3 h-3 rounded-full transition-all duration-300 ${
                      activeFeature === index
                        ? `bg-gradient-to-r ${features[index].color} ring-2 ring-white ring-opacity-60`
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  ></span>
                  <span className='absolute -top-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap bg-black bg-opacity-80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none'>
                    {features[index].title}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
      </div>
    </div>
  )
}

export default FeaturesShowcase
