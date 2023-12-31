import React from 'react'
import { PROJECTS } from '../../utils/projectLists'
import ChipComponent from './ChipComponent'
import PillsComponent from './PillsComponent'
import AliceCarousel from 'react-alice-carousel'

export const PorfolioCard = () => {
  return (
    <>
      <div className="hidden tablet:flex">
        <AliceCarousel stopAutoPlayOnHover disableButtonsControls autoPlayInterval={3000} activeIndex={1}
          animationType='slide' responsive={{
            0: {
              items: 1,
              itemsFit: 'contain',
            },
            1024: {
              items: 2,
              itemsFit: 'contain',
            }
          }}
        >
          {PROJECTS.map((value, index) =>

            <div key={index} className="flex flex-col gap-2 tablet:gap-48 w-full">
              <img src={value.preview} alt="" />
              <div className="flex flex-col gap-8 tablet:gap-16">
                <div className="flex flex-row gap-8">

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


            </div>


          )}
        </AliceCarousel>
      </div>

      <div className="grid grid-cols-1 tablet:hidden gap-48">
        {PROJECTS.map((value, index) =>

          <div key={index} className="flex flex-col gap-48 w-full">
            <img src={value.preview} alt="" />
            <div className="flex flex-col gap-8 tablet:gap-16">
              <div className="flex flex-row gap-8">

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
          </div>


   
      )} 
      </div>
      </>
)}

      export default PorfolioCard