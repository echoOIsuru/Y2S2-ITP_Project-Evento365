import React, { Component } from 'react';
import VehicleService from '../vehiclemanagementServices/VehicleService';
import './vCard.css';
import './listMod.css';

class ListVehicleComponent extends Component {
   constructor(props){
       super(props)

       this.state = {
            vehicles: []
       }
       this.addVehicle = this.addVehicle.bind(this);
       this.editVehicle = this.editVehicle.bind(this);
       this.deleteVehicle = this.deleteVehicle.bind(this);
   }

   deleteVehicle(regNo){
       //rest api call
       if(window.confirm('Are you sure, want to delete the selected vehicle?')) {
       VehicleService.deleteVehicle(regNo).then(res => {
            this.setState({vehicles: this.state.vehicles.filter(vehicle => vehicle.regNo !== regNo)});
            
       });
    }
   }

   viewVehicle(regNo){
       this.props.history.push(`/view-vehicle/${regNo}`)
   }

   editVehicle(regNo){
        this.props.history.push(`/update-vehicle/${regNo}`);
   }

   componentDidMount(){
      VehicleService.getVehicles().then((res) =>{
        this.setState({vehicles: res.data});
      }); 
   }

   addVehicle(){
       this.props.history.push('/add-vehicle/_add');
   }
   cancel() {
       this.props.history.push('/vehicle-admin');
   }
    render() {
        return (
             <div className="container">
            <div>
                 <header class="section ">
                <section class="full-width ">
                <div className="row">

                <div > <img onClick={this.cancel.bind(this)} style={{height:"30px", width:"30px", "float": "left",marginLeft:"-90px" }} src="../images/backBtn.png"/> </div>   
                <div className="headingViewMods" style={{marginBottom: "30px"}}>  All Vehicle List </div> 

                <div className = "row">
                    <button className="btnAdd" onClick={this.addVehicle} style={{height: "50px"}}> Add Vehicle </button>
                </div>
                <div className = "row">
                    <table className = "table table-hover table-striped table-bordered" style={{backgroundColor: "white"}}>

                        <thead >
                            <tr>
                                <th> Image </th>
                                <th> Vehicle Brand </th>
                                <th> Vehicle Name </th>
                                <th> Vehicle Type </th>
                                <th> No of Seats </th>
                                <th> Price per Day </th>
                                <th> Driver's Name </th>
                                <th> Driver's TP No </th>
                                <th> Features </th>
                                <th> Action </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.vehicles.map(
                                    vehicle =>
                                    <tr key = {vehicle.regNo}>
                                        <td> <img src={vehicle.vImage } style={{width:"200px", height:"130px",objectFit: "cover"}} alt=""/> </td>
                                        <td> {vehicle.vBrand} </td>
                                        <td> {vehicle.vName} </td>
                                        <td> {vehicle.vType} </td>
                                        <td> {vehicle.seat} </td>
                                        <td> {vehicle.price} </td>
                                        <td> {vehicle.driver} </td>
                                        <td> {vehicle.driverTpNo} </td>
                                        <td> {vehicle.features} </td>
                                        <td>
                                        <div className="lmBtnv" >
                                            <button onClick = { () => this.viewVehicle(vehicle.regNo)}  > View</button>
                                        </div>
                                        <div className="lmBtnu" >
                                            <button style={{marginTop: "10px"}} onClick = { () => this.editVehicle(vehicle.regNo)}  > Update</button> <br />
                                        </div>
                                        <div className="lmBtnd" >
                                            <button style={{marginTop: "10px"}} onClick = { () => this.deleteVehicle(vehicle.regNo)}> Delete </button> <br />
                                        </div>
                                        </td>

                                    </tr>
                                )
                            }
                        
                        </tbody>

                    </table>
                </div>
                </div>
                </section>
                </header>
            </div>
            </div>
        );
    }
}

export default ListVehicleComponent;