
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Booking from "./Pages/Booking/Booking/Booking";
import Home from './Pages/Home/Home/Home';
import Login from "./Pages/Login/Login/Login";
import NotFound from "./Pages/NotFound/NotFound";
import Header from "./Pages/Shared/Header/Header";



function App() {
  return (
    <Router>
      <Header> </Header>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/booking/:serviceId">
          <Booking></Booking>
        </Route>

        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>

    </Router>
  );
}

export default App;
