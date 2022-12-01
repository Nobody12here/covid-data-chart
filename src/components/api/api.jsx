const url = 'https://covid-193.p.rapidapi.com';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '86ee6e1d2bmshab1411005180750p1f544fjsn16d4aa443b16',
    'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
  }
};

async function GetCountries() {
  //A get summary function that is asyncronous and fetches all the
  //available data from the api service
  try {
    const Res = await fetch(`${url}/countries`,options);
    const summaryData = await Res.json();
    return summaryData.response 
  } catch (e) {
    console.error(e);
    return e;
  }
}

async function GetCountryData(country) {
  try {
    const Res = await fetch(`${url}/statistics`,options);
    const countryData = await Res.json();
    return countryData.response;
  } catch (e) {
    console.error(e);
    return e;
  }
}
export  {GetCountries,GetCountryData};
