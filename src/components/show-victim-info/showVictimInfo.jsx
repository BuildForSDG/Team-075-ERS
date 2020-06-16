import React, { useState } from 'react';
import CustomButton from '../custom-button/CustomButton';
import { connect } from 'react-redux';
import { toggleInput } from '../../redux/modal/modal.actions';
import { updateVictimStatus } from '../../redux/response/response.actions';


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
  // console.log(token)
  // console.log(name, phoneNo, userId, lat, lng, status, createdAt, updatedAt, id)
  // updateVictimStatus(id, userId, phoneNo, lat, lng, inputStatus, token);
  return (
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
      <p>Status: {status}</p>
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
      <br></br>
      <p>Created At: {createdAt}</p>
      <br></br>
      <p>Updated At: {updatedAt}</p>
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
