import React, { Component } from 'react';
import RentalItemService from '../rentingServices/RentalItemService';

class OrderDetailComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            temporaryitems: [],
            bookingid:'',
            Alltotal:0
        }
        this.deleteTemporaryitem = this.deleteTemporaryitem.bind(this);
        this.confirm = this.confirm.bind(this);
        this.addMore = this.addMore.bind(this);
    }

    deleteTemporaryitem(rentalid){
        if(window.confirm('Are you sure, want to remove?')) {
            RentalItemService.deleteTemporaryitem(rentalid).then( res => {
                this.setState({temporaryitems: this.state.temporaryitems.filter(temporaryitem => temporaryitem.rentalid !== rentalid)});
            });
        }
    }

    confirm= (e) =>{
        //Redirect to isuru booking with total price
        e.preventDefault();
        let itemrent = {bookingid: this.state.bookingid, totalprice:this.state.Alltotal};
        console.log('itemrent => ' + JSON.stringify(itemrent));
        
        var data = sessionStorage.getItem('bookingSession');
        data = JSON.parse(data);

        data.total = this.state.Alltotal;    
        sessionStorage.setItem('bookingSession',JSON.stringify(data));

        this.props.history.push('/add-bookings/_price');
        RentalItemService.createRentHistory(itemrent).then(res => {
            
        });
    }

    addMore(){
        this.props.history.push('/test123');
    }

    componentDidMount(){
        // RentalItemService.getTemporaryItems().then((res) => {
        //     this.setState({ temporaryitems: res.data});
        //     this.calculate(res.data);
        // });

        var data = sessionStorage.getItem('bookingSession');
        data = JSON.parse(data);

        

        RentalItemService.retrieveItems(data.booking_id).then((res) => {
            this.setState({temporaryitems: res.data});
            this.calculate(res.data);
        })
    }

    calculate(data){
        var total =0;
        data.forEach(tp => {
             total+=tp.price;
        })
            this.state.Alltotal =total;
        //console.log(total,"TOTAL");
    }

    render() {
        return (
            <div>
                <div className="row" style={{paddingTop:"170px", paddingBottom:"170px"}}>
                <center>
                <div class="formrDivitemrent2">
                <h2 className="text-center"> Order Details </h2>
                <div className="row">
                </div>
                <div className = "row">
                    <table className = "table  table-hover table bordered ">
                        <thead>
                            <tr> 
                                <th>Item Name</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.temporaryitems.map(
                                    temporaryitem =>
                                    <tr key = {temporaryitem.rentalid}>
                                        <td> {temporaryitem.name}</td>
                                        <td> {temporaryitem.quantity}</td>
                                        <td> {temporaryitem.price}</td>
                                        <td>
                                            <button onClick={ () => this.deleteTemporaryitem(temporaryitem.rentalid)} className="btn btn-info"> Remove </button>
                                        </td>                               
                                    </tr>
                                )
                            }
                            <tr>
                                <td>
                                <button onClick= {this.confirm} className="btn btn-danger"> Confirm </button>
                                </td>
                                <td>
                                <button onClick= {this.addMore} className="btn btn-info"> Add more </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                </div>
                </div>
                </center>
                </div>
            </div>
        );
    }
}

export default OrderDetailComponent;