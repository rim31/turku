import React from 'react'

export default function CardsDrinks() {
  return (
    <div className="card card-chart">
      <div className="card-header text-center">
        <h3 className="card-title "><i className="tim-icons icon-bell-55 text-primary"></i>Top drinks place</h3>
        <h5 className="card-category">Approval places for drinking in Finland</h5>
      </div>
      <div className="card-body">
        <div className="chart-area text-center">
          <img src="/turku/images/drinks.png" alt="drinks" />
        </div>
      </div>
    </div>
  )
}
