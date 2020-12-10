import React from 'react'

// SIDE BAR : Icon and link to to change pages (using props.setPage from App.tsx)
export default function SideBar(props: any) {
  return (
    <div className="sidebar">
      <div className="sidebar-wrapper">

        {/* click to redirect to homepage*/}
        <div className="logo homeCard">
          <div onClick={() => props.setPage("turku")}>
            {/* LOGO */}
            <img src="/turku/logo.png" alt="meow" />
          </div>
        </div>
        <ul className="nav" style={{ fontSize: "2em" }}>

          {/* Place button sidebar */}
          <li className="tim-icons icon-pin homeCard " onClick={() => props.setPage("place")}>
            <button className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" style={{ all: "unset", color: 'white', textDecoration: 'inherit', paddingLeft: '15px', fontSize: "1em" }} >Places</button>
          </li>

          {/* Event button sidebar */}
          <li className="tim-icons icon-pin homeCard" onClick={() => props.setPage("event")}>
            <button className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" style={{ all: "unset", color: 'white', textDecoration: 'inherit', paddingLeft: '15px', fontSize: "1em" }} >Events</button>
          </li>

          {/* covid19 button sidebar */}
          <li className="tim-icons icon-pin homeCard " onClick={() => props.setPage("covid")}>
            <button className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" style={{ all: "unset", color: 'white', textDecoration: 'inherit', paddingLeft: '15px', fontSize: "1em" }} >Covid19</button>
          </li>

          {/* Name button sidebar */}
          <li className="tim-icons icon-pin homeCard" onClick={() => props.setPage("name")}>
            <button className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" style={{ all: "unset", color: 'white', textDecoration: 'inherit', paddingLeft: '15px', fontSize: "1em" }} >Popular</button>
          </li>
        </ul>
      </div>
    </div>
  )
}
