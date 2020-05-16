import React from 'react';
import {
  BrowserRouter as Router, Route, Switch, Redirect
} from 'react-router-dom';
import { connect } from 'react-redux';
import HomePage from './pages/homepage/homePage.component';
import UserProfile from './pages/userProfile/userProfile.component';
import ReportAccident from './pages/reportAccidentPage/reportAccident.component';
import Feedback from './pages/feedbackPage/feedback.component';
import Navbar from './components/nav-bar/navbar.component';


import './App.css';

class App extends React.Component {

  render() {
    const { sent } = this.props;
    return (
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/"  render={() => ( sent ? (<Redirect to='/feedback' />) : (<HomePage />))} />
              <Route exact path="/profile" component={UserProfile} />
              <Route exact path="/report-accident" component={ReportAccident} />
              <Route exact path="/feedback" component={Feedback} />
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



export default connect(mapStateToProps, null)(App);
