import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion'
import {
  ArrowRight,
  BarChart,
  BookOpen,
  Code,
  FileText,
  Headphones,
  Lightbulb,
  Newspaper,
  Phone,
  PieChart,
  Play,
  Settings,
  Sparkles,
  Star,
  Users,
  Zap,
} from 'lucide-react'
import React, { useRef, useState } from 'react'

// Gradient Orb Component
const GradientOrb = ({ delay = 0, className }) => (
  <motion.div
    initial={{ scale: 0.8, opacity: 0.5 }}
    animate={{
      scale: [0.8, 1.2, 0.8],
      opacity: [0.5, 0.8, 0.5],
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
      delay,
    }}
    className={`absolute rounded-full blur-3xl ${className}`}
  />
)

// Resource Card Component
const ResourceCard = ({ resource, index }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className='group relative'
    >
      <div className='relative h-64 rounded-2xl overflow-hidden shadow-lg'>
        <motion.div
          className='absolute inset-0 bg-gradient-to-br from-gray-900/80 to-gray-900/40 z-10'
          animate={{
            opacity: isHovered ? 0.4 : 0.7,
          }}
          transition={{ duration: 0.3 }}
        />
        <motion.img
          src={resource.image}
          alt={resource.title}
          className='w-full h-full object-cover'
          animate={{
            scale: isHovered ? 1.05 : 1,
          }}
          transition={{ duration: 0.4 }}
        />

        <div className='absolute inset-0 z-20 p-6 flex flex-col justify-between'>
          <motion.div
            className='flex items-center gap-2'
            animate={{
              y: isHovered ? -5 : 0,
              opacity: isHovered ? 0 : 1,
            }}
          >
            <div className='w-8 h-8 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center'>
              {resource.typeIcon}
            </div>
            <span className='text-sm text-white/90'>{resource.type}</span>
          </motion.div>

          <motion.div
            animate={{
              y: isHovered ? -20 : 0,
            }}
          >
            <h3 className='text-2xl font-semibold text-white mb-3'>
              {resource.title}
            </h3>
            <div className='flex items-center gap-4 text-white/90 text-sm'>
              <span>{resource.duration}</span>
              {resource.difficulty && (
                <span className='flex items-center gap-1'>
                  <Star className='w-4 h-4 fill-current' />
                  {resource.difficulty}
                </span>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className='absolute inset-x-4 bottom-4 z-30 p-4 rounded-xl bg-white/95 backdrop-blur-sm shadow-2xl'
          >
            <p className='text-gray-600 mb-3'>{resource.description}</p>
            <div className='flex items-center gap-4'>
              <button className='px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors'>
                Access Now
              </button>
              <button className='px-4 py-2 rounded-lg bg-gray-100 text-gray-600 text-sm font-medium hover:bg-gray-200 transition-colors'>
                Save for Later
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

// Resource Section Component
const ResourceSection = ({ category, scrollYProgress }) => {
  const xLeft = useTransform(scrollYProgress, [0, 1], [-100, 100])
  const xRight = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9])

  return (
    <div className='py-32 px-4 lg:px-16 relative'>
      <motion.div style={{ opacity, scale }} className='max-w-7xl mx-auto'>
        {/* Category Header */}
        <div className='mb-16'>
          <motion.div
            style={{ x: xLeft }}
            className='flex items-center gap-4 mb-6'
          >
            <div className='w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg'>
              {category.icon}
            </div>
            <div>
              <h2 className='text-4xl font-bold text-gray-900 mb-2'>
                {category.title}
              </h2>
              <p className='text-lg text-gray-600'>{category.description}</p>
            </div>
          </motion.div>
        </div>

        {/* Resources Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {category.resources.map((resource, idx) => (
            <ResourceCard key={idx} resource={resource} index={idx} />
          ))}
        </div>
      </motion.div>
    </div>
  )
}

// Main Component
const ResourcesPage = () => {
  const categories = [
    {
      title: 'Getting Started',
      description:
        'Begin your journey with RadiantAI through our comprehensive guides.',
      icon: <Lightbulb className='w-8 h-8 text-white' />,
      resources: [
        {
          title: 'Quick Start Guide',
          type: 'Guide',
          typeIcon: <FileText className='w-4 h-4 text-white' />,
          duration: '15 min read',
          difficulty: 'Beginner',
          description:
            "Get up and running with RadiantAI's core features in minutes.",
          image: '/api/placeholder/600/400',
        },
        {
          title: 'Video Walkthrough',
          type: 'Video',
          typeIcon: <Play className='w-4 h-4 text-white' />,
          duration: '20 min',
          difficulty: 'Beginner',
          description: 'A complete video tour of the RadiantAI platform.',
          image: '/api/placeholder/600/400',
        },
        {
          title: 'Setup Wizard',
          type: 'Interactive',
          typeIcon: <Settings className='w-4 h-4 text-white' />,
          duration: '10 min',
          difficulty: 'Beginner',
          description:
            'Interactive guide to configure your RadiantAI instance.',
          image: '/api/placeholder/600/400',
        },
      ],
    },
    {
      title: 'Advanced Features',
      description: 'Master advanced capabilities and integrations.',
      icon: <Zap className='w-8 h-8 text-white' />,
      resources: [
        {
          title: 'AI Assistant Configuration',
          type: 'Technical Guide',
          typeIcon: <Code className='w-4 h-4 text-white' />,
          duration: '30 min read',
          difficulty: 'Advanced',
          description: 'Deep dive into AI assistant customization options.',
          image: '/api/placeholder/600/400',
        },
        {
          title: 'API Integration',
          type: 'Documentation',
          typeIcon: <BookOpen className='w-4 h-4 text-white' />,
          duration: '45 min read',
          difficulty: 'Advanced',
          description: 'Complete API documentation with examples.',
          image: '/api/placeholder/600/400',
        },
        {
          title: 'Automation Workflows',
          type: 'Tutorial',
          typeIcon: <Settings className='w-4 h-4 text-white' />,
          duration: '25 min read',
          difficulty: 'Intermediate',
          description: 'Create powerful automation workflows.',
          image: '/api/placeholder/600/400',
        },
      ],
    },
    {
      title: 'Business Growth',
      description: 'Optimize operations and drive business growth.',
      icon: <BarChart className='w-8 h-8 text-white' />,
      resources: [
        {
          title: 'Growth Strategies',
          type: 'Guide',
          typeIcon: <PieChart className='w-4 h-4 text-white' />,
          duration: '20 min read',
          description: 'Proven strategies for med spa growth using RadiantAI.',
          image: '/api/placeholder/600/400',
        },
        {
          title: 'Client Success Stories',
          type: 'Case Studies',
          typeIcon: <Users className='w-4 h-4 text-white' />,
          duration: '15 min read',
          description: 'Real success stories from RadiantAI users.',
          image: '/api/placeholder/600/400',
        },
        {
          title: 'Expert Support',
          type: 'Support',
          typeIcon: <Headphones className='w-4 h-4 text-white' />,
          duration: 'On-demand',
          description: 'Connect with our med spa industry experts.',
          image: '/api/placeholder/600/400',
        },
      ],
    },
  ]

  return (
    <div className='bg-gradient-to-b from-gray-50 to-white'>
      {/* Hero Section */}
      <div className='relative min-h-screen flex items-center justify-center py-20 px-4 lg:px-16 overflow-hidden'>
        {/* Gradient Orbs */}
        <div className='absolute inset-0 overflow-hidden'>
          <GradientOrb
            delay={0}
            className='w-96 h-96 -top-48 -left-48 bg-blue-500/30'
          />
          <GradientOrb
            delay={2}
            className='w-96 h-96 top-1/4 -right-48 bg-purple-500/30'
          />
          <GradientOrb
            delay={4}
            className='w-96 h-96 -bottom-48 left-1/4 bg-pink-500/30'
          />
        </div>

        <div className='relative z-10 text-center max-w-5xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm shadow-xl'
          >
            <Sparkles className='w-5 h-5 text-blue-600' />
            <span className='text-gray-800 font-medium'>Resource Center</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className='text-6xl lg:text-8xl font-bold mb-8'
          >
            <span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600'>
              Learn & Grow
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className='text-xl lg:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto'
          >
            Explore our comprehensive resources to transform your med spa with
            RadiantAI's cutting-edge solutions
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className='flex flex-wrap justify-center gap-4'
          >
            <button className='px-8 py-4 rounded-xl bg-blue-600 text-white font-medium shadow-lg shadow-blue-500/25 hover:shadow-xl hover:scale-105 transition-all duration-200'>
              Get Started
            </button>
            <button className='px-8 py-4 rounded-xl bg-white text-gray-800 font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200'>
              Browse Categories
            </button>
          </motion.div>
        </div>
      </div>

      {/* Resource Sections */}
      {categories.map((category, index) => {
        const sectionRef = useRef(null)
        const { scrollYProgress } = useScroll({
          target: sectionRef,
          offset: ['start end', 'end start'],
        })
        return (
          <div ref={sectionRef} key={index}>
            <ResourceSection
              category={category}
              scrollYProgress={scrollYProgress}
            />
          </div>
        )
      })}
    </div>
  )
}

export default ResourcesPage
