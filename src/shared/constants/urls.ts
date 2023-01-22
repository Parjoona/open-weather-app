export const baseUrl = 'http://api.openweathermap.org/';
export const searchUrl = `${baseUrl}geo/1.0/direct?q=`;
export const currentWeatherUrl = (lat: number, lon: number) =>
  `data/2.5/weather?lat=${lat}&lon=${lon}`;
