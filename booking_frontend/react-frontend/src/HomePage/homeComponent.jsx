import React, { Component } from 'react';
import VehicleService from '../vehiclemanagementServices/VehicleService';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import './home.css';
import homeImg from "../Images/HomepageImg.png";

class homeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            vehicles: [],
            id: sessionStorage.getItem('userloginid')

        }


    }

    viewVehicle(regNo) {
        this.props.history.push(`/user-view-vehicle/${regNo}`)
    }

    componentDidMount() {
        VehicleService.getVehicles().then((res) => {
            this.setState({ vehicles: res.data });

        });
        console.log(this.state.id+'HELELEOOEOEEO');
    }

    goToUserProfile() {
        this.props.history.push(`/view-customer/`+ sessionStorage.getItem('userloginid'));
    }

    goToBooking() {
        this.props.history.push(`/add-bookings/_add`);
    }

    goToEventPlanner(){
        this.props.history.push(`/ui/`+ sessionStorage.getItem('userloginid'));
    }

    render() {
        return (
            <div >
                <header class="section ">
                    <section class="full-width ">
                        <div className="row">
                            <center>
                                <img src={homeImg} style={{ width: 500, height: 250, marginTop: "-50px" }} alt="" />
                            </center>
                            <br />
                            <div >
                                <center>
                                    <Grid container  >
                                        {
                                            <Grid item key={""} xs={12} md={4} lg={3}> <br />
                                                <Paper style={{ width: 250, height: 350 }}>
                                                    <div className="homeCard" >
                                                        <div className="HomeimgCard" >

                                                            <img src={"https://www.clock-software.com/images/blog/Online-booking-systems-200.png"} alt="" />
                                                        </div>
                                                        <br />
                                                        <div className="homeCard-content">

                                                            <div className="homeCard-title">
                                                                <h3 style={{ fontWeight: 'bold' }}>BOOKING</h3>
                                                            </div>

                                                            <div className="homeCard-body">
                                                                <p> Book Your Events Here</p>
                                                            </div>

                                                        </div>

                                                        <div className="HomeBtn" >
                                                            <button style={{ marginTop: 10, width: 100 }} onClick={this.goToBooking.bind(this)} > BOOKING</button>
                                                        </div>
                                                    </div>
                                                </Paper>

                                            </Grid>

                                        }

                                        {
                                            <Grid item key={""} xs={12} md={4} lg={3}> <br />
                                                <Paper style={{ width: 250, height: 350 }}>
                                                    <div className="homeCard" >
                                                        <div className="HomeimgCard" >

                                                            <img src={"https://www.scriptutex.pt/wp-content/uploads/2018/10/loja-online-727x409.jpg"} alt="" />
                                                        </div>
                                                        <br />
                                                        <div className="homeCard-content">

                                                            <div className="homeCard-title">
                                                                <h3 style={{ fontWeight: 'bold' }}>STORE</h3>
                                                            </div>

                                                            <div className="homeCard-body">
                                                                <p> Buy Your Event Items Here </p>
                                                            </div>

                                                        </div>

                                                        <div className="HomeBtn" >
                                                            <button style={{ marginTop: 10, width: 100 }} onClick={"#"} > STORE</button>
                                                        </div>
                                                    </div>
                                                </Paper>

                                            </Grid>

                                        }

                                        {
                                            <Grid item key={""} xs={12} md={4} lg={3}> <br />
                                                <Paper style={{ width: 250, height: 350 }}>
                                                    <div className="homeCard" >
                                                        <div className="HomeimgCard" >

                                                            <img src={"https://media.istockphoto.com/photos/confident-young-businesswoman-networking-with-colleagues-picture-id1200930313?k=20&m=1200930313&s=612x612&w=0&h=sz1uJbBEXdIcx37KFmI5n9n-f_EfvHSOWNYFlbS1HxU="} alt="" />
                                                        </div>
                                                        <br />
                                                        <div className="homeCard-content">

                                                            <div className="homeCard-title">
                                                                <h3 style={{ fontWeight: 'bold' }}>EVENT PLANNERS</h3>
                                                            </div>

                                                            <div className="homeCard-body">
                                                                <p> Hire Event Planners Here </p>
                                                            </div>

                                                        </div>

                                                        <div className="HomeBtn" >
                                                            <button style={{ marginTop: 10, width: 100 }} onClick={this.goToEventPlanner.bind(this)} > View</button>
                                                        </div>
                                                    </div>
                                                </Paper>
                                                <br />
                                            </Grid>

                                        }

                                        {
                                            <Grid item key={""} xs={12} md={4} lg={3}> <br />
                                                <Paper style={{ width: 250, height: 350 }}>
                                                    <div className="homeCard" >
                                                        <div className="HomeimgCard" >

                                                            <img src={"https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"} alt="" />
                                                        </div>
                                                        <br />
                                                        <div className="homeCard-content">

                                                            <div className="homeCard-title">
                                                                <h3 style={{ fontWeight: 'bold' }}>MY PROFILE</h3>
                                                            </div>

                                                            <div className="homeCard-body">
                                                                <p> View Your Profile </p>
                                                            </div>

                                                        </div>

                                                        <div className="HomeBtn" >
                                                            <button style={{ marginTop: 10, width: 100 }} onClick={this.goToUserProfile.bind(this)} > View</button>
                                                        </div>
                                                    </div>
                                                </Paper>
                                                <br />
                                            </Grid>

                                        }

                                    </Grid>
                                </center>


                            </div>
                        </div>
                    </section>
                </header>
            </div>
        );

    }
}

export default homeComponent;




