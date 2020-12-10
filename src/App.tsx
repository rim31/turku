import React from 'react';
import './App.css';
import Home from "./components/screens/Home";
import Covid from "./components/screens/Covid";
import TableCsvPlaceAlcohol from "./components/template/TableCsvPlaceAlcohol";
import TableCsvName from "./components/template/TableCsvName";
import ListEvents from "./components/template/ListEvents";
import SideBar from './components/template/SideBar';
import Footer from './components/template/Footer';
import NavBar from './components/template/NavBar';
import { StoreContainer } from "./components/Store"// Store : redux unstated-next

function App() {
  const [page, setPage] = React.useState<string>("turku") // variable to dispqly the main content of the page
  return (
    <StoreContainer.Provider>
      <div>
        {/* header, can change page when mobile with menu burger with setPage*/}
        <NavBar setPage={setPage} /> 

        {/* left bar, can change page when desktop  with setPage*/}
        <SideBar setPage={setPage} />

        {/* display one this component according to the setPage choosen */}
        <div className="main-panel mt-30">
          {page === 'event' && (<ListEvents />)}
          {page === 'name' && (<TableCsvName />)}
          {page === 'place' && (<TableCsvPlaceAlcohol />)}
          {page === 'covid' && (<Covid />)}
          {page === 'turku' && (<Home setPage={setPage} />)}
        </div>

        {/* footer for signature to hire me */}
        <Footer />
      </div >
    </StoreContainer.Provider>
  );
}

export default App;
