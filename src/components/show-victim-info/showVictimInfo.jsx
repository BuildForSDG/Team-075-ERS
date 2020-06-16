import React from 'react';
import CustomButton from '../custom-button/CustomButton';
import './show-victim-info.css';

const ShowVictimProfile = ({ id, name, phoneNo, userId, lat, lng, status, createdAt, updatedAt }) => (
  <div className="victim-info">
    <p>
      Name: <br />
      <span>{name}</span>
    </p>
    <p>
      Id: <br />
      <span>{id}</span>{' '}
    </p>
    <p>
      Reporter Phone No: <br />
      <span>
        <a className="victim-tel" href={`tel:${phoneNo}`}>
          {phoneNo}
        </a>
      </span>
    </p>
    <p>
      Reporter userid: <br />
      <span>{userId}</span>{' '}
    </p>
    <p>
      Latitude: <br />
      <span>{lat}</span>{' '}
    </p>
    <p>
      Longitude: <br />
      <span>{lng}</span>{' '}
    </p>
    <p>
      Status: <br />
      <span>{status}</span>{' '}
    </p>

    <p>
      Created At: <br />
      <span>{createdAt}</span>
    </p>
    <p>
      Updated At: <br />
      <span>{updatedAt}</span>{' '}
    </p>
    <CustomButton id="deploy-button">Deploy Personnel</CustomButton>
  </div>
);

export default ShowVictimProfile;
