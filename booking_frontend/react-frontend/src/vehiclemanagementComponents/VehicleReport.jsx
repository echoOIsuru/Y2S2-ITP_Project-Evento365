import React, { Component } from 'react';
import VehicleService from '../vehiclemanagementServices/VehicleService';
import './VehicleReport.css'
import { Chart } from "react-google-charts";

class ListVehicleComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            vehicles: [],
            totalIncome: '',
            maxVcl: []
        }
    }

    componentDidMount() {
        VehicleService.getSummaryVehicles().then((res) => {
            this.setState({ vehicles: res.data });
        });

        VehicleService.getvehicleIncome().then((res) => {
            this.setState({ totalIncome: res.data });
        });

        VehicleService.getMaxVehicles().then((res) => {
            this.setState({ maxVcl: res.data });
        });
    }


    print() {
        window.print();
    }

    cancel() {
        this.props.history.push('/vcl-report');
    }
    backVclHome() {
        this.props.history.push('/vehicle-admin');
    }

    render() {
        return (
            <div className="container">

                <header class="section ">
                    <section class="full-width ">
                        <div className="row">
                            <div className="section-to-print ">
                            <div > <img onClick={this.backVclHome.bind(this)} style={{height:"30px", width:"30px", "float": "left",marginLeft:"-90px" }} src="../images/backBtn.png"/> </div>   

                                <div className="headingViewMods" style={{ marginBottom: "20px" }}>  Vehicle Report </div>
                                <div className="row">
                                    <table className="VclReport1" >

                                        <thead >
                                            <tr>
                                                <th> Image </th>
                                                <th> Vehicle Brand </th>
                                                <th> Vehicle Name </th>
                                                <th> Driver's Name </th>
                                                <th> Rented Count</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                this.state.vehicles.map(
                                                    vehicle =>
                                                        <tr key={vehicle.regNo}>
                                                            <td> <img src={vehicle.vimage} style={{ width: "150px", height: "97.5px", objectFit: "cover", margin: "auto" }} alt="" /> </td>
                                                            <td> {vehicle.v_brand} </td>
                                                            <td> {vehicle.v_name} </td>
                                                            <td> {vehicle.driver} </td>
                                                            <td> {vehicle.count} </td>

                                                        </tr>
                                                )
                                            }

                                        </tbody>

                                    </table>

                                    <center>
                                        <div className="VclReportViewH1"> The Most Hired Vehicle </div>
                                    </center>

                                    <table className="VclReport2" >

                                        <thead >
                                            <tr>
                                                <th> Image </th>
                                                <th> Vehicle Brand </th>
                                                <th> Vehicle Name </th>
                                                <th> Driver's Name </th>


                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                this.state.maxVcl.map(
                                                    maxVcl =>
                                                        <tr key={maxVcl.regNo}>
                                                            <td> <img src={maxVcl.vImage} style={{ width: "150px", height: "97.5px", objectFit: "cover", margin: "auto" }} alt="" /> </td>
                                                            <td> {maxVcl.vBrand} </td>
                                                            <td> {maxVcl.vName} </td>
                                                            <td> {maxVcl.driver} </td>


                                                        </tr>
                                                )
                                            }

                                        </tbody>

                                    </table>

                                    <center>
                                        <div className="VclReportViewSubHead"> Total Income: Rs.{this.state.totalIncome} </div>
                                    </center>
                                </div>
                            </div>
                            <center>
                                
                                <div className="VclReportCancelBtnv"> <button onClick={this.cancel.bind(this)} >CANCEL</button> </div>   
                                <div className="VclReportPrintBtnv"> <button onClick={this.print} style={{ marginLeft: "15px" }}> Print</button> </div>
                                      
                            </center>                 
                        </div>
                    </section>
                </header>
            </div>
        );
    }
}

export default ListVehicleComponent;