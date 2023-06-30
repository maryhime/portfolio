import React from 'react'
import { TOOLS } from '../../utils/icons'

const ToolsCardComponent = () => {
  return (
    <>
      {TOOLS.map((value, index) =>
        <div key={index} className="card backdrop-blur-[25px] font-inter text-text-color px-24 laptop:px-48 py-48 rounded-card laptop:h-[650px] flex items-center w-full ">
          <div className="flex flex-col gap-24 laptop:gap-48 w-full items-center" >
            <h3 className='uppercase text-phone-h3 tablet:text-tablet-h3 laptop:text-h3 text-center'>
              {value.title}
            </h3>
            <div className={`grid ${value.column} gap-16 laptop:gap-48 justify-center  w-fit`}>

              {value.icons.map((icon, index) =>

                <img key={index} src={`icons/${icon}`} alt="" className='w-[75px] h-[75px]  laptop:w-[120px] laptop:h-[120px]' />

              )}
            </div>
          </div>




        </div>
      )}

    </>

  )
}

export default ToolsCardComponent