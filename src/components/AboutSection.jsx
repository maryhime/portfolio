import React from 'react'
import HeadingsComponent from './generic/HeadingsComponent'

const AboutSection = () => {
  return (
    <div className="flex flex-col tablet:flex-row gap-48 px-24 py-100 phone-lg:px-64 tablet:px-100 laptop:px-100 items-center pt-100 laptop:py-[250px] font-inter ">

      <img className='w-full tablet:w-1/2 laptop:w-full' src="images/placeholder-img.svg" alt="" />

      <div className="flex flex-col gap-24 laptop:gap-48 w-full">
        <div className="flex flex-col gap-24 laptop:gap-16">
          <HeadingsComponent subheading={'Let me introduce myself'} heading={'About Me'} />
          <p className=" text-text-color text-phone-body break-after-all laptop:w-full tablet tablet:text-justify">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo ea possimus officia, asperiores qui accusamus mollitia sunt nesciunt, ipsum, cumque dicta. Reprehenderit, esse? Beatae sunt distinctio eius earum, quos temporibus!
          </p>
        </div>

        <div className="flex flex-col gap-16">
          <h5 className="text-phone-h5 tablet:text-tablet-h5 laptop:text-h5 uppercase text-text-color ">
            Versatile
          </h5>
          <p className=" text-text-color text-phone-body tablet:text-tablet-body laptop:text-body laptop:w-full tablet:text-justify">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo ea possimus officia, asperiores qui accusamus mollitia sunt nesciunt, ipsum, cumque dicta. Reprehenderit, esse? Beatae sunt distinctio eius earum, quos temporibus!
          </p>
        </div>
        <div className="flex flex-col gap-16">
          <h5 className="text-phone-h5 tablet:text-tablet-h5 laptop:text-h5 uppercase text-text-color ">
            Versatile
          </h5>
          <p className=" text-text-color text-phone-body tablet:text-tablet-body laptop:text-body laptop:w-full tablet:text-justify">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo ea possimus officia, asperiores qui accusamus mollitia sunt nesciunt, ipsum, cumque dicta. Reprehenderit, esse? Beatae sunt distinctio eius earum, quos temporibus!
          </p>
        </div>

      </div>

    </div>
  )
}

export default AboutSection