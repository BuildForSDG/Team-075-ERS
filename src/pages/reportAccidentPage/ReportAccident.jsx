import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reportAccident } from '../../redux/report/report.actions';
import CustomButton from '../../components/custom-button/CustomButton';
import './report-accident.css';

class ReportAccident extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneNo: '',
      typeOfAccident: '',
      noOfPersons: '',
      description: '',
      file: ''
    }
  }

  onSubmitHandler = (event) => {
    event.preventDefault();

    const {
      phoneNo,
      typeOfAccident,
      noOfPersons,
      // description,
      file
    } = this.state;

    if (
      !phoneNo ||
      !typeOfAccident ||
      !noOfPersons
    ) return;

    if (!this.props.user.currentUser) return;
    if (!this.props.help.location) return;

    const { user } = this.props.user.currentUser;
    const { location } = this.props.help;

    const formData = new FormData();
    formData.append('image', file);
    formData.set('report', JSON.stringify({
      ...this.state,
      reporter: {
        userId: user._id,
        phoneNo: user.phoneNo
      },
      location
    }));

    this.props.reportAccident(
      formData,
      this.props.user.currentUser.token
    );

    this.setState((prevState, prevProps) => ({
      phoneNo: undefined,
      typeOfAccident: undefined,
      noOfPersons: undefined,
      description: undefined,
      file: undefined
    }));
  };

  onChangeHandler = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  //This uploads the file
  uploadFile = (event) => {
    this.setState({
      file: event.target.files[0]
    });
  }

  render() {
    return (
      <section>
        <h4 className="report-title">Additional Details</h4>
        <p className="report-desc">Please provide the following additional details</p>

        <form id="additional-details" onSubmit={this.onSubmitHandler}>
          <fieldset>
            <div className="form-group">
              <input
                name="phoneNo"
                type="text"
                className="form-control"
                placeholder="Phone number *"
                required
                onChange={this.onChangeHandler}
              />
            </div>

            <div className="form-group">
              <select name="typeOfAccident" id="type-of-accident" required className="form-control" onChange={this.onChangeHandler}>
                <option value="">Type of Accident</option>
                <option value="Motor Accident">Motor Accident</option>
                <option value="Fire Accident">Fire Accident</option>
                <option value="Building collapse">Building collapse</option>
                <option value="Construction Accident">Construction Accident</option>
                <option value="other">other</option>
              </select>
            </div>

            <div className="form-group">
              <select name="noOfPersons" id="noOfPersons" required className="form-control" onChange={this.onChangeHandler}>
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
                onChange={this.onChangeHandler}
              ></textarea>
            </div>

            <div className="form-group">
              {/* This handles the file */}
              <input name="image" type="file" className="form-control" onChange={this.uploadFile} />
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
  reportAccident: (formData, token) => dispatch(reportAccident(formData, token))
});

export default connect(mapStateToProps, mapDispatchToProps)(ReportAccident);
