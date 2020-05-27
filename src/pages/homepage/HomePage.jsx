import React from 'react';
import { connect } from 'react-redux';
import { sendHelp, helpSent, postUserDetailsStartAsync } from '../../redux/sendHelp/sendHelp.actions';
import sendReportAsync from '../../redux/report/report.actions';
import './home-page.css';
import CustomButton from '../../components/custom-button/CustomButton';
// import MessageModal from '../../components/modal/MessageModal';
// import Modal from '../../components/modal/Modal';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
  }
  componentDidMount() {
    const { sendHelp } = this.props;
    if ('geolocation' in navigator) {
      window.navigator.geolocation.getCurrentPosition((success) => {
        const lat = success.coords.latitude;
        const lng = success.coords.longitude;
        sendHelp({ lat, lng });
      });
    } else {
      alert('Location unavailable.');
    }
  }

  sendHelp = () => {
    const { lat, lng } = this.props.help.location;
    const { token, userId } = this.props.user.currentUser;
    const { helpSent, postUserDetailsStartAsync, sendReportAsync } = this.props;
    sendReportAsync(userId._id, userId.phoneNo, lat, lng, token);
    // helpSent(true);
    // this.showModal();
  };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <div className="container-home">
        <div className="homepage">
          <div className="div1">
            <h1>Have you been involved in an ACCIDENT?</h1>
            <p>
              Press the help button and help will reach you soon. If you are reporting as an eye witness please make use
              of the Eye witness button
            </p>
          </div>
          <div className="div2">
            <CustomButton className="custom-button" onClick={this.sendHelp}>
              Help me!
            </CustomButton>
            <CustomButton className="btn-witness" onClick={this.sendHelp}>
              Report as an eye witness
            </CustomButton>
          </div>
          <div className="div3">
            <img src="images/accident.svg" alt="accident vector illustration" id="accident" />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  help: state.help,
  user: state.user,
  report: state.report
});

const mapDispatchToProps = (dispatch) => ({
  sendHelp: (location) => dispatch(sendHelp(location)),
  helpSent: (value) => dispatch(helpSent(value)),
  postUserDetailsStartAsync: (lat, lng, phoneNo, userId) =>
    dispatch(postUserDetailsStartAsync(lat, lng, phoneNo, userId)),
  sendReportAsync: (userId, phoneNo, latitude, longitude, token) =>
    dispatch(sendReportAsync(userId, phoneNo, latitude, longitude, token))
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
