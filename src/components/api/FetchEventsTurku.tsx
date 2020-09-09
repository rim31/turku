import axios from 'axios';

const URL: string = 'https://api.turku.fi/linkedevents/v1/event/?page=1';
// const URL_PAGE = `https://api.turku.fi/linkedevents/v1/image/?page=`;
const FetchEventsTurku = async (url: any) => {
  try {
    const response: any = await axios.get(url ? url : URL);
    return response;
  } catch (err) {
    console.error(err.message);
  }
}
export default FetchEventsTurku;