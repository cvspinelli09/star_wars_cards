import React from 'react';

import './card.styles.scss';


const Card = ({ name, height, img, mass, homeworld }) => {
    return (
      <div className='card-container'>  
          <div className="card-display">
            <img className="image" alt="phot" src={`${img}`} />
          </div>
          <div className="content">
            <h3 className='title'>{name.toUpperCase()}</h3>
            <p className='description'>Height: {height}</p>
            <p className='description'>Mass: {mass}</p>
            <p className='description'>Home Planet: {homeworld}</p>
          </div>
      </div>  
    );
};


export default Card;
