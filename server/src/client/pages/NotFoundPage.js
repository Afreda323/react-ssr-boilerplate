import React from 'react'

const NotFound = ({ staticContext = {} }) => {
  staticContext.NotFound = true
  return (
    <div>
      <h1>404</h1>
      <p>Page not found</p>
    </div>
  )
}

export default { component: NotFound }
