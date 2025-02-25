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
import AppointmentScheduling from './pages/Services/AppointmentScheduling'
import CommunicationTools from './pages/Services/CommunicationTools'
import CRMTools from './pages/Services/CRMTools'
import IndustryFeatures from './pages/Services/IndustryFeatures'
import Integrations from './pages/Services/Integrations'
import LeadGeneration from './pages/Services/LeadGeneration'
import LeadNurturing from './pages/Services/LeadNurturing'
import MarketingAutomation from './pages/Services/MarketingAutomation'
import OnboardingSupport from './pages/Services/OnboardingSupport'
import PaymentProcessing from './pages/Services/PaymentProcessing'
import ReportingAnalytics from './pages/Services/ReportingAnalytics'
import WhiteLabelingBranding from './pages/Services/WhiteLabelingBranding'

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
            <Route
              path='/services/lead-generation'
              element={<LeadGeneration />}
            />
            <Route
              path='/services/lead-nurturing'
              element={<LeadNurturing />}
            />
            <Route
              path='/services/appointment-scheduling'
              element={<AppointmentScheduling />}
            />
            <Route
              path='/services/marketing-automation'
              element={<MarketingAutomation />}
            />
            <Route path='/services/crm-tools' element={<CRMTools />} />
            <Route
              path='/services/payment-processing'
              element={<PaymentProcessing />}
            />
            <Route
              path='/services/communication-tools'
              element={<CommunicationTools />}
            />
            <Route
              path='/services/reporting-analytics'
              element={<ReportingAnalytics />}
            />
            <Route
              path='/services/industry-features'
              element={<IndustryFeatures />}
            />
            <Route
              path='/services/white-labeling'
              element={<WhiteLabelingBranding />}
            />
            <Route path='/services/integrations' element={<Integrations />} />
            <Route
              path='/services/onboarding-support'
              element={<OnboardingSupport />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
