import axios from 'axios';

const URL: string = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY: string = 'f33a484cf794d08d0148764789aaba32';
const FetchData = async (query: any) => {
  const response: any = await axios.get(URL, {
    params: {
      q: query,
      units: 'metric',
      APPID: API_KEY
    }
  });
  return response;
}
export default FetchData;