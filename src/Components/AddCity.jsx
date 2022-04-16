import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addCityRequest } from "../Redux/City/action";
import { getCountryRequest } from "../Redux/Country/action";
 

export const AddCity = () => {

  const [countryName, setCountryName] = useState("");
  const [Population, setPopulation] = useState("");
  const [ cityName, setCityName] = useState("");


  const dispatch = useDispatch();

  const { countries } = useSelector(( store) => store.country);


  const navigate = useNavigate();

  useEffect(() => {
    dispatch( getCountryRequest () );
    console.log(countries);
  }, [])

  const handleSubmit = () => {
    dispatch(addCityRequest(cityName, Population, countryName));
    // console.log(cities);
  }
  
  return <>
    <h1>Add City Details </h1>

    <label> country
      <select
       name="" 
       id="" 
       onChange={(e) => setCountryName(e.target.value)}
       >
        <option value=""></option>

        {countries.map((e, id) => {
          return <option key = {id} value={e.country}>{e.country}</option>
        })}

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


       <br />
       <br />
       
    
    <button  onClick={() => {
      navigate("/add-country");

    }}>Add Country</button>

    <br />
    <br />

    <button  onClick={() => {
      navigate("/");
    }}>Home </button>
  </>
}