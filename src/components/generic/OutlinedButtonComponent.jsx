import React from 'react'

const OutlinedButtonComponent = ({ text, width }) => {
  return (
    <div className={`flex flex-row bg-none border-[1px] border-text-color px-20 rounded-button laptop:h-button phone:h-button-m items-center text-text-color uppercase  justify-center gap-8 phone:text-btn-m laptop:text-btn-lg hover:bg-accent-2 hover:border-accent-2 ${width}`}>

   <div>
      {text}
  </div>
    </div>

  )
}

export default OutlinedButtonComponent