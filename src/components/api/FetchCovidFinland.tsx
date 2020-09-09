import axios from 'axios';

const URL: string = 'https://sampo.thl.fi/pivot/prod/en/epirapo/covid19case/fact_epirapo_covid19case.json';
const FetchCovidFinland = async () => {
  const response: any = await axios.get(URL);
  // console.log("response covid", response)
  return response;
}
export default FetchCovidFinland;