import React, { CSSProperties } from 'react'
import { Link } from 'react-router-dom';

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

export default function NavBar() {

  return (
    <div className="navbar navbar-expand-lg navbar-absolute" style={styles.myHeader}>
      <Link className="d-flex inline" to="/turku" ><img style={{ zIndex: 10 }} src="/turku/images/meow.png" height="40" alt="meow logo" />
        <img style={{ zIndex: 10 }} src="/turku/apple-icon-114x114.png" height="36" alt="meow logo" />
      </Link>
      <div id="home" className="container-fluid">
        <div className="navbar-wrapper align-middle" style={{ position: 'fixed', float: 'left', top: 0, }}>
          <div className="navbar-toggle d-inline">
            <span className="navbar-toggler navbar-absolute" data-toggle="collapse" data-target="#navigation">
              <span className="navbar-toggler-bar bar1"> </span>
              <span className="navbar-toggler-bar bar2"> </span>
              <span className="navbar-toggler-bar bar3"> </span>
            </span>
          </div>
        </div>
        <div className="collapse navbar-collapse" id="navigation" style={{ backgroundColor: "black" }} >
          <ul className="navbar-nav ml-auto" data-toggle="collapse" data-target="#navigation">
            <li className="dropdown nav-item" ><Link className="d-lg-none" to="/turku" >Home <img className="" src="turku/images/meow.png" height="30" alt="meow logo" /></Link></li>
            <li className="dropdown nav-item" ><Link className="d-lg-none" to="/event" >Events</Link></li>
            <li className="dropdown nav-item" ><Link className="d-lg-none" to="/place" >Places</Link></li>
            <li className="dropdown nav-item" ><Link className="d-lg-none" to="/covid" >Covid19</Link></li>
            <li className="dropdown nav-item" ><Link className="d-lg-none" to="/name" >Popularity</Link></li>
          </ul>
        </div>
      </div>
    </div >
  )
}
