import React from 'react'
import HeadingsComponent from '../components/generic/HeadingsComponent'
import CardComponent from '../components/generic/CardComponent'

const ServicesPage = () => {
  return (
    <div className="flex flex-col gap-48 py-100  px-24 phone-lg:px-64 tablet:px-50 laptop:px-200 laptop:py-[250px] font-inter w-full">
      <HeadingsComponent subheading={'what i will do for you'} heading={'services i offer'} />
      
      <div className="grid grid-cols-1 tablet:grid-cols-3 col-span- laptop:grid-cols-3 gap-16 laptop:gap-24">
        <CardComponent />
      </div>
      


    </div>
  )
}

export default ServicesPage