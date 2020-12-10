import axios from 'axios';

/**
 * Fetchong data from API Turku : 
 * events of data event 
 * - be Carefull about images : https or http problem from the API
 * - date are also not exact from the API
 */
const URL: string = 'https://api.turku.fi/linkedevents/v1/event/?page=1';
// const URL_PAGE = `https://api.turku.fi/linkedevents/v1/image/?page=`; // Just model of base url
const FetchEventsTurku = async (url: any) => {
  try {
    // get url of api events from url parameter, by default, it is URL value
    const response: any = await axios.get(url ? url : URL);
    return response;
  } catch (err) {
    console.error(err.message);
  }
}
export default FetchEventsTurku;