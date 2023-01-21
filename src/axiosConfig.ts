import axios from 'axios';

export const setAxiosDefaults = () => {
  axios.defaults.baseURL = 'http://api.openweathermap.org/data/2.5/';
};
