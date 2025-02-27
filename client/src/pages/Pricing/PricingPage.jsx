import React from 'react'
import Footer from '../../components/Layout/Footer'
import Navbar from '../../components/Layout/Navbar'
import CustomerTestimonial from '../../components/Pricing/CustomerTestimonial'
import PlanComparison from '../../components/Pricing/PlanComparison'
import PricingSection from '../../components/Pricing/PricingSection'
import TrustedBrands from '../../components/Pricing/TrustedBrands'

const PricingPage = () => {
  return (
    <div>
      <Navbar />
      <div className='pt-8'>
        <PricingSection />
        <CustomerTestimonial />
        <TrustedBrands />
        {/* <PlanComparison /> */}
      </div>
      <Footer />
    </div>
  )
}

export default PricingPage
