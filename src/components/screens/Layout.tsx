import React from 'react'
import SideBar from '../template/SideBar';
import Footer from '../template/Footer';
import NavBar from '../template/NavBar';

// Component Layout (naveBar, Sidebar, mainComponent and Footer)
export default function Layout(props: any) {

  return (
    <div>
      {/* header */}
      <NavBar />

      {/* left bar */}
      <SideBar />
      <div className="main-panel mt-30">

      {/* main view */}
        {props.children}
      </div>

      {/* footer with signature */}
      <Footer />
    </div >
  )
}
