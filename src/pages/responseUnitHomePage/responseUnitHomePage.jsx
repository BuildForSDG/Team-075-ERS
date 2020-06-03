import React from 'react';
import Card from '../../components/card/card';
import { connect } from 'react-redux';
import { getAllVictims } from '../../redux/response/response.actions';
import { showVictimsInfo } from '../../redux/modal/modal.actions';
import WithSpinner from '../../components/with-spinner/with-spinner';
import Modal from '../../components/modal/Modal';
import CustomButton from '../../components/custom-button/CustomButton';
import './response-unit-homepage.css';

class ResponseUnitHomePage extends React.Component {
  componentDidMount() {
    const { token } = this.props.user.currentUser;
    this.props.getAllVictims(token);
  }
  render(){
    // let idx;
    if (this.props.modal.showVictims ) {
      const { reports } = this.props.response.victims;
      const { index } = this.props.modal;
      return (
        <Modal>
          <div className='victim-info'>
            <p>Id: {reports[index]._id}</p>
            <br></br>
            <p>Reporter Phone No: <span></span>
              <a className='victim-tel' href={`tel:${reports[index].reporter.phoneNo}`}>{reports[index].reporter.phoneNo}</a>
            </p>
            <br></br>
            <p>Reporter userid: {reports[index].reporter.userId}</p>
            <br></br>
            <p>Latitude: {reports[index].location.latitude}</p>
            <br></br>
            <p>Longitude: {reports[index].location.longitude}</p>
            <br></br>
            <p>Latitude: {reports[index].location.latitude}</p>
            <br></br>
            <p>Status: {reports[index].response.status}</p><CustomButton>Deploy Personnel</CustomButton>
            <br></br>
            <p>Created At: {reports[index].createdAt}</p>
            <br></br>
            <p>Updated At: {reports[index].updatedAt}</p>
          </div>
        </Modal>
      );
    }
    if (this.props.response.victims.reports) {
      // console.log(this.props.response.victims);
      const { reports } = this.props.response.victims;
      return (
        <div className="ers-container">
          {
            reports.map((victim, index) => {
              console.log(victim.response.status)
              return (
              <div className="response-homepage victim-card" key={victim._id} onClick={() => this.props.showVictimsInfo(index)}>
                <Card
                  name={victim.name}
                  phoneNo={victim.phoneNo}
                  latitude={victim.location.latitude}
                  longitude={victim.location.longitude}
                  imageURL={`https://robohash.org/set_set5/${victim._id}?size=50x50`}
                  status={victim.response.status}
                />
              </div>
            )})
          }
        </div>
      );
    }

    return <WithSpinner></WithSpinner>;
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  response: state.response,
  modal: state.modal
});

const mapDispatchToProps = (dispatch) => ({
  getAllVictims: (token) => dispatch(getAllVictims(token)),
  showVictimsInfo: (index) => dispatch(showVictimsInfo(index))
});

export default connect(mapStateToProps, mapDispatchToProps)(ResponseUnitHomePage);
