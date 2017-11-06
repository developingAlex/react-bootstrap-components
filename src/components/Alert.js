import React from 'react'

const Alert = ({
  children,
  variation = 'dark'
}) => {
  return (
    <div
      className={ `alert alert-${variation}` }
    >
      { children }
    </div>
  )
}

export default Alert