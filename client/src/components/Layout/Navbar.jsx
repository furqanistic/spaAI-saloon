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
  BarChart,
  BookMarked,
  Bot,
  Calendar,
  ChevronDown,
  DollarSign,
  Gem,
  Menu,
  Phone,
  Sparkles,
  Users,
  X,
} from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState(null)
  const [visible, setVisible] = useState(true)
  const [prevScrollPos, setPrevScrollPos] = useState(0)

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
      items: [
        {
          title: 'Radiant MD Consulting',
          description: 'Strategic growth consulting for med spas',
          icon: <Users className='w-5 h-5 text-[#38b5ff]' />,
          badge: 'Featured',
        },
        {
          title: 'Marketing & Leads',
          description: 'Campaign management & lead generation',
          icon: <Sparkles className='w-5 h-5 text-[#38b5ff]' />,
        },
        {
          title: 'Reception Services',
          description: 'Professional appointment setting',
          icon: <Phone className='w-5 h-5 text-[#38b5ff]' />,
        },
      ],
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
          {/* Logo */}
          <Link to='/'>
            <motion.div
              className='flex-shrink-0 flex items-center space-x-2 sm:space-x-3'
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              <div className='relative group'>
                <div className='absolute inset-0 bg-gradient-to-r from-[#38b5ff]/20 to-[#3888ff]/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300'></div>
                <div className='relative w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-r from-[#38b5ff] to-[#3888ff] flex items-center justify-center shadow-lg'>
                  <span className='text-white font-bold text-lg sm:text-xl'>
                    R
                  </span>
                </div>
              </div>
              <div className='flex flex-col'>
                <span className='text-lg sm:text-xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent'>
                  Radiant MD
                </span>
                <span className='text-xs sm:text-sm font-medium text-[#38b5ff]'>
                  Consulting
                </span>
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
                    <button className='relative px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg text-white font-semibold shadow-lg transition-all duration-300 group-hover:shadow-xl'>
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
                          {item.items.map((subItem) => (
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
                    path: '#',
                  },
                  {
                    title: 'About',
                    icon: <Users className='w-4 h-4' />,
                    path: '#',
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
                    <Button className='relative w-full bg-gradient-to-r from-[#38b5ff] to-[#3888ff] hover:opacity-90 text-white shadow-lg text-sm sm:text-base'>
                      Book Demo
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
