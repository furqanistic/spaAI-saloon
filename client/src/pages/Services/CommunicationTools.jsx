import { motion } from 'framer-motion'
import {
  Bot,
  CheckCircle,
  ChevronRight,
  Clock,
  Mail,
  MessageCircle,
  MessageSquare,
  Phone,
  RefreshCw,
  Send,
  User,
  Zap,
} from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../components/Layout/Navbar'

const CommunicationTools = () => {
  const navigate = useNavigate()

  // Navigate to demo page
  const handleDemoClick = () => {
    navigate('/demo')
  }

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
      title: 'Two-Way SMS & Email',
      description: 'Send personalized messages directly from the platform.',
      details: 'Enable replies to be logged in the CRM.',
      icon: <MessageSquare className='w-6 h-6 text-[#38b5ff]' />,
    },
    {
      title: 'Chatbot Integration',
      description:
        'AI-powered chatbots for FAQs, booking inquiries, or lead qualification.',
      details: 'Provide 24/7 support without staffing costs.',
      icon: <Bot className='w-6 h-6 text-[#38b5ff]' />,
    },
    {
      title: 'WhatsApp Integration',
      description:
        'Send updates, offers, or appointment reminders via WhatsApp.',
      details: 'Connect with clients on their preferred messaging platform.',
      icon: <MessageCircle className='w-6 h-6 text-[#38b5ff]' />,
    },
    {
      title: 'Voice Broadcasting',
      description:
        'Bulk voice messages for urgent announcements (e.g., weather-related closures).',
      details: 'Reach all clients quickly in time-sensitive situations.',
      icon: <Phone className='w-6 h-6 text-[#38b5ff]' />,
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
            Communication Tools
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='text-gray-600 max-w-3xl mx-auto text-lg'
          >
            Connect with your clients effortlessly through multiple channels
            with our comprehensive communication suite designed for med spas.
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

        {/* Messaging Preview Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className='bg-white rounded-2xl p-8 shadow-md border border-gray-100 mb-16'
        >
          <h2 className='text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center'>
            Personalized Client Communication
          </h2>

          <div className='flex flex-col md:flex-row items-stretch gap-8'>
            <div className='md:w-1/2'>
              <div className='bg-gray-50 rounded-2xl p-4 h-full'>
                <div className='bg-white rounded-xl shadow-sm overflow-hidden h-full flex flex-col'>
                  <div className='bg-[#38b5ff] text-white p-4 flex items-center space-x-2'>
                    <MessageSquare className='w-5 h-5' />
                    <span className='font-medium'>Client Messaging</span>
                  </div>

                  <div className='p-4 flex-1 overflow-y-auto'>
                    <div className='flex flex-col space-y-4'>
                      {/* Outgoing message */}
                      <div className='flex justify-end'>
                        <div className='bg-[#38b5ff]/10 text-gray-800 px-4 py-2 rounded-xl max-w-xs'>
                          <p className='text-sm'>
                            Hi Sarah! This is a reminder that you have a facial
                            appointment scheduled for tomorrow at 2:00 PM.
                          </p>
                        </div>
                      </div>

                      {/* Outgoing message */}
                      <div className='flex justify-end'>
                        <div className='bg-[#38b5ff]/10 text-gray-800 px-4 py-2 rounded-xl max-w-xs'>
                          <p className='text-sm'>
                            Please reply CONFIRM to confirm or RESCHEDULE if you
                            need to change your appointment.
                          </p>
                        </div>
                      </div>

                      {/* Time indicator */}
                      <div className='flex justify-center'>
                        <span className='text-xs text-gray-500'>2:45 PM</span>
                      </div>

                      {/* Incoming message */}
                      <div className='flex justify-start'>
                        <div className='bg-gray-100 text-gray-800 px-4 py-2 rounded-xl max-w-xs'>
                          <p className='text-sm'>CONFIRM</p>
                        </div>
                      </div>

                      {/* Outgoing message */}
                      <div className='flex justify-end'>
                        <div className='bg-[#38b5ff]/10 text-gray-800 px-4 py-2 rounded-xl max-w-xs'>
                          <p className='text-sm'>
                            Great! Your appointment is confirmed for tomorrow at
                            2:00 PM. We look forward to seeing you!
                          </p>
                        </div>
                      </div>

                      {/* Outgoing message */}
                      <div className='flex justify-end'>
                        <div className='bg-[#38b5ff]/10 text-gray-800 px-4 py-2 rounded-xl max-w-xs'>
                          <p className='text-sm'>
                            Don't forget to arrive 10 minutes early to complete
                            your intake form. See you soon! 😊
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='p-3 border-t border-gray-100 flex items-center space-x-2'>
                    <input
                      type='text'
                      placeholder='Type a message...'
                      className='flex-1 bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#38b5ff]/50'
                    />
                    <button className='bg-[#38b5ff] text-white rounded-lg p-2'>
                      <Send className='w-4 h-4' />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className='md:w-1/2'>
              <h3 className='text-xl font-semibold text-gray-800 mb-4'>
                Seamless Omni-Channel Communication
              </h3>
              <p className='text-gray-600 mb-6'>
                Engage with your clients on their preferred channels while
                maintaining a unified conversation history. Our platform brings
                together SMS, email, WhatsApp, and voice communications in one
                easy-to-manage interface.
              </p>

              <div className='grid grid-cols-2 gap-4 mb-6'>
                {[
                  { channel: 'SMS', delivery: '98%', open: '95%' },
                  { channel: 'Email', delivery: '99%', open: '32%' },
                  { channel: 'WhatsApp', delivery: '97%', open: '90%' },
                  { channel: 'Voice', delivery: '95%', open: '80%' },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className='border border-gray-100 rounded-xl p-3'
                  >
                    <p className='font-medium text-gray-800 mb-1'>
                      {stat.channel}
                    </p>
                    <div className='flex justify-between text-xs'>
                      <span className='text-gray-500'>Delivery Rate</span>
                      <span className='text-[#38b5ff] font-medium'>
                        {stat.delivery}
                      </span>
                    </div>
                    <div className='flex justify-between text-xs'>
                      <span className='text-gray-500'>Open Rate</span>
                      <span className='text-[#38b5ff] font-medium'>
                        {stat.open}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <ul className='space-y-3'>
                {[
                  'Consistent brand voice across all channels',
                  'Template library for quick responses',
                  'Scheduled messaging for optimal timing',
                  'Conversation history tied to client profiles',
                  'Automated response tracking and analytics',
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

        {/* Automation Section */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16'>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className='bg-white rounded-2xl p-6 shadow-md border border-gray-100'
          >
            <div className='flex items-center mb-4 space-x-3'>
              <RefreshCw className='w-6 h-6 text-[#38b5ff]' />
              <h3 className='text-xl font-semibold text-gray-800'>
                Automated Communication Flows
              </h3>
            </div>

            <p className='text-gray-600 mb-6'>
              Create intelligent communication sequences that respond to client
              actions and deliver the right message at the right time.
            </p>

            <div className='bg-gradient-to-br from-[#38b5ff]/10 to-[#3888ff]/5 p-4 rounded-xl mb-6'>
              <div className='space-y-4'>
                {[
                  {
                    title: 'Appointment Sequence',
                    steps: [
                      'Confirmation',
                      'Reminder',
                      'Follow-up',
                      'Review Request',
                    ],
                    icon: <Clock className='w-5 h-5 text-[#38b5ff]' />,
                  },
                  {
                    title: 'New Client Onboarding',
                    steps: [
                      'Welcome',
                      'Prep Instructions',
                      'Post-Visit',
                      'Next Booking',
                    ],
                    icon: <User className='w-5 h-5 text-[#38b5ff]' />,
                  },
                  {
                    title: 'Re-engagement Campaign',
                    steps: [
                      'Miss You',
                      'Special Offer',
                      'Benefits',
                      'Booking Prompt',
                    ],
                    icon: <RefreshCw className='w-5 h-5 text-[#38b5ff]' />,
                  },
                ].map((flow, i) => (
                  <div key={i} className='bg-white p-3 rounded-lg shadow-sm'>
                    <div className='flex items-center space-x-2 mb-2'>
                      {flow.icon}
                      <span className='font-medium text-gray-800'>
                        {flow.title}
                      </span>
                    </div>
                    <div className='flex items-center space-x-2'>
                      {flow.steps.map((step, j) => (
                        <React.Fragment key={j}>
                          <span className='bg-[#38b5ff]/10 text-xs text-gray-600 px-2 py-1 rounded-full'>
                            {step}
                          </span>
                          {j < flow.steps.length - 1 && (
                            <ChevronRight className='w-3 h-3 text-gray-400' />
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <p className='text-gray-600 text-sm text-center'>
              Design custom communication flows with our intuitive drag-and-drop
              builder.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className='bg-white rounded-2xl p-6 shadow-md border border-gray-100'
          >
            <div className='flex items-center mb-4 space-x-3'>
              <Bot className='w-6 h-6 text-[#38b5ff]' />
              <h3 className='text-xl font-semibold text-gray-800'>
                AI-Powered Chatbots
              </h3>
            </div>

            <p className='text-gray-600 mb-6'>
              Provide instant responses to common questions, qualify leads, and
              book appointments 24/7 with intelligent conversational bots.
            </p>

            <div className='border border-gray-100 rounded-xl overflow-hidden mb-6'>
              <div className='bg-[#38b5ff] text-white p-3 flex items-center justify-between'>
                <div className='flex items-center space-x-2'>
                  <Bot className='w-4 h-4' />
                  <span className='font-medium'>Website Chat Assistant</span>
                </div>
                <span className='text-xs bg-white/20 px-2 py-0.5 rounded-full'>
                  Online
                </span>
              </div>

              <div className='bg-gradient-to-br from-[#38b5ff]/5 to-[#3888ff]/5 p-4'>
                <div className='flex flex-col space-y-3'>
                  <div className='bg-white p-3 rounded-lg shadow-sm'>
                    <p className='text-sm font-medium text-gray-800 mb-1'>
                      Bot Capabilities:
                    </p>
                    <ul className='text-xs text-gray-600 space-y-1'>
                      <li className='flex items-start space-x-1'>
                        <CheckCircle className='w-3 h-3 text-[#38b5ff] mt-0.5' />
                        <span>Answer FAQs about services and pricing</span>
                      </li>
                      <li className='flex items-start space-x-1'>
                        <CheckCircle className='w-3 h-3 text-[#38b5ff] mt-0.5' />
                        <span>Book and reschedule appointments</span>
                      </li>
                      <li className='flex items-start space-x-1'>
                        <CheckCircle className='w-3 h-3 text-[#38b5ff] mt-0.5' />
                        <span>Collect lead information</span>
                      </li>
                      <li className='flex items-start space-x-1'>
                        <CheckCircle className='w-3 h-3 text-[#38b5ff] mt-0.5' />
                        <span>Qualify prospects with custom questions</span>
                      </li>
                      <li className='flex items-start space-x-1'>
                        <CheckCircle className='w-3 h-3 text-[#38b5ff] mt-0.5' />
                        <span>
                          Seamlessly transfer to human agent when needed
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className='bg-[#38b5ff]/10 self-start rounded-lg p-2 text-sm'>
                    <p>Hello! 👋 How can I help you today?</p>
                  </div>

                  <div className='bg-white self-end rounded-lg p-2 text-sm'>
                    <p>Do you offer hydrafacials?</p>
                  </div>

                  <div className='bg-[#38b5ff]/10 self-start rounded-lg p-2 text-sm'>
                    <p>
                      Yes, we offer HydraFacial treatments! Our signature
                      HydraFacial is $179 and takes about 45 minutes. Would you
                      like to book an appointment?
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className='flex justify-center'>
              <span className='text-sm text-[#38b5ff] font-medium flex items-center'>
                <Zap className='w-4 h-4 mr-1' />
                Chatbots can reduce response time by up to 80%
              </span>
            </div>
          </motion.div>
        </div>

        {/* Email Marketing Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className='bg-white rounded-2xl p-8 shadow-md border border-gray-100 mb-16'
        >
          <div className='flex items-center justify-center mb-6 space-x-3'>
            <Mail className='w-8 h-8 text-[#38b5ff]' />
            <h2 className='text-2xl md:text-3xl font-bold text-gray-800'>
              Email Marketing Made Easy
            </h2>
          </div>

          <div className='flex flex-col md:flex-row items-center gap-8'>
            <div className='md:w-1/2'>
              <div className='bg-gradient-to-br from-[#38b5ff]/10 to-[#3888ff]/5 p-6 rounded-2xl'>
                <div className='bg-white rounded-xl shadow-sm overflow-hidden'>
                  <div className='p-4 border-b border-gray-100'>
                    <h3 className='font-semibold text-gray-800 mb-1'>
                      Monthly Newsletter
                    </h3>
                    <div className='flex justify-between text-xs text-gray-500'>
                      <span>Recipients: 2,450</span>
                      <span>Open rate: 28.6%</span>
                      <span>Click rate: 4.2%</span>
                    </div>
                  </div>

                  <div className='p-4'>
                    <div className='grid grid-cols-4 gap-2 mb-4'>
                      <div className='col-span-1 bg-gray-100 h-20 rounded'></div>
                      <div className='col-span-3 space-y-1'>
                        <div className='bg-gray-100 h-4 rounded w-4/5'></div>
                        <div className='bg-gray-100 h-4 rounded w-3/5'></div>
                        <div className='bg-gray-100 h-4 rounded w-4/5'></div>
                        <div className='bg-gray-100 h-4 rounded w-1/2'></div>
                      </div>
                    </div>

                    <div className='space-y-1 mb-4'>
                      <div className='bg-gray-100 h-4 rounded'></div>
                      <div className='bg-gray-100 h-4 rounded'></div>
                      <div className='bg-gray-100 h-4 rounded w-4/5'></div>
                    </div>

                    <div className='grid grid-cols-2 gap-2'>
                      <div className='bg-gray-100 h-32 rounded'></div>
                      <div className='bg-gray-100 h-32 rounded'></div>
                    </div>

                    <div className='mt-4 flex justify-center'>
                      <div className='bg-[#38b5ff] text-white px-4 py-2 rounded-lg text-sm'>
                        Book Now
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='md:w-1/2'>
              <h3 className='text-xl font-semibold text-gray-800 mb-4'>
                Professional Email Campaigns
              </h3>
              <p className='text-gray-600 mb-6'>
                Create beautiful, mobile-responsive emails that showcase your
                services and drive bookings. Our platform includes pre-designed
                templates optimized for med spas.
              </p>

              <div className='space-y-4 mb-6'>
                <div className='flex justify-between items-center p-3 border border-gray-100 rounded-lg'>
                  <div className='flex items-center space-x-3'>
                    <Mail className='w-5 h-5 text-[#38b5ff]' />
                    <span className='font-medium text-gray-800'>
                      Monthly Newsletter
                    </span>
                  </div>
                  <div className='text-sm text-gray-500'>
                    Sent on 1st of month
                  </div>
                </div>

                <div className='flex justify-between items-center p-3 border border-gray-100 rounded-lg'>
                  <div className='flex items-center space-x-3'>
                    <Mail className='w-5 h-5 text-[#38b5ff]' />
                    <span className='font-medium text-gray-800'>
                      Seasonal Specials
                    </span>
                  </div>
                  <div className='text-sm text-gray-500'>Quarterly</div>
                </div>

                <div className='flex justify-between items-center p-3 border border-gray-100 rounded-lg'>
                  <div className='flex items-center space-x-3'>
                    <Mail className='w-5 h-5 text-[#38b5ff]' />
                    <span className='font-medium text-gray-800'>
                      New Treatment Announcement
                    </span>
                  </div>
                  <div className='text-sm text-gray-500'>As needed</div>
                </div>
              </div>

              <ul className='space-y-2'>
                {[
                  'Drag-and-drop email builder',
                  'Mobile-responsive templates',
                  'A/B testing capabilities',
                  'Detailed open and click tracking',
                  'Automated delivery scheduling',
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

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className='bg-gradient-to-r from-[#38b5ff] to-[#3888ff] rounded-2xl p-8 shadow-lg text-center text-white'
        >
          <h2 className='text-2xl md:text-3xl font-bold mb-4'>
            Ready to Transform Your Client Communication?
          </h2>
          <p className='mb-6 max-w-2xl mx-auto'>
            Connect with clients on their preferred channels, automate routine
            messages, and provide responsive support with our integrated
            communication tools.
          </p>
          <button
            onClick={handleDemoClick}
            className='bg-white text-[#38b5ff] px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 shadow-md flex items-center mx-auto'
          >
            <span>Book a Demo</span>
            <ChevronRight className='ml-2 w-5 h-5' />
          </button>
        </motion.div>
      </section>
    </div>
  )
}

export default CommunicationTools
