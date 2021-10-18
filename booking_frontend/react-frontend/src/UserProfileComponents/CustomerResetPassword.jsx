import React, { Component } from 'react';
import CustomerService from '../UserServices/CustomerService';
import Grid from '@material-ui/core/Grid';





class CustomerResetPassword extends Component {


    constructor(props) {
        super(props)

        this.state = {

            id: this.props.match.params.id,
            name: '',
            email: '',
            address: '',
            nic: '',
            gender: '',
            username: '',
            password: '',
            passwordvalidate: '',
            birthday: '',
            mobile: '',
            reg_date: '',
            sec_ques_no: '',
            sec_ques_answer: '',
            image: '',
            customer_type: ''
        }

        this.fetchedID = window.location.pathname.replace(/^\D+/g, '');
        this.changePasswordHandler1 = this.changePasswordHandler1.bind(this);
        this.changePasswordHandler2 = this.changePasswordHandler2.bind(this);
        this.saveOrUpdateCustomer = this.saveOrUpdateCustomer.bind(this);
    }

    componentDidMount() {



        if (this.id === '_add') {
            return
        } else {
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
    }

    saveOrUpdateCustomer = (e) => {
        e.preventDefault();
        let customer = {
            name: this.state.name, email: this.state.email, address: this.state.address, nic: this.state.nic,
            username: this.state.username, password: this.state.password, birthday: this.state.birthday, mobile: this.state.mobile,
            reg_date: this.state.reg_date, sec_ques_no: this.state.sec_ques_no, sec_ques_answer: this.state.sec_ques_answer,
            gender: this.state.gender, image: this.state.image, customer_type: this.state.customer_type
        };
        console.log('customer =>' + JSON.stringify(customer));

        if (this.state.id === '_addcus') {
            CustomerService.createCustomer(customer).then(res => {
                this.props.history.push('/customer');
            });
        } else {
            CustomerService.updateCustomer(customer, this.fetchedID).then(res => {
                this.props.history.push('/customer-login');
            });
        }
    }


    changePasswordHandler1 = (event) => {
        this.setState({ password: event.target.value });
    }

    changePasswordHandler2 = (event) => {
        this.setState({ passwordvalidate: event.target.value });

    }

    check = (e) => {
        e.preventDefault();
        console.log(this.state.passwordvalidate);
    }


    handleChange = (e) => {
        this.setState({
            sec_ques_no: e.target.value
        })
    }

    validatePasswords = (e) => {
        if (this.state.passwordvalidate === this.state.password) {
            this.forceUpdate();
            alert('Password changed successfully.');
            this.saveOrUpdateCustomer(e);
        } else {
            alert('Passwords do not match.');
        }
    }




    render() {
        return (
            <div>
                <br />

                <Grid container spacing={2} justify="center">
                    <div style={{ width: '450px' }}>

                        <fieldset className="blackborder transformDiv">
                            <form onSubmit={this.validatePasswords}>
                            <p style={{fontSize:'30px'}}>Reset Password</p>
                                <br />

                                <div className="form-group">
                                    <label>New Password :</label>
                                    <input type="password" onChange={this.changePasswordHandler1} className="form-control" placeholder="New Password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                            title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters" required/>
                                </div>

                                <div className="form-group">
                                    <label>Re-enter Password :</label>
                                    <input type="password" onChange={this.changePasswordHandler2} className="form-control" placeholder="New Password" required/>
                                </div>

                                <br />

                                <button type="submit"  className="userButtons">CHANGE PASSWORD</button>
                                <br /><br />

                            </form>
                        </fieldset>
                    </div>
                </Grid>
                <br /><br /><br />
            </div>

        );
    }

}

export default CustomerResetPassword;