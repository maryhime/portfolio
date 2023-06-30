import React from 'react'

const HeadingsComponent = ({subheading, heading}) => {
  return (
    <div className="flex flex-col font-inter uppercase text-center phone-lg:text-left">
      <h4 className='laptop:text-subheading tablet:text-tablet-subhead text-phone-subhead text-text-color'>
        {subheading}
      </h4>
      <h2 className='text-phone-h2 tablet:text-tablet-h2 laptop:text-h2 text-accent-2'>
        {heading}
      </h2>


    </div>
  )
}

export default HeadingsComponent