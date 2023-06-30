import React from 'react'
import { ICONS } from '../../utils/icons'

const CardComponent = ({ heading, text }) => {
  return (
    <div className="bg-gradient-to-b from-[#ffffff4f] to-[#fff0] backdrop-blur-[50px] font-inter text-text-color px-48 py-24 rounded-card outline outline-[#be0c890a]">
      {ICONS.map((value, index) =>
        <div className="flex flex-col gap-16 justify-center w-full" key={index}>
          <img className='w-[75px] h-[75px]' src={value.layers} alt="" />
          <div className=" font-inter text-text-color">
            <h3 className='uppercase text-phone-h3 tablet:text-tablet-h3 laptop:text-h3'>
              {heading}
            </h3>
            <p className=" text-text-color text-phone-body break-after-all laptop:w-full tablet tablet:text-justify">
              {text}
            </p>
          </div>
        </div>


      )}
    </div>

  )
}

export default CardComponent