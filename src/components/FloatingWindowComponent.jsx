import React, { useState } from 'react'
import LinkComponent from './generic/LinkComponent'
import FilledButtonComponent from './generic/FilledButtonComponent'
import { ICONS } from '../utils/icons'

const FloatingWindowComponent = () => {
  const [close, setClose] = useState(true);
  
  return (
    <div className='hidden laptop:block fixed w-fit left-[84%] top-80 z-20'>
      {ICONS.map((value, index) =>
      <button onClick={() => setClose(false)} key={index} className='absolute -top-3 left-[285px] z-20'>
         <img  src={value['close-circle']} alt="close"  />
      </button>
       
      )}
      {
      close ? (<div className="sticky top-0 left-full z-10 card backdrop-blur-[25px] font-inter text-text-color px-24 py-24 rounded-card flex flex-col w-[315px] gap-24">
        <div className="flex flex-row gap-16 items-center">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="10" cy="10" r="10" fill="#71C264" />
          </svg>
          <div className="text-text-color uppercase tablet:text-phone-h6 laptop:text-h5 laptop:text-[20px]">
            Available for new projects
          </div>


        </div>
        <LinkComponent><FilledButtonComponent text={'Hire Me'} hidden={false} /></LinkComponent>

      </div>) : <></> }
    </div>

  )
}

export default FloatingWindowComponent