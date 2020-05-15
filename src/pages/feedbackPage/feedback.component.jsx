import React, {Component} from 'react';
import './feedback.styles.css';

class Feedback extends Component{
  render(){
    return(
      <section>
        <h4 className="feedback">Feedback</h4>
        <p className="feedback-title">Help is on the way</p>

        <div className="feedback-body">
          <h6>Status</h6>
          <p>Response Pending</p>

          <h6>Responder</h6>
          <p>FRSC lokoja branch</p>


          <h6>Report received at</h6>
          <p>May 18, 2020 16:00:00</p>


          <h6>Expected time of arrival of response team</h6>
          <p>10 minutes</p>

          <h6>Response team arrived at</h6>
          <p>May 18, 2020 16:10:00</p>
        </div>
      </section>

    );
  }
}

export default Feedback
