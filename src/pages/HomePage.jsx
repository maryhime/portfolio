import React from 'react'
import NavbarComponent from '../components/NavbarComponent'
import HeroSection from '../components/HeroSection'
import SideLinks from '../components/SideLinks'
import RightSideLink from '../components/RightSideLink'
import AboutPage from './AboutPage'
import ServicesPage from './ServicesPage'
import ToolsSection from '../components/ToolsSection'
import PortfolioSection from '../components/PortfolioSection'
import CaseStudiesSection from '../components/CaseStudiesSection'
import CTABlockComponent from '../components/generic/CTABlockComponent'


const HomePage = () => {
  return (
    <>

      <div className="hidden tablet:flex tablet:fixed w-full top-1/2 z-0 justify-between">
        <SideLinks />
        <RightSideLink />
      </div>
      <div className="relative z-auto">
        <HeroSection />
        <AboutPage />
        <ServicesPage />
        <ToolsSection />
        <PortfolioSection />
        <CaseStudiesSection />
      </div>
      <CTABlockComponent />


    </>

  )
}

export default HomePage