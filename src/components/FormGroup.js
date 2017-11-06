import React from 'react'

const Group = ({
  id,
  label,
  ControlComponent,
  placeholder,
  children
}) => (
  <div className='form-group'>
    <label htmlFor={ id }>{ label }</label>
    <ControlComponent id={ id } placeholder={ placeholder }>
      { children }
    </ControlComponent>
  </div>
)

export default Group