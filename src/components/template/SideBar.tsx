import React from 'react'

export default function SideBar(props: any) {
  return (
    <div className="sidebar">
      <div className="sidebar-wrapper">
        <div className="logo">
          <div onClick={() => props.setPage("turku")}>
            <img src='/turku/logo.png' alt="meow" />
          </div>
        </div>
        <ul className="nav" style={{ fontSize: "2em" }}>
          <li className="tim-icons icon-pin " onClick={() => props.setPage("place")}>
            <i className="tim-icons icon-pin"></i>
            <div className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" style={{ color: 'white', textDecoration: 'inherit', paddingLeft: '15px', fontSize: "1em" }} >Places</div>
          </li>
          <li className="tim-icons icon-pin " onClick={() => props.setPage("event")}>
            <i className="tim-icons icon-pin"></i>
            <div className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" style={{ color: 'white', textDecoration: 'inherit', paddingLeft: '15px', fontSize: "1em" }} >Events</div>
          </li>
          <li className="tim-icons icon-pin " onClick={() => props.setPage("covid")}>
            <i className="tim-icons icon-chart-pie-36"></i>
            <div className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" style={{ color: 'white', textDecoration: 'inherit', paddingLeft: '15px', fontSize: "1em" }} >Covid19</div>
          </li>
          <li className="tim-icons icon-pin " onClick={() => props.setPage("name")}>
            <i className="tim-icons icon-pin"></i>
            <div className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" style={{ color: 'white', textDecoration: 'inherit', paddingLeft: '15px', fontSize: "1em" }} >Popular</div>
          </li>
        </ul>
      </div>
    </div>
  )
}
