import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { navigate} from '@reach/router';


const ShowPirate = ({id}) => {
    const [pirate, setPirate] = useState(null);
   

    useEffect(() => {
        axios.get("http://localhost:8000/api/pirates/" + id,  {withCredentials: true})
            .then(res => {
                setPirate(res.data);
            })
            .catch(console.log);
    }, []);

    const handleClick = (event) => {
        const {name, value} = event.target;
        setPirate({
            ...pirate,
            [name] : value
        })
        
        axios.put("http://localhost:8000/api/pirates/edit/" + pirate._id, pirate, {withCredentials: true})
             .then(res => {
                 console.log(res)
             })
             .catch(err => console.log(err))
    }

    if(pirate === null) {return "Loading..."}

    return (
    <div>
        <button onClick={()=> navigate("/pirates")}>Crew Board</button>
        <h1>{pirate.name}</h1>
        <img src={pirate.imageUrl} alt={pirate.name} width="300"/>
        <h2>" {pirate.catchPhrase}  "</h2>

        <br/>
        <h3>About</h3>
        <p>Position: {pirate.position} </p>
        <p>Treasures: {pirate.treasures} </p>
         {pirate.pegLeg === "true" 
         ? 
        <>
         <p>Peg Leg: Yes</p> 
         <button 
         style = {{backgroundColor :'red'}}
         name="pegLeg"
         value = "false"
         onClick = {handleClick}>No</button>
        </>
         :
         <>
         <p>Peg Leg: No</p>
         <button 
         style = {{backgroundColor :'green'}}
         name="pegLeg"
         value = "true"
         onClick = {handleClick}>Yes</button> 
         </>
         } 

        {pirate.eyePatch === "true" 
        ? 
       <>
        <p>Eye Patch: Yes</p>
        <button 
        name="eyePatch"
        value="false"
        style = {{backgroundColor :'red'}}  
        onClick = {handleClick}>No</button> 
        </>
        :
        <>
         <p> Eye Patch: No </p> 
         <button 
         name="eyePatch"
         value="true" 
         onClick = {handleClick}
         style = {{backgroundColor :'green'}}>Yes</button> 
        </>}
       {pirate.hookHand === "true" 
       ?   
       <>
       <p>Hook Hand: Yes </p> 
       <button
       name="hookHand"
       value="false"  
        onClick = {handleClick}
       style = {{backgroundColor :'red'}}
       >
        No</button> 
        </>
       : 
       <>
       <p>Hook Hand: No </p>  
       <button 
        name="hookHand"
        value="true"  
         onClick = {handleClick}
       style = {{backgroundColor :'green'}}>Yes</button>
       </> }
    </div>
    )
}

export default ShowPirate;