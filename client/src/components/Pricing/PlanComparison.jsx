import { Button } from '@/components/ui/button'
import { ArrowRight, Bot, Check, Info, Shield, X, Zap } from 'lucide-react'
import React, { useState } from 'react'

const PlanComparison = () => {
  const [hoveredFeature, setHoveredFeature] = useState(null)

  const features = [
    {
      category: 'Core Features',
      items: [
        {
          name: 'RadiantMD Core Features',
          growth: true,
          scale: true,
          elite: true,
          info: 'Access to all essential RadiantMD platform features',
        },
        {
          name: 'Unlimited Automations',
          growth: true,
          scale: true,
          elite: true,
          info: 'Create unlimited automated workflows and sequences',
        },
        {
          name: 'Google Review Booster',
          growth: true,
          scale: true,
          elite: true,
          info: 'Automated system to increase Google reviews',
        },
        {
          name: 'Smart Lead Follow-Ups',
          growth: true,
          scale: true,
          elite: true,
          info: 'Automated lead nurturing and follow-up sequences',
        },
        {
          name: 'Client Database',
          growth: true,
          scale: true,
          elite: true,
          info: 'Comprehensive client management system',
        },
      ],
    },
    {
      category: 'Advanced Features',
      items: [
        {
          name: 'AI-Driven Marketing',
          growth: false,
          scale: true,
          elite: true,
          info: 'Advanced AI marketing automation and optimization',
        },
        {
          name: 'Expert Ad Management',
          growth: false,
          scale: true,
          elite: true,
          info: 'Professional management of advertising campaigns',
        },
        {
          name: 'Client Retargeting',
          growth: 'Basic',
          scale: 'Advanced',
          elite: 'Full Suite',
          info: 'Automated client re-engagement strategies',
        },
        {
          name: 'Human Sales Support',
          growth: false,
          scale: false,
          elite: true,
          info: 'Dedicated human sales support team',
        },
      ],
    },
    {
      category: 'Support & Management',
      items: [
        {
          name: 'Reputation Management',
          growth: 'Basic',
          scale: 'Advanced',
          elite: 'Full Service',
          info: 'Comprehensive reputation management system',
        },
        {
          name: 'Support Level',
          growth: 'Standard',
          scale: 'Priority',
          elite: '24/7 Premium',
          info: 'Level of customer support provided',
        },
        {
          name: 'Account Management',
          growth: 'Self-service',
          scale: 'Guided',
          elite: 'Dedicated Manager',
          info: 'Type of account management provided',
        },
      ],
    },
  ]

  const PlanIcon = ({ plan }) => {
    const icons = {
      growth: Zap,
      scale: Bot,
      elite: Shield,
    }
    const Icon = icons[plan.toLowerCase()]
    const isPopular = plan === 'Scale'

    return (
      <div
        className={`p-2 rounded-xl transition-transform hover:scale-105 ${
          isPopular
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
          Plans start at $199/month. Compare our solutions to find the perfect
          fit for your med spa.
        </p>
      </div>

      <div className='rounded-2xl border border-gray-200 overflow-hidden bg-white shadow-lg'>
        <div className='overflow-x-auto'>
          <table className='w-full'>
            <thead>
              <tr className='border-b border-gray-200'>
                <th className='py-6 px-6 text-left w-1/4'></th>
                {['Growth', 'Scale', 'Elite'].map((plan) => (
                  <th key={plan} className='py-6 px-6 w-1/4'>
                    <div className='flex flex-col items-center gap-4'>
                      <PlanIcon plan={plan} />
                      <span className='font-semibold text-gray-900'>
                        {plan}-Touch
                      </span>
                      {plan === 'Scale' && (
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
                        {renderValue(feature.growth)}
                      </td>
                      <td className='py-6 px-6 text-center bg-[#38b5ff]/5'>
                        {renderValue(feature.scale)}
                      </td>
                      <td className='py-6 px-6 text-center'>
                        {renderValue(feature.elite)}
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
        <div className='inline-block'>
          <Button className='bg-gradient-to-r from-[#38b5ff] to-[#2da1e8] hover:opacity-90 shadow-lg group'>
            Request Pricing
            <ArrowRight className='w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform' />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default PlanComparison
