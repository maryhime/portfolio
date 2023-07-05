import React from 'react'

const PillsComponent = ({text}) => {
  return (
    <div className="px-16 h-[28px] rounded-[20px] bg-[#6B2766] text-center text-[10px] font-[600] uppercase font-inter text-[#CC41C2] flex items-center justify-center">
      {text}
    </div>
  )
}

export default PillsComponent