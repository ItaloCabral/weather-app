import { TWeatherResponse } from 'providers/IWeatherProvider';
import React, { createContext } from 'react';

type WeatherContextProps = {
    weather: TWeatherResponse | null;
    setWeatherState: React.Dispatch<React.SetStateAction<TWeatherResponse | null>>;
    eraseWeatherState: () => void;
};

type WeatherProviderProps = {
    children?: React.ReactNode;
};

const DEFAULT_VALUE: WeatherContextProps = {
    weather: null,
    setWeatherState: () => {},
    eraseWeatherState: () => {},
}

const WeatherContext = createContext<WeatherContextProps>(DEFAULT_VALUE);

const WeatherProvider: React.FC<WeatherProviderProps> = ({ children }) => {
    const [weather, setWeatherState] = React.useState<TWeatherResponse | null>(null);

    const eraseWeatherState = () => {
        setWeatherState(null);
    }

    return (
        <WeatherContext.Provider value={{ weather, setWeatherState, eraseWeatherState }}>
            {children}
        </WeatherContext.Provider>
    );
}

export { WeatherContext, WeatherProvider };
