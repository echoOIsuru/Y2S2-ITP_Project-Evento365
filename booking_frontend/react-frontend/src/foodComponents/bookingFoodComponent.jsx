import React, { Component } from 'react';
import FoodService from '../foodServices/FoodService';




class bookingFoodComponent extends Component {
    constructor(props){
        super(props)

        this.state ={
            foodid: this.props.match.params.id,
            foodcategoryid: '',
            foodcategory: '',
            foodname: '',
            cost: '',
            description: '',
            count:'',
            total:'',
            booking_id:'',
            id:'3'
        }

        this.confirmFood = this.confirmFood.bind(this);
        this.changeFoodcount = this.changeFoodcount.bind(this);

    }

    componentDidMount(){
        FoodService.getFoodById(this.state.foodid).then( (res) => {
            
            let food = res.data;
            this.setState({foodcategoryid: food.foodcategoryid,
                foodcategory: food.foodcategory,
                foodname: food.foodname,
                cost: food.cost,
                description: food.description,
                
            });

           

        });


    }
 

    confirmFood =(e) => {
        e.preventDefault();

        
        var data = sessionStorage.getItem('bookingSession');

        data = JSON.parse(data);

        this.state.bookingid = data.booking_id;

        let bookFood = { cost: this.state.cost, booking_id: data.booking_id , food_package_id: this.state.foodcategoryid, food_package_name: this.state.foodcategory , count:this.state.count , total:(this.state.count*this.state.cost )};
        console.log('bookFood => ' + JSON.stringify(bookFood));

        if (this.state.count > 500){
            window.alert("no of plates count doesnt grater than 500");
        }

        FoodService.createBookFood(bookFood).then(res => {

       
                 this.props.history.push(`/confirm/${data.booking_id}`);
            
        });    

    }

  

    changeFoodcount= (event) =>{
        this.setState({count: event.target.value});

    }


    cancel() {
        this.props.history.push('/cusview');
    }


    render() {
        return (
            <div className="container">
            <div>
                <br></br><br></br><br></br><br></br><br></br>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                        <br></br>   <h3 className="text-center"> ORDERED FOOD PACKAGE </h3> <br></br>
                                 
                                 
                                   
                                

                                <img src="../images/12.jpg" alt="food package"/> <br></br>

                                <div className="viewback2">
                            <div className="card-body">
                                <form>
                                    {/* <div className="from-group">
                                        <label style={{fontWeight:"bold"}}>  Food package ID</label>
                                        <input placeholder="foodcategory id" name ="foodcategoryid" className="form-control"
                                            value={this.state.foodcategoryid} />
                                    </div> */}
                                    <div className="from-group">
                                        <label style={{fontWeight:"bold"}}> Food package Name</label>
                                        <input placeholder="food category" name ="foodcategory" className="form-control"
                                            value={this.state.foodcategory} />
                                    </div>
                                    <div className="from-group">
                                        <label style={{fontWeight:"bold"}}> Food Types</label>
                                        <input placeholder="food name" name ="foodname" className="form-control"
                                            value={this.state.foodname} />
                                    </div>
                                    <div className="from-group">
                                        <label style={{fontWeight:"bold"}}> Plate Cost</label>
                                        <input placeholder="food cost" name ="cost" className="form-control"
                                            value={this.state.cost} />
                                    </div>
                                    <div className="from-group">
                                        <label style={{fontWeight:"bold"}}> package Description</label>
                                        <input placeholder="food description" name ="description" className="form-control"
                                            value={this.state.description} />
                                    </div>
                                    <div className="from-group">
                                        <label style={{fontWeight:"bold"}}> Number of plates</label>
                                        <input required style={{width:"100px"}} pattern="[0-5]{0,3}" title="This field should consist only numerical values."  name ="count" className="form-control"
                                            value={this.state.count} onChange={this.changeFoodcount}/>
                                    </div>
                                    <div style={{marginTop: "10px"}}>
                                    <button className="btn btn-success" onClick={this.confirmFood}>Confirm</button>


                                    <button style={{marginLeft: "10px"}} className="btn btn-danger" 
                                           //cancel button  validation
                                                    onClick={() => {  const confirmBox = window.confirm(
                                                                      "Are you sure want to cancel this booking?"
                                                                    )
                                                                    if (confirmBox === true) {
                                                                        this.cancel.bind(this)
                                                                        this.props.history.push('/cusview');
                                                                    }
                                                                  }}>
                                                                        Cancel</button>

                                    </div>
                                </form>
                            </div>
                            </div>
                        </div>

                    </div>
                </div>

                </div>

            </div>
        );
    }

}

export default bookingFoodComponent;