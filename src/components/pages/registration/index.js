import React from "react";

import {Field, reduxForm, focus} from 'redux-form';
import {registerUser} from '../../../actions/users';
import {login} from '../../../actions/auth';
import Input from './input';
import {required, nonEmpty, matches, length, isTrimmed} from './validators';
const passwordLength = length({min: 6, max: 72});
const matchesPassword = matches('password');
import './index.css'

class RegistrationForm extends React.Component{

}

