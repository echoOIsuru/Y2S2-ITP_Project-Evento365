//NOT NEEDED


import React, { Component } from 'react';
import VehicleRentService from '../vehiclemanagementServices/VehicleRentService';

class UserAddRentComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            regNo:''
        }

        this.changeregNoHandler = this.changeregNoHandler.bind(this);
        this.saveRentVehicle = this.saveRentVehicle.bind(this);

    }   

    saveRentVehicle = (e) =>{
        e.preventDefault();
        let rent = {regNo: this.state.regNo};
        console.log('rent =>' + JSON.stringify(rent));

        VehicleRentService.createRent(rent).then(res =>{
            this.props.history.push('/user-vehicle');
        })
    }

    
    changeregNoHandler=(event) =>{
        this.setState({regNo: event.target.value});
    }
    cancel(){
        this.props.history.push('/user-vehicle');
    }
    
    render() {
        return (
            <div>
                <div>
                    <div className = "container" style={{marginBottom: "10px"}}>
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3"></div>
                                <h3 className ="text-center"> RENT VEHICLES </h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> regNo :</label>
                                                <input placeholder = "regNo" name="regNo" className="form-control" 
                                                    value = {this.state.regNo} onChange={this.changeregNoHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveRentVehicle} style={{marginTop: "10px"}}>Save RENT</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px" ,marginTop: "10px"}}>Cancel</button>


                                    </form>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserAddRentComponent;