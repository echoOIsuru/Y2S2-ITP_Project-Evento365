import React, { Component, useState } from 'react';
import BookingService from '../bookingServices/BookingService';
import LocationService from '../bookingServices/LocationService';
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
            CustomerID: sessionStorage.getItem('userloginid'),
            bookingDate: '',
            locationID: '',
            gustsCount: '',
            total: '', //location total
            toDay: new Date(),
            totalAmount: 0, //for session total


            location: [],
            booking: [],

            year: [],
            month: [],
            date: [],

            allDate: [],
            datePattern: 'gg',
            lastVal: 0 // for final total
        }


        this.changeEventTypeHandler = this.changeEventTypeHandler.bind(this);
        this.changeBookingDateHandler = this.changeBookingDateHandler.bind(this);
        this.changeGustsHandler = this.changeGustsHandler.bind(this);
        this.changeLocationHandler = this.changeLocationHandler.bind(this);
        this.saveOrUpdateBooking = this.saveOrUpdateBooking.bind(this);
        this.changeTotalPriceHandler = this.changeTotalPriceHandler.bind(this);
        this.disableCustomDt = this.disableCustomDt.bind(this);
        this.TotalPrice = this.TotalPrice.bind(this);

    }




    //get data to the json
    saveOrUpdateBooking = (e) => {
        e.preventDefault();

        //console.log('booking =>' +JSON.stringify(booking));

        if (this.state.id === "_add") {
            let booking = { event_type: this.state.eventType, booking_date: this.state.bookingDate, gusts: this.state.gustsCount, location_id: this.state.locationID, date: this.state.toDay, status: "pending", total: this.state.total, customer_id:sessionStorage.getItem('userloginid') };
            if (this.state.bookingDate == this.state.datePattern && this.state.gustsCount <= 1000) {

                BookingService.createBooking(booking).then(res => {
                    //console.log(res,"asdasd");
                    var data = res.data.booking_id;
                    //console.log(data,"dasdasdasdada");
                    this.props.history.push(`/view-bookings/${data}`);
                });
            } else {
                if (this.state.gustsCount > 1000) {
                    const confirmBox = window.alert(
                        "Maximum guests count is 500 only!"
                    )
                } else {

                    const confirmBox = window.alert(
                        "Enter valid date!"
                    )
                }
            }

        } else if (this.state.id === "_price") {
            let booking = { event_type: this.state.eventType, booking_date: this.state.bookingDate, gusts: this.state.gustsCount, location_id: this.state.locationID, status: "pending", customer_id:sessionStorage.getItem('userloginid'), total: this. calcTotal() };

            if (this.state.bookingDate == this.state.datePattern && this.state.gustsCount <= 1000) {
                var data = sessionStorage.getItem('bookingSession');
                data = JSON.parse(data);


                BookingService.updateBooking(booking, data.booking_id).then(res => {


                    var data = res.data.booking_id;
                    this.props.history.push(`/view-bookings/${data}`);
                });
            } else {


                if (this.state.gustsCount > 1000) {
                    const confirmBox = window.alert(
                        "Maximum guests count is 500 only!"
                    )
                } else {

                    const confirmBox = window.alert(
                        "Enter valid date!"
                    )
                }
            }


        } else {
            let booking = { event_type: this.state.eventType, booking_date: this.state.bookingDate, gusts: this.state.gustsCount, location_id: this.state.locationID, status: "pending", total: this.state.total,  customer_id:sessionStorage.getItem('userloginid') };

            if (this.state.bookingDate == this.state.datePattern && this.state.gustsCount <= 1000) {
                BookingService.updateBooking(booking, this.state.id).then(res => {


                    var data = res.data.booking_id;
                    this.props.history.push(`/view-bookings/${data}`);
                });
            } else {


                if (this.state.gustsCount > 1000) {
                    const confirmBox = window.alert(
                        "Maximum guests count is 500 only!"
                    )
                } else {

                    const confirmBox = window.alert(
                        "Enter valid date!"
                    )
                }
            }
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

        } else if (this.state.id === "_price") {

            //Booking data catch
            var data = sessionStorage.getItem('bookingSession');
            data = JSON.parse(data);
            console.log(data, "RETURN VALUES-------->");

            this.setState({
                eventType: data.event_type,
                CustomerID: data.customer_id,
                bookingDate: data.booking_date,
                locationID: data.location_id,
                gustsCount: data.gusts,
                totalAmount: data.total,
            })

            //this.state.finalAmount = this.state.finalAmount+data.total;

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
            if (loc.location_id == this.state.locationID) {
                temp = loc.locationPrice;
                this.state.total = loc.locationPrice;
            }
        });

        //this.setState({total: temp});  

        //pass Location Name
        var loName;
        var link;

        this.state.location.forEach(location => {
            if (this.state.locationID == location.location_id) {
                loName = location.locationName;
                link = location.picture;
            }
        });

        //make session
        let obj = { name: loName, link: link };
        sessionStorage.setItem('locationName', JSON.stringify(obj));


        return <div style={{ paddingTop: "20px", textAlign: "right" }}>

            <label >
                <h3> Rs: {temp} </h3>
            </label>
        </div>


    }

    calcTotal(){
        let temp = this.state.totalAmount + parseInt(this.state.total);
        let lasttotal = this.state.lastVal + temp
        return lasttotal;
    }


    TotalPrice() {// meka hama state refresh ekkama cal wena ekai awla
        let temp = this.state.totalAmount + parseInt(this.state.total);

        //console.log(this.state.finalAmount,"Final Totalllllllllllllllllllllll")

        //var last =  this.state.finalAmount + temp;

        //this.state.finalAmount = last;
        //this.state.lastVal = temp;

        let lasttotal = this.state.lastVal + temp

      

        console.log(this.state.lastVal, "VALUEUUUUUUU")

        if (temp > 0) {
            return <div className="form-group  formDivgg" style={{background:"white"}}>
                <div style={{ paddingTop: "20px", textAlign: "right" }}>
                    <lable ><h5>Total Price</h5></lable>
                    <lable >
                        <h2> Rs: {lasttotal}</h2> </lable>
                </div>
            </div>
        }
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
        this.props.history.push('/homepage');
    }


    myBookings(){
        this.props.history.push('/my-bookings');
    }

    chageTite() {
        if (this.state.id === "_add") {
            return <h2 className="text-center" >Add Your Booking</h2>
        } else {
            return <h2 className="text-center" >Update Your Booking</h2>
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
            placeholder = this.state.bookingDate;
            this.state.datePattern = placeholder;
            tempReq = true;
        } else {
            placeholder = this.state.bookingDate;
            this.state.datePattern = placeholder;
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

    testSession() {
        let data = sessionStorage.getItem('testCase');
        console.log(data, "SESSIONNNNNNNNNNNNNNNNNNN");
    }


    bookingSession(data) {
        sessionStorage.setItem('bookingSession', JSON.stringify(data));
    }

    goToVh() {
        let booking = { event_type: this.state.eventType, booking_date: this.state.bookingDate, gusts: this.state.gustsCount, location_id: this.state.locationID, date: this.state.toDay, status: "pending", total: this.state.finalAmount };
        
        BookingService.createBooking(booking).then(res => {


            this.bookingSession(res.data);
            this.props.history.push(`/user-vehicle`);
        });
     
    }

    goToFd() {
        let booking = { event_type: this.state.eventType, booking_date: this.state.bookingDate, gusts: this.state.gustsCount, location_id: this.state.locationID, date: this.state.toDay, status: "pending", total: this.state.finalAmount };
       
            BookingService.createBooking(booking).then(res => {


                this.bookingSession(res.data);
                this.props.history.push(`/cusview`);
            });
     
    }

    goToEq() {
        let booking = { event_type: this.state.eventType, booking_date: this.state.bookingDate, gusts: this.state.gustsCount, location_id: this.state.locationID, date: this.state.toDay, status: "pending", total: this.state.finalAmount };

        
            BookingService.createBooking(booking).then(res => {


                this.bookingSession(res.data);
                this.props.history.push(`/test123`);
            });
      
    }

    render() {
        return (
            <div className="container">
                <header class="section background-white" >

                    <div class="line text-center">
                        <h2 class="text-dark text-s-size-30 text-m-size-40 text-l-size-60 text-thin text-line-height-1">Welcome to the Booking Section</h2>
                        <br></br>
                        {this.testSession()}
                    </div>

                    <section class="full-width background-white" >
                    
                        <div className="container formDivgg"
                            style={{ backgroundImage: "url('https://www.bricoflor.co.uk/media/catalog/product/cache/7/image/1250x1250/9df78eab33525d08d6e5fb8d27136e95/3/0/305451_8.jpg')" }} >
                            
                            
                            <div className="row ">
                                <div className="" style={{ marginTop: "20px" }}>

                                <button className="btn btn-light btn-sm" onClick={this.myBookings.bind(this)} style={{height:50}}><i class="fa fa-search" ></i>  My Bookings</button>
                                    
                                    <br></br>
                                    <div className="card-body" style={{width:"1200px"}}>
                                        <div className="col-md-6 offset-md-3 offset-md-3 formDivgg">
                                            {this.chageTite()}
                                        </div>

                                        <div className="col-md-6 offset-md-3 offset-md-3 formDivgg">
                                            <form onSubmit={this.saveOrUpdateBooking.bind(this)}>
                                                <div className="form-group formDivgg">
                                                    <lable ><b>Event type</b></lable>
                                                    <select name="evenType" className="form-control " onChange={this.changeEventTypeHandler} value={this.state.eventType} required>
                                                        <option value="" disabled={true} style={{ textAlign: "center" }}>------------Select Event Type------------</option>
                                                        <option value="Marriage">Marriage</option>
                                                        <option value="Family function">Family Function</option>
                                                        <option value="Birthday">Birthday Party</option>
                                                        <option value="Anniversary">Anniversary Party</option>
                                                        <option value="Farewell party">Farewell Party</option>
                                                        <option value="College events">College Event</option>
                                                    </select>
                                                </div>
                                                <br></br>

                                                    <div className="form-group formDivgg col-md-6 ">
                                                    <lable><b>Booking date</b></lable>
                                                    {this.disableCustomDt()}
                                                </div>
                                                <br></br>

                                                <div className="form-group formDivgg" >
                                                    <lable><b>Number of Guests</b></lable>
                                                    <input type="number" placeholder="No of Guest" name="GustsCount" className="form-control" min="1" max="1000" 
                                                        onChange={this.changeGustsHandler} value={this.state.gustsCount} required />

                                                </div>
                                                <br></br>

                                                <div className="form-group  formDivgg" >
                                                    <lable><b>Location</b></lable>

                                                    <select style={{ width: "300px" }} name="locationID" className="form-control" onChange={this.changeLocationHandler} value={this.state.locationID} placeholder="select one" required>
                                                        <option value="" disabled={true} style={{ textAlign: "center" }}>-------Select Location-------</option>
                                                        {
                                                            this.state.location.map(
                                                                location =>

                                                                    <option value={location.location_id} selected> {location.locationName}</option>

                                                            )
                                                        }

                                                    </select>
                                                    {
                                                        this.changeTotalPriceHandler()
                                                    }
                                                </div>




                                                <br></br>
                                                <div class="row" >
                                                    <div class="col-sm-4 " >
                                                        
                                                            <div class="card-body formDivgg">
                                                                <img src="../images/eq.jpg" style={{width:"130px",height:"130px"}}></img>
                                                                {/* <h5 class="card-title">GG WP</h5> */}
                                                                {/* <p class="card-text">what the hell.</p> */}
                                                                <a onClick={this.goToEq.bind(this)} class="btn btn-info" style={{width:"130px"}}>Rental Items</a>
                                                            </div>
                                                        
                                                    </div>
                                                    <div class="col-sm-4">
                                                       
                                                            <div class="card-body formDivgg">
                                                                <img src="../images/fd.jpg" style={{width:"130px",height:"130px"}}></img>
                                                                {/* <h5 class="card-title">GG WP</h5> */}
                                                                {/* <p class="card-text">what the hell.</p> */}
                                                                <a onClick={this.goToFd.bind(this)} class="btn btn-info" style={{width:"130px"}}>Foods</a>
                                                            </div>
                                                       
                                                    </div>
                                                    <div class="col-sm-4">
                                                       
                                                            <div class="card-body formDivgg">
                                                                <img src="../images/vh.jpg" style={{width:"130px",height:"130px"}}></img>
                                                                {/* <h5 class="card-title">GG WP</h5> */}
                                                                {/* <p class="card-text">what the hell.</p> */}
                                                                <a onClick={this.goToVh.bind(this)} class="btn btn-info" style={{width:"130px"}}>Rent Vehicle</a>
                                                            </div>
                                                        
                                                    </div>
                                                </div>




                                                <br></br>   
                                                
                                                {
                                                    this.TotalPrice()
                                                }
                                                
                                                <div class="d-grid gap-2 col-6 mx-auto" style={{ marginTop: "20px" }}>
                                                    <input type="submit" className="btn btn-success formDivgg" style={{ marginTop: "20px" }} value="Make Booking"></input>
                                                    <button className="btn btn-danger formDivgg" onClick={this.cancel.bind(this)}>Cancel</button>
                                                
                                                </div>

                                                <br></br>
                                                <br></br>

                                            </form>
                                        </div>
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