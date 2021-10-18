import React, { Component } from 'react';
import CustomerService from '../UserServices/CustomerService';


class ViewEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: sessionStorage.getItem('userloginid'),
            customer: {}
        }
    }

    componentDidMount() {
        CustomerService.getCustomerById(this.state.id).then(res => {
            this.setState({ customer: res.data });
        })
    }

    renderElement() {
        if (this.state.customer.gender === 'M')
            return 'Male'
        return 'Female';
    }

    goToUpdate() {
        this.props.history.push('/add-customer/' + this.state.id)
    }

    confirmation() {
        var result = window.confirm("Are you sure to delete?");
        if (result) {
            CustomerService.deleteCustomer(this.state.id).then(res => {
                this.props.history.push('/customer-login/')
            });
        }
    }

 

    logout() {
        var result = window.confirm("Are you sure to Logout?");
        if (result) {
            this.props.history.push('/customer-login')
        }
    }

    goBack(){
        this.props.history.push('/homepage/'+sessionStorage.getItem('userloginid'))
    }

    render() {
        return (
            <div>

                <br /><br /><br />
                <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 border-bottom box-shadow" style={{ width: '100%', margin: 'auto', borderRadius: '5px', boxShadow: '0px 0px 45px -5px',background:'rgb(250, 235, 215,0.8)' }}>
                    <h5 class="my-0 mr-md-auto font-weight-normal">CUSTOMER PROFILE</h5>
                    <button class="btn btn-secondary" onClick={this.goBack.bind(this)} href="#" style={{ marginRight: '30px' }} >❮</button>
                    <button class="btn btn-secondary" onClick={this.goToUpdate.bind(this)} style={{ marginRight: '30px' }}>UPDATE</button>
                    <button class="btn btn-secondary" onClick={this.confirmation.bind(this)} style={{ marginRight: '30px', backgroundColor: 'Crimson', color: 'Cornsilk' }}>DELETE</button>
                    <button class="btn btn-secondary" onClick={this.logout.bind(this)} style={{ marginRight: '30px' }} >LOGOUT</button>
                    <button class="btn btn-secondary" href="#" style={{ marginRight: '5px' }}disabled>❯</button>
                </div>
                <br /><br />

                <section>
                    <div className="rt-container">
                        <div class="col-rt-12">
                            <div class="Scriptcontent">


                                <div class="student-profile py-4" >
                                    <div class="container" style={{ paddingLeft: '40px', paddingRight: '40px' }}>
                                        <div class="row usercomponentcarddrop">
                                            <div class="col-lg-4 " style={{ marginTop: '25px', width:'380px' }}>
                                                <div class="card shadow-sm pt-0 text-center " style={{ borderRadius: '10px', height: '490px',width:'350px' }}>
                                                    <div class="card-header bg-transparent text-center" >
                                                        <img class="profile_img usercomponentimg" src={this.state.customer.image} alt="student dp" />
                                                        <h3>{this.state.customer.name}</h3>
                                                    </div>
                                                    <br />

                                                    <h5>@{this.state.customer.username}</h5>
                                                    <h5>✉ {this.state.customer.email}</h5>

                                                </div>
                                            </div>
                                            <div class="col-lg-8" style={{ marginTop: '25px',width:'500px' }}>
                                                <div class="card shadow-sm" style={{ borderRadius: '10px', width:'400px',height:'490px' }}>
                                                    <div class="card-header bg-transparent border-0">
                                                        <h3 class="mb-0"><i class="far fa-clone pr-1"></i>CUSTOMER INFORMATION</h3>
                                                    </div>
                                                    <div class="card-body pt-0" >
                                                        <table class="table table-bordered" style={{ fontSize: '18px' }}>
                                                            <tr>
                                                                <th >Name</th>
                                                                <td >:</td>
                                                                <td>{this.state.customer.name}</td>
                                                            </tr>
                                                            <tr>
                                                                <th >Gender</th>
                                                                <td >:</td>
                                                                <td>{this.state.customer.gender}</td>
                                                            </tr>
                                                            <tr>
                                                                <th>Email</th>
                                                                <td >:</td>
                                                                <td>{this.state.customer.email}</td>
                                                            </tr>
                                                            <tr>
                                                                <th >Mobile</th>
                                                                <td >:</td>
                                                                <td>{this.state.customer.mobile}</td>
                                                            </tr>
                                                            <tr>
                                                                <th >Address</th>
                                                                <td >:</td>
                                                                <td>{this.state.customer.address}</td>
                                                            </tr>
                                                            <tr>
                                                                <th >NIC</th>
                                                                <td >:</td>
                                                                <td>{this.state.customer.nic}</td>
                                                            </tr>
                                                            <tr>
                                                                <th >Username</th>
                                                                <td >:</td>
                                                                <td>{this.state.customer.username}</td>
                                                            </tr>
                                                            <tr>
                                                                <th >Birthday</th>
                                                                <td >:</td>
                                                                <td>{this.state.customer.birthday}</td>
                                                            </tr>
                                                        </table>
                                                    </div>
                                                </div>
                                                <div style={{ height: "26px" }}></div>
                                                <div class="card shadow-sm">


                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </section>



                <br /><br />
            </div>
        );


    }
}

export default ViewEmployeeComponent;