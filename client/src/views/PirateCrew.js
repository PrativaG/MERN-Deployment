import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { navigate} from '@reach/router';
import LogoutButton from '../components/Logoutbutton';

const PirateCrew = () => {
    const [pirates, setPirates] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:8000/api/pirates", {withCredentials: true})
             .then(res => {
                 setPirates(res.data);
                 
                })
            .catch(() => navigate('/'));
    }, [pirates]);

    const handleDelete = (event, id) =>{
        axios.delete("http://localhost:8000/api/pirates/delete/" +id)
        .then(() => {
            const newList = pirates.filter(pl => pl._id !== id);
            setPirates(newList);
        })
    };

    const showProfile = (event, id) => {
        navigate("/pirate/" +id)    
    }

    function compare(a, b) {
        const  pirateA = a.name.toUpperCase();
        const pirateB  = b.name.toUpperCase();
      
        let comparison = 0;
        if (pirateA > pirateB) {
            comparison = 1;
        } else if (pirateA < pirateB) {
          comparison = -1;
        }
        return comparison;
      }

    return (
       <div>
            <h1>Pirate Crew</h1> {" "}
            <button onClick={()=> navigate("/pirate/new")}>Add Pirate</button>
            <br/>
            <br/>
            <LogoutButton/>
            <br/>
            <br/>
        <table>
                <thead>
                    <tr>
                        <th>Pic</th>
                        <th>Pirate Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {pirates.length !== 0 
                    ? pirates.sort(compare).map( pirate =>(
                       <tr key={pirate._id}>
                           <td> <img src={pirate.imageUrl} alt={pirate.name} width="200"/></td>
                           <td>{pirate.name}</td>
                           <td>
                               <button 
                               onClick={(event) => showProfile(event, pirate._id)}
                               >View Profile</button>
                                <button 
                               onClick={(event) => handleDelete(event, pirate._id)}
                               >Walk the Plank</button>
                            </td>
                       </tr>
                      ))
                    :<tr> 
                        <td>Please add pirates</td>
                    </tr>    
                    }
                </tbody>
            </table>
       </div>
    )
}

export default PirateCrew;