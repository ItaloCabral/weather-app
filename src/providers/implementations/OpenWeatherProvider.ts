import axios, { AxiosInstance } from "axios";
import { IWeatherProvider, TWeatherResponse, TWeahterProps } from "providers/IWeatherProvider";

export class OpenWeatherProvider implements IWeatherProvider {
  private apiClient: AxiosInstance;
  private APP_ID?: string;
  constructor() {
    this.apiClient = axios.create({
      baseURL: "https://api.openweathermap.org/data/2.5"
    });
    this.APP_ID = process.env.REACT_APP_WEATHER_API_KEY;
  }

  async getCurrentWeather({ lat, lon }: TWeahterProps): Promise<TWeatherResponse> {
    const response = await this.apiClient.get<TWeatherResponse>(`/weather?appid=${this.APP_ID}`, {
      params: {
        lat: lat,
        lon: lon,
        units: "metric",
        lang: "en",
      }
    });
    return await response.data;
  }

}
