import React from 'react'

const Input = ({
  type,
  id,
  placeholder
}) => [
  <input
    type={ type }
    id={ id }
    className='form-control'
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
  children
}) => (
  <select
    id={ id }
    className='form-control'
  >
    { children }
  </select>
)