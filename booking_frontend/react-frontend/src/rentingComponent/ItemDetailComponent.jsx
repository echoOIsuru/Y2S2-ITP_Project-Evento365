import React, { Component } from 'react';
import RentalItemService from '../rentingServices/RentalItemService';



class ItemDetailComponent extends Component {
    constructor(props){
        super(props)
            this.state = {
                rentalitemid : this.props.match.params.rentalitemid,
                name:'',
                quantity:'',
                bookingid:'',
                image:'',
                price:'',
                description: '',
                totalunits:100,
                rentalperday:'',
                availableunits: '',
            }

           this.changeQuantityHandler =  this.changeQuantityHandler.bind(this);
           this.addItem = this.addItem.bind(this);
    }

    changeQuantityHandler = (event) => {
        this.setState({quantity: event.target.value});
    }

    addItem= (e) => {   
        e.preventDefault();

        var data = sessionStorage.getItem('bookingSession');
        data = JSON.parse(data);

        this.state.bookingid = data.booking_id;


        let temporaryitem = {quantity: this.state.quantity,name:this.state.name,
            price:(this.state.quantity*this.state.rentalperday),
            bookingid: data.booking_id};
        console.log('tempraryitem => ' + JSON.stringify(temporaryitem));

        // var flag = 0;

        //30-sep
        
        RentalItemService.retrieveItems(data.booking_id).then((res) => {
            let items = res.data;
            // var len = items.length;
            

            // for (var i = 0; i < len; i++){
            //     if(items[i].name = this.state.name){
            //         flag = 1
            //     }
            // }
        })

        // if (flag == 1){
        //     RentalItemService.updateQuantity(this.state.name).then(res => {
                       
        //     });
        // } else {
            if (this.state.availableunits == 0){
                window.alert("Item not available");
            }
            else if (this.state.availableunits < this.state.quantity){

                window.alert("We have only " + this.state.availableunits + " items");
            }
            else {
                RentalItemService.createTemporaryItemCart(temporaryitem).then(res => {
                    this.props.history.push('/order-detail');
                })
            
                let rentalitem =   {name:this.state.name,
                    description:this.state.description,
                    rentalperday:this.state.rentalperday,
                    image: this.state.image,
                    totalunits:this.state.totalunits,
                    availableunits: this.state.availableunits - this.state.quantity,
                };
               
                RentalItemService.updateAvailable(rentalitem, this.state.rentalitemid).then(res => {
                    
                }); 
    
            }
        // }
    }

    componentDidMount(){
        RentalItemService.getItemsById(this.state.rentalitemid).then((res) => {
            let rentalitem = res.data;
            this.setState({name: rentalitem.name,
                description: rentalitem.description,
                rentalperday: rentalitem.rentalperday,
                description: rentalitem.description,
                image: rentalitem.image,
                availableunits: rentalitem.availableunits,
                totalunits: rentalitem.totalunits,
            }); 

        });

        

    }

    back1(){
        this.props.history.push('/test123');
    }


    render() {
 
        return (
            
        <div>
            <div className="row" style={{paddingTop:"170px", paddingBottom:"170px"}}>

            {/* <center> */}<div>
            <img onClick={this.back1.bind(this)} style={{height:"35px", width:"40px","float": "left",marginLeft:"20px"}} src="../images/back.png"/>
            </div>
            <div class="formrDivitemrent1" >
                <main class="mt-5 pt-4">
                    <div class="container dark-grey-text mt-5">
                        <div class="row wow fadeIn">

                            <div class="col-md-6 mb-4"> 
                            <div>
                            <center>
                                <img style={{width:"400px", height:"400px",borderRadius:"20px",marginRight:"200px"}} src={this.state.image}></img> 
                            </center>
                            </div>
                            </div>

                            <div class="col-md-6 mb-4">  

                                <div class="p-4" style={{marginLeft:"100px"}}>
                                    <p style={{fontSize:"30px",textTransform:"uppercase"}} class="lead font-weight-bold"> {this.state.name} </p>
                                    <p style={{fontSize:"23px", fontWeight:"500"}} class="lead"> Rs.{this.state.rentalperday} Per day </p>
                                    <p style={{fontSize:"18px", fontWeight:"500"}} class="lead">{this.state.description}</p>      
                                    <p class="lead"> Available units : {this.state.availableunits}</p> 
                                     
                                    

                                    <form onSubmit={this.addItem} class="d-flex justify-content-left">
                                        <div className="form-group">
                                            <label> Quantity </label>
                                            <input placeholder="Quantity" name="quantity" className="form-control" 
                                            value={this.state.quantity} onChange={this.changeQuantityHandler} 
                                            pattern="[0-9]{0,4}" title="The quantity should consist of numerical values"required/>
                                            <input style={{width:"150px", height:"40px",marginTop:"20px"}} className="btn btn-success" type="submit" value="Add to booking"></input>
                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>

            {/* </center> */}
</div>
        </div>
        );
    }
}

export default ItemDetailComponent;