import React, { Component } from 'react';
import VehicleService from '../vehiclemanagementServices/VehicleService';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import './vCard.css';
import './vehicleStyles.css';

class ListVehicleComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            search: '',
            vehicles: []

        }
        this.search = this.search.bind(this);
        this.searchbuttonhandle = this.searchbuttonhandle.bind(this);
        this.keywordhandle = this.keywordhandle.bind(this);

    }

    viewVehicle(regNo) {
        this.props.history.push(`/user-view-vehicle/${regNo}`)
    }

    componentDidMount() {
        VehicleService.getVehicles().then((res) => {
            this.setState({ vehicles: res.data });

        });
    }
    
    search(val) {
        VehicleService.searchVehicle(val).then((res) => {
            console.log(res.data ,"hihihihiihihi")
            if(res.data.length==0){
                console.log("isisisisisisissi")
                window.alert("No Results Found...!");
            }else{

                this.setState({ vehicles: res.data });
            }

        });
        // try{

        //     if (this.keyword == "") {
        //         // this.componentDidMount();
        //     } else if (this.keyword == undefined) {
        //         // this.componentDidMount();
        //     }
        // }catch(e){
            
        // }

    }

    searchbuttonhandle(event){
        this.search(this.state.search);  
    }
    keywordhandle(event){
        this.setState({
            search: event.target.value
        });      
    }

    cancelSearch = () => {
        this.setState({
            "search": ''
        });
        VehicleService.getVehicles().then((res) => {
            this.setState({
                vehicles: res.data
            });
        });
    }
    backRent() {
        this.props.history.push('/add-bookings/_price');
    }

    render() {
        return (
            <div >
                <header class="section ">
                    <section class="full-width ">
                        <div className="row">
                            <br />
                            <div className="headingMods"> Available Vehicles </div>
                            <br /> <br /> <br />
                            <div >

                            <div > <img onClick={this.backRent.bind(this)} style={{height:"30px", width:"30px", "float": "left",marginLeft:"15px" }} src="../images/backBtn.png"/> </div>   

                            <div style={{ "float": "right" ,marginRight:"15px"}}>
                                        <div className="input-group btn-group-sm ">
                                            <input type="text" style={{ border: 0 }} className="form-control" placeholder="Search.." name="search"
                                               value={this.state.search}  onChange={this.keywordhandle} /> 

                                            <div className="input-group-append btn-group-sm">
                                                <button className="btn btn-outline-success" onClick={this.searchbuttonhandle}>
                                                    <i class="fa fa-search"></i>

                                                </button>
                                                <button  className="btn btn-outline-danger" onClick={this.cancelSearch}>
                                                    🗘<i class="fa fa-close"></i>

                                                </button>

                                            </div>
                                        </div>
                            </div>


                                <center>
                                    <Grid container  >
                                        {this.state.vehicles == null?<div></div>:
                                           this.state.vehicles.map(
                                                vehicle => (
                                                    <Grid item key={vehicle.regNo} xs={12} md={4} lg={2}> <br />
                                                        <Paper style={{ width: 220 }}>
                                                            <div className="vmCard" >
                                                                <div className="imgCard" >

                                                                    <img src={vehicle.vImage} alt="" />
                                                                </div>

                                                                <div className="vmCard-content">

                                                                    <div className="vmCard-title">
                                                                        {vehicle.vBrand} {vehicle.vName}
                                                                    </div>

                                                                    <div className="vmCard-body">
                                                                        <p> {vehicle.price} /perDay </p>
                                                                    </div>

                                                                </div>

                                                                <div className="vmBtn" >
                                                                    <button style={{ marginTop: 10 }} onClick={() => this.viewVehicle(vehicle.regNo)} > View Details</button>
                                                                </div>
                                                            </div>
                                                        </Paper>
                                                        <br />
                                                    </Grid>
                                                )
                                            )

                                        }
                                    </Grid>
                                    <br />
                                </center>
                            </div>
                        </div>
                    </section>
                </header>
            </div>
        );

    }
}

export default ListVehicleComponent;




