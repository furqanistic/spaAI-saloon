import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { motion } from 'framer-motion'
import {
  Baby,
  Bell,
  Book,
  Clock,
  Database,
  Eye,
  Globe,
  Lock,
  Mail,
  MessageCircle,
  RefreshCw,
  Server,
  Share2,
  Shield,
  ShieldCheck,
  UserCheck,
  Users,
} from 'lucide-react'
import React from 'react'
import Footer from '../../components/Layout/Footer'
import Navbar from '../../components/Layout/Navbar'

const PrivacyPolicy = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  }

  const sections = [
    {
      icon: <Shield className='w-6 h-6 text-blue-600' />,
      title: 'Introduction',
      content:
        "RadiantMD Consulting ('RadiantMD,' 'we,' 'us,' or 'our') provides AI-driven marketing automation, lead nurturing, and virtual sales services for med spas and beauty clinics. This Privacy Policy explains how we collect, use, and protect your personal information, as well as your rights and choices regarding your data. By using our website (radiantmdconsulting.com) and services, you agree to the terms outlined in this Privacy Policy.",
    },
    {
      icon: <Eye className='w-6 h-6 text-pink-600' />,
      title: 'Scope',
      content:
        "This Privacy Policy applies to personal information collected through our website, applications, and services (collectively, the 'Services'). This does not apply to data our customers collect and process through RadiantMD's Services ('Customer Data'), which is governed by their respective privacy policies. RadiantMD is the controller of the personal information we collect, unless stated otherwise.",
    },
    {
      icon: <Database className='w-6 h-6 text-purple-600' />,
      title: 'Information We Collect',
      content: `We collect various types of information including:
      • Account Information – Name, email, phone number, business details
      • Payment Information – Processed via third-party providers (we don't store payment details)
      • Communications – Emails, inquiries, and support requests
      • Device & Usage Data – IP address, browser type, location
      • Cookies & Tracking Technologies – For authentication and analytics
      • Social Media & Integrations – Data from platform interactions
      • Advertising & Analytics – Data from tools like Google Analytics`,
    },
    {
      icon: <Server className='w-6 h-6 text-blue-600' />,
      title: 'How We Use Your Information',
      content: `We use your information to:
      • Provide & improve our Services
      • Enhance your experience through personalization
      • Ensure security & prevent fraud
      • Deliver marketing & communications
      • Meet legal & compliance requirements`,
    },
    {
      icon: <Share2 className='w-6 h-6 text-pink-600' />,
      title: 'How We Share Your Information',
      content:
        'We may share your information with service providers, advertising partners, and legal authorities when required. In case of business transfers (mergers, sales, or restructuring), information may be transferred as well. We do not sell your personal information to third parties.',
    },
    {
      icon: <UserCheck className='w-6 h-6 text-purple-600' />,
      title: 'Your Privacy Rights & Choices',
      content: `You have the right to:
      • Access & correct your personal data
      • Request deletion of your information
      • Opt-out of marketing communications
      • Restrict certain data processing activities
      Contact our privacy team to exercise these rights.`,
    },
    {
      icon: <ShieldCheck className='w-6 h-6 text-blue-600' />,
      title: 'Security of Your Information',
      content:
        'We implement strong security measures including encryption, access controls, and continuous monitoring to protect your data. While we strive for maximum security, no online service can guarantee 100% security.',
    },
    {
      icon: <Globe className='w-6 h-6 text-pink-600' />,
      title: 'International Data Transfers',
      content:
        'Your information may be processed in countries outside your residence. We ensure appropriate safeguards are in place for these international transfers in compliance with applicable data protection laws.',
    },
    {
      icon: <Clock className='w-6 h-6 text-purple-600' />,
      title: 'Data Retention',
      content:
        'We retain your personal information for as long as necessary to provide our services and comply with legal obligations. When data is no longer needed, it is securely deleted or anonymized.',
    },
    {
      icon: <Baby className='w-6 h-6 text-blue-600' />,
      title: "Children's Privacy",
      content:
        'Our Services are not intended for users under 13 years of age. We do not knowingly collect or maintain information from children. If we learn we have collected such information, we will take steps to delete it.',
    },
    {
      icon: <RefreshCw className='w-6 h-6 text-pink-600' />,
      title: 'Updates to This Policy',
      content:
        'We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. We will notify you of any significant changes through our website or email.',
    },
  ]

  return (
    <>
      <Navbar />
      <div className='pt-20 min-h-screen bg-gradient-to-b from-white to-blue-50'>
        {/* Hero Section */}
        <motion.div
          className='bg-gradient-to-r from-blue-900 via-purple-900 to-pink-800 text-white py-16 px-4 sm:px-6 lg:px-8'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className='max-w-4xl mx-auto'>
            <motion.h1
              className='text-4xl sm:text-5xl font-bold mb-4'
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Privacy Policy
            </motion.h1>
            <motion.p
              className='text-lg opacity-90'
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Last Updated: Feb 19, 2025
            </motion.p>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
          <div className='space-y-12'>
            {sections.map((section, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
              >
                <Card className='overflow-hidden hover:shadow-lg transition-shadow duration-300'>
                  <CardHeader className='bg-gradient-to-r from-blue-50 to-pink-50'>
                    <CardTitle className='flex items-center gap-3 text-xl font-semibold'>
                      {section.icon}
                      {section.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className='pt-6'>
                    <p className='text-gray-700 leading-relaxed whitespace-pre-line'>
                      {section.content}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Contact Section */}
          <motion.div
            className='mt-16 bg-gradient-to-r from-blue-100 via-purple-50 to-pink-100 rounded-2xl p-8'
            {...fadeInUp}
          >
            <h2 className='text-2xl font-semibold mb-4 text-gray-900 flex items-center gap-3'>
              <MessageCircle className='w-6 h-6 text-blue-600' />
              Contact Us
            </h2>
            <div className='flex items-start gap-4'>
              <Mail className='w-6 h-6 text-blue-600 mt-1' />
              <div>
                <p className='text-gray-700'>
                  RadiantMD Consulting
                  <br />
                  13035 164Ave
                  <br />
                  Edmonton Alberta
                  <br />
                  info@radiantmdconsulting.com
                </p>
              </div>
            </div>
          </motion.div>

          {/* Footer Note */}
          <motion.p className='text-center text-gray-500 mt-12' {...fadeInUp}>
            This privacy policy was last updated on February 19, 2025.
          </motion.p>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default PrivacyPolicy
