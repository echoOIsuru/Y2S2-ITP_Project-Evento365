import React, { Component } from 'react';
import VehicleService from '../vehiclemanagementServices/VehicleService';
import VehicleRentService from '../vehiclemanagementServices/VehicleRentService';
import './viewMod.css';
import './vehicleStyles.css';

class ViewVehicleComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            regNo: this.props.match.params.regNo,
            vehicle: {},
            //equals vehicle table regNo to rent table regNo
            regNo: this.props.match.params.regNo
        }
        this.saveRentVehicle = this.saveRentVehicle.bind(this);

    }

    //Add rented vehicle id to rent table
    saveRentVehicle = (e) => {
        if (window.confirm('Are you sure, want to rent the selected vehicle?')) {
            e.preventDefault();

            var data = sessionStorage.getItem('bookingSession');
            data = JSON.parse(data);


            data.total = this.state.vehicle.price;
            let rent = {
                regNo: this.state.regNo, bookingId: data.booking_id, date: data.booking_date
            };
            console.log('rent =>' + JSON.stringify(rent));

            VehicleRentService.createRent(rent).then(res => {
                sessionStorage.setItem('bookingSession', JSON.stringify(data));
                this.props.history.push('/add-bookings/_price');
            })
        }
    }
    //cancel method
    cancel() {
        this.props.history.push('/user-vehicle');
    }

    //Data retrive(view) method
    componentDidMount() {
        VehicleService.getVehicleById(this.state.regNo).then(res => {
            this.setState({ vehicle: res.data });
        });
    }

    render() {
        return (
            <div>
                <header class="section ">
                    <section class="full-width ">
                        <div className="row">
                            <div className="headingModsForViewVcl"> Details of the Vehicle </div>

                            <div class="containerView" >

                                <img src={this.state.vehicle.vImage} alt="img" />

                                <div class="containerViewHeading ">
                                    <div class="containerViewH1 ">
                                        {this.state.vehicle.vBrand} {this.state.vehicle.vName}
                                    </div>
                                    <div class="containerViewSubHead">
                                        Rs. {this.state.vehicle.price} per day
                                    </div>
                                    <div class="pView1">
                                        <p>

                                            The {this.state.vehicle.vBrand} {this.state.vehicle.vName} is a {this.state.vehicle.vType} Type Vehicle.
                                            It is a spacious {this.state.vehicle.seat} seater with features including {this.state.vehicle.features}.
                                            This luxurious vehicle is available for the low price of Rs.{this.state.vehicle.price} per day.
                                        </p>
                                    </div>

                                    <div class="pView2">
                                        <p>
                                            Before rent a vehicle, feel free to contact driver.<br />

                                            Driver's Name : {this.state.vehicle.driver}<br />
                                            Driver's TP Number: {this.state.vehicle.driverTpNo}
                                        </p>
                                    </div>

                                    <div className="btnView">
                                        <button style={{ marginTop: "5px" }} onClick={this.saveRentVehicle} > RENT </button>
                                    </div>
                                    <div className="btnCancel">
                                        <button onClick={this.cancel.bind(this)} style={{ marginLeft: "15px" }}>CANCEL</button>
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