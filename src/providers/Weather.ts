import axios from "axios";

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

export const Api = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
  params: {
    
  }
});
