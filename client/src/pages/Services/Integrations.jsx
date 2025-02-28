import { motion } from 'framer-motion'
import {
  CheckCircle,
  ChevronRight,
  CreditCard,
  Globe,
  Link,
  Mail,
  MessageCircle,
  RadioTower,
  Settings,
  Share2,
  ShoppingBag,
  Zap,
} from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../components/Layout/Navbar'

const Integrations = () => {
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
      title: 'Native Integrations',
      description: 'Stripe, Mailchimp, Twilio, QuickBooks, Google Ads, etc.',
      details:
        'Connect seamlessly with popular services with just a few clicks.',
      icon: <Link className='w-6 h-6 text-[#38b5ff]' />,
    },
    {
      title: 'Third-Party Integrations (via Zapier/API)',
      description:
        'Shopify, WooCommerce, Zapier, Make (Integromat), EHR/EMR systems.',
      details: 'Expand functionality using third-party connections.',
      icon: <Settings className='w-6 h-6 text-[#38b5ff]' />,
    },
    {
      title: 'Social Media Platforms',
      description:
        'Instagram, TikTok, Facebook, YouTube for lead generation and engagement.',
      details:
        'Connect and manage your social presence directly from the platform.',
      icon: <Share2 className='w-6 h-6 text-[#38b5ff]' />,
    },
    {
      title: 'API Access',
      description: 'Build custom integrations with our robust API.',
      details: 'Developer-friendly documentation and support for custom needs.',
      icon: <RadioTower className='w-6 h-6 text-[#38b5ff]' />,
    },
  ]

  // Integration categories
  const integrationCategories = [
    {
      category: 'Payment Processing',
      icon: <CreditCard className='w-6 h-6 text-[#38b5ff]' />,
      integrations: [
        'Stripe',
        'PayPal',
        'Square',
        'Authorize.net',
        'Braintree',
      ],
    },
    {
      category: 'Marketing & Email',
      icon: <Mail className='w-6 h-6 text-[#38b5ff]' />,
      integrations: [
        'Mailchimp',
        'ActiveCampaign',
        'HubSpot',
        'Constant Contact',
        'Klaviyo',
      ],
    },
    {
      category: 'Communication',
      icon: <MessageCircle className='w-6 h-6 text-[#38b5ff]' />,
      integrations: [
        'Twilio',
        'WhatsApp Business',
        'Intercom',
        'SendGrid',
        'Vonage',
      ],
    },
    {
      category: 'E-Commerce',
      icon: <ShoppingBag className='w-6 h-6 text-[#38b5ff]' />,
      integrations: [
        'Shopify',
        'WooCommerce',
        'BigCommerce',
        'Magento',
        'Squarespace',
      ],
    },
    {
      category: 'Automation',
      icon: <Zap className='w-6 h-6 text-[#38b5ff]' />,
      integrations: [
        'Zapier',
        'Make (Integromat)',
        'IFTTT',
        'Automate.io',
        'Workato',
      ],
    },
    {
      category: 'Website & Ads',
      icon: <Globe className='w-6 h-6 text-[#38b5ff]' />,
      integrations: [
        'Google Ads',
        'Facebook Ads',
        'WordPress',
        'Wix',
        'Google Analytics',
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
            Integrations
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='text-gray-600 max-w-3xl mx-auto text-lg'
          >
            Connect your beauty practice platform with your favorite tools and
            services to create a seamless tech ecosystem that powers your
            business.
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

        {/* Integration Categories */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className='bg-white rounded-2xl p-6 sm:p-8 shadow-md border border-gray-100 mb-16'
        >
          <h2 className='text-2xl font-bold text-gray-800 mb-8 text-center'>
            Connect With Your Favorite Tools
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {integrationCategories.map((category, index) => (
              <div
                key={index}
                className='border border-gray-100 rounded-xl p-5 hover:shadow-md transition-all duration-300 hover:border-[#38b5ff]/20'
              >
                <div className='flex items-center space-x-3 mb-4'>
                  <div className='bg-gradient-to-br from-[#38b5ff]/10 to-[#3888ff]/5 p-2 rounded-lg'>
                    {category.icon}
                  </div>
                  <h3 className='font-semibold text-gray-800'>
                    {category.category}
                  </h3>
                </div>

                <div className='flex flex-wrap gap-2'>
                  {category.integrations.map((integration, i) => (
                    <span
                      key={i}
                      className='text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full hover:bg-[#38b5ff]/10 hover:text-[#38b5ff] transition-colors duration-300'
                    >
                      {integration}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Integration Benefits */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-16'>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className='bg-white rounded-2xl p-6 shadow-md border border-gray-100'
          >
            <h3 className='text-xl font-semibold text-gray-800 mb-4'>
              Why Integrate?
            </h3>

            <ul className='space-y-3'>
              {[
                'Eliminate double data entry across systems',
                'Create automated workflows between tools',
                'Maintain a single source of truth for client data',
                'Reduce manual tasks and save staff time',
                'Improve accuracy by reducing human error',
                'Enable real-time data syncing across your tech stack',
              ].map((benefit, i) => (
                <li key={i} className='flex items-start space-x-2'>
                  <CheckCircle className='w-5 h-5 text-[#38b5ff] mt-0.5' />
                  <span className='text-gray-600'>{benefit}</span>
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
            <h3 className='text-xl font-semibold text-gray-800 mb-4'>
              Integration Support
            </h3>

            <div className='space-y-6'>
              <p className='text-gray-600'>
                Our team provides comprehensive support to ensure your
                integrations work seamlessly with your existing systems.
              </p>

              <div className='grid grid-cols-2 gap-4'>
                {[
                  {
                    title: 'Setup Assistance',
                    description: 'Help connecting your accounts',
                  },
                  {
                    title: 'Data Migration',
                    description: 'Transfer your existing client data',
                  },
                  {
                    title: 'Custom Webhooks',
                    description: 'Build custom automation triggers',
                  },
                  {
                    title: 'Integration Testing',
                    description: 'Ensure everything works properly',
                  },
                ].map((service, i) => (
                  <div
                    key={i}
                    className='bg-gradient-to-br from-[#38b5ff]/5 to-[#3888ff]/5 p-3 rounded-lg'
                  >
                    <h4 className='font-medium text-gray-800 text-sm'>
                      {service.title}
                    </h4>
                    <p className='text-xs text-gray-500'>
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className='flex justify-center'>
                <span className='text-sm text-[#38b5ff] font-medium'>
                  New integrations added regularly based on client feedback
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className='bg-gradient-to-r from-[#38b5ff] to-[#3888ff] rounded-2xl p-6 shadow-lg text-center text-white'
        >
          <h2 className='text-2xl font-bold mb-4'>
            Ready to Connect Your Tools?
          </h2>
          <p className='mb-6 max-w-2xl mx-auto'>
            Create a seamless tech ecosystem for your beauty practice with our
            extensive integration options.
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

export default Integrations
