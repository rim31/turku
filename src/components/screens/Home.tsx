import React, { useEffect } from 'react';
import CardsEvent from '../template/cards/CardsEvent';
import CardsDrinks from '../template/cards/CardsDrinks';
import CardsName from '../template/cards/CardsName';
import CardsCovid from '../template/cards/CardsCovid';
import { Link } from 'react-router-dom';
import { StoreContainer } from '../Store';

export default function Home() {
  const unstated = StoreContainer.useContainer();

  useEffect(() => {
    unstated.fetchEventsUrl(null);
    unstated.getDataCovid();
    // eslint-disable-next-line
  }, [])
  return (
    <div className="content">
      <div className="alert alert-dismissable border border-default text-center" style={{ backgroundImage: "url(turku/images/turku.jpg)", backgroundPosition: 'center', backgroundSize: '100%', backgroundRepeat: 'no-repeat' }}>
        <button className="close mb-0" type="button" data-dismiss="alert">×</button>
        <p className="pt-2 text-capitalize" style={{ fontSize: '2em', color: 'white', fontWeight: 400, textShadow: "1px 1px black" }}>Turku DashBoard : Top OpenData</p>
      </div>
      <div className='d-flex row'>
        <Link className="col-lg-6 col-md-6 col-sm-6" to="/event"><CardsEvent /></Link>
        <Link className="col-lg-6 col-md-6 col-sm-6" to="/place"><CardsDrinks /></Link>
        <Link className="col-lg-6 col-md-6 col-sm-6" to="/covid"><CardsCovid /></Link>
        <Link className="col-lg-6 col-md-6 col-sm-6" to="/name"><CardsName /></Link>
      </div>
    </div>
  );

}