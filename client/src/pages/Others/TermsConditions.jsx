import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { motion } from 'framer-motion'
import {
  AlertOctagon,
  AlertTriangle,
  Award,
  BookOpen,
  Cloud,
  Combine,
  Copyright,
  FileText,
  FileUp,
  Info,
  Link2,
  LockKeyhole,
  Mail,
  MessageSquare,
  Scale,
  Settings,
  Shield,
  UserCheck,
  UserX,
} from 'lucide-react'
import React from 'react'
import Footer from '../../components/Layout/Footer'
import Navbar from '../../components/Layout/Navbar'

const TermsConditions = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  }

  const sections = [
    {
      icon: <BookOpen className='w-6 h-6 text-blue-600' />,
      title: 'Introduction',
      content:
        "Welcome to RadiantMD! The services offered on our website, radiantmdconsulting.com (the 'Site'), are owned and operated by RadiantMD Consulting ('Company,' 'RadiantMD,' 'we,' 'us,' or 'our'). Please read this Agreement of Service ('Agreement') and our Privacy Policy carefully because they govern your use of the Services. By using our Services, you agree to be bound by this Agreement.",
    },
    {
      icon: <FileText className='w-6 h-6 text-pink-600' />,
      title: 'Definitions',
      content: `Throughout this Agreement:
      • "Services" refers to the software, AI tools, marketing automation, and virtual sales support services provided through our Site.
      • "User" refers to customers, browsers, vendors, merchants, and general visitors to our Site.
      • "You" refers to the person or entity using RadiantMD's Services.`,
    },
    {
      icon: <MessageSquare className='w-6 h-6 text-purple-600' />,
      title: 'Feedback',
      content:
        "We welcome feedback, comments, and suggestions to improve the Services ('Feedback'). If you provide Feedback, you grant us the right to use it without restriction or compensation.",
    },
    {
      icon: <Link2 className='w-6 h-6 text-blue-600' />,
      title: 'Errors, Inaccuracies & Third-Party Links',
      content:
        'We strive to keep our Site accurate and up-to-date, but we do not guarantee that all information is error-free. Prices, features, and availability are subject to change without notice. We may provide links to third-party resources for convenience, but we do not endorse or assume responsibility for their content.',
    },
    {
      icon: <Settings className='w-6 h-6 text-pink-600' />,
      title: 'Modifications to the Services & Pricing',
      content:
        'RadiantMD reserves the right to modify or discontinue the Services (or any part thereof) at any time without prior notice. We are not liable to you or any third party for price changes, modifications, or discontinuations.',
    },
    {
      icon: <Shield className='w-6 h-6 text-purple-600' />,
      title: 'Acceptable Use Policy',
      content: `You agree not to use our Services for any unlawful, abusive, or unethical activities, including but not limited to:
      • Violating any laws or regulations
      • Infringing upon intellectual property rights
      • Harassing, abusing, or discriminating against any individual or group
      • Attempting to disrupt or compromise our technology`,
    },
    {
      icon: <LockKeyhole className='w-6 h-6 text-blue-600' />,
      title: 'License Restrictions',
      content:
        'RadiantMD grants you a limited, non-exclusive, non-transferable license to access and use our Services. You may not copy, modify, distribute, or reverse-engineer any part of our platform.',
    },
    {
      icon: <Cloud className='w-6 h-6 text-pink-600' />,
      title: 'Service Downtime',
      content:
        'Our Services may be unavailable due to maintenance, security updates, or unforeseen circumstances. While we strive to provide uptime, we are not responsible for any losses due to downtime.',
    },
    {
      icon: <Copyright className='w-6 h-6 text-purple-600' />,
      title: 'Copyright & Intellectual Property',
      content:
        'All content on our Site, including logos, software, graphics, and text, is owned or licensed by RadiantMD. Unauthorized reproduction, modification, or distribution is prohibited.',
    },
    {
      icon: <FileUp className='w-6 h-6 text-blue-600' />,
      title: 'Your Content',
      content:
        "If you upload, post, or submit any content to our Services ('User Content'), you retain ownership but grant RadiantMD a license to use, display, and distribute it for service-related purposes. You are responsible for ensuring that your User Content does not infringe on any third-party rights or violate laws.",
    },
    {
      icon: <UserCheck className='w-6 h-6 text-pink-600' />,
      title: 'Privacy & Personal Information',
      content:
        'Our use of your personal data is governed by our Privacy Policy. By using our Services, you consent to our collection and processing of your information as outlined in the policy.',
    },
    {
      icon: <Award className='w-6 h-6 text-purple-600' />,
      title: 'Trademarks',
      content:
        'RadiantMD and its associated branding are trademarks of RadiantMD Consulting. Unauthorized use of our trademarks, trade dress, or branding is strictly prohibited.',
    },
    {
      icon: <AlertOctagon className='w-6 h-6 text-blue-600' />,
      title: 'Disclaimers & Warranties',
      content:
        "The Services are provided 'AS IS,' without warranties of any kind. We do not guarantee uninterrupted, error-free, or secure access to our Services. To the fullest extent permitted by law, we disclaim all implied warranties, including merchantability and fitness for a particular purpose.",
    },
    {
      icon: <Scale className='w-6 h-6 text-pink-600' />,
      title: 'Limitation of Liability',
      content:
        'RadiantMD shall not be liable for any indirect, incidental, special, or consequential damages, including lost profits or business interruptions, arising from your use of our Services. Our total liability to you for any claim shall not exceed the amount you paid for the Services in the past six months.',
    },
    {
      icon: <AlertTriangle className='w-6 h-6 text-purple-600' />,
      title: 'Indemnification',
      content: `You agree to indemnify and hold RadiantMD harmless from any claims, damages, or losses arising from:
      • Your use of the Services
      • Any content you submit
      • Your violation of this Agreement`,
    },
    {
      icon: <UserX className='w-6 h-6 text-blue-600' />,
      title: 'Termination',
      content:
        'We reserve the right to suspend or terminate your access to our Services at any time, with or without cause.',
    },
    {
      icon: <Combine className='w-6 h-6 text-pink-600' />,
      title: 'Severability',
      content:
        'If any provision of this Agreement is found invalid or unenforceable, the remaining provisions shall continue in full force and effect.',
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
              Terms & Conditions
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
              <Info className='w-6 h-6 text-blue-600' />
              Contact Information
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
            These terms and conditions were last updated on February 19, 2025.
          </motion.p>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default TermsConditions
