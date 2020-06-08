import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
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
import Modal from './components/modal/Modal';
import UserViewProfile from './pages/userProfile/userProfile.component';
import './App.css';
import WithSpinner from './components/with-spinner/with-spinner';
import ResponseUnitHomePage from './pages/responseUnitHomePage/responseUnitHomePage';
// import ResponseUnitSignUp from './components/responseUnitSignUp/SignUp';
import ModalLogin from './components/modalLogin/modal-login';
import Dashboard from './components/dashboard/Dashboard';
import ResponseUnitLogin from './pages/responseUnit/login/Login';
import Logout from './components/logout/Logout';
// import Logout from './components/logout/Logout';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      toastId: {
        current: null
      }
    }
  }
  
  render() {
    // console.log(this.props)
    if (this.props.report.isPending) {
      toast.error('Sending report...', { autoClose: false });
    }
    if (this.props.report.reportMessage === 200) {
      // toast.update(toast.error('Sending report...', { autoClose: false }), { type: toast.TYPE.INFO, autoClose: 4000 })

    }
      return (
        <Router>
          <div className="App">
            <Navbar />
            {
              this.props.user.login !== 200 && this.props.modal.promptLogIn ?
                <Modal><ModalLogin></ModalLogin></Modal> : null
            }
            {
              this.props.modal.showLogout ?
              <Logout/> : null
            }
            {/* {
              this.props.modal.showVictims ? 
              <Modal><ResponseUnitHomePage /></Modal> : null
            } */}
            {
              this.props.modal.showProfile ? 
              (
                <Modal>
                  <UserViewProfile />
                </Modal>
              )
              : null
            }
            {
  
              (!this.props.isLoading) ?
              (
                <HandleError>
                  <Switch>
                    <React.Fragment>
                    <Route exact path="/" render={() => {
                        if (!this.props.response.currentUser) {
                          return (this.props.sent ? <Redirect to="/feedback" /> : <HomePage />)
                        }
                        return (this.props.response.currentUser ? <Redirect to="/dashboard" /> : <Dashboard />)
                        }} />
                      <Route exact path="/profile" component={UserProfile} />
                      <Route exact path="/report-accident" component={ReportAccident} />
                      <Route exact path="/update-profile" component={UpdateProfile} />
                      <Route exact path="/feedback" component={Feedback} />
                      <Route exact path="/google-map" component={GoogleMap} />
                      <Route exact path="/ers" component={ResponseUnitHomePage} />
                      <Route exact path="/ers-login" render={() => (this.props.response.currentUser) ? <Redirect to='/dashboard' /> : <ResponseUnitLogin />} />
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
              )
              :
              (
                <HandleError>
                  <Switch>
                    <React.Fragment>
                      <Route exact path="/" render={() => {
                        if (!this.props.response.currentUser) {
                          return (this.props.sent ? <Redirect to="/feedback" /> : <HomePage />)
                        }
                        return (this.props.response.currentUser ? <Redirect to="/dashboard" /> : <Dashboard />)
                        }} />
                      <Route exact path="/profile" component={UserProfile} />
                      <Route exact path="/report-accident" component={ReportAccident} />
                      <Route exact path="/update-profile" component={UpdateProfile} />
                      <Route exact path="/feedback" component={Feedback} />
                      <Route exact path="/google-map" component={GoogleMap} />
                      <Route exact path="/ers" component={ResponseUnitHomePage} />
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
                      
                      <WithSpinner></WithSpinner>
                    </React.Fragment>
                  </Switch>
                </HandleError>
              )
            }
              </div>
            </Router>
      );
    }

}

const mapStateToProps = (state) => ({
  sent: state.help.sent,
  isLoading: state.user.isLoading,
  user: state.user,
  modal: state.modal,

  report: state.report,
  help: state.help,
  response: state.response
});

export default connect(mapStateToProps, null)(App);
