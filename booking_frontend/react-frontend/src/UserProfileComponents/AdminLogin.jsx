import React, { Component } from 'react';
import AdminService from '../UserServices/AdminService';
import Grid from '@material-ui/core/Grid';



class AdminLogin extends Component {

    constructor(props) {
        super(props)

        this.state = {
            login: [],
            admin: [],
            validate: '',
            username: '',
            password: '',
        }

    }

    validateLoginInfo = (l) => {
        l.preventDefault();
        let login = { username: this.username, password: this.password };
        console.log('login =>' + JSON.stringify(login));


        AdminService.validateLogin(login).then((res) => {
            let admin = res.data;
            console.log('admin =>' + JSON.stringify(admin));
            console.log(res.data.admin_type);

            if (res.data.admin_type !== null) {
                // this.props.history.push(`/admin`);
                this.navigateToAdminPage(res.data.admin_type);
            } else {
                alert("Username or Password Incorrect. Please try again.");
            }
        });
    }

    navigateToAdminPage(type){
        if (type == 'Main'){
            this.props.history.push(`/list-admin`);
        }else if(type == 'Planner' ){
            this.props.history.push(`/admin-planner`);
        }else if(type == 'Food' ){
            this.props.history.push(`/admin-food`);
        }else if(type == 'Vehicle' ){
            this.props.history.push(`/admin-vehicle`);
        }else if(type == 'Equipment' ){
            this.props.history.push(`/admin-equipment`);
        }else if(type == 'Store' ){
            this.props.history.push(`/admin-store`);
        }else if(type == 'Booking' ){
            this.props.history.push(`/admin-booking`);
        }else if(type == 'Payment' ){
            this.props.history.push(`/admin-payment`);
        }
        
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
                <div style={{ width: '450px' }}>
                <br/>
                    <fieldset className="blackborder transformDiv">
                        <form id="admin_login">
                            <h3>Admin Login</h3>
                            <br />
                            <div className="form-group">
                                <label>Username</label>
                                <input type="email" className="form-control" placeholder="Enter Username" onChange={this.usernamehandle.bind(this)} />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" placeholder="Enter password" onChange={this.passwordhandle.bind(this)} />
                            </div>
                            <br />
                            <button type="submit" onClick={this.validateLoginInfo} className="btn btn-primary btn-block">LOGIN</button>
                            <p className="forgot-password text-right"><br/></p>
                        </form>
                    </fieldset>
                    <br/><br/><br/>
                </div>
            </Grid>

        );
    }
}



export default AdminLogin;