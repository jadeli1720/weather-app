import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import './App.scss';
import SearchForm from './components/searchForm';
import Weather from './components/weather';
import {Container}from 'react-bootstrap';


//before moving to production, change.
const Key = process.env.REACT_APP_KEY
// const Key = process.env.REACT_APP_WEATHERBIT_KEY

function App() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const[data, setData] = useState([]);
  const[forcastData, setForcastData] = useState([])
  


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

  // api.openweathermap.org/data/2.5/forecast/daily?q=${city}&cnt=7&appid=${Key}&units=imperial

  // fetches city from SearchForm user input --> Is there away to use async await with if statement
  const searchCity = (city) => {
    setLoading(true)

    // api urls
    let fetchDay = `https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${Key}&units=imperial`
    let fetchWeek = `https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=7&appid=${Key}&units=imperial`
    
    //get requests
    const requestDay = axios.get(fetchDay);
    const requestWeek = axios.get(fetchWeek)

    axios.all([requestDay, requestWeek])
      .then(axios.spread((...res) => {
        const resDay = res[0]
        console.log("Daily forcast", resDay.data)
        const resWeek = res[1]
        console.log("Weekly forcast", resWeek.data)
        setData(resDay.data)
        setForcastData(resWeek.data)
        setLoading(false);
      }))
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
        {console.log("Daily Data?", data)}
        {console.log("Weekly Data?", forcastData)}
      </Container>

    </div>
  );
}

export default App;
