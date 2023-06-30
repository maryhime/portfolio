import React from 'react'
import { SERVICES } from '../../utils/services'

const CardComponent = () => {
  return (
    <>
      {SERVICES.map((value, index) =>
        <div key={index} className="card backdrop-blur-[25px] font-inter text-text-color px-24 laptop:px-48 py-48 rounded-card laptop:h-[650px] flex items-center w-full">

          <div className="flex flex-col gap-16 tablet:gap-24 items-center w-full" >
            <img className='w-[75px] h-[75px] laptop:w-[100px] laptop:h-[100px]' src={value.icon} alt="" />
            <div className=" flex flex-col gap-16  tablet:gap-24 font-inter text-text-color">
              <h3 className='uppercase text-phone-h3 tablet:text-tablet-h3 laptop:text-h3 text-center'>
                {value.title}
              </h3>
              <p className=" text-text-color text-phone-body laptop:w-full tablet:text-tablet-body laptop:text-body">
                {value.description}
              </p>
            </div>
          </div>



        </div>
      )}
    </>


  )
}

export default CardComponent