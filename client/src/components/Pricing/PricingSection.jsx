import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  Bot,
  Building2,
  Calendar,
  Check,
  Send,
  Shield,
  Star,
  Users,
  Zap,
} from 'lucide-react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router'

// Updated pricing plans data
const PLANS = {
  premium: {
    plan: 'Premium',
    tagline: 'We Handle Everything For You',
    description:
      'For med spas that want a fully automated, hands-free system with expert human support.',
    price: '$897',
    period: '/ month',
    icon: Shield,
    features: [
      'Everything in Pro, PLUS:',
      'Unlimited Virtual Sales Team',
      'High-Priority Support & Strategy Calls',
      'Advanced Reputation & SEO Boost',
      'White-Label Solutions',
      '24/7 Priority Support',
      'Dedicated Account Manager',
      'Human Sales Support',
    ],
  },
  pro: {
    plan: 'Pro',
    tagline: 'Grow Faster with Expert Ads & AI',
    description:
      'For med spas ready to scale with AI-driven marketing, client retargeting & expert ad management.',
    price: '$547',
    period: '/ month',
    icon: Bot,
    popular: true,
    features: [
      'Everything in Core, PLUS:',
      'Expert-Managed Ads',
      'Smart Client Campaigns',
      'AI Patient Revival System',
      'Enhanced Analytics Dashboard',
      'Marketing Campaign Tools',
      'Priority Support',
      'Advanced Client Retargeting',
    ],
  },
  core: {
    plan: 'Core',
    tagline: 'Automate the Basics',
    description:
      'For med spas that need foundational automation to streamline bookings & client engagement.',
    price: '$397',
    period: '/ month',
    icon: Zap,
    features: [
      'Online Booking System',
      'Appointment Confirmations & Reminders',
      'AI-Powered Lead & Client Follow-Ups',
      'Google Review Requests',
      'Comprehensive Client Database',
      'Basic Appointment Scheduling',
      'Client Engagement Tools',
      'Unlimited Automations',
    ],
  },
}

const SHARED_FEATURES = [
  'All RadiantMD Core Features',
  'Unlimited Automations',
  'Unlimited Observer Seats',
  'Single Sign-on',
  'Full Integration Library',
  'Unlimited Docs',
]

const FeatureIcon = ({ icon: Icon, popular }) => (
  <motion.div
    whileHover={{ scale: 1.1 }}
    className={`p-2 rounded-xl ${
      popular
        ? 'bg-gradient-to-br from-[#38b5ff] to-[#2da1e8] text-white'
        : 'bg-[#38b5ff]/10 text-[#38b5ff]'
    }`}
  >
    <Icon className='h-6 w-6' />
  </motion.div>
)

const PricingCard = ({
  plan,
  tagline,
  description,
  price,
  period,
  features = [],
  popular = false,
  icon = Users,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className='w-full'
    >
      <Card
        className={`relative h-full backdrop-blur-sm ${
          popular
            ? 'bg-gradient-to-b from-white to-[#38b5ff]/5 border-[#38b5ff] border-2 shadow-xl shadow-[#38b5ff]/20'
            : 'bg-white/90'
        }`}
      >
        {popular && (
          <motion.div
            className='absolute -top-3 right-4'
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            <Badge className='bg-gradient-to-r from-[#38b5ff] to-[#2da1e8] shadow-lg'>
              <Star className='w-3 h-3 mr-1' /> Most Popular
            </Badge>
          </motion.div>
        )}

        <div className='flex flex-col h-full'>
          <CardHeader className='space-y-4'>
            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-3'>
                <FeatureIcon icon={icon} popular={popular} />
                <div>
                  <CardTitle
                    className={`text-xl font-bold ${
                      popular ? 'text-[#38b5ff]' : 'text-gray-700'
                    }`}
                  >
                    {plan}
                  </CardTitle>
                  <p className='text-sm text-gray-600 mt-1'>{tagline}</p>
                </div>
              </div>
            </div>

            <div className='space-y-2'>
              <div className='flex items-baseline'>
                <span className='text-3xl font-bold text-gray-900'>
                  {price}
                </span>
                <span className='text-lg text-gray-600'>{period}</span>
              </div>
              <p className='text-sm text-gray-600'>{description}</p>
            </div>
          </CardHeader>

          <CardContent className='flex flex-col flex-grow justify-between space-y-6'>
            <div className='space-y-3'>
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className='flex items-start gap-3 group'
                >
                  <div className='rounded-full p-1 bg-[#38b5ff]/10 group-hover:bg-[#38b5ff]/20 transition-colors'>
                    <Check className='h-4 w-4 text-[#38b5ff]' />
                  </div>
                  <span className='text-gray-600 group-hover:text-gray-900 transition-colors'>
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                className={`w-full group ${
                  popular
                    ? 'bg-gradient-to-r from-[#38b5ff] to-[#2da1e8] hover:opacity-90 shadow-lg shadow-[#38b5ff]/30'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Free Trial
                <ArrowRight className='w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform' />
              </Button>
            </motion.div>
          </CardContent>
        </div>
      </Card>
    </motion.div>
  )
}

const SharedFeatures = () => {
  return (
    <div className='mt-20 w-full max-w-6xl mx-auto px-4'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className='text-center mb-12'
      >
        <h2 className='text-3xl font-bold text-gray-900 mb-4'>
          Included in All Plans
        </h2>
        <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
          The same set of core features no matter how you manage Customer
          Success.
        </p>
      </motion.div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {SHARED_FEATURES.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className='flex items-center gap-3 p-4 rounded-lg bg-white shadow-sm border border-gray-100'
          >
            <div className='rounded-full p-1 bg-[#38b5ff]/10'>
              <Check className='h-5 w-5 text-[#38b5ff]' />
            </div>
            <span className='text-gray-700 font-medium'>{feature}</span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

const PricingSection = () => {
  const navigate = useNavigate()

  // Order from highest price (left) to lowest price (right)
  const plans = [
    {
      ...PLANS.premium,
    },
    {
      ...PLANS.pro,
    },
    {
      ...PLANS.core,
    },
  ]

  return (
    <>
      <div className='mt-10 mb-16 text-center'>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='text-4xl md:text-5xl font-bold mb-6'
        >
          Three Plans, One Platform.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className='text-xl text-gray-600 max-w-3xl mx-auto'
        >
          We've created RadiantMD plans to scale based on your needs, with the
          same set of features no matter how you manage Customer Success.
        </motion.p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8'>
        {plans.map((plan) => (
          <PricingCard key={plan.plan} {...plan} />
        ))}
      </div>

      <SharedFeatures />
    </>
  )
}

export default PricingSection
