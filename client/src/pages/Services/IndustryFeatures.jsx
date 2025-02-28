import { motion } from 'framer-motion'
import {
  Calendar,
  Camera,
  CheckCircle,
  ChevronRight,
  FileImage,
  Gift,
  Shield,
  Sparkles,
  Tag,
  User,
  Users,
} from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../components/Layout/Navbar'

const IndustryFeatures = () => {
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
      title: 'Treatment-Specific Campaigns',
      description:
        'Pre-built templates for services like facials, laser treatments, Botox, etc.',
      details:
        'Tailored messaging for different demographics (e.g., anti-aging vs. acne treatments).',
      icon: <Sparkles className='w-6 h-6 text-[#38b5ff]' />,
    },
    {
      title: 'Seasonal Promotions',
      description:
        'Ready-to-use campaigns for holidays, summer specials, or New Year resolutions.',
      details: 'Timely marketing that aligns with seasonal client needs.',
      icon: <Gift className='w-6 h-6 text-[#38b5ff]' />,
    },
    {
      title: 'Before/After Gallery Integration',
      description:
        'Showcase client transformations on landing pages or emails.',
      details: 'Visual evidence of your treatment results.',
      icon: <FileImage className='w-6 h-6 text-[#38b5ff]' />,
    },
    {
      title: 'HIPAA Compliance',
      description:
        'Ensure all data handling meets healthcare privacy standards.',
      details: 'Secure client information with healthcare-grade security.',
      icon: <Shield className='w-6 h-6 text-[#38b5ff]' />,
    },
  ]

  const treatmentTemplates = [
    {
      name: 'Botox & Fillers',
      icon: <User className='w-5 h-5 text-[#38b5ff]' />,
    },
    {
      name: 'Laser Treatments',
      icon: <Sparkles className='w-5 h-5 text-[#38b5ff]' />,
    },
    {
      name: 'Facials & Peels',
      icon: <User className='w-5 h-5 text-[#38b5ff]' />,
    },
    {
      name: 'Body Contouring',
      icon: <Users className='w-5 h-5 text-[#38b5ff]' />,
    },
    { name: 'Microblading', icon: <User className='w-5 h-5 text-[#38b5ff]' /> },
    {
      name: 'Hair Removal',
      icon: <Sparkles className='w-5 h-5 text-[#38b5ff]' />,
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
            Industry-Specific Features
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='text-gray-600 max-w-3xl mx-auto text-lg'
          >
            Purpose-built tools and campaigns designed specifically for med spas
            to showcase your services and drive bookings.
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

        {/* Treatment Templates Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className='bg-white rounded-2xl p-6 sm:p-8 shadow-md border border-gray-100 mb-16'
        >
          <h2 className='text-2xl font-bold text-gray-800 mb-6 text-center'>
            Treatment-Specific Templates
          </h2>

          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4'>
            {treatmentTemplates.map((template, index) => (
              <div
                key={index}
                className='bg-gradient-to-br from-[#38b5ff]/5 to-[#3888ff]/5 p-4 rounded-xl text-center hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-[#38b5ff]/20'
              >
                <div className='bg-white p-3 rounded-full inline-flex items-center justify-center mb-3 shadow-sm'>
                  {template.icon}
                </div>
                <p className='text-sm font-medium text-gray-800'>
                  {template.name}
                </p>
              </div>
            ))}
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
            Ready to Use Beauty Practice Specific Tools?
          </h2>
          <p className='mb-6 max-w-2xl mx-auto'>
            Our platform is designed specifically for med spas, with features
            and templates that address your unique needs.
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

export default IndustryFeatures
