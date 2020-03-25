import React, {useState} from 'react';
import axios from 'axios';
import {navigate } from '@reach/router';
import RegistrationForm from './RegistrationForm';

export default function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        setError('');
        axios.post("http://localhost:8000/api/users/login",{
            email,
            password
        },  { withCredentials :true })
            .then(()=> navigate('/pirates'))
            .catch(() => setError("Please enter valid email or password")
            )
    }

    return (
        <> 
            <h1>Login</h1>
            {error && (
                <p style={{color: "red"}}> {error} </p>
            ) }
            <form onSubmit = {handleSubmit}>
                <p>
                    <label>Email:</label>
                    <input name="email"
                    value={email} 
                    onChange ={ e=> setEmail(e.target.value)}
                    />
                </p>
                <p>
                    <label>Password:</label>
                    <input 
                    name="password"
                    type="password"
                    value ={password}
                    onChange = {e => setPassword(e.target.value)}
                    />
                </p>
                <input type="submit" value="Login" />
            </form>

            <div>
                <h1>Register!</h1>
                <RegistrationForm/>
            </div>
        </>
    );
}