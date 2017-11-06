import React from 'react'

const Button = ({
  title,
  variation = 'dark',
  href,
  submit = false
}) => {
  const Component = (href != null) ? 'a' : 'button'
  return (
    <Component
      type={ submit ? 'submit' : null }
      href={ href }
      className={ `btn btn-${variation}` }
    >
      { title }
    </Component>
  )
}

export default Button