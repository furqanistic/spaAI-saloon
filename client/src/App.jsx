import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AboutPage from './pages/About/AboutPage'
import ContactPage from './pages/Contact/ContactPage'
import DemoPage from './pages/Contact/DemoPage'
import HomePage from './pages/Home/HomePage'
import PrivacyPolicy from './pages/Others/PrivacyPolicy'
import TermsConditions from './pages/Others/TermsConditions'
import PricingPage from './pages/Pricing/PricingPage'
import ResourcePage from './pages/Resource/ResourcePage'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={<HomePage />} />
            <Route path='/pricing' element={<PricingPage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/contact' element={<ContactPage />} />
            <Route path='/resource' element={<ResourcePage />} />
            <Route path='/demo' element={<DemoPage />} />
            <Route path='/privacy-policy' element={<PrivacyPolicy />} />
            <Route path='/terms' element={<TermsConditions />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
