import React, { CSSProperties } from 'react'

export interface StylesDictionary {
  [Key: string]: CSSProperties;
}

const styles: StylesDictionary = {
  myHeader: {
    display: 'flex',
    justifyContent: 'center',
    height: "4em",
    width: '100%',
    backgroundColor: '#525f7f',
    top: 0,
    zIndex: 10,
    position: 'fixed',
    verticalAlign: 'middle',
    border: 'solid 1px'
  }
}

// NAVBAR  : menu and menu berger to navigate on responsive mode
export default function NavBar(props: any) {

  return (
    <div className="navbar navbar-expand-lg navbar-absolute" style={styles.myHeader}>
      {/* logo and title - you can go to hte home page clicking on it*/}
      <div className="d-flex inline" onClick={() => props.setPage("turku")}><img style={{ zIndex: 10 }} src="/turku/images/meow.png" height="40" alt="meow logo" />
        <img style={{ zIndex: 10 }} src="/turku/apple-icon-114x114.png" height="36" alt="meow logo" />
      </div>

      <div id="home" className="container-fluid">
        <div className="navbar-wrapper align-middle" style={{ position: 'fixed', float: 'left', top: 0, }}>

          <div className="navbar-toggle d-inline">
            {/* menue burger for mobile */}
            <span className="navbar-toggler navbar-absolute" data-toggle="collapse" data-target="#navigation">
              <span className="navbar-toggler-bar bar1"> </span>
              <span className="navbar-toggler-bar bar2"> </span>
              <span className="navbar-toggler-bar bar3"> </span>
            </span>
          </div>
        </div>

        {/* shortcut */}
        <div className="collapse navbar-collapse" id="navigation" style={{ backgroundColor: "black" }} >
          <ul className="navbar-nav ml-auto" data-toggle="collapse" data-target="#navigation">

            {/* redirect to homepage */}
            <li className="dropdown nav-item" ><button className="homeCard d-lg-none" style={{ all: "unset" }} onClick={() => props.setPage("turku")}>Home <img className="" src="/turku/images/meow.png" height="30" alt="meow logo" /></button></li>
            {/* redirect to event */}
            <li className="dropdown nav-item" ><button className="homeCard d-lg-none" style={{ all: "unset" }} onClick={() => props.setPage("event")} >Events</button></li>
            {/* redirect to places */}
            <li className="dropdown nav-item" ><button className="homeCard d-lg-none" style={{ all: "unset" }} onClick={() => props.setPage("place")} >Places</button></li>
            {/* redirect to covid 19 */}
            <li className="dropdown nav-item" ><button className="homeCard d-lg-none" style={{ all: "unset" }} onClick={() => props.setPage("covid")} >Covid19</button></li>
            {/* redirect to name poåpularity */}
            <li className="dropdown nav-item" ><button className="homeCard d-lg-none" style={{ all: "unset" }} onClick={() => props.setPage("name")} >Popularity</button></li>
          </ul>
        </div>
      </div>
    </div >
  )
}
