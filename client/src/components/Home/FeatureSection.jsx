import { motion, useScroll, useTransform } from 'framer-motion'
import { Sparkles, Star } from 'lucide-react'
import React, { useRef } from 'react'

const FeatureCard = ({ feature, scrollYProgress }) => {
  const y = useTransform(scrollYProgress, [0, 1], [-100, 100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8])

  return (
    <motion.div
      style={{ y, scale }}
      className='relative min-h-screen py-24 px-6 lg:px-20 max-w-8xl mx-auto'
    >
      <motion.div
        style={{ opacity }}
        className='flex flex-col lg:flex-row items-center gap-20 bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-2xl rounded-[2.5rem] p-12 shadow-2xl border border-white/30 relative overflow-hidden'
      >
        {/* Decorative Elements */}
        <div className='absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none'>
          <div className='absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-blue-100/30 to-transparent' />
          <div className='absolute -top-32 -right-32 w-64 h-64 bg-purple-200/20 rounded-full blur-3xl' />
          <div className='absolute -bottom-32 -left-32 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl' />
        </div>

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
              className='mb-10'
            >
              <span className='inline-flex items-center px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 font-semibold text-sm mb-6 shadow-lg shadow-blue-100/50'>
                <Star className='w-4 h-4 mr-2' />
                {feature.subtitle}
              </span>
              <h2 className='text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight leading-tight'>
                {feature.title}
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className='text-xl text-gray-600 mb-10 leading-relaxed'
            >
              {feature.description}
            </motion.p>

            <div className='space-y-6'>
              {feature.features.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 + 0.2 }}
                  className='flex items-center gap-4 group'
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className='w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-blue-100/50 transition-all duration-300'
                  >
                    <Sparkles className='w-5 h-5 text-blue-600' />
                  </motion.div>
                  <span className='text-lg text-gray-700 font-medium group-hover:text-blue-600 transition-colors duration-200'>
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
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
            <div className='w-full h-[500px] rounded-3xl overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50 p-6 shadow-2xl shadow-blue-100/50'>
              <div className='absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5' />
              <motion.img
                src={feature.image}
                alt={feature.imageAlt}
                className='w-full h-full object-cover rounded-2xl shadow-2xl'
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4 }}
              />

              {/* Image overlay gradient */}
              <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl' />
            </div>

            {/* Floating elements */}
            <motion.div
              className='absolute -top-4 -right-4 w-20 h-20 rounded-full bg-gradient-to-br from-blue-400 to-blue-500 opacity-75'
              animate={{
                y: [0, -15, 0],
                opacity: [0.5, 0.8, 0.5],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <motion.div
              className='absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-gradient-to-br from-purple-400 to-purple-500 opacity-75'
              animate={{
                y: [0, 15, 0],
                opacity: [0.5, 0.8, 0.5],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 2,
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
      image: '/Virtual.png',
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
    <div className='bg-gradient-to-b from-blue-50 via-white to-purple-50 relative overflow-hidden min-h-screen'>
      {/* Enhanced background with grid and gradient */}
      <div className='absolute inset-0 bg-grid-gray-900/[0.02] -z-1' />
      <div className='absolute inset-0 bg-gradient-to-br from-blue-100/20 via-transparent to-purple-100/20 -z-1' />

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
