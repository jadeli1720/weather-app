import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import SearchForm from "./components/searchForm";
import DailyForcast from "./components/dailyData/dailyForcast";
import WeeklyForcast from "./components/weeklyData/weeklyForcast";
import { changeBackground, changeTitleColor } from "./utils/index";
import { Container, Row, Col } from "react-bootstrap";
import "./App.scss";


const Key = process.env.REACT_APP_KEY;

function App() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [dailyData, setDailyData] = useState([]);
  const [weeklyData, setWeeklyData] = useState([]);
  const [background, setBackground] = useState('clearDay');
  const [titleColor, setTitleColor] = useState('f5f5f5')

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
          // console.log("Daily forcast", resDay.data.weather)
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


  //weather
  useEffect(() => {
    fetchWeather();
    
  }, []); //how do we get rid of this warning? fetchWeather?


  //background and app title
  useEffect(() => {
    if (Object.keys(dailyData).length) {
      let rangeId = dailyData.weather[0].id;
      let sunrise = dailyData.sys.sunrise;
      let sunset = dailyData.sys.sunset;
      let timezone = dailyData.timezone;
      //
      let background = changeBackground(rangeId, sunrise, sunset, timezone)
      let titleFontColor = changeTitleColor(rangeId, sunrise, sunset, timezone)
      console.log("id", rangeId)
      setBackground(background)
      setTitleColor(titleFontColor)
      // console.log("Checking Background", titleColor)
    }
  }, [dailyData])



  //pauses the application here if there is an error
  if (error) {
    return <div>Oops. I'm sorry but something went wrong!</div>;
  }
  return (
    <div style={{ backgroundColor:'black' ,backgroundImage: `url( /img/${background}.png )`,  height: "100vh",  backgroundPosition: 'center', backgroundRepeat:'none', backgroundSize: "cover"}}>
      {/* {console.log("data", background)} */}
      <Container>
        <Row xs={1} md={2} className="mb-2 header">
          <Col className= "appTitle">
            <h1 className="my-3" style={{color:`#${titleColor}`}}>Weatherify</h1>
          </Col>
          <Col >
            <SearchForm  search = {searchCity} />
          </Col>
        </Row>
        <DailyForcast day = {dailyData} loading = {loading}/>
        <WeeklyForcast  week = {weeklyData} loading = {loading}/>
      </Container>
    </div>
  );
}

export default App;
