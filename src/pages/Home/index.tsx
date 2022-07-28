import React, { useEffect, useState, useContext } from "react";

import { format } from "date-fns";
import ReactLoading from "react-loading";

import { WeatherService } from "services/WeatherService";
import { WeatherContext } from "contexts/WeatherContext";

import { Container, Logo, Content } from "./styles";
import { ConditionIcon } from "components/WeatherCondition";

export const Home = () => {

  const { weather, setWeatherState, eraseWeatherState } = useContext(WeatherContext);
  const { getCurrentWeather } = WeatherService;

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    getCurrentWeather({ //6550101327, -46.69261316421452
      lat: -23.36,
      lon: -46.84
    }).then(data => setWeatherState(data));
    return () => eraseWeatherState();

  }, []);

  useEffect(() => console.log(weather), [weather]);

  return (
    <Container>
      <Logo>the.weather</Logo>

      <Content>
        {weather ? (
          <>
            <span className="degrees">{~~weather?.main.temp}°</span>
            <p className="location">
              { weather?.name }
              <span>{format(currentTime, "HH :mm - iiii, d LLL yy")}</span>
            </p>
            <span className="condition">
              <ConditionIcon condition={weather.weather[0].id} />
              {weather?.weather[0].description}
            </span>
          </>
          ) : <ReactLoading height={56} width={56} type="spokes" color="#FFF" />
        }
      </Content>
    </Container>
  );
}
