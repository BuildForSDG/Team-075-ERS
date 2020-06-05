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

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard-container">
        <Sidebar
          links={[
            {
              title: 'Response Units',
              route: '/dashboard/report-units',
              icon: <Units className="icon" />
            },
            {
              title: 'Pending Issues',
              route: 'dashboard/pending-issues',
              icon: <Wait className="icon" />
            },
            {
              title: 'Active Response Units',
              route: 'dashboard/pending-issues',
              icon: <Active className="icon" />
            },
            {
              title: 'Locations',
              route: 'dashboard/map',
              icon: <Location className="icon" />
            }
          ]}
        />
        <div className="content-container">
          <Switch>
            <Route exact path={this.props.match.url + '/'} component={Admin} />

            {/* GoogleMap component for testing routes on dashboard */}
            <Route exact path={this.props.match.url + '/report-units'} component={GoogleMap} />
          </Switch>
        </div>
      </div>
    );
  }
}
export default Dashboard;
