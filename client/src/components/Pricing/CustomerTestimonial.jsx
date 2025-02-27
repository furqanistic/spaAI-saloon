import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Clock, Play } from 'lucide-react'
import React, { useEffect, useRef, useState } from 'react'

const testimonials = [
  {
    id: 1,
    title:
      'How This Med Spa Turned $600 into $14,640 with Smart Marketing | Med Spa Growth Case Study',
    description: `Lina wanted more bookings for her med spa but didn't want to waste money on ads that don't work.
   She spent just $600 on marketing and got $14,640 in return—without relying on deep discounts or referrals.
   In this video, she shares her experience and what made the biggest impact.`,
    thumbnail: '/thumbnail/lina.webp',
    videoId: 'IhZObs9oqpU',
    duration: '00:31',
  },
  {
    id: 2,
    title: 'This Is How Mozan Doubled Her Med Spa Bookings to 100+',
    description: `Mozan was booking around 31 appointments a month. She knew her med spa could do more, but things just weren't clicking.
   Now? She's consistently getting 100+ appointments a month—and she didn't have to discount everything or rely on referrals.`,
    thumbnail: '/thumbnail/movan.webp',
    videoId: 'XgZpKqf3sNI',
    duration: '00:43',
  },
  {
    id: 3,
    title:
      'How She Grew Her Med Spa Revenue from $7,600 to $19,763 in 28 Days | Real-Life Testimonial',
    description: `Yasmin was making $7,600 a month at her med spa, but she knew she could be doing more.
   Fast forward 28 days… she pulled in $19,763 cash collected.
   She's sharing her experience and what this growth has meant for her business.`,
    thumbnail: '/thumbnail/ayah.webp',
    videoId: 'j3yUJX3H_B8',
    duration: '00:31',
  },
  {
    id: 4,
    title:
      'How to Scale Your Med Spa FAST | From 14 to 60+ Appointments in Just 4 Weeks (Proven Strategy)',
    description: `Rita was stuck and knew she could be making more—but she wasn't sure how.
   From just 14 appointments per month to over 60+ high-paying clients in ONLY 4 weeks—without discounts, endless referrals, or relying on word-of-mouth.`,
    thumbnail: '/thumbnail/rita.webp',
    videoId: '6Hoag5VLNj8',
    duration: '1:10',
  },
  {
    id: 5,
    title:
      'How We Took This Med Spa from 17 to 51 Appointments in 30 Days! 🚀 (Case Study)',
    description: `Meet Viergela! She was stuck at just 17 appointments a month… but she didn't give up 💪 In just 30 days, she skyrocketed to 51 appointments for Semiglutide and Tirzepatide clients! 🙌`,
    thumbnail: '/thumbnail/viergela.webp',
    videoId: 'rdyoecMrtSM',
    duration: '0:44',
  },
]

const VideoTestimonialsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [selectedVideoId, setSelectedVideoId] = useState(null)
  const sliderRef = useRef(null)

  const currentTestimonial = testimonials[currentIndex]

  const nextSlide = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  const goToSlide = (index) => {
    setDirection(index > currentIndex ? 1 : -1)
    setCurrentIndex(index)
  }

  const playVideo = (videoId) => {
    setSelectedVideoId(videoId)
    setIsPlaying(true)
  }

  const closeVideo = () => {
    setSelectedVideoId(null)
    setIsPlaying(false)
  }

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        prevSlide()
      } else if (e.key === 'ArrowRight') {
        nextSlide()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  // Extract metrics from the description for highlighting
  const extractMetrics = (description) => {
    const regex =
      /\$[\d,]+ to \$[\d,]+|\d+\+ appointments|[\d,]+ appointments|[\d,]+ clients/gi
    const matches = description.match(regex) || []
    return matches
  }

  // Highlight metrics in description
  const highlightedDescription = (description) => {
    const metrics = extractMetrics(description)
    let result = description

    metrics.forEach((metric) => {
      result = result.replace(
        metric,
        `<span class="text-[#38b5ff] font-bold">${metric}</span>`
      )
    })

    return result
  }

  // Animation variants
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        type: 'spring',
        stiffness: 300,
        damping: 30,
      },
    },
    exit: (direction) => ({
      x: direction > 0 ? -500 : 500,
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.5,
      },
    }),
  }

  const thumbnailVariants = {
    initial: { opacity: 0, y: 20 },
    animate: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
      },
    }),
    hover: {
      y: -10,
      boxShadow:
        '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 20,
      },
    },
  }

  return (
    <section className='relative py-20 overflow-hidden bg-gray-50'>
      <div className='absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-[#38b5ff]/10 to-transparent -z-10' />
      <div className='absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-[#38b5ff]/10 to-transparent -z-10' />

      <div className='max-w-6xl mx-auto px-4'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className='text-center mb-16'
        >
          <div className='inline-block px-4 py-1 bg-[#38b5ff]/10 text-[#38b5ff] font-medium text-sm rounded-full mb-4'>
            REAL RESULTS
          </div>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
            See How Med Spas Are Growing With RadiantMD
          </h2>
          <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
            Real stories from real med spa owners who transformed their
            businesses
          </p>
        </motion.div>

        <div className='flex flex-col lg:flex-row items-start gap-10 mb-16'>
          {/* Main featured testimonial */}
          <div className='lg:w-7/12 relative'>
            <AnimatePresence initial={false} custom={direction} mode='wait'>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial='enter'
                animate='center'
                exit='exit'
                className='relative'
              >
                <div className='relative overflow-hidden rounded-2xl shadow-xl aspect-square'>
                  <img
                    src={currentTestimonial.thumbnail}
                    alt={currentTestimonial.title}
                    className='w-full h-full object-cover'
                  />

                  <div className='absolute inset-0 bg-black/30 flex items-center justify-center'>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => playVideo(currentTestimonial.videoId)}
                      className='w-20 h-20 bg-[#38b5ff] rounded-full flex items-center justify-center'
                    >
                      <Play className='w-8 h-8 text-white ml-1' />
                    </motion.button>
                  </div>

                  <div className='absolute bottom-4 right-4 bg-black/70 text-white text-sm px-3 py-1 rounded-full flex items-center'>
                    <Clock className='w-3 h-3 mr-1' />
                    {currentTestimonial.duration}
                  </div>
                </div>

                <div className='mt-6'>
                  <h3 className='text-xl font-bold text-gray-900 mb-3'>
                    {currentTestimonial.title}
                  </h3>
                  <p
                    className='text-gray-700'
                    dangerouslySetInnerHTML={{
                      __html: highlightedDescription(
                        currentTestimonial.description
                      ),
                    }}
                  />
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation arrows */}
            <div className='flex justify-between absolute top-1/2 -translate-y-1/2 w-full px-4 pointer-events-none'>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={prevSlide}
                className='w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md pointer-events-auto'
              >
                <ChevronLeft className='w-5 h-5 text-gray-800' />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={nextSlide}
                className='w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md pointer-events-auto'
              >
                <ChevronRight className='w-5 h-5 text-gray-800' />
              </motion.button>
            </div>
          </div>

          {/* Thumbnails navigation */}
          <div className='lg:w-5/12'>
            <h3 className='text-lg font-semibold text-gray-800 mb-4'>
              More Success Stories
            </h3>

            <div className='space-y-4'>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  variants={thumbnailVariants}
                  initial='initial'
                  whileInView='animate'
                  whileHover='hover'
                  custom={index}
                  onClick={() => goToSlide(index)}
                  className={`flex gap-4 p-3 rounded-xl cursor-pointer transition-colors duration-300 ${
                    currentIndex === index
                      ? 'bg-[#38b5ff]/10 border border-[#38b5ff]/30'
                      : 'hover:bg-gray-100 border border-transparent'
                  }`}
                >
                  <div className='w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 relative'>
                    <img
                      src={testimonial.thumbnail}
                      alt={testimonial.title}
                      className='w-full h-full object-cover'
                    />
                    <div className='absolute inset-0 bg-black/20 flex items-center justify-center'>
                      <Play
                        className={`w-4 h-4 ${
                          currentIndex === index
                            ? 'text-[#38b5ff]'
                            : 'text-white'
                        }`}
                      />
                    </div>
                  </div>

                  <div className='flex-1'>
                    <h4 className='text-sm font-medium text-gray-900 line-clamp-2'>
                      {testimonial.title}
                    </h4>
                    <div className='flex items-center mt-1 text-xs text-gray-500'>
                      <Clock className='w-3 h-3 mr-1' />
                      {testimonial.duration}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {isPlaying && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeVideo}
            className='fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4'
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
              className='w-full max-w-4xl aspect-video bg-black rounded-xl overflow-hidden'
            >
              <iframe
                width='100%'
                height='100%'
                src={`https://www.youtube.com/embed/${selectedVideoId}?autoplay=1`}
                title='YouTube video player'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default VideoTestimonialsSlider
