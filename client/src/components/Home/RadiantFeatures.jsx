import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import {
  Award,
  Bot,
  Building2,
  Calendar,
  Headphones,
  Hospital,
  MessageSquare,
  Scissors,
  Sparkles,
  Star,
  Target,
  Users,
} from 'lucide-react'
import React, { useRef } from 'react'

// Decorative Elements
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

const ModernFeatures = () => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const features = [
    {
      icon: Target,
      title: 'Lead Capture & Conversion',
      description:
        'Create custom landing pages that capture leads and convert them into paying clients with ease',
    },
    {
      icon: MessageSquare,
      title: 'Automated Follow-Ups',
      description:
        'Smart nurture campaigns automatically follow up with leads over 3 months until they are ready to book',
    },
    {
      icon: Calendar,
      title: 'Smart Scheduling',
      description:
        'Sync appointments across platforms and send automated reminders to reduce no-shows',
    },
    {
      icon: Sparkles,
      title: 'AI-Powered Ads',
      description:
        'Our media buyers optimize ad campaigns for Facebook, Instagram, TikTok, and Google Ads',
    },
    {
      icon: Star,
      title: 'Reputation Building',
      description:
        'Automated SMS feedback requests turn happy clients into glowing online reviews',
    },
    {
      icon: Users,
      title: 'Client Management',
      description:
        'Centralize client data to track interactions, segment audiences, and build loyalty',
    },
    {
      icon: Bot,
      title: 'Marketing Automation',
      description:
        'Automate email, SMS, and social media campaigns to engage clients at every stage',
    },
    {
      icon: Headphones,
      title: 'Human Support',
      description:
        'Our dedicated team acts as your virtual receptionist and sales team, ensuring no lead slips through the cracks',
    },
  ]

  const industries = [
    { icon: Building2, name: 'Med Spas' },
    { icon: Hospital, name: 'Clinics' },
    { icon: Scissors, name: 'Beauty Salons' },
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
            <div className='flex items-center gap-3 text-sm font-medium'>
              {industries.map(({ icon: Icon, name }, i) => (
                <React.Fragment key={name}>
                  <div className='flex items-center gap-1.5'>
                    <Icon className='w-4 h-4 text-violet-400' />
                    <span className='text-zinc-400'>{name}</span>
                  </div>
                  {i < industries.length - 1 && (
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
            Smart Tools for Growing Businesses
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='text-lg text-zinc-400 max-w-2xl mx-auto'
          >
            Powerful automation and AI tools combined with human expertise to
            help you scale your business efficiently
          </motion.p>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='mt-20 text-center'
        >
          <div className='inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10'>
            <Award className='w-5 h-5 text-violet-400' />
            <span className='text-sm text-zinc-400'>
              Trusted by 500+ businesses worldwide
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ModernFeatures
