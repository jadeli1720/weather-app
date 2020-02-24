import React, {useState, useEffect} from 'react';
import './App.scss';
import axios from 'axios';


// name ideas: Weatherology, Weatherly, Weathernetic, Weatherify, Weatherporium, Weather Emporium, weatheriom, thera

const Key = process.env.REACT_APP_KEY

function App() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const[weather, setWeather] = useState(null);


  // `api.openweathermap.org/data/2.5/weather?q={city name}&APPID=${Key}`
  const fetchWeather = () => {
    setLoading(true)
    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?q=denver&APPID=${Key}&units=imperial`)
        .then(res => {
          console.log("response",res.data)
          setWeather(res.data)
          setLoading(false);
        })
        .catch(err => {
          console.log("Error", err)
          setError(error)
          setLoading(false);
        })
  }

  useEffect(() => {
    fetchWeather()
  }, []);

  //puases the application here if there is an error
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
      <h1>Weatheria</h1>
      <div>

      </div>
      <p>{weather.main.temp}</p>
    </div>
  );
}

export default App;
