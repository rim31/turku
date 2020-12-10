import React from 'react'

// component card Event for homepage
export default function CardsEvent() {
  return (
    <div className="card card-chart homeCard">
      <div className="card-header text-center">
        {/* Title */}
        <h3 className="card-title "><i className="tim-icons icon-bell-55 text-primary"></i>Events in Turku</h3>

        {/* Sub Title */}
        <h2 className="card-category">Find all events in Turku</h2>
      </div>
      <div className="card-body">

        {/* my LOGO of events */}
        <div className="chart-area text-center">
          <img src="/turku/images/event.png" alt="event" />
        </div>
      </div>
    </div>
  )
}
