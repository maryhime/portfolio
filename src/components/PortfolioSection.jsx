import React from 'react'
import PorfolioCard from './generic/PorfolioCard'
import HeadingsComponent from './generic/HeadingsComponent'
import FilledButtonComponent from './generic/FilledButtonComponent'
import LinkComponent from './generic/LinkComponent'



const PortfolioSection = () => {
  return (
    <div className="flex flex-col gap-48  py-100 laptop:py-200 px-24 phone-lg:px-[0px] font-inter">

      <div className="flex flex-col gap-48 w-full tablet:px-50 laptop-lg:px-100 desktop:px-200  ">
        <div className="flex flex-col gap-24 tablet:flex-row tablet:justify-between items-center">
          <HeadingsComponent subheading={'Some of my recent works'} heading={'Portfolio'} />
          <LinkComponent>
            <FilledButtonComponent text={'View More'} />
          </LinkComponent>
        </div> 

      </div>
<PorfolioCard />

    </div>
  )
}

export default PortfolioSection