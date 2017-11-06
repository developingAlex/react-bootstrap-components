import React from 'react'

const Alert = ({
  children,
  variation = 'info'
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