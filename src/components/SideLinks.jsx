import React from 'react'
import { ICONS } from '../utils/icons'

const SideLinks = () => {
  return (
    
      <div className="flex flex-col w-fit justify-end sticky top-full pl-16 laptop:pl-64">
        {ICONS.map((value, index) =>
          <ul key={index} className='line flex flex-col gap-24 items-center'>
            <li className="w-[24px] h-[24px] laptop:w-[32px] laptop:h-[32px]">
              <img src={value['instagram-light']} alt="" />
            </li>
            <li className="w-[24px] h-[24px] laptop:w-[32px] laptop:h-[32px]">
              <img src={value['linkedIn-light']} alt="" />
            </li>
            <li className="w-[24px] h-[24px] laptop:w-[32px] laptop:h-[32px]">
              <img src={value['github-light']} alt="" />
            </li>
          </ul>
        )}

      </div>

 

  )
}

export default SideLinks