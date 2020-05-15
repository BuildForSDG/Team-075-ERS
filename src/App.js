import React from 'react';
import {
  BrowserRouter as Router, Route, Switch, Redirect
} from 'react-router-dom';
import { connect } from 'react-redux';

import HomePage from '../src/pages/homepage/homePage.component';
import UserProfile from './pages/userProfile/userProfile.component';
import ReportAccident from './pages/reportAccidentPage/reportAccident.component';
import Navbar from './components/nav-bar/navbar.component';


import './App.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" render={() => (this.props.sent ? (<Redirect to='/report-accident' />) : (<HomePage />))} />
              <Route exact path="/profile" component={UserProfile} />
              <Route exact path="/report-accident" component={ReportAccident} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => ({
  sent: state.help.sent
});

export default connect(mapStateToProps)(App);
