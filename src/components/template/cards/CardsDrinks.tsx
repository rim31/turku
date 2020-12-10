import React from 'react'

// component card Drink place for homepage
export default function CardsDrinks() {
  return (
    <div className="card card-chart homeCard">
      <div className="card-header text-center">

        {/* Title */}
        <h3 className="card-title "><i className="tim-icons icon-bell-55 text-primary"></i>Top drinks place</h3>

        {/* Sub Title */}
        <h2 className="card-category">Approval places for drinking in Finland</h2>
      </div>

      {/* my LOGO of drinks */}
      <div className="card-body">
        <div className="chart-area text-center">
          <img src="/turku/images/drinks.png" alt="drinks" />
        </div>
      </div>
    </div>
  )
}
