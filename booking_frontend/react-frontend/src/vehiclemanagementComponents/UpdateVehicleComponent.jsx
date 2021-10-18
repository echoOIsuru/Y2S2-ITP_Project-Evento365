import React, { Component } from 'react';
import VehicleService from '../vehiclemanagementServices/VehicleService';

class UpdateVehicleComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            regNo: this.props.match.params.regNo,
            features:'',
            vBrand: '',
            vName: '',
            vType: '',
            seat: '',
            price:'',
            driver:'',
            driverTpNo:'',
            vImage:''
        }
        this.changefeaturesHandler =this.changefeaturesHandler.bind(this);
        this.changevBrandHandler = this.changevBrandHandler.bind(this);
        this.changevNameHandler = this.changevNameHandler.bind(this);
        this.changevTypeHandler = this.changevTypeHandler.bind(this);
        this.changeseatHandler = this.changeseatHandler.bind(this);
        this.changepriceHandler = this.changepriceHandler.bind(this);
        this.changedriverHandler = this.changedriverHandler.bind(this);
        this.updateVehicle = this.updateVehicle.bind(this);
        this.changedriverTpNoHandler = this.changedriverTpNoHandler.bind(this);
        this.changevImageHandler = this.changevImageHandler.bind(this);
  
    }

    componentDidMount(){
        VehicleService.getVehicleById(this.state.regNo).then ((res) => {
            let vehicle = res.data;
            this.setState({
                features: vehicle.features,
                vBrand: vehicle.vBrand,
                vName: vehicle.vName,
                vType: vehicle.vType,
                seat: vehicle.seat,
                price: vehicle.price,
                driver: vehicle.driver,
                driverTpNo: vehicle.driverTpNo,
                vImage: vehicle.vImage

            });
        });
    }

    updateVehicle = (e) => {
        e.preventDefault();
        let vehicle = {features: this.state.features, vBrand: this.state.vBrand, vName: this.state.vName, vType: this.state.vType, seat: this.state.seat, price: this.state.price, driver: this.state.driver, driverTpNo: this.state.driverTpNo, vImage: this.state.vImage};
        console.log('vehicle =>' + JSON.stringify(vehicle));
        VehicleService.updateVehicle(vehicle, this.state.regNo).then ( res => {
            this.props.history.push('/vehicles');
        });
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
        this.props.history.push('/vehicles');
    }

    render() {
        return (
            
            <div>

                <header class="section ">
                <section class="full-width ">
                <div className="row">

                <div className="headingViewMods">  Update VEHICLE details </div>
                <div className = "container" style={{marginTop: "15px"}}>
                     <div className = "row">
                        <div className = "card col-md-8 offset-md-2 offset-md-2" style={{borderRadius: "0px"}}>
                      
                            <div className = "card-body">
                            <form onSubmit={this.updateVehicle}>
                                <div class="form-group row">
                                    <div className = "col-md-4 mb-3">
                                        <label> Vehicle Brand </label>
                                            <input placeholder = "Audi" name="vBrand" className="form-control" 
                                                value = {this.state.vBrand} onChange={this.changevBrandHandler}/>
                                    </div>
                                    <div className = "col-md-4 mb-3">
                                        <label> Vehicle Name </label>
                                            <input placeholder = "A6" name="vName" className="form-control" 
                                                value = {this.state.vName} onChange={this.changevNameHandler}/>
                                    </div>
                                    <div className = "col-md-4 mb-3">
                                        <label> Vehicle Type </label>
                                            <input placeholder = "Sedan" name="vType" className="form-control" 
                                                value = {this.state.vType} onChange={this.changevTypeHandler}/>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <div className = "col-md-4 mb-3">
                                        <label> Number of Seates </label>
                                            <input placeholder = "4" name="seat" className="form-control" 
                                                value = {this.state.seat} onChange={this.changeseatHandler} pattern="^([1-9][0-9]?|)$" title="You can only enter numeric values less than 99 and more than 0 for the number of seats." />
                                    </div>
                                    <div className = "col-md-4 mb-3">
                                        <label> Features </label>
                                            <input placeholder = "CAC-1111" name="features" className="form-control" 
                                                value = {this.state.features} onChange={this.changefeaturesHandler}/>
                                    </div>
                                    <div className = "col-md-4 mb-3">
                                        <label> Price per Day </label>
                                            <input placeholder = "10000" name="price" className="form-control" 
                                                value = {this.state.price} onChange={this.changepriceHandler} pattern="[0-9]{0,8}" title="You can only add numerical values only."/>
                                    </div>

                                </div>
                                <div class="form-group row">
                                    <div className = "col-md-4 mb-3">
                                        <label> Driver's Name </label>
                                            <input placeholder = "Jhon" name="driver" className="form-control" 
                                                value = {this.state.driver} onChange={this.changedriverHandler}/>
                                    </div>
                                    <div className = "col-md-4 mb-3">
                                        <label> Driver's TP Number</label>
                                            <input placeholder = "0123456789" name="driverTpNo" className="form-control" 
                                                value = {this.state.driverTpNo} onChange={this.changedriverTpNoHandler} pattern="[0-9]{10}" title="The phone number should consist of ten digits and numerical values only." />
                                    </div>
                                    <div className = "col-md-4 mb-3">
                                        <label> Image Link</label>
                                            <input placeholder = "www.google/iamges/car" name="vImage" className="form-control" 
                                                value = {this.state.vImage} onChange={this.changevImageHandler}/>
                                    </div>
                                </div>
                                    <center>
                                       
                                        <input type ="submit" className="btn btn-success"  style={{marginTop: "10px"}} value = "Update"></input>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px" ,marginTop: "10px"}}>Cancel</button>
                                    </center>

                                </form> 
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

export default UpdateVehicleComponent;