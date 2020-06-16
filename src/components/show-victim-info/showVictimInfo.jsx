import React from 'react';
import CustomButton from '../custom-button/CustomButton';
import './show-victim-info.css';

const ShowVictimProfile = ({ id, name, phoneNo, userId, lat, lng, status, createdAt, updatedAt }) => (
  <div className="victim-info">
    <p>
      Name: <span>{name}</span>
    </p>
    <p>
      Id: <span>{id}</span>{' '}
    </p>
    <p>
      Reporter Phone No:{' '}
      <span>
        <a className="victim-tel" href={`tel:${phoneNo}`}>
          {phoneNo}
        </a>
      </span>
    </p>
    <p>
      Reporter userid: <span>{userId}</span>{' '}
    </p>
    <p>
      Latitude: <span>{lat}</span>{' '}
    </p>
    <p>
      Longitude: <span>{lng}</span>{' '}
    </p>
    <p>
      Status: <span>{status}</span>{' '}
    </p>

    <p>
      Created At: <span>{createdAt}</span>
    </p>
    <p>
      Updated At: <span>{updatedAt}</span>{' '}
    </p>
    <CustomButton id="deploy-button">Deploy Personnel</CustomButton>
  </div>
);

export default ShowVictimProfile;
