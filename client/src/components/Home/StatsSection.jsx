import { motion } from 'framer-motion'
import { Activity, Shield, Smile } from 'lucide-react'
const StatsSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 }}
      className='pt-6 sm:pt-8 border-t border-purple-100'
    >
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6'>
        {[
          {
            value: '500+',
            label: 'Med Spas Trust Us',
            gradient: 'from-purple-600 to-pink-500',
            icon: Shield,
          },
          {
            value: '95%',
            label: 'Client Satisfaction',
            gradient: 'from-pink-500 to-purple-600',
            icon: Smile,
          },
          {
            value: '24/7',
            label: 'Support & Uptime',
            gradient: 'from-blue-500 to-purple-600',
            icon: Activity,
          },
        ].map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 + index * 0.1 }}
            className='relative group'
          >
            <motion.div
              className='absolute inset-0 bg-gradient-to-r from-purple-100/50 to-pink-100/50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'
              initial={false}
              animate={{
                scale: [1, 1.02, 1],
                rotate: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <div className='relative flex flex-col p-4 sm:p-6 rounded-xl backdrop-blur-sm border border-transparent group-hover:border-purple-200 transition-all duration-300'>
              <div className='flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2'>
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className={`p-1.5 sm:p-2 rounded-lg bg-gradient-to-r ${stat.gradient} bg-opacity-10`}
                >
                  <stat.icon className='w-4 h-4 sm:w-5 sm:h-5 text-white' />
                </motion.div>
                <motion.span
                  className={`text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                >
                  {stat.value}
                </motion.span>
              </div>
              <span className='text-xs sm:text-sm text-gray-600 group-hover:text-gray-900 transition-colors duration-300'>
                {stat.label}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default StatsSection
