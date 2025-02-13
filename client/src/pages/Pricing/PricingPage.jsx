import React from 'react'
import Footer from '../../components/Layout/Footer'
import Navbar from '../../components/Layout/Navbar'
import PlanComparison from '../../components/Pricing/PlanComparison'
import PricingSection from '../../components/Pricing/PricingSection'

const PricingPage = () => {
  return (
    <div>
      <Navbar />
      <div className='pt-2'>
        <PricingSection />
        <PlanComparison />
      </div>
      <Footer />
    </div>
  )
}

export default PricingPage
