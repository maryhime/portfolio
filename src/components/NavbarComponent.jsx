import React from 'react'

const NavbarComponent = () => {
  return (
    <div className="w-screen flex flex-row phone:gap-48 phone:px-24 phone:py-24 bg-transparent items-center">
      <img src="/images/placeholder-img.svg" className='phone:h-[56px] phone:w-[125px]' alt="logo" />
      <nav className='phone:hidden'>

      </nav>
      <img src="/public/icons/" alt="" />

    </div>
  )
}

export default NavbarComponent