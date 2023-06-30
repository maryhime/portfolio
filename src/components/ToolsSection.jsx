import React from 'react'
import ToolsCardComponent from './generic/ToolsCardComponent'

const ToolsSection = () => {
  return (
    <div className="flex flex-col gap-48 py-100  px-24 phone-lg:px-64 tablet:px-50 laptop-lg:px-100 desktop:px-200  laptop:py-200 font-inter w-full ">
      <div className="grid grid-cols-1 tablet:grid-cols-2 gap-24">
        <ToolsCardComponent />
      </div>

    </div>
  )
}

export default ToolsSection