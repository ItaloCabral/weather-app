import React from "react";
import { FiSearch } from "react-icons/fi";

import { SideContainer, InputGroup, Input, Button, RecentSearches, Content } from "./styles";

export const Sidemenu = () => (
  <SideContainer>
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
          <span>86%</span>
        </div>
        <div className="value">
          <span>Humidity</span>
          <span>62%</span>
        </div>
        <div className="value">
          <span>Wind</span>
          <span>12km/h</span>
        </div>
        <div className="value">
          <span>Rain</span>
          <span>8mm</span>
        </div>
      </div>
    </Content>
  </SideContainer>
);
