import React, { useContext } from "react";

import { FiSearch } from "react-icons/fi";
import { SideContainer, InputGroup, Input, Button, RecentSearches, Content } from "./styles";

import { WeatherContext } from "contexts/WeatherContext";

interface Props {
  show: boolean;
}

export const Sidemenu: React.FC<Props> = ({ show }) => {
  const { weather } = useContext(WeatherContext);

  return (
    <SideContainer show={show} >
      <InputGroup>
        <Input placeholder="Another location" />
        <Button><FiSearch size={24} /></Button>
      </InputGroup>

      <RecentSearches>
        <a href="">London</a>
        <a href="">Ireland</a>
        <a href="">Iceland</a>
        <a href="">Paris</a>
      </RecentSearches>

      <Content>
        <h3>Weather Details</h3>
        <div className="details">
          <div className="value">
            <span>Cloudy</span>
            <span>{weather?.clouds.all}%</span>
          </div>
          <div className="value">
            <span>Humidity</span>
            <span>{weather?.main.humidity}%</span>
          </div>
          <div className="value">
            <span>Wind</span>
            <span>{weather?.wind.speed}km/h</span>
          </div>
          <div className="value">
            <span>Rain</span>
            <span>mm</span>
          </div>
        </div>
      </Content>
    </SideContainer>
  );
}
