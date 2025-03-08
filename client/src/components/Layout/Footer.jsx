import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  ChevronRight,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  Sparkles,
} from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
  const navigate = useNavigate()
  const handleDemo = () => {
    navigate('/demo')
  }
  const quickLinks = [
    { name: 'Home', to: '/' },
    { name: 'Features', to: '/features' },
    { name: 'Services', to: '/services' },
    { name: 'Pricing', to: '/pricing' },
    { name: 'About Us', to: '/about' },
    { name: 'Contact', to: '/demo' },
  ]

  const socialLinks = [
    {
      name: 'Facebook',
      icon: Facebook,
      href: 'https://www.facebook.com/radiantmdconsulting/',
      color: 'from-blue-400 to-blue-600',
    },
    {
      name: 'Instagram',
      icon: Instagram,
      href: 'https://www.instagram.com/radiantmdsocialss',
      color: 'from-pink-500 to-purple-600',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://www.linkedin.com/company/radiantmd-consulting',
      color: 'from-blue-500 to-blue-700',
    },
  ]

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
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
    <footer className='bg-gradient-to-b from-white to-pink-50'>
      <div className='container mx-auto px-4 pt-16'>
        {/* Newsletter Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='relative bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl p-8 mb-12 shadow-lg overflow-hidden'
        >
          <div className='absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full transform translate-x-1/3 -translate-y-1/3'></div>
          <div className='absolute bottom-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full transform -translate-x-1/3 translate-y-1/3'></div>

          <div className='flex flex-col md:flex-row items-center justify-between gap-6 relative z-10'>
            <div className='text-center md:text-left'>
              <h2 className='text-2xl font-bold text-white mb-2'>
                Elevate Your Beauty Practice Experience
              </h2>
              <p className='text-pink-100 max-w-md'>
                Subscribe for tips, strategies, and insights to grow your
                practice
              </p>
            </div>
            <div className='flex w-full md:w-auto flex-col sm:flex-row gap-3'>
              <input
                type='email'
                placeholder='Enter your email'
                className='w-full sm:w-64 px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-pink-100 focus:outline-none focus:ring-2 focus:ring-white/50'
              />
              <button className='px-6 py-3 bg-white text-pink-600 rounded-lg font-medium hover:bg-pink-50 transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2 group'>
                Subscribe
                <ArrowUpRight className='w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform' />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Main Content */}
        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-12 border-b border-gray-200'
        >
          {/* Company Info */}
          <motion.div variants={itemVariants}>
            <div className='mb-6'>
              <h2 className='text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600'>
                RadiantAI
              </h2>
              <p className='text-gray-600 mt-4'>
                The complete platform for med spas and beauty clinics looking to
                streamline operations, increase bookings, and deliver
                exceptional client experiences.
              </p>
            </div>
            <div className='space-y-4 mt-6'>
              <a
                href='tel:(709) 705-5747'
                className='text-gray-600 hover:text-pink-500 transition-colors flex items-center gap-3 group'
              >
                <div className='p-2 rounded-full bg-pink-100 text-pink-500 group-hover:bg-pink-500 group-hover:text-white transition-colors'>
                  <Phone className='w-4 h-4' />
                </div>
                <span>(709) 705-5747</span>
              </a>
              <a
                href='mailto:info@radiantmdconsulting.com'
                className='text-gray-600 hover:text-pink-500 transition-colors flex items-center gap-3 group'
              >
                <div className='p-2 rounded-full bg-pink-100 text-pink-500 group-hover:bg-pink-500 group-hover:text-white transition-colors'>
                  <Mail className='w-4 h-4' />
                </div>
                <span>info@radiantmdconsulting.com</span>
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className='text-sm font-semibold text-gray-900 uppercase tracking-wider mb-6'>
              Quick Links
            </h3>
            <ul className='grid grid-cols-1 gap-3'>
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.to}
                    className='text-gray-600 hover:text-pink-500 transition-colors flex items-center gap-2 group'
                  >
                    <ChevronRight className='w-4 h-4 text-pink-300 group-hover:text-pink-500' />
                    <span className='group-hover:translate-x-1 transition-transform'>
                      {link.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants}>
            <h3 className='text-sm font-semibold text-gray-900 uppercase tracking-wider mb-6'>
              Connect With Us
            </h3>
            <div className='flex gap-4 mb-6'>
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='group'
                  aria-label={`Follow us on ${social.name}`}
                >
                  <div
                    className={`p-3 rounded-full bg-gradient-to-r ${social.color} text-white shadow-md hover:shadow-lg transform transition-all duration-300 hover:scale-110`}
                  >
                    <social.icon className='w-5 h-5' />
                  </div>
                </a>
              ))}
            </div>
            <div className='bg-white p-4 rounded-lg shadow-md border border-gray-100'>
              <h4 className='font-medium text-gray-800 mb-2 flex items-center gap-2'>
                <Sparkles className='w-4 h-4 text-pink-500' />
                Book a Demo
              </h4>
              <p className='text-sm text-gray-600 mb-3'>
                See how RadiantAI can transform your business operations
              </p>
              <a
                href='/demo'
                className='w-full py-2 px-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transition-shadow flex items-center justify-center gap-2 text-sm'
              >
                Schedule Now
                <ArrowUpRight className='w-3 h-3' />
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <div className='py-8 flex flex-col sm:flex-row justify-between items-center gap-4'>
          <p className='text-sm text-gray-600'>
            © {new Date().getFullYear()} RadiantAI. All rights reserved.
          </p>
          <div className='flex items-center gap-6 text-sm'>
            <a
              href='/terms'
              className='text-gray-600 hover:text-pink-500 transition-colors'
            >
              Terms & Conditions
            </a>
            <a
              href='/privacy-policy'
              className='text-gray-600 hover:text-pink-500 transition-colors'
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
