import React from 'react';
import CustomButton from '../custom-button/CustomButton';


const ShowVictimProfile = ({ id, name, phoneNo, userId, lat, lng, status, createdAt, updatedAt }) => (
  <div className='victim-info'>
    <p>Id: {id}</p>
    <br></br>
    <strong>Name: {name}</strong>
    <p>Reporter Phone No: <span></span>
      <a className='victim-tel' href={`tel:${phoneNo}`}>{phoneNo}</a>
    </p>
    <p>Reporter userid: {userId}</p>
    <br></br>
    <p>Latitude: {lat}</p>
    <p>Longitude: {lng}</p>
    <br></br>
    <p>Status: {status}</p><CustomButton>Deploy Personnel</CustomButton>
    <br></br>
    <p>Created At: {createdAt}</p>
    <br></br>
    <p>Updated At: {updatedAt}</p>
  </div>
);

export default ShowVictimProfile;
