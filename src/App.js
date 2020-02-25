import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import axios from 'axios';
import SearchForm from './components/searchForm';
import Weather from './components/weather';
import {Container}from 'react-bootstrap';


// name ideas: Weatherology, Weatherly, Weathernetic, Weatherify, Weatherporium, Weather Emporium, weatherium, thera

//before moving to production, change.
const Key = process.env.REACT_APP_KEY

function App() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const[data, setData] = useState([]);

  // `api.openweathermap.org/data/2.5/weather?q={city name}&APPID=${Key}`
  const fetchWeather = () => {
    setLoading(true)
    //TODO: Need to be able to dynamically search cities
    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?q=London&APPID=${Key}&units=imperial`)
        .then(res => {
          // console.log("response",res.data)
          setData(res.data)
          setLoading(false);
        })
        .catch(err => {
          console.log("Error", err)
          setError(error)
          setLoading(false);
        })
  }

  // fetches city from SearchForm user input
  const searchCity = (city) => {
    setLoading(true)
    //TODO: Need to be able to dynamically search cities
    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${Key}&units=imperial`)
        .then(res => {
          // console.log("response",res.data)
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
        <Weather data = {data}/>
        {/* <p>{weather.name}</p>
        <p>{Math.round(weather.main.temp)}&deg;</p> */}
      </Container>

    </div>
  );
}

export default App;
