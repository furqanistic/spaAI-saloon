import { motion } from 'framer-motion'
import {
  BarChart4,
  CheckCircle,
  Play,
  Shield,
  Sparkles,
  Star,
  Users,
  Zap,
} from 'lucide-react'
import React from 'react'

const PreviewDisplay = () => {
  return (
    <div className='relative'>
      {/* Main Preview Container - with glass morphism effect */}
      <div className='relative bg-white/60 backdrop-blur-md border border-purple-200/50 rounded-3xl shadow-xl overflow-hidden md:scale-125 md:transform md:origin-left scale-100 transform origin-center'>
        {/* Prismatic top border */}
        <div className='absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500' />

        {/* Glassmorphic Top Bar */}
        <div className='absolute top-0 left-0 right-0 h-14 bg-white/30 backdrop-blur-md border-b border-purple-200/30 z-10'>
          <div className='flex items-center justify-between px-6 h-full'>
            <div className='flex items-center gap-3'>
              <div className='flex gap-1.5'>
                <div className='w-3 h-3 rounded-full bg-purple-400' />
                <div className='w-3 h-3 rounded-full bg-pink-400' />
                <div className='w-3 h-3 rounded-full bg-blue-400' />
              </div>
              <div className='h-4 w-px bg-purple-200/40'></div>
              <span className='text-sm font-bold text-purple-600'>
                Radiant AI
              </span>
            </div>
            <motion.div
              className='px-3 py-1 rounded-full bg-gradient-to-r from-green-500/20 to-green-500/10 backdrop-blur-sm border border-green-400/20 flex items-center gap-1'
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className='w-2 h-2 rounded-full bg-green-400' />
              <span className='text-xs font-medium text-green-700'>
                Connected
              </span>
            </motion.div>
          </div>
        </div>

        {/* Main Display Area */}
        <div className='aspect-[16/9] relative overflow-hidden pt-14'>
          {/* Background gradient overlay */}
          <div className='absolute inset-0 bg-gradient-to-br from-purple-600/20 via-transparent to-blue-500/20 z-0'></div>

          <video
            src='/PREVIEW.mp4'
            autoPlay
            loop
            muted
            playsInline
            className='w-full h-full object-cover'
          />

          {/* Animated Floating Elements */}
          <motion.div
            className='absolute right-1/4 top-1/3 w-16 h-16 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/10 backdrop-blur-sm border border-white/10 hidden sm:block'
            animate={{
              y: [0, -15, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <CheckCircle className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 text-purple-500/70' />
          </motion.div>

          <motion.div
            className='absolute left-1/3 bottom-1/4 w-12 h-12 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/10 backdrop-blur-sm border border-white/10 hidden sm:block'
            animate={{
              y: [0, 10, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1,
            }}
          >
            <Star className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 text-blue-500/70' />
          </motion.div>
        </div>

        {/* Glass Footer */}
        <div className='px-6 py-4 bg-white/30 backdrop-blur-md border-t border-purple-200/30'>
          <div className='flex justify-between items-center flex-wrap gap-2'>
            <div className='flex items-center gap-3 sm:gap-6 flex-wrap'>
              <div className='flex items-center gap-2'>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className='w-6 h-6 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center'
                >
                  <Sparkles className='w-3 h-3 text-white' />
                </motion.div>
                <span className='text-sm font-bold text-purple-600'>
                  Smart Insights
                </span>
              </div>
              <div className='flex items-center gap-2'>
                <motion.div
                  whileHover={{ rotateY: 180 }}
                  transition={{ duration: 0.5 }}
                  className='w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center'
                >
                  <Shield className='w-3 h-3 text-white' />
                </motion.div>
                <span className='text-sm font-bold text-purple-600'>
                  HIPAA Compliant
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Background Glow Effects */}
      <motion.div
        className='absolute -inset-8 bg-gradient-to-r from-purple-600/20 via-pink-500/10 to-blue-500/20 rounded-3xl blur-2xl -z-10'
        animate={{
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Additional glow accents */}
      <motion.div
        className='absolute -bottom-4 right-12 w-48 h-48 rounded-full bg-purple-500/20 blur-3xl -z-20 hidden sm:block'
        animate={{
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
      />

      <motion.div
        className='absolute -top-8 -left-8 w-32 h-32 rounded-full bg-blue-500/20 blur-3xl -z-20 hidden sm:block'
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 0.5,
        }}
      />
    </div>
  )
}

export default PreviewDisplay
