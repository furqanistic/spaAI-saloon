import { motion } from 'framer-motion'
import {
  BarChart,
  CheckCircle,
  ChevronRight,
  CreditCard,
  DollarSign,
  FileText,
  Gift,
  LockIcon,
  Repeat,
  Shield,
  Tag,
  Wallet,
} from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../components/Layout/Navbar'

const PaymentProcessing = () => {
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
      title: 'Integrated Payment Gateways',
      description: 'Native support for Stripe, PayPal, and Square.',
      details: 'One-click payments for invoices and packages.',
      icon: <CreditCard className='w-6 h-6 text-[#38b5ff]' />,
    },
    {
      title: 'Membership & Subscription Plans',
      description: 'Recurring billing for memberships (e.g., monthly facials).',
      details: 'Automated payment reminders.',
      icon: <Repeat className='w-6 h-6 text-[#38b5ff]' />,
    },
    {
      title: 'Invoicing & Receipts',
      description: 'Generate professional invoices and receipts.',
      details: 'Sync with QuickBooks or Xero for accounting.',
      icon: <FileText className='w-6 h-6 text-[#38b5ff]' />,
    },
    {
      title: 'Revenue Tracking',
      description:
        'Analytics for tracking revenue from different services or campaigns.',
      details: 'Make data-driven decisions to boost your bottom line.',
      icon: <BarChart className='w-6 h-6 text-[#38b5ff]' />,
    },
  ]

  // Payment methods
  const paymentMethods = [
    { name: 'Credit Cards', icon: '/credit-card.png' },
    { name: 'PayPal', icon: '/paypal.png' },
    { name: 'Apple Pay', icon: '/apple-pay.png' },
    { name: 'Google Pay', icon: '/google-pay.png' },
    { name: 'Bank Transfer', icon: '/bank.png' },
    { name: 'Venmo', icon: '/venmo.png' },
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
            Payment Processing & Financial Tools
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='text-gray-600 max-w-3xl mx-auto text-lg'
          >
            Streamline your med spa's financial operations with secure payment
            processing, subscription management, and insightful revenue
            tracking.
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

        {/* Subscription Management Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className='bg-white rounded-2xl p-8 shadow-md border border-gray-100 mb-16'
        >
          <div className='flex items-center justify-center mb-6 space-x-3'>
            <Repeat className='w-8 h-8 text-[#38b5ff]' />
            <h2 className='text-2xl md:text-3xl font-bold text-gray-800'>
              Subscription & Membership Management
            </h2>
          </div>

          <div className='flex flex-col md:flex-row items-center gap-8'>
            <div className='md:w-1/2'>
              <div className='bg-gradient-to-br from-[#38b5ff]/10 to-[#3888ff]/5 p-6 rounded-2xl'>
                <div className='bg-white rounded-xl shadow-sm overflow-hidden'>
                  <div className='bg-[#38b5ff] text-white p-4'>
                    <h3 className='text-lg font-semibold'>
                      Platinum Membership
                    </h3>
                    <p className='text-white/80 text-sm'>
                      Monthly facial treatment + 15% off all products
                    </p>
                  </div>
                  <div className='p-4'>
                    <div className='flex justify-between items-center mb-4'>
                      <span className='text-gray-600'>Monthly Price</span>
                      <span className='text-xl font-bold text-gray-800'>
                        $129.99
                      </span>
                    </div>
                    <div className='flex justify-between items-center mb-4'>
                      <span className='text-gray-600'>Next Billing Date</span>
                      <span className='text-gray-800'>April 15, 2025</span>
                    </div>
                    <div className='flex justify-between items-center mb-4'>
                      <span className='text-gray-600'>Payment Method</span>
                      <div className='flex items-center space-x-2'>
                        <CreditCard className='w-4 h-4 text-gray-600' />
                        <span className='text-gray-800'>•••• 4582</span>
                      </div>
                    </div>
                    <div className='pt-4 border-t border-gray-100'>
                      <div className='flex justify-between'>
                        <button className='text-[#38b5ff] text-sm font-medium'>
                          Pause Membership
                        </button>
                        <button className='text-[#38b5ff] text-sm font-medium'>
                          Update Payment
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='md:w-1/2'>
              <h3 className='text-xl font-semibold text-gray-800 mb-4'>
                Simplify Recurring Revenue
              </h3>
              <p className='text-gray-600 mb-6'>
                Our membership management system helps you establish predictable
                revenue streams while providing value to your clients with
                convenient subscription options.
              </p>
              <ul className='space-y-3'>
                {[
                  'Create custom membership tiers with different benefits',
                  'Process recurring payments automatically',
                  'Allow clients to manage their own subscriptions',
                  'Send automated renewal reminders',
                  'Offer flexible billing cycles (monthly, quarterly, annually)',
                  'Track retention rates and membership performance',
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

        {/* Security & Payment Methods Section */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16'>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className='bg-white rounded-2xl p-6 shadow-md border border-gray-100'
          >
            <div className='flex items-center mb-4 space-x-3'>
              <Shield className='w-6 h-6 text-[#38b5ff]' />
              <h3 className='text-xl font-semibold text-gray-800'>
                Secure & Compliant
              </h3>
            </div>

            <p className='text-gray-600 mb-6'>
              Our payment processing solutions prioritize security and
              compliance, giving you and your clients peace of mind with every
              transaction.
            </p>

            <div className='grid grid-cols-2 gap-4 mb-6'>
              {[
                {
                  title: 'PCI Compliant',
                  icon: <LockIcon className='w-5 h-5 text-[#38b5ff]' />,
                },
                {
                  title: 'HIPAA Ready',
                  icon: <Shield className='w-5 h-5 text-[#38b5ff]' />,
                },
                {
                  title: 'Fraud Protection',
                  icon: <Shield className='w-5 h-5 text-[#38b5ff]' />,
                },
                {
                  title: 'Data Encryption',
                  icon: <LockIcon className='w-5 h-5 text-[#38b5ff]' />,
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className='bg-gradient-to-br from-[#38b5ff]/5 to-[#3888ff]/5 p-3 rounded-xl flex items-center space-x-2'
                >
                  {item.icon}
                  <span className='text-gray-700 font-medium'>
                    {item.title}
                  </span>
                </div>
              ))}
            </div>

            <div className='p-4 bg-gradient-to-r from-[#38b5ff]/10 to-[#3888ff]/10 rounded-xl'>
              <p className='text-center text-gray-700 font-medium'>
                "Security isn't just a feature—it's the foundation of our
                payment processing system."
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className='bg-white rounded-2xl p-6 shadow-md border border-gray-100'
          >
            <div className='flex items-center mb-4 space-x-3'>
              <Wallet className='w-6 h-6 text-[#38b5ff]' />
              <h3 className='text-xl font-semibold text-gray-800'>
                Flexible Payment Options
              </h3>
            </div>

            <p className='text-gray-600 mb-6'>
              Provide your clients with a variety of convenient payment methods
              to enhance their experience and reduce payment friction.
            </p>

            <div className='grid grid-cols-3 gap-4 mb-6'>
              {[
                {
                  name: 'Credit Card',
                  icon: <CreditCard className='w-6 h-6 text-gray-600' />,
                },
                {
                  name: 'Digital Wallet',
                  icon: <Wallet className='w-6 h-6 text-gray-600' />,
                },
                {
                  name: 'Bank Transfer',
                  icon: <DollarSign className='w-6 h-6 text-gray-600' />,
                },
                {
                  name: 'Gift Cards',
                  icon: <Gift className='w-6 h-6 text-gray-600' />,
                },
                {
                  name: 'Promotions',
                  icon: <Tag className='w-6 h-6 text-gray-600' />,
                },
                {
                  name: 'Packages',
                  icon: <FileText className='w-6 h-6 text-gray-600' />,
                },
              ].map((method, i) => (
                <div
                  key={i}
                  className='flex flex-col items-center justify-center p-3 rounded-xl border border-gray-100 hover:border-[#38b5ff]/20 hover:shadow-sm transition-all duration-300'
                >
                  {method.icon}
                  <span className='text-xs text-gray-600 mt-2'>
                    {method.name}
                  </span>
                </div>
              ))}
            </div>

            <div className='bg-gray-50 p-4 rounded-xl'>
              <h4 className='font-medium text-gray-800 mb-2'>
                Payment Gateway Integrations
              </h4>
              <div className='flex flex-wrap gap-3 justify-center'>
                {[
                  'Stripe',
                  'PayPal',
                  'Square',
                  'Authorize.net',
                  'Braintree',
                ].map((gateway, i) => (
                  <span
                    key={i}
                    className='px-3 py-1 bg-white rounded-full text-sm text-gray-600 border border-gray-100'
                  >
                    {gateway}
                  </span>
                ))}
              </div>
            </div>
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
            Ready to Streamline Your Finances?
          </h2>
          <p className='mb-6 max-w-2xl mx-auto'>
            Simplify payments, automate billing, and gain valuable financial
            insights with our integrated payment processing system.
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

export default PaymentProcessing
