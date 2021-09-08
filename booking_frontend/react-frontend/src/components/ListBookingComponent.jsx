import { Button } from 'bootstrap';
import React, { Component } from 'react';
import BookingService from '../services/BookingService';

class ListBookingComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            all_bookings: [],
            currentPage: 1,
            usersPerPage: 5,
            search: ''
        }
        this.addBooking = this.addBooking.bind(this);
        this.editBooking = this.editBooking.bind(this);
        this.deleteBooking = this.deleteBooking.bind(this);
        this.viewBooking = this.viewBooking.bind(this);
        this.searchChange = this.searchChange.bind(this);

    }

    changePage = event => {
        //console.log(event,"asdasdwqeqwe")
        this.setState({
            [event.target.name]: parseInt(event.target.value) //without bind
            //currentPage: parseInt(event.target.value)  same
        });
    }

    firstPage = () => {
        if (this.state.currentPage > 1) {
            this.setState({
                currentPage: 1
            });
        }
    };

    prevPage = () => {
        if (this.state.currentPage > 1) {
            this.setState({
                currentPage: this.state.currentPage - 1
            });
        }
    };

    lastPage = () => {
        if (this.state.currentPage < Math.ceil(this.state.all_bookings.length / this.state.usersPerPage)) {
            this.setState({
                currentPage: Math.ceil(this.state.all_bookings.length / this.state.usersPerPage)
            });
        }
    };

    nextPage = () => {
        if (this.state.currentPage < Math.ceil(this.state.all_bookings.length / this.state.usersPerPage)) {
            this.setState({
                currentPage: this.state.currentPage + 1
            });
        }
    };

    viewBooking(id) {
        this.props.history.push(`/view-bookings/${id}`);
    }


    deleteBooking(id) {
        BookingService.deleteBooking(id).then(res => {
            this.setState({ all_bookings: this.state.all_bookings.filter(all_bookings => all_bookings.booking_id !== id) });
        });
    }

    editBooking(id) {
        this.props.history.push(`/add-bookings/${id}`);

    }

    componentDidMount() {
        BookingService.getBookings().then((res) => {
            this.setState({ all_bookings: res.data });
        });

    }

    addBooking() {
        this.props.history.push('/add-bookings/_add');
    }

    searchChange(event) {
        this.setState({
            search: event.target.value
        });

        this.searchData();

    }

    cancelSearch = () => {
        this.setState({
            "search": ''
        });

        BookingService.getBookings().then((res) => {
            this.setState({
                all_bookings: res.data
            });

        });
        this.state.currentPage = 1;

    }

    searchData = (e) => {
        BookingService.getSearchBoooking(this.state.search).then((res) => {
            this.setState({
                all_bookings: res.data,
                currentPage: 1
            });
        });
 
    }


    render() {
        const { all_bookings, currentPage, usersPerPage, search } = this.state;
        const lastIndex = currentPage * usersPerPage;
        const firsIndex = lastIndex - usersPerPage;
        const curretBookings = all_bookings.slice(firsIndex, lastIndex);
        const totalPage = Math.ceil(all_bookings.length / usersPerPage);

        return (
            <div className="">

                <main role="main">
                    <header class="section background-white">
                        <article>
                            <div class="line text-center">
                                <h2 class="text-dark text-s-size-30 text-m-size-40 text-l-size-60 text-thin text-line-height-1">Booking List</h2>
                                <br></br>
                            </div>

                            <section class="full-width background-white">

                                <div className="row">
                                    <button className="btn btn-primary" onClick={this.addBooking}>Create Booking</button>
                                </div>
                                <br></br>

                                <div className="row">
                                    <div style={{ background: "#F2F2F2" }}>

                                        <div style={{ "float": "left" }}>
                                            <i class="fa fa-list-alt"> Booking List</i>
                                        </div>

                                        <div style={{ "float": "right" }}>
                                            <div className="input-group btn-group-sm ">
                                                <input type="text" style={{ border: 0 }} className="form-control" placeholder="Search.." name="search"
                                                    value={this.state.search} onChange={this.searchChange} />

                                                <div className="input-group-append btn-group-sm">
                                                    <button className="btn btn-outline-success" onClick={this.searchData}>
                                                        <i class="fa fa-search"></i>

                                                    </button>
                                                    <button className="btn btn-outline-danger" onClick={this.cancelSearch}>
                                                        <i class="fa fa-close"></i>

                                                    </button>

                                                </div>
                                            </div>


                                        </div>
                                        <br /><br />
                                    </div>

                                    <table className="table table-striped table-bordered">
                                        <thead>
                                            <tr>
                                                <th>Customer ID</th>
                                                <th>Booking Date</th>
                                                <th>Event Type</th>
                                                <th>Location ID</th>
                                                <th>No of Gusts</th>
                                                <th>Status</th>
                                                <th>Date</th>
                                                <th>Total</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {curretBookings.length === 0 ?
                                                <tr align="center">
                                                    <td colSpan="6">No Bookings Available</td>
                                                </tr> :
                                                curretBookings.map(
                                                    bookings =>
                                                        <tr key={bookings.booking_id}>
                                                            <td>{bookings.customer_id}</td>
                                                            <td>{bookings.booking_date}</td>
                                                            <td>{bookings.event_type}</td>
                                                            <td>{bookings.location_id}</td>
                                                            <td>{bookings.gusts}</td>
                                                            <td>{bookings.status}</td>
                                                            <td>{bookings.date}</td>
                                                            <td>{bookings.total}</td>
                                                            <td>
                                                            <div class="btn-group" role="group" >
                                                                
                                                                <button onClick={() => this.editBooking(bookings.booking_id)} className="btn btn-outline-success" style={{width:"80px"}}>Update</button>
                                                                
                                                                <button className="btn btn-outline-danger" style={{width:"80px"}}      
                                                                  onClick={() => {
                                                                    const confirmBox = window.confirm(
                                                                      "Do you really want to delete this record?"
                                                                    )
                                                                    if (confirmBox === true) {
                                                                        this.deleteBooking(bookings.booking_id)
                                                                    }
                                                                  }}>Delete</button>
                                                                
                                                                <button onClick={() => this.viewBooking(bookings.booking_id)} className="btn btn-outline-secondary" style={{width:"80px"}}>View</button>
                                                            
                                                            </div>
                                                            </td>
                                                        </tr>
                                                )
                                            }
                                        </tbody>
                                    </table>
                                    <tfoot>
                                        <div style={{ "float": "left" }}>
                                            Showing Page {currentPage} of {totalPage}
                                        </div>
                                        <div style={{ "float": "right" }}>
                                            <div className="input-group mb-3">
                                                <div className="input-group-prepend">
                                                    <button className="btn" disabled={currentPage === 1 ? true : false}
                                                        onClick={this.firstPage}>
                                                        <i class="fa fa-backward"> First</i>

                                                    </button>
                                                    <button className="btn" disabled={currentPage === 1 ? true : false}
                                                        onClick={this.prevPage}>
                                                        <i class="fa fa-step-backward"> Prev</i>

                                                    </button>
                                                </div>
                                                <input type="text" name="currentPage" className="form-control" style={{ width: "50px" }} value={currentPage}
                                                    onChange={this.changePage} />

                                                <div className="input-group-append">
                                                    <button className="btn" disabled={currentPage === totalPage ? true : false}
                                                        onClick={this.nextPage}>
                                                        <i class="fa fa-step-forward"> Next</i>

                                                    </button>
                                                    <button className="btn" disabled={currentPage === totalPage ? true : false}
                                                        onClick={this.lastPage}>
                                                        <i class="fa fa-forward"> Last</i>

                                                    </button>

                                                </div>
                                            </div>
                                        </div>
                                    </tfoot>
                                </div>

                            </section>

                        </article>
                    </header>
                </main>





            </div>
        );
    }
}

export default ListBookingComponent;