import React from 'react'

const Alert = ({
  children,
  variation = 'info'
}) => (
  <div
    className={ `alert alert-${variation}` }
    role='alert'
  >
    { children }
  </div>
)

export default Alert