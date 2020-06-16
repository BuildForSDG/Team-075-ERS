import React from 'react';
import Card from '../../components/card/card';
import { connect } from 'react-redux';
import { getAllVictims } from '../../redux/response/response.actions';
import { showVictimsInfo } from '../../redux/modal/modal.actions';
import WithSpinner from '../../components/with-spinner/with-spinner';
import Modal from '../../components/modal/Modal';
import './response-unit-homepage.css';
import ShowVictimProfile from '../../components/show-victim-info/showVictimInfo';

class ResponseUnitHomePage extends React.Component {

  render(){
    
    const { index } = this.props.modal;
    if (this.props.response.victims.reports) {
      const { reports } = this.props.response.victims;
      return (
        <div className="ers-container">
          {
            this.props.modal.showVictims ?
            <Modal>
              <ShowVictimProfile
                id={reports[index]._id}
                name={reports[index].reporter.userId.name}
                phoneNo={reports[index].reporter.userId.phoneNo}
                userId={reports[index].reporter.userId._id}
                lat={reports[index].location.latitude}
                lng={reports[index].location.longitude}
                status={reports[index].response.status}
                createdAt={reports[index].createdAt}
                updatedAt={reports[index].updatedAt}
              />
            </Modal> : null
          }
          {
            reports.map((victim, index) => {
              return (
                
              <div className="response-homepage victim-card" key={victim._id} onClick={() => this.props.showVictimsInfo(index)}>
                <Card
                  name={victim.reporter.userId.name}
                  phoneNo={victim.phoneNo}
                  latitude={victim.location.latitude}
                  longitude={victim.location.longitude}
                  imageURL={ `https://robohash.org/set_set5/${victim.reporter.userId.name}?size=50x50`}
                  status={victim.response.status}
                />
              </div>
            )}).reverse()
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
