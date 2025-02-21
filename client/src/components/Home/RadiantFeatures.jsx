import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import {
  Award,
  Banknote,
  Bot,
  Calendar,
  Clock,
  Database,
  HeartPulse,
  MessageSquare,
  Sparkles,
  Star,
  Users,
  Wallet,
} from 'lucide-react'
import React, { useRef } from 'react'

// Keeping all the decorative elements (CircuitLines, HexGrid, FloatingOrbs, AbstractShape) exactly the same
const CircuitLines = () => (
  <svg className='absolute w-full h-full' viewBox='0 0 400 400'>
    <motion.path
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 2, ease: 'easeInOut' }}
      d='M50,200 C50,100 150,100 150,200 C150,300 250,300 250,200 C250,100 350,100 350,200'
      fill='none'
      stroke='url(#circuit-gradient)'
      strokeWidth='0.5'
      className='opacity-20'
    />
    <defs>
      <linearGradient id='circuit-gradient' x1='0%' y1='0%' x2='100%' y2='0%'>
        <stop offset='0%' stopColor='#8B5CF6' />
        <stop offset='100%' stopColor='#EC4899' />
      </linearGradient>
    </defs>
  </svg>
)

const HexGrid = () => (
  <svg
    className='absolute inset-0 w-full h-full opacity-10'
    viewBox='0 0 400 400'
  >
    <pattern
      id='hexagons'
      x='0'
      y='0'
      width='50'
      height='43.4'
      patternUnits='userSpaceOnUse'
    >
      <path
        d='M25,0 L50,14.3 L50,38.4 L25,52.7 L0,38.4 L0,14.3 Z'
        fill='none'
        stroke='currentColor'
        strokeWidth='0.5'
      />
    </pattern>
    <rect width='100%' height='100%' fill='url(#hexagons)' />
  </svg>
)

const FloatingOrbs = () => {
  const orbs = Array(5).fill(null)
  return (
    <div className='absolute inset-0 overflow-hidden'>
      {orbs.map((_, i) => (
        <motion.div
          key={i}
          className='absolute w-32 h-32 rounded-full'
          style={{
            background: `radial-gradient(circle at center, ${
              i % 2 ? '#8B5CF6' : '#EC4899'
            }15, transparent)`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, Math.random() * 100 - 50],
            y: [0, Math.random() * 100 - 50],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}

const AbstractShape = () => (
  <svg
    className='absolute right-0 top-0 w-96 h-96 opacity-20'
    viewBox='0 0 200 200'
  >
    <motion.path
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1 }}
      d='M45,-76.1C58.3,-69.3,69.4,-57.4,78.3,-43.5C87.2,-29.6,93.8,-14.8,92.9,-0.5C92,13.8,83.5,27.5,74.1,40.3C64.7,53,54.4,64.7,41.6,71.7C28.8,78.7,14.4,81,-0.2,81.3C-14.8,81.6,-29.6,79.9,-43.1,73.4C-56.6,66.9,-68.8,55.5,-77.4,41.6C-86,27.7,-91,13.8,-91.2,-0.1C-91.4,-14.1,-86.8,-28.2,-78.3,-39.7C-69.8,-51.2,-57.4,-60.1,-44.1,-67C-30.8,-73.9,-15.4,-78.8,0.2,-79.1C15.7,-79.4,31.7,-82.9,45,-76.1Z'
      fill='url(#abstract-gradient)'
      transform='translate(100 100)'
    />
    <defs>
      <linearGradient id='abstract-gradient' x1='0%' y1='0%' x2='100%' y2='0%'>
        <stop offset='0%' stopColor='#8B5CF6' stopOpacity='0.2' />
        <stop offset='100%' stopColor='#EC4899' stopOpacity='0.2' />
      </linearGradient>
    </defs>
  </svg>
)

const FeatureCard = ({ icon: Icon, title, description, index }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      className='relative group'
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className='absolute inset-0 bg-gradient-to-r from-violet-600/20 to-fuchsia-600/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100' />
      <div className='relative p-6 bg-black/40 backdrop-blur-md rounded-xl border border-white/5 hover:border-white/10 transition-colors'>
        <div className='flex items-center gap-4 mb-4'>
          <div className='p-2 bg-gradient-to-br from-violet-500/10 to-fuchsia-500/10 rounded-lg'>
            <Icon className='w-6 h-6 text-violet-400' />
          </div>
          <h3 className='text-lg font-medium bg-gradient-to-r from-violet-200 to-fuchsia-200 bg-clip-text text-transparent'>
            {title}
          </h3>
        </div>
        <p className='text-zinc-400 text-sm leading-relaxed'>{description}</p>
      </div>
    </motion.div>
  )
}

const RadiantFeatures = () => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const features = [
    {
      icon: Calendar,
      title: 'Smart Scheduling',
      description:
        'Streamline your med spa bookings with automated scheduling, reminders, and waitlist management to maximize your calendar.',
    },
    {
      icon: Bot,
      title: 'AI Virtual Assistant',
      description:
        'Our AI handles routine inquiries 24/7, answering treatment questions and helping patients book appointments automatically.',
    },
    {
      icon: HeartPulse,
      title: 'Patient Experience',
      description:
        'Track patient journeys, preferences, and treatment history to deliver personalized care and build lasting relationships.',
    },
    {
      icon: MessageSquare,
      title: 'Smart Follow-Ups',
      description:
        'Automated post-treatment check-ins and personalized care instructions ensure optimal patient recovery and satisfaction.',
    },
    {
      icon: Database,
      title: 'Treatment Tracking',
      description:
        'Maintain detailed treatment records, before/after photos, and patient notes in one secure, HIPAA-compliant platform.',
    },
    {
      icon: Sparkles,
      title: 'AI Marketing',
      description:
        'Our AI creates and optimizes your social media ads across platforms, targeting ideal clients for your specific treatments.',
    },
    {
      icon: Star,
      title: 'Review Generation',
      description:
        'Turn satisfied patients into powerful testimonials with automated review requests and reputation management.',
    },
    {
      icon: Wallet,
      title: 'Payment Solutions',
      description:
        'Handle deposits, treatment packages, and membership plans with integrated payment processing and automated billing.',
    },
    {
      icon: Clock,
      title: '24/7 Reception',
      description:
        'Our virtual receptionists handle calls, messages, and bookings around the clock, ensuring you never miss an opportunity.',
    },
    {
      icon: Banknote,
      title: 'Revenue Insights',
      description:
        'Track treatment popularity, revenue trends, and client retention with detailed analytics and forecasting.',
    },
    {
      icon: Users,
      title: 'Staff Management',
      description:
        'Optimize provider schedules, track performance, and manage commission structures all in one place.',
    },
    {
      icon: MessageSquare,
      title: 'Client Communication',
      description:
        'Send branded appointment confirmations, birthday offers, and treatment reminders via email, SMS, or WhatsApp.',
    },
  ]

  const practiceTypes = [
    { name: 'Med Spas' },
    { name: 'Aesthetic Clinics' },
    { name: 'Beauty Centers' },
  ]

  return (
    <section
      ref={containerRef}
      className='relative min-h-screen bg-black py-24 px-4 overflow-hidden'
    >
      {/* Background Elements */}
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-violet-500/10 via-fuchsia-500/5 to-transparent' />
      <div className='absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black_40%,transparent_100%)]' />

      {/* Decorative Illustrations */}
      <FloatingOrbs />
      <CircuitLines />
      <HexGrid />
      <AbstractShape />

      <div className='relative max-w-7xl mx-auto'>
        <motion.div style={{ y, opacity }} className='text-center mb-20'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='inline-block mb-6'
          >
            <div className='flex items-center justify-center gap-3 text-sm font-medium'>
              {practiceTypes.map(({ name }, i) => (
                <React.Fragment key={name}>
                  <span className='text-zinc-400'>{name}</span>
                  {i < practiceTypes.length - 1 && (
                    <span className='w-1 h-1 rounded-full bg-zinc-700' />
                  )}
                </React.Fragment>
              ))}
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className='text-4xl md:text-5xl font-bold bg-gradient-to-r from-violet-200 via-fuchsia-200 to-violet-200 bg-clip-text text-transparent mb-6'
          >
            Transform Your Beauty Practice
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='text-lg text-zinc-400 max-w-2xl mx-auto'
          >
            RadiantAI combines intelligent automation with human expertise to
            help you deliver exceptional patient experiences while growing your
            practice
          </motion.p>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default RadiantFeatures
