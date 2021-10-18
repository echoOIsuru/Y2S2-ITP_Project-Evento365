import React, { Component } from 'react';
import RentalItemService from '../rentingServices/RentalItemService';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import './itemrent.css';

class RentingServiceHomeComponent extends Component {
  constructor(props){
      super(props)

      this.state = {
          rentalitems: [],
          bookingID:'',
      }
  }



itemdetail(rentalitemid){
    this.props.history.push(`/item-detail/${rentalitemid}`);
} 

componentDidMount(){
      RentalItemService.getRentalItems().then((res) => {
          this.setState({rentalitems: res.data});
      });

      var data = sessionStorage.getItem('bookingSession');
        data = JSON.parse(data);

        this.state.bookingID = data.booking_id; 
}

back1(){
    this.props.history.push('/add-bookings/_price');
}

  

  render() { 
      return (
          <div>
              <div className="row" style={{paddingTop:"100px", paddingBottom:"170px"}}>

            <div>
            <img onClick={this.back1.bind(this)} style={{height:"30px", width:"30px",marginLeft:"50px"}} src="../images/back.png"/>
            <br/>
                <h2 className="text-center">Rental Items</h2>
            <br/>

            <center>

                <div className="formrDivitemrent">
                <div className="mrgn">
                    <Grid container >
                        {
                            this.state.rentalitems.map(
                                rentalitem =>(
                                    
                                    
                                    <Grid item key ={rentalitem.rentalitemid} xs={12} md={6} lg={3}>
                                        <Paper style={{width: 220,height: 340,borderRadius:"20px"}} >
                                            <div className="itemCard" >
                                                <div className="itemimgCard">
                                                    <br/>
                                                    <img src={rentalitem.image} alt="" />
                                                </div>

                                                <div className="itemCard-content">

                                                    <div className="itemCard-title">
                                                         {rentalitem.name}                                                      
                                                    </div>
                                                    
                                    

                                                     <div className="itemCard-body">
                                                         Rs.{rentalitem.rentalperday} per day
                                                    </div>

                                                </div>

                                                <div className="itemBtn" >
                                                <button  onClick= {() => this.itemdetail(rentalitem.rentalitemid)} className="btn btn-dark"> See more </button>
                                                </div>
                                            </div>
                                        </Paper>
                                        <br/>
                                    </Grid>
                                                                                
                                )      
                            )

                        }
                    </Grid>
                    </div>
                </div>
                <br/>
            </center>
            </div>
            </div>
          </div>
      );
  }
}

export default RentingServiceHomeComponent;