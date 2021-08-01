//import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch}from 'react-router-dom';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListBookingComponent from './components/ListBookingComponent';
import CreateBookingComponent from './components/CreateBookingComponent';

function App() {
  return (
    <div>
      <Router>
          <HeaderComponent/> 
            <div className="container">
              <Switch>
                <Route path ="/" exact component = {ListBookingComponent} ></Route>
                <Route path ="/bookings" component = {ListBookingComponent} ></Route>
                <Route path ="/add-bookings" component = {CreateBookingComponent}></Route>
          
              </Switch>
            </div>
          <FooterComponent/>
      </Router>
    </div>
  );
}

export default App;
