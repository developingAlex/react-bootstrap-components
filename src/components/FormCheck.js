import React from 'react'

const Check = ({
  id,
  label
}) => (
  <div className='form-check'>
    <label htmlFor={ id } className='form-check-label'>
      <input type='checkbox' className='form-check-input' />
      {' '}
      { label }
    </label>
  </div>
)

export default Check
