import React from 'react'

const Group = ({
  id,
  label,
  size,
  ControlComponent,
  placeholder,
  children
}) => (
  <div className='form-group'>
    <label htmlFor={ id }>{ label }</label>
    <ControlComponent id={ id } size={ size } placeholder={ placeholder }>
      { children }
    </ControlComponent>
  </div>
)

export default Group