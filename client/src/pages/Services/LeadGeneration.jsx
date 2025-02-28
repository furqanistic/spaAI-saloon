import { motion } from 'framer-motion'
import {
  Award,
  CheckCircle,
  ChevronRight,
  FileText,
  Globe,
  Layout,
  MessageSquare,
  MousePointer,
  Phone,
  Smartphone,
  UserPlus,
} from 'lucide-react'
import React from 'react'
import { Link } from 'react-router'
import Navbar from '../../components/Layout/Navbar'

const LeadGeneration = () => {
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
      title: 'Custom Landing Pages',
      description:
        'High-converting landing pages optimized for beauty practice offers (e.g., discounts, free consultations).',
      details: 'Mobile-friendly and customizable templates.',
      icon: <Layout className='w-6 h-6 text-[#38b5ff]' />,
    },
    {
      title: 'Lead Forms & Pop-Ups',
      description: 'Embedded forms on websites or social media ads.',
      details: 'Exit-intent pop-ups to capture leads before they leave.',
      icon: <FileText className='w-6 h-6 text-[#38b5ff]' />,
    },
    {
      title: 'Appointment Booking Widget',
      description:
        'Seamless integration with scheduling tools like Google Calendar or Calendly.',
      details: 'Real-time availability and automated reminders.',
      icon: <Phone className='w-6 h-6 text-[#38b5ff]' />,
    },
    {
      title: 'SMS & Email Opt-In Campaigns',
      description:
        'Automated opt-in messages for lead magnets (e.g., "Get 20% Off Your First Facial").',
      details: 'Compliance with regulations like TCPA and GDPR.',
      icon: <MessageSquare className='w-6 h-6 text-[#38b5ff]' />,
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
            Lead Generation & Capture
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='text-gray-600 max-w-3xl mx-auto text-lg'
          >
            Convert visitors into clients with our powerful suite of lead
            generation tools designed specifically for med spas.
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

        {/* Benefits Section */}
        <div className='bg-white rounded-2xl p-8 shadow-md border border-gray-100 mb-16'>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className='text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center'
          >
            Why Choose Our Lead Generation Solutions
          </motion.h2>

          <motion.div
            className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'
            variants={containerVariants}
            initial='hidden'
            animate='visible'
          >
            {[
              {
                text: 'Increase conversion rates by up to 30%',
                icon: <CheckCircle className='w-5 h-5 text-[#38b5ff]' />,
              },
              {
                text: 'Capture leads 24/7 with automated systems',
                icon: <CheckCircle className='w-5 h-5 text-[#38b5ff]' />,
              },
              {
                text: 'Seamless mobile optimization for all devices',
                icon: <CheckCircle className='w-5 h-5 text-[#38b5ff]' />,
              },
              {
                text: 'Customizable to match your brand aesthetics',
                icon: <CheckCircle className='w-5 h-5 text-[#38b5ff]' />,
              },
              {
                text: 'HIPAA compliant data collection',
                icon: <CheckCircle className='w-5 h-5 text-[#38b5ff]' />,
              },
              {
                text: 'Integrates with your existing systems',
                icon: <CheckCircle className='w-5 h-5 text-[#38b5ff]' />,
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className='flex items-center space-x-3'
              >
                {benefit.icon}
                <span className='text-gray-600'>{benefit.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className='bg-gradient-to-r from-[#38b5ff] to-[#3888ff] rounded-2xl p-8 shadow-lg text-center text-white'
        >
          <h2 className='text-2xl md:text-3xl font-bold mb-4'>
            Ready to Boost Your Lead Generation?
          </h2>
          <p className='mb-6 max-w-2xl mx-auto'>
            Transform your beauty practice's lead capture process and start
            converting more visitors into paying clients today.
          </p>
          <Link to='/demo'>
            <button className='bg-white text-[#38b5ff] px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 shadow-md flex items-center mx-auto'>
              <span>Book a Demo</span>
              <ChevronRight className='ml-2 w-5 h-5' />
            </button>
          </Link>
        </motion.div>
      </section>
    </div>
  )
}

export default LeadGeneration
