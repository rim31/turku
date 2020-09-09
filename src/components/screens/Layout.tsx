import React from 'react'
import SideBar from '../template/SideBar';
import Footer from '../template/Footer';
import NavBar from '../template/NavBar';


export default function Layout(props: any) {

  return (
    <div>
      <NavBar />
      <SideBar />
      <div className="main-panel mt-30">
        {props.children}
      </div>
      <Footer />
    </div >
  )
}
