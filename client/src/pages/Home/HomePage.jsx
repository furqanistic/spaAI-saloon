import AnimatedHeadline from '../../components/Home/AnimatedHeadline'
import BrandShowcase from '../../components/Home/BrandShowcase'
import CategorySlider from '../../components/Home/CategorySlider'
import FeatureSection from '../../components/Home/FeatureSection'
import FeaturesShowcase from '../../components/Home/FeaturesShowcase'
import HeroSection from '../../components/Home/HeroSection'
import ImageSlider from '../../components/Home/ImageSlider'
import PosSystem from '../../components/Home/PosSystem'
import RadiantFeatures from '../../components/Home/RadiantFeatures'
import TestimonialSection from '../../components/Home/TestimonialSection'
import WhoWeAre from '../../components/Home/WhoWeAre'
import Footer from '../../components/Layout/Footer'
import Navbar from '../../components/Layout/Navbar'

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ImageSlider />
      <WhoWeAre />
      <RadiantFeatures />

      <CategorySlider />
      <FeaturesShowcase />
      <FeatureSection />
      {/* <PosSystem /> */}
      <AnimatedHeadline />
      <TestimonialSection />
      <Footer />
    </div>
  )
}

export default HomePage
