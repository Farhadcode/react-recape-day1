
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import AuthProvider from "./contexts/AuthProvider";
import Booking from "./Pages/Booking/Booking/Booking";
import Home from './Pages/Home/Home/Home';
import Login from "./Pages/Login/Login/Login";
import NotFound from "./Pages/NotFound/NotFound";
import Header from "./Pages/Shared/Header/Header";
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import AddService from "./Pages/AddService/AddService";
import ManageServise from "./Pages/Booking/Booking/ManageServise/ManageServise";



function App() {
  return (
    <AuthProvider>
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
          <PrivateRoute path="/booking/:serviceId">
            <Booking></Booking>
          </PrivateRoute>
          <Route path="/addServise">
            <AddService></AddService>
          </Route>
          <Route path="/manageServise">
            <ManageServise></ManageServise>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>

      </Router>
    </AuthProvider>
  );
}

export default App;
