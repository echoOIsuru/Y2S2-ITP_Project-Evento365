import React, { Component } from 'react';
import FoodService from '../foodServices/FoodService';


class CreateFoodComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            
           // foods: [],
            foodcategoryid: '',
            foodcategory: '',
            foodname: '',
            cost: '',
            description: '',
            fimage: ''

        }

        this.changeFoodCategoryIDHandler = this.changeFoodCategoryIDHandler.bind(this);
        this.changeFoodCategoryHandler = this.changeFoodCategoryHandler.bind(this);
        this.changeFoodNameHandler = this.changeFoodNameHandler.bind(this);
        this.changeCostHandler = this.changeCostHandler.bind(this);
        this.changeFoodDescriptionHandler = this.changeFoodDescriptionHandler.bind(this);
        this.changeFoodImageHandler = this.changeFoodImageHandler.bind(this);
        this.saveFood = this.saveFood.bind(this);

    }

   

    saveFood =(e) => {
        e.preventDefault();

        let food = { foodcategoryid: this.state.foodcategoryid, foodcategory: this.state.foodcategory, foodname: this.state.foodname, cost: this.state.cost, description: this.state.description, fimage: this.state.fimage};
        console.log('food => ' + JSON.stringify(food));

        FoodService.createFood(food).then(res => {
            this.props.history.push('/food');

        });    

    }

    changeFoodImageHandler=(event) =>{
        this.setState({fimage: event.target.value});
    }

    changeFoodCategoryIDHandler= (event) =>{
        this.setState({foodcategoryid: event.target.value});

    }
    changeFoodCategoryHandler= (event) =>{
        this.setState({foodcategory: event.target.value});

    }
    changeFoodNameHandler= (event) =>{
        this.setState({foodname: event.target.value});

    }
    changeCostHandler= (event) =>{
        this.setState({cost: event.target.value});

    }
    changeFoodDescriptionHandler= (event) =>{
        this.setState({description: event.target.value});

    }

    cancel() {
        this.props.history.push('/startfood');
    }


    render() {
    
        return (
            <div className="container">
            <div>
                <br></br><br></br><br></br><br></br><br></br><br></br>
                <div className="container">
                    <div className="row">
                        
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                        <br></br>  <h3 className="text-center" > ADD NEW FOOD PACKAGE </h3> <br></br>

                            <img src="../images/image02.jpg" alt="food package"/>

                            <div className="viewback2">
                            <div className="card-body">  
                                <form onSubmit={this.saveFood}  style={{marginBottom: "10px"}} > 
                                    <div className="from-group" >
                                        <label style={{fontWeight:"bold"}}> Food package ID</label>
                                            <select name="foodcategoryid" className="form-control" onChange={this.changeFoodCategoryIDHandler} value={this.state.foodcategoryid} required="required" >
                                                    <option value="" disabled={true}>Select food package id</option>
                                                    <option value="01-Chinese">01-Chinese</option>
                                                    <option value="02-Italian">02-Italian</option>
                                                    <option value="03-Indian">03-Indian</option>
                                                    <option value="04-Sri lanka">04-Sri lankan</option>
                                                    <option value="05-Thai">05-Thai</option>
                                                    <option value="06-Royal">06-Royal</option>
                                                </select>
                                    </div>

                                    <div className="from-group">
                                        <label style={{fontWeight:"bold"}}> Food package Name</label>
                                        <input  required="required" placeholder="food package" name ="foodcategory" className="form-control"
                                            value={this.state.foodcategory} onChange={this.changeFoodCategoryHandler}/>
                                    </div>

                                    <div className="from-group">
                                        <label style={{fontWeight:"bold"}}> Food Type</label>
                                        <input  required="required" placeholder="food types" name ="foodname" className="form-control"
                                            value={this.state.foodname} onChange={this.changeFoodNameHandler}/>
                                    </div>

                                    <div className="from-group">
                                        <label style={{fontWeight:"bold"}}> Plate Cost</label>
                                        <input pattern="[0-9]{0,5}" title="This field should consist only numerical values." required="required" placeholder="package cost" name ="cost" className="form-control"
                                            value={this.state.cost} onChange={this.changeCostHandler}/>
                                    </div>

                                    <div className="from-group">
                                        <label style={{fontWeight:"bold"}}> Description</label>
                                        <input  placeholder="package description" name ="description" className="form-control"
                                            value={this.state.description} onChange={this.changeFoodDescriptionHandler}/>
                                    </div>

                                    <div className="from-group">
                                        <label style={{fontWeight:"bold"}}> Image</label>
                                        <input  required={true} placeholder="package image" name ="fimage" className="form-control"
                                            value={this.state.fimage} onChange={this.changeFoodImageHandler}/>
                                    </div>

                                    <div style={{marginTop: "10px"}}>
                              

                                    <input  className="btn btn-success" type="submit"  value="INSERT"></input>
                                    <button  className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}> Cancel </button>
                                    </div>
                                </form>
                                
                            </div>
                            </div>
                        </div>

                    </div>
                </div>
                <br></br><br></br>
            </div>
            </div>
        );
    }
}

export default CreateFoodComponent;

