import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Sparkles,
  Twitter,
} from 'lucide-react'
import React from 'react'

const Footer = () => {
  const links = {
    product: [
      { name: 'Features', href: '#' },
      { name: 'Pricing', href: '#' },
      { name: 'Integration', href: '#' },
      { name: 'Case Studies', href: '#' },
    ],
    company: [
      { name: 'About', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Press Kit', href: '#' },
    ],
    resources: [
      { name: 'Documentation', href: '#' },
      { name: 'Help Center', href: '#' },
      { name: 'Community', href: '#' },
      { name: 'Contact', href: '#' },
    ],
    legal: [
      { name: 'Privacy', href: '#' },
      { name: 'Terms', href: '#' },
      { name: 'Security', href: '#' },
      { name: 'Cookies', href: '#' },
    ],
  }

  const socialLinks = [
    { icon: Facebook, href: '#' },
    { icon: Twitter, href: '#' },
    { icon: Instagram, href: '#' },
    { icon: Linkedin, href: '#' },
  ]

  return (
    <footer className='relative bg-gradient-to-b from-white to-blue-50 pt-24 overflow-hidden'>
      {/* Background Elements */}
      <div className='absolute inset-0 pointer-events-none'>
        <motion.div
          className='absolute top-0 left-0 w-96 h-96 bg-[#38b5ff]/10 rounded-full blur-3xl'
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
        <motion.div
          className='absolute bottom-0 right-0 w-96 h-96 bg-blue-300/10 rounded-full blur-3xl'
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>

      {/* Newsletter Section */}
      <div className='container mx-auto px-4 mb-16'>
        <motion.div
          className='relative bg-gradient-to-r from-[#38b5ff] to-blue-600 rounded-2xl p-8 md:p-12 overflow-hidden'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20" />
          <div className='relative z-10 max-w-3xl'>
            <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
              Stay Updated with RadiantAI
            </h2>
            <p className='text-blue-100 mb-8'>
              Get the latest updates on feature releases, industry insights, and
              exclusive offers.
            </p>
            <div className='flex flex-col sm:flex-row gap-4'>
              <input
                type='email'
                placeholder='Enter your email'
                className='flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-blue-100 focus:outline-none focus:ring-2 focus:ring-white/50'
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='px-6 py-3 bg-white text-[#38b5ff] rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center gap-2'
              >
                Subscribe
                <ArrowUpRight className='w-4 h-4' />
              </motion.button>
            </div>
          </div>
          <Sparkles className='absolute top-4 right-4 w-6 h-6 text-white/40' />
        </motion.div>
      </div>

      {/* Main Footer Content */}
      <div className='container mx-auto px-4 relative'>
        <div className='grid grid-cols-2 md:grid-cols-12 gap-8 pb-12 border-b border-gray-200'>
          {/* Logo and social links */}
          <div className='col-span-2 md:col-span-3'>
            <div className='flex items-center gap-2 mb-6'>
              <Sparkles className='w-8 h-8 text-[#38b5ff]' />
              <span className='text-xl font-bold text-gray-900'>RadiantAI</span>
            </div>
            <div className='flex gap-4'>
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  className='w-10 h-10 rounded-full bg-[#38b5ff]/10 flex items-center justify-center text-[#38b5ff] hover:bg-[#38b5ff] hover:text-white transition-colors'
                >
                  <social.icon className='w-5 h-5' />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links sections */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category} className='col-span-1 md:col-span-2'>
              <h3 className='text-sm font-semibold text-gray-900 uppercase mb-4'>
                {category}
              </h3>
              <ul className='space-y-2'>
                {items.map((item) => (
                  <li key={item.name}>
                    <motion.a
                      href={item.href}
                      className='text-gray-600 hover:text-[#38b5ff] transition-colors inline-flex items-center gap-1'
                      whileHover={{ x: 5 }}
                    >
                      {item.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className='py-8 flex flex-col md:flex-row justify-between items-center gap-4'>
          <p className='text-gray-600 text-sm'>
            © {new Date().getFullYear()} RadiantAI. All rights reserved.
          </p>
          <div className='flex flex-wrap justify-center gap-8'>
            <a
              href='#'
              className='text-gray-600 hover:text-[#38b5ff] transition-colors flex items-center gap-2'
            >
              <Mail className='w-4 h-4' />
              <span>contact@radiantai.com</span>
            </a>
            <a
              href='#'
              className='text-gray-600 hover:text-[#38b5ff] transition-colors flex items-center gap-2'
            >
              <Phone className='w-4 h-4' />
              <span>+90 123 345 6789</span>
            </a>
            <a
              href='#'
              className='text-gray-600 hover:text-[#38b5ff] transition-colors flex items-center gap-2'
            >
              <MapPin className='w-4 h-4' />
              <span>Istanbul, Turkey</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
