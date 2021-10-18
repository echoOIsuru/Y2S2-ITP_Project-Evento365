import React, { Component } from 'react';
import RentalItemService from '../rentingServices/RentalItemService';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

class test extends Component {

    constructor(props){
        super(props)
  
        this.state = {
            rentalitems: []
        }
    }

    itemdetail(rentalitemid){
        this.props.history.push(`/item-detail/${rentalitemid}`);
    } 
    
    componentDidMount(){
          RentalItemService.getRentalItems().then((res) => {
              this.setState({rentalitems: res.data});
          });
    }

    render() {
        return (
              <div>
                {/* <h2 className="text-center"> EVENTO 365 Renting Service </h2>
              
                <div className = "row">
                    <table className = "table table-striped table bordered">
                       <tbody>
                          {
                              this.state.rentalitems.map(
                                  rentalitem =>
                                  <tr key = {rentalitem.rentalitemid}>
                                      <div className="card col-md-6 offset-md-3"> 
                                          <div className="card-body">
                                              <div className="row">
                                               
                                                  <div> {rentalitem.name} </div>
                                                
                                                  <div> {rentalitem.description} </div>
                                                
                                                 <div> {rentalitem.rentalperday} </div>
                                                
                                                  <div> {rentalitem.totalunits} </div>

                                                  <button onClick= {() => this.itemdetail(rentalitem.rentalitemid)} className="btn btn-dark"> See more </button>
                                             </div>
                                          </div>                                      </div>
                                  </tr>                             
                                  )
                           }
                   </tbody>
                                       </table>

                </div> */}

                    <div>

                    <br/>
                    <h1 className="text-center">Availabe Vehicles</h1>
                    <br/>
                    <center>
                            <Grid container >
                                {
                                    this.state.rentalitems.map(
                                        rentalitem =>(
                                            <Grid item key ={rentalitem.rentalitemid} xs={12} md={6} lg={3}>
                                                <Paper style={{width: 300}}>
                                                    <div className="vmCard" >
                                                        <div className="imgCard">
                                                            <img style={{width:"150px", height:"150px",radius:"10px",borderRadius:"20px",marginTop:"15px"}} src={rentalitem.image} alt="" />
                                                        </div>

                                                        <div className="vmCard-content">

                                                            <div className="vmCard-title">
                                                                <h3> {rentalitem.name} </h3>
                                                                <h6> {rentalitem.description} </h6>
                                                            </div>

                                                            <div className="vmCard-body">
                                                                <p> {rentalitem.rentalperday} /perDay </p>
                                                            </div>

                                                        </div>

                                                        <div className="vmBtn" >
                                                        <button style={{marginBottom:"20px"}} onClick= {() => this.itemdetail(rentalitem.rentalitemid)} className="btn btn-dark"> See more </button>
                                                        </div>
                                                    </div>
                                                </Paper>
                                                <br/>
                                            </Grid>                                            
                                        )      
                                    )

                                }
                            </Grid>
                            <br/>
                    </center>

                    </div>

            </div>
        );
   }
}

export default test;