import React from 'react'
import HeadingsComponent from './generic/HeadingsComponent'
import LinkComponent from './generic/LinkComponent'
import FilledButtonComponent from './generic/FilledButtonComponent'
import CaseStudyCardComponent from './generic/CaseStudyCardComponent'

const CaseStudiesSection = () => {
  return (
    <div className="flex flex-col gap-48 py-100  px-24 phone-lg:px-64 tablet:px-50 laptop-lg:px-100 desktop:px-200  laptop:py-200 font-inter w-full">
      <div className="flex flex-col gap-48 w-full ">
        <div className="flex flex-col gap-24 tablet:flex-row tablet:justify-between items-center">
          <HeadingsComponent subheading={'Some of my recent works'} heading={'UX Case Studies'} />
          <LinkComponent>
            <FilledButtonComponent text={'View More'} />
          </LinkComponent>
        </div>
      </div>

      <div className="flex flex-col gap-64">
        <CaseStudyCardComponent />
      </div>

    </div>
  )
}

export default CaseStudiesSection