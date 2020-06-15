import React, { Component } from 'react';
import './sidebar.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createSubscription } from '../../redux/subscription/subscription.actions';
// import CustomButton from '../custom-button/CustomButton';
class Sidebar extends Component {

  render() {
    return (
      <div className="sidebar-container">
        <ul className="sidebar-menu">
          {this.props.links.map((link, index) => (
            <li className="sidebar-menu-item">
              <Link key={index} to={link.route}>
                {link.icon}
                {link.title}
              </Link>
            </li>
          ))}
          {/* <CustomButton
            className='custom-square-button card-btn'
            onClick={() => {
              if (this.props.response.currentUser) {
                const endpoint = "https://emresys.herokuapp.com/api/report/"
                const { token, responseUnit } = this.props.response.currentUser;
                return (
                  this.props.subscribeUnit(endpoint, responseUnit._id, token )
                );
              }
            }}
          >
            { !this.props.subscribe.message ? `Subcribe` : `Subscribed`}
          </CustomButton> */}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  response: state.response,
  subscribe: state.subscribe
});

const mapDispatchToProps = (dispatch) => ({
  createSubscription: (subscription, token) => dispatch(createSubscription(subscription, token))
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
