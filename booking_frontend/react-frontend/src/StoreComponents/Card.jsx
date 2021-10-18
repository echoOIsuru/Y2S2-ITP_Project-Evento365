import React, { Component } from "react";
import M from "materialize-css";
import { ToastContainer, toast, Slide } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import { useHistory } from "react-router-dom";
import { Route , withRouter} from 'react-router-dom';





//import "./../App.css";
import "../css/Store.css";


class Card extends Component {
  constructor(props) {
    super(props);
    this.state ={
      all_stores: []
      
      
  }
  }
  
  addItem = (e) => {
    e.preventDefault();
    if (sessionStorage.getItem("cart") === null) {
      sessionStorage.setItem("cart", JSON.stringify([]));
    }
    let currentItem = {
      id: e.target.parentElement.parentElement.childNodes[4].innerText,
      name: e.target.parentElement.parentElement.childNodes[0].innerText,
      price: e.target.parentElement.parentElement.childNodes[2].innerText,
    };
    let currentCart = JSON.parse(sessionStorage.getItem("cart"));
    currentCart.push(currentItem);
    sessionStorage.setItem("cart", JSON.stringify(currentCart));
   // M.toast({ html: "Item has been added to the cart" });
    toast("Item has been added to the cart")
    
  };

  buttonStyle = () => {
    return {
      width: "49%",
    };
  };


  view(){
    //this.props.history.push('/stores');
    this.props.history.push(`/view-store/${17}`);
}
  render() {
    return (
      
      
      <div className="col s12 m4 test" >
        <div className="card medium">
          <div className="card-image">
           <img src={this.props.img_url} alt="" style={{height:"100%"}}/>
            
          {/* <img src={"rose gold.jpg" }alt=""/>*/}
            <span className="card-title" style={{color:"black"}}>{this.props.item_title}</span>
          </div>
          <div className="card-content">
            
            
            
            <p>{this.props.additional}</p>
            <p>Rs. {this.props.price}</p>
            
          </div>
          <div className="card-content hide">
            <p>{this.props.price}</p>
          </div>
          <div className="card-content hide">
            <p>{this.props.additional}</p>
          </div>

          <div className="card-content hide">
            <p>{this.props.description}</p>
          </div>

          <div className="card-content hide">
            <p>{this.props.brand}</p>
          </div>

          <div className="card-content hide">
            <p>{this.props.colour}</p>
          </div>


        
        



        
          <h3 className="hide">{this.props.item_id}</h3>
          <div className="card-content card-action white-text ">
            <li
              className="white-text grey darken-3 waves-effect waves-teal btn-flat"
              style={this.buttonStyle()}  
              
              onClick={this.view.bind(this)}
             
            >
              
           
              View
            </li>{" "}
            <li
              className="white-text grey darken-3 waves-effect waves-teal btn-flat"
              style={this.buttonStyle()}
              onClick={this.addItem}
              
            >
              Add to cart
            </li><ToastContainer />
          </div>
        </div>
      </div>
    );
  }


  
}

export default withRouter (Card);