import React from "react"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addCountryRequest } from "../Redux/Country/action";


export const AddCountry = () => {
  const [country, setCountry] = React.useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = () => {
    dispatch(addCountryRequest(country));
  }

  return <>
    <h2>Add Country</h2>
   

    <input 
        type="text" 
        placeholder="Enter Country Name" 
        onChange={(e) => setCountry(e.target.value)}
        />

    <br />
    <br />
    <button 
     disabled={ !country } 
     onClick={ handleSubmit } >  Submit  
     </button>

     <br />
     
    <button onClick={() => {
      navigate("/add-city");
    }}>Add City</button>
    
  </>
}