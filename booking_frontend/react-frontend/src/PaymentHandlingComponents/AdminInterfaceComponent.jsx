import React, { Component } from 'react';
import VehicleService from '../vehiclemanagementServices/VehicleService';
import '../PaymentHandlingStyles/AdminInterfaceComponent.css';

class AdminInterfaceComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            vehicles: []
        }
        this.payment = this.payment.bind(this);
    }

    payment() {
        this.props.history.push("/paymanagement");
    }
    onClick = () => this.props.history.push("/promomanage");

    onClickReportV = () => this.props.history.push("/payreport");

    render() {
        return (
            <div>
                <header class="section " style={{marginBottom:'20px'}}>
                    <section class="full-width ">
                        <div className="row">

                            <br />
                            <div className="PayAdminHeading"  style={{marginBottom: "30px",marginTop: "20px"}}> <h1> Payment & Promo MANAGEMENT  </h1> </div>
                            <br />
                            <center>
                                <div className="adminpayRi">
                                    <button onClick={this.payment}> Payment Management </button>
                                </div>
                                <div className="adminPromoRi">
                                    <button onClick={this.onClick}> Promo Code Management </button>
                                </div>
                                <div className="adminReportRi">
                                    <button onClick={this.onClickReportV}> Payment & Promo Code Report </button>
                                </div>
                            </center>
                        </div>
                    </section>
                </header>

            </div>
        );
    }
}

export default AdminInterfaceComponent;