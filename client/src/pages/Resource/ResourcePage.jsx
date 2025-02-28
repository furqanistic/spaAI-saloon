import { Card } from '@/components/ui/card'
import { motion } from 'framer-motion'
import { Play, X } from 'lucide-react'
import React, { useState } from 'react'
import FAQ from '../../components/About/FAQ'
import Footer from '../../components/Layout/Footer'
import Navbar from '../../components/Layout/Navbar'

const TestimonialsPage = () => {
  const [selectedVideo, setSelectedVideo] = useState(null)

  const testimonials = [
    {
      id: 1,
      title:
        'How This Beauty Practice Turned $600 into $14,640 with Smart Marketing | Beauty Practice Growth Case Study',
      description: `Lina wanted more bookings for her beauty practice but didn't want to waste money on ads that don't work.
She spent just $600 on marketing and got $14,640 in return—without relying on deep discounts or referrals.
In this video, she shares her experience and what made the biggest impact.`,
      thumbnail: '/thumbnail/lina.webp',
      videoId: 'IhZObs9oqpU',
      duration: '00:31',
    },
    {
      id: 2,
      title: 'This Is How Mozan Doubled Her Beauty Practice Bookings to 100+',
      description: `Mozan was booking around 31 appointments a month. She knew her beauty practice could do more, but things just weren't clicking.
Now? She's consistently getting 100+ appointments a month—and she didn't have to discount everything or rely on referrals.`,
      thumbnail: '/thumbnail/movan.webp',
      videoId: 'XgZpKqf3sNI',
      duration: '00:43',
    },
    {
      id: 3,
      title:
        'How She Grew Her Beauty Practice Revenue from $7,600 to $19,763 in 28 Days | Real-Life Testimonial',
      description: `Yasmin was making $7,600 a month at her beauty practice, but she knew she could be doing more.
Fast forward 28 days… she pulled in $19,763 cash collected.
She's sharing her experience and what this growth has meant for her business.`,
      thumbnail: '/thumbnail/ayah.webp',
      videoId: 'j3yUJX3H_B8',
      duration: '00:31',
    },
    {
      id: 4,
      title:
        'How to Scale Your Beauty Practice FAST | From 14 to 60+ Appointments in Just 4 Weeks (Proven Strategy)',
      description: `Rita was stuck and knew she could be making more—but she wasn't sure how.
From just 14 appointments per month to over 60+ high-paying clients in ONLY 4 weeks—without discounts, endless referrals, or relying on word-of-mouth.`,
      thumbnail: '/thumbnail/rita.webp',
      videoId: '6Hoag5VLNj8',
      duration: '1:10',
    },
    {
      id: 5,
      title:
        'How We Took This Beauty Practice from 17 to 51 Appointments in 30 Days! 🚀 (Case Study)',
      description: `Meet Viergela! She was stuck at just 17 appointments a month… but she didn't give up 💪 In just 30 days, she skyrocketed to 51 appointments for Semiglutide and Tirzepatide clients! 🙌`,
      thumbnail: '/thumbnail/viergela.webp',
      videoId: 'rdyoecMrtSM',
      duration: '0:44',
    },
  ]

  return (
    <>
      <Navbar />
      <div className='min-h-screen bg-[#080B2F]'>
        {/* Enhanced Animated Background */}
        <div className='fixed inset-0 z-0'>
          <div className='absolute inset-0 bg-gradient-to-br from-blue-950/50 via-purple-900/50 to-pink-900/50' />
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
          <div
            className='absolute inset-0'
            style={{
              backgroundImage: `radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 8%)`,
              backgroundSize: '24px 24px',
              backgroundPosition: '0 0',
            }}
          />
        </div>

        {/* Content */}
        <div className='relative z-10'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className='text-center mb-16'
            >
              <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300'>
                Success Stories
              </h1>
              <p className='text-lg md:text-xl text-gray-300/80 max-w-2xl mx-auto'>
                See how businesses are transforming with RadiantAI
              </p>
            </motion.div>

            <motion.div
              className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
              initial='hidden'
              animate='visible'
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
              }}
            >
              {testimonials.map((testimonial) => (
                <motion.div
                  key={testimonial.id}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.4 }}
                >
                  <Card className='group h-full bg-white/5 hover:bg-white/10 backdrop-blur border-0 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10'>
                    <div
                      className='relative cursor-pointer'
                      onClick={() => setSelectedVideo(testimonial)}
                    >
                      <div className='relative w-full pt-[100%]'>
                        <div className='absolute inset-0 overflow-hidden rounded-t-xl'>
                          <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80' />
                          <img
                            src={testimonial.thumbnail}
                            alt={testimonial.title}
                            className='w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700'
                          />

                          {/* Default Play Button */}
                          <div className='absolute inset-0 flex items-center justify-center'>
                            <motion.div
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                              className='bg-white/20 backdrop-blur-sm w-16 h-16 rounded-full flex items-center justify-center border border-white/30 shadow-lg transform group-hover:scale-110 transition-transform duration-300'
                            >
                              <Play className='w-8 h-8 text-white ml-1' />
                            </motion.div>
                          </div>

                          {/* Enhanced Duration Badge */}
                          <div className='absolute top-4 right-4 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10'>
                            <span className='text-xs font-medium text-white'>
                              {testimonial.duration}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className='p-6 bg-gradient-to-b from-transparent to-black/5'>
                        <h3 className='text-xl font-semibold text-white mb-3 line-clamp-2 group-hover:text-pink-300 transition-colors duration-300'>
                          {testimonial.title}
                        </h3>
                        <p className='text-gray-400 text-sm line-clamp-3'>
                          {testimonial.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Enhanced Video Modal */}
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='fixed inset-0 bg-black/95 backdrop-blur-xl flex items-center justify-center z-50 p-4'
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className='relative w-full max-w-5xl'
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSelectedVideo(null)}
                className='absolute -top-16 right-0 text-white/80 hover:text-white transition-colors'
              >
                <X className='w-8 h-8' />
              </motion.button>

              <div className='relative rounded-xl overflow-hidden shadow-2xl'>
                <div className='aspect-video bg-black'>
                  <iframe
                    width='100%'
                    height='100%'
                    src={`https://www.youtube.com/embed/${selectedVideo.videoId}?autoplay=1`}
                    title={selectedVideo.title}
                    frameBorder='0'
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                    allowFullScreen
                    className='w-full h-full'
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
      <FAQ />
      <Footer />
    </>
  )
}

export default TestimonialsPage
