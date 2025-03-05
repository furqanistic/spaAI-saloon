import { motion } from 'framer-motion'
import {
  Bell,
  CheckCircle,
  Menu,
  Search,
  Settings,
  Shield,
  Sparkles,
  Star,
} from 'lucide-react'

const PreviewDisplay = () => {
  return (
    <div className='relative'>
      {/* Main Preview Container - Responsive scaling and removal of fixed transform values */}
      <div
        className='relative bg-white/40 backdrop-blur-sm border border-purple-200/30 rounded-xl shadow-xl overflow-hidden 
                      transform-none scale-100 
                      sm:scale-105 sm:transform sm:origin-center 
                      md:scale-110 md:transform md:origin-center 
                      lg:scale-110 lg:transform lg:origin-left'
      >
        {/* Prismatic top border */}
        <div className='absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500' />

        {/* Glassmorphic Top Bar */}
        <div className='absolute top-0 left-0 right-0 h-8 bg-white/20 backdrop-blur-sm border-b border-purple-200/20 z-10'>
          <div className='flex items-center justify-between px-2 md:px-4 h-full'>
            <div className='flex items-center gap-2 md:gap-3'>
              <div className='flex gap-1 md:gap-1.5'>
                <div className='w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-purple-400' />
                <div className='w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-pink-400' />
                <div className='w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-blue-400' />
              </div>
              <span className='text-xs md:text-sm font-bold text-purple-600'>
                Radiant AI
              </span>
            </div>
            <div className='flex items-center gap-2 md:gap-3'>
              {/* Hide the search on very small screens */}
              <div className='hidden sm:flex px-2 py-0.5 rounded-full bg-purple-100 backdrop-blur-sm items-center'>
                <Search className='w-3 h-3 text-purple-600 mr-1' />
                <span className='text-xs font-medium text-purple-600'>
                  Search
                </span>
              </div>
              <motion.div
                className='px-2 py-0.5 rounded-full bg-gradient-to-r from-green-500/20 to-green-500/10 backdrop-blur-sm border border-green-400/20 flex items-center gap-1'
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className='w-1.5 h-1.5 rounded-full bg-green-400' />
                <span className='text-xs font-medium text-green-700'>
                  Connected
                </span>
              </motion.div>
            </div>
          </div>
        </div>

        <div className='flex'>
          {/* Left Sidebar - Responsive sizing */}
          <div className='w-8 sm:w-10 border-r border-purple-200/20 bg-white/10 backdrop-blur-sm pt-10 flex flex-col items-center gap-4'>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className='w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center'
            >
              <Sparkles className='w-2.5 h-2.5 sm:w-3 sm:h-3 text-white' />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className='w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white/30 flex items-center justify-center'
            >
              <Star className='w-2.5 h-2.5 sm:w-3 sm:h-3 text-purple-600' />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className='w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white/30 flex items-center justify-center'
            >
              <Shield className='w-2.5 h-2.5 sm:w-3 sm:h-3 text-purple-600' />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className='w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white/30 flex items-center justify-center'
            >
              <Settings className='w-2.5 h-2.5 sm:w-3 sm:h-3 text-purple-600' />
            </motion.div>
          </div>

          {/* Main Content Area */}
          <div className='flex-1'>
            {/* Main Display Area - Responsive video container */}
            <div className='relative overflow-hidden pt-8 w-full'>
              <video
                src='/PREVIEW.mp4'
                autoPlay
                loop
                muted
                playsInline
                className='w-full h-full object-cover'
                style={{ aspectRatio: '16/9' }}
              />
            </div>

            {/* Glass Footer - Responsive padding and handling of complex layout */}
            <div className='px-2 py-1 sm:px-4 sm:py-1.5 bg-white/20 backdrop-blur-sm border-t border-purple-200/20'>
              <div className='flex justify-between items-center'>
                <div className='flex items-center gap-2 sm:gap-4'>
                  {/* First feature - always visible but compact on mobile */}
                  <div className='flex items-center gap-1 sm:gap-2'>
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className='w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center'
                    >
                      <Sparkles className='w-2 h-2 sm:w-3 sm:h-3 text-white' />
                    </motion.div>
                    <span className='text-xs sm:text-sm font-bold text-purple-600'>
                      Smart Insights
                    </span>
                  </div>

                  {/* Second feature - hide on very small screens */}
                  <div className='hidden sm:flex items-center gap-2'>
                    <motion.div
                      whileHover={{ rotateY: 180 }}
                      transition={{ duration: 0.5 }}
                      className='w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center'
                    >
                      <Shield className='w-3 h-3 text-white' />
                    </motion.div>
                    <span className='text-sm font-bold text-purple-600'>
                      HIPAA Compliant
                    </span>
                  </div>
                </div>

                {/* Action buttons */}
                <div className='flex items-center gap-2'>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className='w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-purple-100 flex items-center justify-center'
                  >
                    <Bell className='w-2.5 h-2.5 sm:w-3 sm:h-3 text-purple-600' />
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className='w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-purple-100 flex items-center justify-center'
                  >
                    <Menu className='w-2.5 h-2.5 sm:w-3 sm:h-3 text-purple-600' />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar - Optional on mobile (hidden on very small screens) */}
          <div className='hidden sm:flex w-8 sm:w-10 md:w-12 border-l border-purple-200/20 bg-white/10 backdrop-blur-sm pt-10 flex-col items-center gap-6'>
            <motion.div
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 3, repeat: Infinity }}
              className='w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center'
            >
              <span className='text-xs font-bold text-white'>AI</span>
            </motion.div>
            <div className='w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-blue-100 flex items-center justify-center'>
              <span className='text-xs font-bold text-blue-600'>JD</span>
            </div>
            <div className='w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-green-100 flex items-center justify-center'>
              <span className='text-xs font-bold text-green-600'>TS</span>
            </div>
            <div className='w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-purple-100 flex items-center justify-center'>
              <span className='text-xs font-bold text-purple-600'>+</span>
            </div>
          </div>
        </div>
      </div>

      {/* Simplified Background Glow - Single subtle effect */}
      <motion.div
        className='absolute -inset-4 sm:-inset-6 md:-inset-8 bg-gradient-to-r from-purple-600/5 via-pink-500/3 to-blue-500/5 rounded-3xl blur-2xl -z-10'
        animate={{
          opacity: [0.1, 0.2, 0.1],
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
