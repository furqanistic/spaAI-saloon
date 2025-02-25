import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'
import React, { useState } from 'react'

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null)

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  const faqItems = [
    {
      question: 'What makes RadiantAI different from other med spa software?',
      answer:
        'RadiantAI stands out by combining AI-driven automation with a human touch. Unlike platforms that focus solely on automation, we offer a perfect balance that streamlines operations while maintaining the personal connections that drive client loyalty and business growth.',
    },
    {
      question: 'How does RadiantAI help with lead generation?',
      answer:
        'Our platform includes high-converting landing pages optimized for med spa offers, lead forms with exit-intent pop-ups, seamless appointment booking widgets, and compliant SMS & email opt-in campaigns. All these features work together to capture and nurture more qualified leads for your med spa.',
    },
    {
      question: 'Can RadiantAI integrate with my existing tools and systems?',
      answer:
        'Absolutely! RadiantAI seamlessly integrates with popular tools like Google Calendar, Stripe, PayPal, Mailchimp, social media platforms, and accounting software. We believe in enhancing your existing workflows rather than disrupting them.',
    },
    {
      question: 'How does RadiantAI help prevent no-shows?',
      answer:
        'Our system includes automated appointment reminders via SMS and email, requiring confirmation to ensure attendance. We also offer waitlist management to fill last-minute cancellations and analytics to identify no-show patterns, helping you optimize your scheduling practices.',
    },
    {
      question: 'Does RadiantAI offer human support services?',
      answer:
        'Yes! We provide real appointment setters who act as virtual receptionists, handling calls, texts, and emails to book appointments. We also offer media buying experts who create and manage ad campaigns for maximum ROI, as well as reputation management services to amplify positive reviews.',
    },
  ]

  return (
    <div className='relative py-24 overflow-hidden'>
      {/* Background elements */}
      <div className='absolute inset-0 pointer-events-none overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-b from-white via-[#f8fbff] to-white' />
        <div className='absolute top-0 right-0 w-96 h-96 bg-[#38b5ff]/5 rounded-full blur-3xl -translate-y-1/2' />
        <div className='absolute bottom-0 left-0 w-96 h-96 bg-[#38b5ff]/5 rounded-full blur-3xl translate-y-1/2' />
      </div>

      <div className='container mx-auto px-4 relative z-10'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='text-center mb-16'
        >
          <motion.div
            className='inline-block'
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <span className='px-6 py-2 bg-[#38b5ff]/10 rounded-full text-[#38b5ff] font-semibold inline-block mb-4'>
              Frequently Asked Questions
            </span>
          </motion.div>
          <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-8'>
            We Have Answers
          </h2>
          <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
            Common questions about our platform, features, and how we can help
            your med spa grow.
          </p>
        </motion.div>

        <div className='max-w-3xl mx-auto'>
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className='mb-4'
            >
              <motion.div
                className={`border border-[#38b5ff]/20 rounded-xl overflow-hidden transition-all duration-300 ${
                  activeIndex === index ? 'shadow-md' : 'shadow-sm'
                }`}
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
              >
                <div
                  className={`p-5 flex justify-between items-center cursor-pointer ${
                    activeIndex === index ? 'bg-[#38b5ff]/10' : 'bg-white'
                  }`}
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className='text-lg font-semibold text-gray-900'>
                    {item.question}
                  </h3>
                  <div className='text-[#38b5ff]'>
                    {activeIndex === index ? (
                      <ChevronUp size={20} />
                    ) : (
                      <ChevronDown size={20} />
                    )}
                  </div>
                </div>

                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className='overflow-hidden'
                    >
                      <div className='p-5 pt-0 bg-white'>
                        <p className='text-gray-600'>{item.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FAQ
