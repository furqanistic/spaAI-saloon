import { Button } from '@/components/ui/button'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import { AnimatePresence, motion } from 'framer-motion'
import {
  Award,
  BarChart,
  BookMarked,
  Bot,
  Calendar,
  ChevronDown,
  CreditCard,
  DollarSign,
  FileText,
  Gem,
  LineChart,
  Menu,
  MessageSquare,
  Phone,
  PieChart,
  Play,
  Settings,
  Sparkles,
  Star,
  Tag,
  Users,
  X,
} from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState(null)
  const [visible, setVisible] = useState(true)
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/demo')
  }

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY

      // Add a threshold to prevent tiny scroll movements from triggering the hide/show
      const isScrollingDown =
        currentScrollPos > prevScrollPos && currentScrollPos > 50

      // Update visibility based on scroll direction and position
      setVisible(currentScrollPos < 10 || !isScrollingDown)

      // Update scrolled state for background effect
      setScrolled(currentScrollPos > 20)

      // Save the current scroll position
      setPrevScrollPos(currentScrollPos)
    }

    // Add throttling to prevent too many updates
    let timeoutId = null
    const throttledScroll = () => {
      if (timeoutId) clearTimeout(timeoutId)
      timeoutId = setTimeout(handleScroll, 100)
    }

    window.addEventListener('scroll', throttledScroll)
    return () => {
      window.removeEventListener('scroll', throttledScroll)
      if (timeoutId) clearTimeout(timeoutId)
    }
  }, [prevScrollPos])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false)
        setActiveSubmenu(null)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const toggleSubmenu = (title) => {
    setActiveSubmenu(activeSubmenu === title ? null : title)
  }

  // Updated services from paste.txt
  const serviceItems = [
    {
      title: 'Lead Generation & Capture',
      description: 'Custom landing pages & lead capture tools',
      icon: <Users className='w-5 h-5 text-[#38b5ff]' />,
      path: '/services/lead-generation',
      badge: 'Popular',
    },
    {
      title: 'Lead Nurturing & Follow-Up',
      description: 'AI-driven follow-ups & drip campaigns',
      icon: <MessageSquare className='w-5 h-5 text-[#38b5ff]' />,
      path: '/services/lead-nurturing',
    },
    {
      title: 'Appointment Scheduling',
      description: 'Calendar sync & automated reminders',
      icon: <Calendar className='w-5 h-5 text-[#38b5ff]' />,
      path: '/services/appointment-scheduling',
    },
    {
      title: 'Marketing Automation',
      description: 'Content calendar & dynamic ad integration',
      icon: <Sparkles className='w-5 h-5 text-[#38b5ff]' />,
      path: '/services/marketing-automation',
    },
    {
      title: 'CRM Tools',
      description: 'Client segmentation & pipeline management',
      icon: <Users className='w-5 h-5 text-[#38b5ff]' />,
      path: '/services/crm-tools',
    },
    {
      title: 'Payment Processing',
      description: 'Integrated payment gateways & subscriptions',
      icon: <CreditCard className='w-5 h-5 text-[#38b5ff]' />,
      path: '/services/payment-processing',
    },
    {
      title: 'Communication Tools',
      description: 'Two-way SMS, email & chatbot integration',
      icon: <MessageSquare className='w-5 h-5 text-[#38b5ff]' />,
      path: '/services/communication-tools',
    },
    {
      title: 'Reporting & Analytics',
      description: 'Real-time dashboards & ROI tracking',
      icon: <LineChart className='w-5 h-5 text-[#38b5ff]' />,
      path: '/services/reporting-analytics',
    },
    {
      title: 'Industry-Specific Features',
      description: 'Med spa tailored campaigns & promotions',
      icon: <Star className='w-5 h-5 text-[#38b5ff]' />,
      path: '/services/industry-features',
    },
    {
      title: 'White-Labeling & Branding',
      description: 'Custom domains & branded client portals',
      icon: <Tag className='w-5 h-5 text-[#38b5ff]' />,
      path: '/services/white-labeling',
    },
    {
      title: 'Integrations',
      description: 'Native & third-party app connections',
      icon: <Settings className='w-5 h-5 text-[#38b5ff]' />,
      path: '/services/integrations',
    },
    {
      title: 'Onboarding & Support',
      description: 'White-glove setup & dedicated assistance',
      icon: <Award className='w-5 h-5 text-[#38b5ff]' />,
      path: '/services/onboarding-support',
      badge: 'Premium',
    },
  ]

  const menuItems = [
    {
      title: 'Solutions',
      icon: <Sparkles className='w-4 h-4' />,
      items: [
        {
          title: 'Practice Management',
          description: 'Booking, scheduling & client database',
          icon: <Calendar className='w-5 h-5 text-[#38b5ff]' />,
          badge: 'Popular',
        },
        {
          title: 'AI Virtual Assistant',
          description: '24/7 automated support & engagement',
          icon: <Bot className='w-5 h-5 text-[#38b5ff]' />,
          badge: 'New',
        },
        {
          title: 'Business Analytics',
          description: 'Insights, reporting & performance tracking',
          icon: <BarChart className='w-5 h-5 text-[#38b5ff]' />,
        },
      ],
    },
    {
      title: 'Services',
      icon: <Gem className='w-4 h-4' />,
      items: serviceItems, // Using the updated service items
    },
  ]

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{
        opacity: visible ? 1 : 0,
        y: visible ? 0 : -100,
      }}
      transition={{
        opacity: { duration: 0.3, ease: 'easeInOut' },
        y: { duration: 0.4, ease: 'easeInOut' },
      }}
      className={`fixed w-full z-50 transform-gpu ${
        scrolled ? 'bg-white/95 backdrop-blur-lg shadow-lg' : 'bg-white/95'
      }`}
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16 sm:h-20'>
          {/* Logo - Replaced with image */}
          <Link to='/'>
            <motion.div
              className='flex-shrink-0'
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              <div className='relative group'>
                <div className='absolute inset-0 bg-gradient-to-r from-[#38b5ff]/20 to-[#3888ff]/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300'></div>
                <div className='relative'>
                  {/* Replace with your actual logo image */}
                  <img
                    src='/logo.png'
                    alt='Company Logo'
                    className='h-10 sm:h-12 w-auto object-contain'
                  />
                </div>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className='hidden lg:block'>
            <NavigationMenu>
              <NavigationMenuList className='flex items-center space-x-1 xl:space-x-2'>
                <NavigationMenuItem>
                  <Link to='/'>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{
                        type: 'spring',
                        stiffness: 400,
                        damping: 17,
                      }}
                      className='px-3 xl:px-4 py-2 text-gray-700 hover:text-[#38b5ff] transition-colors duration-300 text-sm xl:text-base relative group'
                    >
                      <span className='relative z-10'>Home</span>
                      <span className='absolute inset-0 bg-gray-50 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 ease-out'></span>
                    </motion.div>
                  </Link>
                </NavigationMenuItem>

                {menuItems.map((item) => (
                  <NavigationMenuItem key={item.title}>
                    <NavigationMenuTrigger className='flex items-center space-x-1 text-gray-700 hover:text-[#38b5ff] group px-3 xl:px-4 text-sm xl:text-base'>
                      {item.icon}
                      <span>{item.title}</span>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      {item.title === 'Services' ? (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className='grid grid-cols-3 gap-5 p-8 bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl w-[900px] max-h-[600px] overflow-y-auto'
                          style={{
                            background:
                              'linear-gradient(to bottom right, rgba(255, 255, 255, 0.98), rgba(248, 250, 252, 0.95))',
                            boxShadow:
                              '0 20px 60px -15px rgba(56, 181, 255, 0.15), 0 0 20px -5px rgba(0, 0, 0, 0.1)',
                          }}
                        >
                          <div className='col-span-3 mb-4'>
                            <h3 className='text-xl font-bold bg-gradient-to-r from-[#38b5ff] to-[#3888ff] bg-clip-text text-transparent'>
                              Our Services
                            </h3>
                            <div className='h-1 w-24 bg-gradient-to-r from-[#38b5ff] to-[#3888ff] rounded-full mt-1.5'></div>
                            <p className='text-gray-600 mt-2 text-sm'>
                              Comprehensive solutions to streamline your
                              business operations
                            </p>
                          </div>

                          {serviceItems.map((subItem) => (
                            <motion.div
                              key={subItem.title}
                              whileHover={{ scale: 1.03, y: -3 }}
                              transition={{
                                type: 'spring',
                                stiffness: 400,
                                damping: 17,
                              }}
                            >
                              <Link to={subItem.path}>
                                <div className='block p-5 rounded-2xl transition-all duration-300 group border border-gray-100 hover:border-[#38b5ff]/40 relative overflow-hidden h-full shadow-sm hover:shadow-lg bg-white'>
                                  {/* Decorative background elements */}
                                  <div className='absolute inset-0 bg-gradient-to-br from-[#38b5ff]/0 via-white/0 to-[#3888ff]/0 group-hover:from-[#38b5ff]/10 group-hover:to-[#3888ff]/5 transition-all duration-500'></div>
                                  <div className='absolute -right-16 -top-16 w-32 h-32 rounded-full bg-gradient-to-br from-[#38b5ff]/10 to-[#3888ff]/5 opacity-0 group-hover:opacity-100 transition-all duration-700'></div>
                                  <div className='absolute -left-20 -bottom-20 w-40 h-40 rounded-full bg-gradient-to-tr from-[#3888ff]/5 to-[#38b5ff]/10 opacity-0 group-hover:opacity-80 transition-all duration-700 delay-100'></div>

                                  <div className='relative flex flex-col space-y-4'>
                                    {/* Icon container with enhanced styling */}
                                    <div className='bg-gradient-to-br from-[#38b5ff]/10 to-[#3888ff]/5 p-3.5 rounded-xl group-hover:from-[#38b5ff]/20 group-hover:to-[#3888ff]/15 transition-all duration-500 w-14 h-14 flex items-center justify-center shadow-sm group-hover:shadow-md'>
                                      {React.cloneElement(subItem.icon, {
                                        className:
                                          'w-6 h-6 text-[#38b5ff] group-hover:text-[#3075ff] transition-colors duration-300',
                                      })}
                                    </div>

                                    <div className='space-y-2'>
                                      <div className='flex items-center space-x-2'>
                                        <div className='text-base font-semibold text-gray-800 group-hover:text-[#38b5ff] transition-colors duration-300'>
                                          {subItem.title}
                                        </div>
                                        {subItem.badge && (
                                          <span className='px-2.5 py-0.5 text-xs rounded-full bg-gradient-to-r from-[#38b5ff]/20 to-[#3888ff]/20 text-[#38b5ff] font-medium border border-[#38b5ff]/10'>
                                            {subItem.badge}
                                          </span>
                                        )}
                                      </div>
                                      <div className='text-sm text-gray-500 group-hover:text-gray-600 transition-colors duration-300 leading-relaxed'>
                                        {subItem.description}
                                      </div>
                                    </div>

                                    {/* Enhanced hover effect with arrow */}
                                    <div className='w-full pt-1 flex justify-end items-center opacity-0 group-hover:opacity-100 transition-all duration-300 -mb-1'>
                                      <span className='text-sm font-medium text-[#38b5ff] mr-1 group-hover:mr-2 transition-all duration-300'>
                                        Learn more
                                      </span>
                                      <svg
                                        className='w-5 h-5 text-[#38b5ff] transform group-hover:translate-x-1 transition-transform duration-300'
                                        fill='none'
                                        stroke='currentColor'
                                        viewBox='0 0 24 24'
                                      >
                                        <path
                                          strokeLinecap='round'
                                          strokeLinejoin='round'
                                          strokeWidth={2}
                                          d='M13 7l5 5-5 5'
                                        />
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                              </Link>
                            </motion.div>
                          ))}
                        </motion.div>
                      ) : (
                        <motion.ul
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className='grid w-[300px] xl:w-[400px] gap-3 p-4 xl:p-6 bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl'
                        >
                          {item.items.map((subItem) => (
                            <motion.li
                              key={subItem.title}
                              whileHover={{ scale: 1.02 }}
                              transition={{
                                type: 'spring',
                                stiffness: 400,
                                damping: 17,
                              }}
                            >
                              <Link to='#'>
                                <div className='block p-3 xl:p-4 hover:bg-gray-50/80 rounded-xl transition-all duration-300 group border border-gray-100 hover:border-[#38b5ff]/20 relative overflow-hidden'>
                                  <div className='absolute inset-0 bg-gradient-to-r from-[#38b5ff]/0 to-[#38b5ff]/0 group-hover:from-[#38b5ff]/5 group-hover:to-[#3888ff]/5 transition-all duration-300'></div>
                                  <div className='relative flex items-start space-x-3 xl:space-x-4'>
                                    <div className='bg-gray-50 p-2 rounded-lg group-hover:bg-white transition-colors duration-300'>
                                      {subItem.icon}
                                    </div>
                                    <div className='flex-1'>
                                      <div className='flex items-center space-x-2'>
                                        <div className='text-sm xl:text-base font-medium text-gray-900 group-hover:text-[#38b5ff] transition-colors'>
                                          {subItem.title}
                                        </div>
                                        {subItem.badge && (
                                          <span className='px-2 py-0.5 text-xs rounded-full bg-[#38b5ff]/10 text-[#38b5ff] font-medium'>
                                            {subItem.badge}
                                          </span>
                                        )}
                                      </div>
                                      <div className='mt-1 text-xs xl:text-sm text-gray-500 group-hover:text-gray-600 transition-colors'>
                                        {subItem.description}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </Link>
                            </motion.li>
                          ))}
                        </motion.ul>
                      )}
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ))}

                {/* Static menu items */}
                {[
                  {
                    title: 'Pricing',
                    icon: <DollarSign className='w-4 h-4' />,
                    path: '/pricing',
                  },
                  {
                    title: 'Resources',
                    icon: <Play className='w-4 h-4' />,
                    path: '/resource',
                  },

                  {
                    title: 'About',
                    icon: <Users className='w-4 h-4' />,
                    path: '/about',
                  },
                  {
                    title: 'Contact',
                    icon: <Phone className='w-4 h-4' />,
                    path: '/contact',
                  },
                ].map((item) => (
                  <NavigationMenuItem key={item.title}>
                    <Link to={item.path}>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{
                          type: 'spring',
                          stiffness: 400,
                          damping: 17,
                        }}
                        className='flex items-center space-x-1 px-3 xl:px-4 py-2 text-gray-700 hover:text-[#38b5ff] transition-colors duration-300 text-sm xl:text-base relative group'
                      >
                        <span className='relative z-10 flex items-center space-x-1'>
                          {item.icon}
                          <span>{item.title}</span>
                        </span>
                        <span className='absolute inset-0 bg-gray-50 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 ease-out'></span>
                      </motion.div>
                    </Link>
                  </NavigationMenuItem>
                ))}

                <NavigationMenuItem>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{
                      type: 'spring',
                      stiffness: 400,
                      damping: 10,
                      mass: 0.8,
                    }}
                    className='relative group inline-block'
                  >
                    {/* Glow effect container */}
                    <div className='absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg opacity-75 blur transition-all duration-300 group-hover:opacity-100 group-hover:blur-lg' />

                    {/* Button content */}
                    <button
                      onClick={handleClick}
                      className='relative px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg text-white font-semibold shadow-lg transition-all duration-300 group-hover:shadow-xl'
                    >
                      <span className='flex items-center justify-center space-x-2'>
                        <span>Book Demo</span>
                        <svg
                          className='w-4 h-4 transition-transform duration-300 group-hover:translate-x-1'
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M9 5l7 7-7 7'
                          />
                        </svg>
                      </span>
                    </button>
                  </motion.div>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Mobile menu button */}
          <motion.div
            className='lg:hidden flex items-center'
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant='ghost'
              size='icon'
              onClick={() => {
                setIsOpen(!isOpen)
                setActiveSubmenu(null)
              }}
              className='text-gray-700 hover:text-[#38b5ff] relative group'
            >
              <span className='absolute inset-0 bg-gray-50 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 ease-out'></span>
              <span className='relative'>
                {isOpen ? (
                  <X className='w-6 h-6' />
                ) : (
                  <Menu className='w-6 h-6' />
                )}
              </span>
            </Button>
          </motion.div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              className='lg:hidden overflow-hidden'
            >
              <div className='px-2 pt-2 pb-3 space-y-2 bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl mt-2'>
                <Link to='/'>
                  <motion.div
                    whileTap={{ scale: 0.98 }}
                    className='block px-4 py-3 rounded-xl text-gray-700 hover:text-[#38b5ff] hover:bg-gray-50 text-sm sm:text-base relative group overflow-hidden'
                  >
                    <span className='relative z-10'>Home</span>
                    <div className='absolute inset-0 bg-gradient-to-r from-[#38b5ff]/0 to-[#38b5ff]/0 group-hover:from-[#38b5ff]/5 group-hover:to-[#3888ff]/5 transition-all duration-300'></div>
                  </motion.div>
                </Link>
                {menuItems.map((item) => (
                  <div key={item.title} className='space-y-1'>
                    <motion.button
                      whileTap={{ scale: 0.98 }}
                      onClick={() => toggleSubmenu(item.title)}
                      className='w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:text-[#38b5ff] hover:bg-gray-50 rounded-xl text-sm sm:text-base relative group overflow-hidden'
                    >
                      <span className='relative z-10 flex items-center space-x-2'>
                        {item.icon}
                        <span>{item.title}</span>
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          activeSubmenu === item.title ? 'rotate-180' : ''
                        }`}
                      />
                      <div className='absolute inset-0 bg-gradient-to-r from-[#38b5ff]/0 to-[#38b5ff]/0 group-hover:from-[#38b5ff]/5 group-hover:to-[#3888ff]/5 transition-all duration-300'></div>
                    </motion.button>
                    <AnimatePresence>
                      {activeSubmenu === item.title && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{
                            type: 'spring',
                            stiffness: 400,
                            damping: 17,
                          }}
                          className='pl-4 space-y-1'
                        >
                          {item.title === 'Services'
                            ? serviceItems.map((subItem) => (
                                <Link to={subItem.path} key={subItem.title}>
                                  <motion.div
                                    whileTap={{ scale: 0.98 }}
                                    className='block px-4 py-4 my-2 rounded-xl text-gray-600 hover:text-[#38b5ff] hover:bg-white relative group overflow-hidden border border-transparent hover:border-[#38b5ff]/20 shadow-sm hover:shadow-md transition-all duration-300'
                                  >
                                    <div className='relative z-10 flex items-center space-x-3'>
                                      <div className='bg-gradient-to-br from-[#38b5ff]/10 to-[#3888ff]/5 p-2 rounded-xl group-hover:from-[#38b5ff]/15 group-hover:to-[#3888ff]/10 transition-all duration-300 flex items-center justify-center h-10 w-10'>
                                        {React.cloneElement(subItem.icon, {
                                          className:
                                            'w-5 h-5 text-[#38b5ff] group-hover:text-[#3075ff]',
                                        })}
                                      </div>
                                      <div>
                                        <div className='flex items-center space-x-2'>
                                          <span className='font-semibold text-sm sm:text-base text-gray-800 group-hover:text-[#38b5ff] transition-colors'>
                                            {subItem.title}
                                          </span>
                                          {subItem.badge && (
                                            <span className='px-2 py-0.5 text-xs rounded-full bg-gradient-to-r from-[#38b5ff]/20 to-[#3888ff]/20 text-[#38b5ff] font-medium'>
                                              {subItem.badge}
                                            </span>
                                          )}
                                        </div>
                                        <div className='text-xs sm:text-sm text-gray-500 mt-1 pr-6'>
                                          {subItem.description}
                                        </div>
                                      </div>
                                      <div className='absolute right-4 opacity-0 group-hover:opacity-100 transition-all duration-300'>
                                        <svg
                                          className='w-5 h-5 text-[#38b5ff]'
                                          fill='none'
                                          stroke='currentColor'
                                          viewBox='0 0 24 24'
                                        >
                                          <path
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            strokeWidth={2}
                                            d='M9 5l7 7-7 7'
                                          />
                                        </svg>
                                      </div>
                                    </div>
                                    <div className='absolute inset-0 bg-gradient-to-r from-[#38b5ff]/0 to-[#38b5ff]/0 group-hover:from-[#38b5ff]/5 group-hover:to-[#3888ff]/5 transition-all duration-300'></div>
                                  </motion.div>
                                </Link>
                              ))
                            : item.items.map((subItem) => (
                                <Link to='#' key={subItem.title}>
                                  <motion.div
                                    whileTap={{ scale: 0.98 }}
                                    className='block px-4 py-3 rounded-xl text-gray-600 hover:text-[#38b5ff] hover:bg-gray-50 relative group overflow-hidden'
                                  >
                                    <div className='relative z-10 flex items-center space-x-3'>
                                      <div className='bg-gray-50 p-2 rounded-lg group-hover:bg-white transition-colors duration-300'>
                                        {subItem.icon}
                                      </div>
                                      <div>
                                        <div className='flex items-center space-x-2'>
                                          <span className='font-medium text-sm sm:text-base group-hover:text-[#38b5ff] transition-colors'>
                                            {subItem.title}
                                          </span>
                                          {subItem.badge && (
                                            <span className='px-2 py-0.5 text-xs rounded-full bg-[#38b5ff]/10 text-[#38b5ff] font-medium'>
                                              {subItem.badge}
                                            </span>
                                          )}
                                        </div>
                                        <div className='text-xs sm:text-sm text-gray-500'>
                                          {subItem.description}
                                        </div>
                                      </div>
                                    </div>
                                    <div className='absolute inset-0 bg-gradient-to-r from-[#38b5ff]/0 to-[#38b5ff]/0 group-hover:from-[#38b5ff]/5 group-hover:to-[#3888ff]/5 transition-all duration-300'></div>
                                  </motion.div>
                                </Link>
                              ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
                {[
                  {
                    title: 'Pricing',
                    icon: <DollarSign className='w-4 h-4' />,
                    path: '/pricing',
                  },
                  {
                    title: 'Resources',
                    icon: <BookMarked className='w-4 h-4' />,
                    path: '/resource',
                  },
                  {
                    title: 'About',
                    icon: <Users className='w-4 h-4' />,
                    path: '/about',
                  },
                  {
                    title: 'Contact',
                    icon: <Phone className='w-4 h-4' />,
                    path: '/contact',
                  },
                ].map((item) => (
                  <Link to={item.path} key={item.title}>
                    <motion.div
                      whileTap={{ scale: 0.98 }}
                      className='flex items-center space-x-2 px-4 py-3 rounded-xl text-gray-700 hover:text-[#38b5ff] hover:bg-gray-50 text-sm sm:text-base relative group overflow-hidden'
                    >
                      <span className='relative z-10 flex items-center space-x-2'>
                        {item.icon}
                        <span>{item.title}</span>
                      </span>
                      <div className='absolute inset-0 bg-gradient-to-r from-[#38b5ff]/0 to-[#38b5ff]/0 group-hover:from-[#38b5ff]/5 group-hover:to-[#3888ff]/5 transition-all duration-300'></div>
                    </motion.div>
                  </Link>
                ))}
                <div className='px-4 py-3'>
                  <motion.div
                    whileTap={{ scale: 0.98 }}
                    className='relative group'
                  >
                    <div className='absolute inset-0 bg-gradient-to-r from-[#38b5ff] to-[#3888ff] rounded-lg blur group-hover:blur-md transition-all duration-300'></div>
                    <Button
                      onClick={handleClick}
                      className='relative w-full bg-gradient-to-r from-[#38b5ff] to-[#3888ff] hover:opacity-90 text-white shadow-lg text-sm sm:text-base flex items-center justify-center gap-2'
                    >
                      <span>Book Demo</span>
                      <svg
                        className='w-4 h-4 transition-transform duration-300 group-hover:translate-x-1'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M9 5l7 7-7 7'
                        />
                      </svg>
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

export default Navbar
