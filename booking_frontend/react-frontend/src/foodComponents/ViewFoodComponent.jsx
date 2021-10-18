import React, { Component } from 'react';
import FoodService from '../foodServices/FoodService';

class ViewFoodComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            foodid: this.props.match.params.id,
            food: {}
        }
    }

    componentDidMount(){
        FoodService.getFoodById(this.state.foodid).then( res => {
            this.setState({food: res.data});
        });
    }


    render() {
        return (
            <div className="container">
            <div className="viewback"  style={{marginBottom: "30px" , marginTop: "30px" }}>
                <br></br><br></br><br></br><br></br><br></br><br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center">View Food Details</h3>

                  
                    
                    
                    <div className = "card-body">
                        <div className = "row">
                            <label> </label>
                            <div> <img style={{width:"100%", height:"300px"}} src={this.state.food.fimage}></img>
                            </div>
                        </div>
                        <div className="viewback2" style={{marginTop:"20px"}} >
                        <div className = "row">
                          <br></br>  <label style={{marginLeft:"20px" }}> food package ID:  { this.state.food.foodcategoryid }</label> 
                         
                        </div>
                        <div className = "row">
                            <label style={{marginLeft:"20px"}}> food package Name: { this.state.food.foodcategory }</label>
                          
                        </div>
                        <div className = "row">
                            <label style={{marginLeft:"20px"}}> food types:  { this.state.food.foodname } </label>
                           
                        </div>
                        <div className = "row">
                            <label style={{marginLeft:"20px"}}> plate price: { this.state.food.cost }</label>
                        
                        </div>
                        <div className = "row">
                            <label style={{marginLeft:"20px"}}> Description: { this.state.food.description }</label>  <br></br>
                            
                        </div>
                       
                    </div>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default ViewFoodComponent;