import React, { Component } from 'react';
import LocationService from '../bookingServices/LocationService';
import CreateLocationComponent from './CreateLocationComponent';

class ListLocationComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            all_Locations: [],
            currentPage: 1,
            usersPerPage: 3,
            search: '',
            //location param
            locationID: 0,
            locationName: '',
            locationPrice: '',
            picture: '',
            address: '',
            maxCount: '',
            tempState: 0


        }
        // this.addLocation = this.addLocation.bind(this);
        //this.editLocation = this.editLocation.bind(this);
        this.deleteLocation = this.deleteLocation.bind(this);
        // this.viewLocation = this.viewLocation.bind(this);
        this.searchChange = this.searchChange.bind(this);
        this.changeLocationNameHandler = this.changeLocationNameHandler.bind(this);
        this.locationForm = this.locationForm.bind(this);
        //this.makeButton = this.makeButton.bind(this);
        this.addNewLocation = this.addNewLocation.bind(this);
        this.updateLocation = this.updateLocation.bind(this);

    }

    changeLocationNameHandler = (event) => {
        this.setState({ locationName: event.target.value });
    }
    changeLocationAddressHandler = (event) => {
        this.setState({ address: event.target.value });
    }
    changeLocationCountHandler = (event) => {
        this.setState({ maxCount: event.target.value });
    }

    changeLocationPictureHandler = (event) => {
        this.setState({ picture: event.target.value });
    }

    changeLocationPriceHandler = (event) => {
        this.setState({ locationPrice: event.target.value });
    }

    // makeButton() {
    //     if (this.state.tempState >= 1) {
    //         return (
    //             <div><br />
    //                 <button className="btn btn-dark" onClick={this.updateLocation()}>Update Details</button>
    //             </div>
    //         )
    //     }
    // }

    locationFormClean() {
        this.setState({
            locationID: '',
            locationName: '',
            location_date: '',
            locationPrice: '',
            picture: '',
            address: '',
            maxCount: ''
        });

        this.locationForm();
    }

    locationForm(id) {

        if (id >= 1) {
            LocationService.getLocationById(id).then((res) => {
                let location = res.data;
                this.state.tempState = id;
                //console.log(id,"SSSSSSSSSSSSSSSSSSSSSSSS");
                this.setState({
                    locationID: location.location_id,
                    locationName: location.locationName,
                    location_date: location.location_date,
                    locationPrice: location.locationPrice,
                    picture: location.picture,
                    address: location.address,
                    maxCount: location.maxCount
                });

            });
        } else if (id < 1) {
            this.state.tempState = -2;
            console.log(this.state.tempState, "SSSSSSSSSSSSSSSSSSSSSSSS");
        }

        return (

            <div>
                <form>
                    <div className="form-group">
                        <lable>Location Name</lable>
                        <input placeholder="Location Name" name="evenType" className="form-control"
                            onChange={this.changeLocationNameHandler} value={this.state.locationName} required />

                    </div>
                    <div className="form-group">
                        <lable>Location Price</lable>
                        <input type="number" placeholder="Price" name="evenType" className="form-control"
                            onChange={this.changeLocationPriceHandler} value={this.state.locationPrice} required />

                    </div>
                    <div className="form-group">
                        <lable>Location Address</lable>
                        <input placeholder="Address" name="evenType" className="form-control"
                            onChange={this.changeLocationAddressHandler} value={this.state.address} required />

                    </div>
                    <div className="form-group">
                        <lable>Avarage Guest</lable>
                        <input type="number" placeholder="Count" name="evenType" className="form-control"
                            onChange={this.changeLocationCountHandler} value={this.state.maxCount} required />

                    </div>
                    <div className="form-group">
                        <lable>Location Picture</lable>
                        <input placeholder="Picture url" name="evenType" className="form-control"
                            onChange={this.changeLocationPictureHandler} value={this.state.picture} required />

                    </div>

                    <br />
                    <div class="btn-group btn-group-sm" role="group" aria-label="Basic example">
                        <button className="btn btn-outline-primary" onClick={this.updateLocation}>Update Details</button>
                        <br /><br />
                        <button className="btn btn-outline-success" style={{ width: "120px" }} onClick={this.addNewLocation}>ADD Details</button>
                    </div>
                </form>

            </div>
        )

    }



    changePage = event => {
        this.setState({
            [event.target.name]: parseInt(event.target.value)
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
        if (this.state.currentPage < Math.ceil(this.state.all_Locations.length / this.state.usersPerPage)) {
            this.setState({
                currentPage: Math.ceil(this.state.all_Locations.length / this.state.usersPerPage)
            });
        }
    };

    nextPage = () => {
        if (this.state.currentPage < Math.ceil(this.state.all_Locations.length / this.state.usersPerPage)) {
            this.setState({
                currentPage: this.state.currentPage + 1
            });
        }
    };


    deleteLocation(id) {
        LocationService.deleteLocation(id).then(res => {
        });
        window.location.reload();
    }

    // editLocation(id) {
    //     this.props.history.push(`/add-Locations/${id}`);

    // }

    componentDidMount() {
        LocationService.getLocations().then((res) => {
            this.setState({ all_Locations: res.data });
        });

    }

    // addLocation() {
    //     this.props.history.push('/add-Locations/_add');
    // }

    searchChange(event) {
        this.setState({
            search: event.target.value
        });

        //this.searchData();
    }

    cancelSearch = () => {
        this.setState({
            "search": ''
        });

        LocationService.getLocations().then((res) => {
            this.setState({
                all_Locations: res.data
            });

        });
        this.state.currentPage = 1;

    }

    searchData = (e) => {
        var check;

        check = this.state.search.charAt(0)

        //console.log(check,"E-VALUE");

        if (check != '>' && check != '<') {
            LocationService.getSearchBoooking(this.state.search).then((res) => {
                this.setState({
                    all_Locations: res.data,
                    currentPage: 1
                });
            });
        } else if (check == '>') {
            var value = this.state.search.substring(1);
            LocationService.getMaxPrice(value).then(res => {
                this.setState({
                    all_Locations: res.data,
                    currentPage: 1
                })

            });
        } else {
            var value = this.state.search.substring(1);
            LocationService.getMinPrice(value).then(res => {
                this.setState({
                    all_Locations: res.data,
                    currentPage: 1
                })

            });
        }

    }


    addNewLocation(e) {
        e.preventDefault();
        let location = { locationName: this.state.locationName, locationPrice: this.state.locationPrice, picture: this.state.picture, address: this.state.address, maxCount: this.state.maxCount }

        if (this.state.locationName == '' || this.state.locationPrice == '' || this.state.picture == '' || this.state.address == '' || this.state.maxCount == '') {
            const confirmBox = window.alert(
                "ADD details correctly!"
            )

        } else {

            LocationService.createLocation(location).then((res) => {

            });
            const confirmBox = window.alert(
                "Success!"
            )
            //this.props.history.push('/bookings');
            window.location.reload();
        }

    }

    updateLocation(e) {

        let location = { locationName: this.state.locationName, locationPrice: this.state.locationPrice, picture: this.state.picture, address: this.state.address, maxCount: this.state.maxCount }

        if (this.state.locationName == '' || this.state.locationPrice == '' || this.state.picture == '' || this.state.address == '' || this.state.maxCount == '') {
            const confirmBox = window.alert(
                "ADD details correctly!"
            )

        } else {

            if (this.state.locationID != 0) {
                LocationService.updateLocation(location, this.state.locationID);
                const confirmBox = window.alert(
                    "Success update!"
                )
                this.props.history.push('/bookings');
                //window.location.reload();
            }else{
                const confirmBox = window.alert(
                    "Can not find information for update!"
                )
                this.props.history.push('/bookings');
            }   

            
        }


    }



    render() {
        const { all_Locations, currentPage, usersPerPage, search } = this.state;
        const lastIndex = currentPage * usersPerPage;
        const firsIndex = lastIndex - usersPerPage;
        const curretLocations = all_Locations.slice(firsIndex, lastIndex);
        const totalPage = Math.ceil(all_Locations.length / usersPerPage);
        return (
            <div className="container">
                <main role="main">
                    <header class="section background-white">
                        <article>
                            <div class="line text-center">
                                <h2 class="text-dark text-s-size-30 text-m-size-40 text-l-size-60 text-thin text-line-height-1">Location List</h2>
                                <br></br>
                            </div>

                            <section class="full-width background-white">

                                <div className="row">

                                    <ul class="nav nav-tabs nav-justified mb-3" id="ex1" role="tablist">
                                        <li class="nav-item" role="presentation">
                                            <a
                                                class="nav-link"
                                                id="ex3-tab-1"
                                                data-mdb-toggle="pill"
                                                href="/bookings"
                                                role="tab"
                                                aria-controls="ex3-pills-1"
                                                aria-selected="true"
                                            >Booking DashBoard</a
                                            >
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <a
                                                class="nav-link active"
                                                id="ex3-tab-2"
                                                data-mdb-toggle="pill"
                                                href="/locations"
                                                role="tab"
                                                aria-controls="ex3-pills-2"
                                                aria-selected="false"
                                            >Location Panel</a
                                            >
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <a
                                                class="nav-link"
                                                id="ex3-tab-3"
                                                data-mdb-toggle="pill"
                                                href="/bookings-report"
                                                role="tab"
                                                aria-controls="ex3-pills-3"
                                                aria-selected="false"
                                            >Overview and Report</a
                                            >
                                        </li>
                                    </ul>

                                </div>
                                <br></br>

                                <div className="row formDivgg3">
                                    <div style={{ background: "#F2F2F2" }}>

                                        <div style={{ "float": "left" }}>
                                            <i class="fa fa-list-alt"> Location List</i>
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
                                                        <i class="fa fa-times"></i>

                                                    </button>

                                                </div>
                                            </div>


                                        </div>
                                        <br /><br />
                                    </div>
                                    <br />
                                    <div class="row">
                                        <div class="col">

                                            <br />
                                            <div className="card-body shadow-custom bg-image">
                                                <h3>Location Details</h3>
                                                {this.locationForm()}


                                            </div>

                                        </div>
                                        <div class="col-8">
                                            <br />
                                            <table className="table table-striped table-bordered">

                                                <thead>
                                                    <tr>
                                                        <th>Picture</th>
                                                        <th>Location ID</th>
                                                        <th>Location Name</th>
                                                        <th>Location Price</th>
                                                        <th>Address</th>
                                                        <th>Count</th>
                                                        <th><button onClick={() => this.locationFormClean()} className="btn btn-outline-success">Add New</button></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {curretLocations.length === 0 ?
                                                        <tr align="center">
                                                            <td colSpan="6">No Locations Available</td>
                                                        </tr> :
                                                        curretLocations.map(
                                                            Locations =>
                                                                <tr key={Locations.location_id}>
                                                                    <td style={{ width: "200px" }}><img style={{ height: "120px", width: "200px" }} src={Locations.picture} className="img-thumbnail" /></td>
                                                                    <td>{Locations.location_id}</td>
                                                                    <td>{Locations.locationName}</td>
                                                                    <td>{Locations.locationPrice}</td>

                                                                    <td>{Locations.address}</td>
                                                                    <td>{Locations.maxCount}</td>
                                                                    <td>
                                                                        <div className="btn-group-vertical">
                                                                            <button onClick={() => this.locationForm(Locations.location_id)} className="btn btn-outline-success">Update</button>
                                                                            {console.log(Locations.Location_id, "GGWP")}
                                                                            <button onClick={() => {
                                                                                const confirmBox = window.confirm(
                                                                                    "Do you really want to delete this record?"
                                                                                )
                                                                                if (confirmBox === true) {
                                                                                    this.deleteLocation(Locations.location_id)
                                                                                }
                                                                            }} className="btn btn-outline-danger">Delete</button>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                        )
                                                    }
                                                </tbody>
                                            </table>
                                            <tfoot >
                                                <div class="row">
                                                    <div class="col" style={{ width: "500px" }} >
                                                        <div>
                                                            Showing Page {currentPage} of {totalPage}
                                                        </div>
                                                    </div>

                                                    <div class="col">
                                                        <div className="input-group mb-3" style={{ width: "380px" }} >
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
                                                            <input type="text" name="currentPage" style={{ width: "50px" }} value={currentPage}
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

                                                </div>
                                            </tfoot>

                                        </div>

                                    </div>
                                </div>

                            </section>

                        </article>
                    </header>
                </main>




            </div>
        );
    }
}

export default ListLocationComponent;