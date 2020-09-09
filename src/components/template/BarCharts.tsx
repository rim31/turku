import React from 'react';
import { Bar } from 'react-chartjs-2';

export default function LinearChart(props: any) {
  const data = {
    labels: props.labels,
    datasets: [
      {
        label: `COVID-19 confirmed cases - last 2 months`,
        data: props.data,
        backgroundColor: "lightgreen",
        color: "rgba(009,009,250,0.75)",
        hoverBackgroundColor: "rgb(255,255,153,1)",
      }
    ]
  }
  const options = {
    legend: {
      display: true,
      fontColor: 'white'
    },
    title: {
      display: true,
      text: `Finland - Covid19 - last 2 months`,
      fontColor: 'white',
    },
    scales: {
      yAxes: [{
        ticks: {
          fontColor: "white",
          fontSize: 18,
          color: "rgba(2, 2, 2, 0.1)"
        }
      }],
      xAxes: [{
        ticks: {
          fontColor: "white",
          fontSize: 14,
        }
      }]
    }
  }
  return (
    <div style={{ backgroundColor: "#555555" }}>
      <Bar data={data} options={options} />
    </div>
  );
}
