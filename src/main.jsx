import React, { Fragment } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { PAGES } from './routes'
import FloatingWindowComponent from './components/FloatingWindowComponent'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FloatingWindowComponent/>
    <div className="bg-[url('/images/background.svg')] ] bg-no-repeat bg-cover h-screen w-screen overflow-x-hidden">
      {PAGES.map((value, index) =>
        <Fragment key={index} >
          {value.component}
        </Fragment>

      )}




    </div>
  </React.StrictMode>,
)
