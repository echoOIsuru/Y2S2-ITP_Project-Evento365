import React, { Component } from 'react';
import VehicleService from '../vehiclemanagementServices/VehicleService';
import './landingPageMod.css';

class LandingComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            vehicles: []
        }
        this.addVehicle = this.addVehicle.bind(this);

    }

    addVehicle() {
        this.props.history.push('/add-vehicle/_add');
    }
    onClick = () => this.props.history.push("/vehicles");

    onClickReportV = () => this.props.history.push("/vcl-report");

    render() {
        return (
            <div>
                <header class="section " style={{marginBottom:'20px'}}>
                    <section class="full-width ">
                        <div className="row">

                            <br />
                            <div className="headingModsLand"  style={{marginBottom: "30px",marginTop: "20px"}}> <h1> VEHICLE MANAGEMENT  </h1> </div>
                            <br />
                            <center>
                                <div className="laddBtn">
                                    <button onClick={this.addVehicle}> Add New Vehicle </button>
                                </div>
                                <div className="lModBtn">
                                    <button onClick={this.onClick}> Modify Vehicle Details </button>
                                </div>
                                <div className="lReportBtn">
                                    <button onClick={this.onClickReportV}> Genarate Monthly Report </button>
                                </div>
                            </center>
                        </div>
                    </section>
                </header>

            </div>
        );
    }
}

export default LandingComponent;