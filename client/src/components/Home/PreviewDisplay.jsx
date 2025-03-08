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
      {/* Main Preview Container - with glass morphism effect */}
      <div className='relative bg-white/40 backdrop-blur-sm border border-purple-200/30 rounded-xl shadow-xl overflow-hidden md:scale-125 md:transform md:origin-left scale-110 transform origin-center'>
        {/* Prismatic top border */}
        <div className='absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500' />

        {/* Glassmorphic Top Bar - Further reduced height */}
        <div className='absolute top-0 left-0 right-0 h-6 bg-white/20 backdrop-blur-sm border-b border-purple-200/20 z-10'>
          <div className='flex items-center justify-between px-3 h-full'>
            <div className='flex items-center gap-2'>
              <div className='flex gap-1'>
                <div className='w-1.5 h-1.5 rounded-full bg-purple-400' />
                <div className='w-1.5 h-1.5 rounded-full bg-pink-400' />
                <div className='w-1.5 h-1.5 rounded-full bg-blue-400' />
              </div>
              <span className='text-xs font-bold text-purple-600 hidden sm:inline'>
                Radiant AI
              </span>
            </div>
            <div className='flex items-center gap-2'>
              <div className='px-1.5 py-0.5 rounded-full bg-purple-100 backdrop-blur-sm flex items-center hidden sm:flex'>
                <Search className='w-2 h-2 text-purple-600 mr-1' />
                <span className='text-xs font-medium text-purple-600'>
                  Search
                </span>
              </div>
              <motion.div
                className='px-1.5 py-0.5 rounded-full bg-gradient-to-r from-green-500/20 to-green-500/10 backdrop-blur-sm border border-green-400/20 flex items-center gap-1'
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className='w-1 h-1 rounded-full bg-green-400' />
                <span className='text-xs font-medium text-green-700 hidden sm:inline'>
                  Connected
                </span>
              </motion.div>
            </div>
          </div>
        </div>

        <div className='flex'>
          {/* Left Sidebar - Hidden on mobile, visible on larger screens */}
          <div className='w-6 border-r border-purple-200/20 bg-white/10 backdrop-blur-sm pt-8 hidden sm:flex flex-col items-center gap-3'>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className='w-4 h-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center'
            >
              <Sparkles className='w-2 h-2 text-white' />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className='w-4 h-4 rounded-full bg-white/30 flex items-center justify-center'
            >
              <Star className='w-2 h-2 text-purple-600' />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className='w-4 h-4 rounded-full bg-white/30 flex items-center justify-center'
            >
              <Shield className='w-2 h-2 text-purple-600' />
            </motion.div>
          </div>

          {/* Main Content Area - Expanded to take more space especially on mobile */}
          <div className='flex-1'>
            {/* Main Display Area - Increased height with fullscreen option for mobile */}
            <div className='relative overflow-hidden pt-6 group'>
              <video
                id='previewVideo'
                src='/PREVIEW.mp4'
                autoPlay
                loop
                muted
                playsInline
                className='w-full h-full object-cover min-h-[180px] sm:min-h-[200px]'
              />

              {/* Fullscreen button - Only visible on mobile devices */}
              <button
                onClick={() => {
                  const video = document.getElementById('previewVideo')
                  if (video) {
                    if (video.requestFullscreen) {
                      video.requestFullscreen()
                    } else if (video.webkitRequestFullscreen) {
                      /* Safari */
                      video.webkitRequestFullscreen()
                    } else if (video.msRequestFullscreen) {
                      /* IE11 */
                      video.msRequestFullscreen()
                    }
                  }
                }}
                className='absolute bottom-2 right-2 bg-black/40 backdrop-blur-sm p-1.5 rounded-full 
                          text-white opacity-0 sm:hidden group-hover:opacity-100 focus:opacity-100 
                          active:opacity-100 transition-opacity duration-200'
                aria-label='View full screen'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <polyline points='15 3 21 3 21 9'></polyline>
                  <polyline points='9 21 3 21 3 15'></polyline>
                  <line x1='21' y1='3' x2='14' y2='10'></line>
                  <line x1='3' y1='21' x2='10' y2='14'></line>
                </svg>
              </button>
            </div>

            {/* Glass Footer - Hidden on mobile, minimal on larger screens */}
            <div className='px-3 py-1 bg-white/20 backdrop-blur-sm border-t border-purple-200/20 hidden sm:block'>
              <div className='flex justify-between items-center'>
                <div className='flex items-center gap-2'>
                  <div className='flex items-center gap-1.5'>
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className='w-4 h-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center'
                    >
                      <Sparkles className='w-2 h-2 text-white' />
                    </motion.div>
                    <span className='text-xs font-bold text-purple-600'>
                      Smart Insights
                    </span>
                  </div>
                </div>
                <div className='flex items-center gap-2'>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className='w-4 h-4 rounded-full bg-purple-100 flex items-center justify-center'
                  >
                    <Bell className='w-2 h-2 text-purple-600' />
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className='w-4 h-4 rounded-full bg-purple-100 flex items-center justify-center'
                  >
                    <Menu className='w-2 h-2 text-purple-600' />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar - Hidden on mobile, visible on larger screens */}
          <div className='w-6 border-l border-purple-200/20 bg-white/10 backdrop-blur-sm pt-8 hidden sm:flex flex-col items-center gap-4'>
            <motion.div
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 3, repeat: Infinity }}
              className='w-4 h-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center'
            >
              <span className='text-xs font-bold text-white'>AI</span>
            </motion.div>
            <div className='w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center'>
              <span className='text-xs font-bold text-blue-600'>J</span>
            </div>
            <div className='w-4 h-4 rounded-full bg-green-100 flex items-center justify-center'>
              <span className='text-xs font-bold text-green-600'>T</span>
            </div>
          </div>
        </div>
      </div>

      {/* Simplified Background Glow - Single subtle effect */}
      <motion.div
        className='absolute -inset-8 bg-gradient-to-r from-purple-600/5 via-pink-500/3 to-blue-500/5 rounded-3xl blur-2xl -z-10'
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
