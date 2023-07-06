import React from 'react'
import { NAVIGATIONS } from './NavbarComponent'
import { ICONS } from '../utils/icons'

const FooterComponent = () => {
  return (
    <div className="py-24 px-24 phone-lg:px-64 tablet:px-50 laptop:py-48 laptop:px-200 bg-background flex flex-col items-center tablet:items-center tablet:flex-row gap-24 tablet:gap-48 w-full font-inter">
      <img src="images/logo.svg" className='w-[240px]' alt="logo" />

      <div className="flex phone-lg:w-full tablet:justify-end justify-center items-center gap-48">
        {NAVIGATIONS.slice(0,3).map((value, index) =>
          <ul key={index} className='text-text-color flex flex-row tablet:gap-16 uppercase text-primary text-navbar font-headings justify-center font-[700] font-inter phone-lg:text-[16px] tablet:text-[18px] '>
            <li>{value}</li>
          </ul>
        )}
      </div>
      <div className="flex flex-col  gap-16 w-full tablet:w-1/3 items-center tablet:items-end">

        {ICONS.map((value, index) =>
          <div key={index} className="flex flex-row gap-8">
            <img src={value.instagram} alt="" />
            <img src={value['github-light']} alt="" />
            <img src={value['linked-in']} alt="" />
          </div>
        )}

        <div className="bg-text-color h-[1px] w-full tablet:hidden"></div>

        <div className="text-text-color text-[12px] phone-lg:text-[14px] ">
          Copyright © 2023. All Rights Reserved
        </div>



      </div>

    </div>
  )
}

export default FooterComponent