import { motion } from 'framer-motion'
import {
  ArrowRight,
  Award,
  Calendar,
  ChevronRight,
  CreditCard,
  LineChart,
  MessageSquare,
  Settings,
  Sparkles,
  Star,
  Tag,
  Users,
} from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Footer from '../../components/Layout/Footer'
import Navbar from '../../components/Layout/Navbar'
const ServicesPage = () => {
  const [activeCategory, setActiveCategory] = useState('all')
  const [hoveredService, setHoveredService] = useState(null)
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/demo')
  }
  // Cursor following effect
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [cursorVariant, setCursorVariant] = useState('default')

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    window.addEventListener('mousemove', mouseMove)

    return () => {
      window.removeEventListener('mousemove', mouseMove)
    }
  }, [])

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      opacity: 0,
    },
    active: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      height: 32,
      width: 32,
      opacity: 1,
      backgroundColor: 'rgba(236, 72, 153, 0.5)',
      mixBlendMode: 'screen',
    },
  }

  // Service categories from your navbar
  const serviceCategories = [
    {
      name: 'Client Management',
      slug: 'client-management',
      description:
        'Advanced tools to help you acquire, manage, and retain clients in the digital age',
      icon: <Users className='w-6 h-6 text-pink-500' />,
      bgColor: 'from-pink-500/10 to-pink-500/5',
      accentColor: 'pink',
      items: [
        {
          title: 'Lead Generation & Capture',
          description: 'AI-powered landing pages & smart lead capture systems',
          icon: <Users className='w-5 h-5 text-pink-500' />,
          path: '/services/lead-generation',
          badge: 'Popular',
        },
        {
          title: 'Lead Nurturing & Follow-Up',
          description:
            'Predictive AI-driven follow-ups & personalized drip campaigns',
          icon: <MessageSquare className='w-5 h-5 text-pink-500' />,
          path: '/services/lead-nurturing',
        },
        {
          title: 'Appointment Scheduling',
          description: 'Smart calendar sync & automated reminder system',
          icon: <Calendar className='w-5 h-5 text-pink-500' />,
          path: '/services/appointment-scheduling',
        },
        {
          title: 'CRM Tools',
          description: 'AI-enhanced client segmentation & pipeline management',
          icon: <Users className='w-5 h-5 text-pink-500' />,
          path: '/services/crm-tools',
        },
      ],
    },
    {
      name: 'Marketing & Sales',
      slug: 'marketing-sales',
      description:
        'Next-gen tools to boost your marketing effectiveness and drive conversions',
      icon: <Sparkles className='w-6 h-6 text-purple-500' />,
      bgColor: 'from-purple-500/10 to-purple-500/5',
      accentColor: 'purple',
      items: [
        {
          title: 'Marketing Automation',
          description: 'AI-driven content calendar & predictive ad integration',
          icon: <Sparkles className='w-5 h-5 text-purple-500' />,
          path: '/services/marketing-automation',
        },
        {
          title: 'Communication Tools',
          description:
            'Smart two-way SMS, email & adaptive chatbot integration',
          icon: <MessageSquare className='w-5 h-5 text-purple-500' />,
          path: '/services/communication-tools',
        },
        {
          title: 'Payment Processing',
          description:
            'Seamless integrated payment gateways & subscription management',
          icon: <CreditCard className='w-5 h-5 text-purple-500' />,
          path: '/services/payment-processing',
        },
        {
          title: 'Reporting & Analytics',
          description: 'Real-time 3D dashboards & predictive ROI tracking',
          icon: <LineChart className='w-5 h-5 text-purple-500' />,
          path: '/services/reporting-analytics',
        },
      ],
    },
    {
      name: 'Med Spa Essentials',
      slug: 'med-spa-essentials',
      description:
        'Cutting-edge features designed specifically for modern med spas',
      icon: <Star className='w-6 h-6 text-cyan-500' />,
      bgColor: 'from-cyan-500/10 to-cyan-500/5',
      accentColor: 'cyan',
      items: [
        {
          title: 'Industry-Specific Features',
          description: 'AI-enhanced med spa campaigns & smart promotions',
          icon: <Star className='w-5 h-5 text-cyan-500' />,
          path: '/services/industry-features',
        },
        {
          title: 'White-Labeling & Branding',
          description: 'Custom domains & immersive branded client portals',
          icon: <Tag className='w-5 h-5 text-cyan-500' />,
          path: '/services/white-labeling',
        },
        {
          title: 'Integrations',
          description: 'Seamless native & third-party app ecosystem',
          icon: <Settings className='w-5 h-5 text-cyan-500' />,
          path: '/services/integrations',
        },
        {
          title: 'Onboarding & Support',
          description: 'AI-assisted setup & dedicated concierge assistance',
          icon: <Award className='w-5 h-5 text-cyan-500' />,
          path: '/services/onboarding-support',
          badge: 'Premium',
        },
      ],
    },
  ]

  // Filtered services based on active category
  const filteredServices =
    activeCategory === 'all'
      ? serviceCategories.flatMap((category) => category.items)
      : serviceCategories.find((category) => category.slug === activeCategory)
          ?.items || []

  // Get background gradient class for active category
  const activeCategoryBg =
    activeCategory !== 'all'
      ? serviceCategories.find((cat) => cat.slug === activeCategory)?.bgColor
      : 'from-gray-100 to-gray-50'

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 },
    },
  }

  return (
    <>
      <Navbar />
      <motion.div
        className='fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-50'
        variants={variants}
        animate={cursorVariant}
      />

      <div className='pt-24 pb-16 min-h-screen bg-gray-50 relative overflow-hidden'>
        {/* Abstract background shapes */}
        <div className='absolute inset-0 overflow-hidden -z-10'>
          <div className='absolute -top-10 -right-10 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob'></div>
          <div className='absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000'></div>
          <div className='absolute -bottom-8 left-20 w-72 h-72 bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000'></div>
        </div>

        {/* Hero Section */}
        <div className='relative'>
          <div className='max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8'>
            <motion.div
              className='text-center relative z-10'
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className='text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl md:text-7xl'>
                <span className='block'>Our</span>
                <span className='block text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 pb-2'>
                  Services
                </span>
              </h1>
              <motion.p
                className='mt-4 max-w-md mx-auto text-base text-gray-600 sm:text-lg md:mt-6 md:text-xl md:max-w-3xl'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                Next-generation solutions designed to streamline operations,
                enhance client experiences, and revolutionize your med spa
                business.
              </motion.p>

              {/* Animated accent line */}
              <motion.div
                className='h-1 w-24 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full mx-auto mt-6'
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: 96, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
            </motion.div>
          </div>
        </div>

        {/* Category Filter */}
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4'>
          <motion.div
            className='flex flex-wrap justify-center gap-3'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <button
              onClick={() => setActiveCategory('all')}
              onMouseEnter={() => setCursorVariant('active')}
              onMouseLeave={() => setCursorVariant('default')}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 backdrop-blur-sm ${
                activeCategory === 'all'
                  ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg shadow-pink-500/25'
                  : 'bg-white/80 text-gray-700 hover:bg-white hover:shadow-md border border-gray-200'
              }`}
            >
              All Services
            </button>
            {serviceCategories.map((category) => (
              <button
                key={category.slug}
                onClick={() => setActiveCategory(category.slug)}
                onMouseEnter={() => setCursorVariant('active')}
                onMouseLeave={() => setCursorVariant('default')}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 backdrop-blur-sm flex items-center gap-2 ${
                  activeCategory === category.slug
                    ? `bg-gradient-to-r from-${category.accentColor}-500 to-${category.accentColor}-600 text-white shadow-lg shadow-${category.accentColor}-500/25`
                    : 'bg-white/80 text-gray-700 hover:bg-white hover:shadow-md border border-gray-200'
                }`}
              >
                {category.icon}
                {category.name}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Category Description (visible when a category is selected) */}
        {activeCategory !== 'all' && (
          <motion.div
            className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div
              className={`bg-gradient-to-r ${activeCategoryBg} backdrop-blur-sm bg-white/80 shadow-lg rounded-2xl p-8 text-center border border-gray-100/30`}
            >
              <div className='flex justify-center mb-4'>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    type: 'spring',
                    stiffness: 260,
                    damping: 20,
                  }}
                  className={`p-4 rounded-full bg-${
                    serviceCategories.find(
                      (category) => category.slug === activeCategory
                    )?.accentColor
                  }-100`}
                >
                  {
                    serviceCategories.find(
                      (category) => category.slug === activeCategory
                    )?.icon
                  }
                </motion.div>
              </div>
              <h2 className='text-2xl font-bold text-gray-900 mb-3'>
                {
                  serviceCategories.find(
                    (category) => category.slug === activeCategory
                  )?.name
                }
              </h2>
              <p className='text-gray-600 max-w-3xl mx-auto'>
                {
                  serviceCategories.find(
                    (category) => category.slug === activeCategory
                  )?.description
                }
              </p>
            </div>
          </motion.div>
        )}

        {/* Services Grid */}
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16'>
          <motion.div
            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
            variants={containerVariants}
            initial='hidden'
            animate='visible'
          >
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.title}
                variants={itemVariants}
                onMouseEnter={() => {
                  setHoveredService(service.title)
                  setCursorVariant('active')
                }}
                onMouseLeave={() => {
                  setHoveredService(null)
                  setCursorVariant('default')
                }}
                className='h-full'
              >
                <Link
                  to={service.path}
                  className={`block h-full bg-white/80 backdrop-blur-sm rounded-2xl shadow-md border border-gray-100/30 overflow-hidden hover:shadow-xl transition-all duration-500 group relative ${
                    hoveredService === service.title
                      ? 'scale-[1.02]'
                      : 'scale-100'
                  }`}
                >
                  {/* Service card inner glow effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${
                      service.icon.props.className.includes('pink')
                        ? 'from-pink-500/5 to-transparent'
                        : service.icon.props.className.includes('purple')
                        ? 'from-purple-500/5 to-transparent'
                        : 'from-cyan-500/5 to-transparent'
                    } opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  ></div>

                  <div className='p-6 relative z-10'>
                    <div className='flex items-start gap-4 mb-6'>
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{
                          type: 'spring',
                          stiffness: 400,
                          damping: 10,
                        }}
                        className={`rounded-2xl p-4 ${
                          service.icon.props.className.includes('pink')
                            ? 'bg-gradient-to-br from-pink-100 to-pink-50'
                            : service.icon.props.className.includes('purple')
                            ? 'bg-gradient-to-br from-purple-100 to-purple-50'
                            : 'bg-gradient-to-br from-cyan-100 to-cyan-50'
                        }`}
                      >
                        {service.icon}
                      </motion.div>
                      <div>
                        <div className='flex items-center gap-2'>
                          <h3 className='text-xl font-bold text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-purple-600 transition-all duration-300'>
                            {service.title}
                          </h3>
                          {service.badge && (
                            <span className='px-3 py-1 text-xs rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium shadow-sm'>
                              {service.badge}
                            </span>
                          )}
                        </div>
                        <p className='text-gray-600 mt-2'>
                          {service.description}
                        </p>
                      </div>
                    </div>
                    <div className='mt-6 flex justify-end'>
                      <div className='text-sm font-medium text-pink-500 flex items-center gap-1 group-hover:gap-3 transition-all duration-300'>
                        <span className='relative'>
                          Learn more
                          <motion.span
                            className='absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-500 group-hover:w-full transition-all duration-300'
                            initial={{ width: 0 }}
                            animate={
                              hoveredService === service.title
                                ? { width: '100%' }
                                : { width: 0 }
                            }
                          />
                        </span>
                        <motion.div
                          animate={
                            hoveredService === service.title
                              ? { x: 5 }
                              : { x: 0 }
                          }
                          transition={{
                            type: 'spring',
                            stiffness: 400,
                            damping: 10,
                          }}
                        >
                          <ArrowRight className='w-4 h-4' />
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .animate-blob {
          animation: blob-bounce 8s infinite ease;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        @keyframes blob-bounce {
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
      `}</style>
      <Footer />
    </>
  )
}

export default ServicesPage
