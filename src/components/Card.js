import React from 'react'
import Button from './Button'

const Card = ({
    width,
    imageURL,
    imageAlt,
    title,
    body,
    buttonWords,
    buttonVariation,
    buttonURL
}) => {
  return (
    <div className="card" style={{width: width}}>
      <img className="card-img-top" src={ imageURL } alt={ imageAlt } />
      <div className="card-body">
        <h4 className="card-title">{ title }</h4>
        <p className="card-text">{ body }</p>
        <Button 
        title={buttonWords}
        variation={buttonVariation}
        href={buttonURL}
        />
      </div>
    </div>
  )
}

export default Card