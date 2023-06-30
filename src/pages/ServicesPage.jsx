import React from 'react'
import HeadingsComponent from '../components/generic/HeadingsComponent'
import CardComponent from '../components/generic/CardComponent'

const ServicesPage = () => {
  return (
    <div className="flex flex-col tablet:flex-row gap-48 px-24 py-100 phone-lg:px-64 tablet:px-100 laptop:px-100 items-center laptop:py-[250px] font-inter">
      <HeadingsComponent subheading={'what i will do for you'} heading={'services i offer'} />
      
      <CardComponent heading={'UI/UX Design'} text={' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo ea possimus officia, asperiores qui accusamus mollitia sunt nesciunt, ipsum, cumque dicta. Reprehenderit, esse? Beatae sunt distinctio eius earum, quos temporibus!'} />


    </div>
  )
}

export default ServicesPage