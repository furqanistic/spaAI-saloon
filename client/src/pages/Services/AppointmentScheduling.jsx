import { motion } from 'framer-motion'
import {
  Bell,
  Calendar,
  CheckCircle,
  ChevronRight,
  Clock,
  RefreshCw,
  Smartphone,
  UserMinus,
  Users,
  XCircle,
} from 'lucide-react'
import React from 'react'
import { Link } from 'react-router'
import Navbar from '../../components/Layout/Navbar'

const AppointmentScheduling = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  // Features data based on the provided information
  const features = [
    {
      title: 'Two-Way Calendar Sync',
      description:
        'Sync with Google Calendar, Acuity, or other scheduling tools.',
      details: 'Real-time updates for staff and clients.',
      icon: <RefreshCw className='w-6 h-6 text-[#38b5ff]' />,
    },
    {
      title: 'Automated Reminders',
      description: 'SMS and email reminders for upcoming appointments.',
      details: 'Rescheduling options via text or email.',
      icon: <Bell className='w-6 h-6 text-[#38b5ff]' />,
    },
    {
      title: 'Waitlist Management',
      description: 'Automatically notify clients when a slot opens up.',
      details: 'Maximize your schedule and fill cancellations quickly.',
      icon: <Users className='w-6 h-6 text-[#38b5ff]' />,
    },
    {
      title: 'No-Show Prevention',
      description:
        'Send reminders and require confirmation to reduce no-shows.',
      details: 'Protect your calendar and revenue from missed appointments.',
      icon: <UserMinus className='w-6 h-6 text-[#38b5ff]' />,
    },
  ]

  return (
    <div className='min-h-screen bg-gradient-to-br from-white to-gray-50'>
      <Navbar />

      {/* Hero Section */}
      <section className='pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto'>
        <div className='text-center mb-16'>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#38b5ff] to-[#3888ff] bg-clip-text text-transparent mb-4'
          >
            Appointment Scheduling & Management
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='text-gray-600 max-w-3xl mx-auto text-lg'
          >
            Streamline your booking process, reduce no-shows, and maximize your
            beauty practice's schedule with our intelligent appointment
            management system.
          </motion.p>
        </div>

        {/* Features Grid */}
        <motion.div
          className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-16'
          variants={containerVariants}
          initial='hidden'
          animate='visible'
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className='bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-[#38b5ff]/20 relative overflow-hidden group'
            >
              <div className='absolute -right-12 -top-12 w-24 h-24 rounded-full bg-gradient-to-br from-[#38b5ff]/10 to-[#3888ff]/5 opacity-0 group-hover:opacity-100 transition-all duration-500'></div>

              <div className='flex items-start space-x-4'>
                <div className='bg-gradient-to-br from-[#38b5ff]/10 to-[#3888ff]/5 p-3 rounded-xl transition-colors duration-300 flex items-center justify-center h-14 w-14'>
                  {feature.icon}
                </div>

                <div className='flex-1'>
                  <h3 className='text-xl font-semibold text-gray-800 mb-2'>
                    {feature.title}
                  </h3>
                  <p className='text-gray-600 mb-2'>{feature.description}</p>
                  <p className='text-gray-500 text-sm'>{feature.details}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Calendar Demo Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className='bg-white rounded-2xl p-8 shadow-md border border-gray-100 mb-16'
        >
          <h2 className='text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center'>
            Seamless Scheduling Experience
          </h2>

          <div className='flex flex-col md:flex-row items-center gap-8'>
            <div className='md:w-1/2'>
              <div className='bg-gradient-to-br from-[#38b5ff]/10 to-[#3888ff]/5 p-6 rounded-2xl'>
                <div className='bg-white rounded-xl shadow-md p-4 border border-gray-100'>
                  <div className='flex justify-between items-center mb-4'>
                    <h3 className='font-semibold text-gray-800'>April 2025</h3>
                    <div className='flex space-x-2'>
                      <button className='p-1 rounded-md hover:bg-gray-100'>
                        <ChevronRight className='w-5 h-5 text-gray-600 rotate-180' />
                      </button>
                      <button className='p-1 rounded-md hover:bg-gray-100'>
                        <ChevronRight className='w-5 h-5 text-gray-600' />
                      </button>
                    </div>
                  </div>

                  <div className='grid grid-cols-7 gap-1 text-center text-xs text-gray-500 mb-2'>
                    {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(
                      (day, i) => (
                        <div key={i} className='py-1'>
                          {day}
                        </div>
                      )
                    )}
                  </div>

                  <div className='grid grid-cols-7 gap-1 text-center'>
                    {[...Array(31)].map((_, i) => {
                      // Highlight some days as available/booked for demo
                      const dayNum = i + 1
                      const isAvailable = [
                        2, 5, 8, 12, 15, 18, 22, 25, 28,
                      ].includes(dayNum)
                      const isBooked = [4, 11, 19, 26].includes(dayNum)
                      const isPast = dayNum < 15

                      return (
                        <button
                          key={i}
                          disabled={isPast || isBooked}
                          className={`p-2 rounded-full text-sm ${
                            isPast
                              ? 'text-gray-300'
                              : isBooked
                              ? 'bg-gray-100 text-gray-400'
                              : isAvailable
                              ? 'bg-[#38b5ff]/10 text-[#38b5ff] hover:bg-[#38b5ff]/20'
                              : 'hover:bg-gray-100 text-gray-600'
                          }`}
                        >
                          {dayNum}
                        </button>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>

            <div className='md:w-1/2'>
              <h3 className='text-xl font-semibold text-gray-800 mb-4'>
                Client-Friendly Booking
              </h3>
              <ul className='space-y-4'>
                {[
                  'Easy online self-scheduling for clients',
                  'Automated SMS & email confirmations',
                  'Real-time availability updates',
                  'Multiple service selection',
                  'Staff selection based on specialization',
                  'Mobile-friendly scheduling for on-the-go bookings',
                ].map((feature, i) => (
                  <li key={i} className='flex items-start space-x-2'>
                    <CheckCircle className='w-5 h-5 text-[#38b5ff] mt-0.5' />
                    <span className='text-gray-600'>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16'
          variants={containerVariants}
          initial='hidden'
          animate='visible'
        >
          {[
            {
              value: '30%',
              label: 'Reduction in No-Shows',
              icon: <XCircle className='w-6 h-6 text-[#38b5ff]' />,
            },
            {
              value: '24/7',
              label: 'Appointment Access',
              icon: <Clock className='w-6 h-6 text-[#38b5ff]' />,
            },
            {
              value: '45%',
              label: 'Staff Time Saved',
              icon: <Calendar className='w-6 h-6 text-[#38b5ff]' />,
            },
            {
              value: '98%',
              label: 'Client Satisfaction',
              icon: <Smartphone className='w-6 h-6 text-[#38b5ff]' />,
            },
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className='bg-white rounded-2xl p-6 shadow-md border border-gray-100 text-center'
            >
              <div className='bg-gradient-to-br from-[#38b5ff]/10 to-[#3888ff]/5 p-3 rounded-xl inline-flex items-center justify-center h-14 w-14 mb-4'>
                {stat.icon}
              </div>
              <h3 className='text-3xl font-bold text-gray-800 mb-1'>
                {stat.value}
              </h3>
              <p className='text-gray-600'>{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className='bg-gradient-to-r from-[#38b5ff] to-[#3888ff] rounded-2xl p-8 shadow-lg text-center text-white'
        >
          <h2 className='text-2xl md:text-3xl font-bold mb-4'>
            Ready to Simplify Your Scheduling?
          </h2>
          <p className='mb-6 max-w-2xl mx-auto'>
            Eliminate booking headaches, reduce no-shows, and fill your calendar
            with paying clients.
          </p>
          <Link to='/demo'>
            <button className='bg-white text-[#38b5ff] px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 shadow-md flex items-center mx-auto'>
              <span>Book a Demo</span>
              <ChevronRight className='ml-2 w-5 h-5' />
            </button>
          </Link>
        </motion.div>
      </section>
    </div>
  )
}

export default AppointmentScheduling
