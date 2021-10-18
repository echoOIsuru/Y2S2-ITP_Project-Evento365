import React, { Component } from 'react';
import FoodService from '../foodServices/FoodService';

class ListFoodComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {

            food: [],
            fsearch: ''

        }
       
         this.cancelfoodpage = this.cancelfoodpage.bind(this);
        this.editFood = this.editFood.bind(this);
        this.deleteFood = this.deleteFood.bind(this);
       this.searchfood = this.searchfood.bind(this);
        this.Gosearch = this.Gosearch.bind(this);
    }


    deleteFood(foodid){
        
        FoodService.deleteFood(foodid).then( res => {

            this.setState({food: this.state.food.filter(food => food.foodid !== foodid)});

        });
    }

  

    viewFood(foodid){
        this.props.history.push(`/view-food/${foodid}`);
    }


    editFood(foodid){
        this.props.history.push(`/update-food/${foodid}`);

    }

    componentDidMount(){
        FoodService.getFood().then((res) => {

            this.setState({ food: res.data});


        });
    }


    cancelfoodpage(){
        this.props.history.push('/startfood');
    }

    // genaratereport(){
    //     this.props.history.push('/freport');
    // }


    searchfood(event) {
        this.fvalue = event.target.value;

    }


    Gosearch = (e) => {
        this.foodsearch(this.fvalue);

    }

    foodsearch(foodval) {
        FoodService.getSearchfood(foodval).then((res) => {

            if( res.data.length == 0){
                window.alert("No items available!");
            }
            else{
                this.setState({ food: res.data })
            }
            // this.setState({ food: res.data });
            // console.log(res.data);
        });
        if (this.fvalue == "") {
            this.componentDidMount();
        } else if (this.fvalue == undefined) {
           
            this.componentDidMount();
        }
    }


    cancelfoodSearch = () => {
        FoodService.getFood().then((res) => {
            this.setState({
                food: res.data
            });

        });
    }


    render() {
        return (
         
           <div className="container">
            <div className="text-center">

                <br></br><br></br><br></br><br></br><br></br><br></br>
                
                
                <div style={{ "float": "right" }}>
                    <div className="input-group btn-group-sm ">
                        <input type="text" style={{ border: 0 }} className="form-control" placeholder="Search food category" name="searchfood"  onChange={this.searchfood} />

                            <div className="input-group-append btn-group-sm">
                                    <button style={{marginLeft:"10px" , fontSize:"17px"}} className="btn btn-success" onClick={this.Gosearch}>
                                        <i class="fa fa-search"></i>
                                    </button>
                                    <button style={{marginLeft:"3px" , fontSize:"17px"}} className="btn btn-danger" onClick={this.cancelfoodSearch}>
                                         <i class="fa fa-close"></i>
                                    </button>
                            </div>
                    </div>
                </div>

                

                <br></br>

                
                            <div>
                            <img onClick={this.cancelfoodpage} style={{height:"50px" ,marginBottom:"10px", marginTop:"-60px"  , marginLeft:"60px"}} src="../images/back.png"/>
                            </div>

                <h2 style={{marginBottom: "30px" , marginTop: "10px" , marginLeft:"230px" }} className="test-center">EVENTO356 FOOD SERVICE</h2>



                {/* <div className = "row">
                    <button style={{ marginBottom: "10px" , marginTop: "10px"}} className="btn btn-primary" onClick={this.addFood}> Add Food</button>
                </div>
                <div className = "row">
                    <button style={{ marginBottom: "10px" , marginTop: "10px"}} className="btn btn-primary" onClick={this.genaratereport.bind(this)}> Report</button>
                </div> */}

                

                <div className = "row">
                <div className="foodtable">
                    <table style={{ backgroundColor: "rgba(255, 237, 213, 0.8)"}} className = "table table-striped table-bordered">
                        <thead>
                            <tr className="customerTR">
                                <th style={{textAlign:"center",fontSize:"20px", width:"10%"}}>Food package ID</th>
                                <th style={{textAlign:"center",fontSize:"20px", width:"10%"}}>Food package Name</th>
                                <th style={{textAlign:"center",fontSize:"20px", width:"10%"}}>Food package Type </th>
                                <th style={{textAlign:"center",fontSize:"20px", width:"18%"}}>Description</th>
                                <th style={{textAlign:"center",fontSize:"20px", width:"8%"}}>plate Cost</th>
                                <th style={{textAlign:"center",fontSize:"20px", width:"20%"}}>Image</th>
                                <th style={{textAlign:"center",fontSize:"20px", width:"25%"}}>Actions</th>
                            </tr>
                        </thead>

                        <tbody className="customerTbody">
                            {
                                this.state.food.map(
                                    food =>
                                   <tr key ={food.foodid}>
                                       <td style={{textAlign:"center",fontSize:"17px"}}> {food.foodcategoryid} </td>
                                       <td style={{textAlign:"center",fontSize:"17px"}}> {food.foodcategory} </td>
                                       <td style={{textAlign:"center",fontSize:"17px"}}> {food.foodname} </td>
                                       <td style={{textAlign:"center",fontSize:"17px"}}> {food.description} </td>
                                       <td style={{textAlign:"center",fontSize:"17px"}}> {food.cost} </td>
                                       <td style={{textAlign:"center",fontSize:"17px"}}> <img style={{width:"100%", height:"100%"}} src={food.fimage}></img> </td>
                                       <td style={{textAlign:"center",fontSize:"17px"}}>
                                           <button onClick = { () => this.editFood(food.foodid)} className="btn btn-info">Update </button>
                           

                                           <button style={{marginLeft: "10px"}} className="btn btn-danger" 
                                           //Delete validation
                                                    onClick={() => {  const confirmBox = window.confirm(
                                                                      "Are you sure want to delete this?"
                                                                    )
                                                                    if (confirmBox === true) {
                                                                        this.deleteFood(food.foodid)
                                                                    }
                                                                  }}>
                                                                        Delete</button>


                                         <button style={{marginLeft: "10px"}} onClick = { () => this.viewFood(food.foodid)} className="btn btn-info">View </button>
                                       </td>
                                   </tr> 
                                )
                            }
                        </tbody>

                    </table>
                    </div>
                    </div>

            </div>
          </div>
          
        );
    }
}

export default ListFoodComponent;