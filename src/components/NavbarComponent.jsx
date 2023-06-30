import React from 'react'
import { ICONS } from '../utils/icons'
import FilledButtonComponent from './generic/FilledButtonComponent';
import LinkComponent from './generic/LinkComponent';

const NAVIGATIONS = ['Home', 'About', 'Services', 'Portfolio'];

const NavbarComponent = () => {
  return (
    <div className="w-screen flex flex-row gap-48 px-24 py-24 phone-lg:px-64 tablet:px-100 bg-transparent items-center font-inter ">
      <img src="/images/placeholder-img.svg" className='h-[56px] phone:w-[125px]' alt="logo" />
      <nav className='hidden tablet:flex phone-lg:w-full justify-end items-center gap-48'>
        <ul className='text-text-color flex flex-row gap-16 uppercase text-primary text-navbar font-headings justify-end font-[700] font-inter text-[18px]  '>
          {NAVIGATIONS.map((value, index) =>
            <LinkComponent key={index}>
              <li className='active:text-accent-2 hover:text-accent-2' >{value}</li>
            </LinkComponent>
          )}
        </ul>

        <LinkComponent>
          <FilledButtonComponent text={'Resume'} />
        </LinkComponent>

      </nav>

      <div className="flex w-full justify-end  tablet:hidden laptop:hidden">
        {ICONS.map((value, index) =>
          <img className=' laptop:w-full' key={index} src={value.menu} alt="" />
        )}
      </div>



    </div>

  )
}

export default NavbarComponent