import React from 'react'

export default function CardsCovid() {
  return (
    <div className="card card-chart">
      <div className="card-header text-center">
        <h3 className="card-title "><i className="tim-icons icon-bell-55 text-primary"></i>Covid 19 Stats</h3>
        <h5 className="card-category">Evolution of coronavirus' contamination in Finland</h5>
      </div>
      <div className="card-body">
        <div className="chart-area text-center">
          <img src="/turku/images/virus.png" alt="virus" />
        </div>
      </div>
    </div>
  )
}
