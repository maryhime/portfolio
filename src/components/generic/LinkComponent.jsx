import React from 'react'

const LinkComponent = ({children, url}) => {
  return (
    <a href={`${url}`}> {children}</a>
  )
}

export default LinkComponent