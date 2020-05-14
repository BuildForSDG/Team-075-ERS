import React, {Component} from "react";
import CustomButton from '../../components/custom-button/custom-button.component';
import './reportAccident.styles.css';

class ReportAccident extends Component {
    constructor(props){
        super(props);
        this.state = {
            phoneNo: 0,
            typeOfAccident: '',
            noOfPersons: 0,
            description: '',
            filename: ''
        }
    }
    
    handleSubmit = event => {
        event.preventDefault();

        const { lat, lng, phoneNo, userId } = this.state;
        fetch('http://localhost:3001/api/report', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            location:{
            latitude: lat.toString(),
            longitude: lng.toString()
            },
            reporter:{
            phoneNo,
            userId
            }
            })
        })
        .then((data) => console.log)
        .catch((error) => console.log);

        this.setState({
            phoneNo: 0,
            typeOfAccident: '',
            noOfPersons: 0,
            description: '',
            filename: ''
        })
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value })
    }

    render (){
        return (
            <section>
                <h4 className="report-title">Additional Details</h4>
                <p className="report-desc">Please provide the following additional details</p>

                    <form id="additional-details" action="/report-accident">
                        <fieldset>
                            <div className="form-group">
                                <input 
                                    name="phoneNo" 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Phone number *"
                                    onChange={ this.handleChange }/>
                            </div>

                            <div className="form-group">
                                <select name="typeOfAccident" id="type-of-accident" className="form-control" onChange={ this.handleChange }>
                                    <option value="">Type of Accident</option>
                                    <option value="1">Motor Accident</option>
                                    <option value="2">Fire Accident</option>
                                    <option value="3">Building collapse</option>
                                    <option value="4">Construction Accident</option>
                                    <option value="5">other</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <select name="noOfPersons" id="type-of-accident" className="form-control" onChange={ this.handleChange }>
                                    <option value="">Number of Persons Involved</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="5">4</option>
                                    <option value="5">other</option>
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
                                    onChange={ this.handleChange }>
                                </textarea>
                            </div>

                            <div className="form-group">
                                <input 
                                    name="filename" 
                                    type="file" 
                                    className="form-control" 
                                    onChange={ this.handleChange }/>
                            </div>

                            <CustomButton className="btn-send" onClick={ this.handleSubmit }>Send</CustomButton>
                        </fieldset>
                    </form>

        </section>
        );
    }
}
export default ReportAccident;
