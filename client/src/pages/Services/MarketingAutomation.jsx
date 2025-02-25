import { motion } from 'framer-motion'
import {
  BarChart,
  Calendar,
  CheckCircle,
  ChevronRight,
  Gift,
  Globe,
  MessageSquare,
  Star,
  Target,
  ThumbsUp,
  TrendingUp,
  Zap,
} from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../components/Layout/Navbar'

const MarketingAutomation = () => {
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
      title: 'AI-Powered Content Calendar',
      description:
        'Pre-scheduled posts for social media, email, and SMS campaigns.',
      details: 'Seasonal and holiday-specific content ideas.',
      icon: <Calendar className='w-6 h-6 text-[#38b5ff]' />,
    },
    {
      title: 'Dynamic Ads Integration',
      description:
        'Sync with Facebook Ads, Google Ads, and TikTok Ads to track ROI.',
      details: 'Retargeting campaigns for website visitors or abandoned leads.',
      icon: <Target className='w-6 h-6 text-[#38b5ff]' />,
    },
    {
      title: 'Review Generation',
      description:
        'Automated requests for Google Reviews, Yelp, or Trustpilot after appointments.',
      details: 'Incentivize reviews with discounts or loyalty points.',
      icon: <Star className='w-6 h-6 text-[#38b5ff]' />,
    },
    {
      title: 'Referral Program Automation',
      description: 'Encourage clients to refer friends with automated rewards.',
      details: 'Track and manage referrals with ease.',
      icon: <Gift className='w-6 h-6 text-[#38b5ff]' />,
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
            Marketing Automation
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='text-gray-600 max-w-3xl mx-auto text-lg'
          >
            Streamline your marketing efforts, increase brand awareness, and
            drive more bookings with our intelligent automation tools.
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

        {/* Marketing Channels Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className='bg-white rounded-2xl p-8 shadow-md border border-gray-100 mb-16'
        >
          <h2 className='text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center'>
            Streamline Your Marketing Across All Channels
          </h2>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {[
              {
                channel: 'Social Media',
                description:
                  'Scheduled posts, engagement monitoring, and audience targeting',
                icon: <Globe className='w-10 h-10 text-[#38b5ff]' />,
              },
              {
                channel: 'Email Marketing',
                description:
                  'Personalized campaigns, A/B testing, and performance analytics',
                icon: <MessageSquare className='w-10 h-10 text-[#38b5ff]' />,
              },
              {
                channel: 'SMS Campaigns',
                description:
                  'Time-sensitive offers, appointment reminders, and quick promotions',
                icon: <Zap className='w-10 h-10 text-[#38b5ff]' />,
              },
              {
                channel: 'Reputation Management',
                description:
                  'Review generation, monitoring, and response automation',
                icon: <ThumbsUp className='w-10 h-10 text-[#38b5ff]' />,
              },
              {
                channel: 'Paid Advertising',
                description:
                  'Campaign management, retargeting, and conversion tracking',
                icon: <Target className='w-10 h-10 text-[#38b5ff]' />,
              },
              {
                channel: 'Performance Analytics',
                description:
                  'ROI tracking, campaign insights, and optimization recommendations',
                icon: <BarChart className='w-10 h-10 text-[#38b5ff]' />,
              },
            ].map((channel, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className='bg-gradient-to-br from-[#38b5ff]/5 to-[#3888ff]/5 p-6 rounded-xl border border-gray-100 hover:border-[#38b5ff]/20 hover:shadow-md transition-all duration-300 group'
              >
                <div className='flex items-center justify-center mb-4'>
                  <div className='bg-white p-3 rounded-full shadow-sm group-hover:shadow-md transition-all duration-300'>
                    {channel.icon}
                  </div>
                </div>
                <h3 className='text-lg font-semibold text-gray-800 mb-2 text-center'>
                  {channel.channel}
                </h3>
                <p className='text-gray-600 text-center text-sm'>
                  {channel.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ROI Benefits Section */}
        <div className='bg-white rounded-2xl p-8 shadow-md border border-gray-100 mb-16'>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className='text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center'
          >
            Marketing Automation ROI
          </motion.h2>

          <div className='flex flex-col md:flex-row items-center gap-8'>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className='md:w-1/2'
            >
              <div className='bg-gradient-to-br from-[#38b5ff]/10 to-[#3888ff]/5 rounded-2xl p-6'>
                <div className='flex items-center justify-center'>
                  <TrendingUp className='w-20 h-20 text-[#38b5ff]' />
                </div>

                <div className='mt-6 space-y-4'>
                  {[
                    {
                      metric: 'Marketing efficiency',
                      value: '67% improvement',
                    },
                    {
                      metric: 'Client acquisition cost',
                      value: '42% reduction',
                    },
                    {
                      metric: 'Campaign response rates',
                      value: '56% increase',
                    },
                    { metric: 'Staff time saved', value: '15+ hours/week' },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className='flex justify-between items-center bg-white p-3 rounded-lg shadow-sm'
                    >
                      <span className='font-medium text-gray-700'>
                        {item.metric}
                      </span>
                      <span className='font-semibold text-[#38b5ff]'>
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className='md:w-1/2'
            >
              <h3 className='text-xl font-semibold text-gray-800 mb-4'>
                Achieve More With Less Effort
              </h3>
              <ul className='space-y-4'>
                {[
                  'Set it and forget it marketing campaigns',
                  'Consistent brand messaging across all platforms',
                  'Data-driven optimization for maximum ROI',
                  'Personalized client journeys at scale',
                  'Automated cross-selling and upselling',
                  'Seasonal campaign management without manual intervention',
                ].map((benefit, i) => (
                  <li key={i} className='flex items-start space-x-2'>
                    <CheckCircle className='w-5 h-5 text-[#38b5ff] mt-0.5' />
                    <span className='text-gray-600'>{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className='bg-gradient-to-r from-[#38b5ff] to-[#3888ff] rounded-2xl p-8 shadow-lg text-center text-white'
        >
          <h2 className='text-2xl md:text-3xl font-bold mb-4'>
            Ready to Automate Your Marketing?
          </h2>
          <p className='mb-6 max-w-2xl mx-auto'>
            Stop wasting time on manual marketing tasks. Let our automation
            platform do the heavy lifting while you focus on growing your
            business.
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

export default MarketingAutomation
