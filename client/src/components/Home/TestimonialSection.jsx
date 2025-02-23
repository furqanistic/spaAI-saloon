import { AnimatePresence, motion } from 'framer-motion'
import { Circle, Pentagon, Quote, Sparkles, Star, Triangle } from 'lucide-react'
import React, { useRef, useState } from 'react'
import TransparentBadgeSlider from './TransparentBadgeSlider'

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const scrollRef = useRef(null)

  // Keep existing testimonials array...
  const testimonials = [
    {
      name: 'Sarah Anderson',
      role: 'Creative Director',
      company: 'DesignVibe Studios',
      image:
        'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      content:
        "Radiant transformed our creative workflow completely. Their attention to detail and innovative approach brought a new dimension to our projects. It's not just a tool, it's a game-changer.",
      rating: 5,
      stats: {
        improvement: '250%',
        metric: 'Productivity Boost',
      },
    },
    {
      name: 'Michael Zhang',
      role: 'Tech Lead',
      company: 'InnovateTech',
      image:
        'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      content:
        "The level of sophistication in Radiant's platform is unmatched. We've seen unprecedented improvements in our team's performance and project outcomes.",
      rating: 5,
      stats: {
        improvement: '180%',
        metric: 'Efficiency Gain',
      },
    },
    {
      name: 'Elena Rodriguez',
      role: 'Product Manager',
      company: 'FutureScale',
      image:
        'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      content:
        'Radiant has revolutionized how we approach design challenges. The AI-powered features are mind-blowing, and the results speak for themselves.',
      rating: 5,
      stats: {
        improvement: '300%',
        metric: 'Time Saved',
      },
    },
    {
      name: 'James Carter',
      role: 'Marketing Director',
      company: 'BrightPath Solutions',
      image:
        'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      content:
        'Radiant has been a game-changer for our marketing campaigns. The automation tools and analytics have helped us achieve results we never thought possible.',
      rating: 5,
      stats: {
        improvement: '200%',
        metric: 'ROI Increase',
      },
    },
    {
      name: 'Linda Martinez',
      role: 'Operations Manager',
      company: 'EcoHealth Clinics',
      image:
        'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      content:
        'The AI virtual assistant has been a lifesaver for our clinic. It handles bookings and inquiries seamlessly, allowing our staff to focus on patient care.',
      rating: 5,
      stats: {
        improvement: '150%',
        metric: 'Customer Satisfaction',
      },
    },
    {
      name: 'David Kim',
      role: 'CEO',
      company: 'TechNova',
      image:
        'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      content:
        "Radiant's platform has streamlined our operations and improved collaboration across teams. It's an essential tool for any modern business.",
      rating: 5,
      stats: {
        improvement: '220%',
        metric: 'Team Collaboration',
      },
    },
  ]

  const scrollToTestimonial = (index) => {
    const element = document.getElementById(`testimonial-${index}`)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      })
    }
    setCurrentIndex(index)
  }

  return (
    <div className='relative min-h-screen bg-gradient-to-br from-purple-950 via-fuchsia-900 to-pink-900 py-20 overflow-hidden'>
      {/* Enhanced Animated Background Elements */}
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute w-96 h-96 -top-48 -left-24 bg-pink-400/10 rounded-full blur-3xl' />
        <div className='absolute w-96 h-96 -bottom-48 -right-24 bg-purple-400/10 rounded-full blur-3xl' />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 45, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'linear',
          }}
          className='absolute top-1/4 left-1/3 w-96 h-96 bg-fuchsia-500/5 rounded-full blur-3xl'
        />

        {/* Floating Decorative Elements */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 8 + i,
              repeat: Infinity,
              ease: 'linear',
              delay: i * 0.5,
            }}
            className='absolute'
            style={{
              top: `${20 + i * 15}%`,
              left: `${10 + i * 15}%`,
            }}
          >
            {i % 3 === 0 ? (
              <Pentagon className='w-6 h-6 text-pink-300/20' />
            ) : i % 3 === 1 ? (
              <Circle className='w-4 h-4 text-purple-300/20' />
            ) : (
              <Triangle className='w-5 h-5 text-fuchsia-300/20' />
            )}
          </motion.div>
        ))}
      </div>

      <div className='container mx-auto px-4 relative z-10'>
        {/* Enhanced Header */}
        <div className='text-center max-w-3xl mx-auto mb-20'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className='inline-block'
          >
            <span className='px-4 py-1.5 bg-pink-500/10 text-pink-300 rounded-full text-sm font-medium border border-pink-400/20 backdrop-blur-sm flex items-center gap-2'>
              <Sparkles className='w-4 h-4' />
              CUSTOMER STORIES
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className='text-5xl md:text-6xl font-bold text-white mt-8 mb-6'
          >
            Loved by innovators
            <span className='block bg-gradient-to-r from-pink-400 via-fuchsia-400 to-purple-400 bg-clip-text text-transparent mt-2'>
              worldwide
            </span>
          </motion.h2>
        </div>

        {/* Enhanced Main Testimonial Display */}
        <AnimatePresence mode='wait'>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className='max-w-6xl mx-auto mb-16'
          >
            <div className='relative'>
              <div className='absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center'>
                <Quote className='w-10 h-10 text-white transform -scale-x-100' />
              </div>

              <div className='bg-white/5 backdrop-blur-xl rounded-3xl p-12 border border-white/10 shadow-lg shadow-purple-500/10'>
                <div className='grid md:grid-cols-2 gap-12 items-center'>
                  <div className='space-y-8'>
                    <div className='flex items-center space-x-1'>
                      {[...Array(testimonials[currentIndex].rating)].map(
                        (_, i) => (
                          <Star
                            key={i}
                            className='w-5 h-5 text-pink-400 fill-pink-400'
                          />
                        )
                      )}
                    </div>

                    <p className='text-2xl font-light text-white leading-relaxed'>
                      "{testimonials[currentIndex].content}"
                    </p>

                    <div className='pt-4'>
                      <div className='flex items-center space-x-4'>
                        <div className='relative'>
                          <div className='w-16 h-16 rounded-full overflow-hidden ring-2 ring-pink-400/20'>
                            <img
                              src={testimonials[currentIndex].image}
                              alt={testimonials[currentIndex].name}
                              className='w-full h-full object-cover'
                            />
                          </div>
                          <div className='absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center ring-2 ring-purple-900'>
                            <motion.div
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{ duration: 2, repeat: Infinity }}
                              className='w-2 h-2 bg-white rounded-full'
                            />
                          </div>
                        </div>
                        <div>
                          <h4 className='text-xl font-semibold text-white'>
                            {testimonials[currentIndex].name}
                          </h4>
                          <p className='text-pink-300'>
                            {testimonials[currentIndex].role}
                          </p>
                          <p className='text-fuchsia-400 text-sm'>
                            {testimonials[currentIndex].company}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='relative'>
                    <div className='absolute inset-0 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-2xl transform rotate-3' />
                    <div className='relative bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10'>
                      <div className='text-center mb-8'>
                        <h3 className='text-7xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-2'>
                          {testimonials[currentIndex].stats.improvement}
                        </h3>
                        <p className='text-fuchsia-300 text-lg'>
                          {testimonials[currentIndex].stats.metric}
                        </p>
                      </div>

                      <div className='space-y-4'>
                        {[1, 2, 3].map((_, i) => (
                          <div
                            key={i}
                            className='h-2 bg-white/5 rounded-full overflow-hidden'
                          >
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${85 - i * 15}%` }}
                              transition={{ duration: 1, delay: i * 0.2 }}
                              className='h-full bg-gradient-to-r from-pink-400 to-purple-400'
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Enhanced Testimonial Preview Cards */}
        <div className='max-w-6xl mx-auto overflow-hidden'>
          <div
            ref={scrollRef}
            className='flex gap-4 overflow-x-auto py-4 px-2 scrollbar-hide'
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                id={`testimonial-${index}`}
                onClick={() => !isDragging && scrollToTestimonial(index)}
                onDragStart={() => setIsDragging(true)}
                onDragEnd={() => setTimeout(() => setIsDragging(false), 50)}
                className={`flex-shrink-0 cursor-pointer group transition-all duration-300 ${
                  currentIndex === index
                    ? 'w-72 scale-100 opacity-100'
                    : 'w-48 scale-95 opacity-60'
                }`}
              >
                <div
                  className={`
                    h-24 rounded-xl p-4 transition-all duration-300
                    ${
                      currentIndex === index
                        ? 'bg-gradient-to-r from-pink-500 to-purple-500 shadow-lg shadow-purple-500/20'
                        : 'bg-white/5 hover:bg-white/10'
                    }
                  `}
                >
                  <div className='flex items-center space-x-3'>
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className='w-12 h-12 rounded-full object-cover ring-2 ring-white/20'
                    />
                    <div>
                      <h4 className='text-white font-medium line-clamp-1'>
                        {testimonial.name}
                      </h4>
                      <p className='text-pink-300 text-sm line-clamp-1'>
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      <TransparentBadgeSlider />
    </div>
  )
}

export default TestimonialSection
