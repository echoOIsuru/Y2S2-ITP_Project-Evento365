import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CustomerService from '../UserServices/CustomerService';
import { Chart } from "react-google-charts";
import VehicleRentService from '../vehiclemanagementServices/VehicleRentService';
import RentalItemService from '../rentingServices/RentalItemService';
import FoodService from '../foodServices/FoodService';
import StoreService from '../StoreServices/StoreService';
import '../css/admin.css';

class MainAdminReport extends Component {

    constructor(props) {
        super(props);

        this.state = {
            maleCount: '',
            femaleCount: '',
            vehicleCount: '',
            rentalItemCount: '',
            foodItemCount: '',
            storeItemCount: 0

        }
    }

    componentDidMount() {

        CustomerService.getMaleCount().then((res) => {
            this.setState({ maleCount: res.data });
        });
        CustomerService.getFemaleCount().then((res) => {
            this.setState({ femaleCount: res.data });
        });
        VehicleRentService.getVehicleRentCountReport().then((res) => {
            this.setState({ vehicleCount: res.data });
        });
        RentalItemService.getTotalRentalItemsReport().then((res) => {
            this.setState({ rentalItemCount: res.data });
        });
        FoodService.getFoodBookingsAdminReport().then((res) => {
            this.setState({ foodItemCount: res.data });
        });
        StoreService.getStoreTotalAdminReport().then((res) => {
            this.setState({ storeItemCount: res.data });
        });

    }

    goBack = () => {
        this.props.history.push(`/list-admin`);
    };
    logout = () => {
        var result = window.confirm("Are you sure to Logout?");
        if (result) {
            this.props.history.push(`/admin-login`);
        }

    };
    backToUsers = () => {
        this.props.history.push(`/list-customer`);
    };

    print() {
        window.print();
    }

    render() {
        return (

            <div style={{ marginTop: '70px', marginBottom: '150px' }}>
                <center>
                    
                    <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3  border-bottom box-shadow" style={{ width: '100%', margin: 'auto', borderRadius: '5px', boxShadow: '0px 0px 45px -5px', background: 'rgb(250, 235, 215,0.8)' }}>
                        <h5 class="my-0 mr-md-auto font-weight-normal">MAIN ADMIN ➔ REPORTS</h5>
                        <button class="btn btn-secondary" onClick={this.goBack} href="#" style={{ marginRight: '30px' }}>❮</button>
                        <button class="btn btn-secondary" onClick={this.backToUsers} style={{ marginRight: '30px' }}>USERS</button>
                        <button class="btn btn-secondary" onClick={this.print} href="#" style={{ marginRight: '30px' }}>🖶⠀PRINT REPORT</button>
                        <button class="btn btn-secondary" onClick={this.logout} style={{ marginRight: '30px' }}>LOGOUT</button>
                        <button class="btn btn-secondary" href="#" style={{ marginRight: '5px' }} disabled>❯</button>
                    </div>
                    <br /><br />
                    <div className="ad_section-to-print">
                    <h1 style={{ textAlign: 'left', marginLeft: '220px', fontFamily: 'Jazz LET, fantasy', fontSize: '40px' }}>EVENTO 365 REPORTS.</h1>

                    <br />
                    <div style={{ paddingTop: '20px', background: 'rgb(169, 169, 169,0.5)', width: '75%' }}>
                        <h1 style={{ textAlign: 'left', marginTop: '10px', marginLeft: '30px', fontFamily: 'Jazz LET, fantasy' }}>Evento 365 Users by Gender.</h1>
                        <h3 style={{ textAlign: 'left', marginLeft: '30px', fontFamily: 'sans-serif', fontSize: '22px' }}>⠀Total Users : {this.state.maleCount + this.state.femaleCount} ⠀⠀|⠀⠀♔ Male : {this.state.maleCount} ⠀|⠀⠀♕ Female : {this.state.femaleCount}⠀</h3>
                        <Chart
                            width={'1500px'}
                            height={'550px'}
                            chartType="PieChart"
                            loader={<div>Loading Chart</div>}
                            data={[
                                ['Store', 'Hours per Day'],
                                ['Male', this.state.maleCount],
                                ['Female', this.state.femaleCount],

                            ]}
                            options={{

                                // Just add this option

                                pieSliceText: 'label',
                                pieStartAngle: 100,
                                backgroundColor: 'transparent',
                                colors:['#ef476f','#3d5a80']
                                
                            }}
                            rootProps={{ 'data-testid': '2' }}
                        />
                    </div>
                    <br /><br />
                    <div style={{ paddingTop: '20px', background: 'rgb(169, 169, 169,0.5)', width: '75%' }}>
                        <h1 style={{ textAlign: 'left', marginTop: '10px', marginLeft: '30px', fontFamily: 'Jazz LET, fantasy' }}>Evento 365 Services Usage.</h1>
                        <h3 style={{ textAlign: 'left', marginLeft: '40px', fontFamily: 'sans-serif', fontSize: '20px' }}> Total Services Provided : {this.state.vehicleCount + this.state.rentalItemCount + this.state.foodItemCount + this.state.storeItemCount} ⠀|⠀⠀✡ Vehicle Rents : {this.state.vehicleCount} ⠀|⠀⠀✡ Equipment Rents : {this.state.rentalItemCount} ⠀|⠀⠀✡ Catering Orders : {this.state.foodItemCount} ⠀|⠀⠀✡ Store Orders : {this.state.storeItemCount}</h3>

                        <Chart
                            width={'1500px'}
                            height={'550px'}
                            chartType="PieChart"
                            loader={<div>Loading Chart</div>}
                            data={[
                                ['Store', 'Hours per Day'],
                                ['Vehicle Renting', this.state.vehicleCount],
                                ['Equipment Renting', this.state.rentalItemCount],
                                ['Catering Service', this.state.foodItemCount],
                                ['Store', this.state.storeItemCount],
                            ]}
                            options={{

                                // Just add this option
                                pieSliceText: 'label',
                                pieStartAngle: 100,
                                backgroundColor: 'transparent',
                                colors:['#ef476f','#f77f00','#06d6a0','#118ab2']

                            }}
                            rootProps={{ 'data-testid': '2' }}
                        />
                    </div>
                    </div>
                </center>
            </div>
            

        );
    }
}

MainAdminReport.propTypes = {

};

export default MainAdminReport;