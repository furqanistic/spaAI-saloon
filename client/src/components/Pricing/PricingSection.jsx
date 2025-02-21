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

// Updated pricing plans data
const PLANS = {
  growth: {
    plan: 'Growth-Touch',
    tagline: 'Automate & Optimize',
    description:
      'For med spas that need foundational automation to streamline bookings & client engagement.',
    price: 'Starting at $199/month',
    icon: Zap,
    features: [
      'All RadiantMD Core Features',
      'Unlimited Automations',
      'Google Review Booster',
      'Smart Lead Follow-Ups',
      'Comprehensive Client Database',
      'Basic Appointment Scheduling',
      'Client Engagement Tools',
    ],
  },
  scale: {
    plan: 'Scale-Touch',
    tagline: 'AI + Ads + Marketing Growth',
    description:
      'For med spas ready to scale with AI-driven marketing, client retargeting & expert ad management.',
    price: 'Custom Pricing',
    icon: Bot,
    popular: true,
    features: [
      'All Growth-Touch Features',
      'AI-Driven Marketing Automation',
      'Advanced Client Retargeting',
      'Expert Ad Management',
      'Enhanced Analytics Dashboard',
      'Marketing Campaign Tools',
      'Priority Support',
    ],
  },
  elite: {
    plan: 'Elite-Touch',
    tagline: 'Full AI + Human Sales & Reputation Management',
    description:
      'For med spas that want a fully automated, hands-free system with expert human support.',
    price: 'Custom Pricing',
    icon: Shield,
    features: [
      'All Scale-Touch Features',
      'Full AI Automation Suite',
      'Dedicated Account Manager',
      'Human Sales Support',
      'Reputation Management',
      'Custom Integration Options',
      'White-Label Solutions',
      '24/7 Priority Support',
    ],
  },
}

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
              <div className='flex items-center'>
                <span className='text-lg font-semibold text-gray-900'>
                  {price}
                </span>
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
                Request Pricing
                <ArrowRight className='w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform' />
              </Button>
            </motion.div>
          </CardContent>
        </div>
      </Card>
    </motion.div>
  )
}

const PricingSection = () => {
  const plans = [
    {
      ...PLANS.growth,
    },
    {
      ...PLANS.scale,
    },
    {
      ...PLANS.elite,
    },
  ]

  return (
    <div className='mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8'>
      {plans.map((plan) => (
        <PricingCard key={plan.plan} {...plan} />
      ))}
    </div>
  )
}

export default PricingSection
