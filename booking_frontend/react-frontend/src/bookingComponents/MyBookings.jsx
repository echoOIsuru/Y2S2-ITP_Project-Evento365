import React, { Component } from 'react';
import BookingService from '../bookingServices/BookingService';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

class MyBookings extends Component {

    constructor(props) {
        super(props)

        this.state = {
            booking: [],
            deleteBooking: []
        }

        this.viewBooking = this.viewBooking.bind(this);

    }

    componentDidMount() {
        //session storage
        BookingService.getMyBooking(sessionStorage.getItem('userloginid')).then(res => {
            this.setState({ booking: res.data }, () => {
                console.log(this.state.booking, 'check');
            });

        });

        BookingService.getMyDeletedBooking(sessionStorage.getItem('userloginid')).then(res => {
            this.setState({ deleteBooking: res.data }, () => {

            });
        });
    }

    viewBooking(id) {
        this.props.history.push(`/view-bookings/${id}`);

    }

    addBooking(){
        this.props.history.push(`/add-bookings/_add`)
    }

    render() {
        return (
            <div>
                <div className="container">
                    <header class="section background-white">

                        <div class="line text-center">
                            <h2 class="text-dark text-s-size-30 text-m-size-40 text-l-size-60 text-thin text-line-height-1">My Bookings </h2>
                            <br></br>
                        </div>
                        
                                    

                        <section class="formDivgg" style={{ width: 1000, backgroundImage: "url('https://www.bricoflor.co.uk/media/catalog/product/cache/7/image/1250x1250/9df78eab33525d08d6e5fb8d27136e95/3/0/305451_8.jpg')" }}>

                        <button className="btn btn-light btn-sm " onClick={this.addBooking.bind(this)} style={{height:50}}><i class="fa fa-book" ></i> Add New Booking</button>
                            <center>
                                <br></br>
                                <div className="formDivgg" style={{ width: 800 }}>
                                    <h2 className="text-center">Booking Details</h2>
                                    <center>
                                        <Grid container  >

                                            {   this.state.booking.length == 0?<center><div><br/><br/><h1>No Available Bookings</h1></div></center>:

                                                this.state.booking.map(
                                                    booking =>
                                                        <Grid item key={booking.booking_id} xs={3} md={3} lg={6}> <br />
                                                            <Paper style={{ width: 300, height: 450 }}>
                                                                {
                                                                    booking.status == "pending" ?
                                                                        <div>

                                                                            <div className="vmCard" style={{ width: 300, height: 450, backgroundImage: "url('https://cdn5.vectorstock.com/i/thumb-large/67/14/pending-rubber-stamp-vector-12766714.jpg')", backgroundPosition: "center", backgroundSize: "300px" }}>

                                                                                <div className="vmCard-title">
                                                                                    <label> <b>Booking ID</b> : {booking.booking_id} </label>
                                                                                </div>


                                                                                <br></br>
                                                                                <div className="vmCard-body">
                                                                                    <label> <b>Booking Date</b> </label>
                                                                                    <div> {booking.booking_date} </div>

                                                                                    <label><b>Total Amount</b> </label>
                                                                                    <div> {booking.total} </div>

                                                                                    <label> <b>Event Type</b> </label>
                                                                                    <div> {booking.event_type} </div>


                                                                                    <label> <b>Location ID</b> </label>
                                                                                    <div> {booking.location_id} </div>


                                                                                    <label> <b>No of guests</b> </label>
                                                                                    <div> {booking.gusts} </div>

                                                                                    <div className="vmBtn" >
                                                                                        <button style={{ marginTop: 10 }} onClick={() => this.viewBooking(booking.booking_id)} > View Details</button>
                                                                                    </div>


                                                                                </div>
                                                                            </div>

                                                                        </div> : <div>


                                                                            <div className="vmCard" style={{ width: 300, height: 450, backgroundImage: "url('https://images.unsplash.com/photo-1519750783826-e2420f4d687f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnJpZ2h0JTIwYmFja2dyb3VuZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80')", backgroundPosition: "center", backgroundSize: "350px" }}>

                                                                                <div className="vmCard-title">
                                                                                    <label> <b>Booking ID</b> : {booking.booking_id} </label>
                                                                                </div>


                                                                                <br></br>
                                                                                <div className="vmCard-body">
                                                                                    <label> <b>Booking Date</b> </label>
                                                                                    <div> {booking.booking_date} </div>

                                                                                    <label><b>Total Amount</b> </label>
                                                                                    <div> {booking.total} </div>

                                                                                    <label> <b>Event Type</b> </label>
                                                                                    <div> {booking.event_type} </div>


                                                                                    <label> <b>Location ID</b> </label>
                                                                                    <div> {booking.location_id} </div>


                                                                                    <label> <b>No of guests</b> </label>
                                                                                    <div> {booking.gusts} </div>

                                                                                    <div className="vmBtn" >
                                                                                        <button style={{ marginTop: 10 }} onClick={() => this.viewBooking(booking.booking_id)} > View Details</button>
                                                                                    </div>


                                                                                </div>
                                                                            </div>





                                                                        </ div>
                                                                }


                                                            </Paper>
                                                        </Grid>

                                                )

                                            }

                                        </Grid>
                                        <br /><br />
                                        {this.state.deleteBooking.length == 0 ? <div></div> :
                                            <h2 className="text-center">Rejected Bookings</h2>
                                        }

                                        <Grid container  >

                                            {

                                                this.state.deleteBooking.map(
                                                    booking =>
                                                        <Grid item key={booking.booking_id} xs={3} md={3} lg={6}> <br />
                                                            <Paper style={{ width: 300, height: 450, backgroundImage: "url('https://content.presentermedia.com/content/clipart/00003000/3168/red_rejected_stamp_300_nwm.jpg')", backgroundPosition: "center" }}>

                                                                <div className="vmCard" style={{ width: 300, height: 450, }}>

                                                                    <div className="vmCard-title">
                                                                        <label> <b>Booking ID</b> : {booking.booking_id} </label>
                                                                    </div>


                                                                    <br></br>
                                                                    <div className="vmCard-body">
                                                                        <label> <b>Booking Date</b> </label>
                                                                        <div> {booking.booking_date} </div>

                                                                        <label><b>Total Amount</b> </label>
                                                                        <div> {booking.total} </div>

                                                                        <label> <b>Event Type</b> </label>
                                                                        <div> {booking.event_type} </div>


                                                                        <label> <b>Location ID</b> </label>
                                                                        <div> {booking.location_id} </div>


                                                                        <label> <b>No of guests</b> </label>
                                                                        <div> {booking.gusts} </div>

                                                                        <div className="vmBtn" >
                                                                            <button style={{ marginTop: 10 }} disabled={true} onClick={() => this.viewBooking(booking.booking_id)} > View Details</button>
                                                                        </div>


                                                                    </div>
                                                                </div>

                                                            </Paper>
                                                        </Grid>

                                                )

                                            }

                                        </Grid>
                                    </center>
                                </div>
                            </center>
                        </section>

                    </header>

                </div>
            </div>
        );
    }
}

export default MyBookings;