import React from 'react';
import { connect } from 'react-redux';
import { showVictimsInfo } from '../../redux/modal/modal.actions';
import ResponseUnitHomePage from '../responseUnitHomePage/responseUnitHomePage';
// import Card from '../../components/card/card';
import './admin.css';

const Admin = () => {
  // const { reports } = response.victims;
  return (
    <div>
      <h1 className="main-heading">Welcome to the Admin Panel</h1>
      <div className="card-wrap">
        <ResponseUnitHomePage />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  response: state.response
})

const mapDispatchToProps = (dispatch) => ({
  showVictimsInfo: (index) => dispatch(showVictimsInfo(index))
})

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
