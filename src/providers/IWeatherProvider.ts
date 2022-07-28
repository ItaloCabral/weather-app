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

interface Clouds {
  all: number;
}

export type TWeatherResponse = {
  weather: Weather[];
  main: Main;
  wind: Wind;
  name: string;
  clouds: Clouds;
}

export type TWeahterProps = {
  lat: number;
  lon: number;
}

export interface IWeatherProvider {
  getCurrentWeather(props: TWeahterProps): Promise<TWeatherResponse>;
}
