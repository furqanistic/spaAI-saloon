import { Card } from '@/components/ui/card'
import { AnimatePresence, motion } from 'framer-motion'
import { Minus, Plus, Search, Sparkles } from 'lucide-react'
import React, { useState } from 'react'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')

  const faqs = [
    {
      category: 'General',
      questions: [
        {
          question: 'What is RadiantAI and how does it help med spas?',
          answer:
            'RadiantAI is a comprehensive management platform designed specifically for med spas and beauty clinics. It combines AI-powered automation with human expertise to streamline operations, enhance client relationships, and boost business growth through smart booking, client management, and marketing tools.',
        },
        {
          question: 'Is RadiantAI suitable for both small and large med spas?',
          answer:
            "Yes, RadiantAI is designed to scale with your business. Whether you're a small boutique med spa or a large multi-location operation, our platform adapts to your needs with flexible features and customizable workflows.",
        },
        {
          question: 'How does the AI virtual assistant work?',
          answer:
            'Our AI virtual assistant handles appointment scheduling, answers common client questions, and provides 24/7 support. It learns from interactions to provide increasingly personalized service while maintaining a natural, friendly conversation style.',
        },
      ],
    },
    {
      category: 'Technical',
      questions: [
        {
          question: 'Can RadiantAI integrate with my existing systems?',
          answer:
            'Yes, RadiantAI offers seamless integration with popular medical spa software, payment processors, and marketing tools. Our platform is designed to work alongside your existing tech stack while enhancing its capabilities.',
        },
        {
          question: 'How secure is my client data with RadiantAI?',
          answer:
            'We maintain the highest standards of security and compliance. All data is encrypted, regularly backed up, and stored in compliance with HIPAA regulations. We implement multiple layers of security to protect your sensitive information.',
        },
      ],
    },
    {
      category: 'Pricing & Support',
      questions: [
        {
          question: 'What kind of support does RadiantAI provide?',
          answer:
            "We offer comprehensive support including 24/7 technical assistance, dedicated account managers, regular training sessions, and a extensive knowledge base. Our team is always available to help you maximize the platform's potential.",
        },
        {
          question: 'Is there a free trial available?',
          answer:
            'Yes, we offer a 14-day free trial that gives you full access to all features. This allows you to experience firsthand how RadiantAI can transform your med spa operations before making a commitment.',
        },
      ],
    },
  ]

  const filteredFaqs = faqs
    .map((category) => ({
      ...category,
      questions: category.questions.filter(
        (qa) =>
          qa.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          qa.answer.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    }))
    .filter((category) => category.questions.length > 0)

  return (
    <div className='relative min-h-screen bg-gradient-to-b from-white to-blue-50 py-20'>
      {/* Background Elements */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        <motion.div
          className='absolute top-0 right-0 w-96 h-96 bg-[#38b5ff]/10 rounded-full blur-3xl'
          animate={{
            x: [0, -50, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
        <motion.div
          className='absolute bottom-0 left-0 w-96 h-96 bg-blue-300/10 rounded-full blur-3xl'
          animate={{
            x: [0, 50, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>

      <div className='container mx-auto px-4 relative'>
        {/* Header */}
        <motion.div
          className='text-center mb-12'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.div
            className='inline-block mb-4'
            whileHover={{ scale: 1.05 }}
          >
            <span className='px-6 py-2 bg-[#38b5ff]/10 rounded-full text-[#38b5ff] font-semibold inline-flex items-center gap-2'>
              <Sparkles className='w-4 h-4' />
              FAQ
            </span>
          </motion.div>
          <h2 className='text-4xl font-bold text-gray-900 mb-4'>
            Frequently Asked Questions
          </h2>
          <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
            Find answers to common questions about RadiantAI's features,
            pricing, and support.
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          className='max-w-2xl mx-auto mb-12'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className='relative'>
            <Search className='absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5' />
            <input
              type='text'
              placeholder='Search questions...'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className='w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#38b5ff]/50 bg-white/50 backdrop-blur-sm'
            />
          </div>
        </motion.div>

        {/* FAQ Categories */}
        <div className='max-w-3xl mx-auto space-y-8'>
          {filteredFaqs.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
            >
              <h3 className='text-xl font-semibold text-gray-900 mb-4'>
                {category.category}
              </h3>
              <div className='space-y-4'>
                {category.questions.map((faq, index) => {
                  const isOpen = openIndex === `${categoryIndex}-${index}`
                  return (
                    <Card
                      key={index}
                      className='overflow-hidden bg-white/50 backdrop-blur-sm hover:shadow-md transition-shadow'
                    >
                      <motion.button
                        className='w-full text-left px-6 py-4 flex items-center justify-between'
                        onClick={() =>
                          setOpenIndex(
                            isOpen ? null : `${categoryIndex}-${index}`
                          )
                        }
                      >
                        <span className='font-medium text-gray-900'>
                          {faq.question}
                        </span>
                        <motion.div
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          {isOpen ? (
                            <Minus className='w-5 h-5 text-[#38b5ff]' />
                          ) : (
                            <Plus className='w-5 h-5 text-[#38b5ff]' />
                          )}
                        </motion.div>
                      </motion.button>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <div className='px-6 pb-4 text-gray-600'>
                              {faq.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </Card>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FAQ
