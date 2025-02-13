import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { ArrowRight, Check, Info, Sparkles, Users, X, Zap } from 'lucide-react'
import React, { useState } from 'react'

const PlanComparison = () => {
  const [hoveredFeature, setHoveredFeature] = useState(null)

  const features = [
    {
      category: 'Core Features',
      items: [
        {
          name: 'Team Members',
          starter: '5 members',
          professional: '15 members',
          enterprise: 'Unlimited',
          info: 'Number of staff accounts that can be created',
        },
        {
          name: 'Appointment Scheduling',
          starter: 'Basic',
          professional: 'Advanced',
          enterprise: 'Advanced + Custom',
          info: 'Booking system capabilities and features',
        },
        {
          name: 'Client Database',
          starter: true,
          professional: true,
          enterprise: true,
          info: 'Store and manage client information',
        },
        {
          name: 'Automated Reminders',
          starter: 'Email only',
          professional: 'Email & SMS',
          enterprise: 'All channels',
          info: 'Automated appointment reminders',
        },
      ],
    },
    {
      category: 'AI Features',
      items: [
        {
          name: 'Virtual Assistant',
          starter: false,
          professional: true,
          enterprise: true,
          info: 'AI-powered virtual assistant for client communication',
        },
        {
          name: 'Custom AI Training',
          starter: false,
          professional: false,
          enterprise: true,
          info: 'Train AI on your specific business needs',
        },
        {
          name: 'Smart Analytics',
          starter: 'Basic',
          professional: 'Advanced',
          enterprise: 'Custom',
          info: 'AI-driven business insights and reporting',
        },
      ],
    },
    {
      category: 'Support & Training',
      items: [
        {
          name: 'Customer Support',
          starter: 'Email',
          professional: 'Priority',
          enterprise: '24/7 Premium',
          info: 'Available support channels and response times',
        },
        {
          name: 'Onboarding',
          starter: 'Self-service',
          professional: 'Guided',
          enterprise: 'Custom',
          info: 'Implementation and setup assistance',
        },
        {
          name: 'Training Resources',
          starter: 'Basic',
          professional: 'Advanced',
          enterprise: 'Custom',
          info: 'Access to training materials and resources',
        },
      ],
    },
  ]

  const PlanIcon = ({ plan }) => {
    const icons = {
      starter: Users,
      professional: Sparkles,
      enterprise: Zap,
    }
    const Icon = icons[plan.toLowerCase()]
    const isPopular = plan === 'Professional'

    return (
      <motion.div
        whileHover={{ scale: 1.05 }}
        className={`p-2 rounded-xl ${
          isPopular
            ? 'bg-gradient-to-br from-[#38b5ff] to-[#2da1e8] text-white'
            : 'bg-[#38b5ff]/10 text-[#38b5ff]'
        }`}
      >
        <Icon className='w-5 h-5' />
      </motion.div>
    )
  }

  const renderValue = (value) => {
    if (typeof value === 'boolean') {
      return value ? (
        <div className='flex items-center justify-center'>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className='w-8 h-8 flex items-center justify-center rounded-full bg-[#38b5ff]/10'
          >
            <Check className='w-4 h-4 text-[#38b5ff]' />
          </motion.div>
        </div>
      ) : (
        <div className='flex items-center justify-center'>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className='w-8 h-8 flex items-center justify-center rounded-full bg-gray-100'
          >
            <X className='w-4 h-4 text-gray-400' />
          </motion.div>
        </div>
      )
    }
    return (
      <motion.div
        whileHover={{ scale: 1.02 }}
        className='px-4 py-1 rounded-full bg-gradient-to-r from-gray-50 to-gray-100/50 text-gray-700 text-sm inline-block'
      >
        {value}
      </motion.div>
    )
  }

  return (
    <div className='max-w-7xl mx-auto px-4 py-16'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className='text-center mb-16'
      >
        <motion.div whileHover={{ scale: 1.05 }} className='inline-block'>
          <span className='px-6 py-2 rounded-full bg-[#38b5ff]/10 text-[#38b5ff] text-sm font-medium'>
            Compare Plans
          </span>
        </motion.div>
        <h2 className='text-4xl font-bold text-gray-900 mt-6 mb-4'>
          Find the Perfect Plan for Your Business
        </h2>
        <p className='text-gray-600 max-w-2xl mx-auto'>
          Compare our plans to find the best fit for your med spa's needs
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className='rounded-2xl border border-gray-200 overflow-hidden bg-white shadow-lg'
      >
        <div className='overflow-x-auto'>
          <table className='w-full'>
            <thead>
              <tr className='border-b border-gray-200'>
                <th className='py-6 px-6 text-left w-1/4'></th>
                {['Starter', 'Professional', 'Enterprise'].map((plan) => (
                  <th key={plan} className='py-6 px-6 w-1/4'>
                    <div className='flex flex-col items-center gap-4'>
                      <PlanIcon plan={plan} />
                      <span className='font-semibold text-gray-900'>
                        {plan}
                      </span>
                      {plan === 'Professional' && (
                        <div className='px-4 py-1 bg-gradient-to-r from-[#38b5ff] to-[#2da1e8] text-white text-xs font-medium rounded-full'>
                          Most Popular
                        </div>
                      )}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((category, categoryIndex) => (
                <React.Fragment key={category.category}>
                  <tr>
                    <td
                      colSpan={4}
                      className='py-6 px-6 text-left font-semibold text-gray-900 bg-gradient-to-r from-gray-50 to-white'
                    >
                      <span className='text-[#38b5ff]'>
                        {category.category}
                      </span>
                    </td>
                  </tr>
                  {category.items.map((feature, featureIndex) => (
                    <motion.tr
                      key={feature.name}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: (categoryIndex + featureIndex) * 0.1,
                      }}
                      className={`border-b border-gray-100 hover:bg-blue-50/5 transition-colors ${
                        hoveredFeature === feature.name ? 'bg-blue-50/5' : ''
                      }`}
                      onMouseEnter={() => setHoveredFeature(feature.name)}
                      onMouseLeave={() => setHoveredFeature(null)}
                    >
                      <td className='py-6 px-6'>
                        <div className='flex items-center gap-2'>
                          <span className='text-gray-700 font-medium'>
                            {feature.name}
                          </span>
                          {feature.info && (
                            <div className='relative group'>
                              <Info className='w-4 h-4 text-gray-400 cursor-help' />
                              <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                whileHover={{ opacity: 1, y: 0 }}
                                className='absolute left-full top-1/2 -translate-y-1/2 ml-2 w-64 p-3 bg-gray-900 text-white text-sm rounded-xl z-10'
                              >
                                {feature.info}
                                <div className='absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-gray-900 rotate-45' />
                              </motion.div>
                            </div>
                          )}
                        </div>
                      </td>
                      <td className='py-6 px-6 text-center'>
                        {renderValue(feature.starter)}
                      </td>
                      <td className='py-6 px-6 text-center bg-[#38b5ff]/5'>
                        {renderValue(feature.professional)}
                      </td>
                      <td className='py-6 px-6 text-center'>
                        {renderValue(feature.enterprise)}
                      </td>
                    </motion.tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className='mt-12 text-center'
      >
        <p className='text-gray-600 mb-6'>
          Not sure which plan is right for you? Let's find the perfect fit
          together.
        </p>
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className='inline-block'
        >
          <Button className='bg-gradient-to-r from-[#38b5ff] to-[#2da1e8] hover:opacity-90 shadow-lg shadow-[#38b5ff]/30 group'>
            Schedule a Demo
            <ArrowRight className='w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform' />
          </Button>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default PlanComparison
