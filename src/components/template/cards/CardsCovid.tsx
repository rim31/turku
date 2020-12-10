import React from 'react'
import { StoreContainer } from '../../Store'; // redux - unstated-next

export default function CardsCovid() {
  const unstated = StoreContainer.useContainer();

  // component for home page : covid19 Card
  return (
    <div className="card card-chart homeCard">
      <div className="card-header text-center">
        {/* TITLE */}
        <h3 className="card-title "><i className="tim-icons icon-bell-55 text-primary"></i>Covid 19 Stats</h3>

        {/* sub Title extra info */}
        <h2 className="card-category">Evolution Covid19 in Finland - last info : {unstated.lastCases} new cases</h2>
      </div>

      {/* my LOGO covid19 */}
      <div className="card-body">
        <div className="chart-area text-center">
          <img src="/turku/images/virus.png" alt="virus" />
        </div>
      </div>
    </div>
  )
}
