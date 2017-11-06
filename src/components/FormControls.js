import React from 'react'

const formControlClass = ({
  size
}) => {
  let className = 'form-control'
  if (size) {
    className += ` form-control-${size}`
  }
  return className
}

const Input = ({
  type,
  id,
  placeholder,
  size
}) => [
  <input
    type={ type }
    id={ id }
    className={ formControlClass({ size }) }
    placeholder={ placeholder }
  />
]

export const Text = (props) => (
  <Input type='text' { ...props } />
)

export const Email = (props) => (
  <Input type='email' { ...props } />
)

export const Password = (props) => (
  <Input type='password' { ...props } />
)

export const Select = ({
  id,
  size,
  children
}) => (
  <select
    id={ id }
    className={ formControlClass({ size }) }
  >
    { children }
  </select>
)