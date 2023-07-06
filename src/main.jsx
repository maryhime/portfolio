import React, { Fragment } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { PAGES } from './routes'
import FloatingWindowComponent from './components/FloatingWindowComponent'
import NavbarComponent from './components/NavbarComponent'
import FooterComponent from './components/FooterComponent'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="bg-[url('/images/background.svg')] ] bg-no-repeat bg-cover h-screen w-screen overflow-x-hidden">
      <NavbarComponent />
      <FloatingWindowComponent/>
      {PAGES.map((value, index) =>
        <Fragment key={index} >
          {value.component}
        </Fragment>
      )}
      <FooterComponent/>




    </div>
  </React.StrictMode>,
)
