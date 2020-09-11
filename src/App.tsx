import React from 'react';
import './App.css';
import Home from "./components/screens/Home";
import Covid from "./components/screens/Covid";
import TableCsvPlaceAlcohol from "./components/template/TableCsvPlaceAlcohol";
import TableCsvName from "./components/template/TableCsvName";
import ListImages from "./components/template/ListImages";
import SideBar from './components/template/SideBar';
import Footer from './components/template/Footer';
import NavBar from './components/template/NavBar';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { StoreContainer } from "./components/Store"

function App() {
  const [page, setPage] = React.useState<string>("turku")
  React.useEffect(() => {
    console.log('page : ', page)
  }, [page])
  return (
    // <Router>
    <StoreContainer.Provider>
      <div>
        <NavBar setPage={setPage} />
        <SideBar setPage={setPage} />
        <div className="main-panel mt-30">
          {page === 'event' && (<ListImages />)}
          {page === 'name' && (<TableCsvName />)}
          {page === 'place' && (<TableCsvPlaceAlcohol />)}
          {page === 'covid' && (<Covid />)}
          {page === 'turku' && (<Home setPage={setPage} />)}
          {/* <Switch>
              <Route path={'*'} ><NotFound /></Route>
            </Switch> */}
        </div>
        <Footer />
      </div >
    </StoreContainer.Provider>
    // </Router >
  );
}
// function NotFound() {
//   return (
//     <h1>Page Not Found</h1>
//   )
// }

export default App;
