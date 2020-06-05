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
import HandleError from './components/handleError/handleError';
import './App.css';
import WithSpinner from './components/with-spinner/with-spinner';
import ResponseUnitHomePage from './pages/responseUnitHomePage/responseUnitHomePage';
import ResponseUnitLogin from './pages/responseUnit/login/Login';
import ResponseUnitSignUp from './components/responseUnitSignUp/SignUp';
import Dashboard from './components/dashboard/Dashboard';


class App extends React.Component {
  render() {
    // console.log(this.props)
    return (
      <Router>
        <div className="App">
          <Navbar />
          {!this.props.isLoading ? (
            <HandleError>
              <Switch>
                <React.Fragment>
                  <Route exact path="/" render={() => (this.props.sent ? <Redirect to="/feedback" /> : <HomePage />)} />
                  <Route exact path="/profile" component={UserProfile} />
                  <Route exact path="/report-accident" component={ReportAccident} />
                  <Route exact path="/update-profile" component={UpdateProfile} />
                  <Route exact path="/feedback" component={Feedback} />
                  <Route exact path="/google-map" component={GoogleMap} />
                  <Route exact path="/ers" component={ResponseUnitHomePage} />
                  <Route exact path="/ers-sign-up" component={ResponseUnitSignUp} />
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
                  <Route path="/dashboard" component={Dashboard} />
                </React.Fragment>
              </Switch>
            </HandleError>
          ) : (


            <WithSpinner></WithSpinner>
          )}
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => ({
  sent: state.help.sent,
  isLoading: state.user.isLoading,
  user: state.user
});

export default connect(mapStateToProps, null)(App);
