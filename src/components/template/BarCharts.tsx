import React from 'react';
import { Bar } from 'react-chartjs-2';

// CHART Covid19 - 2months daily updated - using Bar from react-chartjs-2
export default function LinearChart(props: any) {
  const ref: any = React.useRef(null); // reference to get the width size
  const isWindowClient = typeof window === "object"; // to get window size

  const [windowSize, setWindowSize] = React.useState(window.innerWidth) // here under 500px, display turn logo);

  React.useEffect(() => {
    //a handler which will be called on change of the screen resize
    function setSize() {
      setWindowSize(window.innerWidth);
    }
    if (isWindowClient) {
      //register the window resize listener
      window.addEventListener("resize", setSize);
      //unregister the listener on destroy of the hook
      return () => window.removeEventListener("resize", setSize);
    }
  }, [isWindowClient, setWindowSize]);

  React.useEffect(() => {
    // get the size of windows for responsive display on loading page
    setWindowSize(ref.current ? ref.current.offsetWidth : 0);
    // eslint-disable-next-line
  }, []);

  // configuration of the options of the graph(color, label etc...)
  const data = {
    labels: props.labels,
    datasets: [
      {
        // title of the graph
        label: `COVID-19 confirmed cases - last 2 months`,
        // data came from the Store component, it represent the daily update Covid19 situation graph
        data: props.data,
        // color of the bar
        backgroundColor: "lightgreen",
        // other colors
        color: "rgba(009,009,250,0.75)",
        hoverBackgroundColor: "rgb(255,255,153,1)",
      }
    ]
  }
  // options to change the infos of the graph
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
      // option for axis Y - already responsive but can't fit under 500px. Solution => have to turn the phone
      // NOTE !!! if you test on a normal browser, refreshe the page when you rotate the phone screen ;-)
      yAxes: [{
        ticks: {
          fontColor: "white",
          fontSize: 9,
          color: "rgba(2, 2, 2, 0.1)",
          // display axe only if width < 500px
          display: windowSize < 500 ? false : true,
        },
        scaleLabel: {
          // display axe only if width >= 500px
          display: windowSize >= 500 ? false : true,
          color: "rgba(2, 2, 2, 0.1)",
          fontColor: "white",
          labelString: windowSize >= 500 ? '' : 'Rotate ⤵️'
        }
      }],
      // option for axis x
      xAxes: [{
        ticks: {
          fontColor: "white",
          fontSize: 14,
        }
      }],
      responsive: true,
    }
  }
  return (
    <div style={{ backgroundColor: "#555555" }} ref={ref}> {/* ref for the widht size*/}
      
      {/* display a logo to rotate phone when the screen is to small */}
      {windowSize < 500 && (<div style={{ textAlign: "center", color: "white" }}><img src="/turku/images/Use_Landscape_Mode.jpg" height="40" alt="use Landscape Mode" /><span> Turn you device </span></div>)}
      {/* component Graph bar from the library*/}
      <Bar data={data} options={options} />
    </div>
  );
}
