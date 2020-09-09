import React from 'react'

export default function CardsEvent() {
  return (
    <div className="card card-chart">
      <div className="card-header text-center">
        <h3 className="card-title "><i className="tim-icons icon-bell-55 text-primary"></i>Events in Turku</h3>
        <h5 className="card-category">Find all events in Turku</h5>
      </div>
      <div className="card-body">
        <div className="chart-area text-center">
          <img src="turku/images/event.png" alt="event" />
        </div>
      </div>
    </div>
  )
}
