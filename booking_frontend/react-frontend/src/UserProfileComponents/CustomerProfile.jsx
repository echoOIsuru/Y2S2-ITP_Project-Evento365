import React, { Component } from 'react';
import CustomerService from '../UserServices/CustomerService';
import Grid from '@material-ui/core/Grid';

class CustomerProfile extends Component {
    constructor(props) {
        super(props)

        this.state = {
            customer: [],
            name: '',
            email: '',
            address: '',
            nic: '',
            gender: '',
            username: '',
            password: '',
            birthday: '',
            mobile: '',
            reg_date: '',
            sec_ques_no: '',
            sec_ques_answer: '',
            image: '',
            customer_type: ''
        }

        this.fetchedID = window.location.pathname.replace(/^\D+/g, '');

        this.addCustomer = this.addCustomer.bind(this);
        this.editCustomer = this.editCustomer.bind(this);
        this.deleteCustomer = this.deleteCustomer.bind(this);
    }

    deleteCustomer(id) {
        CustomerService.deleteCustomer(id).then(res => {
            this.setState({ customer: this.state.customer.filter(customer => customer.id !== id) });
        });
    }

    confirmation(id) {
        var result = window.confirm("Are you sure to delete?");
        if (result) {
            CustomerService.deleteCustomer(id).then(res => {
                this.setState({ customer: this.state.customer.filter(customer => customer.id !== id) });
            });
        }
    }

    viewCustomer(id) {
        this.props.history.push(`/view-customer/${id}`);
    }

    editCustomer(id) {
        this.props.history.push(`/add-customer/${id}`);
    }

    componentDidMount() {
        CustomerService.getCustomerById(this.fetchedID).then((res) => {
            let customer = res.data;
            this.setState({
                name: customer.name,
                email: customer.email,
                address: customer.address,
                nic: customer.nic,
                username: customer.username,
                password: customer.password,
                birthday: customer.birthday,
                mobile: customer.mobile,
                sec_ques_no: customer.sec_ques_no,
                sec_ques_answer: customer.sec_ques_answer,
                gender: customer.gender,
                image: customer.image,
                customer_type: customer.customer_type

            })
        });
    }

    addCustomer() {
        this.props.history.push('/add-customer/_addcus');
    }

    search(val) {
        CustomerService.searchCustomer(val).then((res) => {
            this.setState({ customer: res.data });
        });
        if (this.keyword == "") {
            this.componentDidMount();
        } else if (this.keyword == undefined) {
            this.componentDidMount();
        }

    }

    keywordhandle(event) {
        this.keyword = event.target.value;

    }

    searchbuttonhandle(event) {
        this.search(this.keyword);

    }

    render() {
        return (
            <div>
                <br /><br /><br /><br /><br /><br /><br />
                <h2 className="text-center">USER PROFILE</h2>
                <br /><br />
                <Grid container spacing={2} justify="center">
                    <div className="row">
                        <table className="table-striped table-bordered admin_table_main" style={{ width: '1200px' }}>
                            <thead>
                                <tr className="admin_table_row" style={{ backgroundColor: 'rgb(100, 149, 237)' }}>
                                    <th> Name</th>
                                    <th> Email</th>
                                    <th> Address</th>
                                    <th> NIC</th>
                                    <th> Birthday</th>
                                    <th> Mobile</th>
                                    <th> Gender</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="admin_table_row" style={{ backgroundColor: 'rgb(100, 149, 237,0.3)' }} >
                                    <td>{this.state.name}</td>
                                    <td>{this.state.email}</td>
                                    <td>{this.state.address}</td>
                                    <td>{this.state.nic}</td>
                                    <td>{this.state.birthday}</td>
                                    <td>{this.state.mobile}</td>
                                    <td>{this.state.gender}</td>
                                    <td>
                                        <button onClick={() => this.editCustomer(this.fetchedID)} className="userButtons" style={{ width: '80px', height: '35px', marginRight: '5px' }} >Update</button>
                                        <button onClick={() => this.viewCustomer(this.fetchedID)} className="userButtons" style={{ width: '80px', height: '35px', marginRight: '5px' }}>View</button>
                                        <button onClick={() => this.confirmation(this.fetchedID)} className="userButtons" style={{ width: '80px', height: '35px', marginRight: '5px' }}>Delete</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </Grid>
                <br /><br /><br /><br /><br /><br /><br /><br /><br />
            </div>
        );
    }
}

export default CustomerProfile;