import React from 'react';
import SideBar from '../template/SideBar';
import Search from '../template/Search';
import Footer from '../template/Footer';
import NavBar from '../template/NavBar';
import Graph from '../template/Graph';
import TableCsv from '../template/TableCsvPlaceAlcohol';
import Todo from '../template/Todo';
import ListImages from '../template/ListImages';
import Cards from '../template/cards/Cards';
import Cards1 from '../template/cards/Cards1';
import Cards2 from '../template/cards/Cards2';
import Home from './Forecast';

export default function Dashboard() {
  return (
    // <div id="home" className="wrapper">
    <div>
      <SideBar />
      <div className="main-panel">
        <NavBar />
        <Search />
        <div className="content">
          <div className="row">
            <div className="col-lg-12 col-md-12"><TableCsv /></div>
          </div>
          <div className="row">
            <div className="col-12 mb-5"><Home /></div>
          </div>
          <div className="row equal">
            <ListImages />
          </div>
          <div className="row">
            <div className="col-12"><Graph /></div>
          </div>
          <div className="row">
            <div className="col-lg-4"><Cards /></div>
            <div className="col-lg-4"><Cards1 /></div>
            <div className="col-lg-4"><Cards2 /></div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-12"><Todo /></div>
            {/* <div className="col-lg-6 col-md-12"><TableCsv /></div> */}
          </div>
        </div>
        <Footer />
      </div>
    </div >
    // </div>
  );

}