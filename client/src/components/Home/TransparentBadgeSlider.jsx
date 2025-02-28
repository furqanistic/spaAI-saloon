import { AnimatePresence, motion } from 'framer-motion'
import React, { useState } from 'react'

const badges = [
  { id: 1, imageSrc: '/Badges/badge1.webp', label: 'Excellence' },
  { id: 9, imageSrc: '/Badges/badge2.webp', label: 'Innovation' },
  { id: 3, imageSrc: '/Badges/badge3.webp', label: 'Leadership' },
  { id: 4, imageSrc: '/Badges/badge4.png', label: 'Growth' },
  { id: 8, imageSrc: '/Badges/badge5.webp', label: 'Impact' },
  { id: 6, imageSrc: '/Badges/badge6.png', label: 'Vision' },
  { id: 7, imageSrc: '/Badges/badge7.png', label: 'Success' },
  { id: 10, imageSrc: '/Badges/badge10.png', label: 'Achievement' },
]

const AchievementBadge = ({ badge, index }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className='relative flex flex-col items-center justify-center p-1'
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Enhanced background glow */}
      <motion.div
        className='absolute w-32 h-32 rounded-full blur-xl'
        animate={{
          opacity: isHovered ? [0.4, 0.6, 0.4] : 0,
          scale: isHovered ? [1.2, 1.4, 1.2] : 1,
          background: isHovered
            ? 'radial-gradient(circle, rgba(246, 59, 230, 0.4) 0%, rgba(147, 51, 234, 0.2) 100%)'
            : 'none',
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Badge container with enhanced effects */}
      <motion.div
        className='relative w-28 h-28 bg-gradient-to-br from-white/10 to-white/5 rounded-xl p-2 backdrop-blur-sm border border-white/10'
        whileHover={{
          scale: 1.1,
          filter: 'brightness(1.2) contrast(1.1)',
        }}
        transition={{
          type: 'spring',
          stiffness: 400,
          damping: 15,
        }}
      >
        {/* Background patterns */}
        <div className='absolute inset-0 rounded-2xl overflow-hidden'>
          <div className='absolute w-full h-full bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-50' />
          <div className='absolute w-full h-full bg-grid-white/[0.05]' />
        </div>

        {/* Main badge image */}
        <motion.div
          className='relative w-full h-full flex items-center justify-center'
          animate={{
            rotate: isHovered ? [0, -5, 5, 0] : 0,
          }}
          transition={{
            duration: 0.6,
            ease: 'easeInOut',
          }}
        >
          <motion.img
            src={badge.imageSrc}
            alt={`${badge.label} badge`}
            className='w-20 h-20 object-contain drop-shadow-2xl'
          />
        </motion.div>

        {/* Enhanced shine effect */}
        <motion.div
          className='absolute inset-0 rounded-2xl pointer-events-none'
          animate={{
            background: isHovered
              ? 'linear-gradient(45deg, transparent 40%, rgba(255,255,255,0.3) 50%, transparent 60%)'
              : 'none',
            backgroundSize: '200% 200%',
            backgroundPosition: isHovered ? '200% 200%' : '0% 0%',
          }}
          transition={{ duration: 0.8 }}
        />

        {/* Sparkle effects */}
        <AnimatePresence>
          {isHovered && (
            <>
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className='absolute w-1 h-1 bg-white rounded-full'
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                    x: [0, (i - 2.5) * 15],
                    y: [-10 - i * 6, -20 - i * 6],
                  }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    repeatDelay: 0.2,
                    delay: i * 0.1,
                  }}
                />
              ))}
            </>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Badge label with animation */}
      <motion.div
        className='mt-2 text-center'
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
        transition={{ duration: 0.2 }}
      >
        <span className='px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm font-medium border border-white/10'>
          {badge.label}
        </span>
      </motion.div>
    </motion.div>
  )
}

const TransparentBadgeSlider = () => {
  // Create a triple set of badges to ensure smooth loop transition
  const tripleBadges = [...badges, ...badges, ...badges]

  return (
    <div className='relative w-full overflow-hidden bg-gradient-to-b from-transparent to-purple-900/20 py-2'>
      {/* Ambient background effects */}
      <div className='absolute inset-0 bg-grid-white/[0.02]' />
      <div className='absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/5 to-transparent' />

      {/* Main slider container with faster animation */}
      <motion.div
        className='flex items-center gap-2 py-2'
        animate={{
          x: [0, '-33.333%'],
        }}
        transition={{
          x: {
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
            repeatType: 'loop',
          },
        }}
      >
        {tripleBadges.map((badge, index) => (
          <AchievementBadge
            key={`${badge.id}-${index}`}
            badge={badge}
            index={index % badges.length}
          />
        ))}
      </motion.div>
    </div>
  )
}

export default TransparentBadgeSlider
