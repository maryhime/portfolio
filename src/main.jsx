import React, { Fragment } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { PAGES } from './routes'
import SideLinks from './components/SideLinks'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="bg-[url('/images/background.svg')] ] bg-no-repeat bg-cover h-screen w-screen">
      {PAGES.map((value, index) =>
      <Fragment key={index} >
        {value.component}
      </Fragment>
  
      )}
      <SideLinks />
    </div>
  </React.StrictMode>,
)
