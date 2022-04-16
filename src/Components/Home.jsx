import React from "react";
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { deleteCityRequest,  getCityRequest, sortCityAscRequest, sortCityDescRequest } from "../Redux/City/action";
import { getCountryRequest } from "../Redux/Country/action";


export const Home = () => {
  const dispatch = useDispatch();
  const {cities} = useSelector((store) => store.city);

  const navigate = useNavigate();

  React.useEffect(() => {
    handleData();
  }, []);

  const handleData = () => {
    dispatch(getCityRequest());
    // console.log(cities);
    dispatch(getCountryRequest());
  }


  return <>
    <h2>Home</h2>
    <button 
       onClick={() => {
          navigate("/add-country");
      }}>Add Country
      </button>
    
    <button 
       onClick={() => {
          navigate("/add-city");
    }}>add city
    </button>
    
    <br />
    <br />
   


    Sort By Poplation:
    <button  onClick={() => {
      dispatch(sortCityAscRequest());
    }}>Asc
    </button>
    <button  onClick={() => {
      dispatch(sortCityDescRequest());
    }}>Desc
    </button>

    
    <br />
    <br />
    <table style={{margin: "auto"}}>
      <thead>
        <tr>
          <th>sr.</th>
          <th>Country</th>
          <th>City</th>
          <th>Population</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>

      <tbody>
        {cities.map((e, id) => {
          return <tr key={id}>
            <td>{e.id}</td>
            <td>{e.country}</td>
            <td>{e.city}</td>
            <td>{e.population}</td>
            <td>
              <button  onClick={() => {
            
              navigate("/update-city");
             }}>Edit</button>
            </td>


            <td>
              <button  onClick={() => {
                 dispatch(deleteCityRequest(e.id));
                   handleData();
              }}>Delete</button>
          </td>
          </tr>
        })}
      </tbody>
    </table>
  </>
}