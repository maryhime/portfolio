import React, { Fragment } from 'react'
import { ICONS } from '../../utils/icons'

const FilledButtonComponent = ({text, hidden=true}) => {
  return (
    <div className="flex flex-row bg-accent-1 px-20 rounded-button laptop:h-button phone:h-button-m items-center text-text-color uppercase w-[156px] justify-center gap-8 phone:text-btn-m laptop:text-btn-lg hover:bg-accent-2">
      {
      hidden ?  <div>
      {text}
    </div> : (<Fragment>
      <div>
        {text}
      </div>
      {ICONS.map((value, index) => (
        <img key={index} src={`${value.message}`} className='phone:w-[20px] phone:h-[20px]' alt="" />
      ))}
    </Fragment>)
     }
    </div>

   
  )
}

export default FilledButtonComponent