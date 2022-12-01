import React, { useState, useEffect } from "react";
import {GetCountries,GetCountryData} from "./components/api/api";
import { VerticalChart } from "./components/VerticalChart";
import CountryPicker from "./components/CountryPicker";
import style from './App.module.css'
const App = () => {
  const [data, setData] = useState([]);
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [dataLoading, setDataLoading] = useState(false);
  useEffect(() => {
    async function HandleCountries() {
      const Countries = await GetCountries();
      console.log("SummaryData data = ",Countries)
      setCountries(Countries);
      setIsLoading(false);
    }
    HandleCountries();
    
  }, []);
  async function HandleChange(countryName){
    setDataLoading(true)
    const data = await GetCountryData(countryName)
    setData(data.filter((items)=> items.country == countryName));
    setDataLoading(false);
  }
  if (!isLoading) {
    console.log(data)
    return (
      <div>
        
        <img className={style.header} src='https://s3.amazonaws.com/user-media.venngage.com/290105-e4c091a470adf39c5365ce9e28855862.png'></img>
        <CountryPicker HandleChange={HandleChange} country={countries} />  
        {!dataLoading 
          ? <VerticalChart data={data}/> 
          : <p>Fetching the stats from server</p> 
        }
      </div>
    );
  } else {
    return <p>Loading the data</p>;
  }
};

export default App;
