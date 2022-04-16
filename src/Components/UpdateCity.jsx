import React from "react"

import { useNavigate } from "react-router-dom";

export const UpdateCity = () => {
  
  const [countryName, setCountryName] = React.useState("");
  const [Population, setPopulation] = React.useState("");
  const [cityName, setCityName] = React.useState("");

  
  const navigate = useNavigate();
  
  return <>
    <h2>Update city</h2>

   
    <label>Select your Country Name: 
      <select 
         name=""
          id="" 
          onChange={(e) => setCountryName(e.target.value)}
          >
      
      </select>
    </label>

    <br />
    <br />


    <input 
       type="text"
        placeholder="City" 
        onChange={(e) => setCityName(e.target.value)}
        />

    <br />
    <br />

    <input 
        type="text"
         placeholder="Population"
          onChange={(e) => setPopulation(e.target.value)}
          />
    <br />
    <br />

    <button
      disabled={!countryName && !Population && !cityName}
       onClick={handleSubmit} 
       >Submit</button>
  </>
}