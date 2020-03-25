import React, {useState} from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

export default function Registrationform(){
    const [formState, setFormState] = useState({
        firstName: '',
        lastName : '',
        email: '',
        password : '',
        confirmPassword : ''
    });
    const [errors, setErrors] = useState(0);
    const [frontendErrors, setFrontendErrors] = useState({
        firstName : '',
        lastName : '',
        email : '',
        password: '',
        passwordMatch : ''
    });

    function handleChange(event){
        const {name, value} = event.target;

        setFormState({
            ...formState,
            [name] : value
        });
        
        if(name === "firstName" && value.length  < 2){
            setFrontendErrors({
                ...frontendErrors,
              firstName: 'First Name must be greater than 2 characters'})
        }
        if(name === "lastName" && value.length < 2){
            setFrontendErrors({
                ...frontendErrors,
              lastName: 'Last Name must be greater than 2 characters'})}
       
        if(name === "email" && value.length < 2){
            setFrontendErrors({
                ...frontendErrors,
              email: 'Email must be greater than 2 characters'})}
        
        if(name === "password" && value.length < 5){
            setFrontendErrors({
                ...frontendErrors,
              password: 'Password must be greater than 5 characters'})
            }
        
        if(name === "confirmPassword" && formState.password !== value){
            setFrontendErrors({
                ...frontendErrors,
              passwordMatch: 'Password and password confirmation should match '})
            }
       
    };

    
    function handleSubmit(event){
        event.preventDefault();
        setErrors(0);
        axios.post("http://localhost:8000/api/users/register", 
                    formState,
                    { withCredentials :true })
            .then(()=> navigate("/pirates"))
            .catch(err => {
                const newError = [];
                console.log(err.response);
                const innerErrors = err.response.data.errors;
                for(const key of Object.keys(innerErrors)){
                    newError.push(innerErrors[key].message);
                }
                setErrors(newError);
            });
    }

    return (
        <>
           
            <form onSubmit={handleSubmit}>
            {errors!== 0 && errors.map((error, index)=>
                    <p style={{color:'red'}}key={index}>{error}</p>
                )}
                <p>
                   <p> {frontendErrors.firstName}</p>
                   <label>First Name:</label> 
                   <input 
                   name="firstName"
                   value={formState.firstName}
                   onChange={handleChange}
                   />
                </p>
                <p>
                <p> {frontendErrors.lastName}</p>
                   <label>Last Name:</label> 
                   <input 
                   name="lastName"
                   value={formState.lastName}
                   onChange={handleChange}
                   />
                </p>
                <p>
                <p> {frontendErrors.email}</p>
                   <label >Email:</label> 
                   <input 
                   name="email"
                   value={formState.email}
                   onChange={handleChange}
                   />
                </p>
                <p>
                <p> {frontendErrors.password}</p>
                   <label>Password</label> 
                   <input 
                   name="password"
                   type="password"
                   value={formState.password}
                   onChange={handleChange}
                   />
                </p>
                <p>
                   <label>Confirm password</label> 
                   <input 
                   name="confirmPassword"
                   type="password"
                   value={formState.confirmPassword}
                   onChange={handleChange}
                   />
                </p>
                <button>Register</button>
            </form>
        </>
    )
}