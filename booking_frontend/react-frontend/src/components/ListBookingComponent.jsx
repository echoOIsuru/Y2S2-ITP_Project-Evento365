import React, { Component } from 'react';
import BookingService from '../services/BookingService';

class ListBookingComponent extends Component {
    constructor(props){
        super(props);

        this.state ={
            all_bookings: []
        }
        this.addBooking =this.addBooking.bind(this);

    }
    
    componentDidMount(){
        BookingService.getBookings().then((res) =>{
            this.setState({all_bookings: res.data});
        });
    }

    addBooking(){
        this.props.history.push('/add-bookings');
    }

    render() {
        return (
            <div className="">
                <h2 className="text-center">Booking List</h2>
                <div className = "row">
                    <button className="btn btn-primary" onClick={this.addBooking}>Create Booking</button>
                </div>
                <div className = "row">
                    <table className = "table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Customer ID</th>
                                <th>Booking Date</th>
                                <th>Event Type</th>                               
                                <th>Location ID</th>                               
                                <th>No of Gusts</th>  
                                <th>Date</th>                              
                                <th>Total</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.all_bookings.map(
                                    bookings =>
                                    <tr key = {bookings.booking_id}>
                                        <td>{bookings.customer_id}</td>
                                        <td>{bookings.booking_date}</td>
                                        <td>{bookings.event_type}</td>
                                        <td>{bookings.location_id}</td>
                                        <td>{bookings.gusts}</td>
                                        <td>{bookings.date}</td>
                                        <td>{bookings.total}</td>
                                    
                                    </tr>
                                )
                            }    
                        </tbody>  
                    </table>
                </div>    
            </div>
        );
    }
}

export default ListBookingComponent;