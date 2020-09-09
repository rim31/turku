import React from 'react'

export default function CardsName() {
  return (
    <div className="card card-chart">
      <div className="card-header text-center">
        <h3 className="card-title "><i className="tim-icons icon-bell-55 text-primary"></i>Famous name</h3>
        <h5 className="card-category">Find out if your name or family name popular in Finland </h5>
      </div>
      <div className="card-body">
        <div className="chart-area text-center">
          <img src="/turku/images/name.png" alt="famous name" />
        </div>
      </div>
    </div>
  )
}
