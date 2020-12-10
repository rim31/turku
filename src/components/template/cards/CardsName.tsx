import React from 'react'

// component card Name for homepage
export default function CardsName() {
  return (
    <div className="card card-chart homeCard">
      <div className="card-header text-center">

        {/* Title */}
        <h3 className="card-title "><i className="tim-icons icon-bell-55 text-primary"></i>Famous name</h3>

        {/* Sub Title */}
        <h2 className="card-category">Find out if your name or family name popular in Finland </h2>
      </div>

      {/* my LOGO of name */}
      <div className="card-body">
        <div className="chart-area text-center">
          <img src="/turku/images/name.png" alt="famous name" />
        </div>
      </div>
    </div>
  )
}
