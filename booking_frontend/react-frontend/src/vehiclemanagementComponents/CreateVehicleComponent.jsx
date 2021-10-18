import React, { Component } from 'react';
import VehicleService from '../vehiclemanagementServices/VehicleService';
import './vehicleStyles.css';


class CreateVehicleComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            features:'',
            vBrand: '',
            vName: '',
            vType: '',
            seat: '',
            price:'',
            driver:'',
            driverTpNo:'',
            vImage:'',
            value: ""
        }
        this.changefeaturesHandler =this.changefeaturesHandler.bind(this);
        this.changevBrandHandler = this.changevBrandHandler.bind(this);
        this.changevNameHandler = this.changevNameHandler.bind(this);
        this.changevTypeHandler = this.changevTypeHandler.bind(this);
        this.changeseatHandler = this.changeseatHandler.bind(this);
        this.changepriceHandler = this.changepriceHandler.bind(this);
        this.changedriverHandler = this.changedriverHandler.bind(this);
        this.saveOrUpdateVehicle = this.saveOrUpdateVehicle.bind(this);
        this.changedriverTpNoHandler = this.changedriverTpNoHandler.bind(this);
        this.changevImageHandler = this.changevImageHandler.bind(this);

  
    }

    
    saveOrUpdateVehicle = (e) => {
        e.preventDefault();
        let vehicle = {features: this.state.features, vBrand: this.state.vBrand, vName: this.state.vName, vType: this.state.vType, seat: this.state.seat, price: this.state.price, driver: this.state.driver, driverTpNo: this.state.driverTpNo, vImage: this.state.vImage};
        console.log('vehicle =>' + JSON.stringify(vehicle));

        VehicleService.createVehicle(vehicle).then(res =>{
            
            this.props.history.push('/vehicles');      
        })
    }

    changefeaturesHandler = (event) =>{
        this.setState({features: event.target.value});
    }
    changevBrandHandler = (event) =>{
        this.setState({vBrand: event.target.value});
    }
    changevNameHandler = (event) =>{
        this.setState({vName: event.target.value});
    }
    changevTypeHandler = (event) =>{
        this.setState({vType: event.target.value});
    }
    changeseatHandler = (event) =>{
        this.setState({seat: event.target.value});
    }
    changepriceHandler = (event) =>{
        this.setState({price: event.target.value});
    }
    changedriverHandler = (event) =>{
        this.setState({driver: event.target.value});
    }
    changedriverTpNoHandler = (event) =>{
        this.setState({driverTpNo: event.target.value});
    }
    changevImageHandler = (event) =>{
        this.setState({vImage: event.target.value});
    }
    cancel(){
        this.props.history.push('/vehicle-admin');
    }

    render() {
        return (
            
            <div>
                <header class="section ">
                <section class="full-width ">
                <div className="row">

                <div className="headingViewMods">  ADD NEW VEHICLE </div>
                <div className = "container" style={{marginTop: "15px"}}>
                     <div className = "row">
                        <div className = "card col-md-8 offset-md-2 offset-md-2" style={{borderRadius: "0px"}}>
                          {/* <center>   */}
                            <div className = "card-body">
                                <form onSubmit={this.saveOrUpdateVehicle}>
                                <div className="form-group row">
                                    <div className = "col-md-4 mb-3">
                                        <label> Vehicle Brand </label>
                                            <input placeholder = "Ex : Audi" name="vBrand" className="form-control" 
                                                value = {this.state.vBrand} onChange={this.changevBrandHandler} required/>
                                    </div>
                                    <div className = "col-md-4 mb-3">
                                        <label> Vehicle Name </label>
                                            <input placeholder = "Ex : A6" name="vName" className="form-control" 
                                                value = {this.state.vName} onChange={this.changevNameHandler} required/>
                                    </div>
                                    <div className = "col-md-4 mb-3">
                                        <label> Vehicle Type </label>

                                        <select id="vType" class="form-control" onChange={this.changevTypeHandler} required>
                                            <option selected value="" disabled={true}>---Choose Type---</option>
                                            <option value="Sedan">Sedan</option>
                                            <option value="Hatchback">Hatchback</option>
                                            <option value="SUV">SUV</option>
                                            <option value="Van">Van</option>
                                            <option value="Van">Bus</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <div className = "col-md-4 mb-3">
                                        <label> Number of Seates </label>
                                            <input placeholder = "Ex : 4" name="seat" className="form-control" 
                                                value = {this.state.seat} onChange={this.changeseatHandler} pattern="^([1-9][0-9]?|)$" title="You can only enter numeric values less than 99 and more than 0 for the number of seats."  required/>
                                    </div>
                                      
                                    <div className = "col-md-4 mb-3">
                                        <label> Features </label>
                                            <input type="text" placeholder = "Separate Features using comma " name="features" className="form-control" 
                                                value = {this.state.features} onChange={this.changefeaturesHandler} required/>
                                    </div>

                                    <div className = "col-md-4 mb-3">
                                        <label> Price per Day </label>
                                            <input placeholder = "Ex : 10000" name="price" className="form-control" 
                                                value = {this.state.price} onChange={this.changepriceHandler} pattern="[0-9]{0,8}" title="You can only add numerical values only."required/>
                                    </div>

                                </div>
                                <div class="form-group row">
                                    <div className = "col-md-4 mb-3">
                                        <label> Driver's Name </label>
                                            <input placeholder = "Ex : Jhon" name="driver" className="form-control" 
                                                value = {this.state.driver} onChange={this.changedriverHandler} required/>
                                    </div>
                                    <div className = "col-md-4 mb-3">
                                        <label> Driver's TP Number</label>
                                            <input placeholder = "Ex : 0123456789" name="driverTpNo" className="form-control" 
                                                value = {this.state.driverTpNo} onChange={this.changedriverTpNoHandler} pattern="[0-9]{10}" title="The phone number should consist of ten digits and numerical values only." required/>
                                    </div>
                                    <div className = "col-md-4 mb-3">
                                        <label> Image Link</label>
                                            <input placeholder = "Enter image link" name="vImage" className="form-control" 
                                                value = {this.state.vImage} onChange={this.changevImageHandler} required/>
                                    </div>
                                </div>
                                    <center>
                                        
                                        <input type ="submit" className="btn btn-success"  style={{marginTop: "10px"}} value = "Add"></input>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px" ,marginTop: "10px"}}>Cancel</button>
                                    </center>

                                </form> 
                            </div>
                            {/* </center>   */}

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

export default CreateVehicleComponent;