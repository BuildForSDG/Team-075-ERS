import React, { Component } from 'react';
import Sidebar from '../sidebar/Sidebar';
import { ReactComponent as Wait } from '../../assets/images/wait.svg';
import { ReactComponent as Active } from '../../assets/images/correct.svg';
import { ReactComponent as Location } from '../../assets/images/pin.svg';
import { ReactComponent as Units } from '../../assets/images/customer-service.svg';
import './dashboard.css';
import { Route, Switch } from 'react-router-dom';
import Admin from '../../pages/adminPanel/Admin';
import GoogleMap from '../../pages/googleMap/googleMap';
// import Card from '../card/card';
import { connect } from 'react-redux';
import { getAllVictims } from '../../redux/response/response.actions';
import ResponseUnitSignUp from '../../components/responseUnitSignUp/SignUp';

class Dashboard extends Component {
  componentDidMount(){
    const { getAllVictims } = this.props;
    const { currentUser } = this.props.response;
    getAllVictims(currentUser.token);
  }
  render() {
    // const { reports } = this.props.response.victims;

    return (
      <div className="dashboard-container">
        <Sidebar
          key={this.props.key}
          links={[
            {
              title: 'Dashboard',
              route: '/dashboard',
              icon: <Units className="icon" />,
              key: 1
            },
            {
              title: 'Response Units',
              route: '/dashboard/report-units',
              icon: <Units className="icon" />,
              key: 2
            },
            {
              title: 'Pending Issues',
              route: '/dashboard/pending-issues',
              icon: <Wait className="icon" />,
              key: 3
            },
            {
              title: 'Active Response Units',
              route: '/dashboard/pending-issues',
              icon: <Active className="icon" />,
              key: 4
            },
            {
              title: 'Locations',
              route: '/dashboard/map',
              icon: <Location className="icon" />,
              key: 5
            },
            {
              title: 'Signup Response Unit',
              route: '/dashboard/response-unit',
              icon: <Location className="icon" />,
              key: 6
            }
          ]}
        />
        <div className="content-container">
          <Switch>
            <Route exact path={this.props.match.url + '/'} component={Admin} />
            <Route exact path={this.props.match.url + '/response-unit' } component={ResponseUnitSignUp}/>
            {/* GoogleMap component for testing routes on dashboard */}
            <Route exact path={this.props.match.url + '/report-units'} component={GoogleMap} />
          </Switch>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  response: state.response
})

const mapDispatchToProps = (dispatch) => ({
  getAllVictims: (token) => dispatch(getAllVictims(token))
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

