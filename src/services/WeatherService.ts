import { OpenWeatherProvider } from "providers/implementations/OpenWeatherProvider";
import { TWeahterProps, TWeatherResponse } from "providers/IWeatherProvider";

const provider = new OpenWeatherProvider();

const getCurrentWeather = async ({ lat, lon }: TWeahterProps): Promise<TWeatherResponse> => await provider.getCurrentWeather({ lat, lon });

export const WeatherService = {
  getCurrentWeather,
}
