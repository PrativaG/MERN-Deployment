import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {navigate} from '@reach/router';


const AddPirate = () =>{
    const [pirate, setPirate] = useState(null);
    const [errors, setErrors] = useState([]);
    const [captain, setCaptain] = useState("no");

    useEffect(()=>{
        axios.get("http://localhost:8000/api/pirates", {withCredentials: true})
             .then(res => {
                let allPirates = res.data;
                for(let i=0; i<allPirates.length; i++){
                    if(allPirates[i].position === "Captain"){
                        setCaptain("yes");
                    }
                }
                })
            .catch(() => navigate('/'));
    }, []);

    
    const submitHandler = event => {
        event.preventDefault();
        setErrors([]);
        axios.post("http://localhost:8000/api/pirates", pirate, {withCredentials: true})
             .then(() => navigate("/pirates"))
             .catch(err => {
                 const newErrors = [];
                 const innerErrors = err.response.data.errors;
                  console.log(innerErrors);
                 for(const key in innerErrors){
                     newErrors.push(innerErrors[key].message);
                 }
                 setErrors(newErrors);
             });
    }
     
    const changeHandler = event =>{
        let {name, value} = event.target;
        setPirate({
            ...pirate,
            [name] :value
        })
    }

    if(errors === undefined){return "Loading..."}
    return(
        <div>
            <h1>Lets Add Pirate</h1>
            <button onClick={()=> navigate("/pirates")}>Crew Board</button>
            <br/>
            <br/>
           
            {errors.map((error, i) => (
                  <p style={{color: 'red'}} key={i}>{error}</p>
              ))}
            <form onSubmit={submitHandler}>
           
             <label>Pirate Name:</label>
               <input name="name" type="text" onChange={changeHandler}/> <br/>
              
               <label>Image url: </label>
               <input name="imageUrl" type="text" onChange={changeHandler}/> <br/>
              
               <label># of Treasure Chests:</label>
               <input name="treasures" type="number" onChange={changeHandler}/> <br/>
              
               <label>Pirate Catch Phrases: </label>
               <input name="catchPhrase" type="text" onChange={changeHandler}/> <br/>

               <label>Crew Position:</label>
                {captain === "no"
                ?
                <select name="position" onChange={changeHandler}>
                <option>Captain</option> 
                <option>First Mate</option>
                <option>Quarter master</option>
                <option>Bootswain</option>
                <option>Powder Monkey</option>
                </select>
                :
                <select name="position" onChange={changeHandler}>
                   <option>First Mate</option>
                   <option>Quarter master</option>
                   <option>Bootswain</option>
                   <option>Powder Monkey</option>
                </select>   
                 }

                <br/>
                <br/>
                <input type="checkbox"  name="pegLeg"/>
                <label> Peg leg</label><br/> 
                <input type="checkbox"  name="eyePatch"/>
                <label> Eye Patch</label><br/> 
                <input type="checkbox"  name="hookHand"/>
                <label> Hook Hand</label><br/> 
                <br/>            
               <button type="submit">Add Pirate</button>
            </form>
        

        </div>
    )
}

export default AddPirate;