import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import axios from 'axios';
import SearchForm from './components/searchForm';
import {Container}from 'react-bootstrap'


// name ideas: Weatherology, Weatherly, Weathernetic, Weatherify, Weatherporium, Weather Emporium, weatheriom, thera

//before moving to production, change.
const Key = process.env.REACT_APP_KEY

function App() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const[weather, setWeather] = useState(null);
  const[location, setLocation] = useState(null)

  

  // `api.openweathermap.org/data/2.5/weather?q={city name}&APPID=${Key}`
  const fetchWeather = (searchValue) => {
    setLoading(true)
    //TODO: Need to be able to dynamically search cities
    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&APPID=${Key}&units=imperial`)
        .then(res => {
          console.log("response",res.data)
          // setLocation(res.data.name)
          setWeather(res.data)
          setLoading(false);
        })
        .catch(err => {
          console.log("Error", err)
          setError(error)
          setLoading(false);
        })
  }

  // const searchCity = (city) => {
    
  // }

  useEffect(() => {
    fetchWeather(SearchForm)
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
        <h1>Weatheria</h1>
        <SearchForm search={fetchWeather}/>
        {/* {
          (weather.name === !null )
          ?
          <p>Please enter a City</p>
          :
          <div>
            <p>{weather.name}</p>
          </div>
        } */}
        {/* Bootstrap Card? */}
        {/* <p>{weather.name}</p> */}
        {/* <p>{weather.main.temp}</p> */}
      </Container>
     

    </div>
  );
}

export default App;
