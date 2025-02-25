import { motion } from 'framer-motion'
import {
  Award,
  CheckCircle,
  ChevronRight,
  Database,
  Filter,
  Gift,
  PieChart,
  Tag,
  Target,
  TrendingUp,
  Users,
} from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../components/Layout/Navbar'

const CRMTools = () => {
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

  // Features data based on the provided information - using "CRM" section info
  const features = [
    {
      title: 'Client Segmentation',
      description:
        'Segment leads and clients by demographics, behavior, or service type.',
      details:
        'Use tags for targeted campaigns (e.g., "Interested in Facials").',
      icon: <Filter className='w-6 h-6 text-[#38b5ff]' />,
    },
    {
      title: 'Pipeline Management',
      description: 'Visualize lead stages (e.g., New, Nurturing, Converted).',
      details: 'Automate tasks based on pipeline progress.',
      icon: <Target className='w-6 h-6 text-[#38b5ff]' />,
    },
    {
      title: 'Loyalty Programs',
      description: 'Reward repeat clients with points or discounts.',
      details: 'Track and manage client loyalty to increase retention.',
      icon: <Award className='w-6 h-6 text-[#38b5ff]' />,
    },
    {
      title: 'Client Database',
      description:
        'Comprehensive client profiles with treatment history and preferences.',
      details:
        'Secure, HIPAA-compliant data storage for sensitive client information.',
      icon: <Database className='w-6 h-6 text-[#38b5ff]' />,
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
            CRM Tools
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='text-gray-600 max-w-3xl mx-auto text-lg'
          >
            Organize, track, and nurture your client relationships with our
            powerful CRM suite designed specifically for med spas.
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

        {/* Pipeline Visualization Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className='bg-white rounded-2xl p-8 shadow-md border border-gray-100 mb-16'
        >
          <h2 className='text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center'>
            Visualize Your Client Pipeline
          </h2>

          <div className='flex flex-col space-y-6 md:space-y-0 md:flex-row md:items-center md:justify-between mb-8'>
            {[
              { stage: 'New Lead', color: '#38b5ff', percent: '100%' },
              { stage: 'Contacted', color: '#3a9edb', percent: '78%' },
              { stage: 'Nurturing', color: '#3d87b7', percent: '64%' },
              { stage: 'Appointment', color: '#4071a0', percent: '45%' },
              { stage: 'Converted', color: '#435b8a', percent: '32%' },
              { stage: 'Recurring', color: '#454473', percent: '25%' },
            ].map((stage, index) => (
              <div key={index} className='flex flex-col items-center'>
                <div className='relative mb-2'>
                  <div
                    className='h-16 w-16 rounded-full flex items-center justify-center text-white font-semibold'
                    style={{ backgroundColor: stage.color }}
                  >
                    {index + 1}
                  </div>

                  {index < 5 && (
                    <div className='hidden md:block absolute top-1/2 -right-8 transform -translate-y-1/2'>
                      <ChevronRight className='w-6 h-6 text-gray-300' />
                    </div>
                  )}
                </div>
                <h3 className='font-medium text-gray-800'>{stage.stage}</h3>
                <p className='text-sm text-gray-500'>{stage.percent}</p>
              </div>
            ))}
          </div>

          <div className='p-4 bg-gray-50 rounded-xl'>
            <p className='text-center text-gray-600 italic'>
              "Our CRM pipeline visualization provides at-a-glance insights into
              where each prospect is in your sales funnel, helping you focus
              your efforts on the most promising leads."
            </p>
          </div>
        </motion.div>

        {/* Client Segmentation Section */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16'>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className='bg-white rounded-2xl p-6 shadow-md border border-gray-100'
          >
            <div className='flex items-center mb-4 space-x-3'>
              <Tag className='w-6 h-6 text-[#38b5ff]' />
              <h3 className='text-xl font-semibold text-gray-800'>
                Smart Client Tagging
              </h3>
            </div>

            <p className='text-gray-600 mb-6'>
              Categorize your clients with dynamic tags to create targeted
              marketing campaigns that speak directly to their interests and
              needs.
            </p>

            <div className='flex flex-wrap gap-2 mb-6'>
              {[
                { tag: 'Facial Clients', color: '#38b5ff' },
                { tag: 'Botox Interest', color: '#6366f1' },
                { tag: 'Laser Treatments', color: '#ec4899' },
                { tag: 'High Value', color: '#f59e0b' },
                { tag: 'New Clients', color: '#10b981' },
                { tag: 'Birthday Month', color: '#7c3aed' },
                { tag: 'VIP', color: '#ef4444' },
                { tag: 'Referral Source', color: '#8b5cf6' },
              ].map((tagItem, i) => (
                <span
                  key={i}
                  className='px-3 py-1 rounded-full text-white text-sm'
                  style={{ backgroundColor: tagItem.color }}
                >
                  {tagItem.tag}
                </span>
              ))}
            </div>

            <ul className='space-y-2'>
              {[
                'Filter clients by multiple tags',
                'Create automated campaigns based on tags',
                'Add tags manually or automatically based on behavior',
                'Track conversion rates by segment',
              ].map((item, i) => (
                <li key={i} className='flex items-start space-x-2'>
                  <CheckCircle className='w-5 h-5 text-[#38b5ff] mt-0.5' />
                  <span className='text-gray-600'>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className='bg-white rounded-2xl p-6 shadow-md border border-gray-100'
          >
            <div className='flex items-center mb-4 space-x-3'>
              <Gift className='w-6 h-6 text-[#38b5ff]' />
              <h3 className='text-xl font-semibold text-gray-800'>
                Loyalty & Retention
              </h3>
            </div>

            <p className='text-gray-600 mb-6'>
              Keep clients coming back with automated loyalty programs that
              reward repeat business and incentivize regular appointments.
            </p>

            <div className='bg-gradient-to-br from-[#38b5ff]/10 to-[#3888ff]/5 p-4 rounded-xl mb-6'>
              <div className='grid grid-cols-3 gap-4 text-center'>
                {[
                  { metric: 'Retention Rate', value: '+35%' },
                  { metric: 'Client Value', value: '+42%' },
                  { metric: 'Reactivation', value: '+28%' },
                ].map((item, i) => (
                  <div key={i}>
                    <p className='text-gray-600 text-sm'>{item.metric}</p>
                    <p className='text-xl font-bold text-[#38b5ff]'>
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <ul className='space-y-2'>
              {[
                'Points-based or visit-based loyalty systems',
                'Automated birthday and anniversary rewards',
                'Tiered client status (Silver, Gold, Platinum)',
                'Digital punch cards for service packages',
              ].map((item, i) => (
                <li key={i} className='flex items-start space-x-2'>
                  <CheckCircle className='w-5 h-5 text-[#38b5ff] mt-0.5' />
                  <span className='text-gray-600'>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Analytics Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className='bg-white rounded-2xl p-8 shadow-md border border-gray-100 mb-16'
        >
          <div className='flex items-center justify-center mb-6 space-x-3'>
            <PieChart className='w-8 h-8 text-[#38b5ff]' />
            <h2 className='text-2xl md:text-3xl font-bold text-gray-800'>
              Client Insights Dashboard
            </h2>
          </div>

          <div className='flex flex-col md:flex-row items-center gap-8'>
            <div className='md:w-1/2'>
              <div className='bg-gradient-to-br from-[#38b5ff]/5 to-[#3888ff]/5 p-6 rounded-2xl'>
                <div className='grid grid-cols-2 gap-4'>
                  {[
                    {
                      label: 'Client Lifetime Value',
                      value: '$2,750',
                      icon: <Users className='w-5 h-5 text-[#38b5ff]' />,
                    },
                    {
                      label: 'Acquisition Cost',
                      value: '$127',
                      icon: <Target className='w-5 h-5 text-[#38b5ff]' />,
                    },
                    {
                      label: 'Retention Rate',
                      value: '76%',
                      icon: <Award className='w-5 h-5 text-[#38b5ff]' />,
                    },
                    {
                      label: 'Growth Rate',
                      value: '18%',
                      icon: <TrendingUp className='w-5 h-5 text-[#38b5ff]' />,
                    },
                  ].map((stat, i) => (
                    <div key={i} className='bg-white p-4 rounded-xl shadow-sm'>
                      <div className='flex items-center space-x-2 mb-2'>
                        {stat.icon}
                        <span className='text-sm text-gray-600'>
                          {stat.label}
                        </span>
                      </div>
                      <div className='text-2xl font-bold text-gray-800'>
                        {stat.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className='md:w-1/2'>
              <h3 className='text-xl font-semibold text-gray-800 mb-4'>
                Data-Driven Decision Making
              </h3>
              <p className='text-gray-600 mb-4'>
                Our CRM analytics provide deep insights into your client base,
                helping you make informed decisions about marketing, service
                offerings, and business growth.
              </p>
              <ul className='space-y-3'>
                {[
                  'Track revenue by client segment',
                  'Identify top-performing services',
                  'Monitor client acquisition and retention',
                  'Forecast future growth opportunities',
                  'Optimize marketing spend for maximum ROI',
                ].map((item, i) => (
                  <li key={i} className='flex items-start space-x-2'>
                    <CheckCircle className='w-5 h-5 text-[#38b5ff] mt-0.5' />
                    <span className='text-gray-600'>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className='bg-gradient-to-r from-[#38b5ff] to-[#3888ff] rounded-2xl p-8 shadow-lg text-center text-white'
        >
          <h2 className='text-2xl md:text-3xl font-bold mb-4'>
            Ready to Transform Your Client Relationships?
          </h2>
          <p className='mb-6 max-w-2xl mx-auto'>
            Get organized, gain valuable insights, and build stronger
            relationships with your clients through our intuitive CRM tools.
          </p>
          <button
            onClick={handleDemoClick}
            className='bg-white text-[#38b5ff] px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 shadow-md flex items-center mx-auto'
          >
            <span>Book a Demo</span>
            <ChevronRight className='ml-2 w-5 h-5' />
          </button>
        </motion.div>
      </section>
    </div>
  )
}

export default CRMTools
