import React, { Component } from 'react';
import Sidebar from '../sidebar/Sidebar';
import { ReactComponent as Wait } from '../../assets/images/wait.svg';
import { ReactComponent as Teams } from '../../assets/images/team.svg';
import { ReactComponent as CreateUser } from '../../assets/images/add-user.svg';
import { ReactComponent as Active } from '../../assets/images/correct.svg';
import { ReactComponent as Location } from '../../assets/images/pin.svg';
import { ReactComponent as Units } from '../../assets/images/customer-service.svg';
import './dashboard.css';
import { Route, Switch } from 'react-router-dom';
import Admin from '../../pages/adminPanel/Admin';
import GoogleMap from '../../pages/googleMap/googleMap';
// import Card from '../card/card';
import { connect } from 'react-redux';
import { getAllVictims, getAllUnits } from '../../redux/response/response.actions';
import { createSubscription } from '../../redux/subscription/subscription.actions';
import ResponseUnitSignUp from '../../components/responseUnitSignUp/ResponseUnitSignUp';
import ResponseUnits from '../../components/responseUnits/response-units';
import subscribeUser from '../../pushSubscription';

class Dashboard extends Component {
  componentDidMount() {
    const { getAllVictims, getAllUnits } = this.props;
    if (this.props.response.currentUser) {
      const { currentUser } = this.props.response;
      getAllVictims(currentUser.token);
      getAllUnits(currentUser.token);
    }
  }
  render() {
    // const { reports } = this.props.response.victims;
    if(this.props.user.currentUser) {
      console.log('Componenet did mount');
      console.log(this.props.user)
      subscribeUser(this.props.user.currentUser.user._id);
    }

    return (
      <div className="dashboard-container">
        <Sidebar
          key={this.props.key}
          links={[
            {
              title: <span>Dashboard</span>,
              route: '/dashboard',
              icon: <Units className="icon" />,
              key: 1
            },
            {
              title: <span>Response Units</span>,
              route: '/dashboard/report-units',
              icon: <Teams className="icon" />,
              key: 2
            },
            {
              title: <span>Pending Issues</span>,
              route: '/dashboard/pending-issues',
              icon: <Wait className="icon" />,
              key: 3
            },
            {
              title: <span>Active Response Units</span>,
              route: '/dashboard/display-units',
              icon: <Active className="icon" />,
              key: 4
            },
            {
              title: <span>Locations</span>,
              route: '/dashboard/map',
              icon: <Location className="icon" />,
              key: 5
            },
            {
              title: <span>Create Response Unit</span>,
              route: '/dashboard/signup-response-unit',
              icon: <CreateUser className="icon" />,
              key: 6
            }
          ]}
        />
        <div className="content-container">
          <Switch>
            <Route exact path={this.props.match.url + '/'} component={Admin} />
            <Route exact path={this.props.match.url + '/signup-response-unit'} component={ResponseUnitSignUp} />
            <Route exact path={this.props.match.url + '/display-units'} component={ResponseUnits} />
            <Route exact path={this.props.match.url + '/report-units'} component={GoogleMap} />
          </Switch>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  response: state.response,
  user: state.user
});

const mapDispatchToProps = (dispatch) => ({
  getAllVictims: (token) => dispatch(getAllVictims(token)),
  getAllUnits: (token) => dispatch(getAllUnits(token)),
  createSubscription: (subscription, token) => dispatch(createSubscription(subscription, token))
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
