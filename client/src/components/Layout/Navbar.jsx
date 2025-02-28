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
  Calendar,
  ChevronDown,
  CreditCard,
  DollarSign,
  Gem,
  LineChart,
  Menu,
  MessageSquare,
  Phone,
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
      const isScrollingDown =
        currentScrollPos > prevScrollPos && currentScrollPos > 50
      setVisible(currentScrollPos < 10 || !isScrollingDown)
      setScrolled(currentScrollPos > 20)
      setPrevScrollPos(currentScrollPos)
    }

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

  // Service categories
  const serviceCategories = [
    {
      name: 'Client Management',
      items: [
        {
          title: 'Lead Generation & Capture',
          description: 'Custom landing pages & lead capture tools',
          icon: <Users className='w-5 h-5 text-pink-500' />,
          path: '/services/lead-generation',
          badge: 'Popular',
        },
        {
          title: 'Lead Nurturing & Follow-Up',
          description: 'AI-driven follow-ups & drip campaigns',
          icon: <MessageSquare className='w-5 h-5 text-pink-500' />,
          path: '/services/lead-nurturing',
        },
        {
          title: 'Appointment Scheduling',
          description: 'Calendar sync & automated reminders',
          icon: <Calendar className='w-5 h-5 text-pink-500' />,
          path: '/services/appointment-scheduling',
        },
        {
          title: 'CRM Tools',
          description: 'Client segmentation & pipeline management',
          icon: <Users className='w-5 h-5 text-pink-500' />,
          path: '/services/crm-tools',
        },
      ],
    },
    {
      name: 'Marketing & Sales',
      items: [
        {
          title: 'Marketing Automation',
          description: 'Content calendar & dynamic ad integration',
          icon: <Sparkles className='w-5 h-5 text-purple-500' />,
          path: '/services/marketing-automation',
        },
        {
          title: 'Communication Tools',
          description: 'Two-way SMS, email & chatbot integration',
          icon: <MessageSquare className='w-5 h-5 text-purple-500' />,
          path: '/services/communication-tools',
        },
        {
          title: 'Payment Processing',
          description: 'Integrated payment gateways & subscriptions',
          icon: <CreditCard className='w-5 h-5 text-purple-500' />,
          path: '/services/payment-processing',
        },
        {
          title: 'Reporting & Analytics',
          description: 'Real-time dashboards & ROI tracking',
          icon: <LineChart className='w-5 h-5 text-purple-500' />,
          path: '/services/reporting-analytics',
        },
      ],
    },
    {
      name: 'Med Spa Essentials',
      items: [
        {
          title: 'Industry-Specific Features',
          description: 'Med spa tailored campaigns & promotions',
          icon: <Star className='w-5 h-5 text-cyan-500' />,
          path: '/services/industry-features',
        },
        {
          title: 'White-Labeling & Branding',
          description: 'Custom domains & branded client portals',
          icon: <Tag className='w-5 h-5 text-cyan-500' />,
          path: '/services/white-labeling',
        },
        {
          title: 'Integrations',
          description: 'Native & third-party app connections',
          icon: <Settings className='w-5 h-5 text-cyan-500' />,
          path: '/services/integrations',
        },
        {
          title: 'Onboarding & Support',
          description: 'White-glove setup & dedicated assistance',
          icon: <Award className='w-5 h-5 text-cyan-500' />,
          path: '/services/onboarding-support',
          badge: 'Premium',
        },
      ],
    },
  ]

  const serviceItems = serviceCategories.flatMap((category) => category.items)

  const menuItems = [
    {
      title: 'Services',
      icon: <Gem className='w-4 h-4 mr-1' />,
      items: serviceItems,
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
        opacity: { duration: 0.3 },
        y: { duration: 0.4 },
      }}
      className={`fixed w-full z-50 ${
        scrolled ? 'bg-white/90 shadow-md' : 'bg-white'
      }`}
    >
      <div className='max-w-7xl mx-auto px-4'>
        <div className='flex justify-between items-center h-16'>
          {/* Logo (Left) */}
          <Link to='/' className='flex-shrink-0'>
            <img src='/logo.png' alt='Company Logo' className='h-10 w-auto' />
          </Link>

          {/* Navigation (Center) - Desktop */}
          <div className='hidden lg:flex justify-center flex-1 mx-4'>
            <NavigationMenu className='w-full'>
              <NavigationMenuList className='flex items-center justify-center space-x-1'>
                <NavigationMenuItem>
                  <Link to='/'>
                    <div className='px-3 py-2 text-gray-700 hover:text-pink-500 text-sm'>
                      Home
                    </div>
                  </Link>
                </NavigationMenuItem>
                {menuItems.map((item) => (
                  <NavigationMenuItem key={item.title}>
                    <NavigationMenuTrigger
                      onClick={(e) => {
                        e.preventDefault()
                        navigate('/services')
                      }}
                      className='flex items-center text-gray-700 hover:text-pink-500 px-3 py-2 text-sm bg-transparent'
                    >
                      {item.icon}
                      <span>{item.title}</span>
                    </NavigationMenuTrigger>

                    <NavigationMenuContent className='left-1/2 -translate-x-1/2'>
                      {' '}
                      {/* Center the dropdown */}
                      {item.title === 'Services' ? (
                        <div
                          className='p-5 bg-white border border-gray-100 rounded-lg shadow-lg'
                          style={{ width: '900px' }}
                        >
                          <div className='mb-4'>
                            <h3 className='text-lg font-bold text-pink-500'>
                              Our Services
                            </h3>
                            <div className='h-1 w-20 bg-pink-500 mt-1'></div>
                            <p className='text-gray-600 mt-2 text-sm'>
                              Comprehensive solutions to streamline your med spa
                              operations
                            </p>
                          </div>
                          {/* Service categories */}
                          <div className='grid grid-cols-3 gap-6'>
                            {serviceCategories.map((category, idx) => (
                              <div key={category.name} className='mb-2'>
                                <h4 className='font-medium text-gray-900 border-b border-gray-100 pb-2 mb-3'>
                                  {category.name}
                                </h4>
                                <div className='space-y-2'>
                                  {category.items.map((service) => (
                                    <Link key={service.title} to={service.path}>
                                      <div className='group flex items-start gap-3 p-2 rounded-md hover:bg-gray-50'>
                                        <div
                                          className={`rounded-md p-2 ${
                                            idx === 0
                                              ? 'bg-pink-100'
                                              : idx === 1
                                              ? 'bg-purple-100'
                                              : 'bg-cyan-100'
                                          }`}
                                        >
                                          {service.icon}
                                        </div>
                                        <div>
                                          <div className='flex items-center gap-2 mb-1'>
                                            <span className='font-medium text-gray-900 group-hover:text-pink-500'>
                                              {service.title}
                                            </span>
                                            {service.badge && (
                                              <span className='px-2 py-0.5 text-xs rounded-full bg-pink-100 text-pink-600 font-medium'>
                                                {service.badge}
                                              </span>
                                            )}
                                          </div>
                                          <p className='text-xs text-gray-500'>
                                            {service.description}
                                          </p>
                                        </div>
                                      </div>
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <ul className='grid w-[300px] gap-2 p-4 bg-white rounded-lg shadow-lg'>
                          {item.items.map((subItem) => (
                            <li key={subItem.title}>
                              <Link to='#'>
                                <div className='block p-3 hover:bg-gray-50 rounded-md transition-colors'>
                                  <div className='flex items-start space-x-3'>
                                    <div className='bg-gray-50 p-2 rounded-md'>
                                      {subItem.icon}
                                    </div>
                                    <div>
                                      <div className='flex items-center space-x-2'>
                                        <div className='text-sm font-medium text-gray-900'>
                                          {subItem.title}
                                        </div>
                                        {subItem.badge && (
                                          <span className='px-2 py-0.5 text-xs rounded-full bg-pink-100 text-pink-500 font-medium'>
                                            {subItem.badge}
                                          </span>
                                        )}
                                      </div>
                                      <div className='mt-1 text-xs text-gray-500'>
                                        {subItem.description}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ))}
                {/* Static menu items */}
                {[
                  {
                    title: 'Pricing',
                    icon: <DollarSign className='w-4 h-4 mr-1' />,
                    path: '/pricing',
                  },
                  {
                    title: 'Resources',
                    icon: <Play className='w-4 h-4 mr-1' />,
                    path: '/resource',
                  },
                  {
                    title: 'About',
                    icon: <Users className='w-4 h-4 mr-1' />,
                    path: '/about',
                  },
                ].map((item) => (
                  <NavigationMenuItem key={item.title}>
                    <Link to={item.path}>
                      <div className='flex items-center px-3 py-2 text-gray-700 hover:text-pink-500 text-sm'>
                        {item.icon}
                        <span>{item.title}</span>
                      </div>
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Button (Right) */}
          <div className='hidden lg:block'>
            <button
              onClick={handleClick}
              className='px-5 py-2 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full text-white font-medium hover:opacity-90'
            >
              <span className='flex items-center space-x-1'>
                <span>Book Demo</span>
                <svg
                  className='w-4 h-4'
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
          </div>

          {/* Mobile menu button */}
          <div className='lg:hidden'>
            <Button
              variant='ghost'
              size='icon'
              onClick={() => {
                setIsOpen(!isOpen)
                setActiveSubmenu(null)
              }}
              className='text-gray-700'
            >
              {isOpen ? (
                <X className='w-6 h-6' />
              ) : (
                <Menu className='w-6 h-6' />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className='lg:hidden overflow-hidden'
            >
              <div className='px-2 pt-2 pb-3 space-y-1 bg-white rounded-md shadow-md mt-2'>
                <Link to='/'>
                  <div className='block px-3 py-2 rounded-md text-gray-700 hover:text-pink-500 hover:bg-gray-50 text-sm'>
                    Home
                  </div>
                </Link>

                {menuItems.map((item) => (
                  <div key={item.title} className='space-y-1'>
                    <div className='w-full flex items-center justify-between px-3 py-2 text-gray-700 hover:text-pink-500 hover:bg-gray-50 rounded-md text-sm'>
                      <button
                        onClick={() => navigate('/services')}
                        className='flex items-center text-left'
                      >
                        {item.icon}
                        <span>{item.title}</span>
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          toggleSubmenu(item.title)
                        }}
                      >
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            activeSubmenu === item.title ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                    </div>

                    <AnimatePresence>
                      {activeSubmenu === item.title && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className='pl-4 space-y-1'
                        >
                          {item.title === 'Services' &&
                            serviceCategories.map((category) => (
                              <div key={category.name} className='mb-2'>
                                <h4 className='ml-3 mt-2 mb-1 font-medium text-gray-900 text-sm'>
                                  {category.name}
                                </h4>
                                <div className='space-y-1'>
                                  {category.items.map((subItem) => (
                                    <Link to={subItem.path} key={subItem.title}>
                                      <div className='block px-3 py-2 rounded-md text-gray-600 hover:text-pink-500 hover:bg-gray-50 text-sm'>
                                        <div className='flex items-center space-x-2'>
                                          {subItem.icon}
                                          <div>
                                            <div className='flex items-center space-x-2'>
                                              <span className='font-medium text-gray-800'>
                                                {subItem.title}
                                              </span>
                                              {subItem.badge && (
                                                <span className='px-2 py-0.5 text-xs rounded-full bg-pink-100 text-pink-500 font-medium'>
                                                  {subItem.badge}
                                                </span>
                                              )}
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}

                {[
                  {
                    title: 'Pricing',
                    icon: <DollarSign className='w-4 h-4 mr-2' />,
                    path: '/pricing',
                  },
                  {
                    title: 'Resources',
                    icon: <Play className='w-4 h-4 mr-2' />,
                    path: '/resource',
                  },
                  {
                    title: 'About',
                    icon: <Users className='w-4 h-4 mr-2' />,
                    path: '/about',
                  },
                  {
                    title: 'Contact',
                    icon: <Phone className='w-4 h-4 mr-2' />,
                    path: '/contact',
                  },
                ].map((item) => (
                  <Link to={item.path} key={item.title}>
                    <div className='flex items-center px-3 py-2 rounded-md text-gray-700 hover:text-pink-500 hover:bg-gray-50 text-sm'>
                      {item.icon}
                      <span>{item.title}</span>
                    </div>
                  </Link>
                ))}

                <div className='px-3 py-2'>
                  <button
                    onClick={handleClick}
                    className='w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:opacity-90 text-white text-sm py-2 px-4 rounded-full flex items-center justify-center gap-2'
                  >
                    <span>Book Demo</span>
                    <svg
                      className='w-4 h-4'
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
                  </button>
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
