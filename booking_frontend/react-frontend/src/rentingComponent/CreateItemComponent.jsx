import React, { Component } from 'react';
import RentalItemService from '../rentingServices/RentalItemService';

class CreateItemComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            name:'',
            description:'',
            rentalperday:'',
            totalunits:'',
            image:'',
            availableunits:'',
        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
        this.changeRentalPerDayHandler = this.changeRentalPerDayHandler.bind(this);
        this.changeTotalUnitsHandler = this.changeTotalUnitsHandler.bind(this);
        this.changeImageHandler = this.changeImageHandler.bind(this);
        this.changeavailableUnitsHandler = this.changeavailableUnitsHandler.bind(this);
        this.saveItems = this.saveItems.bind(this);
    }

    saveItems= (e) => {
        e.preventDefault();
        let rentalitem = {name: this.state.name, description: this.state.description, 
            rentalperday: this.state.rentalperday, totalunits: this.state.totalunits,
            image: this.state.image,availableunits: this.state.totalunits};
        console.log('rentalitem => ' + JSON.stringify(rentalitem));

        RentalItemService.createItem(rentalitem).then(res => {
            this.props.history.push('/rentalitems');
        });
    }

    cancel(){
        this.props.history.push('/rentalitems');
    }

    changeNameHandler= (event) => {
        this.setState({name: event.target.value});
    }

    changeDescriptionHandler= (event) => {
        this.setState({description: event.target.value});
    }

    changeRentalPerDayHandler= (event) => {
        this.setState({rentalperday: event.target.value});
    }

    changeTotalUnitsHandler= (event) => {
        this.setState({totalunits: event.target.value});
    }

    changeImageHandler= (event) => {
        this.setState({image: event.target.value});
    }

    changeavailableUnitsHandler= (event) =>{
        this.setState({availableunits: event.target.value});
    }

    render() {
        return (
            <div>
                <div className="row" style={{paddingTop:"170px", paddingBottom:"170px"}}>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 style={{marginTop:"20px"}} className="text-center" > Add Item</h3>
                            <div className="card-body">
                                <form onSubmit={this.saveItems}>
                                    <div className="form-group">
                                        <label style={{marginBottom:"10px",marginLeft:"5px"}}> Item Name </label>
                                        <input style={{marginBottom:"10px"}} placeholder="Item Name" name="name" className="form-control" 
                                        value={this.state.name} onChange={this.changeNameHandler} 
                                        pattern="[A-Za-z0-9 ]{0,50}" title="The name should consist of maximum 50 numerical values and characters" required/>
                                        
                                    </div>

                                    <div className="form-group">
                                        <label style={{marginBottom:"10px",marginLeft:"5px"}}> Description </label>
                                        <input style={{marginBottom:"10px"}} placeholder="Description" name="description" className="form-control" 
                                        value={this.state.description} onChange={this.changeDescriptionHandler} 
                                        pattern="[A-Za-z0-9 ]{0,100}" title="The description should consist of maximum 100 characters" required/>
                                    </div>

                                    <div className="form-group">
                                        <label style={{marginBottom:"10px",marginLeft:"5px"}}> Rental Per Day </label>
                                        <input style={{marginBottom:"10px"}} placeholder="Rental Per Day" name="rentalperday" className="form-control" 
                                        value={this.state.rentalperday} onChange={this.changeRentalPerDayHandler} 
                                        pattern="[0-9]{0,8}" title="The price should consist of numerical values" required/>
                                    </div>

                                    <div className="form-group">
                                        <label style={{marginBottom:"10px",marginLeft:"5px"}}> Total Units </label>
                                        <input style={{marginBottom:"10px"}} placeholder="Total Units" name="totalunits" className="form-control" 
                                        value={this.state.totalunits} onChange={this.changeTotalUnitsHandler} 
                                        pattern="[0-9]{0,4}" title="The price should consist of numerical values" required/>
                                    </div>

                                    <div className="form-group">
                                        <label style={{marginBottom:"10px",marginLeft:"5px"}}> Image </label>
                                        <input style={{marginBottom:"10px"}} placeholder="Image" name="image" className="form-control" 
                                        value={this.state.image} onChange={this.changeImageHandler} />
                                    </div>

                                    <div className="form-group">
                                        <label style={{marginBottom:"10px",marginLeft:"5px"}}> Available Units </label>
                                        <input style={{marginBottom:"10px"}} placeholder="Image" name="image" className="form-control" 
                                        value={this.state.totalunits} onChange={this.changeavailableUnitsHandler} 
                                        pattern="[0-9]{0,4}" title="The price should consist of numerical values" required/>
                                    </div>

                                    {/* <button className="btn btn-success" onClick={this.saveItems}> Save </button> */}
                                    <input style={{width:"150px", height:"40px",marginTop:"20px"}} className="btn btn-success" type="submit" value="Save"/>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style= {{marginLeft: "300px", height:"40px",marginTop:"20px"}}> Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}

export default CreateItemComponent;