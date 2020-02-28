import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import './App.scss';
import SearchForm from './components/searchForm';
import Weather from './components/weather';
import {Container}from 'react-bootstrap';




// name ideas: Weatherology, Weatherly, Weathernetic, Weatherify, Weatherporium, Weather Emporium, weatherium, thera

//before moving to production, change.
const Key = process.env.REACT_APP_KEY
// const Key = process.env.REACT_APP_WEATHERBIT_KEY

function App() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const[data, setData] = useState([]);
  
  //Open Weather:
  // `https://api.openweathermap.org/data/2.5/weather?q=denver,us&APPID=${Key}&units=imperial`

  //Weatherbit:
  //`https://api.weatherbit.io/v2.0/current?city=denver,co&key=${Key}&units=I`

  //use geoLocation? to set this up?
  const fetchWeather = () => {
    setLoading(true)
    //TODO: Need to be able to dynamically search cities
    axios
      .get(`https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?q=denver,us&APPID=${Key}&units=imperial`)
        .then(res => {
          console.log("response",res.data)
          setData(res.data)
          setLoading(false);
        })
        .catch(err => {
          console.log("Error", err)
          setError(error)
          setLoading(false);
        })
  }

   //Open Weather:
  // `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${Key}&units=imperial`

  //Weatherbit:
  //`https://api.weatherbit.io/v2.0/current?city=${city}&country=${country}&key=${Key}&units=I`

  // fetches city from SearchForm user input --> Is there away to use async await with if statement
  const searchCity = (city, country) => {
    setLoading(true)
    //TODO: Need to be able to dynamically search cities
    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${Key}&units=imperial`)
        .then(res => {
          console.log("response",res.data)
          setData(res.data)
          setLoading(false);
        })
        .catch(err => {
          console.log("Error", err)
          setError(error)
          setLoading(false);
        })
  }

  useEffect(() => {
    fetchWeather();
  }, []);

  //pauses the application here if there is an error
  if(error) {
    return <div>Oops. I'm sorry but something went wrong!</div>
  }
  
  //Pauses app here had displays loading until data is fetched
  if(loading) {
    return(
      <div>Loading...</div>
    )
  }

  return (
    <div className="App">
      <Container>
        <h1>Weatherify</h1>
        <SearchForm search={searchCity}/>
        {console.log("Data", data)}
        {/* {
          loading ? (
              <div>Loading...</div>
          )
          : (
            console.log("Did we get the data?", data)
            // <Weather data = {data}/>
          )
        } */}
        <Weather data = {data}/>
        {/* <p>{data.temp}</p> */}
        {/* <p>{Math.round(weather.main.temp)}&deg;</p> */}
      </Container>

    </div>
  );
}

export default App;
