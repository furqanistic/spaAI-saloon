import {
  ArrowUpRight,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
} from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  const quickLinks = [
    { name: 'Home', to: '/' },
    { name: 'Features', to: '/features' },
    { name: 'Services', to: '/services' },
    { name: 'Pricing', to: '/pricing' },
    { name: 'About Us', to: '/about' },
    { name: 'Contact', to: '/contact' },
  ]

  const socialLinks = [
    {
      name: 'Facebook',
      icon: Facebook,
      href: 'https://www.facebook.com/radiantmdconsulting/',
    },
    {
      name: 'Instagram',
      icon: Instagram,
      href: 'https://www.instagram.com/radiantmdsocialss',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://www.linkedin.com/company/radiantmd-consulting',
    },
  ]

  return (
    <footer className='bg-gradient-to-b from-white to-blue-50'>
      <div className='container mx-auto px-4'>
        {/* Newsletter Section */}
        <div className='relative bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-6 mb-8'>
          <div className='flex flex-col md:flex-row items-center justify-between gap-4'>
            <h2 className='text-xl font-semibold text-white'>
              Subscribe for tips on growing your spa
            </h2>
            <div className='flex w-full md:w-auto flex-col sm:flex-row gap-3'>
              <input
                type='email'
                placeholder='Enter your email'
                className='w-full sm:w-64 px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-blue-100 focus:outline-none focus:ring-2 focus:ring-white/50'
              />
              <button className='px-4 py-2 bg-white text-blue-500 rounded-lg font-medium hover:bg-blue-50 transition-colors flex items-center justify-center gap-2'>
                Subscribe
                <ArrowUpRight className='w-4 h-4' />
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-gray-200'>
          {/* Quick Links */}
          <div>
            <h3 className='text-sm font-semibold text-gray-900 uppercase mb-4'>
              Quick Links
            </h3>
            <ul className='grid grid-cols-2 gap-2'>
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.to}
                    className='text-sm text-gray-600 hover:text-blue-500 transition-colors hover:translate-x-1 duration-200 block'
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className='text-sm font-semibold text-gray-900 uppercase mb-4'>
              Contact Info
            </h3>
            <div className='space-y-2'>
              <a
                href='tel:(709) 705-5747'
                className='text-sm text-gray-600 hover:text-blue-500 transition-colors flex items-center gap-2'
              >
                <Phone className='w-4 h-4' />
                <span>(709) 705-5747</span>
              </a>
              <a
                href='mailto:info@radiantmdconsulting.com'
                className='text-sm text-gray-600 hover:text-blue-500 transition-colors flex items-center gap-2'
              >
                <Mail className='w-4 h-4' />
                <span>info@radiantmdconsulting.com</span>
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className='text-sm font-semibold text-gray-900 uppercase mb-4'>
              Follow Us
            </h3>
            <div className='flex gap-4'>
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-gray-600 hover:text-blue-500 transition-colors'
                  aria-label={`Follow us on ${social.name}`}
                >
                  <social.icon className='w-6 h-6' />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='py-6 flex flex-col sm:flex-row justify-between items-center gap-4'>
          <p className='text-sm text-gray-600'>
            © {new Date().getFullYear()} RadiantAI. All rights reserved.
          </p>
          <div className='flex items-center gap-4 text-sm'>
            <Link
              to='/terms'
              className='text-gray-600 hover:text-blue-500 transition-colors'
            >
              Terms & Conditions
            </Link>
            <span className='text-gray-300'>|</span>
            <Link
              to='/privacy-policy'
              className='text-gray-600 hover:text-blue-500 transition-colors'
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
