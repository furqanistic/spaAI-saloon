import { motion, useAnimationControls } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'

const badges = [
  { id: 1, imageSrc: '/Badges/badge1.webp' },
  { id: 2, imageSrc: '/Badges/badge2.webp' },
  { id: 3, imageSrc: '/Badges/badge3.webp' },
  { id: 4, imageSrc: '/Badges/badge4.png' },
  { id: 5, imageSrc: '/Badges/badge5.webp' },
  { id: 6, imageSrc: '/Badges/badge6.png' },
  { id: 7, imageSrc: '/Badges/badge7.png' },
  { id: 8, imageSrc: '/Badges/badge8.png' },
  { id: 9, imageSrc: '/Badges/badge9.png' },
  { id: 10, imageSrc: '/Badges/badge10.png' },
]

const BadgeImage = ({ src, index }) => {
  const controls = useAnimationControls()
  const [isHovered, setIsHovered] = useState(false)

  // Enhanced floating animation with more dynamic movement
  useEffect(() => {
    controls.start({
      y: [0, -12, 0],
      x: [0, index % 2 === 0 ? 5 : -5, 0], // Slight side-to-side movement
      rotate: [0, index % 2 === 0 ? 3 : -3, 0], // Subtle rotation
      transition: {
        duration: 3,
        ease: [0.4, 0, 0.2, 1], // Custom easing for more natural movement
        repeat: Infinity,
        delay: index * 0.1, // Reduced delay for faster overall animation
      },
    })
  }, [controls, index])

  return (
    <motion.div
      className='relative w-24 h-32 flex-shrink-0 cursor-pointer'
      animate={controls}
      whileHover={{
        scale: 1.25,
        rotate: [0, -8, 8, 0],
        transition: {
          duration: 0.4,
          ease: 'easeOut',
        },
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Enhanced glow effect */}
      <motion.div
        className='absolute inset-0 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 rounded-full blur-xl'
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: isHovered ? 0.9 : 0,
          scale: isHovered ? 1.3 : 0.8,
          rotate: isHovered ? 180 : 0, // Rotating gradient
        }}
        transition={{ duration: 0.4 }}
      />

      {/* Badge image with enhanced effects */}
      <motion.img
        src={src}
        alt='Award badge'
        className='w-full h-full object-contain mix-blend-multiply filter contrast-125 relative z-10'
        style={{
          filter: isHovered
            ? 'contrast(150%) brightness(115%) saturate(110%)'
            : 'contrast(125%)',
        }}
        animate={{
          scale: isHovered ? [1, 1.05, 1] : 1,
          transition: { duration: 0.3 },
        }}
      />

      {/* Enhanced sparkle effects */}
      {isHovered && (
        <motion.div
          className='absolute inset-0 pointer-events-none'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className='absolute w-2 h-2 bg-white rounded-full'
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
                x: [-20 + i * 10, -10 + i * 5, 0 + i * 2],
                y: [-20 + i * 5, -10 + i * 2, 0],
              }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                repeat: Infinity,
                repeatDelay: 0.2,
              }}
            />
          ))}
        </motion.div>
      )}
    </motion.div>
  )
}

const TransparentBadgeSlider = () => {
  const [position, setPosition] = useState(0)
  const sliderRef = useRef(null)
  const [sliderWidth, setSliderWidth] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (sliderRef.current) {
      setSliderWidth(sliderRef.current.scrollWidth / 2)
    }
  }, [])

  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      setPosition((prev) => {
        const newPos = prev - 2 // Increased speed
        return newPos <= -sliderWidth ? 0 : newPos
      })
    }, 20) // Reduced interval for smoother animation

    return () => clearInterval(interval)
  }, [sliderWidth, isPaused])

  return (
    <div
      className='w-full overflow-hidden py-12'
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <motion.div
        className='relative w-full'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          ref={sliderRef}
          className='flex items-center gap-16 py-6'
          style={{
            transform: `translateX(${position}px)`,
            transition: isPaused ? 'transform 0.3s ease-out' : 'none',
            width: 'fit-content',
          }}
        >
          {[...badges, ...badges].map((badge, index) => (
            <BadgeImage
              key={`${badge.id}-${index}`}
              src={badge.imageSrc}
              index={index}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}

export default TransparentBadgeSlider
