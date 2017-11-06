import React from 'react'

const Card = ({
  children,
  mb = 0,
  textVariation = 'dark',
  backgroundVariation = 'light',
  header,
  imageTop,
  imageBottom
}) => (
  <div
    className={
      `card text-${textVariation} bg-${backgroundVariation} mb-${ mb }`
    }
  >
    { imageTop }
    { header &&
      <div className='card-header'>
        { header }
      </div>
    }
    <div className='card-body'>
      { children }
    </div>
    { imageBottom }
  </div>
)

export default Card
