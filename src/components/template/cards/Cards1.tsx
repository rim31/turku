import React from 'react'

export default function Cards1() {
  return (
    <div className="card card-chart">
      <div className="card-header">
        <h5 className="card-category">Total Shipments</h5>
        <h3 className="card-title"><i className="tim-icons icon-bell-55 text-primary"></i> 763,215</h3>
      </div>
      <div className="card-body">
        <div className="chart-area text-center">
          <img src="turku/images/drinks.png" alt="drinks" />
          <canvas id="chartLinePurple1"></canvas>
        </div>
      </div>
    </div>
  )
}
