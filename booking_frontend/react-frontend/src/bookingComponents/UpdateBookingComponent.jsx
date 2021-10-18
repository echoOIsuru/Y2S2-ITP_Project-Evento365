import React, { Component } from 'react';
import BookingService from '../bookingServices/BookingService';
import LocationService from '../bookingServices/LocationService';

class UpdateBookingComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            eventType: '',
            CustomerID: '',
            bookingDate: '',
            locationID: '',
            gustsCount: '',
            total: '',
            date: '',
            status: '',
            location:[],

        }
        this.changeEventTypeHandler = this.changeEventTypeHandler.bind(this);
        this.changeBookingDateHandler = this.changeBookingDateHandler.bind(this);
        this.changeGustsHandler = this.changeGustsHandler.bind(this);
        this.changeLocationHandler = this.changeLocationHandler.bind(this);
        this.updateBooking = this.updateBooking.bind(this);
        this.changeStatusTypeHandler = this.changeStatusTypeHandler.bind(this);
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
                date: booking.date,
                total: booking.total,
                status: booking.status,
            });

            LocationService.getLocationById(res.data.location_id).then(res=>{
                this.setState({
                    location: res.data
                });
            });
        });

        

    }

    //get data to the json
    updateBooking = (e) => {
        e.preventDefault();
        let booking = {event_type: this.state.eventType, 
            booking_date: this.state.bookingDate, 
            gusts: this.state.gustsCount, 
            location_id: this.state.locationID, 
            date: this.state.date,
            customer_id: this.state.CustomerID,
            total: this.state.total,
            status: this.state.status    
        };
        console.log('booking =>' + JSON.stringify(booking));

        BookingService.updateBooking(booking, this.state.id).then(res => {
            this.props.history.push('/bookings');
        });

    }


    changeStatusTypeHandler = (event) => {
        this.setState({ status: event.target.value });
    }

    changeEventTypeHandler = (event) => {
        this.setState({ eventType: event.target.value });
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
                <header class="section background-white" >

                    <div class="line text-center">
                        <h2 class="text-dark text-s-size-30 text-m-size-40 text-l-size-60 text-thin text-line-height-1">Welcome to Booking Section</h2>
                        <br></br>
                    </div>

                    <section class="full-width background-white" >


                        <div className="container shadow-custom bg-image" style={{ backgroundImage: "url('https://www.bricoflor.co.uk/media/catalog/product/cache/7/image/1250x1250/9df78eab33525d08d6e5fb8d27136e95/3/0/305451_8.jpg')" }}>
                        
                            <div className="container" style={{width:"500px"}}>
                                
                                <div className="row">
                                    
                                    <div className="formDivgg" style={{width:"500px", marginBlockStart:"20px", marginBottom:"20px"}}>
                                         <h2 className="text-center" >Booking Review</h2>
                                        <div>
                                            <form onSubmit={this.updateBooking.bind(this)}>
                                                <div className="form-group">
                                                    <lable>Event type</lable>
                                                    <input placeholder="Birthday" name="evenType" className="form-control"
                                                        onChange={this.changeEventTypeHandler} value={this.state.eventType} readOnly={true}/>
                                                </div>

                                                <div className="form-group">
                                                    <lable>Booking Date</lable>
                                                    <input placeholder="Date" name="bookingDate" className="form-control"
                                                        onChange={this.changeBookingDateHandler} value={this.state.bookingDate} readOnly={true}/>
                                                </div>

                                                <div className="form-group">
                                                    <lable>Number of Gusts</lable>
                                                    <input placeholder="No of gusts" name="gustsCount" className="form-control"
                                                        onChange={this.changeGustsHandler} value={this.state.gustsCount} readOnly={true}/>

                                                </div>

                                                <div className="form-group">
                                                    <lable>Location ID</lable>
                                                    <input placeholder="locationID" name="locationID" className="form-control"
                                                        onChange={this.changeLocationHandler} value={this.state.locationID} readOnly={true}/>

                                                </div>

                                                <div className="form-group">
                                                    <lable>Customer ID</lable>
                                                    <input placeholder="Customer ID" name="cusid" className="form-control"
                                                        value={this.state.CustomerID} readOnly={true}/>

                                                </div>

                                                <div className="form-group">
                                                    <lable>Total Amount</lable>
                                                    <input placeholder="Total" name="total" className="form-control"
                                                         value={this.state.total} readOnly={true}/>

                                                </div>

                                                <div>
                                                <lable>Location Picture</lable>
                                                <center>
                                                <img style={{ height: "300px", width: "400px"}} src={this.state.location.picture} className="img-thumbnail" />
                                                </center>
                                                </div>
                                            
                                                <div className="form-group ">
                                                <lable >Event type</lable>
                                                <select name="evenType" className="form-control"  onChange={this.changeStatusTypeHandler} value={this.state.status} required>
                                                    <option value="pending" selected={this.state.status=="pending"?true:false}>Pending</option>
                                                    <option value="approved" selected={this.state.status=="approved"?true:false}>Approved</option>                                   
                                                </select>
                                            </div>   



                                                <input type="submit" className="btn btn-success" style={{ marginTop: "10px" }} value="Update Booking"></input>
                                                <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px", marginTop: "10px" }}>Cancel</button>

                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </section>
                </header>
            </div>
        );
    }
}

export default UpdateBookingComponent;