import React, { useEffect, useState } from "react";
import { FiCloudRain } from "react-icons/fi";

import { TWeatherResponse, WeatherService } from "services/Weather";

import { Container, Logo, Content } from "./styles";

export const Home = () => {

  const [weather, setWeather] = useState<TWeatherResponse|null>(null);
  const { getCurrentWeather } = WeatherService;

  useEffect(() => {
    // getCurrentWeather().then(data => setWeather(data));
  }, []);

  useEffect(() => console.log(weather), [weather]);

  return (
    <Container>
      <Logo>the.weather</Logo>
  
      <Content>
        <span className="degrees">{weather?.main.temp}</span>
  
        <p className="location">
          {weather?.name}
          <span>22:36 - Sunday, 6 Oct 22</span>
        </p>
  
        <span className="condition">
          <FiCloudRain size={48} />
          weather?.weather[0].description
        </span>
      </Content>
    </Container>
  );
}
