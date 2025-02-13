import {
  motion,
  useInView,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion'
import { ArrowRight, ChevronDown, Sparkles, Star } from 'lucide-react'
import React, { useRef } from 'react'

const Values = () => {
  const containerRef = useRef(null)
  const targetRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start'],
  })

  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.2], [0, 1]))
  const scale = useSpring(useTransform(scrollYProgress, [0, 0.2], [0.8, 1]))
  const y = useSpring(useTransform(scrollYProgress, [0, 0.2], [100, 0]))

  const values = [
    {
      number: '01',
      title: 'Client-Centric Innovation',
      description:
        'Every feature we develop starts with the client experience in mind. We continuously innovate our AI solutions to enhance the relationship between med spas and their clients, ensuring technology serves human connection rather than replacing it.',
      icon: Sparkles,
      gradient: 'from-[#38b5ff] to-blue-400',
    },
    {
      number: '02',
      title: 'Excellence in Automation',
      description:
        'We believe in intelligent automation that enhances human capabilities. Our platform streamlines routine tasks while preserving the personal touch that makes each med spa unique, creating perfect harmony between efficiency and personalization.',
      icon: Star,
      gradient: 'from-blue-400 to-purple-400',
    },
    {
      number: '03',
      title: 'Data-Driven Growth',
      description:
        'We empower med spas with actionable insights drawn from their data. By transforming complex data into clear, actionable strategies, we help our clients make informed decisions that drive business growth and improve client satisfaction.',
      icon: ArrowRight,
      gradient: 'from-purple-400 to-pink-400',
    },
    {
      number: '04',
      title: 'Seamless Integration',
      description:
        'We understand that every med spa is unique. Our platform adapts to your existing workflows and systems, creating a unified experience that enhances rather than disrupts your established processes and client relationships.',
      icon: Star,
      gradient: 'from-pink-400 to-[#38b5ff]',
    },
    {
      number: '05',
      title: 'Continuous Evolution',
      description:
        'The beauty and wellness industry never stands still, and neither do we. We continuously evolve our platform based on industry trends, client feedback, and technological advancements to keep our partners ahead of the curve.',
      icon: Sparkles,
      gradient: 'from-[#38b5ff] to-blue-600',
    },
  ]

  const ValueCard = ({ value, index }) => {
    const cardRef = useRef(null)
    const isInView = useInView(cardRef, { once: true, margin: '-100px' })

    const cardVariants = {
      hidden: { opacity: 0, x: -50 },
      visible: { opacity: 1, x: 0 },
    }

    return (
      <motion.div
        ref={cardRef}
        variants={cardVariants}
        initial='hidden'
        animate={isInView ? 'visible' : 'hidden'}
        transition={{ duration: 0.6, delay: index * 0.2 }}
        className='relative'
      >
        <div className='grid md:grid-cols-12 gap-6 items-start group'>
          <div className='md:col-span-3 relative'>
            <motion.div
              className={`absolute -left-3 w-16 h-16 md:w-24 md:h-24 rounded-full shadow-lg flex items-center justify-center z-10 bg-gradient-to-r ${value.gradient}`}
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <span className='text-2xl md:text-3xl font-bold text-white'>
                {value.number}
              </span>
            </motion.div>
            <h3 className='text-xl md:text-2xl font-bold text-gray-900 pl-16 md:pl-24 pt-4'>
              {value.title}
            </h3>
          </div>

          <motion.div
            className='md:col-span-9'
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <div className='relative overflow-hidden'>
              <motion.div
                className='bg-white/50 backdrop-blur-sm p-6 rounded-2xl shadow-sm border border-[#38b5ff]/10 group-hover:shadow-md group-hover:border-[#38b5ff]/20 transition-all duration-300'
                whileHover={{ y: -5 }}
              >
                <p className='text-lg text-gray-600 leading-relaxed'>
                  {value.description}
                </p>
                <motion.div
                  className='mt-4 flex items-center space-x-2 text-[#38b5ff]'
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <value.icon className='h-5 w-5' />
                  <span className='text-sm font-medium'>Learn more</span>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    )
  }

  return (
    <div className='relative min-h-screen overflow-hidden' ref={containerRef}>
      {/* Animated background patterns */}
      <div className='fixed inset-0 pointer-events-none'>
        <motion.div
          className='absolute top-0 left-0 w-full h-full'
          style={{
            background:
              'radial-gradient(circle at 0% 0%, rgba(56, 181, 255, 0.1) 0%, transparent 50%)',
            opacity,
          }}
        />
        <motion.div
          className='absolute bottom-0 right-0 w-full h-full'
          style={{
            background:
              'radial-gradient(circle at 100% 100%, rgba(56, 181, 255, 0.1) 0%, transparent 50%)',
            opacity,
          }}
        />
      </div>

      <motion.div
        className='container mx-auto px-4 pt-20 pb-32 relative z-10'
        ref={targetRef}
        style={{ opacity, scale, y }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='text-center mb-24'
        >
          <motion.div
            className='inline-block'
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <span className='px-6 py-2 bg-[#38b5ff]/10 rounded-full text-[#38b5ff] font-semibold inline-block mb-4'>
              Our Core Values
            </span>
          </motion.div>
          <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-8'>
            What Drives Us Forward
          </h2>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className='text-[#38b5ff]'
          >
            <ChevronDown className='w-6 h-6 mx-auto' />
          </motion.div>
        </motion.div>

        <div className='space-y-16 relative'>
          {/* Animated connecting line */}
          <motion.div
            className='absolute left-[40px] md:left-[60px] top-0 bottom-0 w-px bg-gradient-to-b from-[#38b5ff]/0 via-[#38b5ff]/20 to-[#38b5ff]/0'
            style={{
              scaleY: useSpring(useTransform(scrollYProgress, [0, 1], [0, 1])),
              originY: 0,
            }}
          />

          {values.map((value, index) => (
            <ValueCard key={value.number} value={value} index={index} />
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default Values
