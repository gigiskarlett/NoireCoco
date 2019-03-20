import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

import RegistrationForm from './registration-form';
import { NavBar } from '../../reusable/navBar';
import { Footer } from '../../reusable/footer';

export function RegistrationPage(props) {
    // If we are logged in (which happens automatically when registration
    // is successful) redirect to the inventory
    if (props.loggedIn) {
        return <Redirect to="/admin/inventory" />;
    }
    return (
        <div className="admin-home">
            <NavBar/>
            <h2>ADMINISTRATIVE PAGE FOR NOIRE COCO</h2>
            <RegistrationForm />
            <Link to="/admin/login">Login</Link>
            <Footer/>
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(RegistrationPage);