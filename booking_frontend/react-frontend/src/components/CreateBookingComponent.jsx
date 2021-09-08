import React, { Component, useState } from 'react';
import BookingService from '../services/BookingService';
import LocationService from '../services/LocationService';
//import DatePicker from 'react-datepicker';
//import 'react-datepicker/dist/react-datepicker.css';
import 'react-day-picker/lib/style.css';
import DayPickerInput from 'react-day-picker/DayPickerInput';



class CreateBookingComponent extends Component {

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
            toDay: new Date(),

            location: [],
            booking: [],

            year: [],
            month: [],
            date: [],

            allDate: [],
            datePattern: 'gg'
        }


        this.changeEventTypeHandler = this.changeEventTypeHandler.bind(this);
        this.changeBookingDateHandler = this.changeBookingDateHandler.bind(this);
        this.changeGustsHandler = this.changeGustsHandler.bind(this);
        this.changeLocationHandler = this.changeLocationHandler.bind(this);
        this.saveOrUpdateBooking = this.saveOrUpdateBooking.bind(this);
        this.changeTotalPriceHandler = this.changeTotalPriceHandler.bind(this);
        this.disableCustomDt = this.disableCustomDt.bind(this);

    }




    //get data to the json
    saveOrUpdateBooking = (e) => {
        e.preventDefault();
        let booking = { event_type: this.state.eventType, booking_date: this.state.bookingDate, gusts: this.state.gustsCount, location_id: this.state.locationID, date: this.state.toDay };
        //console.log('booking =>' +JSON.stringify(booking));

        if (this.state.id === "_add") {
            let booking = { event_type: this.state.eventType, booking_date: this.state.bookingDate, gusts: this.state.gustsCount, location_id: this.state.locationID, date: this.state.toDay, status:"pending" };
            if (this.state.bookingDate == this.state.datePattern) {

                BookingService.createBooking(booking).then(res => {
                    //console.log(res,"asdasd");
                    var data = res.data.booking_id;
                    //console.log(data,"dasdasdasdada");
                    this.props.history.push(`/view-bookings/${data}`);
                });
            } else {
                const confirmBox = window.alert(
                    "Enter valid date!"
                )
            }


        } else {
            BookingService.updateBooking(booking, this.state.id).then(res => {
                this.props.history.push('/bookings');
            });
        }

    }


    componentDidMount() {

        if (this.state.id === "_add") {
            LocationService.getLocations().then((res) => {
                this.setState({
                    location: res.data
                });
            });
            this.changeTotalPriceHandler();

            BookingService.getBookings().then((res) => {
                this.setState({
                    booking: res.data
                });
            });

        } else {

            BookingService.getBookingById(this.state.id).then((res) => {
                let booking = res.data;
                this.changeTotalPriceHandler();

                this.setState({
                    eventType: booking.event_type,
                    CustomerID: booking.customer_id,
                    bookingDate: booking.booking_date,
                    locationID: booking.location_id,
                    gustsCount: booking.gusts,
                    total: booking.total
                });


                BookingService.getBookings().then((res) => {
                    this.setState({
                        booking: res.data
                    });
                });


                LocationService.getLocations().then((res) => {
                    this.setState({
                        location: res.data
                    });
                });
            });

        }
    }

    changeTotalPriceHandler = (event) => {

        var temp = 0;

        this.state.location.forEach(loc => {
            if (loc.location_id == this.state.locationID)
                temp = loc.locationPrice;
        });

        //this.setState({total: temp});  

        return <div className="form-group" style={{ paddingTop: "20px" }}>
            <lable>Total Price</lable>
            <input name="total" className="form-control"
                value={temp} required />
        </div>


    }


    changeEventTypeHandler = (event) => {
        this.setState({ eventType: event.target.value });
    }
    changeBookingDateHandler = (event) => {
        try {
            var day = '';
            var month = '';
            day = event.getDate();
            month = event.getMonth() + 1;
            if (day < 10) {
                day = '0' + day;
            }
            if (month < 10) {
                month = '0' + month;
            }

            //create booking date formated object
            var date = event.getFullYear() + "-" + month + "-" + day;


            this.setState({ bookingDate: date, datePattern: date });
        } catch (error) {

        }


    }
    changeGustsHandler = (event) => {
        this.setState({ gustsCount: event.target.value });
    }

    changeLocationHandler = (event) => {
        this.setState({ locationID: event.target.value });
        this.changeTotalPriceHandler();
    }




    //redirect to the booking page
    cancel() {
        this.props.history.push('/bookings');
    }


    chageTite() {
        if (this.state.id === "_add") {
            return <h3 className="text-center" >Add Your Booking</h3>
        } else {
            return <h3 className="text-center" >Update Your Booking</h3>
        }
    }


    disableCustomDt() {
        var temp;
        var myArr;
        var i = 0;
        this.state.booking.forEach(book => {
            temp = book.booking_date;
            myArr = temp.split("-");
            //console.log(myArr[0]);
            this.state.year[i] = myArr[0];
            this.state.month[i] = myArr[1] - 1;
            this.state.date[i] = myArr[2];
            i++;


        });

        //console.log(myArr);
        console.log(this.state.year);
        console.log(this.state.month);
        console.log(this.state.date);

        var j = 0;
        const len = this.state.date.length;
        console.log(len);
        while (j < len) {
            this.state.allDate[j] = new Date(this.state.year[j], this.state.month[j], this.state.date[j]);
            j++;
        }

        //console.log(this.state.allDate);
        var placeholder = '';
        var tempReq = false;

        if (this.state.id === "_add") {
            placeholder = 'DD-MM-YYYY';
            tempReq = true;
        } else {
            placeholder = this.state.bookingDate;
        }


        return (
            <div>
                <DayPickerInput inputProps={{ className: 'form-control', required: tempReq }} onDayChange={this.changeBookingDateHandler}
                    placeholder={placeholder}
                    format="DD/MM/YYYY"
                    dayPickerProps={{
                        modifiers: {

                            disabled: this.state.allDate.concat({ before: new Date() })

                        }
                    }}

                />
            </div>
        )

    }





    render() {
        return (
            <div >
                <header class="section background-white" >

                    <div class="line text-center">
                        <h2 class="text-dark text-s-size-30 text-m-size-40 text-l-size-60 text-thin text-line-height-1">Welcome to Booking Section</h2>
                        <br></br>
                    </div>

                    <section class="full-width background-white" >

                        <div className="container shadow-custom bg-image"
                            style={{ backgroundImage: "url('https://www.bricoflor.co.uk/media/catalog/product/cache/7/image/1250x1250/9df78eab33525d08d6e5fb8d27136e95/3/0/305451_8.jpg')" }} >
                            <div className="row">
                                <div className="card col-md-6 offset-md-3 offset-md-3 shadow-custom" style={{ marginTop: "20px" }}>
                                    <br></br>
                                    {this.chageTite()}
                                    <div className="card-body">
                                        <form onSubmit={this.saveOrUpdateBooking.bind(this)}>
                                            <div className="form-group ">
                                                <lable >Event type</lable>
                                                <select name="evenType" className="form-control" onChange={this.changeEventTypeHandler} value={this.state.eventType} required>
                                                    <option value="" disabled={true}>------------Select Event Type------------</option>
                                                    <option value="marriage">Marriage</option>
                                                    <option value="family function">Family Function</option>
                                                    <option value="Birthday">Birthday Party</option>
                                                    <option value="anniversary">Anniversary Party</option>
                                                    <option value="farewell party">Farewell Party</option>
                                                    <option value="college events">College Event</option>
                                                </select>
                                            </div>
                                            <br></br>

                                            <div className="form-group col-md-6 ">
                                                <lable>Booking date</lable>
                                                {this.disableCustomDt()}
                                            </div>
                                            <br></br>

                                            <div className="form-group">
                                                <lable>Number of Gusts</lable>
                                                <input placeholder="no of gusts" name="gustsCount" className="form-control" pattern="[0-9]{1-4}"
                                                    onChange={this.changeGustsHandler} value={this.state.gustsCount} required />

                                            </div>
                                            <br></br>

                                            <div className="form-group col-md-6">
                                                <lable>Location</lable>

                                                <select name="locationID" className="form-control" onChange={this.changeLocationHandler} value={this.state.locationID} placeholder="select one" required>
                                                    <option value="" disabled={true} >------------Select Location------------</option>
                                                    {
                                                        this.state.location.map(
                                                            location =>

                                                                <option value={location.location_id} selected> {location.locationName}</option>

                                                        )
                                                    }

                                                </select>
                                            </div>

                                            <br></br>
                                            <div class="row">
                                                <div class="col-sm-4">
                                                    <div class="card">
                                                        <div class="card-body">
                                                            <h5 class="card-title">GG WP</h5>
                                                            <p class="card-text">what the hell.</p>
                                                            <a href="#" class="btn btn-dark">Go somewhere</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-sm-4">
                                                    <div class="card">
                                                        <div class="card-body">
                                                            <h5 class="card-title">GG WP</h5>
                                                            <p class="card-text">what the hell.</p>
                                                            <a href="#" class="btn btn-dark">Go somewhere</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-sm-4">
                                                    <div class="card">
                                                        <div class="card-body">
                                                            <h5 class="card-title">GG WP</h5>
                                                            <p class="card-text">what the hell.</p>
                                                            <a href="#" class="btn btn-dark">Go somewhere</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>




                                            {
                                                this.changeTotalPriceHandler()
                                            }


                                            <div class="d-grid gap-2 col-6 mx-auto" style={{ marginTop: "20px" }}>
                                                <input type="submit" className="btn btn-success" style={{ marginTop: "20px" }} value="Make Booking"></input>
                                                <button className="btn btn-danger" onClick={this.cancel.bind(this)}>Cancel</button>
                                            </div>
                                            <br></br>
                                            <br></br>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <br></br>
                        </div>
                    </section>
                </header>
            </div>
        );
    }
}

export default CreateBookingComponent;