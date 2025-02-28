import { motion } from 'framer-motion'
import {
  BookOpen,
  CheckCircle,
  ChevronRight,
  Headphones,
  HelpCircle,
  Laptop,
  Layers,
  LifeBuoy,
  MessageCircle,
  PhoneCall,
  Play,
  UserCheck,
} from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../components/Layout/Navbar'

const OnboardingSupport = () => {
  const navigate = useNavigate()

  // Navigate to demo page
  const handleDemoClick = () => {
    navigate('/demo')
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  // Features data based on the provided information
  const features = [
    {
      title: 'White-Glove Onboarding',
      description: 'Dedicated setup and training for new clients.',
      details: 'Pre-built templates and workflows tailored to med spas.',
      icon: <UserCheck className='w-6 h-6 text-[#38b5ff]' />,
    },
    {
      title: 'Ongoing Support',
      description: 'Access to a dedicated account manager or support team.',
      details: 'Regular check-ins to optimize campaigns.',
      icon: <Headphones className='w-6 h-6 text-[#38b5ff]' />,
    },
    {
      title: 'Knowledge Base & Tutorials',
      description:
        'Video tutorials, FAQs, and guides for self-service learning.',
      details: 'Comprehensive resources to help you maximize the platform.',
      icon: <BookOpen className='w-6 h-6 text-[#38b5ff]' />,
    },
    {
      title: 'Beauty Practice Strategy Consulting',
      description: 'Expert guidance on marketing and operational strategies.',
      details: 'Industry-specific advice to grow your business.',
      icon: <Layers className='w-6 h-6 text-[#38b5ff]' />,
    },
  ]

  // Support tiers
  const supportTiers = [
    {
      tier: 'Standard',
      features: [
        'Email support (24-hour response)',
        'Knowledge base access',
        'Community forum',
        'Monthly group training',
        'Basic onboarding',
      ],
    },
    {
      tier: 'Premium',
      features: [
        'Priority email support (4-hour response)',
        'Chat support during business hours',
        'Dedicated account manager',
        'Quarterly strategy sessions',
        'Enhanced onboarding & training',
      ],
    },
    {
      tier: 'VIP',
      features: [
        '24/7 priority support',
        'Dedicated success manager',
        'Monthly strategy calls',
        'Custom implementation',
        'White-glove onboarding',
        'Custom training sessions',
      ],
    },
  ]

  return (
    <div className='min-h-screen bg-gradient-to-br from-white to-gray-50'>
      <Navbar />

      {/* Hero Section */}
      <section className='pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto'>
        <div className='text-center mb-16'>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#38b5ff] to-[#3888ff] bg-clip-text text-transparent mb-4'
          >
            Onboarding & Support
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='text-gray-600 max-w-3xl mx-auto text-lg'
          >
            We're with you every step of the way, from implementation to ongoing
            optimization, ensuring your beauty practice gets the most from our
            platform.
          </motion.p>
        </div>

        {/* Features Grid */}
        <motion.div
          className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-16'
          variants={containerVariants}
          initial='hidden'
          animate='visible'
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className='bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-[#38b5ff]/20 relative overflow-hidden group'
            >
              <div className='absolute -right-12 -top-12 w-24 h-24 rounded-full bg-gradient-to-br from-[#38b5ff]/10 to-[#3888ff]/5 opacity-0 group-hover:opacity-100 transition-all duration-500'></div>

              <div className='flex items-start space-x-4'>
                <div className='bg-gradient-to-br from-[#38b5ff]/10 to-[#3888ff]/5 p-3 rounded-xl transition-colors duration-300 flex items-center justify-center h-14 w-14'>
                  {feature.icon}
                </div>

                <div className='flex-1'>
                  <h3 className='text-xl font-semibold text-gray-800 mb-2'>
                    {feature.title}
                  </h3>
                  <p className='text-gray-600 mb-2'>{feature.description}</p>
                  <p className='text-gray-500 text-sm'>{feature.details}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Onboarding Process */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className='bg-white rounded-2xl p-6 sm:p-8 shadow-md border border-gray-100 mb-16'
        >
          <h2 className='text-2xl font-bold text-gray-800 mb-6 text-center'>
            Our Onboarding Process
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
            {[
              {
                step: 1,
                title: 'Discovery',
                description:
                  'We learn about your unique beauty practice needs and goals',
                icon: <HelpCircle className='w-6 h-6 text-[#38b5ff]' />,
              },
              {
                step: 2,
                title: 'Setup',
                description:
                  'We configure your platform with customized templates',
                icon: <Laptop className='w-6 h-6 text-[#38b5ff]' />,
              },
              {
                step: 3,
                title: 'Training',
                description: 'Your team learns how to leverage all features',
                icon: <BookOpen className='w-6 h-6 text-[#38b5ff]' />,
              },
              {
                step: 4,
                title: 'Optimization',
                description: 'Ongoing refinement to maximize your results',
                icon: <Layers className='w-6 h-6 text-[#38b5ff]' />,
              },
            ].map((step, index) => (
              <div key={index} className='relative'>
                <div className='bg-gradient-to-br from-[#38b5ff]/10 to-[#3888ff]/5 rounded-xl p-5 text-center h-full'>
                  <div className='absolute -top-3 -right-3 w-8 h-8 rounded-full bg-[#38b5ff] flex items-center justify-center text-white font-bold text-sm'>
                    {step.step}
                  </div>
                  <div className='flex justify-center mb-4'>
                    <div className='p-3 bg-white rounded-full shadow-sm'>
                      {step.icon}
                    </div>
                  </div>
                  <h3 className='font-semibold text-gray-800 mb-2'>
                    {step.title}
                  </h3>
                  <p className='text-sm text-gray-600'>{step.description}</p>
                </div>

                {index < 3 && (
                  <div className='hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10'>
                    <ChevronRight className='w-6 h-6 text-[#38b5ff]' />
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Support Tiers */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-16'>
          {supportTiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className={`bg-white rounded-2xl p-6 shadow-md border ${
                index === 1
                  ? 'border-[#38b5ff] shadow-lg relative overflow-hidden'
                  : 'border-gray-100'
              }`}
            >
              {index === 1 && (
                <div className='absolute top-0 right-0 bg-[#38b5ff] text-white text-xs font-semibold px-3 py-1 rounded-bl-lg rounded-tr-lg'>
                  Most Popular
                </div>
              )}

              <h3
                className={`text-xl font-bold mb-3 ${
                  index === 1 ? 'text-[#38b5ff]' : 'text-gray-800'
                }`}
              >
                {tier.tier} Support
              </h3>

              <ul className='space-y-3 mb-6'>
                {tier.features.map((feature, i) => (
                  <li key={i} className='flex items-start space-x-2'>
                    <CheckCircle
                      className={`w-5 h-5 ${
                        index === 1 ? 'text-[#38b5ff]' : 'text-gray-400'
                      } mt-0.5`}
                    />
                    <span className='text-gray-600 text-sm'>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className='pt-4 border-t border-gray-100'>
                <button
                  onClick={handleDemoClick}
                  className={`w-full py-2 rounded-lg font-medium ${
                    index === 1
                      ? 'bg-[#38b5ff] text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  } transition-colors duration-300`}
                >
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Support Channels */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className='bg-white rounded-2xl p-6 shadow-md border border-gray-100 mb-16'
        >
          <h2 className='text-2xl font-bold text-gray-800 mb-6 text-center'>
            Multiple Support Channels
          </h2>

          <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
            {[
              {
                channel: 'Live Chat',
                icon: <MessageCircle className='w-8 h-8 text-[#38b5ff]' />,
              },
              {
                channel: 'Phone Support',
                icon: <PhoneCall className='w-8 h-8 text-[#38b5ff]' />,
              },
              {
                channel: 'Email Tickets',
                icon: <LifeBuoy className='w-8 h-8 text-[#38b5ff]' />,
              },
              {
                channel: 'Video Tutorials',
                icon: <Play className='w-8 h-8 text-[#38b5ff]' />,
              },
            ].map((channel, index) => (
              <div
                key={index}
                className='bg-gradient-to-br from-[#38b5ff]/5 to-[#3888ff]/5 rounded-xl p-4 text-center'
              >
                <div className='flex justify-center mb-3'>{channel.icon}</div>
                <p className='font-medium text-gray-800'>{channel.channel}</p>
              </div>
            ))}
          </div>

          <div className='mt-6 text-center'>
            <p className='text-gray-600'>
              Our support team has extensive experience in the beauty practice
              industry, providing not just technical help, but valuable business
              insights as well.
            </p>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className='bg-gradient-to-r from-[#38b5ff] to-[#3888ff] rounded-2xl p-6 shadow-lg text-center text-white'
        >
          <h2 className='text-2xl font-bold mb-4'>Ready for Expert Support?</h2>
          <p className='mb-6 max-w-2xl mx-auto'>
            We're committed to your success with personalized onboarding and
            ongoing support tailored to your beauty practice's needs.
          </p>
          <button
            onClick={handleDemoClick}
            className='bg-white text-[#38b5ff] px-6 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 shadow-md flex items-center mx-auto'
          >
            <span>Book a Demo</span>
            <ChevronRight className='ml-2 w-5 h-5' />
          </button>
        </motion.div>
      </section>
    </div>
  )
}

export default OnboardingSupport
