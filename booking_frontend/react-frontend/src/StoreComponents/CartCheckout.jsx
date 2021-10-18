import React, { Component } from "react";
import StoreService from '../StoreServices/StoreService';
import "../css/Store.css";

import moment from 'moment'



import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast, Slide } from "react-toastify";
//bootstrap
//import 'bootstrap/dist/css/bootstrap.min.css';


class CartCheckout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      totalitems: [],
      temp: [],
      tempPrice: []

    };
    this.changeTotalHandler = this.changeTotalHandler.bind(this);
    this.changeTotalItemsHandler = this.changeTotalItemsHandler.bind(this);

    this.saveCheckout = this.saveCheckout.bind(this);
  }

  saveCheckout = (e) => {
    e.preventDefault();
    let order = { total:this.state.total, total_items:this.state.total_items };
    console.log('order =>' + JSON.stringify(order));

    StoreService.createOrder(order).then(res => {

      this.props.history.push('/onlinestore');
    });
  }
  changeTotalHandler = (event) => {
    this.setState({ total: event.target.value });
  }
  changeTotalItemsHandler = (event) => {
    this.setState({ totalitems: event.target.value });
  }

  componentDidMount() {
    let totalCart = 0;
    let totalCartItems = [];
    let unitPrice = "null";
    var i = 0;
    let cart = JSON.parse(sessionStorage.getItem("cart"));
    this.state.temp = cart;
    this.state.tempPrice = cart.price;
    cart.forEach((item) => {

      totalCart += Number.parseInt(item.price);
      totalCartItems[i] = (item.name);
      unitPrice += (item.price);

      i++;

    });
    this.setState({
      total: totalCart,
      totalitems: totalCartItems,
      priceper: unitPrice,

    });
  }

  detail = () => {
    // if (
    //   sessionStorage.getItem("cart")[0] === undefined ||
    //   sessionStorage.getItem("cart") === null
    // ) {
    //   return;
    // }
    // sessionStorage.getItem("cart");
    // this.setState({
    //   cart: JSON.parse(sessionStorage.getItem("cart"))[0],
    // });
  };

  change(e) {
    e.preventDefault();
    console.log("changed");
  }

  stylecard = () => {
    return {
      width: "80%",
      marginLeft: "10%",
    };
  };

  stylehead = () => {
    return {
      color: " #e75480",
      marginLeft: "10%",
    };
  };

  stylebutton = () => {
    return {
      marginTop: "20px",
      width: "40%",
      class: "btn btn-primary "
    };
  };

  stylebutton2 = () => {
    return {
      marginTop: "20px",
      width: "50%",
      marginLeft: "5%",
      color: " #e75480",
      class: "btn btn-primary "
    };
  };
  myStyle = () => {
    return {
      color: "#000080",
      background: "linear-gradient(to bottom, white, #E6E6FA)",
      width: "50%"
    };
  };

/*  {sumbitPayment = async (e) => {
    await e.preventDefault();
    let amount = document.getElementById("amount").value;
    /*let paymentstatus = document.getElementById("check1").value;
    let userId = sessionStorage.getItem("userId");

    const response = await fetch("/api/v2/payment/sendPayment", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },

      method: "POST",
      body: JSON.stringify({
        amount: amount,
        /*paymentstatus: paymentstatus,
      }),
    });

    console.log(response);
    let itemId = JSON.parse(sessionStorage.getItem('cart'))[0].id;
    const update = await fetch(`/api/v2/sellable/update/${itemId}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },

      method: "PUT",
      body: JSON.stringify(
        {
          "item_id": itemId,
          "customer": { "customer_id": userId },
          "price": 13323
        }
      ),
    });

    console.log(update);
    this.props.history.push("/RequestDelivery");

  }}*/
  cancel() {
    this.props.history.push('/onlinestore');
  }



  

  render() {
    return (
      <form  onSubmit={this.saveCheckout} class="needs-validation">
      <div className="col s25 m5 test" style={{ background: "#fff0f3", margin: "10px" }}>
        <div class="container">


          <div class="py-5 text-center">

            <h3 className="header" style={this.stylehead()}>Checkout form</h3>

          </div>
          {/*   <div className="card horizontal" style={this.stylecard()}>
          <div className="card-image hide-on-small-only">
            <img
              alt=""
              src="https://unblast.com/wp-content/uploads/2020/04/Online-Shopping-Illustration.jpg"
            />
    </div>*/}


<div class="column" style={{ align: "center" }}>
<div class="col-md-20 order-md-10 mb-10">
  <h4 class="d-flex justify-content-between align-items-center mb-3">
    <span class="text-muted">Your cart</span>
   
  </h4>
  <table  >
  
  <ul class="list-group mb-50">
    <li class="list-group-item d-flex justify-content-between lh-condensed">
      <div>

  

 <th style={{width:"500px"}}></th>
  <th style={{width:"1000px",align:"left"}}></th>
  <th></th>

<tr style={{border: "3px dashed pink"}}>
 
<td style={{width:"1000px",align:"right"}} class="my-0">{this.state.temp.map(
          items =>
            <h6 value={this.state.total_items} 
            onChange={this.changeTotalItemsHandler} 
            class="my-0">{items.name} <br></br><br></br>
                   </h6>
           
            
        )
        }
</td>

<td style={{width:"500px",textAlign:"right"}} >{this.state.temp.map(
          items =>
            <div><span class="text-muted">{items.price}</span><br></br><br></br></div>

        )
        }


   </td>
</tr>
<tr></tr>

                
<tr style={{border:"3px dashed pink"}} >

  <td style={{width:"500px",textAlign:"left"}}><span>Total</span></td>
<td value={this.state.total}  onChange={this.changeTotalHandler} style={{width:"150px",textAlign:"right"}}><span>{this.state.total}  
                    </span></td><td></td>
  </tr>
</div>
    </li>
  </ul>
  <td><div>
          <div className="card-image hide-on-small-only">
            <img
              alt=""
              src="https://partycity1.scene7.com/is/image/PartyCity/2up-birthday-girls-210717?wid=650&qlt=80&fmt=pjpeg&cache=on"
            />
    </div></div></td>
</table>
</div>











            <div className="card-stacked">
              <div className="card-content">
                <div>

                 
                    <div class="row">


                    </div>
                    <h6>Billing Details</h6>
                    <label htmlFor="fname">First name:</label>
                    <input
                      type="text"
                      id="fname"
                      name="fname"
                      required={true}
                      //value={sessionStorage.getItem("FirstName")}
                     // disabled={true}

                      
                    ></input>
                    <br></br>






                    <label htmlFor="lname">Last name:</label>
                    <input
                      type="text"
                      id="lname"
                      name="lname"
                      required={true}
                      //value={sessionStorage.getItem("LastName")}
                      //disabled={true}
                      
                    ></input>
                    <br></br>
                    <br></br>





                    <div class="mb-3">
                      <label for="email">Email <span class="text-muted">(Optional)</span></label>
                      <input type="email" class="form-control" id="email" placeholder="you@example.com" />
                      <div class="invalid-feedback">
                        Please enter a valid email address for shipping updates.
                      </div>
                    </div>
                    <div class="mb-3">
                      <label for="address">Address</label>
                      <input required={true} type="text" class="form-control" id="address" placeholder="1234 Main St"required />
                      <div class="invalid-feedback">
                        Please enter your shipping address.
                      </div>
                    </div>

                    <div class="mb-3">
                      <label for="address2">Address 2 <span class="text-muted">(Optional)</span></label>
                      <input  required={true} type="text" class="form-control" id="address2" placeholder="Apartment or suite" />
                    </div>
                    <div class="row">
                      <div class="col-md-5 mb-3">
                        <label for="country">Country</label>
                        <select class="custom-select d-block w-100" id="country" required>
                          <option value="">Choose...</option>
                          <option>United States</option>
                        </select>
                        <div class="invalid-feedback">
                          Please select a valid country.
                        </div>
                      </div>
                      <div class="col-md-4 mb-3">
                        <label for="state">State</label>
                        <select class="custom-select d-block w-100" id="state" required>
                          <option value="">Choose...</option>
                          <option>California</option>
                        </select>
                        <div class="invalid-feedback">
                          Please provide a valid state.
                        </div>
                      </div>
                      <div class="col-md-3 mb-3">
                        <label for="zip">Zip</label>
                        <input required={true} type="text" class="form-control" id="zip" placeholder="" pattern="[0-9]{5}" required />
                        <div class="invalid-feedback">
                          Zip code required.
                        </div>
                      </div>
                    </div>
                    <hr class="mb-4" />
                    <div class="custom-control custom-checkbox">
                      <input type="checkbox" class="custom-control-input" id="same-address" />
                      <label class="custom-control-label" for="same-address">Shipping address is the same as my billing address</label>
                    </div>
                    <div class="custom-control custom-checkbox">
                      <input type="checkbox" class="custom-control-input" id="save-info" />
                      <label class="custom-control-label" for="save-info">Save this information for next time</label>
                    </div>





                    <label htmlFor="address">Date</label>
                    <input
                      type="text"
                      id="current_date"
                      name="address"
                      disabled={true}
                      value={moment().toDate()}
                    ></input>
                    <br></br>
                    {/*<h6>Payement Method</h6>
                  <label>
                    <input
                      onChange={this.change}
                      className="with-gap"
                      name="group1"
                      id="check"
                      type="radio"
                      value="Pending"
                      checked
                    />
                    <span>Cash</span>
                  </label>
                  <br></br>
                  <label>
                    <input
                      onChange={this.change}
                      className="with-gap"
                      id="check1"
                      name="group1"
                      type="radio"
                      checked
                      value="Paid"
                    />
                    <span>Credit Card</span>
                  </label>
                  <br></br> <br></br>
                  <h6>Do You Want a Delivery?</h6>
                  <label>
                    <input
                      onChange={this.change}
                      className="with-gap"
                      name="group2"
                      type="radio"
                      checked
                    />
                    <span>Yes</span>
                  </label>
                  <br></br>
                  <label>
                    <input
                      onChange={this.change}
                      className="with-gap"
                      name="group2"
                      type="radio"
                      checked
                    />
                    <span>No</span>
                  </label>*/}
{/*                    <br></br>
                    <label htmlFor="price">Total</label>
                    <input
                      type="number"
                      id="amount"
                   
                    ></input>

                  {console.log(this.state.temp, "SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS")}
<table>
  <tr>
  <td>{this.state.temp.map(
                      items =>
                        <div>{items.name}</div>

                    )
                    }
</td>
  <td>{this.state.temp.map(
                      items =>
                        <div>{items.price}</div>

                    )
                    }


               </td>
  </tr>
  </table>
                  
                    
     <label htmlFor="price">Items</label>
                    <input
                      type="text"
                      id="checkitems"
                      value={this.state.total_items}
                      onChange={this.changeTotalItemsHandler}
                    ></input>
                    <label htmlFor="price">Unit Price</label>

                    <input
                      type="text"
                      id="unitprice"
                      value={this.state.priceper}

                    ></input> */} 
                 </div>
              </div> 

              <div>
                <input type="submit"
                  value="Confirm Checkout"
                  className="col 12 m4 waves-effect pink lighten-3 btn"
                  style={this.stylebutton()}
                 
                />
               
                 
              
                <a
                  className="col 12 m4 waves-effect  grey lighten-2 btn"
                  style={this.stylebutton2()}

                  href onClick={this.cancel.bind(this)}
                >
                  <i className="material-icons  left ">arrow_back</i>
                  Back to Previous
                </a> 
{/*              
<button
  onClick={() =>
    toast.info("You're informed !", {
     transition: Slide
    })
 }
>
  Notify !
</button>*/}
   <ToastContainer />
                
                
                
                
                
                <br></br><br></br>
              </div>
            </div>
          </div>
        </div>
      </div></form>

    );
  }
}

























export default CartCheckout;
