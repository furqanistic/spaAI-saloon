import { motion, useScroll, useTransform } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import React, { useRef } from 'react'

const FeatureCard = ({ feature, scrollYProgress }) => {
  const y = useTransform(scrollYProgress, [0, 1], [-100, 100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8])

  return (
    <motion.div
      style={{ y, scale }}
      className='relative min-h-screen py-20 px-4 lg:px-16 max-w-7xl mx-auto'
    >
      <motion.div
        style={{ opacity }}
        className='flex flex-col lg:flex-row items-start gap-16 bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20'
      >
        {/* Left Content */}
        <div className='w-full lg:w-1/2 relative z-10'>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className='max-w-xl'
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className='mb-8'
            >
              <span className='inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-600 font-medium text-sm mb-4'>
                {feature.subtitle}
              </span>
              <h2 className='text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight'>
                {feature.title}
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className='text-lg text-gray-600 mb-8 leading-relaxed'
            >
              {feature.description}
            </motion.p>

            <div className='space-y-4 mb-8'>
              {feature.features.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 + 0.2 }}
                  className='flex items-center gap-3 group'
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className='w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors duration-200'
                  >
                    <Sparkles className='w-4 h-4 text-blue-600' />
                  </motion.div>
                  <span className='text-gray-700 font-medium'>{item}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className='flex gap-4'
            >
              <motion.button
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                className='px-6 py-3 bg-blue-600 text-white rounded-lg font-medium shadow-lg shadow-blue-500/20 transition-shadow duration-200'
              >
                Tour Features
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                className='px-6 py-3 bg-white text-gray-700 rounded-lg font-medium shadow-lg shadow-gray-100 transition-shadow duration-200'
              >
                Request Demo →
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Right Image */}
        <div className='w-full lg:w-1/2'>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className='relative'
          >
            <div className='w-full h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50 p-4'>
              <div className='absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5' />
              <motion.img
                src={feature.image}
                alt={feature.imageAlt}
                className='w-full h-full object-cover rounded-xl shadow-2xl'
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              />
            </div>

            {/* Accent shapes */}
            <div className='absolute -top-4 -right-4 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl' />
            <div className='absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl' />

            {/* Floating elements */}
            <motion.div
              className='absolute -top-2 -right-2 w-8 h-8 rounded-full bg-blue-400'
              animate={{
                y: [0, -10, 0],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <motion.div
              className='absolute -bottom-2 -left-2 w-6 h-6 rounded-full bg-purple-400'
              animate={{
                y: [0, 10, 0],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 1.5,
              }}
            />
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
}

const FeatureSection = () => {
  const features = [
    {
      title: 'Smart AI Automation',
      subtitle: 'Strengthen Client Experience',
      description:
        'Med spas and clients work better together. Enhance customer experiences and increase efficiency through AI-powered automation in a unified platform.',
      features: ['Booking System', 'Client Management', 'Smart Scheduling'],
      image:
        'https://images.pexels.com/photos/6153354/pexels-photo-6153354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      imageAlt: 'AI Automation Dashboard',
    },
    {
      title: 'Virtual Assistant',
      subtitle: 'Powered by Advanced AI',
      description:
        'Virtual assistants make it easier than ever to communicate with clients in real-time. Streamline operations by automating inquiries, bookings, and follow-ups while maintaining a personal touch.',
      features: ['24/7 Support', 'Automated Responses', 'Personalized Care'],
      image:
        'https://images.pexels.com/photos/8438979/pexels-photo-8438979.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      imageAlt: 'Virtual Assistant Interface',
    },
    {
      title: 'Reputation Management',
      subtitle: 'Build Trust & Credibility',
      description:
        "Take control of your med spa's online presence with our comprehensive reputation management system. Automatically collect and showcase reviews while improving customer satisfaction.",
      features: ['Review Collection', 'Rating Management', 'Client Feedback'],
      image:
        'https://images.pexels.com/photos/18069421/pexels-photo-18069421/free-photo-of-an-artist-s-illustration-of-artificial-intelligence-ai-this-image-depicts-how-ai-could-assist-in-genomic-studies-and-its-applications-it-was-created-by-artist-nidia-dias-as-part-of-the.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      imageAlt: 'Reputation Dashboard',
    },
  ]

  return (
    <div className='bg-gradient-to-b from-blue-50 to-white relative overflow-hidden'>
      {/* Background accent */}
      <div className='absolute inset-0 bg-grid-gray-900/[0.02] -z-1' />

      {features.map((feature, index) => {
        const sectionRef = useRef(null)
        const { scrollYProgress } = useScroll({
          target: sectionRef,
          offset: ['start end', 'end start'],
        })
        return (
          <div ref={sectionRef} key={index}>
            <FeatureCard feature={feature} scrollYProgress={scrollYProgress} />
          </div>
        )
      })}
    </div>
  )
}

export default FeatureSection
