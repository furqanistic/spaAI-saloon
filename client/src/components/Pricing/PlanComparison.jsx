import { Button } from '@/components/ui/button'
import { ArrowRight, Bot, Check, Info, Shield, X, Zap } from 'lucide-react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router'

const PlanComparison = () => {
  const [hoveredFeature, setHoveredFeature] = useState(null)
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/demo')
  }
  // Updated plans to match new naming and pricing
  const plans = [
    {
      name: 'Premium',
      icon: Shield,
      price: '$897',
      popular: false,
    },
    {
      name: 'Pro',
      icon: Bot,
      price: '$547',
      popular: true,
    },
    {
      name: 'Core',
      icon: Zap,
      price: '$397',
      popular: false,
    },
  ]

  const features = [
    {
      category: 'Core Features',
      items: [
        {
          name: 'RadiantMD Core Features',
          core: true,
          pro: true,
          premium: true,
          info: 'Access to all essential RadiantMD platform features',
        },
        {
          name: 'Unlimited Automations',
          core: true,
          pro: true,
          premium: true,
          info: 'Create unlimited automated workflows and sequences',
        },
        {
          name: 'Google Review Booster',
          core: true,
          pro: true,
          premium: true,
          info: 'Automated system to increase Google reviews',
        },
        {
          name: 'Smart Lead Follow-Ups',
          core: true,
          pro: true,
          premium: true,
          info: 'Automated lead nurturing and follow-up sequences',
        },
        {
          name: 'Client Database',
          core: true,
          pro: true,
          premium: true,
          info: 'Comprehensive client management system',
        },
      ],
    },
    {
      category: 'Advanced Features',
      items: [
        {
          name: 'AI-Driven Marketing',
          core: false,
          pro: true,
          premium: true,
          info: 'Advanced AI marketing automation and optimization',
        },
        {
          name: 'Expert Ad Management',
          core: false,
          pro: true,
          premium: true,
          info: 'Professional management of advertising campaigns',
        },
        {
          name: 'Client Retargeting',
          core: 'Basic',
          pro: 'Advanced',
          premium: 'Full Suite',
          info: 'Automated client re-engagement strategies',
        },
        {
          name: 'Patient Revival System',
          core: false,
          pro: true,
          premium: true,
          info: 'AI-powered system to reactivate dormant patients',
        },
        {
          name: 'Human Sales Support',
          core: false,
          pro: false,
          premium: true,
          info: 'Dedicated human sales support team',
        },
      ],
    },
    {
      category: 'Support & Management',
      items: [
        {
          name: 'Reputation Management',
          core: 'Basic',
          pro: 'Advanced',
          premium: 'Full Service',
          info: 'Comprehensive reputation management system',
        },
        {
          name: 'SEO Boost',
          core: false,
          pro: false,
          premium: true,
          info: 'Advanced SEO optimization for your beauty practice',
        },
        {
          name: 'Support Level',
          core: 'Standard',
          pro: 'Priority',
          premium: '24/7 Premium',
          info: 'Level of customer support provided',
        },
        {
          name: 'Account Management',
          core: 'Self-service',
          pro: 'Guided',
          premium: 'Dedicated Manager',
          info: 'Type of account management provided',
        },
      ],
    },
  ]

  const PlanIcon = ({ plan }) => {
    const Icon = plan.icon
    return (
      <div
        className={`p-2 rounded-xl transition-transform hover:scale-105 ${
          plan.popular
            ? 'bg-gradient-to-br from-[#38b5ff] to-[#2da1e8] text-white'
            : 'bg-[#38b5ff]/10 text-[#38b5ff]'
        }`}
      >
        <Icon className='w-5 h-5' />
      </div>
    )
  }

  const renderValue = (value) => {
    if (typeof value === 'boolean') {
      return value ? (
        <div className='flex items-center justify-center'>
          <div className='w-8 h-8 flex items-center justify-center rounded-full bg-[#38b5ff]/10 transition-transform hover:scale-105'>
            <Check className='w-4 h-4 text-[#38b5ff]' />
          </div>
        </div>
      ) : (
        <div className='flex items-center justify-center'>
          <div className='w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 transition-transform hover:scale-105'>
            <X className='w-4 h-4 text-gray-400' />
          </div>
        </div>
      )
    }
    return (
      <div className='px-4 py-1 rounded-full bg-gradient-to-r from-gray-50 to-gray-100/50 text-gray-700 text-sm inline-block transition-transform hover:scale-105'>
        {value}
      </div>
    )
  }

  return (
    <div className='max-w-7xl mx-auto px-4 py-16'>
      <div className='text-center mb-16'>
        <div className='inline-block'>
          <span className='px-6 py-2 rounded-full bg-[#38b5ff]/10 text-[#38b5ff] text-sm font-medium'>
            Compare Plans
          </span>
        </div>
        <h2 className='text-4xl font-bold text-gray-900 mt-6 mb-4'>
          Choose Your Growth Path
        </h2>
        <p className='text-gray-600 max-w-2xl mx-auto'>
          Find the perfect plan for your beauty practice's needs. All plans
          include our core features.
        </p>
      </div>

      <div className='rounded-2xl border border-gray-200 overflow-hidden bg-white shadow-lg'>
        <div className='overflow-x-auto'>
          <table className='w-full'>
            <thead>
              <tr className='border-b border-gray-200'>
                <th className='py-6 px-6 text-left w-1/4'></th>
                {plans.map((plan) => (
                  <th key={plan.name} className='py-6 px-6 w-1/4'>
                    <div className='flex flex-col items-center gap-4'>
                      <PlanIcon plan={plan} />
                      <div className='flex flex-col items-center'>
                        <span className='font-semibold text-gray-900'>
                          {plan.name}
                        </span>
                        <span className='text-lg font-bold text-gray-900 mt-1'>
                          {plan.price}
                          <span className='text-sm font-normal text-gray-600'>
                            {' '}
                            / month
                          </span>
                        </span>
                      </div>
                      {plan.popular && (
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
              {features.map((category) => (
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
                  {category.items.map((feature) => (
                    <tr
                      key={feature.name}
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
                              <div className='hidden group-hover:block absolute left-full top-1/2 -translate-y-1/2 ml-2 w-64 p-3 bg-gray-900 text-white text-sm rounded-xl z-10'>
                                {feature.info}
                                <div className='absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-gray-900 rotate-45' />
                              </div>
                            </div>
                          )}
                        </div>
                      </td>
                      <td className='py-6 px-6 text-center'>
                        {renderValue(feature.premium)}
                      </td>
                      <td className='py-6 px-6 text-center bg-[#38b5ff]/5'>
                        {renderValue(feature.pro)}
                      </td>
                      <td className='py-6 px-6 text-center'>
                        {renderValue(feature.core)}
                      </td>
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className='mt-12 text-center'>
        <p className='text-gray-600 mb-6'>
          Not sure which plan is right for you? Let's find the perfect fit
          together.
        </p>
        <div className='flex gap-4 justify-center'>
          <Button
            onClick={handleClick}
            variant='outline'
            className='border-[#38b5ff] text-[#38b5ff] hover:bg-[#38b5ff]/5 group'
          >
            Request Demo
            <ArrowRight className='w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform' />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default PlanComparison
