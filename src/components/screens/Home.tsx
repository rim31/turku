import React, { useEffect } from 'react';
import CardsEvent from '../template/cards/CardsEvent';
import CardsDrinks from '../template/cards/CardsDrinks';
import CardsName from '../template/cards/CardsName';
import CardsCovid from '../template/cards/CardsCovid';
import { StoreContainer } from '../Store';

export default function Home(props: any) {
  const unstated = StoreContainer.useContainer();

  useEffect(() => {
    unstated.fetchEventsUrl(null);
    unstated.getDataCovid();
    // eslint-disable-next-line
  }, [])
  return (
    <div className="content">
      <div className="alert alert-dismissable border border-default text-center" style={{ backgroundImage: "url(/turku/images/turku.jpg)", backgroundPosition: 'center', backgroundSize: '100%', backgroundRepeat: 'no-repeat' }}>
        <button className="close mb-0" type="button" data-dismiss="alert">×</button>
        <p className="pt-2 text-capitalize" style={{ fontSize: '2em', color: 'white', fontWeight: 400, textShadow: "1px 1px black" }}>Turku DashBoard : Top OpenData</p>
      </div>
      <div className='d-flex row'>
        <div className="col-lg-6 col-md-6 col-sm-6" onClick={() => props.setPage("event")}><CardsEvent /></div>
        <div className="col-lg-6 col-md-6 col-sm-6" onClick={() => props.setPage("place")}><CardsDrinks /></div>
        <div className="col-lg-6 col-md-6 col-sm-6" onClick={() => props.setPage("covid")}><CardsCovid /></div>
        <div className="col-lg-6 col-md-6 col-sm-6" onClick={() => props.setPage("name")}><CardsName /></div>
      </div>
    </div>
  );

}