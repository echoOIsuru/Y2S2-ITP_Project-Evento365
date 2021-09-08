//import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch}from 'react-router-dom';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListBookingComponent from './components/ListBookingComponent';
import CreateBookingComponent from './components/CreateBookingComponent';
import UpdateBookingComponent from './components/UpdateBookingComponent';
import ViewBookingComponent from './components/ViewBookingComponent';
import SuccessBooking from './components/SuccessBooking';
import ListLocationComponent from './components/ListLocationComponent';


function App() {
  return (
    <div className="bg-image" 
    style={{backgroundImage: "url('https://thumbs.dreamstime.com/b/wedding-floral-decorative-vintage-background-ecru-bege-wedding-floral-decorative-vintage-background-ecru-bege-pale-wallpaper-119328289.jpg')"}} >

    <Router>
          <HeaderComponent/> 
            <div className="container">
              <Switch>
                <Route path ="/" exact component = {ListBookingComponent} ></Route>
                <Route path ="/bookings" component = {ListBookingComponent} ></Route>
                <Route path ="/add-bookings/:id" component = {CreateBookingComponent}></Route>
                <Route path ="/update-bookings/:id" component = {UpdateBookingComponent}></Route>
                <Route path ="/view-bookings/:id" component = {ViewBookingComponent}></Route>
                <Route path ="/success-booking" component = {SuccessBooking}></Route>
                <Route path ="/locations" component = {ListLocationComponent}></Route>
              </Switch>
            </div>
          <FooterComponent/> 
      </Router>
    </div>
  );
}

export default App;
