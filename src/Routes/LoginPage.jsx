import React, { useState } from 'react';
import { Input } from 'semantic-ui-react';
import { Link, useNavigate } from 'react-router-dom';
import '../CSS/Login.css';
import { signinAuthUserWithEmailAndPassword } from '../firebase';

const Login = (props) => {
    const [contact, setContact] = useState({
        email: '',
        password: ''
    });

    const { email, password } = contact;
    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setContact((prevValue) => ({
            ...prevValue,
            [name]: value
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await signinAuthUserWithEmailAndPassword(email, password);
            navigate('/');
            alert('Success! You have logged in');
        } catch (error) {
            alert('Login failed. Incorrect email or password');
        }
    };

    return (
        <div className='login-page'>
            <Link className='signup-link' to='/signup'>
                Sign up instead ?
            </Link>

            <h1>Your email</h1>
            <Input
                name='email'
                type='text'
                placeholder='Email'
                onChange={handleChange}
                value={contact.email}
            />

            <br></br>

            <h1>Your password</h1>
            <Input
                name='password'
                type='password'
                placeholder='Password'
                onChange={handleChange}
                value={contact.password}
            />

            <br></br>

            <button className='login-button' onClick={handleSubmit}>
                Sign in
            </button>
            <br></br>
        </div>
    );
};

export default Login;
