import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { AnimatePresence, motion } from 'framer-motion'
import {
  ArrowRight,
  Check,
  Clock,
  Gift,
  Shield,
  Sparkles,
  Star,
  Users,
  Zap,
} from 'lucide-react'
import React from 'react'

// Animated geometric shapes for background
const GeometricShape = ({ className, duration, delay }) => (
  <motion.div
    className={`absolute ${className}`}
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
      duration: 1,
      delay,
      ease: 'easeOut',
    }}
  >
    <motion.div
      animate={{
        rotate: 360,
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'linear',
      }}
      className='w-full h-full'
    />
  </motion.div>
)

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
  price,
  description,
  features,
  popular,
  icon: Icon,
  benefits,
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

        <CardHeader className='space-y-4'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-3'>
              <FeatureIcon icon={Icon} popular={popular} />
              <CardTitle
                className={`text-xl font-bold ${
                  popular ? 'text-[#38b5ff]' : 'text-gray-700'
                }`}
              >
                {plan}
              </CardTitle>
            </div>
          </div>

          <div className='space-y-2'>
            <div className='flex items-baseline gap-1'>
              <span className='text-5xl font-bold text-gray-900'>${price}</span>
              <span className='text-gray-500'>/month</span>
            </div>
            <p className='text-sm text-gray-600'>{description}</p>
          </div>
        </CardHeader>

        <CardContent className='space-y-6'>
          <div className='space-y-4'>
            {benefits && (
              <div className='grid grid-cols-2 gap-3 pb-4'>
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className='flex items-center gap-2 text-sm text-gray-600'
                  >
                    <benefit.icon className='w-4 h-4 text-[#38b5ff]' />
                    <span>{benefit.text}</span>
                  </div>
                ))}
              </div>
            )}

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
          </div>

          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              className={`w-full group ${
                popular
                  ? 'bg-gradient-to-r from-[#38b5ff] to-[#2da1e8] hover:opacity-90 shadow-lg shadow-[#38b5ff]/30'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Get Started
              <ArrowRight className='w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform' />
            </Button>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

const PricingSection = () => {
  const plans = [
    {
      plan: 'Starter',
      price: '149',
      description: 'Perfect for new med spas and small clinics',
      icon: Users,
      benefits: [
        { icon: Clock, text: '14-day free trial' },
        { icon: Shield, text: 'No credit card required' },
      ],
      features: [
        'Up to 5 staff members',
        'Basic appointment scheduling',
        'Client database management',
        'Automated appointment reminders',
        'Basic reporting and analytics',
      ],
    },
    {
      plan: 'Professional',
      price: '299',
      description: 'Ideal for growing med spas and beauty clinics',
      icon: Sparkles,
      popular: true,
      benefits: [
        { icon: Gift, text: 'Free onboarding' },
        { icon: Shield, text: 'Premium support' },
      ],
      features: [
        'Up to 15 staff members',
        'Advanced booking system with waitlist',
        'AI virtual assistant',
        'Marketing campaign tools',
        'Integration with popular payment systems',
        'Priority support',
      ],
    },
    {
      plan: 'Enterprise',
      price: '499',
      description: 'For established multi-location businesses',
      icon: Zap,
      benefits: [
        { icon: Gift, text: 'Custom setup' },
        { icon: Shield, text: '24/7 support' },
      ],
      features: [
        'Unlimited staff members',
        'Multi-location management',
        'Custom AI training',
        'White-label options',
        'Dedicated account manager',
        'Custom integrations',
        '24/7 premium support',
      ],
    },
  ]

  return (
    <div className='relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-white via-[#38b5ff]/5 to-white'>
      {/* Geometric background shapes */}
      <GeometricShape
        className='w-96 h-96 -left-48 -top-48 bg-[#38b5ff]/10 rounded-full blur-3xl'
        duration={20}
        delay={0}
      />
      <GeometricShape
        className='w-96 h-96 -right-48 top-1/4 bg-[#38b5ff]/10 rounded-full blur-3xl'
        duration={25}
        delay={0.2}
      />
      <GeometricShape
        className='w-96 h-96 -left-48 bottom-1/4 bg-[#38b5ff]/10 rounded-full blur-3xl'
        duration={22}
        delay={0.4}
      />

      <div className='relative max-w-7xl mx-auto px-4 py-16'>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className='text-center mb-16 space-y-6'
        >
          <motion.span
            className='px-4 py-2 rounded-full bg-[#38b5ff]/10 text-[#38b5ff] text-sm font-medium inline-block'
            whileHover={{ scale: 1.05 }}
          >
            Pricing Plans
          </motion.span>
          <h2 className='text-4xl md:text-5xl font-bold text-gray-900'>
            Choose Your Perfect Plan
          </h2>
          <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
            Transform your med spa with RadiantAI's comprehensive suite of tools
            and services
          </p>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {plans.map((plan) => (
            <PricingCard key={plan.plan} {...plan} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className='mt-16 text-center'
        >
          <Card className='bg-gradient-to-b from-white to-[#38b5ff]/5 border-none shadow-xl'>
            <CardContent className='p-8'>
              <div className='flex items-center justify-center gap-2 mb-4'>
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                >
                  <Sparkles className='text-[#38b5ff] h-6 w-6' />
                </motion.div>
                <h3 className='text-2xl font-bold text-gray-900'>
                  Need Help Choosing?
                </h3>
              </div>
              <p className='text-gray-600 mb-6 max-w-2xl mx-auto'>
                Schedule a personalized demo with our team to discover the
                perfect solution for your business needs
              </p>
              <div className='flex flex-col sm:flex-row justify-center gap-4'>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    variant='outline'
                    className='border-[#38b5ff] text-[#38b5ff] hover:bg-[#38b5ff] hover:text-white w-full sm:w-auto group'
                  >
                    Book a Demo
                    <ArrowRight className='w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform' />
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button className='bg-gradient-to-r from-[#38b5ff] to-[#2da1e8] hover:opacity-90 shadow-lg shadow-[#38b5ff]/30 w-full sm:w-auto group'>
                    Start Free Trial
                    <ArrowRight className='w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform' />
                  </Button>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

export default PricingSection
