import { motion } from 'framer-motion'
import { Heart, Sparkles, Star } from 'lucide-react'
import React from 'react'

const brands = [
  { name: 'Derma Lesions', logo: '/derma.png' },
  { name: 'Urban Touch', logo: '/urban.jpg' },
  { name: 'The Beauty', logo: '/thebeauty.webp' },
  { name: 'Radiant Medical', logo: '/radiantmed.png' },
  { name: 'Avous', logo: '/avous.png' },
  { name: 'Nisa', logo: '/nisa.jpg' },
  { name: 'Bionix', logo: '/bionix.webp' },
  { name: 'Cosmetica', logo: '/Cosmetica.png' },
  { name: 'Body Smoking', logo: '/bodysmoking.png' },
  { name: "Relax N' Glow", logo: '/relax.png' },
  { name: 'Skin Institute', logo: '/skin.png' },
]

// Reusable stat card component
const StatCard = ({ value, label, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    className='bg-white rounded-xl p-6 text-center shadow-md border border-gray-100 hover:border-pink-100 transition-colors'
  >
    <div className='text-4xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent mb-3'>
      {value}
    </div>
    <div className='text-gray-600'>{label}</div>
  </motion.div>
)

// Background decorations component
const BackgroundDecorations = () => (
  <div className='absolute inset-0 overflow-hidden pointer-events-none'>
    {/* Top right decoration */}
    <motion.div
      className='absolute top-0 right-0 w-72 h-72 rounded-full bg-gradient-to-br from-purple-300/30 to-pink-300/30 blur-3xl'
      animate={{
        scale: [1, 1.1, 1],
        opacity: [0.2, 0.3, 0.2],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        repeatType: 'reverse',
      }}
    />

    {/* Bottom left decoration */}
    <motion.div
      className='absolute bottom-0 left-0 w-80 h-80 rounded-full bg-gradient-to-tr from-sky-300/30 to-blue-300/30 blur-3xl'
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.2, 0.4, 0.2],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        repeatType: 'reverse',
        delay: 1,
      }}
    />

    {/* Floating elements */}
    <motion.div
      className='absolute top-24 right-10 opacity-50'
      animate={{ y: [-5, 5, -5], rotate: [0, 5, 0] }}
      transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
    >
      <Heart size={24} className='text-pink-300' />
    </motion.div>

    <motion.div
      className='absolute bottom-32 left-10 opacity-50'
      animate={{ y: [5, -5, 5], rotate: [0, -5, 0] }}
      transition={{
        repeat: Infinity,
        duration: 4,
        ease: 'easeInOut',
        delay: 1,
      }}
    >
      <Star size={24} className='text-purple-300' />
    </motion.div>

    <motion.div
      className='absolute top-1/2 left-16 opacity-50'
      animate={{ y: [-8, 8, -8], rotate: [0, 10, 0] }}
      transition={{
        repeat: Infinity,
        duration: 5,
        ease: 'easeInOut',
        delay: 0.5,
      }}
    >
      <Sparkles size={20} className='text-sky-300' />
    </motion.div>
  </div>
)

const TrustedBrands = () => {
  return (
    <section className='relative py-20 overflow-hidden bg-gradient-to-b from-white to-gray-50'>
      {/* Background elements */}
      <BackgroundDecorations />

      {/* Subtle pattern overlay */}
      <div className='absolute inset-0 opacity-5'>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid-pattern.svg')] bg-repeat bg-center" />
      </div>

      <div className='max-w-6xl mx-auto px-6 relative z-10'>
        {/* Heading with counter */}
        <div className='mb-16 text-center'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className='text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent'>
              Trusted by Leading Beauty Practices
            </h2>

            <div className='mt-6 inline-flex items-center justify-center'>
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{
                  delay: 0.3,
                  type: 'spring',
                  stiffness: 100,
                }}
                viewport={{ once: true }}
                className='px-5 py-2 rounded-full bg-gradient-to-r from-pink-100 to-purple-100 text-pink-600 font-bold text-lg'
              >
                150+ Med Spas & Clinics
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Logo marquee effect with updated styling */}
        <div className='mb-16 relative'>
          {/* Fade gradient on edges */}
          <div className='absolute left-0 top-0 w-16 h-full bg-gradient-to-r from-gray-50 to-transparent z-10' />
          <div className='absolute right-0 top-0 w-16 h-full bg-gradient-to-l from-gray-50 to-transparent z-10' />

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='flex items-center py-8 overflow-hidden'
          >
            <motion.div
              animate={{ x: [0, -1500] }}
              transition={{
                repeat: Infinity,
                duration: 40,
                ease: 'linear',
              }}
              className='flex gap-14 min-w-max'
            >
              {brands.concat(brands).map((brand, index) => (
                <motion.div
                  key={`${brand.name}-${index}`}
                  whileHover={{ y: -5, scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                  className='w-32 h-20 bg-white rounded-xl shadow-sm border border-gray-100 p-3 flex items-center justify-center'
                >
                  <img
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    className='max-h-full max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300'
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Stats section with improved design */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto'>
          <StatCard
            value='35%'
            label='Increase in client retention'
            delay={0.1}
          />

          <StatCard
            value='15hr+'
            label='Weekly time saved on admin'
            delay={0.25}
          />

          <StatCard value='42%' label='Growth in repeat bookings' delay={0.4} />
        </div>
      </div>
    </section>
  )
}

export default TrustedBrands
