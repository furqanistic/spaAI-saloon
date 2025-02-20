import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
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
  Briefcase,
  Calendar,
  CheckCircle,
  Clock,
  Globe,
  Mail,
  Phone,
  Users,
} from 'lucide-react'
import React, { useState } from 'react'
import SchedulingSystem from './SchedulingSystem'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

const DemoRequestSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    jobTitle: '',
    companyUrl: '',
    companySize: '',
  })

  // State for scheduling dialog
  const [isSchedulingOpen, setIsSchedulingOpen] = useState(false)

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

  // Handle scheduling complete
  const handleSchedulingComplete = (schedulingData) => {
    console.log('Scheduling completed:', schedulingData)
    console.log('Form data:', formData)
    // Here you can handle the submission of both form and scheduling data
  }

  // Validate form before opening scheduler
  const handleChooseDateClick = () => {
    // Basic form validation
    if (!formData.name || !formData.email || !formData.phone) {
      alert('Please fill in all required fields')
      return
    }
    setIsSchedulingOpen(true)
  }

  const expectations = [
    {
      icon: <Calendar className='w-5 h-5' />,
      title: 'See RadiantAI in Action',
      description:
        "Get a personalized demo showing how our AI-driven system optimizes your spa's bookings, marketing, and sales.",
    },
    {
      icon: <Clock className='w-5 h-5' />,
      title: 'Try It Hands-On',
      description:
        'Test the platform in a dedicated trial environment built for your business.',
    },
    {
      icon: <CheckCircle className='w-5 h-5' />,
      title: 'Calculate Your ROI',
      description:
        'See exactly how much revenue you can generate with our all-in-one AI-powered system.',
    },
  ]

  return (
    <section className='pt-20 relative min-h-screen bg-[#f8fafc] py-20 px-4 md:px-8'>
      {/* Decorative elements */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        <div className='absolute top-0 left-1/2 w-[800px] h-[800px] bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-full filter blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2' />
        <div className='absolute top-1/2 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-pink-50 via-rose-50 to-purple-50 rounded-full filter blur-3xl opacity-40' />
      </div>

      <div className='relative max-w-7xl mx-auto'>
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={containerVariants}
          className='space-y-16'
        >
          {/* Header Section */}
          <motion.div
            variants={itemVariants}
            className='text-center max-w-3xl mx-auto'
          >
            <div className='inline-flex items-center bg-blue-50 px-4 py-2 rounded-full mb-8'>
              <span className='text-blue-700 font-medium'>
                Built For Success. Ready For Scale.
              </span>
            </div>
            <h1 className='text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight'>
              Transform Your Med Spa
              <span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600'>
                {' '}
                with AI
              </span>
            </h1>
            <p className='text-lg md:text-xl text-slate-600'>
              A new era of Med Spa Success has arrived. Traditional marketing
              and booking systems haven't kept up. It's time for something
              smarter.
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className='grid lg:grid-cols-2 gap-12 items-start'>
            {/* Left Column - Benefits */}
            <motion.div variants={itemVariants}>
              <div className='bg-white rounded-2xl shadow-xl p-8 md:p-12 h-full'>
                <h2 className='text-3xl font-bold text-slate-900 mb-8'>
                  Let's Talk Success
                </h2>
                <p className='text-lg text-slate-600 mb-12'>
                  Whether you're looking to increase revenue, automate
                  operations, or fill your calendar, our Med Spa growth experts
                  are ready to help.
                </p>

                <div className='space-y-8'>
                  {expectations.map((item, index) => (
                    <motion.div
                      key={index}
                      className='flex items-start gap-6 group'
                      variants={itemVariants}
                    >
                      <div
                        className='flex-shrink-0 w-12 h-12 rounded-2xl bg-blue-50 group-hover:bg-blue-100 
                        flex items-center justify-center transition-colors duration-300'
                      >
                        <div className='text-blue-600'>{item.icon}</div>
                      </div>
                      <div>
                        <h3 className='text-xl font-semibold text-slate-900 mb-2'>
                          {item.title}
                        </h3>
                        <p className='text-slate-600 leading-relaxed'>
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Column - Form */}
            <motion.div variants={itemVariants}>
              <Card className='overflow-hidden border-0 shadow-xl bg-white'>
                <CardContent className='p-8 md:p-12'>
                  <h2 className='text-2xl font-bold text-slate-900 mb-8'>
                    Schedule Your Demo
                  </h2>
                  <form className='space-y-6'>
                    <div className='space-y-6'>
                      <div className='relative'>
                        <Label
                          htmlFor='name'
                          className='text-sm font-medium text-slate-700'
                        >
                          Name*
                        </Label>
                        <Input
                          id='name'
                          value={formData.name}
                          onChange={handleInputChange}
                          className='pl-4 h-12 bg-slate-50 border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
                          placeholder='Enter your full name'
                        />
                      </div>

                      <div className='relative'>
                        <Label
                          htmlFor='phone'
                          className='text-sm font-medium text-slate-700'
                        >
                          Phone Number*
                        </Label>
                        <div className='mt-1 relative rounded-lg'>
                          <div className='absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none'>
                            <Phone className='h-4 w-4 text-slate-400' />
                          </div>
                          <Input
                            id='phone'
                            value={formData.phone}
                            onChange={handleInputChange}
                            className='pl-10 h-12 bg-slate-50 border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
                            placeholder='Enter your phone number'
                          />
                        </div>
                      </div>

                      <div className='relative'>
                        <Label
                          htmlFor='email'
                          className='text-sm font-medium text-slate-700'
                        >
                          Company Email*
                        </Label>
                        <div className='mt-1 relative rounded-lg'>
                          <div className='absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none'>
                            <Mail className='h-4 w-4 text-slate-400' />
                          </div>
                          <Input
                            id='email'
                            type='email'
                            value={formData.email}
                            onChange={handleInputChange}
                            className='pl-10 h-12 bg-slate-50 border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
                            placeholder='Enter your company email'
                          />
                        </div>
                      </div>

                      <div className='relative'>
                        <Label
                          htmlFor='jobTitle'
                          className='text-sm font-medium text-slate-700'
                        >
                          Job Title*
                        </Label>
                        <div className='mt-1 relative rounded-lg'>
                          <div className='absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none'>
                            <Briefcase className='h-4 w-4 text-slate-400' />
                          </div>
                          <Input
                            id='jobTitle'
                            value={formData.jobTitle}
                            onChange={handleInputChange}
                            className='pl-10 h-12 bg-slate-50 border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
                            placeholder='Enter your job title'
                          />
                        </div>
                      </div>

                      <div className='relative'>
                        <Label
                          htmlFor='companyUrl'
                          className='text-sm font-medium text-slate-700'
                        >
                          Company URL*
                        </Label>
                        <div className='mt-1 relative rounded-lg'>
                          <div className='absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none'>
                            <Globe className='h-4 w-4 text-slate-400' />
                          </div>
                          <Input
                            id='companyUrl'
                            value={formData.companyUrl}
                            onChange={handleInputChange}
                            className='pl-10 h-12 bg-slate-50 border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
                            placeholder='Enter your company website'
                          />
                        </div>
                      </div>

                      <div className='relative'>
                        <Label
                          htmlFor='companySize'
                          className='text-sm font-medium text-slate-700'
                        >
                          Company Size
                        </Label>
                        <div className='mt-1 relative rounded-lg'>
                          <div className='absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none'>
                            <Users className='h-4 w-4 text-slate-400' />
                          </div>
                          <Select
                            onValueChange={handleCompanySizeChange}
                            value={formData.companySize}
                          >
                            <SelectTrigger className='pl-10 h-12 bg-slate-50 border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500'>
                              <SelectValue placeholder='Select company size' />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value='1-5'>1-5 employees</SelectItem>
                              <SelectItem value='6-25'>
                                6-25 employees
                              </SelectItem>
                              <SelectItem value='26-50'>
                                26-50 employees
                              </SelectItem>
                              <SelectItem value='51-100'>
                                51-100 employees
                              </SelectItem>
                              <SelectItem value='101+'>
                                101+ employees
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>

                    <Button
                      type='button'
                      onClick={handleChooseDateClick}
                      className='w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 
                    text-white font-semibold h-12 rounded-lg transition-all duration-300 flex items-center justify-center gap-2'
                    >
                      <Calendar className='w-5 h-5' />
                      Choose Date
                      <ArrowRight className='w-5 h-5' />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
      <SchedulingSystem
        isOpen={isSchedulingOpen}
        onClose={() => setIsSchedulingOpen(false)}
        formData={formData}
        onSchedulingComplete={handleSchedulingComplete}
      />
    </section>
  )
}

export default DemoRequestSection
