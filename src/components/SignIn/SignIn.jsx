import React, { Component } from 'react';

import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';

import './SignIn.styles.scss'

class SignIn extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            email: '',
            password: ''
        }
    }

    handleOnSubmit = (e) => {
        e.preventDefault()

        this.setState(() => ({
            email: '',
            password: ''
        }))
    }
    handleOnChange = (e) => {
        const { value, name} = e.target;

        this.setState(() => ({
            [name]: value
        }))
    }
    
    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleOnSubmit}>
                    <FormInput 
                        name="email" 
                        type="email" 
                        value ={this.state.email} 
                        handleOnChange={this.handleOnChange} 
                        label="Email"
                        required 
                    />
                    <FormInput 
                        name="password" 
                        type="password" 
                        value ={this.state.password} 
                        handleOnChange={this.handleOnChange}
                        label="Password"
                        required 
                    />

                    <CustomButton type="submit">Sign In</CustomButton>
                </form>
            </div>
        );
    }
}

export default SignIn;