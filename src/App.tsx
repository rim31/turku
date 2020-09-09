import React from 'react';
import './App.css';
import Dashboard from "./components/screens/Dashboard";
import Home from "./components/screens/Home";
import Covid from "./components/screens/Covid";
import Layout from "./components/screens/Layout";
import Forecast from "./components/screens/Forecast";
import TableCsvPlaceAlcohol from "./components/template/TableCsvPlaceAlcohol";
import TableCsvName from "./components/template/TableCsvName";
import ListImages from "./components/template/ListImages";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { StoreContainer } from "./components/Store"

function App() {

  return (
    <Router>
      <StoreContainer.Provider>
        <Layout>
          <Switch>
            <Route exact path={'/turku'} component={Home} />
            <Route exact path={'/forecast'} component={Forecast} />
            <Route exact path={'/dashboard'} component={Dashboard} />
            <Route exact path={'/place'} component={TableCsvPlaceAlcohol} />
            <Route exact path={'/event'} component={ListImages} />
            <Route exact path={'/name'} component={TableCsvName} />
            <Route exact path={'/covid'} component={Covid} />
            <Route path={'*'} ><NotFound /></Route>
          </Switch>
        </Layout>
      </StoreContainer.Provider>
    </Router >
  );
}
function NotFound() {
  return (
    <h1>Page Not Found</h1>
  )
}

export default App;
