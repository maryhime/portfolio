import React from 'react'
import NavbarComponent from '../components/NavbarComponent'
import HeroSection from '../components/HeroSection'
import SideLinks from '../components/SideLinks'
import RightSideLink from '../components/RightSideLink'
import AboutPage from './AboutPage'
import ServicesPage from './ServicesPage'


const HomePage = () => {
  return (
    <>
      <NavbarComponent />
      <div className="hidden tablet:block tablet:fixed w-full top-1/4">
        <SideLinks />
        <RightSideLink />
      </div>
      <HeroSection />
      <AboutPage/>
      <ServicesPage />
     
      

    </>

  )
}

export default HomePage