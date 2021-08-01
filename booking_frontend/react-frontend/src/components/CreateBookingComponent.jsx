import React, { Component } from 'react';
import BookingService from '../services/BookingService';

class CreateBookingComponent extends Component {
    constructor(props){
        super(props)

        this.state ={
            eventType: '',
            CustomerID: '',
            bookingDate: '',
            locationID: '',
            gustsCount: '',
            total: ''
        }
        this.changeEventTypeHandler = this.changeEventTypeHandler.bind(this);
        this.changeBookingDateHandler = this.changeBookingDateHandler.bind(this);
        this.changeGustsHandler = this.changeGustsHandler.bind(this);
        this.saveBooking = this.saveBooking.bind(this);
    }
   
    //get data to the json
    saveBooking = (e) => {
        e.preventDefault();
        let booking = {event_type:this.state.eventType, booking_date:this.state.bookingDate, gusts:this.state.gustsCount};
        console.log('booking =>' +JSON.stringify(booking));
        
        BookingService.createBooking(booking).then(res =>{
            this.props.history.push('/bookings');
        });
    }

    changeEventTypeHandler= (event) =>{
        this.setState({eventType: event.target.value});
    }
    changeBookingDateHandler= (event) =>{
        this.setState({bookingDate: event.target.value});
    }
    changeGustsHandler= (event) =>{
        this.setState({gustsCount: event.target.value});
    }

    //redirect to the booking page
    cancel(){
        this.props.history.push('/bookings');
    }

    render() {
        return (
            <div>
                <div className = "container">
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Add Booking</h3>
                            <div className="card-body">
                                <form>
                                    <div className = "form-group">
                                    <lable>Event type</lable>
                                    <input placeholder="Birthday" name="evenType" className="form-control" 
                                            onChange={this.changeEventTypeHandler} value={this.state.eventType}/>
                                    </div>

                                    <div className = "form-group">
                                    <lable>Booking Date</lable>
                                    <input placeholder="Date" name="bookingDate" className="form-control" 
                                           onChange={this.changeBookingDateHandler} value={this.state.bookingDate}/>
                                    </div>

                                    <div className = "form-group">
                                    <lable>Number of Gusts</lable>
                                    <input placeholder="no of gusts" name="gustsCount" className="form-control" 
                                           onChange={this.changeGustsHandler} value={this.state.gustsCount}/>
                                           
                                    </div>
                                    
                                    <button className="btn btn-success" onClick={this.saveBooking.bind(this)} style={{marginTop: "10px"}}>Make Booking</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px" ,marginTop: "10px"}}>Cancel</button>

                                </form>   
                            </div>
                        </div>  
                    </div>   
                </div>
            </div>
        );
    }
}

export default CreateBookingComponent;