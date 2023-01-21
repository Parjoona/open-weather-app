export interface IWeatherForcast {
  cod: string;
  message: number;
  cnt: number;
  list: IWeatherList[];
  city: IForecastCity;
}

export interface IForcast {
  temp: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level: number;
  grnd_level: number;
  humidity: number;
  temp_kf: number;
}

export interface IForecastWeather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface IForecastClouds {
  all: number;
}

export interface IForecastWind {
  speed: number;
  deg: number;
}

export interface IForecastSnow {
  '3h'?: number;
}

export interface IWeatherList {
  dt: number;
  main: IForcast;
  weather: IForecastWeather[];
  clouds: IForecastClouds;
  wind: IForecastWind;
  snow: IForecastSnow;
  // Not needed.
  sys: unknown;
  dt_txt: string;
}

export interface ICoords {
  lat: number;
  lon: number;
}

export interface IForecastCity {
  id: number;
  name: string;
  coord: ICoords;
  country: string;
}
