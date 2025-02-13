import { AnimatePresence, motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'

const AnimatedHeadline = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const words = [
    { text: 'Collaboration', color: 'text-blue-400' },
    { text: 'Innovation', color: 'text-purple-400' },
    { text: 'Excellence', color: 'text-emerald-400' },
    { text: 'Growth', color: 'text-pink-400' },
    { text: 'Success', color: 'text-orange-400' },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className='min-h-[50vh] flex items-center justify-center bg-gray-50'>
      <div className='container mx-auto px-4'>
        <h1 className='text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-gray-900 text-center max-w-7xl mx-auto leading-tight'>
          <div className='inline'>
            The Customer Success Platform that Maximizes{' '}
          </div>
          <div className='inline-block w-[340px] md:w-[500px]'>
            <AnimatePresence mode='wait'>
              <motion.div
                key={currentIndex}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -40, opacity: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 30,
                  duration: 0.3,
                }}
                className={`inline-block ${words[currentIndex].color}`}
              >
                {words[currentIndex].text}
              </motion.div>
            </AnimatePresence>
          </div>
        </h1>
      </div>

      {/* Background decorative elements */}
      <div className='absolute inset-0 -z-10 overflow-hidden'>
        <div className='absolute top-1/4 left-1/4 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob' />
        <div className='absolute top-1/3 right-1/4 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000' />
        <div className='absolute bottom-1/4 left-1/3 w-64 h-64 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000' />
      </div>

      <style jsx global>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  )
}

export default AnimatedHeadline
