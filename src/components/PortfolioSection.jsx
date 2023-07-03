import React from 'react'
import PorfolioCard from './generic/PorfolioCard'
import HeadingsComponent from './generic/HeadingsComponent'
import FilledButtonComponent from './generic/FilledButtonComponent'
import LinkComponent from './generic/LinkComponent'


const PortfolioSection = () => {
  return (
    <div className="flex flex-col-reverse tablet:flex-row gap-48  py-100  px-24 phone-lg:px-64 tablet:px-[0px]   laptop:py-200  items-center font-inter">

      <div className="flex flex-col gap-48 w-full">
        <div className="flex flex-col gap-24 tablet:flex-row tablet:justify-between items-center laptop-lg:px-100 desktop:px-200">
          <HeadingsComponent subheading={'Some of my recent works'} heading={'Portfolio'} />
          <LinkComponent>
            <FilledButtonComponent text={'View More'} />
          </LinkComponent>
        </div>



        {/* <div className="grid grid-cols-1 tablet:grid-cols-4 gap-48 tablet:gap-24 w-full">
          <PorfolioCard />
        </div> */}



      </div>


    </div>
  )
}

export default PortfolioSection