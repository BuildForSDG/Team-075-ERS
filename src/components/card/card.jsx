import React from 'react';
import { Link } from 'react-router-dom';
import CustomButton from '../custom-button/CustomButton';
import './card.css';

const Card = ({ name, latitude,longitude, phoneNo, imageURL, status }) => (
  <div className='card-container'>
    <div className='card'>
      <img src={imageURL} alt="victim" className='img'/>
      <div className='card-info'>
        <h2 className='card-heading'>{ name }</h2>
        <span className='card-mobile'>{ phoneNo }</span>
        <div className='card-state'>
          {
            status ? 
            <>
              <div className='card-status-route'/>
              <span>route</span>
            </>
            :
            <>
              <div className='card-status-pending'/>
              <span>pending</span>
            </>
          }
        </div>
      </div>
      <Link to='/google-map'>
        <CustomButton className='custom-square-button card-btn'>{ `${latitude}, ${longitude}` }</CustomButton>
      </Link>
    </div>
  </div>
);

export default Card;
