import React from 'react'
import { STUDIES } from '../../utils/caseStudies'
import PillsComponent from './PillsComponent'
import OutlinedButtonComponent from './OutlinedButtonComponent'
import LinkComponent from './LinkComponent'

const CaseStudyCardComponent = () => {
  return (
    <>
      {STUDIES.slice(0, 2).map((value, index) =>
        <div key={index} className={`flex flex-col gap-48 ${value.isFlip ? 'tablet:flex-row-reverse' : 'tablet:flex-row'} gap-48 items-center`}>
          <img src={value.thumbnail} alt={value.title} className='w-full min-h-full' />
          <div className="w-full flex flex-col gap-24">
            <div className="text-text-color">
              <h3 className='uppercase text-phone-h3 laptop:text-h3'>
                {value.title}
              </h3>
              <p className='text-phone-body tablet:text-tablet-bodys laptop:text-body'>
                {value.description}
              </p>
            </div>
            <div className="flex flex-row gap-8">
              {value.tags.map((tags, index) =>
                <PillsComponent key={index} text={tags} />
              )}
            </div>
            <LinkComponent url={value.link}>
              <OutlinedButtonComponent text={'Read More'} width={'w-[180px]'} />
            </LinkComponent>

          </div>



        </div>
      )}

    </>

  )
}

export default CaseStudyCardComponent