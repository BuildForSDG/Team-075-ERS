import React, { useState } from 'react';
import CustomButton from '../custom-button/CustomButton';
import { connect } from 'react-redux';
import { toggleInput } from '../../redux/modal/modal.actions';
import { updateVictimStatus } from '../../redux/response/response.actions';
import './show-victim-info.css';


const ShowVictimProfile = ({ 
  id,
  name,
  phoneNo,
  userId,
  lat,
  lng,
  status,
  createdAt,
  updatedAt,
  modal,
  toggleInput,
  response,
  updateVictimStatus
}) => {

  const [ inputStatus, updateState ] = useState(null);
  const { currentUser: { token} } = response;
  return (
    <div className="victim-info">
      <p>
        Name: <br />
        <span>{name}</span>
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
      {
          modal.updateProfile ?
          <div>
            <select name="inputStatus" required className="" onChange={(event) => updateState( event.target.value )}>
              <option value=''>Select option</option>
              <option value='Response Pending'>Response Pending</option>
              <option value='en-route'>en-route</option>
              <option value='on-site'>on-site</option>
            </select>
            <CustomButton onClick={() => {
              if (!inputStatus) return;
              return (
                updateVictimStatus(id, userId, phoneNo, lat, lng, inputStatus, token), 
                toggleInput()
              );
              }}> Save </CustomButton>
          </div> 
          : <a href='#' onClick={toggleInput}>edit</a>
        }
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
}

const mapStateToProps = (state) => ({
  modal: state.modal,
  response: state.response
});

const mapDispatchToprops = (dispatch) => ({
  toggleInput: () => dispatch(toggleInput()),
  updateVictimStatus: (
    id,
    userId,
    phoneNo,
    lat,
    lng,
    status,
    token
  ) => 
  dispatch(
    updateVictimStatus (
      id,
      userId,
      phoneNo,
      lat,
      lng,
      status,
      token
    )
  )
});

export default connect(mapStateToProps, mapDispatchToprops)(ShowVictimProfile);
