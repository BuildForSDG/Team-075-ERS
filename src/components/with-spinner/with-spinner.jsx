import React from 'react';


import './with-spinner.css';
import { connect } from 'react-redux';


const WithSpinner = ({ user }) => (
    <div className={`spinnerOverlay cover-spin ${user.isLoading ? 'spinner' : ''}`}>
        {/* <div class="loader"></div>  */}
            <div className='spinner-container'>
        </div>
    </div>
);

const mapStateToProps = (state) => ({
    user: state.user
});

export default connect(mapStateToProps)(WithSpinner);