import { motion } from 'framer-motion'
import {
  CheckCircle,
  ChevronRight,
  Layers,
  Mail,
  MessageSquare,
  Palette,
  PenIcon,
  Smartphone,
  User,
} from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../components/Layout/Navbar'

const WhiteLabelingBranding = () => {
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
      title: 'Custom Domain',
      description: 'Host landing pages and funnels on your branded domain.',
      details: 'Maintain consistent branding throughout the customer journey.',
      icon: <Layers className='w-6 h-6 text-[#38b5ff]' />,
    },
    {
      title: 'Branded Emails & SMS',
      description:
        'Send messages that look like they are coming directly from your business.',
      details:
        'Professional communication that reinforces your brand identity.',
      icon: <Mail className='w-6 h-6 text-[#38b5ff]' />,
    },
    {
      title: 'Customizable Dashboard',
      description:
        'Match the platforms interface to your brand colors and logo.',
      details: 'Your staff experiences a consistent brand environment.',
      icon: <Palette className='w-6 h-6 text-[#38b5ff]' />,
    },
    {
      title: 'Client-Facing Portals',
      description:
        'Offer a branded portal for clients to book appointments, view invoices, or manage memberships.',
      details: 'Extend your brand experience to client self-service.',
      icon: <User className='w-6 h-6 text-[#38b5ff]' />,
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
            White-Labeling & Branding
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='text-gray-600 max-w-3xl mx-auto text-lg'
          >
            Deliver a seamless branded experience to your clients across all
            touchpoints, from booking to emails to client portals.
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

        {/* Branding Examples */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-16'>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className='bg-white rounded-2xl p-6 shadow-md border border-gray-100'
          >
            <div className='flex items-center mb-4 space-x-3'>
              <Smartphone className='w-6 h-6 text-[#38b5ff]' />
              <h3 className='text-xl font-semibold text-gray-800'>
                Client Portals
              </h3>
            </div>

            <p className='text-gray-600 mb-6'>
              Give your clients a seamless branded experience when they book
              appointments or manage their accounts.
            </p>

            <div className='bg-gradient-to-br from-[#38b5ff]/10 to-[#3888ff]/5 p-4 rounded-xl'>
              <div className='bg-white rounded-lg shadow-sm overflow-hidden'>
                <div className='h-8 bg-[#38b5ff] w-full'></div>
                <div className='p-4'>
                  <div className='flex items-center justify-between mb-4'>
                    <div className='w-24 h-6 bg-gray-100 rounded'></div>
                    <div className='w-8 h-8 rounded-full bg-gray-100'></div>
                  </div>

                  <div className='space-y-3 mb-6'>
                    <div className='w-full h-10 bg-gray-100 rounded'></div>
                    <div className='grid grid-cols-3 gap-2'>
                      <div className='h-20 bg-gray-100 rounded'></div>
                      <div className='h-20 bg-gray-100 rounded'></div>
                      <div className='h-20 bg-gray-100 rounded'></div>
                    </div>
                    <div className='w-full h-10 bg-gray-100 rounded'></div>
                  </div>

                  <div className='w-32 h-8 mx-auto bg-[#38b5ff] rounded-lg'></div>
                </div>
              </div>
            </div>

            <ul className='space-y-2 mt-4'>
              {[
                'Custom domain for client portal',
                'Your logo and brand colors',
                'Personalized messaging',
                'Branded appointment confirmations',
              ].map((feature, i) => (
                <li key={i} className='flex items-start space-x-2'>
                  <CheckCircle className='w-4 h-4 text-[#38b5ff] mt-0.5' />
                  <span className='text-sm text-gray-600'>{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className='bg-white rounded-2xl p-6 shadow-md border border-gray-100'
          >
            <div className='flex items-center mb-4 space-x-3'>
              <MessageSquare className='w-6 h-6 text-[#38b5ff]' />
              <h3 className='text-xl font-semibold text-gray-800'>
                Branded Communications
              </h3>
            </div>

            <p className='text-gray-600 mb-6'>
              Every message your clients receive looks like it's coming directly
              from your business.
            </p>

            <div className='grid grid-cols-2 gap-4 mb-6'>
              <div className='border border-gray-100 rounded-lg overflow-hidden shadow-sm'>
                <div className='h-8 bg-gray-100 flex items-center px-3'>
                  <div className='w-20 h-4 bg-gray-200 rounded'></div>
                </div>
                <div className='p-3'>
                  <div className='w-full h-4 bg-gray-100 rounded mb-2'></div>
                  <div className='w-3/4 h-4 bg-gray-100 rounded mb-4'></div>
                  <div className='space-y-1'>
                    <div className='w-full h-3 bg-gray-100 rounded'></div>
                    <div className='w-full h-3 bg-gray-100 rounded'></div>
                    <div className='w-2/3 h-3 bg-gray-100 rounded'></div>
                  </div>
                </div>
              </div>

              <div className='border border-gray-100 rounded-lg overflow-hidden shadow-sm'>
                <div className='p-3'>
                  <div className='w-16 h-4 bg-gray-100 rounded mb-2'></div>
                  <div className='w-3/4 h-5 bg-gray-100 rounded-lg mb-3'></div>
                  <div className='space-y-2'>
                    <div className='w-full h-14 bg-gray-100 rounded'></div>
                    <div className='flex space-x-2'>
                      <div className='w-1/2 h-8 bg-gray-100 rounded'></div>
                      <div className='w-1/2 h-8 bg-[#38b5ff] rounded'></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <ul className='space-y-2'>
              {[
                'Custom email sender name and address',
                'Branded SMS sender ID',
                'Your logo in all communications',
                'Consistent tone and messaging',
              ].map((feature, i) => (
                <li key={i} className='flex items-start space-x-2'>
                  <CheckCircle className='w-4 h-4 text-[#38b5ff] mt-0.5' />
                  <span className='text-sm text-gray-600'>{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Dashboard Customization */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className='bg-white rounded-2xl p-6 shadow-md border border-gray-100 mb-16'
        >
          <div className='flex items-center justify-center mb-6 space-x-3'>
            <PenIcon className='w-6 h-6 text-[#38b5ff]' />
            <h2 className='text-2xl font-bold text-gray-800'>
              Dashboard Customization
            </h2>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-6'>
            {[
              {
                title: 'Logo Integration',
                description:
                  'Your logo prominently displayed in the platform interface',
              },
              {
                title: 'Color Themes',
                description:
                  "Match the interface colors to your brand's palette",
              },
              {
                title: 'Custom Terminology',
                description: 'Use your own terms for services and procedures',
              },
            ].map((item, i) => (
              <div
                key={i}
                className='bg-gradient-to-br from-[#38b5ff]/5 to-[#3888ff]/5 p-4 rounded-xl'
              >
                <h3 className='font-semibold text-gray-800 mb-2'>
                  {item.title}
                </h3>
                <p className='text-sm text-gray-600'>{item.description}</p>
              </div>
            ))}
          </div>

          <div className='flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8'>
            <div className='flex items-center space-x-2'>
              <div className='w-6 h-6 rounded-full bg-[#38b5ff]'></div>
              <div className='w-6 h-6 rounded-full bg-[#3888ff]'></div>
              <div className='w-6 h-6 rounded-full bg-[#6366f1]'></div>
              <span className='text-sm text-gray-600'>Default Theme</span>
            </div>

            <div className='flex items-center space-x-2'>
              <div className='w-6 h-6 rounded-full bg-[#ec4899]'></div>
              <div className='w-6 h-6 rounded-full bg-[#d946ef]'></div>
              <div className='w-6 h-6 rounded-full bg-[#a855f7]'></div>
              <span className='text-sm text-gray-600'>Purple Theme</span>
            </div>

            <div className='flex items-center space-x-2'>
              <div className='w-6 h-6 rounded-full bg-[#10b981]'></div>
              <div className='w-6 h-6 rounded-full bg-[#14b8a6]'></div>
              <div className='w-6 h-6 rounded-full bg-[#06b6d4]'></div>
              <span className='text-sm text-gray-600'>Teal Theme</span>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className='bg-gradient-to-r from-[#38b5ff] to-[#3888ff] rounded-2xl p-6 shadow-lg text-center text-white'
        >
          <h2 className='text-2xl font-bold mb-4'>
            Ready to Create a Seamless Brand Experience?
          </h2>
          <p className='mb-6 max-w-2xl mx-auto'>
            Make every customer touchpoint reinforce your unique brand identity
            with our comprehensive white-labeling solutions.
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

export default WhiteLabelingBranding
