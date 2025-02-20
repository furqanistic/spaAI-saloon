import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Card, CardContent } from '@/components/ui/card'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { AnimatePresence, motion } from 'framer-motion'
import {
  ArrowRight,
  CalendarCheck,
  Calendar as CalendarIcon,
  CheckCircle,
  Clock,
  X,
} from 'lucide-react'
import React, { useState } from 'react'

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
}

const slideIn = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 20 },
}

// Time slots configuration
const MORNING_SLOTS = [
  '09:00 AM',
  '09:30 AM',
  '10:00 AM',
  '10:30 AM',
  '11:00 AM',
  '11:30 AM',
]

const AFTERNOON_SLOTS = [
  '02:00 PM',
  '02:30 PM',
  '03:00 PM',
  '03:30 PM',
  '04:00 PM',
  '04:30 PM',
]

const SchedulingSystem = ({ isOpen, onClose, formData }) => {
  // State management
  const [selectedDate, setSelectedDate] = useState(null)
  const [selectedTime, setSelectedTime] = useState(null)
  const [currentStep, setCurrentStep] = useState('date')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [bookingStatus, setBookingStatus] = useState(null)

  // Format date for display
  const formatDate = (date) => {
    if (!date) return ''
    return new Intl.DateTimeFormat('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    }).format(date)
  }

  // Handle date selection
  const handleDateSelect = (date) => {
    setSelectedDate(date)
    setCurrentStep('time')
  }

  // Handle time selection
  const handleTimeSelect = (time) => {
    setSelectedTime(time)
    setCurrentStep('confirm')
  }

  // Handle back navigation
  const handleBack = () => {
    if (currentStep === 'time') {
      setCurrentStep('date')
    } else if (currentStep === 'confirm') {
      setCurrentStep('time')
    }
  }

  // Handle booking confirmation
  const handleConfirm = async () => {
    setIsSubmitting(true)
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      setBookingStatus('success')
      setTimeout(() => {
        handleClose()
      }, 2000)
    } catch (error) {
      setBookingStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  // Handle dialog close
  const handleClose = () => {
    setSelectedDate(null)
    setSelectedTime(null)
    setCurrentStep('date')
    setBookingStatus(null)
    onClose()
  }

  // Render time slot button
  const TimeSlotButton = ({ time }) => (
    <Button
      variant='outline'
      className={`h-12 transition-all duration-200 ${
        selectedTime === time
          ? 'bg-blue-50 border-blue-500 text-blue-700'
          : 'hover:bg-slate-50'
      }`}
      onClick={() => handleTimeSelect(time)}
    >
      <Clock className='w-4 h-4 mr-2' />
      {time}
    </Button>
  )

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className='sm:max-w-[600px] p-0 gap-0'>
        <DialogHeader className='px-8 py-6 border-b'>
          <div className='flex items-center justify-between'>
            <DialogTitle className='text-2xl font-bold text-slate-900'>
              Schedule Your Demo
            </DialogTitle>
            <Button
              variant='ghost'
              size='icon'
              className='h-8 w-8 rounded-full'
              onClick={handleClose}
            >
              <X className='h-4 w-4' />
            </Button>
          </div>
          <DialogDescription className='text-slate-600 mt-2'>
            Choose your preferred date and time for the RadiantAI demo
          </DialogDescription>
        </DialogHeader>

        <div className='px-8 py-6'>
          <AnimatePresence mode='wait'>
            {/* Date Selection Step */}
            {currentStep === 'date' && (
              <motion.div
                {...fadeInUp}
                transition={{ duration: 0.3 }}
                className='flex flex-col items-center'
              >
                <Calendar
                  mode='single'
                  selected={selectedDate}
                  onSelect={handleDateSelect}
                  disabled={{ before: new Date() }}
                  className='rounded-lg border shadow-sm'
                />
                <p className='text-sm text-slate-500 mt-4 text-center'>
                  Select a date to view available time slots
                </p>
              </motion.div>
            )}

            {/* Time Selection Step */}
            {currentStep === 'time' && (
              <motion.div
                {...slideIn}
                transition={{ duration: 0.3 }}
                className='space-y-8'
              >
                <div className='flex items-center justify-between'>
                  <h3 className='text-lg font-semibold text-slate-900'>
                    Available Times for {formatDate(selectedDate)}
                  </h3>
                  <Button variant='ghost' onClick={handleBack} size='sm'>
                    Change Date
                  </Button>
                </div>

                <div className='space-y-6'>
                  <div>
                    <h4 className='text-sm font-medium text-slate-700 mb-3'>
                      Morning
                    </h4>
                    <div className='grid grid-cols-2 md:grid-cols-3 gap-3'>
                      {MORNING_SLOTS.map((time) => (
                        <TimeSlotButton key={time} time={time} />
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className='text-sm font-medium text-slate-700 mb-3'>
                      Afternoon
                    </h4>
                    <div className='grid grid-cols-2 md:grid-cols-3 gap-3'>
                      {AFTERNOON_SLOTS.map((time) => (
                        <TimeSlotButton key={time} time={time} />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Confirmation Step */}
            {currentStep === 'confirm' && (
              <motion.div {...slideIn} transition={{ duration: 0.3 }}>
                <Card>
                  <CardContent className='p-6'>
                    <div className='space-y-6'>
                      <div className='text-center'>
                        <CalendarCheck className='w-12 h-12 text-green-500 mx-auto mb-4' />
                        <h3 className='text-xl font-semibold text-slate-900 mb-2'>
                          Confirm Your Demo
                        </h3>
                        <p className='text-slate-600'>
                          You're scheduling a demo for:
                        </p>
                      </div>

                      <div className='bg-slate-50 rounded-lg p-4 space-y-4'>
                        <div className='flex items-center justify-between'>
                          <div className='flex items-center'>
                            <CalendarIcon className='w-5 h-5 text-blue-500 mr-2' />
                            <span className='font-medium text-slate-700'>
                              Date
                            </span>
                          </div>
                          <span className='text-slate-900'>
                            {formatDate(selectedDate)}
                          </span>
                        </div>

                        <div className='flex items-center justify-between'>
                          <div className='flex items-center'>
                            <Clock className='w-5 h-5 text-blue-500 mr-2' />
                            <span className='font-medium text-slate-700'>
                              Time
                            </span>
                          </div>
                          <span className='text-slate-900'>{selectedTime}</span>
                        </div>
                      </div>

                      <div className='space-y-3'>
                        <Button
                          className='w-full bg-blue-600 hover:bg-blue-700 text-white h-12'
                          onClick={handleConfirm}
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <span className='flex items-center'>
                              <motion.span
                                animate={{ rotate: 360 }}
                                transition={{
                                  duration: 1,
                                  repeat: Infinity,
                                  ease: 'linear',
                                }}
                                className='mr-2'
                              >
                                ⭮
                              </motion.span>
                              Confirming...
                            </span>
                          ) : (
                            <span className='flex items-center'>
                              Confirm Booking
                              <ArrowRight className='w-4 h-4 ml-2' />
                            </span>
                          )}
                        </Button>

                        <Button
                          variant='outline'
                          className='w-full h-12'
                          onClick={handleBack}
                          disabled={isSubmitting}
                        >
                          Change Time
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Success/Error Messages */}
          <AnimatePresence>
            {bookingStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className='absolute inset-0 bg-white flex items-center justify-center'
              >
                <div className='text-center'>
                  <CheckCircle className='w-16 h-16 text-green-500 mx-auto mb-4' />
                  <h3 className='text-xl font-semibold text-slate-900 mb-2'>
                    Demo Scheduled!
                  </h3>
                  <p className='text-slate-600'>
                    We'll send you a confirmation email shortly.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default SchedulingSystem
