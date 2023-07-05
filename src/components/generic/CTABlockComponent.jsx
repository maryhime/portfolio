import React from 'react'
import LinkComponent from './LinkComponent'
import FilledButtonComponent from './FilledButtonComponent'

const CTABlockComponent = () => {
  return (
    <div className="bg-[url('/images/CTA-bg.svg')] ] bg-no-repeat bg-cover flex flex-col tablet:flex-row font-inter py-100  px-24 phone-lg:px-64 tablet:px-50 laptop-lg:px-100 desktop:px-200  w-full items-center gap-100">
      <div className="flex flex-col gap-24 laptop:gap-24 text-text-color">
        <h3 className="text-phone-h3 tablet:text-tablet-h3 laptop:text-h3 uppercase tablet:text-left text-center ">
          Have any Project in Mind?
        </h3>
        <p className="text-text-body ">
        Lorem Ipsum DolorLorem Ipsum DolorLorem Ipsum DolorLorem Ipsum DolorLorem Ipsum DolorLorem Ipsum DolorLorem Ipsum DolorLorem Ipsum DolorLorem Ipsum DolorLorem Ipsum DolorLorem Ipsum DolorLorem Ipsum DolorLorem Ipsum DolorLorem Ipsum Dolor
        </p>
      </div>
      <div className="">
        <LinkComponent url={'#'}>
          <FilledButtonComponent text={'Contact'} width={'w-[185px]'}/>
        </LinkComponent>
      </div>
    </div>
  )
}

export default CTABlockComponent