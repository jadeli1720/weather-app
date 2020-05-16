import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "./App.scss";
import SearchForm from "./components/searchForm";
import DailyForcast from "./components/dailyData/dailyForcast";
import { Container } from "react-bootstrap";
import WeeklyForcast from "./components/weeklyData/weeklyForcast";

//Before moving to production, change.
const Key = process.env.REACT_APP_KEY;
// const Key = process.env.REACT_APP_WEATHERBIT_KEY

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

  useEffect(() => {
    fetchWeather();
  }, []); //how do we get rid of this warning? fetchWeather?

  //pauses the application here if there is an error
  if (error) {
    return <div>Oops. I'm sorry but something went wrong!</div>;
  }

  return (
    <div className="App">
      <Container>
        <h1 className="my-3">Weatherify</h1>
        <SearchForm search = {searchCity} />
        {console.log("testing for type of data", dailyData)}
        <DailyForcast day = {dailyData} loading = {loading}/>
        <WeeklyForcast  week = {weeklyData} loading = {loading}/>
      </Container>
    </div>
  );
}

export default App;
