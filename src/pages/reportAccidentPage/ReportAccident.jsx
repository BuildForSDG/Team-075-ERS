import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reportAccident } from '../../redux/report/report.actions';
import CustomButton from '../../components/custom-button/CustomButton';
import './report-accident.css';

class ReportAccident extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneNo: undefined,
      typeOfAccident: undefined,
      noOfPersons: undefined,
      description: undefined,
      filename: null
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { phoneNo, typeOfAccident, noOfPersons, description, filename } = this.state; 
    if (
      !phoneNo ||
      !typeOfAccident ||
      !noOfPersons
    ) return;
    if (!this.props.user.currentUser) return;
    if (!this.props.help.location) return;
    const { user } = this.props.user.currentUser;
    const { location } = this.props.help;
    console.log('Token---->', this.props.user.currentUser.token)
    this.props.reportAccident(
      user._id,
      phoneNo,
      location.lat,
      location.lng,
      typeOfAccident,
      noOfPersons,
      description,
      filename,
      this.props.user.currentUser.token
    );
    this.setState((prevState, prevProps) => ({
      phoneNo: undefined,
      typeOfAccident: undefined,
      noOfPersons: undefined,
      description: undefined,
      filename: undefined
    }));
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  //This uploads the file
  uploadFile = (event) => {
    event.preventDefault();
    this.setState((prevState, prevprops) => ({
      filename: event.target.files[0]
    }));
    const data = new FormData()
    data.append('file', this.state.filename)
  }

  render() {
    return (
      <section>
        <h4 className="report-title">Additional Details</h4>
        <p className="report-desc">Please provide the following additional details</p>

        <form id="additional-details" onSubmit={this.handleSubmit}>
          <fieldset>
            <div className="form-group">
              <input
                name="phoneNo"
                type="text"
                className="form-control"
                placeholder="Phone number *"
                required
                onChange={this.handleChange}
              />
            </div>

            <div className="form-group">
              <select name="typeOfAccident" id="type-of-accident" required className="form-control" onChange={this.handleChange}>
                <option value="">Type of Accident</option>
                <option value="Motor Accident">Motor Accident</option>
                <option value="Fire Accident">Fire Accident</option>
                <option value="Building collaps">Building collapse</option>
                <option value="Construction Accident">Construction Accident</option>
                <option value="other">other</option>
              </select>
            </div>

            <div className="form-group">
              <select name="noOfPersons" id="type-of-accident" required className="form-control" onChange={this.handleChange}>
                <option value="">Number of Persons Involved</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>

            <div className="form-group">
              <textarea
                name="description"
                id="description"
                cols="10"
                rows="5"
                placeholder="Description"
                className="form-control"
                onChange={this.handleChange}
              ></textarea>
            </div>

            <div className="form-group">
              {/* This handles the file */}
              <input name="filename" type="file" className="form-control" onChange={this.uploadFile} />
            </div>

            <CustomButton className="btn-send">
              Send
            </CustomButton>
          </fieldset>
        </form>
      </section>
    );
  }
}


const mapStateToProps = (state) => ({
  user: state.user,
  help: state.help
});

const mapDispatchToProps = (dispatch) => ({
  reportAccident: (
    userId,
    phoneNo,
    latitude,
    longitude,
    type,
    personsInvolved,
    description,
    imageUrl,
    token
  ) => dispatch(reportAccident(
    userId,
    phoneNo,
    latitude,
    longitude,
    type,
    personsInvolved,
    description,
    imageUrl,
    token
  ))
});

export default connect(mapStateToProps, mapDispatchToProps)(ReportAccident);
