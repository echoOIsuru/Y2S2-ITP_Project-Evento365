import React, { Component } from 'react';
import RentalItemService from '../rentingServices/RentalItemService';

class UpdateItemComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            rentalitemid : this.props.match.params.rentalitemid,
            name:'',
            description:'',
            rentalperday:'',
            totalunits:'',
            availableunits:'',
            image: '',
        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
        this.changeRentalPerDayHandler = this.changeRentalPerDayHandler.bind(this);
        this.changeTotalUnitsHandler = this.changeTotalUnitsHandler.bind(this);
        this.updateItem = this.updateItem.bind(this);
        this.changeAvalUnitsHandler = this.changeAvalUnitsHandler.bind(this);
        this.changeImageHandler = this.changeImageHandler.bind(this);
    }

    componentDidMount(){
        RentalItemService.getItemsById(this.state.rentalitemid).then( (res)=>{
            let rentalitem = res.data;
            this.setState({name: rentalitem.name,
                description: rentalitem.description,
                rentalperday: rentalitem.rentalperday,
                totalunits: rentalitem.totalunits,
                availableunits : rentalitem.availableunits,
                image: rentalitem.image,
            });
        } );
    }

    updateItem = (e) => {
        e.preventDefault();
        let rentalitem =   {name:this.state.name,
            description:this.state.description,
            rentalperday:this.state.rentalperday,
            totalunits:this.state.totalunits,
            availableunits: this.state.availableunits,
            image: this.state.image
        };
       
        RentalItemService.updateItem(rentalitem, this.state.rentalitemid).then(res => {
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

    changeAvalUnitsHandler= (event) => {
        this.setState({availableunits: event.target.value});
    }

    changeImageHandler= (event) => {
        this.setState({image: event.target.value});
    }

    render() {
        return (
            <div>
                <div className="row" style={{paddingTop:"170px", paddingBottom:"170px"}}>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center" >Update Item </h3>
                            <div className="card-body">
                                <form onSubmit={this.updateItem} >
                                    <div className="form-group">
                                        <label> Item Name </label>
                                        <input placeholder="Item Name" name="name" className="form-control" 
                                        value={this.state.name} onChange={this.changeNameHandler} 
                                        pattern="[A-Za-z0-9 ]{0,50}" title="The name should consist of maximum 50 numerical values and characters" required/>
                                    </div>

                                    <div className="form-group">
                                        <label> Description </label>
                                        <input placeholder="Description" name="description" className="form-control" 
                                        value={this.state.description} onChange={this.changeDescriptionHandler}
                                        pattern="[A-Za-z0-9 ]{0,100}" title="The description should consist of maximum 100 characters" required />
                                    </div>

                                    <div className="form-group">
                                        <label> Rental Per Day </label>
                                        <input placeholder="Rental Per Day" name="rentalperday" className="form-control" 
                                        value={this.state.rentalperday} onChange={this.changeRentalPerDayHandler} 
                                        pattern="[0-9]{0,8}" title="The price should consist of numerical values" required/>
                                    </div>

                                    <div className="form-group">
                                        <label> Total Units </label>
                                        <input placeholder="Total Units" name="totalunits" className="form-control" 
                                        value={this.state.totalunits} onChange={this.changeTotalUnitsHandler} 
                                        pattern="[0-9]{0,4}" title="The price should consist of numerical values" required/>
                                    </div>

                                    <div className="form-group">
                                        <label> Available Units </label>
                                        <input type="number" placeholder="Available units" name="availableunits" className="form-control" 
                                        value={this.state.availableunits} onChange={this.changeAvalUnitsHandler}
                                         title="The price should consist of numerical values" min="1" max={this.state.totalunits}  required />
                                    </div>

                                    <div className="form-group">
                                        <label> Image </label>
                                        <input placeholder="image" name="image" className="form-control" 
                                        value={this.state.image} onChange={this.changeImageHandler} />
                                    </div>

                                    <input type="submit" value ="Save"className="btn btn-success" />
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style= {{marginLeft: "10px"}}> Cancel</button>
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

export default UpdateItemComponent;