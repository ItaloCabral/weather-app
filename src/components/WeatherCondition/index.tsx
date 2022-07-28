import React, { useEffect } from "react";
import { IconType } from "react-icons";

import {
  FiCloudLightning,
  FiCloudDrizzle,
  FiCloudRain,
  FiCloudSnow,
  FiSun,
  FiCloud
} from "react-icons/fi";

import { WiWindy } from "react-icons/wi";

type TWeatherCondition =
 | "2xx"
 | "3xx"
 | "5xx"
 | "6xx"
 | "7xx"
 | "800"
 | "80x";


type TConditions = {
  [key in string]: IconType;
}

export const ConditionIcon = ({ condition }: {condition: number}) => {
  let conditions: TConditions = {
    "2xx": FiCloudLightning,
    "3xx": FiCloudDrizzle,
    "5xx": FiCloudRain,
    "6xx": FiCloudSnow,
    "7xx": WiWindy,
    "800": FiSun,
    "80x": FiCloud,
  }
  const key = condition.toString().replace(/(\d)(.){2}/g, "$1xx");
  if(condition.toString()[0] === "8"){
    return (condition.toString()[2] === "0")
      ? <FiSun size={32} />
      : <FiCloud size={32} />
  }
  const Icon = conditions[key];
  return <Icon size={56} />;
}
