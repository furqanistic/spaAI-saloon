import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  Calendar,
  CheckCircle,
  Shield,
  Sparkles,
  Stars,
  Users,
} from 'lucide-react'
import {
  GradientBlobs,
  GridBackground,
  WavyBackground,
} from './BackgroundEffects'
import BrandShowcase from './BrandShowcase'
import PreviewDisplay from './PreviewDisplay'

// Animated feature card component
const FeatureCard = ({ icon: Icon, text, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
    className='group relative'
  >
    <div className='absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
    <div className='relative flex items-center gap-3 p-4 rounded-lg hover:bg-white/50 transition-colors duration-300'>
      <div className='p-2 rounded-lg bg-white shadow-md group-hover:shadow-lg transition-shadow'>
        <Icon className='w-5 h-5 text-purple-600' />
      </div>
      <span className='text-gray-700 group-hover:text-gray-900 transition-colors duration-300'>
        {text}
      </span>
    </div>
  </motion.div>
)

// Floating notification component - Updated to be responsive
const FloatingNotification = ({ icon: Icon, text, className }) => (
  <motion.div
    initial='initial'
    animate='animate'
    className={`absolute hidden md:flex items-center gap-2 p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg ${className}`}
  >
    <Icon className='w-4 h-4 text-purple-500' />
    <span className='text-xs font-medium text-purple-700'>{text}</span>
  </motion.div>
)

const HeroSection = () => {
  return (
    <section className='relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-white via-purple-50 to-pink-50'>
      <WavyBackground />
      <GridBackground />
      <GradientBlobs />

      {/* Gradient Blobs */}
      <motion.div
        className='absolute w-64 h-64 sm:w-96 sm:h-96 rounded-full blur-3xl opacity-30 bg-purple-400 top-0 right-0'
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      <motion.div
        className='absolute w-64 h-64 sm:w-96 sm:h-96 rounded-full blur-3xl opacity-30 bg-pink-400 bottom-0 left-0'
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [90, 0, 90],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Floating Notifications - Updated positions for better visibility across screen sizes */}
      <FloatingNotification
        icon={Users}
        text='2,500+ Active Users'
        className='top-32 right-10 lg:right-48'
      />

      <FloatingNotification
        icon={Calendar}
        text='10k+ Appointments'
        className='top-24 left-10 lg:left-1/3'
      />

      <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 md:pt-32 pb-16 overflow-visible'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-center'>
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className='space-y-6 md:space-y-8 order-2 lg:order-1 pt-6 lg:pt-0'
          >
            {/* Enhanced Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className='relative inline-flex items-center px-4 sm:px-6 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-200 backdrop-blur-sm group'
            >
              <motion.div
                className='absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300'
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
              <Sparkles className='w-4 h-4 mr-2 text-purple-600' />
              <span className='text-xs sm:text-sm font-semibold text-purple-700'>
                All-in-One Beauty Practice Solution
              </span>
            </motion.div>

            {/* Main Heading - More responsive text sizes */}
            <div className='space-y-2'>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight'
              >
                <span className='block text-gray-900'>
                  The Proven System Med Spas Need
                </span>
                <span className='block bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text text-transparent'>
                  to Boost Revenue & Client Loyalty
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className='text-base md:text-lg text-gray-600 max-w-xl'
              >
                Get more clients, more bookings, and more revenue—all from one
                simple system.
              </motion.p>
            </div>

            {/* Enhanced Features */}
            <div className='space-y-3 md:space-y-4 pt-2 md:pt-4'>
              <FeatureCard
                icon={CheckCircle}
                text='Automated lead nurturing & follow-ups'
                delay={0.4}
              />
              <FeatureCard
                icon={Stars}
                text='Integrated appointment management'
                delay={0.5}
              />
              <FeatureCard
                icon={Shield}
                text='Smart reputation monitoring'
                delay={0.6}
              />
            </div>

            {/* Enhanced CTAs - Better mobile layout */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className='flex flex-col sm:flex-row gap-4 pt-4 md:pt-6'
            >
              <Button
                onClick={() => (window.location.href = '/pricing/')}
                className='relative h-12 sm:h-14 px-6 sm:px-8 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 shadow-lg group overflow-hidden w-full sm:w-auto'
              >
                <motion.div
                  className='absolute inset-0 bg-white opacity-0 group-hover:opacity-20'
                  animate={{
                    x: [-100, 200],
                  }}
                  transition={{
                    duration: 0.5,
                    ease: 'easeInOut',
                  }}
                />
                <span className='flex items-center gap-2'>
                  Get Started Free
                  <ArrowRight className='w-4 h-4 group-hover:translate-x-1 transition-transform' />
                </span>
              </Button>
              <Button
                variant='outline'
                className='h-12 sm:h-14 px-6 sm:px-8 border-2 border-purple-200 hover:bg-purple-50 transition-all duration-300 w-full sm:w-auto'
                onClick={() => (window.location.href = '/demo/')}
              >
                Book Live Demo
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Column - Preview Display with responsive scaling */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className='relative order-1 lg:order-2 mx-auto max-w-sm sm:max-w-md md:max-w-lg lg:max-w-none'
          >
            {/* Removed negative margin completely on mobile */}
            <div className='lg:mr-0 xl:mr-0 2xl:mr-0'>
              <PreviewDisplay />
            </div>
          </motion.div>
        </div>
      </div>
      <BrandShowcase />
    </section>
  )
}

export default HeroSection
