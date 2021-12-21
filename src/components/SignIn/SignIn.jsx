import React, { Component } from 'react';

import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import {
    SignInContainer,
    SignInTitle,
    ButtonsBarContainer
  } from './SignIn.styles';

class SignIn extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            email: '',
            password: ''
        }
    }

    handleOnSubmit = async (e) => {
        e.preventDefault()

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password)
            this.setState(() => ({
                email: '',
                password: ''
            }))
        } catch(err) {
            console.error(err);
        }
    }
    handleOnChange = (e) => {
        const { value, name} = e.target;

        this.setState(() => ({
            [name]: value
        }))
    }
    
    render() {
        return (
            <SignInContainer>
                <SignInTitle>I already have an account</SignInTitle>
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
                    <ButtonsBarContainer>
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>{' '}Sign in with Google{' '}</CustomButton>
                    </ButtonsBarContainer>
                </form>
            </SignInContainer>
        );
    }
}

export default SignIn;