import React from 'react'
import LinkComponent from './generic/LinkComponent'

const RightSideLink = () => {
  return (
    <div className="flex flex-col w-fit justify-end sticky top-0 left-full pr-16 laptop:pr-64">

      <ul className='line-right flex flex-col gap-24 items-center'>
        <li className="text-text-color rotate-90 text-email hover:text-accent-2 w-[15px]">
          <LinkComponent>
            caseria.therese@gmail.com
          </LinkComponent>
        </li>


      </ul>


    </div>
  )
}

export default RightSideLink