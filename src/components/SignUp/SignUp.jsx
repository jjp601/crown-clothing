import React, { Component } from 'react';

import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './SignUp.styles.scss';

class SignUp extends Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleOnSubmit = async (e) => {
        e.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state;

        if (password !== confirmPassword) {
            alert("Passwords don't match.")
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password)

            await createUserProfileDocument(user, { displayName });

            this.setState(() => ({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            }))
        } catch (err) {
            console.error(err);
        }
    }

    handleOnChange = (e) => {
        const { value, name } = e.target;

        this.setState(() => ({
            [name]: value
        }))
    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <div className="sign-up">
                <h2 className="title">I do not have an account</h2>
                <span>Sign Up with email and password</span>
                <form className="sign-up-form" onSubmit={this.handleOnSubmit}>
                    <FormInput 
                        type="text"
                        name="displayName"
                        value={displayName}
                        onChange={this.handleOnChange}
                        label="Display Name"
                        required
                    />
                    <FormInput 
                        type="email"
                        name="email"
                        value={email}
                        onChange={this.handleOnChange}
                        label="Email"
                        required
                    />
                    <FormInput 
                        type="password"
                        name="password"
                        value={password}
                        onChange={this.handleOnChange}
                        label="Password"
                        required
                    />
                    <FormInput 
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={this.handleOnChange}
                        label="Confirm Password"
                        required
                    />
                    <CustomButton type="submit">SIGN UP</CustomButton>
                </form>
            </div>
        );
    }
}

export default SignUp;