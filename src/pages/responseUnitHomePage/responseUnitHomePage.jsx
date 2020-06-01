import React from 'react';
import Card from '../../components/card/card';
import { connect } from 'react-redux';
import { getAllVictims } from '../../redux/response/response.actions';
import WithSpinner from '../../components/with-spinner/with-spinner';

class ResponseUnitHomePage extends React.Component {

  componentDidMount(){
    const { token } = this.props.user.currentUser;
    this.props.getAllVictims(token);
  }

  render(){
    if (this.props.response.victims.reports) {
      // console.log(this.props.response.victims);
      const { reports } = this.props.response.victims;
      return (
        <div className="ers-container">
          {
            reports.map((victim) => (
              <div className="response-homepage" key={victim._id}>
                <Card
                  name={victim.name}
                  phoneNo={victim.phoneNo}
                  latitude={victim.location.latitude}
                  longitude={victim.location.longitude}
                  imageURL={`https://robohash.org/set_set5/${victim.name}?size=50x50`}
                  status={victim.status}
                />
              </div>
            ))
          }
        </div>
      );
    }

    return <WithSpinner></WithSpinner>;
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  response: state.response
});

const mapDispatchToProps = (dispatch) => ({
  getAllVictims: (token) => dispatch(getAllVictims(token))
});

export default connect(mapStateToProps, mapDispatchToProps)(ResponseUnitHomePage);
