import React, { useEffect, useState } from "react";
import { FiCloudRain } from "react-icons/fi";

import { WeatherService } from "services/Weather";

import { Container, Logo, Content } from "./styles";

export const Home = () => {

  const [weather, setWeather] = useState<any>({});
  const { getCurrentWeather } = WeatherService;

  useEffect(() => {
    // getCurrentWeather().then(data => setWeather(data));
  }, []);

  useEffect(() => console.log(weather), [weather]);

  return (
    <Container>
      <Logo>the.weather</Logo>
  
      <Content>
        <span className="degrees">08°</span>
  
        <p className="location">
          London
          <span>22:36 - Sunday, 6 Oct 22</span>
        </p>
  
        <span className="condition">
          <FiCloudRain size={48} />
          Rainy
        </span>
      </Content>
    </Container>
  );
}
