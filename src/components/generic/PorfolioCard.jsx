import React from 'react'
import { PROJECTS } from '../../utils/projectLists'
import ChipComponent from './ChipComponent'
import PillsComponent from './PillsCOmponent'

export const PorfolioCard = () => {
  return (
    <>
      {PROJECTS.map((value, index) =>

        <div key={index} className="flex flex-col gap-24 w-full">
          <img src={value.preview} alt=""  />
          <div key={index} className="flex flex-row gap-8">

            {value.category.map((item, index) =>
              <ChipComponent key={index} text={item} />
            )}

          </div>
          <div className="flex flex-col gap-8">
            <div className="text-text-color uppercase">
              {value.title}
            </div>
            <div className="text-text-color ">
              {value.description}
            </div>
          </div>

          <div className="flex flex-row gap-8">
            {value.tags.map((item, index) =>
              <PillsComponent key={index} text={item} />
            )}

          </div>



        </div>

      )}

    </>
  )
}

export default PorfolioCard