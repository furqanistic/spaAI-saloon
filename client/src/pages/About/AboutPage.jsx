import React from 'react'
import FAQ from '../../components/About/FAQ'
import Mission from '../../components/About/Mission'
import Values from '../../components/About/Values'
import Footer from '../../components/Layout/Footer'
import Navbar from '../../components/Layout/Navbar'

const AboutPage = () => {
  return (
    <div>
      <Navbar />
      <div className='pt-2'>
        <Mission />
        <Values />
        <FAQ />
      </div>
      <Footer />
    </div>
  )
}

export default AboutPage
