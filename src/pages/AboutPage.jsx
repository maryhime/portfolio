import React, { Fragment, useEffect } from 'react'
import AboutSection from '../components/AboutSection'
import WorkExperience from '../components/WorkExperience'
import { fetchAbout } from '../utils/apisauce'


const AboutPage = () => {

  const fetchAll = async () => {
    const result = await fetchAbout();

    console.log('resuot2', result);

  }

  useEffect(() => {
    fetchAll();
  }, [])


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