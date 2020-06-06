import React from 'react';
import './modal.css';
import CustomButton from '../custom-button/CustomButton';
import { connect } from 'react-redux';
import { showFeedbackSuccess, showUserProfile, showVictimsInfo, eyeWitness, promptLogIn } from '../../redux/modal/modal.actions';
import { resetError } from '../../redux/report/report.actions';

class Modal extends React.Component {

  render() {
    const { showFeedback, showProfile, showVictims, eyeWitness, promptLogIn} = this.props.modal;
    const showHideClassName = (
      showFeedback 
      || showProfile 
      || showVictims
      || promptLogIn
      || eyeWitness
      ) ? 'modal display-block' : 'modal display-none';
  
    return (
      <div className={`${showHideClassName}`} >
        <section className="modal-main" >
          {this.props.children}
          <CustomButton className="btn-close" onClick={() => {
            if (showFeedback){
              return (this.props.showFeedbackSuccess(), this.props.resetError());
            }
            if ( showProfile) {
              return this.props.showUserProfile();
            }
            if (showVictims) {
              return this.props.showVictimsInfo();
            }
            if (promptLogIn) {
              return this.props.promptLogIn();
            }
            if (eyeWitness) {
              return this.props.eyeWitness();
            }
            }}>
            Close
          </CustomButton>
        </section>
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  modal: state.modal
});

const mapDispatchToProps = (dispatch) => ({
  showFeedbackSuccess: () => dispatch(showFeedbackSuccess()),
  showUserProfile: () => dispatch(showUserProfile()),
  showVictimsInfo: () => dispatch(showVictimsInfo()),
  resetError: () => dispatch(resetError()),
  promptLogIn: () => dispatch(promptLogIn()),
  eyeWitness: () => dispatch(eyeWitness())
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
