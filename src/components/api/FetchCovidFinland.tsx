import axios from 'axios';
/**
 * just fetching data from openData Finland
 *  !!!!!!!!! NOT USED  - just for demo - cause the format is not good at all !!!!!!!!
 * covid 19 api data is in Store.tsx
 */
const URL: string = 'https://sampo.thl.fi/pivot/prod/en/epirapo/covid19case/fact_epirapo_covid19case.json';
const FetchCovidFinland = async () => {
  const response: any = await axios.get(URL);
  // console.log("response covid", response) // for debuging, to understand it wasn't good for the contest
  return response;
}
export default FetchCovidFinland;