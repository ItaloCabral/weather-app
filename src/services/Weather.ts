import { Api } from "providers/Weather";

const getCurrentWeather = async () => {
  const response = await Api.get("/weather?appid=77f0102383b3f97fe8369511d145b580",{
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
