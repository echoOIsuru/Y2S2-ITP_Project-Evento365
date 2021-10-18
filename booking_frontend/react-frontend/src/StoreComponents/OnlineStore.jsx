import React, { Component } from "react";
import Card from "./Card";
import Slider from "./Slider";
import StoreService from '../StoreServices/StoreService';
import "materialize-css/dist/css/materialize.min.css";
//import "../css/Store.css";
//import "./../App.css";
import Navbar from "./Navbar";
import SearchField from "react-search-field";



class OnlineStore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stores: [],
    };
  }

  componentDidMount() {
    this.setState({
      stores: [
        {
          item_id: "1",
          item_title: "Rose Gold fusion balloon setup",
          description: "Latex Metallic Balloons Package includes 10 balloons ",
          itemcategoryid: "CAT001",
          colour: "Pink",
          brand: "Printit",
          additional: "Colors do not look the same between different computer monitors, so what we see and what you see will probably not be the same.",
          price: "6500",
          img_url: "rose gold.jpg"
        },
        {
          item_id: "1",
          item_title: "Rose Gold fusion ballon setup",
          description: "Latex Metallic Balloons Package includes 10 balloons ",
          itemcategoryid: "CAT001",
          colour: "Pink",
          brand: "Printit",
          additional: "Colors do not look the same between different computer monitors, so what we see and what you see will probably not be the same.",
          price: "6500",
          img_url: "rose gold.jpg"
        },
        {
          item_id: "1",
          item_title: "Rose Gold fusion ballon setup",
          description: "Latex Metallic Balloons Package includes 10 balloons ",
          itemcategoryid: "CAT001",
          colour: "Pink",
          brand: "Printit",
          additional: "Colors do not look the same between different computer monitors, so what we see and what you see will probably not be the same.",
          price: "6500",
          img_url: "rose gold.jpg"
        },

        {
          item_id: "1",
          item_title: "Rose Gold fusion ballon setup",
          description: "Latex Metallic Balloons Package includes 10 balloons ",
          itemcategoryid: "CAT001",
          colour: "Pink",
          brand: "Printit",
          additional: "Colors do not look the same between different computer monitors, so what we see and what you see will probably not be the same.",
          price: "6500",
          img_url: "rose gold.jpg"
        },
      ],
    });

    StoreService.getStores().then((res) => {
      this.setState({ stores: res.data });
    });

  }

  render() {
    return (


      <div style={{
        backgroundImage: `url("https://www.solidbackgrounds.com/images/1920x1080/1920x1080-pale-pink-solid-color-background.jpg")`
      }}> <header class="section background-white">
     <section class="full-width background-white">
<div className="row">
 

          <div style={{width: "100%"}}>  <Navbar/></div>
          
          <div class="col-sm-3 col-md-3pull-right" style={{margin:"5px"}}>
    <form class="navbar-form" role="search">
        <div class="input-group">
            <input type="text" class="form-control" placeholder="Search"
                                                    name="srch-term" id="srch-term"
                                                    />
                                                  
                                                 
          
                <button class="btn btn-default" type="submit">
                 <i class="fa fa-search"></i>
                </button>
          
        </div>
    </form>
</div>
          <div>
        <Slider />
        <div style={{align:"right",paddingRight:"20px"}}>
        <SearchField
  placeholder="Search..."
  onClick="www.google.com"
  searchText=""
  classNames="test-class"
/>   </div>




          <h4 className="center-align"><br></br>
          <span className="teal-text">Popular</span> Items
          </h4>
          <div className="container">
          <div className="row">
          <table> <th></th><th></th><th></th><th></th><tr><td>
        {this.state.stores.map((stores) => {
          return (
          <Card

          item_id={stores.item_id}
          item_title={stores.item_title}
          description={stores.description}
          itemcategoryid={stores.itemcategoryid}
          colour={stores.colour}
          brand={stores.brand}
          additional={stores.additional}
          price={stores.price}
          img_url={stores.img_url}
          />



        );
        })}</td></tr></table>
          </div>
          </div>
          </div></div></section></header>
      </div>

    );
  }
}

export default OnlineStore;

