import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { AnimatePresence, motion } from 'framer-motion'
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  Calendar,
  Check,
  Send,
  Star,
  Users,
} from 'lucide-react'
import React, { useState } from 'react'

// Example pricing plans data - you can move this to a separate file
const DEFAULT_PLANS = {
  starter: {
    plan: 'Starter',
    description: 'Perfect for new med spas and small clinics',
    features: [
      'Up to 5 staff members',
      'Basic appointment scheduling',
      'Client database management',
      'Automated appointment reminders',
      'Basic reporting and analytics',
    ],
    benefits: [
      { icon: Calendar, text: '14-day free trial' },
      { icon: Users, text: 'Up to 5 users' },
    ],
  },
  professional: {
    plan: 'Professional',
    description: 'Ideal for growing med spas and beauty clinics',
    features: [
      'Up to 15 staff members',
      'Advanced booking system',
      'AI virtual assistant',
      'Marketing campaign tools',
      'Integration with payment systems',
      'Priority support',
    ],
    benefits: [
      { icon: Building2, text: 'Multiple locations' },
      { icon: Users, text: 'Up to 15 users' },
    ],
  },
  enterprise: {
    plan: 'Enterprise',
    description: 'For established multi-location businesses',
    features: [
      'Unlimited staff members',
      'Multi-location management',
      'Custom AI training',
      'White-label options',
      'Dedicated account manager',
      'Custom integrations',
    ],
    benefits: [
      { icon: Building2, text: 'Unlimited locations' },
      { icon: Users, text: 'Unlimited users' },
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

const RequestPricingDialog = ({ isOpen, onClose, selectedPlan }) => {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    businessName: '',
    email: '',
    phone: '',
    businessType: '',
    employees: '',
    appointmentsPerMonth: '',
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = () => {
    console.log('Form submitted:', { ...formData, selectedPlan })
    onClose()
    setStep(1)
  }

  const steps = [
    {
      title: 'Basic Information',
      fields: (
        <div className='space-y-4 py-4'>
          <div className='space-y-2'>
            <Label htmlFor='businessName'>Business Name</Label>
            <Input
              id='businessName'
              name='businessName'
              placeholder='Enter your business name'
              value={formData.businessName}
              onChange={handleInputChange}
            />
          </div>
          <div className='space-y-2'>
            <Label htmlFor='email'>Email</Label>
            <Input
              id='email'
              name='email'
              type='email'
              placeholder='Enter your email'
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className='space-y-2'>
            <Label htmlFor='phone'>Phone Number</Label>
            <Input
              id='phone'
              name='phone'
              placeholder='Enter your phone number'
              value={formData.phone}
              onChange={handleInputChange}
            />
          </div>
        </div>
      ),
    },
    {
      title: 'Business Details',
      fields: (
        <div className='space-y-4 py-4'>
          <div className='space-y-2'>
            <Label>Type of Business</Label>
            <RadioGroup
              name='businessType'
              value={formData.businessType}
              onValueChange={(value) =>
                setFormData({ ...formData, businessType: value })
              }
            >
              <div className='flex items-center space-x-2'>
                <RadioGroupItem value='barbershops' id='barbershops' />
                <Label htmlFor='barbershops'>Barbershops</Label>
              </div>
              <div className='flex items-center space-x-2'>
                <RadioGroupItem value='medspas' id='medspas' />
                <Label htmlFor='medspas'>Med Spas</Label>
              </div>
              <div className='flex items-center space-x-2'>
                <RadioGroupItem value='tattoo-studios' id='tattoo-studios' />
                <Label htmlFor='tattoo-studios'>Tattoo Studios</Label>
              </div>
              <div className='flex items-center space-x-2'>
                <RadioGroupItem value='hair-salons' id='hair-salons' />
                <Label htmlFor='hair-salons'>Hair Salons</Label>
              </div>
              <div className='flex items-center space-x-2'>
                <RadioGroupItem value='spas' id='spas' />
                <Label htmlFor='spas'>Spas</Label>
              </div>
              <div className='flex items-center space-x-2'>
                <RadioGroupItem value='nail-salons' id='nail-salons' />
                <Label htmlFor='nail-salons'>Nail Salons</Label>
              </div>
              <div className='flex items-center space-x-2'>
                <RadioGroupItem value='massage-therapy' id='massage-therapy' />
                <Label htmlFor='massage-therapy'>Massage Therapy</Label>
              </div>
              <div className='flex items-center space-x-2'>
                <RadioGroupItem value='beauty-salons' id='beauty-salons' />
                <Label htmlFor='beauty-salons'>Beauty Salons</Label>
              </div>
            </RadioGroup>
          </div>
        </div>
      ),
    },
    {
      title: 'Scale & Operations',
      fields: (
        <div className='space-y-4 py-4'>
          <div className='space-y-2'>
            <Label>Number of Employees</Label>
            <RadioGroup
              name='employees'
              value={formData.employees}
              onValueChange={(value) =>
                setFormData({ ...formData, employees: value })
              }
            >
              <div className='flex items-center space-x-2'>
                <RadioGroupItem value='1-5' id='1-5' />
                <Label htmlFor='1-5'>1-5 employees</Label>
              </div>
              <div className='flex items-center space-x-2'>
                <RadioGroupItem value='6-15' id='6-15' />
                <Label htmlFor='6-15'>6-15 employees</Label>
              </div>
              <div className='flex items-center space-x-2'>
                <RadioGroupItem value='15+' id='15+' />
                <Label htmlFor='15+'>15+ employees</Label>
              </div>
            </RadioGroup>
          </div>
          <div className='space-y-2'>
            <Label>Monthly Appointments</Label>
            <RadioGroup
              name='appointmentsPerMonth'
              value={formData.appointmentsPerMonth}
              onValueChange={(value) =>
                setFormData({ ...formData, appointmentsPerMonth: value })
              }
            >
              <div className='flex items-center space-x-2'>
                <RadioGroupItem value='<100' id='<100' />
                <Label htmlFor='<100'>Less than 100</Label>
              </div>
              <div className='flex items-center space-x-2'>
                <RadioGroupItem value='100-300' id='100-300' />
                <Label htmlFor='100-300'>100-300</Label>
              </div>
              <div className='flex items-center space-x-2'>
                <RadioGroupItem value='300+' id='300+' />
                <Label htmlFor='300+'>300+</Label>
              </div>
            </RadioGroup>
          </div>
        </div>
      ),
    },
  ]

  const StepIndicator = ({ currentStep, totalSteps }) => (
    <div className='flex items-center justify-center space-x-2 mb-4'>
      {[...Array(totalSteps)].map((_, index) => (
        <div
          key={index}
          className={`h-2 w-2 rounded-full transition-colors duration-200 ${
            index + 1 <= currentStep ? 'bg-[#38b5ff]' : 'bg-gray-200'
          }`}
        />
      ))}
    </div>
  )

  const stepIcons = [Building2, Users, Calendar]
  const StepIcon = stepIcons[step - 1]

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className='sm:max-w-md'>
        <DialogHeader>
          <div className='flex items-center gap-2'>
            {StepIcon && <StepIcon className='w-5 h-5 text-[#38b5ff]' />}
            <DialogTitle>{steps[step - 1].title}</DialogTitle>
          </div>
        </DialogHeader>

        <StepIndicator currentStep={step} totalSteps={steps.length} />

        <AnimatePresence mode='wait'>
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
          >
            {steps[step - 1].fields}
          </motion.div>
        </AnimatePresence>

        <div className='flex justify-between mt-6'>
          {step > 1 ? (
            <Button
              variant='outline'
              onClick={() => setStep(step - 1)}
              className='gap-2'
            >
              <ArrowLeft className='w-4 h-4' /> Back
            </Button>
          ) : (
            <div />
          )}

          {step < steps.length ? (
            <Button
              onClick={() => setStep(step + 1)}
              className='bg-gradient-to-r from-[#38b5ff] to-[#2da1e8] gap-2'
            >
              Next <ArrowRight className='w-4 h-4' />
            </Button>
          ) : (
            <Button
              onClick={handleSubmit}
              className='bg-gradient-to-r from-[#38b5ff] to-[#2da1e8] gap-2'
            >
              Submit <Send className='w-4 h-4' />
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}

// Main PricingCard Component with default props
const PricingCard = ({
  plan = 'Starter',
  description = 'Basic plan for small businesses',
  features = [],
  popular = false,
  icon = Users,
  benefits = [],
}) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

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
              <div className='flex items-center'>
                <span className='text-lg font-semibold text-gray-900'>
                  Custom Pricing
                </span>
              </div>
              <p className='text-sm text-gray-600'>{description}</p>
            </div>
          </CardHeader>

          <CardContent className='flex flex-col flex-grow justify-between space-y-6'>
            <div className='space-y-4'>
              {benefits && benefits.length > 0 && (
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
                {features &&
                  features.map((feature, index) => (
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
                onClick={() => setIsDialogOpen(true)}
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

      <RequestPricingDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        selectedPlan={plan}
      />
    </motion.div>
  )
}

// Example usage of pricing plans
const PricingSection = () => {
  const plans = [
    {
      plan: 'Starter',
      description: 'Perfect for new med spas and small clinics',
      icon: Users,
      benefits: [
        { icon: Calendar, text: '14-day free trial' },
        { icon: Users, text: 'Up to 5 users' },
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
      description: 'Ideal for growing med spas and beauty clinics',
      icon: Building2,
      popular: true,
      benefits: [
        { icon: Building2, text: 'Multiple locations' },
        { icon: Users, text: 'Up to 15 users' },
      ],
      features: [
        'Up to 15 staff members',
        'Advanced booking system',
        'AI virtual assistant',
        'Marketing campaign tools',
        'Integration with payment systems',
        'Priority support',
      ],
    },
    {
      plan: 'Enterprise',
      description: 'For established multi-location businesses',
      icon: Building2,
      benefits: [
        { icon: Building2, text: 'Unlimited locations' },
        { icon: Users, text: 'Unlimited users' },
      ],
      features: [
        'Unlimited staff members',
        'Multi-location management',
        'Custom AI training',
        'White-label options',
        'Dedicated account manager',
        'Custom integrations',
      ],
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
