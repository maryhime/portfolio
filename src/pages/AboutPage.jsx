import React, { Fragment } from 'react'
import AboutSection from '../components/AboutSection'
import WorkExperience from '../components/WorkExperience'


const AboutPage = () => {
  return (
    <Fragment>
      <div id='about'>
        <AboutSection />
        <WorkExperience />
      </div>
    

    </Fragment>
  )
}

export default AboutPage