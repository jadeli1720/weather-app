import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import SearchForm from "./components/searchForm";
import DailyForcast from "./components/dailyData/dailyForcast";
import WeeklyForcast from "./components/weeklyData/weeklyForcast";
import { changeBackground } from "./utils/changeBackground";

import { Container } from "react-bootstrap";
import "./App.scss";


const Key = process.env.REACT_APP_KEY;

function App() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [dailyData, setDailyData] = useState([]);
  const [weeklyData, setWeeklyData] = useState([]);
  const [background, setBackground] = useState('clearDay');

  const fetchWeather = () => {
    setLoading(true);
    setError(null);
    // TODO: change this to geolocation?
    // api urls
    //cnt number of days returned (from 1 to 16)
    let fetchDay = `https://api.openweathermap.org/data/2.5/weather?q=denver,us&APPID=${Key}&units=imperial`;
    let fetchWeek = `https://api.openweathermap.org/data/2.5/forecast?q=denver,us&appid=${Key}&units=imperial`;

    //get requests
    const requestDay = axios.get(fetchDay);
    const requestWeek = axios.get(fetchWeek);

    axios
      .all([requestDay, requestWeek])
      .then(
        axios.spread((...res) => {
          const resDay = res[0];
          // console.log("Daily forcast", resDay.data)
          const resWeek = res[1];
          // console.log("Weekly forcast", resWeek.data.list)
          setDailyData(resDay.data);
          setWeeklyData(resWeek.data);
          setLoading(false);
        })
      )
      .catch((err) => {
        console.log("Error", err);
        setError(error);
        setLoading(false);
      });
  };

  // fetches city from SearchForm user input
  const searchCity = (city) => {
    setLoading(true);
    setError(null);

    // api urls
    let fetchDay = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${Key}&units=imperial`;
    let fetchWeek = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${Key}&units=imperial`;

    //get requests
    const requestDay = axios.get(fetchDay);
    const requestWeek = axios.get(fetchWeek);

    axios
      .all([requestDay, requestWeek])
      .then(
        axios.spread((...res) => {
          const resDay = res[0];
          // console.log("Daily forcast", resDay.data)
          const resWeek = res[1];
          // console.log("Weekly forcast", resWeek.data)
          setDailyData(resDay.data);
          setWeeklyData(resWeek.data);
          setLoading(false);
        })
      )
      .catch((err) => {
        console.log("Error", err);
        setError(error);
        setLoading(false);
      });
  };

  const fetchBackground = (city) => {
    if (Object.keys(city).length) {
      
      let rangeId = city.weather[0].id;
      let sunrise = city.sys.sunrise;
      let sunset = city.sys.sunset;
      let timezone = city.timezone;
      
      let background = changeBackground(rangeId, sunrise, sunset, timezone)
      // console.log("Checking Background", background)
      // setBackground(background)
      
    }
  }

  fetchBackground(dailyData)


  useEffect(() => {
    
    fetchWeather();
    
  }, []); //how do we get rid of this warning? fetchWeather?

  useEffect(() => {
    // fetchBackground(dailyData)
  }, [])

  //pauses the application here if there is an error
  if (error) {
    return <div>Oops. I'm sorry but something went wrong!</div>;
  }

  // style={{backgroundImage: 'url('+require(`./assests/${background}.png`)+')' }}

  return (
    <div className="App"  style={{backgroundImage: 'url('+ require(`./assests/${background}.png`) + ')', position: "fixed", minHeight: "100%", minWidth: "100%",  backgroundPosition: 'center', backgroundSize: "cover"}} >
      {/* {console.log("Weather", background)} */}
      <Container>
        <h1 className="my-3">Weatherify</h1>
        <SearchForm search = {searchCity} />
        <DailyForcast day = {dailyData} loading = {loading}/>
        <WeeklyForcast  week = {weeklyData} loading = {loading}/>
      </Container>
    </div>
  );
}

export default App;
