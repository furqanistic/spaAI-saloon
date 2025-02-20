import { motion, useScroll, useTransform } from 'framer-motion'
import {
  ArrowRight,
  CreditCard,
  Smartphone,
  Sparkles,
  Wallet,
} from 'lucide-react'
import React, { useCallback, useRef } from 'react'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'

const ScrollSection = ({ children, className }) => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  return (
    <div ref={ref} className={className}>
      {children(scrollYProgress)}
    </div>
  )
}

const IllustrationCard = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1])
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1])

  return (
    <motion.div style={{ scale, opacity }} className='w-full h-full'>
      <svg viewBox='0 0 400 300' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <motion.rect
          x='50'
          y='80'
          width='300'
          height='180'
          rx='20'
          className='fill-white/10'
          stroke='white'
          strokeWidth='2'
        />

        <motion.rect
          x='80'
          y='120'
          width='40'
          height='30'
          rx='4'
          fill='#38bdf8'
        />

        <motion.g>
          <rect
            x='80'
            y='170'
            width='240'
            height='10'
            rx='2'
            fill='white'
            fillOpacity='0.3'
          />
          <rect
            x='80'
            y='190'
            width='160'
            height='10'
            rx='2'
            fill='white'
            fillOpacity='0.3'
          />
          <circle cx='280' cy='195' r='20' fill='#818cf8' fillOpacity='0.5' />
          <circle cx='300' cy='195' r='20' fill='#38bdf8' fillOpacity='0.5' />
        </motion.g>

        <motion.g
          animate={{
            y: [0, -10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        >
          <circle cx='350' cy='100' r='15' fill='#38bdf8' fillOpacity='0.6' />
          <circle cx='50' cy='200' r='10' fill='#818cf8' fillOpacity='0.6' />
          <circle cx='320' cy='250' r='12' fill='#38bdf8' fillOpacity='0.6' />
        </motion.g>
      </svg>
    </motion.div>
  )
}

const PaymentFlow = ({ scrollYProgress }) => {
  const opacity = useTransform(scrollYProgress, [0.3, 0.4], [0, 1])
  const x = useTransform(scrollYProgress, [0.3, 0.4], [-50, 0])

  return (
    <motion.div style={{ opacity, x }} className='w-full h-full'>
      <svg viewBox='0 0 400 200' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <circle cx='80' cy='100' r='30' fill='#818cf8' fillOpacity='0.3' />
        <circle cx='200' cy='100' r='30' fill='#38bdf8' fillOpacity='0.3' />
        <circle cx='320' cy='100' r='30' fill='#818cf8' fillOpacity='0.3' />

        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          d='M110 100 H170 M230 100 H290'
          stroke='white'
          strokeWidth='2'
          strokeDasharray='5 5'
        />
      </svg>
    </motion.div>
  )
}

const PaymentSection = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine)
  }, [])

  const particlesOptions = {
    particles: {
      number: { value: 80, density: { enable: true, value_area: 800 } },
      color: { value: ['#38bdf8', '#818cf8', '#c084fc'] },
      shape: {
        type: ['circle', 'triangle'],
        stroke: { width: 0 },
      },
      opacity: {
        value: 0.5,
        random: true,
        anim: { enable: true, speed: 1, opacity_min: 0.1 },
      },
      size: {
        value: 4,
        random: true,
        anim: { enable: true, speed: 2, size_min: 0.1 },
      },
      move: {
        enable: true,
        speed: 2,
        direction: 'none',
        random: true,
        straight: false,
        out_mode: 'out',
        bounce: true,
        attract: { enable: true, rotateX: 600, rotateY: 1200 },
      },
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: { enable: true, mode: ['grab', 'bubble'] },
        onclick: { enable: true, mode: 'push' },
        resize: true,
      },
      modes: {
        grab: { distance: 140, line_linked: { opacity: 1 } },
        bubble: {
          distance: 200,
          size: 12,
          duration: 2,
          opacity: 0.8,
          speed: 3,
        },
        push: { particles_nb: 4 },
      },
    },
    retina_detect: true,
  }

  const features = [
    { icon: CreditCard, text: 'Tap & Pay' },
    { icon: Smartphone, text: 'Mobile Payments' },
    { icon: Wallet, text: 'Digital Wallets' },
  ]

  return (
    <div className='relative min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-sky-500 overflow-hidden'>
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent)] animate-pulse' />
      <Particles
        className='absolute inset-0'
        init={particlesInit}
        options={particlesOptions}
      />

      <ScrollSection className='relative max-w-6xl mx-auto px-4 py-16 md:py-24'>
        {(scrollYProgress) => (
          <motion.div className='text-center'>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', duration: 0.8 }}
              className='mb-8'
            >
              <span className='inline-flex items-center px-8 py-3 text-sm font-black rounded-full bg-gradient-to-r from-sky-400 to-indigo-500 text-white shadow-2xl hover:shadow-sky-500/50 transition-all cursor-pointer'>
                <Sparkles className='w-5 h-5 mr-2 animate-pulse' />
                NEXT-GEN PAYMENTS
              </span>
            </motion.div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12'>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <h1 className='text-6xl md:text-7xl lg:text-8xl font-black text-white mb-8 tracking-tight text-left'>
                  Accept payments
                  <br />
                  <span className='bg-clip-text text-transparent bg-gradient-to-r from-sky-300 via-purple-300 to-sky-300 animate-text-shimmer'>
                    like never before
                  </span>
                </h1>
              </motion.div>

              <div className='relative h-64'>
                <IllustrationCard scrollYProgress={scrollYProgress} />
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className='max-w-4xl mx-auto bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl'
            >
              <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-8'>
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 + index * 0.2 }}
                    className='p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/20 transition-all cursor-pointer group'
                  >
                    <feature.icon className='w-8 h-8 text-sky-300 mb-3 mx-auto group-hover:scale-110 transition-transform' />
                    <p className='text-white font-bold'>{feature.text}</p>
                  </motion.div>
                ))}
              </div>

              <div className='relative h-32 mb-8'>
                <PaymentFlow scrollYProgress={scrollYProgress} />
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
                className='text-2xl md:text-3xl text-white/90 mb-6 font-medium'
              >
                <span className='text-sky-300 font-black'>RadiantAI</span>{' '}
                revolutionizes
                <span className='text-purple-300 font-black'>
                  {' '}
                  payment processing
                </span>
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1 }}
                className='flex justify-center relative z-50'
              >
                <motion.a
                  href='#explore'
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className='inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-sky-400 to-indigo-500 text-white text-lg font-black shadow-xl hover:shadow-sky-500/50 transition-all cursor-pointer relative z-50'
                >
                  START NOW
                  <ArrowRight className='ml-2 h-6 w-6' strokeWidth={2.5} />
                </motion.a>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </ScrollSection>
    </div>
  )
}

export default PaymentSection
