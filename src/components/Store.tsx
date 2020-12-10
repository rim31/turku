// eslint-disable-next-line
import * as React from 'react';
import moment from 'moment';
import _ from 'lodash';
import { createContainer } from "unstated-next";
import axios from 'axios';

// SOURCE opendata
// const URL_PAGE = `https://api.turku.fi/linkedevents/v1/image/?page=`;
// source : "https://api.covid19api.com/"


// THIS IS THE STORE - like redux - but unstated-next : you can store function and attributes, just have to call them
export const useStore = () => {
  const [data, setData] = React.useState<Object[] | void | null | undefined>([]);// data for graph
  const [dataDiff, setDataDiff] = React.useState<number[] | any[] | undefined>([]);// data diff for graph
  const [labels, setLabels] = React.useState<Object[] | void | null | undefined>([]); // label for graph covid19
  const [lastCases, setLastCases] = React.useState<number | any>(0); // label for graph covid19
  const [eventUrl, setEventUrl] = React.useState<string>("https://api.turku.fi/linkedevents/v1/event/?page=1"); // url for events of Turku
  const [events, setEvents] = React.useState<any[]>([]); // all events of Turku current day
  const [nextEvents, setNextEvents] = React.useState<string>(""); // url for next day events
  const [previousEvents, setPreviousEvents] = React.useState<string>(""); // url for previous day events
  // header for API request, some API doesn't allow Opera, internet explorer, there is a catch error instead of a crash anyway
  const headers = new Headers({
    "Accept": "application/json",
    "Content-Type": "application/json",
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:78.0) Gecko/20100101 Firefox/78.0"
  });
  
  //  fetchEventsUrl function  : fetch data from url event : the url change according to the page or search
  //  @params url: string
  //  @return response : json from the api url
  //
  const fetchEventsUrl = async (url: any) => {
    const response: any = await axios.get(url ? url : eventUrl);
    setEvents(response.data.data);
    // method url for next page if exists
    if (response.data.meta.next)
    setNextEvents(response.data.meta.next);
    // method url previous page if exists
    if (response.data.meta.previous)
      setPreviousEvents(response.data.meta.previous);
    return response.data;
  }
  //  {/**
  //   countryDataGraph function  : cleaning data from API covid19 to display the graph of  coronavirus evolution
  //   data from function getDataCovid19()
  //   @params data: json
  //   @params country: string Finland
  //   @params caseType: string : here newCases confirmed, but can change (confirmed, deaths, recoveres)
  //   @params dateTo: string dateTime in string for begining of the survey
  //   @return response : json from the api url
  // */}
  function countryDataGraph(data: any, country: string, caseType: string, dateTo: string) {
    let resultCases: any[] = []
    let resultDates: any[] = []
    if (data.length > 0) {
      // array of dates and cases for graph of covid 19 : it represents X(date) - Y(cases) 
      data.forEach((item: any) => {
        if ((moment(item.Date).isAfter(dateTo))) {
          resultCases.push(item.Cases);
          resultDates.push(moment(item.Date).format('YYYY/MM/DD'));
        }
      })
      // creating a array of covid Value for every day : have to make a substraction with the previous day 
      // because the api only give the amout of new cases per day
      let resultCasesDiff: any[] = _.map(resultCases, function (e: any, i: any) {
        return (resultCases[i + 1] - e) < 0 ? 0 : (resultCases[i + 1] - e)
      });
      // cleaning the last value cause it doesn't make sense with our substraction (can't do a substraction on the first value with nothing )
      resultCasesDiff.pop();
      resultCases.pop();
      resultDates.pop();
      // data for the graph rechartjs2
      setDataDiff(resultCasesDiff);
      setData(resultCases);
      setLabels(resultDates);
      // info for the new cases today : last result of our data array
      setLastCases(resultCasesDiff[resultCasesDiff.length - 1])
    }
  }

//  {/**
//     getDataCovid function  : get data from API covid19 fro the graph
//     @params 
//     @return response : json from the api url to send to countryDataGraph() fot treatment
//   */}  
  const getDataCovid = async () => {
    try {
      const country: string = 'finland'; // you can choose another country 
      const caseType: string = 'confirmed'; // possibles API options request : confirmed, recovered and deaths
      // you can change the amount of months for covid 19 : i took just 2 months but you can take more or less but the graph will be more or less compact starting from today
      const dateTo: string = `${moment().subtract(2, 'months').format()}`
      // you can choose another $country, others $caseType: confirmed, recovered and deaths
      await fetch(`https://api.covid19api.com/country/${country}/status/${caseType}/live?from=${dateTo}&to=${moment().format('YYYY-MM-DDT00:00:00')}`, {
        method: 'GET',
        redirect: 'follow',
        headers: headers
      })
        .then((response: any) => response.json()).then((res) => {
          // the json only give the amouts of cases per day, need to do a difference
          countryDataGraph(res, country, caseType, dateTo);// cleaning data for ChartJS
        }).catch(err => alert(err));
    } catch (err) {
      console.error(err.message);
    }
  }

  return {
    // attributes available when you call unstated store in a component
    data,
    dataDiff,
    labels,
    headers,
    events,
    nextEvents,
    previousEvents,
    lastCases,
    // methods availables when you call unstated store in a component
    getDataCovid,
    fetchEventsUrl,
    setEventUrl,
    setNextEvents,
    setPreviousEvents,
  };
}
export const StoreContainer = createContainer(useStore)
