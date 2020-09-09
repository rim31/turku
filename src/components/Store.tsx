// eslint-disable-next-line
import * as React from 'react';
import moment from 'moment';
import _ from 'lodash';
import { createContainer } from "unstated-next";
import axios from 'axios';

// const URL_PAGE = `https://api.turku.fi/linkedevents/v1/image/?page=`;
// source : "https://api.covid19api.com/"

export const useStore = () => {
  const [data, setData] = React.useState<Object[] | void | null | undefined>([]);// data for graph
  const [dataDiff, setDataDiff] = React.useState<number[] | any[] | undefined>([]);// data diff for graph
  const [labels, setLabels] = React.useState<Object[] | void | null | undefined>([]);
  const [eventUrl, setEventUrl] = React.useState<string>("https://api.turku.fi/linkedevents/v1/event/?page=1");
  const [events, setEvents] = React.useState<any[]>([]);
  const [nextEvents, setNextEvents] = React.useState<string>("");
  const [previousEvents, setPreviousEvents] = React.useState<string>("");
  const headers = new Headers({
    "Accept": "application/json",
    "Content-Type": "application/json",
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:78.0) Gecko/20100101 Firefox/78.0"
  });

  const fetchEventsUrl = async (url: any) => {
    const response: any = await axios.get(url ? url : eventUrl);
    setEvents(response.data.data);
    if (response.data.meta.next)
      setNextEvents(response.data.meta.next);
    if (response.data.meta.previous)
      setPreviousEvents(response.data.meta.previous);
    console.log("Response events unstated", response.data);
    return response.data;
  }

  function countryDataGraph(data: any, country: string, caseType: string, dateTo: string) {
    let resultCases: any[] = []
    let resultDates: any[] = []
    if (data.length > 0) {
      data.forEach((item: any) => {
        if ((moment(item.Date).isAfter(dateTo))) {
          resultCases.push(item.Cases);
          resultDates.push(moment(item.Date).format('YYYY/MM/DD'));
        }
      })
      let resultCasesDiff: any[] = _.map(resultCases, function (e: any, i: any) {
        return (resultCases[i + 1] - e) < 0 ? 0 : (resultCases[i + 1] - e)
      });
      resultCasesDiff.pop();
      resultCases.pop();
      resultDates.pop();
      setDataDiff(resultCasesDiff);
      setData(resultCases);
      setLabels(resultDates);
    }
  }

  // const response = await fetch("https://sampo.thl.fi/pivot/prod/en/epirapo/covid19case/fact_epirapo_covid19case.json", {
  const getDataCovid = async () => {
    try {
      const country: string = 'finland';
      const caseType: string = 'confirmed';
      const dateTo: string = `${moment().subtract(3, 'months').format()}`
      await fetch(`https://api.covid19api.com/country/${country}/status/${caseType}/live?from=${dateTo}&to=${moment().format('YYYY-MM-DDT00:00:00')}`, {
        method: 'GET',
        redirect: 'follow',
        headers: headers
      })
        .then((response: any) => response.json()).then((res) => {
          countryDataGraph(res, country, caseType, dateTo);// cleaning data for ChartJS
        }).catch(err => alert(err));
    } catch (err) {
      console.error(err.message);
    }
  }

  return {
    data,
    dataDiff,
    labels,
    headers,
    events,
    nextEvents,
    previousEvents,
    getDataCovid,
    fetchEventsUrl,
    setEventUrl,
    setNextEvents,
    setPreviousEvents,
  };
}
export const StoreContainer = createContainer(useStore)
