import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import HomePage from './pages/homepage/HomePage';
import UserProfile from './pages/userProfile/userProfile.component';
import ReportAccident from './pages/reportAccidentPage/ReportAccident';
import UpdateProfile from './pages/updateProfile/UpdateProfile';
import Feedback from './pages/feedbackPage/Feedback';
import Login from './pages/login/Login';
import SignUp from './pages/signup/SignUp';
import Navbar from './components/nav-bar/Navbar';
import GoogleMap from './pages/googleMap/googleMap';

import './App.css';
import WithSpinner from './components/with-spinner/with-spinner';
import ResponseUnitHomePage from './pages/responseUnitHomePage/responseUnitHomePage';

class App extends React.Component {
  render() {
    // console.log(this.props)

    if (!this.props.isLoading) {
      return (
        <Router>
          <div className="App">
            <Navbar />
            <Switch>
              <React.Fragment>
                <Route exact path="/" render={() => (this.props.sent ? <Redirect to="/feedback" /> : <HomePage />)} />
                <Route exact path="/profile" component={UserProfile} />
                <Route exact path="/report-accident" component={ReportAccident} />
                <Route exact path="/update-profile" component={UpdateProfile} />
                <Route exact path="/feedback" component={Feedback} />
                <Route exact path="/google-map" component={GoogleMap} />
                <div className="ers-container">
                  <Route exact path="/ers" component={ResponseUnitHomePage} />
                </div>
                <Route
                  exact
                  path="/login"
                  render={() => (this.props.user.login === 200 ? <Redirect to="/" /> : <Login />)}
                />
                <Route
                  exact
                  path="/sign-up"
                  render={() => (this.props.user.signup === 201 ? <Redirect to="/login" /> : <SignUp />)}
                />
              </React.Fragment>
            </Switch>
          </div>
        </Router>
      );
    }

    return <WithSpinner></WithSpinner>;
  }
}

const mapStateToProps = (state) => ({
  sent: state.help.sent,
  isLoading: state.user.isLoading,
  user: state.user
});

export default connect(mapStateToProps, null)(App);
