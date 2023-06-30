import React from 'react'
import { ICONS } from '../utils/icons'
import LinkComponent from './generic/LinkComponent'

const HeroSection = () => {
  return (
    <>
      {ICONS.map((value, index) =>
        <div key={index}  className="flex flex-col gap-48 px-24 phone-lg:px-64 tablet:px-100 laptop:px-100 items-center pt-100 laptop:pt-[250px]">

          <img className='w-full phone-lg:w-[422px] tablet:w-full laptop:h-[193px]' src="images/placeholder-img.svg" alt="" />

          <div className="flex flex-col w-fit phone:gap-16 text-text-color uppercase text-center font-inter">
            <h1 className="text-phone-h1 tablet:text-tablet-h1 laptop:text-h1 text-center ">
              Lorem Ipsum Dolor
            </h1>
            <h4 className='text-phone-h4 tablet:text-tablet-h4'>Lorem ipsum dolor</h4>
          </div>

          <div className="tablet:hidden flex flex-col gap-24">
            <div className='flex flex-row gap-24 justify-center'>
              <div className="w-[24px] h-[24px]">
                <img src={value['instagram-light']} alt="" />
              </div>
              <div className="w-[24px] h-[24px]">
                <img src={value['linkedIn-light']} alt="" />
              </div>
              <div className="w-[24px] h-[24px]">
                <img src={value['github-light']} alt="" />
              </div>
            </div>

            <div className="text-text-color text-email hover:text-accent-2 flex justify-center">
              <LinkComponent>
                caseria.therese@gmail.com
              </LinkComponent>
            </div>
          </div>

          <LinkComponent url={'#'}>
            <img src={value['arrow-down']} className='w-[70px] phone:h-[70px] tablet:h-[100px] tablet:w-[100px] animate-bounce' alt="" />
          </LinkComponent>
          



        </div>
     
  )
}
</>
  )
}

export default HeroSection