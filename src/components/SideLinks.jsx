import React from 'react'
import { ICONS } from '../utils/icons'
import LinkComponent from './generic/LinkComponent'

const SideLinks = () => {
  return (
    <div className="phone:hidden tablet:flex flex-row justify-between w-screen items-end px-64 sticky">
      <div className="flex flex-col justify-start">
        {ICONS.map((value, index) =>
          <ul key={index} className='line flex flex-col gap-24'>
            <li className="w-[32px] h-[32px]">
              <img src={value['instagram-light']} alt="" />
            </li>
            <li className="w-[32px] h-[32px]">
              <img src={value['linkedIn-light']} alt="" />
            </li>
            <li className="w-[32px] h-[32px]">
              <img src={value['github-light']} alt="" />
            </li>
          </ul>
        )}

      </div>

      <div className="flex flex-col w-fit justify-end">

        <ul className='line-right flex flex-col gap-24 items-center'>
          <li className="text-text-color rotate-90 text-email hover:text-accent-2 w-[15px]">
            <LinkComponent>
              caseria.therese@gmail.com
            </LinkComponent>
          </li>


        </ul>


      </div>

    </div>
  )
}

export default SideLinks