import React, { Component } from 'react';
import VehicleService from '../vehiclemanagementServices/VehicleService';
import './viewMod.css';

class ViewVehicleComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            regNo: this.props.match.params.regNo,
            vehicle: {}
        }
    }

    componentDidMount() {
        VehicleService.getVehicleById(this.state.regNo).then(res => {
            this.setState({ vehicle: res.data });
        });
    }
    cancel(){
        this.props.history.push('/vehicles');
    }

    render() {
        return (
            <div>

                <header class="section">
                <section class="full-width ">
                <div className="row">

                <div className="headingViewMods"  style={{marginBottom: "20px"}}>  Details of the vehicle </div>
            
                <div class="containerViewADM" >

                    <img src={this.state.vehicle.vImage} alt="img" />

                    <div class="containerViewHeadingADM ">
                        <div class="containerViewH1ADM ">
                            {this.state.vehicle.vBrand} {this.state.vehicle.vName}
                        </div>
                        <div class="containerViewSubHeadADM">
                             Price : {this.state.vehicle.price}  
                        </div>
                        <div class="pViewADM">
                            
                        <div className="view"> 
                           
                             <p>    Vehicle Id :- {this.state.vehicle.regNo} </p>
                             <p>    Vehicle Name :- {this.state.vehicle.vBrand} {this.state.vehicle.vName}</p>
                             <p>    Vehicle Type :- {this.state.vehicle.vType} </p>
                             <p>    Number of seats :- {this.state.vehicle.seat} </p>
                             <p>    Features :- {this.state.vehicle.features} </p>
                             <p>    Driver's Name :- {this.state.vehicle.driver}</p>
                             <p>    Driver's TP Number :- {this.state.vehicle.driverTpNo}</p>
                            
                        </div>
                        <div className="btnBack">
                            <button onClick={this.cancel.bind(this)} style={{marginLeft: "50px"}}>Back</button>
                        </div>
                        </div>

                    </div>
                </div>
                </div>
                </section>
                </header>
            </div>
        );
    }
}

export default ViewVehicleComponent;