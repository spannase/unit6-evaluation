import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './Components/Home'
import { AddCity } from './Components/AddCity'
import { AddCountry } from './Components/AddCountry'
import { UpdateCity } from './Components/UpdateCity'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path={"/"} element={<Home/>}/>
        <Route path={"/add-country"} element={<AddCountry/>}/>
        <Route path={"/add-city"} element={<AddCity/>}/>
        <Route path={"/update-city"} element={<UpdateCity/>}/>
      </Routes>
    </div>
  )
}

export default App
