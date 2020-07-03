import React from 'react';
import { connect } from 'react-redux';
import { showVictimsInfo } from '../../redux/modal/modal.actions';
import { sendResponseUnitLocation } from '../../redux/response/response.actions';
import ResponseUnitHomePage from '../responseUnitHomePage/responseUnitHomePage';
import './admin.css';

class Admin extends React.Component {
  
  componentDidMount() {
    setInterval(async () => {
      const { token, responseUnit } = this.props.response.currentUser;
      const { location } = this.props.help;
      if (!location) return;
      this.props.sendResponseUnitLocation(responseUnit._id, responseUnit.name, location, token);
    }, 30000);
  }

  render() {
    return (
      <div>
        <h1 className="main-heading">Welcome to the Admin Panel</h1>
        <div className="card-wrap">
          <ResponseUnitHomePage />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  response: state.response,
  help: state.help
})

const mapDispatchToProps = (dispatch) => ({
  showVictimsInfo: (index) => dispatch(showVictimsInfo(index)),
  sendResponseUnitLocation: (id, name, location, token) => dispatch(sendResponseUnitLocation(id, name, location, token))
})

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
