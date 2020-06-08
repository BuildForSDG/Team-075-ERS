import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { showVictimsInfo } from '../../redux/modal/modal.actions';
import CustomButton from '../custom-button/CustomButton';
import './card.css';

const Card = ({ name, latitude,longitude, phoneNo, imageURL, status, index, key, showVictimsInfo }) => (
  <div className='card-container' >
    <div className='card'>
      <img src={imageURL} alt="victim" className='img'/>
      <div className='card-info'>
        <h2 className='card-heading'>{ name }</h2>
        <span className='card-mobile'>{ phoneNo }</span>
        <div className='card-state'>
          {
            status === 'accepted and en-route' ? 
            <>
              <div className='card-status-route'/>
              <span>accepted and en-route</span>
            </>
            :
            <>
              <div className='card-status-pending'/>
              <span>pending</span>
            </>
          }
        </div>
      </div>
      <Link to='/dashboard/report-units'>
        <CustomButton 
          className='custom-square-button card-btn'
          onClick={showVictimsInfo}
        >
          { `${latitude}, ${longitude}` }
        </CustomButton>
      </Link>
    </div>
  </div>
);


const mapDispatchToProps = (dispatch) => ({
  showVictimsInfo: () => dispatch(showVictimsInfo())
});

export default connect(null, mapDispatchToProps)(Card);
