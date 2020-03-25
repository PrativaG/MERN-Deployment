import React from 'react';
import {navigate} from '@reach/router';
import axios from 'axios';

export default function LogoutButton (){
    const handleClick = event =>{
        axios.delete('http://localhost:8000/api/users/logout', {withCredentials : true})
            .then(()=> navigate('/'))
            .catch(console.log)
    }
    return (
        <button onClick = {handleClick}>
            Log Out
        </button>
    )
    
}