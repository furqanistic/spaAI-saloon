import { motion } from 'framer-motion'
import {
  Activity,
  BarChart,
  CheckCircle,
  ChevronRight,
  DollarSign,
  Filter,
  LineChart,
  PieChart,
  Search,
  TrendingUp,
  User,
  Users,
} from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../components/Layout/Navbar'

const ReportingAnalytics = () => {
  const navigate = useNavigate()

  // Navigate to demo page
  const handleDemoClick = () => {
    navigate('/demo')
  }

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  // Features data based on the provided information
  const features = [
    {
      title: 'Real-Time Dashboards',
      description:
        'Track key metrics like lead conversion rates, appointment bookings, and revenue.',
      details: 'Customizable reports for specific campaigns or services.',
      icon: <BarChart className='w-6 h-6 text-[#38b5ff]' />,
    },
    {
      title: 'Funnel Analytics',
      description: 'Visualize how leads move through your sales funnel.',
      details: 'Identify bottlenecks and optimize campaigns.',
      icon: <Filter className='w-6 h-6 text-[#38b5ff]' />,
    },
    {
      title: 'ROI Tracking',
      description:
        'Measure the performance of ad campaigns, email sequences, and promotions.',
      details: 'See exactly which marketing efforts are driving revenue.',
      icon: <TrendingUp className='w-6 h-6 text-[#38b5ff]' />,
    },
    {
      title: 'Client Lifetime Value (CLV)',
      description:
        'Analyze the long-term value of each client to prioritize high-value leads.',
      details: 'Focus your efforts on the most profitable client segments.',
      icon: <User className='w-6 h-6 text-[#38b5ff]' />,
    },
  ]

  return (
    <div className='min-h-screen bg-gradient-to-br from-white to-gray-50'>
      <Navbar />

      {/* Hero Section */}
      <section className='pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto'>
        <div className='text-center mb-16'>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#38b5ff] to-[#3888ff] bg-clip-text text-transparent mb-4'
          >
            Reporting & Analytics
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='text-gray-600 max-w-3xl mx-auto text-lg'
          >
            Gain powerful insights into your beauty practice's performance with
            customizable analytics dashboards and comprehensive reporting tools.
          </motion.p>
        </div>

        {/* Features Grid */}
        <motion.div
          className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-16'
          variants={containerVariants}
          initial='hidden'
          animate='visible'
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className='bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-[#38b5ff]/20 relative overflow-hidden group'
            >
              <div className='absolute -right-12 -top-12 w-24 h-24 rounded-full bg-gradient-to-br from-[#38b5ff]/10 to-[#3888ff]/5 opacity-0 group-hover:opacity-100 transition-all duration-500'></div>

              <div className='flex items-start space-x-4'>
                <div className='bg-gradient-to-br from-[#38b5ff]/10 to-[#3888ff]/5 p-3 rounded-xl transition-colors duration-300 flex items-center justify-center h-14 w-14'>
                  {feature.icon}
                </div>

                <div className='flex-1'>
                  <h3 className='text-xl font-semibold text-gray-800 mb-2'>
                    {feature.title}
                  </h3>
                  <p className='text-gray-600 mb-2'>{feature.description}</p>
                  <p className='text-gray-500 text-sm'>{feature.details}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Dashboard Preview Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className='bg-white rounded-2xl p-8 shadow-md border border-gray-100 mb-16'
        >
          <h2 className='text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center'>
            Comprehensive Analytics Dashboard
          </h2>

          <div className='bg-gradient-to-br from-[#38b5ff]/5 to-[#3888ff]/5 p-6 rounded-xl mb-8'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-6'>
              {[
                {
                  label: 'Total Revenue',
                  value: '$54,320',
                  change: '+12%',
                  icon: <DollarSign className='w-5 h-5 text-[#38b5ff]' />,
                },
                {
                  label: 'New Clients',
                  value: '248',
                  change: '+8%',
                  icon: <Users className='w-5 h-5 text-[#38b5ff]' />,
                },
                {
                  label: 'Conversion Rate',
                  value: '28.4%',
                  change: '+3.2%',
                  icon: <TrendingUp className='w-5 h-5 text-[#38b5ff]' />,
                },
              ].map((stat, i) => (
                <div key={i} className='bg-white p-4 rounded-xl shadow-sm'>
                  <div className='flex justify-between items-start'>
                    <p className='text-sm text-gray-600'>{stat.label}</p>
                    {stat.icon}
                  </div>
                  <div className='mt-2 flex items-end justify-between'>
                    <p className='text-2xl font-bold text-gray-800'>
                      {stat.value}
                    </p>
                    <span className='text-sm font-medium text-green-500'>
                      {stat.change}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6'>
              {/* Revenue Chart */}
              <div className='bg-white p-4 rounded-xl shadow-sm'>
                <div className='flex justify-between items-center mb-4'>
                  <h3 className='font-medium text-gray-800'>Revenue Trends</h3>
                  <select className='text-xs border border-gray-200 rounded-lg px-2 py-1 bg-gray-50'>
                    <option>Last 30 Days</option>
                    <option>Last Quarter</option>
                    <option>Last Year</option>
                  </select>
                </div>

                <div className='h-48 flex items-end space-x-2'>
                  {[35, 42, 38, 45, 40, 48, 52, 48, 55, 60, 58, 65].map(
                    (value, i) => (
                      <div
                        key={i}
                        className='flex-1 flex flex-col items-center'
                      >
                        <div
                          className='w-full bg-gradient-to-t from-[#38b5ff] to-[#3888ff] rounded-t-sm transition-all duration-300'
                          style={{ height: `${value * 1.5}%` }}
                        ></div>
                        <span className='text-xs text-gray-500 mt-1'>
                          {i % 3 === 0 ? `W${i / 3 + 1}` : ''}
                        </span>
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* Client Acquisition */}
              <div className='bg-white p-4 rounded-xl shadow-sm'>
                <div className='flex justify-between items-center mb-4'>
                  <h3 className='font-medium text-gray-800'>
                    Client Acquisition
                  </h3>
                  <div className='text-xs font-medium text-[#38b5ff]'>
                    +24% vs. previous period
                  </div>
                </div>

                <div className='grid grid-cols-2 gap-4'>
                  <div className='relative h-36'>
                    <div className='absolute inset-0 flex items-center justify-center'>
                      <div className='text-center'>
                        <p className='text-2xl font-bold text-gray-800'>68%</p>
                        <p className='text-xs text-gray-500'>Online</p>
                      </div>
                    </div>
                    <div className='w-full h-full rounded-full border-8 border-[#38b5ff]/30'>
                      <div className='w-full h-full rounded-full border-8 border-[#38b5ff] border-r-transparent border-b-transparent transform rotate-[30deg]'></div>
                    </div>
                  </div>

                  <div className='space-y-2'>
                    {[
                      {
                        source: 'Social Media',
                        value: '32%',
                        color: '#38b5ff',
                      },
                      { source: 'Google Ads', value: '24%', color: '#3888ff' },
                      { source: 'Referrals', value: '22%', color: '#7c3aed' },
                      { source: 'Direct', value: '12%', color: '#ec4899' },
                      { source: 'Other', value: '10%', color: '#8b5cf6' },
                    ].map((source, i) => (
                      <div
                        key={i}
                        className='flex items-center justify-between'
                      >
                        <div className='flex items-center'>
                          <div
                            className='w-3 h-3 rounded-full mr-2'
                            style={{ backgroundColor: source.color }}
                          ></div>
                          <span className='text-xs text-gray-600'>
                            {source.source}
                          </span>
                        </div>
                        <span className='text-xs font-medium'>
                          {source.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
              {/* Services Performance */}
              <div className='bg-white p-4 rounded-xl shadow-sm col-span-2'>
                <div className='flex justify-between items-center mb-4'>
                  <h3 className='font-medium text-gray-800'>
                    Service Performance
                  </h3>
                  <div className='flex space-x-2'>
                    <span className='text-xs px-2 py-0.5 bg-[#38b5ff]/10 text-[#38b5ff] rounded-full'>
                      Revenue
                    </span>
                    <span className='text-xs px-2 py-0.5 bg-[#3888ff]/10 text-[#3888ff] rounded-full'>
                      Bookings
                    </span>
                  </div>
                </div>

                <div className='space-y-3'>
                  {[
                    { service: 'Facial Treatments', revenue: 68, bookings: 74 },
                    { service: 'Botox & Fillers', revenue: 82, bookings: 62 },
                    { service: 'Laser Therapy', revenue: 54, bookings: 48 },
                    {
                      service: 'Skin Care Products',
                      revenue: 38,
                      bookings: 42,
                    },
                  ].map((service, i) => (
                    <div key={i} className='space-y-1'>
                      <div className='flex justify-between items-center'>
                        <span className='text-sm text-gray-700'>
                          {service.service}
                        </span>
                        <div className='flex space-x-4'>
                          <span className='text-xs text-gray-500'>
                            ${(service.revenue * 100).toLocaleString()}
                          </span>
                          <span className='text-xs text-gray-500'>
                            {service.bookings}
                          </span>
                        </div>
                      </div>
                      <div className='h-2 bg-gray-100 rounded-full overflow-hidden'>
                        <div
                          className='h-full bg-[#38b5ff] rounded-full'
                          style={{ width: `${service.revenue}%` }}
                        ></div>
                      </div>
                      <div className='h-2 bg-gray-100 rounded-full overflow-hidden'>
                        <div
                          className='h-full bg-[#3888ff] rounded-full'
                          style={{ width: `${service.bookings}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Lead Sources */}
              <div className='bg-white p-4 rounded-xl shadow-sm'>
                <h3 className='font-medium text-gray-800 mb-3'>
                  Lead Conversion
                </h3>
                <div className='relative pt-5'>
                  <div className='flex flex-col space-y-1'>
                    {[
                      { stage: 'Total Leads', count: 450, width: '100%' },
                      { stage: 'Contacted', count: 382, width: '85%' },
                      { stage: 'Qualified', count: 310, width: '69%' },
                      { stage: 'Consulted', count: 215, width: '48%' },
                      { stage: 'Booked', count: 128, width: '28%' },
                    ].map((stage, i) => (
                      <div key={i} className='mb-3'>
                        <div className='flex justify-between text-xs mb-1'>
                          <span className='text-gray-600'>{stage.stage}</span>
                          <span className='font-medium'>{stage.count}</span>
                        </div>
                        <div className='h-2 bg-gray-100 rounded-full overflow-hidden'>
                          <div
                            className='h-full bg-gradient-to-r from-[#38b5ff] to-[#3888ff] rounded-full'
                            style={{ width: stage.width }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='text-center'>
            <p className='text-gray-600 mb-4'>
              Fully customizable dashboards that give you real-time insights
              into your beauty practice's performance. Track KPIs, identify
              trends, and make data-driven decisions.
            </p>
            <div className='flex flex-wrap justify-center gap-3'>
              {[
                'Revenue Analysis',
                'Client Acquisition',
                'Treatment Popularity',
                'Staff Performance',
                'Marketing ROI',
                'Client Retention',
              ].map((report, i) => (
                <span
                  key={i}
                  className='px-3 py-1 bg-[#38b5ff]/10 text-[#38b5ff] rounded-full text-sm'
                >
                  {report}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Funnel Analysis Section */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16'>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className='bg-white rounded-2xl p-6 shadow-md border border-gray-100'
          >
            <div className='flex items-center mb-4 space-x-3'>
              <Filter className='w-6 h-6 text-[#38b5ff]' />
              <h3 className='text-xl font-semibold text-gray-800'>
                Sales Funnel Visualization
              </h3>
            </div>

            <p className='text-gray-600 mb-6'>
              Track the journey from prospect to paying client, identify
              conversion bottlenecks, and optimize your sales process.
            </p>

            <div className='relative mx-auto max-w-sm mb-6'>
              {[
                {
                  stage: 'Website Visitors',
                  count: '1,250',
                  percent: '100%',
                  color: '#38b5ff',
                },
                {
                  stage: 'Lead Captured',
                  count: '380',
                  percent: '30.4%',
                  color: '#3a9edb',
                },
                {
                  stage: 'Contacted',
                  count: '315',
                  percent: '25.2%',
                  color: '#3d87b7',
                },
                {
                  stage: 'Appointment Set',
                  count: '185',
                  percent: '14.8%',
                  color: '#4071a0',
                },
                {
                  stage: 'Show Up',
                  count: '165',
                  percent: '13.2%',
                  color: '#435b8a',
                },
                {
                  stage: 'Purchase',
                  count: '128',
                  percent: '10.2%',
                  color: '#454473',
                },
              ].map((stage, i) => (
                <div key={i} className='relative'>
                  <div
                    className='mx-auto text-center text-white p-3 mb-1'
                    style={{
                      backgroundColor: stage.color,
                      width: `${80 - i * 10}%`,
                      clipPath:
                        'polygon(5% 0%, 95% 0%, 100% 50%, 95% 100%, 5% 100%, 0% 50%)',
                    }}
                  >
                    <p className='font-medium'>{stage.stage}</p>
                    <div className='flex justify-center items-center space-x-3 text-sm'>
                      <span>{stage.count}</span>
                      <span>|</span>
                      <span>{stage.percent}</span>
                    </div>
                  </div>
                  {i < 5 && (
                    <div className='h-3 w-0.5 bg-gray-200 mx-auto'></div>
                  )}
                </div>
              ))}
            </div>

            <div className='text-center text-sm text-gray-600'>
              <p>
                Visualize your entire customer journey and optimize conversion
                rates at each stage.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className='bg-white rounded-2xl p-6 shadow-md border border-gray-100'
          >
            <div className='flex items-center mb-4 space-x-3'>
              <LineChart className='w-6 h-6 text-[#38b5ff]' />
              <h3 className='text-xl font-semibold text-gray-800'>
                ROI & Campaign Performance
              </h3>
            </div>

            <p className='text-gray-600 mb-6'>
              Measure the effectiveness of your marketing campaigns and
              calculate return on investment for each channel.
            </p>

            <div className='space-y-4 mb-6'>
              {[
                {
                  campaign: 'Spring Facial Promotion',
                  spend: '$1,250',
                  revenue: '$8,720',
                  roi: '598%',
                  performance: 85,
                },
                {
                  campaign: 'Instagram Ad Campaign',
                  spend: '$850',
                  revenue: '$4,320',
                  roi: '408%',
                  performance: 72,
                },
                {
                  campaign: 'Email Newsletter',
                  spend: '$320',
                  revenue: '$2,840',
                  roi: '788%',
                  performance: 90,
                },
                {
                  campaign: 'Google Search Ads',
                  spend: '$980',
                  revenue: '$3,640',
                  roi: '271%',
                  performance: 65,
                },
              ].map((campaign, i) => (
                <div
                  key={i}
                  className='border border-gray-100 rounded-lg p-3 hover:shadow-sm transition-all duration-300'
                >
                  <div className='flex flex-wrap justify-between items-center mb-2'>
                    <h4 className='font-medium text-gray-800'>
                      {campaign.campaign}
                    </h4>
                    <span className='text-sm font-bold text-[#38b5ff]'>
                      ROI: {campaign.roi}
                    </span>
                  </div>

                  <div className='grid grid-cols-2 gap-4 mb-2 text-sm'>
                    <div>
                      <p className='text-gray-500'>Spend</p>
                      <p className='font-medium'>{campaign.spend}</p>
                    </div>
                    <div>
                      <p className='text-gray-500'>Revenue</p>
                      <p className='font-medium'>{campaign.revenue}</p>
                    </div>
                  </div>

                  <div className='w-full h-2 bg-gray-100 rounded-full overflow-hidden'>
                    <div
                      className='h-full bg-gradient-to-r from-[#38b5ff] to-[#3888ff] rounded-full'
                      style={{ width: `${campaign.performance}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <div className='text-center'>
              <div className='inline-flex items-center space-x-1 text-sm text-[#38b5ff] font-medium'>
                <Search className='w-4 h-4' />
                <span>ROI tracking across all marketing channels</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Client Lifetime Value Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className='bg-white rounded-2xl p-8 shadow-md border border-gray-100 mb-16'
        >
          <div className='flex items-center justify-center mb-6 space-x-3'>
            <PieChart className='w-8 h-8 text-[#38b5ff]' />
            <h2 className='text-2xl md:text-3xl font-bold text-gray-800'>
              Client Lifetime Value Analysis
            </h2>
          </div>

          <div className='flex flex-col md:flex-row items-center gap-8'>
            <div className='md:w-1/2'>
              <div className='bg-gradient-to-br from-[#38b5ff]/10 to-[#3888ff]/5 p-6 rounded-2xl'>
                <div className='bg-white rounded-xl shadow-sm p-4'>
                  <h3 className='font-semibold text-gray-800 mb-4'>
                    Client Value Segments
                  </h3>

                  <div className='space-y-4'>
                    {[
                      {
                        segment: 'VIP Clients',
                        count: 86,
                        value: '$4,850',
                        color: '#38b5ff',
                      },
                      {
                        segment: 'Regular Clients',
                        count: 235,
                        value: '$1,920',
                        color: '#3888ff',
                      },
                      {
                        segment: 'Occasional Clients',
                        count: 412,
                        value: '$750',
                        color: '#6366f1',
                      },
                      {
                        segment: 'New Clients',
                        count: 178,
                        value: 'TBD',
                        color: '#8b5cf6',
                      },
                    ].map((segment, i) => (
                      <div key={i} className='space-y-1'>
                        <div className='flex justify-between items-center'>
                          <div className='flex items-center space-x-2'>
                            <div
                              className='w-3 h-3 rounded-full'
                              style={{ backgroundColor: segment.color }}
                            ></div>
                            <span className='text-sm text-gray-700'>
                              {segment.segment}
                            </span>
                          </div>
                          <div className='flex space-x-4 text-sm'>
                            <span className='text-gray-500'>
                              {segment.count}
                            </span>
                            <span className='font-medium'>{segment.value}</span>
                          </div>
                        </div>
                        <div className='h-2 bg-gray-100 rounded-full overflow-hidden'>
                          <div
                            className='h-full rounded-full'
                            style={{
                              width: `${
                                i === 0 ? 15 : i === 1 ? 40 : i === 2 ? 30 : 15
                              }%`,
                              backgroundColor: segment.color,
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className='md:w-1/2'>
              <h3 className='text-xl font-semibold text-gray-800 mb-4'>
                Maximize Client Value
              </h3>
              <p className='text-gray-600 mb-4'>
                Understand the long-term value of your clients to identify
                high-potential segments and optimize your marketing and
                retention strategies.
              </p>

              <div className='bg-[#38b5ff]/10 p-4 rounded-xl mb-6'>
                <div className='flex items-start space-x-3'>
                  <Activity className='w-5 h-5 text-[#38b5ff] mt-0.5' />
                  <div>
                    <p className='font-medium text-gray-800 mb-1'>
                      Did you know?
                    </p>
                    <p className='text-sm text-gray-600'>
                      A 5% increase in client retention can increase profits by
                      up to 95%, as loyal clients spend more, refer others, and
                      cost less to service.
                    </p>
                  </div>
                </div>
              </div>

              <ul className='space-y-3'>
                {[
                  'Segment clients by value and behavior',
                  'Target marketing to high-value prospects',
                  'Create personalized retention programs',
                  'Identify upgrade and cross-sell opportunities',
                  'Predict future revenue and growth potential',
                ].map((benefit, i) => (
                  <li key={i} className='flex items-start space-x-2'>
                    <CheckCircle className='w-5 h-5 text-[#38b5ff] mt-0.5' />
                    <span className='text-gray-600'>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className='bg-gradient-to-r from-[#38b5ff] to-[#3888ff] rounded-2xl p-8 shadow-lg text-center text-white'
        >
          <h2 className='text-2xl md:text-3xl font-bold mb-4'>
            Ready to Make Data-Driven Decisions?
          </h2>
          <p className='mb-6 max-w-2xl mx-auto'>
            Transform your beauty practice with powerful analytics tools that
            reveal what's working, what's not, and where your best opportunities
            lie.
          </p>
          <button
            onClick={handleDemoClick}
            className='bg-white text-[#38b5ff] px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 shadow-md flex items-center mx-auto'
          >
            <span>Book a Demo</span>
            <ChevronRight className='ml-2 w-5 h-5' />
          </button>
        </motion.div>
      </section>
    </div>
  )
}

export default ReportingAnalytics
