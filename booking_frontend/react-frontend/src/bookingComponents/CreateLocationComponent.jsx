import React, { Component } from 'react';
import BookingService from '../bookingServices/BookingService';

class CreateLocationComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: 1,
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
        this.changeLocationHandler = this.changeLocationHandler.bind(this);
        this.updateBooking = this.updateBooking.bind(this);
    }

    componentDidMount() {
        BookingService.getBookingById(this.state.id).then((res) => {
            let booking = res.data;

            this.setState({
                eventType: booking.event_type,
                CustomerID: booking.customer_id,
                bookingDate: booking.booking_date,
                locationID: booking.location_id,
                gustsCount: booking.gusts,
                total: booking.total
            });
        });
    }

    //get data to the json
    updateBooking = (e) => {
        e.preventDefault();
        let booking = { event_type: this.state.eventType, booking_date: this.state.bookingDate, gusts: this.state.gustsCount, location_id: this.state.locationID };
        console.log('booking =>' + JSON.stringify(booking));

        BookingService.updateBooking(booking, this.state.id).then(res => {
            this.props.history.push('/bookings');
        });

    }

    changeEventTypeHandler = (event) => {
        this.setState({ eventType: event.target.value });
    }
    changeBookingDateHandler = (event) => {
        this.setState({ bookingDate: event.target.value });
    }
    changeGustsHandler = (event) => {
        this.setState({ gustsCount: event.target.value });
    }

    changeLocationHandler = (event) => {
        this.setState({ locationID: event.target.value });
    }

    //redirect to the booking page
    cancel() {
        this.props.history.push('/bookings');
    }

    render() {
        return (
            <div className="container">
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3" style={{ marginTop: "20px" }}>
                            <h3 className="text-center" >Update Booking</h3>
                            <div className="card-body">
                                <form onSubmit={this.updateBooking.bind(this)}>
                                    <div className="form-group">
                                        <lable>Event type</lable>
                                        <input placeholder="Birthday" name="evenType" className="form-control"
                                            onChange={this.changeEventTypeHandler} value={this.state.eventType} required />
                                    </div>

                                    <div className="form-group">
                                        <lable>Booking Date</lable>
                                        <input placeholder="Date" name="bookingDate" className="form-control"
                                            onChange={this.changeBookingDateHandler} value={this.state.bookingDate} />
                                    </div>

                                    <div className="form-group">
                                        <lable>Number of Gusts</lable>
                                        <input placeholder="no of gusts" name="gustsCount" className="form-control"
                                            onChange={this.changeGustsHandler} value={this.state.gustsCount} />

                                    </div>

                                    <div className="form-group">
                                        <lable>Location ID</lable>
                                        <input placeholder="locationID" name="locationID" className="form-control"
                                            onChange={this.changeLocationHandler} value={this.state.locationID} />

                                    </div>

                                    <input type="submit" className="btn btn-success" style={{ marginTop: "10px" }} value="Update Booking"></input>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px", marginTop: "10px" }}>Cancel</button>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateLocationComponent;