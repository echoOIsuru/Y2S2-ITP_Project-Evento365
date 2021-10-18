import React, { Component } from 'react'
import FoodService from '../foodServices/FoodService';

export default class bookfoodlistcomponent extends Component {
    constructor (props){
        super(props)

        this.state = {
            
            // fid: this.props.match.params.id,
            bookfood:[],
            bookingid:'',
            Alltotal:0
        }

       
        this.addtobooking = this.addtobooking.bind(this);
        this.addFood = this.addFood.bind(this);
    }

    addFood(){
        this.props.history.push('/cusview');
    }

    deleteFood(order_food_id){
        
        FoodService.deletebookfood(order_food_id).then( res => {

            this.setState({bookfood: this.state.bookfood.filter(bookfood => bookfood.order_food_id !== order_food_id)});

        });
    }


    addtobooking =(e) => {
        e.preventDefault();

        // let confirmFood = {booking_id: this.state.bookingid ,total:this.state.Alltotal};

        // console.log('bookFood => ' + JSON.stringify(confirmFood));

        // // if (this.state.count > 500){
        // //     window.alert("no of plates count doesnt grater than 500");
        // // }

        // FoodService.createconfirmfood(confirmFood).then(res => {

       
        //         //  this.props.history.push(`/confirm/${3}`);
        let itemrent = {bookingid: this.state.bookingid, totalprice:this.state.Alltotal};
        console.log('itemrent => ' + JSON.stringify(itemrent));
        
        var data = sessionStorage.getItem('bookingSession');
        data = JSON.parse(data);

        data.total = this.state.Alltotal;    
        sessionStorage.setItem('bookingSession',JSON.stringify(data));


        // data.count = this.state.Allcount;  
        // if (this.state.Alltotal > 1000){
        //         window.alert("no of plates count doesnt grater than 1000");
        //     }


        this.props.history.push('/add-bookings/_price');

    
        // });    
    }




    componentDidMount(){

        
        var data = sessionStorage.getItem('bookingSession');

        data = JSON.parse(data);

        this.state.bookingid = data.booking_id;

         FoodService.getConfirmFoodpackages(data.booking_id).then((res) => {
            this.setState({ bookfood: res.data});  
            this.calculatetot(res.data);
            console.log("RESSSSSSS",res.data);
            this.calculatecount(res.data);

            if (this.state.Allcount > 1000){
                window.alert("no of plates count doesnt grater than 1000");
            }


        });

    }

    
    calculatetot(data){
        var total =0;
        data.forEach(tp => {
             total+=parseInt(tp.total);
        })
        console.log("TOTALllllllllllllllll",total);
            this.state.Alltotal =total;


    }

    calculatecount(data){
        var count =0;
        data.forEach(tp => {
             count+=parseInt(tp.count);
        })
        console.log("TOTALllllllllllllllll",count);
            this.state.Allcount =count;


            // if (this.state.Allcount > 1000){
            //     window.alert("no of plates count doesnt grater than 1000");
            // }

    }


    render() {
        
        return (
            <div className="container">    
            <div>
                <br></br><br></br><br></br><br></br><br></br>
                
                <div className="text-center">
                <h2 style={{marginBottom: "30px" , marginTop: "10px" }} className="test-center">FOOD PACKAGES</h2>
                </div>
                <div className = "row">
                <div className="foodtable">
                    <table style={{ backgroundColor: "rgba(255, 237, 213, 0.8)" }} className = "table table-striped table-bordered">
                        <thead>
                            <tr className="customerTR">
                                <th style={{textAlign:"center", fontSize:"20px",width:"10%"}}>Food package Name </th>
                                <th style={{textAlign:"center",fontSize:"20px", width:"10%"}}>Food Types </th>
                                <th style={{textAlign:"center",fontSize:"20px", width:"20%"}}>Count</th>
                                <th style={{textAlign:"center",fontSize:"20px", width:"10%"}}>Total price</th>
                                <th style={{textAlign:"center",fontSize:"20px", width:"10%"}}>Actions</th>
                            </tr>
                        </thead>

                        <tbody className="customerTbody">
                            {
                                this.state.bookfood.map(
                                    bookfood =>
                                   <tr  key ={bookfood.order_food_id}>
                                       <td style={{textAlign:"center",fontSize:"17px"}}> {bookfood.food_package_name} </td>
                                       <td style={{textAlign:"center",fontSize:"17px"}}> {bookfood.food_package_id} </td>
                                       <td style={{textAlign:"center",fontSize:"17px"}}> {bookfood.count} </td>
                                       <td style={{textAlign:"center",fontSize:"17px"}}> {bookfood.total} </td>
                                       <td style={{textAlign:"center",fontSize:"17px"}}>
                                       <button  className="btn btn-danger" 
                                           //Delete validation
                                                    onClick={() => {  const confirmBox = window.confirm(
                                                                      "Are ypu sure want to delete this?"
                                                                    )
                                                                    if (confirmBox === true) {
                                                                        this.deleteFood(bookfood.order_food_id)
                                                                    }
                                                                  }}>
                                                                        Delete Booking</button>
                                       </td>
                                   </tr> 
                                )
                            }
                        </tbody>

                    </table>

                    <div className = "row">
                    <button style={{ marginBottom: "10px" , marginTop: "10px" , width: "200px"}} className="btn btn-primary" onClick={this.addFood}> Add Food</button>
                    <button style={{ marginBottom: "10px" , marginTop: "-50px" , width: "200px", marginLeft: "1300px"}} className="btn btn-primary" onClick={this.addtobooking}>Add to booking</button>

                    </div>


                    </div>
                </div>
            </div>
        </div>
        )
    }
}
