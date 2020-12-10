import React, { useEffect, useState } from 'react';
import FetchEventsTurku from '../api/FetchEventsTurku';
import { StoreContainer } from '../Store';


// Component list of Event in Turku
export default function ListEvents() {
  const unstated = StoreContainer.useContainer();
  const [allEvents, setAllEvents] = useState<any>(unstated.events) // all events
  const [query, setQuery] = useState<string>("") // search variable
  const [url, setUrl] = useState<string>("https://api.turku.fi/linkedevents/v1/event/?page=1") // url for api
  const [page, setPage] = useState<string>("") // page of research
  const [loading, setLoading] = useState<boolean>(true) // loading variable

  // {/**
  // getAllEvents function : fetch the url of event : url change according to the research or page
  // regex to fing the page and display the good page
  // @params url: string 
  // @return - : set allEvents in the hook state
  // */}
  const getAllEvents = async (url: any) => {
    setLoading(true)
    const res: any = await FetchEventsTurku(url);
    if (res) {
      if (res.data.meta.next)
        // setting next page url if exists from API
        unstated.setNextEvents(res.data.meta.next);
      if (res.data.meta.previous)
        // setting previous page url if exists from API
        unstated.setPreviousEvents(res.data.meta.previous);
      setAllEvents(res.data.data);
    }
    // setting current page url if exists from API
    setUrl(url);
    let page: string; // set page number according url query
    // regulare expression to get the current page number
    query ? page = url.match(/=(.*)&q/) : page = url.match(/=(.*)/);
    if (page != null)
      page = (page[1]);
    // set by default page to number 1 if dosent exist for the front
    setPage(page ? page : "1");
    // cancel loading after getting all events
    setLoading(false)
  }

  // {/**
  // search function : use getAllEvents() pressing on enter with the query
  // @params e: any , query
  // */}
  const search = async (e: any) => {
    // Search  :pressing on Enter keyboard
    if (e.key === "Enter") {
      if (query.trim()) {
        // search withc the string query
        getAllEvents('https://api.turku.fi/linkedevents/v1/search/?type=event&q=' + query)
      } else {
        getAllEvents('https://api.turku.fi/linkedevents/v1/event/?page=1')
        setQuery('');
      }
    }
  }


  // {/**
  // charging data when loading the page
  // */}
  useEffect(() => {
    setLoading(true);
    if (unstated.events.length === 0)
      getAllEvents(url);
    // disable loading gif after loading the events
    setLoading(false);
    // eslint-disable-next-line
  }, [])

  // have to parse problematic html data from Turku event
  const parseHtml = (htmlString: any) => {
    const regex1: any = /<p>/g;
    const regex2: any = /<\/p>/g;
    const regex3: any = /<br>/g;
    const regex4: any = /<\/br>/g;
    const regex5: any = /<br \/>/g;
    const regex6: any = /<li>/g;
    const regex7: any = /<\/li>/g;
    const regex8: any = /<strong>/g;
    const regex9: any = /<\/strong>/g;
    const regex10: any = /<a>/g;
    const regex11: any = /<\/a>/g;
    const toReplace: string = '';
    // the data receive from the API event is strangely in a string html
    if (htmlString) {
      // we get rid of every : <p>, <li>, <br/> ,<a> and <strong>
      let res: any = htmlString
        .replace(regex1, toReplace)
        .replace(regex2, toReplace)
        .replace(regex3, toReplace)
        .replace(regex4, toReplace)
        .replace(regex5, toReplace)
        .replace(regex6, toReplace)
        .replace(regex7, toReplace)
        .replace(regex8, toReplace)
        .replace(regex9, toReplace)
        .replace(regex10, toReplace)
        .replace(regex11, toReplace);
      return (res);
    }
  }

  useEffect(() => {
    //just cancelling loag if the event is really loadd and > 0
    if (allEvents && allEvents.length > 0)
      setLoading(false);
  }, [allEvents])


  return (
    <div className="content">
      <div className="card ">
        {/* TITLE */}
        <div className="card-header">
          <h1 className=" card-title text-center pt-1">Events in TURKU</h1>
        </div>

        {/* BUTTONS and SEARCH BAR */}
        <div className="text-center">

          {/* previous page button if exists */}
          <button type="button" className="btn btn-default btn-sm mr-1" onClick={() => getAllEvents(unstated.previousEvents)}>Previous</button>

          {/* number of the current page */}
          <span>Page {page}</span>

          {/* button of next page if exists */}
          <button type="button" className="btn btn-default btn-sm ml-1" onClick={() => getAllEvents(unstated.nextEvents)}>Next</button>
        </div>

        {/* search input button */}
        <div className="input-group-prepend mb-3 pl-2 pr-2">
          <input type="text" className="form-control border search" placeholder="Search an event in Turku..." value={query}
            onChange={(e) => setQuery(e.target.value)} aria-label="search events" aria-describedby="events" onKeyPress={search} />
        </div>

      </div>

      {/* LIST of Events */}
      <div className="d-flex row">

        {/* loading.gif while waiting data */}
        {loading && (<div className="col-12 text-center full-page-loader"><img height='50' width='50' src='turku/images/logo.png' alt='LOADING' /><h3>LOADING...</h3></div>)}

        {/* display event */}
        {allEvents ?

          // displaying a table of event from the data array received
          allEvents.map((event: any, i: number) =>
            (<div key={i} className="col-lg-4 col-md-6 col-sm-6 ">
              <div className="card clearfix" >

                {/* display the image if exists otherwise the logo */}
                {event.images && (event.images.length > 0 ?
                  <img className="card-img-top img-fluid " src={event.images[0].url} alt="event" style={{ width: "100%", height: "15vw", objectFit: 'cover' }} />
                  // NOTE : there is a bug mistake in the event api cause it give https or http on url images which 
                  : <img className="card-img-top img-fluid " src='turku/images/logo.png' alt="nothing" style={{ height: "15vw", objectFit: 'cover' }} />
                )}

                {/* displayl the date */}
                <div className="card-block">
                  <div className="card-body">

                    {/* title of the event */}
                    <h3 className="card-title">{event.name ? event.name.fi : 'no name'}</h3>

                    {/* end of the event */}
                    <p className="card-title">end at : {event.end_time ? event.end_time.substr(0, 10) : 'no date'}</p>

                    {/* displqy the description */}
                    {event.description &&
                      (<>
                        {/* button to collapse or not the description */}
                        <button type="button" className="btn btn-default btn-sm" data-toggle="collapse" data-target={`#detail_event${i}`} >{event.description.fi ? "Details" : "No details"}</button>
                        <div id={`detail_event${i}`} className="collapse card-text" style={{ color: "white" }}>
                          {event.description ? parseHtml(event.description.fi ? event.description.fi : '') : ''}
                        </div>
                      </>)}
                  </div>
                </div>
              </div>
            </div >)
          )
          :
          (<div>
            {/* display loading while fetching data */}
            <h2>Loading</h2>
            <img src="images/logo.png" alt="loading" />
          </div>)}
      </div>
    </div >
  )
}