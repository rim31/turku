import React from 'react'
import { Link } from 'react-router-dom';

export default function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebar-wrapper">
        <div className="logo">
          <Link to="/" >
            <img src='/logo.png' alt="meow" />
          </Link>
        </div>
        <ul className="nav" style={{ fontSize: "2em" }}>
          <li>
            <i className="tim-icons icon-pin"></i>
            <Link className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" style={{ color: 'white', textDecoration: 'inherit', paddingLeft: '15px', fontSize: "1em" }} to="/place" >Places</Link>
          </li>
          <li>
            <i className="tim-icons icon-pin"></i>
            <Link className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" style={{ color: 'white', textDecoration: 'inherit', paddingLeft: '15px', fontSize: "1em" }} to="/event" >Events</Link>
          </li>
          <li className="tim-icons icon-pin ">
            <i className="tim-icons icon-chart-pie-36"></i>
            <Link className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" style={{ color: 'white', textDecoration: 'inherit', paddingLeft: '15px', fontSize: "1em" }} to="/covid" >Covid19</Link>
          </li>
          <li>
            <i className="tim-icons icon-pin"></i>
            <Link className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" style={{ color: 'white', textDecoration: 'inherit', paddingLeft: '15px', fontSize: "1em" }} to="/name" >Popular</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
