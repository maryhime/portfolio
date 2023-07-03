import React from 'react'
import NavbarComponent from '../components/NavbarComponent'
import HeroSection from '../components/HeroSection'
import SideLinks from '../components/SideLinks'
import RightSideLink from '../components/RightSideLink'
import AboutPage from './AboutPage'
import ServicesPage from './ServicesPage'
import ToolsSection from '../components/ToolsSection'
import PortfolioSection from '../components/PortfolioSection'


const HomePage = () => {
  return (
    <>
      <NavbarComponent />
      <div className="hidden tablet:block tablet:fixed w-full top-1/4 z-0">
        <SideLinks />
        <RightSideLink />
      </div>
      <div className="relative z-auto">
        <HeroSection />
        <AboutPage />
        <ServicesPage />
        <ToolsSection />
        <PortfolioSection />
      </div>



    </>

  )
}

export default HomePage