import React from 'react';
import './modal.css';
import CustomButton from '../custom-button/CustomButton';
import { connect } from 'react-redux';
import { showFeedbackSuccess, showUserProfile, showVictimsInfo } from '../../redux/modal/modal.actions';

class Modal extends React.Component {

  render() {
    const { showFeedback, showProfile, showVictims } = this.props.modal;
    const showHideClassName = (
      showFeedback 
      || showProfile 
      || showVictims
      ) ? 'modal display-block' : 'modal display-none';
  
    return (
      <div className={showHideClassName}>
        <section className="modal-main">
          {this.props.children}
          <CustomButton className="btn-close" onClick={() => {
            if (showFeedback){
              return this.props.showFeedbackSuccess();
            }
            if ( showProfile) {
              return this.props.showUserProfile();
            }
            if (showVictims) {
              return this.props.showVictimsInfo();
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
  showVictimsInfo: () => dispatch(showVictimsInfo())
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
