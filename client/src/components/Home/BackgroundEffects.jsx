// BackgroundEffects.jsx
import { motion } from 'framer-motion'

export const WavyBackground = () => (
  <svg
    className='absolute w-full h-full top-0 left-0 -z-10'
    viewBox='0 0 1440 320'
    preserveAspectRatio='none'
  >
    <path
      fill='rgba(124, 58, 237, 0.05)'
      d='M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,149.3C672,149,768,171,864,165.3C960,160,1056,128,1152,117.3C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
    />
    <path
      fill='rgba(236, 72, 153, 0.05)'
      d='M0,32L48,53.3C96,75,192,117,288,122.7C384,128,480,96,576,85.3C672,75,768,85,864,106.7C960,128,1056,160,1152,165.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
    />
  </svg>
)

export const GridBackground = () => (
  <div className='absolute inset-0 -z-10'>
    <div
      className='absolute inset-0'
      style={{
        backgroundImage:
          'radial-gradient(circle at 1px 1px, rgba(124, 58, 237, 0.05) 1px, transparent 0)',
        backgroundSize: '40px 40px',
      }}
    />
  </div>
)

export const GradientBlobs = () => (
  <div className='absolute inset-0 -z-10 overflow-hidden'>
    <motion.div
      className='absolute w-96 h-96 rounded-full blur-3xl opacity-20 bg-purple-400 top-0 right-0 translate-x-1/2 -translate-y-1/2'
      animate={{
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
    <motion.div
      className='absolute w-96 h-96 rounded-full blur-3xl opacity-20 bg-pink-400 bottom-0 left-0 -translate-x-1/2 translate-y-1/2'
      animate={{
        scale: [1.1, 1, 1.1],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  </div>
)
