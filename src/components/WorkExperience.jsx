import React from 'react'
import HeadingsComponent from './generic/HeadingsComponent'
import { EXPERIENCES } from '../utils/workExperiences'

const WorkExperience = () => {
  return (
    <div className="flex flex-col tablet:flex-row gap-48  py-100 px-24 phone-lg:px-64 tablet:px-100 laptop:px-200 items-center laptop:py-[250px] font-inter">
      <img className='w-full tablet:w-1/2 laptop:w-full' src="images/placeholder-img.svg" alt="" />

      <div className="flex flex-col gap-48 w-full">
        <HeadingsComponent subheading={'Experience'} heading={'Work Experiences'} />

        {EXPERIENCES.map((value, index) =>
          <div key={index} className="flex flex-col gap-16 tablet:hidden">
            <h5 className="text-phone-h5 tablet:text-tablet-h5 laptop:text-h5 uppercase text-accent-2">
              {value.name}
            </h5>
            <div className="flex flex-col gap-8">
              <h6 className="text-phone-h5 tablet:text-tablet-h5 laptop:text-h5 uppercase text-text-color">
                {value.title}
              </h6>
              <p className=" text-text-color text-phone-body tablet:text-tablet-body laptop:text-body laptop:w-full tablet:text-justify">
                {value.date}
              </p>
            </div>
            <ul className='text-text-color text-phone-body tablet:text-tablet-body laptop:text-body laptop:w-full tablet:text-justify list-outside list-disc pl-16 flex flex-col gap-8'>
              {value.description.map((item, index)=>
              <><li key={index} >{item} </li></>
              )}
              

            </ul>
          </div>

        )}



      </div>


    </div>
  )
}

export default WorkExperience