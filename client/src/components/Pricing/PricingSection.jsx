import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  Bot,
  Briefcase,
  Calendar,
  Check,
  Globe,
  Heart,
  Mail,
  Phone,
  Shield,
  Sparkles,
  Star,
  Users,
  X,
  Zap,
} from 'lucide-react'
import React, { useState } from 'react'

// Pricing data
const PLANS = [
  {
    id: 'premium',
    name: 'Premium',
    icon: Shield,
    tagline: 'We Handle Everything For You',
    price: '$847',
    color: '#9333ea', // purple-600
    gradient: 'from-purple-400 to-purple-600',
    lightColor: '#f3e8ff', // purple-100
    buttonColor: 'bg-purple-600 hover:bg-purple-700',
    description:
      'For med spas that want a fully automated, hands-free system with expert human support.',
    features: [
      'Everything in Pro, PLUS:',
      'Unlimited Virtual Sales Team',
      'High-Priority Support & Strategy Calls',
      'Advanced Reputation & SEO Boost',
    ],
  },
  {
    id: 'pro',
    name: 'Pro',
    icon: Bot,
    tagline: 'Grow Faster with Expert Ads & AI',
    price: '$547',
    color: '#ec4899', // pink-600
    gradient: 'from-pink-400 to-pink-600',
    lightColor: '#fce7f3', // pink-100
    buttonColor: 'bg-pink-600 hover:bg-pink-700',
    popular: true,
    description:
      'For med spas ready to scale with AI-driven marketing, client retargeting & expert ad management.',
    features: [
      'Everything in Core, PLUS:',
      'Expert-Managed Ads',
      'Smart Client Campaigns',
      'AI Patient Revival System',
    ],
  },
  {
    id: 'core',
    name: 'Core',
    icon: Zap,
    tagline: 'Automate the Basics',
    price: '$347',
    color: '#0ea5e9', // sky-500
    gradient: 'from-sky-400 to-sky-600',
    lightColor: '#e0f2fe', // sky-100
    buttonColor: 'bg-sky-500 hover:bg-sky-600',
    description:
      'For med spas that need foundational automation to streamline bookings & client engagement.',
    features: [
      'Online Booking System',
      'Appointment Confirmations & Reminders',
      'AI-Powered Lead & Client Follow-Ups',
      'Google Review Requests',
    ],
  },
]

const SHARED_FEATURES = [
  'Custom Branded Client Portal',
  'Unlimited Automations',
  'Unlimited Team Members',
  'HIPAA-Compliant System',
  'EMR/Practice Software Integrations',
  'Free Mobile App',
]

// Form field component for consistency - now more compact
const FormField = ({
  id,
  label,
  icon,
  placeholder,
  value,
  onChange,
  type = 'text',
}) => (
  <div className='relative space-y-1'>
    <Label htmlFor={id} className='text-xs font-medium text-gray-700'>
      {label}
      {label.includes('*') && <span className='text-pink-500'>*</span>}
    </Label>
    <div className='relative rounded-md'>
      <div className='absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none'>
        {icon}
      </div>
      <Input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        className='pl-8 py-1 h-9 text-sm bg-white'
        placeholder={placeholder}
      />
    </div>
  </div>
)

// Trial Form Dialog Component
const TrialFormDialog = ({ isOpen, onClose, selectedPlan }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    jobTitle: '',
    companyUrl: '',
    companySize: '',
  })

  // Handle form input changes
  const handleInputChange = (e) => {
    const { id, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }))
  }

  // Handle company size selection
  const handleCompanySizeChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      companySize: value,
    }))
  }

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    console.log('Selected plan:', selectedPlan)
    // Here you would typically send this data to your backend

    // Show success and close
    alert('Thank you for your interest! We will contact you shortly.')
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className='sm:max-w-xs md:max-w-sm p-0 overflow-hidden bg-white rounded-lg border shadow-md'>
        <div className='relative'>
          {/* Header with gradient background */}
          <div
            className='p-4 text-white'
            style={{
              background: selectedPlan
                ? `linear-gradient(to right, ${selectedPlan.color}, ${selectedPlan.color}dd)`
                : 'linear-gradient(to right, #ec4899, #8b5cf6)',
            }}
          >
            <DialogHeader className='space-y-1 pb-0'>
              <DialogTitle className='text-lg font-bold text-white flex items-center gap-2'>
                {selectedPlan ? (
                  <>
                    <selectedPlan.icon size={18} />
                    Start Your {selectedPlan.name} Trial
                  </>
                ) : (
                  <>Start Your Free Trial</>
                )}
              </DialogTitle>
              <DialogDescription className='text-white/80 text-xs'>
                Fill out the form to get started
              </DialogDescription>
            </DialogHeader>
          </div>

          {/* Form content */}
          <div className='p-4'>
            <form onSubmit={handleSubmit} className='space-y-3'>
              <div className='grid grid-cols-2 gap-3'>
                <div className='col-span-2'>
                  <Label
                    htmlFor='name'
                    className='text-xs font-medium mb-1 block'
                  >
                    Name<span className='text-pink-500'>*</span>
                  </Label>
                  <div className='relative'>
                    <div className='absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none'>
                      <Users className='h-3.5 w-3.5 text-pink-400' />
                    </div>
                    <Input
                      id='name'
                      value={formData.name}
                      onChange={handleInputChange}
                      className='pl-8 py-1 h-9 text-sm'
                      placeholder='Full name'
                    />
                  </div>
                </div>

                <div className='col-span-1'>
                  <Label
                    htmlFor='phone'
                    className='text-xs font-medium mb-1 block'
                  >
                    Phone<span className='text-pink-500'>*</span>
                  </Label>
                  <div className='relative'>
                    <div className='absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none'>
                      <Phone className='h-3.5 w-3.5 text-pink-400' />
                    </div>
                    <Input
                      id='phone'
                      value={formData.phone}
                      onChange={handleInputChange}
                      className='pl-8 py-1 h-9 text-sm'
                      placeholder='Phone number'
                    />
                  </div>
                </div>

                <div className='col-span-1'>
                  <Label
                    htmlFor='email'
                    className='text-xs font-medium mb-1 block'
                  >
                    Email<span className='text-pink-500'>*</span>
                  </Label>
                  <div className='relative'>
                    <div className='absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none'>
                      <Mail className='h-3.5 w-3.5 text-pink-400' />
                    </div>
                    <Input
                      id='email'
                      type='email'
                      value={formData.email}
                      onChange={handleInputChange}
                      className='pl-8 py-1 h-9 text-sm'
                      placeholder='Company email'
                    />
                  </div>
                </div>

                <div className='col-span-1'>
                  <Label
                    htmlFor='jobTitle'
                    className='text-xs font-medium mb-1 block'
                  >
                    Job Title<span className='text-pink-500'>*</span>
                  </Label>
                  <div className='relative'>
                    <div className='absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none'>
                      <Briefcase className='h-3.5 w-3.5 text-pink-400' />
                    </div>
                    <Input
                      id='jobTitle'
                      value={formData.jobTitle}
                      onChange={handleInputChange}
                      className='pl-8 py-1 h-9 text-sm'
                      placeholder='Your position'
                    />
                  </div>
                </div>

                <div className='col-span-1'>
                  <Label
                    htmlFor='companyUrl'
                    className='text-xs font-medium mb-1 block'
                  >
                    Website<span className='text-pink-500'>*</span>
                  </Label>
                  <div className='relative'>
                    <div className='absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none'>
                      <Globe className='h-3.5 w-3.5 text-pink-400' />
                    </div>
                    <Input
                      id='companyUrl'
                      value={formData.companyUrl}
                      onChange={handleInputChange}
                      className='pl-8 py-1 h-9 text-sm'
                      placeholder='Company website'
                    />
                  </div>
                </div>

                <div className='col-span-2'>
                  <Label
                    htmlFor='companySize'
                    className='text-xs font-medium mb-1 block'
                  >
                    Company Size
                  </Label>
                  <div className='relative'>
                    <div className='absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none'>
                      <Users className='h-3.5 w-3.5 text-pink-400' />
                    </div>
                    <Select
                      onValueChange={handleCompanySizeChange}
                      value={formData.companySize}
                    >
                      <SelectTrigger className='pl-8 py-1 h-9 text-sm'>
                        <SelectValue placeholder='Select size' />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value='1-5'>1-5 employees</SelectItem>
                        <SelectItem value='6-25'>6-25 employees</SelectItem>
                        <SelectItem value='26-50'>26-50 employees</SelectItem>
                        <SelectItem value='51-100'>51-100 employees</SelectItem>
                        <SelectItem value='101+'>101+ employees</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className='pt-2'
              >
                <Button
                  type='submit'
                  className={`w-full py-2 h-9 text-sm text-white border-none ${
                    selectedPlan
                      ? selectedPlan.buttonColor
                      : 'bg-pink-600 hover:bg-pink-700'
                  }`}
                >
                  Start Free Trial
                  <ArrowRight className='w-3.5 h-3.5 ml-2' />
                </Button>
              </motion.div>
            </form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

// Decorative elements
const Decorations = () => (
  <div className='absolute inset-0 overflow-hidden pointer-events-none'>
    {/* Top blob */}
    <div className='absolute top-0 right-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-pink-200/30 to-purple-200/30 blur-3xl -translate-y-1/2'></div>

    {/* Bottom blob */}
    <div className='absolute bottom-0 left-1/4 w-80 h-80 rounded-full bg-gradient-to-r from-blue-200/30 to-cyan-200/30 blur-3xl translate-y-1/2'></div>

    {/* Floating elements */}
    <motion.div
      className='absolute top-24 left-10 opacity-50'
      animate={{ y: [-5, 5, -5], rotate: [0, 5, 0] }}
      transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
    >
      <Heart size={24} className='text-pink-300' />
    </motion.div>

    <motion.div
      className='absolute bottom-32 right-10 opacity-50'
      animate={{ y: [5, -5, 5], rotate: [0, -5, 0] }}
      transition={{
        repeat: Infinity,
        duration: 4,
        ease: 'easeInOut',
        delay: 1,
      }}
    >
      <Star size={24} className='text-purple-300' />
    </motion.div>

    <motion.div
      className='absolute top-1/2 right-16 opacity-50'
      animate={{ y: [-8, 8, -8], rotate: [0, 10, 0] }}
      transition={{
        repeat: Infinity,
        duration: 5,
        ease: 'easeInOut',
        delay: 0.5,
      }}
    >
      <Sparkles size={20} className='text-sky-300' />
    </motion.div>
  </div>
)

// Feature check item component
const FeatureItem = ({ children, color }) => (
  <div className='flex items-start gap-3 py-1.5 group'>
    <div className='shrink-0 mt-0.5'>
      <div
        className='rounded-full p-1 transition-colors'
        style={{ backgroundColor: `${color}20` }}
      >
        <Check size={16} style={{ color }} />
      </div>
    </div>
    <span className='text-gray-700 group-hover:text-gray-900 transition-colors'>
      {children}
    </span>
  </div>
)

// Plan card component
const PlanCard = ({ plan, onStartTrial }) => {
  const {
    name,
    icon: Icon,
    tagline,
    price,
    color,
    gradient,
    lightColor,
    buttonColor,
    description,
    features,
    popular,
  } = plan

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className='h-full'
    >
      <Card
        className={`h-full overflow-hidden ${
          popular ? 'border-2 shadow-xl relative' : 'border shadow'
        }`}
        style={{ borderColor: popular ? color : '' }}
      >
        {popular && (
          <div className='absolute top-3 right-3 z-10'>
            <Badge className='py-1 px-2.5 bg-gradient-to-r from-pink-500 to-pink-600 text-white border-none'>
              <Star className='w-3 h-3 mr-1' fill='white' /> Most Popular
            </Badge>
          </div>
        )}

        <div className='h-full flex flex-col'>
          {/* Header with colored background for the plan name */}
          <div
            className='p-6 text-white'
            style={{
              background: `linear-gradient(to right, ${color}, ${color}dd)`,
            }}
          >
            <div className='flex items-center gap-3 mb-2'>
              <div className='p-2 bg-white/20 rounded-lg'>
                <Icon size={20} />
              </div>
              <h3 className='text-xl font-bold'>{name}</h3>
            </div>
            <p className='text-white/80 text-sm'>{tagline}</p>
          </div>

          <div className='px-6 py-5 bg-white'>
            <div className='mb-4'>
              <div className='flex items-baseline'>
                <span className='text-3xl font-bold' style={{ color }}>
                  {price}
                </span>
                <span className='text-gray-500 ml-1'>/ month</span>
              </div>
              <p className='text-gray-600 text-sm mt-2 leading-snug'>
                {description}
              </p>
            </div>

            <div className='space-y-0.5 mb-6'>
              {features.map((feature, index) => (
                <FeatureItem key={index} color={color}>
                  {feature}
                </FeatureItem>
              ))}
            </div>

            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Button
                className={`w-full ${
                  popular ? 'py-6' : 'py-5'
                } ${buttonColor} text-white border-none`}
                onClick={() => onStartTrial(plan)}
              >
                {popular ? 'Start Free Trial' : 'Free Trial'}
                <ArrowRight className='w-4 h-4 ml-2' />
              </Button>
            </motion.div>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}

// Shared features section
const SharedFeatures = () => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
    viewport={{ once: true }}
    className='mt-24 max-w-3xl mx-auto'
  >
    <div className='text-center mb-10'>
      <div className='w-16 h-1 mx-auto bg-gradient-to-r from-pink-400 to-purple-400 rounded-full mb-4'></div>
      <h2 className='text-2xl font-bold text-gray-800 mb-2'>
        Included in All Plans
      </h2>
      <p className='text-gray-600'>
        The same set of core features to elevate your beauty practice
        experience.
      </p>
    </div>

    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
      {SHARED_FEATURES.map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          viewport={{ once: true }}
          className='flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow'
        >
          <div className='shrink-0 rounded-full p-1 bg-gradient-to-r from-pink-100 to-purple-100'>
            <Check size={16} className='text-pink-500' />
          </div>
          <span className='text-gray-700'>{feature}</span>
        </motion.div>
      ))}
    </div>
  </motion.div>
)

// Main pricing section component
const PricingSection = () => {
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState(null)

  const handleStartTrial = (plan) => {
    setSelectedPlan(plan)
    setIsFormOpen(true)
  }

  return (
    <div className='relative pt-16 pb-24 px-4 lg:px-8 overflow-hidden bg-gradient-to-b from-white to-gray-50'>
      <Decorations />

      {/* Section header */}
      <div className='relative max-w-3xl mx-auto text-center mb-16 z-10'>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='text-4xl sm:text-5xl font-bold mb-5 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent'
        >
          Three Plans, One Radiant Experience
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='text-lg text-gray-600 max-w-2xl mx-auto'
        >
          We've created RadiantMD plans to scale based on your unique needs,
          with beautiful solutions to help your beauty practice shine.
        </motion.p>
      </div>

      {/* Pricing cards */}
      <div className='relative max-w-6xl mx-auto z-10'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {PLANS.map((plan) => (
            <PlanCard
              key={plan.id}
              plan={plan}
              onStartTrial={handleStartTrial}
            />
          ))}
        </div>
      </div>

      {/* Shared features */}
      <SharedFeatures />

      {/* CTA section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        viewport={{ once: true }}
        className='relative max-w-2xl mx-auto mt-20 text-center z-10'
      >
        <div className='bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100'>
          <h3 className='text-2xl font-bold text-gray-800 mb-3'>
            Not sure which plan is right for you?
          </h3>
          <p className='text-gray-600 mb-6'>
            Our beauty experts are ready to help you find the perfect fit for
            your beauty practice needs.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              className='bg-gradient-to-r from-pink-500 to-purple-500 text-white py-6 px-8 shadow-lg shadow-pink-500/20'
              onClick={() => {
                setSelectedPlan(null)
                setIsFormOpen(true)
              }}
            >
              Schedule a Free Consultation
              <ArrowRight className='w-4 h-4 ml-2' />
            </Button>
          </motion.div>
        </div>
      </motion.div>

      {/* Trial Form Dialog */}
      <TrialFormDialog
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        selectedPlan={selectedPlan}
      />
    </div>
  )
}

export default PricingSection
