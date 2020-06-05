import React from 'react';
import { connect } from 'react-redux';
import { sendHelp  } from '../../redux/sendHelp/sendHelp.actions';
import { showFeedbackSuccess, promptLogIn, eyeWitness } from '../../redux/modal/modal.actions';
import  { sendReportAsync }  from '../../redux/report/report.actions';
import './home-page.css';
import CustomButton from '../../components/custom-button/CustomButton';
import MessageModal from '../../components/modal/MessageModal';
import Modal from '../../components/modal/Modal';
import ModalLogin from '../../components/modalLogin/modal-login';
// import { toast } from 'react-toastify';
import Toast from '../../components/toast/toast';
import WithSpinner from '../../components/with-spinner/with-spinner';
import ReportAccident from '../../pages/reportAccidentPage/ReportAccident';
import { Link } from 'react-router-dom';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      show: false,
      status: 'Report sent' 
    };
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
    if (this.props.user.currentUser){
      const { lat, lng } = this.props.help.location;
      const { token, userId } = this.props.user.currentUser;
      const { sendReportAsync } = this.props;
      sendReportAsync(userId._id, userId.phoneNo, lat, lng, token);
      // toast.error(this.state.status)
    }
    if (this.props.report.isPending) {
      this.props.showFeedbackSuccess();
    }

    if (!this.props.user.currentUser) {
      this.props.promptLogIn();
      // alert('Please, login to continue.');
    }
  };


  render() {
    const { showFeedback, showVictims, eyeWitness, promptLogIn } = this.props.modal;
    const { isPending, errorMessage, reportMessage } = this.props.report;
    if (!this.props.user.currentUser && promptLogIn) {
      return (
        <ModalLogin></ModalLogin>
      );
    }
    
    if (errorMessage || reportMessage === 401) {
      return (
        <Modal>
          <h1>Error!</h1>
        </Modal>
      );
    }
    
    if (showFeedback) {
      return (
        <Modal>
          <MessageModal />
        </Modal>
      );
    }
    
    if (showVictims) {
      return (
        <Modal>
          <h1>Victim</h1>
        </Modal>
      );
    }

    if (eyeWitness) {
      return (
        <Modal>
          <ReportAccident />
        </Modal>
      );
    }
      
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

            {
              isPending ? <WithSpinner></WithSpinner> : null
            }

            {
              reportMessage === 200 ? <Toast></Toast> : null
            }
            
            <div className="div2">
              <CustomButton className="custom-button" onClick={() => {
                return this.sendHelp();
                }}>
                Help me!
              </CustomButton>
              
              <Link to='/report-accident' className="btn-witness" >
                Report as an eye witness
              </Link>
              
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
  report: state.report,
  modal: state.modal
});

const mapDispatchToProps = (dispatch) => ({
  sendHelp: (location) => dispatch(sendHelp(location)),
  sendReportAsync: (userId, phoneNo, latitude, longitude, token) =>
    dispatch(sendReportAsync(userId, phoneNo, latitude, longitude, token)),
  showFeedbackSuccess: () => dispatch(showFeedbackSuccess()),
  promptLogIn: () => dispatch(promptLogIn()),
  eyeWitness: () => dispatch(eyeWitness())
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
