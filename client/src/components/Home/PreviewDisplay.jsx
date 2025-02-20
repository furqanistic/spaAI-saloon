import { motion } from 'framer-motion'
import { Play, Shield, Sparkles, Star } from 'lucide-react'
import React from 'react'

const PreviewDisplay = () => {
  return (
    <div className='relative'>
      {/* Main Preview Container */}
      <div className='relative bg-white rounded-2xl shadow-2xl overflow-hidden'>
        {/* Decorative Top Bar */}
        <div className='absolute top-0 left-0 right-0 h-12 bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm z-10'>
          <div className='flex items-center justify-between px-4 h-full'>
            <div className='flex items-center gap-2'>
              <div className='flex gap-1.5'>
                <div className='w-3 h-3 rounded-full bg-red-400' />
                <div className='w-3 h-3 rounded-full bg-yellow-400' />
                <div className='w-3 h-3 rounded-full bg-green-400' />
              </div>
            </div>
            <motion.div
              className='px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm flex items-center gap-1'
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className='w-2 h-2 rounded-full bg-green-400' />
              <span className='text-xs text-white/70'>Live Preview</span>
            </motion.div>
          </div>
        </div>

        {/* GIF Display */}
        <div className='aspect-[4/3] relative overflow-hidden'>
          <img
            src='/PREVIEW.gif'
            alt='Platform Dashboard'
            className='w-full h-full object-cover'
          />

          {/* Decorative Corner Elements */}
          <div className='absolute top-4 right-4 p-2 bg-white/10 backdrop-blur-sm rounded-lg'>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            >
              <Sparkles className='w-5 h-5 text-white/70' />
            </motion.div>
          </div>

          {/* Bottom Stats Bar */}
          <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 via-black/30 to-transparent p-4'>
            <div className='flex justify-between items-center text-white'>
              <div className='flex items-center gap-4'>
                <div className='flex items-center gap-1'>
                  <Play className='w-4 h-4' />
                  <span className='text-sm'>Real-time data</span>
                </div>
                <div className='flex items-center gap-1'>
                  <Star className='w-4 h-4' />
                  <span className='text-sm'>AI-powered</span>
                </div>
              </div>
            </div>
          </div>

          {/* Animated Corner Accents */}
          {[
            'top-0 left-0 origin-top-left',
            'top-0 right-0 origin-top-right',
            'bottom-0 left-0 origin-bottom-left',
            'bottom-0 right-0 origin-bottom-right',
          ].map((position, index) => (
            <motion.div
              key={index}
              className={`absolute ${position} w-16 h-16 pointer-events-none`}
              initial={false}
              animate={{
                opacity: [0.3, 0.5, 0.3],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: index * 0.5,
              }}
            >
              <div className='absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 blur-md' />
              <div className='absolute inset-0 border-2 border-white/10 rounded-lg' />
            </motion.div>
          ))}
        </div>

        {/* Info Footer */}
        <div className='px-6 py-4 bg-gradient-to-r from-gray-900/5 to-purple-900/5'>
          <div className='flex justify-between items-center'>
            <div className='flex items-center gap-4'>
              <div className='flex items-center gap-2'>
                <Sparkles className='w-4 h-4 text-purple-500' />
                <span className='text-sm font-medium text-gray-700'>
                  AI-Powered Insights
                </span>
              </div>
              <div className='flex items-center gap-2'>
                <Shield className='w-4 h-4 text-purple-500' />
                <span className='text-sm font-medium text-gray-700'>
                  HIPAA Compliant
                </span>
              </div>
            </div>
            <motion.div
              className='flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50'
              whileHover={{ scale: 1.02 }}
            >
              <Star className='w-4 h-4 text-purple-500' />
              <span className='text-sm font-medium text-purple-700'>
                Premium Features
              </span>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Background Glow Effect */}
      <motion.div
        className='absolute -inset-4 bg-gradient-to-r from-purple-600/10 via-pink-500/10 to-blue-500/10 rounded-3xl blur-xl -z-10'
        animate={{
          opacity: [0.3, 0.5, 0.3],
          scale: [1, 1.02, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  )
}

export default PreviewDisplay
