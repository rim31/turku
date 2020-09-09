import React, { useEffect, useState } from 'react';
import FetchEventsTurku from '../api/FetchEventsTurku';
import { StoreContainer } from '../Store';



export default function ListEvents() {
  const unstated = StoreContainer.useContainer();
  const [allEvents, setAllEvents] = useState<any>(unstated.events)
  const [query, setQuery] = useState<string>("")
  const [url, setUrl] = useState<string>("https://api.turku.fi/linkedevents/v1/event/?page=1")
  const [page, setPage] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(false)


  const getAllEvents = async (url: any) => {
    setLoading(true)
    const res: any = await FetchEventsTurku(url);
    if (res) {
      if (res.data.meta.next)
        unstated.setNextEvents(res.data.meta.next);
      if (res.data.meta.previous)
        unstated.setPreviousEvents(res.data.meta.previous);
      setAllEvents(res.data.data);
    }
    setUrl(url);
    let page: string; // set page number according url query
    query ? page = url.match(/=(.*)&q/) : page = url.match(/=(.*)/);
    if (page != null)
      page = (page[1]);
    setPage(page ? page : "1");
    setLoading(false)
  }

  const search = async (e: any) => {
    if (e.key === "Enter") {
      if (query.trim()) {
        getAllEvents('https://api.turku.fi/linkedevents/v1/search/?type=event&q=' + query)
      } else {
        getAllEvents('https://api.turku.fi/linkedevents/v1/event/?page=1')
        setQuery('');
      }
    }
  }



  useEffect(() => {
    setLoading(true);
    if (unstated.events.length === 0)
      getAllEvents(url);
    setLoading(false);
    // eslint-disable-next-line
  }, [])

  const parseHtml = (htmlString: any) => {
    if (htmlString) {
      let res: any = htmlString.replaceAll('<p>', '').replaceAll('<br>', '').replaceAll('</br>', '\n').replaceAll('</p>', '\n');
      return (res);
    }
  }

  return (
    <div className="content">
      {/* <div style={{ backgroundImage: "url(" + "turku/images/turku.png" + ")", backgroundPosition: 'center' }}> */}
      <div className="card ">
        <div className="card-header">
          <h1 className=" card-title text-center pt-1">Events in TURKU</h1>
        </div>
        <div className="text-center">
          <button type="button" className="btn btn-default btn-sm mr-1" onClick={() => getAllEvents(unstated.previousEvents)}>Previous</button>
          <span>Page {page}</span>
          <button type="button" className="btn btn-default btn-sm ml-1" onClick={() => getAllEvents(unstated.nextEvents)}>Next</button>
        </div>
        <div className="input-group-prepend mb-3 pl-2 pr-2">
          <input type="text" className="form-control border search" placeholder="Search an event in Turku..." value={query}
            onChange={(e) => setQuery(e.target.value)} aria-label="search events" aria-describedby="events" onKeyPress={search} />
          {/* {query.trim() && (
            <button className='text-clear' onClick={() => setQuery('')} style={{ borderRadius: '50%', height: '2em' }}>X</button>
          )} */}
        </div>
      </div>
      <div className="d-flex row">
        {loading && (<div className="col-12 text-center"><img height='50' width='50' src='turku/images/loading.gif' alt='LOADING' /></div>)}
        {allEvents ?
          allEvents.map((event: any, i: number) =>
            (<div key={i} className="col-lg-4 col-md-6 col-sm-6 ">
              <div className="card clearfix" >
                {event.images && (event.images.length > 0 ?
                  <img className="card-img-top img-fluid " src={event.images[0].url} alt="event" style={{ width: "100%", height: "15vw", objectFit: 'cover' }} />
                  : <img className="card-img-top img-fluid " src='turku/images/logo.png' alt="nothing" style={{ height: "15vw", objectFit: 'cover' }} />
                )}
                <div className="card-block">
                  <div className="card-body">
                    <h5 className="card-title">{event.name ? event.name.fi : 'no name'}</h5>
                    <h5 className="card-title">{event.end_time ? event.end_time.substr(0, 10) : 'no date'}</h5>
                    {event.description &&
                      (<>
                        <button type="button" className="btn btn-default btn-sm" data-toggle="collapse" data-target={`#detail_event${i}`} >{event.description.fi ? "Details" : "No details"}</button>
                        <div id={`detail_event${i}`} className="collapse card-text">
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
            <p>Loading</p>
            <img src="turku/images/logo.png" alt="loading" />
          </div>)}
      </div>
    </div >
  )
}


// {
//   "id": "775776",
//   "location": {
//       "@id": "https://api.turku.fi/linkedevents/v1/place/1000775776/"
//   },
//   "keywords": [
//       {
//           "@id": "https://api.turku.fi/linkedevents/v1/keyword/petreliuksenuimahalli/"
//       },
//       {
//           "@id": "https://api.turku.fi/linkedevents/v1/keyword/petreliksenvesijumpat/"
//       }
//   ],
//   "super_event": {
//       "@id": "https://api.turku.fi/linkedevents/v1/event/775766/"
//   },
//   "event_status": "EventScheduled",
//   "external_links": [],
//   "offers": [
//       {
//           "is_free": false,
//           "info_url": null,
//           "price": {
//               "fi": "<p>Sisäänpääsymaksu (ei Seniori/Kimmokeranneke) + ohjausmaksu 2,50 euroa</p>"
//           },
//           "description": null
//       }
//   ],
//   "data_source": "turku",
//   "publisher": "ytj:0204819-8",
//   "sub_events": [],
//   "in_language": [],
//   "audience": [],
//   "custom_data": null,
//   "created_time": "2020-08-26T11:00:03.813880Z",
//   "last_modified_time": "2020-08-26T11:01:27.403200Z",
//   "date_published": null,
//   "start_time": "2020-11-03T08:30:00Z",
//   "end_time": "2020-11-03T09:15:00Z",
//   "super_event_type": null,
//   "info_url": null,
//   "location_extra_info": null,
//   "name": {
//       "fi": "Reipas vesijumppa"
//   },
//   "short_description": null,
//   "description": {
//       "fi": "<p>Reipasvauhtinen vesijumppa, jossa voit jumpata joko matalassa tai syvässä vedessä. Veden syvyys 1,60-2,20 m. Käytetään tarvittaessa kelluttavaa vesijuoksuvyötä ja/tai muita vesijumppavälineitä. Sopii hieman reippaampaa treeniä kaipaavalle.</p>\n<p>Huom! Jumppapaikka varattava ennakkoon.</p>\n"
//   },
//   "provider": null,
//   "@id": "https://api.turku.fi/linkedevents/v1/event/775776/",
//   "@context": "http://schema.org",
//   "@type": "Event/LinkedEvent",
//   "images": [
//       {
//           "id": 13281,
//           "license": "event_only",
//           "name": "",
//           "created_time": "2019-08-13T06:44:47.459211Z",
//           "last_modified_time": "2019-08-13T06:44:47.459227Z",
//           "url": "http://www.turku.fi/sites/default/files/thumbnails/image/syvajumppavalineita_3.jpg",
//           "cropping": "",
//           "photographer_name": null,
//           "data_source": "turku",
//           "publisher": "ytj:0204819-8",
//           "@id": "https://api.turku.fi/linkedevents/v1/image/13281/",
//           "@context": "http://schema.org",
//           "@type": "ImageObject"
//       }
//   ]
// },