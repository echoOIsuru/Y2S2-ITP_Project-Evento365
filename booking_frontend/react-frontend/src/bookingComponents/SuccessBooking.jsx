import React, { Component, useState } from 'react';
import BookingService from '../bookingServices/BookingService';
import LocationService from '../bookingServices/LocationService';

class SuccessBooking extends Component {

    constructor(props) {
        super(props)

        this.state = {
            booking: []
        }
    }

    componentDidMount() {
        BookingService.getLastBooking().then(res => {
            this.setState({ booking: res.data }, () => {
                console.log(this.state.booking, 'check');
            });

        });
        
        var data = sessionStorage.getItem('bookingSession');
        data = JSON.parse(data);

        console.log(data,"JSON");
        data.total = 800000;    
       sessionStorage.setItem('bookingSession',JSON.stringify(data));
        
    }


    
    goToFd(){
      
        this.props.history.push('/add-bookings/_price');
    }

    render() {
        return (
            <div className="container">
                <header class="section background-white">

                    <div class="line text-center">
                        <h2 class="text-dark text-s-size-30 text-m-size-40 text-l-size-60 text-thin text-line-height-1">Booking </h2>
                        <br></br>
                    </div>

                    <section class="full-width background-white">



                        <br></br>
                        <div className="card col-md-6 offset-md-3">
                            <h3 className="text-center">Booking Details</h3>
                            <button onClick={this.goToFd.bind(this)}>GO</button>
                            <div className="card-body">

                                {

                                    this.state.booking.map(
                                        booking =>
                                            <div>
                                                <div className="row">
                                                    <label> <b>Booking ID</b> : {booking.booking_id} </label>
                                                </div>
                                                <br></br>
                                                <div className="row">
                                                    <label> <b>Booking Date</b> </label>
                                                    <div> {booking.booking_date} </div>
                                                </div>
                                                <div className="row">
                                                    <label> <b>Event Type</b> </label>
                                                    <div> {booking.event_type} </div>
                                                </div>
                                                <div className="row">
                                                    <label> <b>Location ID</b> </label>
                                                    <div> {booking.location_id} </div>
                                                </div>
                                                <div className="row">
                                                    <label> <b>No of guests</b> </label>
                                                    <div> {booking.gusts} </div>
                                                </div>
                                                <div className="row">
                                                    <label><b>Total Amount</b> </label>
                                                    <div> {booking.total} </div>
                                                </div>

                                            </div>

                                    )

                                }

                            </div>
                        </div>

                    </section>

                </header>

            </div>
        );
    }
}

export default SuccessBooking;