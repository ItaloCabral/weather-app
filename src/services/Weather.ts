import { Api } from "providers/Weather";

interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string; 
}

interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}

interface Wind {
  speed: number;
  deg: number;
}

export type TWeatherResponse = {
  weather: Weather[];
  main: Main;
  wind: Wind;
  name: string;
}

const getCurrentWeather = async () => {
  const response = await Api.get<TWeatherResponse>("/weather?appid=77f0102383b3f97fe8369511d145b580",{
    params: {
      lat: "-34.6037",
      lon: "-58.3816",
      units: "metric",
      lang: "pt",
    }
  });
  return await response.data;
}

export const WeatherService = {
  getCurrentWeather,
}
