import { motion } from 'framer-motion'
import {
  Activity,
  Calendar,
  CheckCircle,
  ChevronRight,
  FileText,
  Mail,
  MessageSquare,
  RefreshCw,
  Sparkles,
  UserPlus,
  Users,
  Zap,
} from 'lucide-react'
import React from 'react'
import { Link } from 'react-router'
import Navbar from '../../components/Layout/Navbar'

const LeadNurturing = () => {
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
      title: 'Smart Nurture (Automated Follow-Ups)',
      description:
        'AI-driven follow-ups over 3 months to nurture leads into clients.',
      details:
        'Personalized messages based on lead behavior (e.g., abandoned carts, past services).',
      icon: <Sparkles className='w-6 h-6 text-[#38b5ff]' />,
    },
    {
      title: 'Drip Campaigns',
      description:
        'Pre-built email and SMS sequences for different stages of the customer journey.',
      details: `'Holiday-themed campaigns (e.g., Valentine's Day, Summer Kickoff).'`,
      icon: <Mail className='w-6 h-6 text-[#38b5ff]' />,
    },
    {
      title: 'Behavioral Triggers',
      description:
        'Automated responses based on user actions (e.g., visiting a pricing page, clicking an email link).',
      details: 'Tailored content based on specific customer interactions.',
      icon: <Activity className='w-6 h-6 text-[#38b5ff]' />,
    },
    {
      title: 'Re-Engagement Campaigns',
      description:
        'Targeting inactive leads or past clients with special offers.',
      details: `'Win back customers who haven't interacted with your spa in a while.'`,
      icon: <RefreshCw className='w-6 h-6 text-[#38b5ff]' />,
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
            Lead Nurturing & Follow-Up Automation
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='text-gray-600 max-w-3xl mx-auto text-lg'
          >
            Turn prospects into loyal clients with intelligent, automated
            follow-up sequences designed specifically for med spas.
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

        {/* How It Works Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className='bg-white rounded-2xl p-8 shadow-md border border-gray-100 mb-16'
        >
          <h2 className='text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center'>
            How Our Lead Nurturing Works
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
            {[
              {
                step: 1,
                title: 'Capture',
                description:
                  'Collect lead information through various touchpoints',
                icon: <UserPlus className='w-8 h-8 text-[#38b5ff]' />,
              },
              {
                step: 2,
                title: 'Segment',
                description: 'Categorize leads based on interests and behavior',
                icon: <Users className='w-8 h-8 text-[#38b5ff]' />,
              },
              {
                step: 3,
                title: 'Nurture',
                description: 'Send personalized automated messages over time',
                icon: <MessageSquare className='w-8 h-8 text-[#38b5ff]' />,
              },
              {
                step: 4,
                title: 'Convert',
                description:
                  'Transform interested leads into booked appointments',
                icon: <Calendar className='w-8 h-8 text-[#38b5ff]' />,
              },
            ].map((step, index) => (
              <div
                key={index}
                className='flex flex-col items-center text-center'
              >
                <div className='relative mb-4'>
                  <div className='bg-gradient-to-br from-[#38b5ff]/20 to-[#3888ff]/10 p-4 rounded-full h-20 w-20 flex items-center justify-center'>
                    {step.icon}
                  </div>
                  <div className='absolute top-0 right-0 bg-[#38b5ff] text-white rounded-full h-6 w-6 flex items-center justify-center text-sm font-bold'>
                    {step.step}
                  </div>
                </div>
                <h3 className='text-xl font-semibold text-gray-800 mb-2'>
                  {step.title}
                </h3>
                <p className='text-gray-600'>{step.description}</p>

                {index < 3 && (
                  <div className='hidden md:block absolute transform translate-x-[130px] translate-y-[30px]'>
                    <ChevronRight className='w-6 h-6 text-[#38b5ff]' />
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Benefits Section */}
        <div className='bg-white rounded-2xl p-8 shadow-md border border-gray-100 mb-16'>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className='text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center'
          >
            Benefits of Automated Lead Nurturing
          </motion.h2>

          <motion.div
            className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'
            variants={containerVariants}
            initial='hidden'
            animate='visible'
          >
            {[
              {
                text: 'Increase conversion rates by up to 50%',
                icon: <CheckCircle className='w-5 h-5 text-[#38b5ff]' />,
              },
              {
                text: 'Save staff time with automated follow-ups',
                icon: <CheckCircle className='w-5 h-5 text-[#38b5ff]' />,
              },
              {
                text: 'Maintain consistent communication with leads',
                icon: <CheckCircle className='w-5 h-5 text-[#38b5ff]' />,
              },
              {
                text: 'Personalize messages based on client behavior',
                icon: <CheckCircle className='w-5 h-5 text-[#38b5ff]' />,
              },
              {
                text: 'Re-engage dormant leads with targeted offers',
                icon: <CheckCircle className='w-5 h-5 text-[#38b5ff]' />,
              },
              {
                text: 'Track customer journey for optimized campaigns',
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
            Ready to Automate Your Follow-ups?
          </h2>
          <p className='mb-6 max-w-2xl mx-auto'>
            Stop losing leads due to inconsistent follow-up. Let our automated
            nurturing system turn more prospects into loyal clients.
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

export default LeadNurturing
