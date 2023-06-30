import React from 'react'
import NavbarComponent from '../components/NavbarComponent'
import HeroSection from '../components/HeroSection'
import SideLinks from '../components/SideLinks'
import RightSideLink from '../components/RightSideLink'
import AboutPage from './AboutPage'

const HomePage = () => {
  return (
    <>
      <NavbarComponent />
      <div className="phone:hidden tablet:block tablet:fixed w-full top-1/4">
        <SideLinks />
        <RightSideLink />
      </div>
      <HeroSection />
      <AboutPage/>

    </>

  )
}

export default HomePage