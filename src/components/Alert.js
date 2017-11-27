import React from 'react'

const Alert = ({
  title,
  variation
}) => {
  return (
    <div className={`alert alert-${variation}`} role="alert">
      { title }
    </div>
  )
}

export default Alert