import React from 'react'
import AnimatedHeadline from '../../components/Home/AnimatedHeadline'
import CategorySlider from '../../components/Home/CategorySlider'
import HeroSection from '../../components/Home/HeroSection'
import ImageSlider from '../../components/Home/ImageSlider'
import TestimonialSection from '../../components/Home/TestimonialSection'
import WhoWeAre from '../../components/Home/WhoWeAre'
import Footer from '../../components/Layout/Footer'
import Navbar from '../../components/Layout/Navbar'

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <CategorySlider />
      <ImageSlider />
      <WhoWeAre />
      <AnimatedHeadline />
      <TestimonialSection />
      <Footer />
    </div>
  )
}

export default HomePage
