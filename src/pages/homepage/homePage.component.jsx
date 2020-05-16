import React from 'react';
import { connect } from 'react-redux';
import { sendHelp, helpSent, postUserDetailsStartAsync } from '../../redux/sendHelp/sendHelp.actions';

// import { signInWithFacebook, signInWithGoogle } from '../../firebase/firebase.utils';

import './homePage.styles.css';
import CustomButton from '../../components/custom-button/custom-button.component';

class HomePage extends React.Component {
  componentDidMount() {
    const { sendHelp } = this.props;
    if ('geolocation' in navigator) {
      window.navigator.geolocation.getCurrentPosition((success) => {
        const lat = success.coords.latitude;
        const lng = success.coords.longitude;
        sendHelp({ lat, lng });
      });
      console.log('Available');
    } else {
      alert('Location unavailable.');
    }
  }

  sendHelp = () => {
    const { lat, lng, phoneNo, userId } = this.props.help.location;
    const { helpSent, postUserDetailsStartAsync } = this.props;
    postUserDetailsStartAsync(lat, lng, phoneNo, userId);
    helpSent(true);
  };

  render() {
    console.log(this.props);
    return (
      <div className="homepage">
        <div className="div1">
          <h2>
            {this.props.currentUser ? (
              <img src={this.props.currentUser.photoURL} alt={`${this.props.currentUser.displayName}`}></img>
            ) : (
              <div></div>
            )}
            {this.props.currentUser ? ` Welcome, ${this.props.currentUser.displayName}` : <div></div>}
          </h2>
          <h1>Have you been involved in an ACCIDENT?</h1>
          <p>
            Press the help button and help will re ach you soon. If you are reporting as an eye witness please make use
            of the Eye witness button
          </p>
        </div>
        <div className="div2">
          <CustomButton className="custom-button" onClick={() => this.sendHelp()}>
            {' '}
            Help me!{' '}
          </CustomButton>
        </div>
        {/* <CustomButton onClick={signInWithGoogle} >Google</CustomButton> */}
        {/* <CustomButton onClick={signInWithFacebook} >Facebook</CustomButton> */}
        {/* <Link to='/report-accident'><CustomButton className='custom-button'>Report Accident</CustomButton></Link> */}
        <div className="div3">
          <img src="images/accident.svg" alt="accident vector illustration" id="accident" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  help: state.help
});

const mapDispatchToProps = (dispatch) => ({
  sendHelp: (location) => dispatch(sendHelp(location)),
  helpSent: (value) => dispatch(helpSent(value)),
  postUserDetailsStartAsync: (lat, lng, phoneNo, userId) =>
    dispatch(postUserDetailsStartAsync(lat, lng, phoneNo, userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
