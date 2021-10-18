import React, { Component } from 'react';
import CustomerService from '../UserServices/CustomerService';
import Grid from '@material-ui/core/Grid';


class CustomerLogin extends Component {

    constructor(props) {
        super(props)

        this.state = {
            login: [],
            admin: [],
            validate: '',
            username: '',
            password: '',
            id: ''
        }
    }



    validateLoginInfo = (l) => {
        l.preventDefault();
        let login = { username: this.username, password: this.password };
        //console.log('login =>'+ JSON.stringify(login));


        CustomerService.validateLogin(login).then((res) => {

            this.state.id = res.data.id;
            sessionStorage.setItem('userloginid',res.data.id);
            console.log(sessionStorage.getItem('userloginid'),'SESSION ID');

            if (res.data.username !== null) {
                this.props.history.push(`/homepage/` + this.state.id);
            } else {
                alert("Username or Password Incorrect. Please try again.");
            }
        });



    }
    usernamehandle(event) {
        this.username = event.target.value;
        console.log(this.username);
    }

    passwordhandle(event) {
        this.password = event.target.value;
    }


    render() {
        return (
            <Grid container spacing={2} justify="center">
                <div style={{ width: '450px', marginTop:'80px' }}>

                    <fieldset className="blackborder transformDiv">
                        <form id="customer_login" onSubmit={this.validateLoginInfo}>
                            <p style={{fontSize:'30px'}}>Customer Login</p>
                            <br />

                            <div className="form-group" style={{marginTop:'10px',marginBottom:'10px'}}>
                                <label>Username</label>
                                <input type="text" className="form-control" placeholder="Enter Username" onChange={this.usernamehandle.bind(this)} pattern="[A-Za-z0-9]{5,20}" title="Minimum :5 Maximum:20 (Letters/Numbers)" required/>
                            </div>

                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" placeholder="Enter password" onChange={this.passwordhandle.bind(this)} pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                            title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters" required/>
                            </div>

                            <br />

                            <button type="submit"  className="userButtons">LOGIN</button>
                            <p className="forgot-password text-right">
                                <a style={{color: 'black',fontSize:'16px'}} href="/customer-passchange">Forgot password?</a>
                            </p>
                            <p className="forgot-password text-left" >
                                <a style={{color: 'black',fontSize:'16px',fontWeight:'500'}} href="/add-customer/_addcus">JOIN EVENTO 365 NOW</a>
                            </p>
                        </form>
                    </fieldset>
                    <br /><br /><br />
                </div>
            </Grid>

        );
    }
}



export default CustomerLogin;