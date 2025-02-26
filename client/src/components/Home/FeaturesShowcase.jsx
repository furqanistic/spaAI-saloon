import { motion } from 'framer-motion'
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  Calendar,
  Clock,
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
    },
    {
      id: 2,
      title: 'Automated Reminders',
      description:
        'Reduce no-shows with smart scheduling and personalized notifications',
      image: '/feature/fea2.png',
      icon: <Clock className='h-5 w-5' />,
      color: 'from-purple-400 to-purple-600',
    },
    {
      id: 3,
      title: 'Content Calendar',
      description:
        'Plan and schedule your marketing with our AI-powered calendar',
      image: '/feature/fea3.png',
      icon: <Calendar className='h-5 w-5' />,
      color: 'from-blue-400 to-blue-600',
    },
    {
      id: 4,
      title: 'Database Integration',
      description: 'Connect all your tools in one powerful central hub',
      image: '/feature/fea4.png',
      icon: <BarChart3 className='h-5 w-5' />,
      color: 'from-indigo-400 to-indigo-600',
    },
    {
      id: 5,
      title: 'Fast Five Engagement',
      description:
        'Convert leads into appointments in record time with guided flows',
      image: '/feature/fea5.png',
      icon: <Zap className='h-5 w-5' />,
      color: 'from-teal-400 to-teal-600',
    },
    {
      id: 6,
      title: 'Patient Revival AI',
      description:
        'Re-engage dormant clients with intelligent, personalized campaigns',
      image: '/feature/fea6.png',
      icon: <Users className='h-5 w-5' />,
      color: 'from-amber-400 to-amber-600',
    },
    {
      id: 7,
      title: 'Reputation Management',
      description:
        'Build and manage your online presence with review automation',
      image: '/feature/fea7.png',
      icon: <Star className='h-5 w-5' />,
      color: 'from-rose-400 to-rose-600',
    },
    {
      id: 8,
      title: 'Smart Nurture',
      description: 'Guide prospects through personalized conversion journeys',
      image: '/feature/fea8.png',
      icon: <Sparkles className='h-5 w-5' />,
      color: 'from-violet-400 to-violet-600',
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

  return (
    <div className='w-full bg-gray-50 py-16 overflow-hidden'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
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
        <div className='grid grid-cols-1 lg:grid-cols-5 gap-8 mb-16 items-center min-h-[640px]'>
          {/* Feature Tabs - Left Side on Desktop */}
          <div className='lg:col-span-2 flex flex-col space-y-3 order-2 lg:order-1 self-center py-2'>
            {features.map((feature, index) => (
              <motion.button
                key={feature.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                onClick={() => handleFeatureChange(index)}
                className={`flex items-center p-3 rounded-lg text-left transition-all ${
                  activeFeature === index
                    ? `bg-gradient-to-r ${feature.color} text-white shadow-lg`
                    : 'bg-white hover:bg-gray-50 text-gray-700 shadow'
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

          {/* Feature Image - Right Side on Desktop */}
          <div className='lg:col-span-3 relative h-[500px] bg-white rounded-2xl overflow-hidden shadow-xl order-1 lg:order-2 border border-gray-100 self-center flex items-center justify-center'>
            <motion.div
              key={activeFeature}
              custom={direction}
              variants={slideVariants}
              initial='enter'
              animate='center'
              exit='exit'
              className='absolute inset-0 flex flex-col items-center justify-center'
            >
              {/* Stylish background elements */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${features[activeFeature].color} opacity-5`}
              ></div>
              <div className='absolute top-0 left-0 w-full h-full opacity-20'>
                <div
                  className={`absolute top-10 right-10 w-32 h-32 rounded-full bg-gradient-to-r ${features[activeFeature].color} filter blur-xl transform -rotate-12`}
                ></div>
                <div
                  className={`absolute bottom-10 left-10 w-24 h-24 rounded-full bg-gradient-to-r ${features[activeFeature].color} filter blur-lg`}
                ></div>
              </div>

              {/* Image container with improved centering and framing */}
              <div
                className='relative w-full h-full flex items-center justify-center p-6'
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {/* Paper-like background for image */}
                <div className='absolute inset-12 bg-gray-50 rounded-xl shadow-inner'></div>

                {/* Decorative elements */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className='absolute left-0 top-1/4 w-3 h-16 rounded-r-lg bg-gradient-to-b from-gray-100 to-gray-200'
                ></motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className='absolute left-0 top-2/4 w-3 h-16 rounded-r-lg bg-gradient-to-b from-gray-100 to-gray-200'
                ></motion.div>

                {/* Featured image with improved presentation */}
                <div
                  className={`relative z-10 bg-white rounded-lg shadow-lg p-3 border border-gray-100 transform transition-all duration-500 hover:scale-105 overflow-hidden max-w-[80%] max-h-[80%]`}
                >
                  <img
                    src={features[activeFeature].image}
                    alt={features[activeFeature].title}
                    className='max-w-full max-h-full object-contain rounded-md'
                  />
                  <div
                    className={`absolute -bottom-1 -right-1 w-20 h-20 bg-gradient-to-tl ${features[activeFeature].color} opacity-20 rounded-tl-full`}
                  ></div>
                </div>

                {/* Feature label with improved design */}
                <div
                  className={`absolute bottom-12 backdrop-blur-md bg-white bg-opacity-80 border-2 border-white rounded-2xl shadow-lg px-8 py-4 flex items-center space-x-3`}
                >
                  <div
                    className={`p-3 rounded-full bg-gradient-to-r ${features[activeFeature].color} text-white`}
                  >
                    {features[activeFeature].icon}
                  </div>
                  <div>
                    <h3 className='font-bold text-lg text-gray-800'>
                      {features[activeFeature].title}
                    </h3>
                    <p className='text-sm text-gray-600 mt-1 max-w-xs'>
                      {features[activeFeature].description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Improved navigation arrows */}
            <button
              onClick={prevFeature}
              className={`absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:shadow-xl z-20 transition-all duration-300 hover:-translate-x-1 border border-gray-100 group`}
            >
              <ArrowLeft
                className={`h-5 w-5 group-hover:text-gradient-to-r ${features[activeFeature].color}`}
              />
            </button>
            <button
              onClick={nextFeature}
              className={`absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:shadow-xl z-20 transition-all duration-300 hover:translate-x-1 border border-gray-100 group`}
            >
              <ArrowRight
                className={`h-5 w-5 group-hover:text-gradient-to-r ${features[activeFeature].color}`}
              />
            </button>

            {/* Enhanced progress indicators */}
            <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3 bg-white bg-opacity-70 backdrop-blur-sm px-6 py-3 rounded-full shadow-md'>
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
                  <span
                    className={`absolute -top-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap bg-black bg-opacity-80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none`}
                  >
                    {features[index].title}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className='text-center'
        >
          <button className='bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full font-medium text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center mx-auto'>
            Get Started Today
            <ArrowRight className='ml-2 h-5 w-5' />
          </button>
          <p className='mt-4 text-gray-500'>
            Experience the future of med spa management
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default FeaturesShowcase
