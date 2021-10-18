import React from 'react';
//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminService from '../UserServices/AdminService';
import Grid from '@material-ui/core/Grid';

class CreateAdminComponent extends React.Component {


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
            birthday: '',
            mobile: '',
            reg_date: '',
            sec_ques_no: '',
            sec_ques_answer: '',
            image: '',
            admin_type: ''
        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changeAddressHandler = this.changeAddressHandler.bind(this);
        this.changeNICHandler = this.changeNICHandler.bind(this);
        this.changeUsernameHandler = this.changeUsernameHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.changeBirthdayHandler = this.changeBirthdayHandler.bind(this);
        this.changeMobileHandler = this.changeMobileHandler.bind(this);
        this.changeSecQuesNoHandler = this.changeSecQuesNoHandler.bind(this);
        this.changeSecQuesAnsHandler = this.changeSecQuesAnsHandler.bind(this);
        this.changeGenderHandler = this.changeGenderHandler.bind(this);
        this.changeAdminTypeHandler = this.changeAdminTypeHandler.bind(this);
        this.changeImageHandler = this.changeImageHandler.bind(this);
        this.saveOrUpdateAdmin = this.saveOrUpdateAdmin.bind(this);
    }

    componentDidMount() {

        if (this.id === '_add') {
            return
        } else {
            AdminService.getAdminById(this.state.id).then((res) => {
                let admin = res.data;
                this.setState({
                    name: admin.name,
                    email: admin.email,
                    address: admin.address,
                    nic: admin.nic,
                    username: admin.username,
                    password: admin.password,
                    birthday: admin.birthday,
                    mobile: admin.mobile,
                    sec_ques_no: admin.sec_ques_no,
                    sec_ques_answer: admin.sec_ques_answer,
                    gender: admin.gender,
                    image: admin.image,
                    admin_type: admin.admin_type

                })
            });
        }
    }




    saveOrUpdateAdmin = (e) => {
        e.preventDefault();
        let admin = {
            name: this.state.name, email: this.state.email, address: this.state.address, nic: this.state.nic,
            username: this.state.username, password: this.state.password, birthday: this.state.birthday, mobile: this.state.mobile,
            reg_date: this.state.reg_date, sec_ques_no: this.state.sec_ques_no, sec_ques_answer: this.state.sec_ques_answer,
            gender: this.state.gender, image: this.state.image, admin_type: this.state.admin_type
        };
        console.log('admin =>' + JSON.stringify(admin));

        if (this.state.id === '_addadmin') {
            AdminService.createAdmin(admin).then(res => {
                this.props.history.push('/list-admin');
            });
        } else {
            AdminService.updateAdmin(admin, this.state.id).then(res => {
                this.props.history.push('/list-admin');
            });
        }
    }


    autoSetData() {
        this.setState({
            name: 'Pinidu Alahakoon',
            email: 'pini97@gmail.com',
            address: 'No 33/A/1 Grant Av.SA.',
            nic: '921456855V',
            username: 'Pinidu97',
            password: 'Pinidu97',
            birthday: '1992-10-20',
            mobile: '0784568524',
            sec_ques_no: 1,
            sec_ques_answer: 'VCM',
            gender: 'Male',
            image: 'https://www.rarocash.com/wp-content/uploads/2016/11/team-2-1.jpg',
            admin_type: 'Main'
        })
    }

    testButtonchange() {
        if (this.state.id === '_addadmin') {
            return (
                <div>
                    <button className="userButtons" onClick={this.loadData.bind(this)} style={{ marginTop: '5px' }} >DEMO</button>
                </div>
            )
        }
    }
    cancel() {
        this.props.history.push('/list-admin');
    }

    loadData() {
        this.autoSetData();
    }

    changeNameHandler = (event) => {
        this.setState({ name: event.target.value });
    }

    changeEmailHandler = (event) => {
        this.setState({ email: event.target.value });
    }

    changeAddressHandler = (event) => {
        this.setState({ address: event.target.value });
    }

    changeNICHandler = (event) => {
        this.setState({ nic: event.target.value });
    }

    changeUsernameHandler = (event) => {
        this.setState({ username: event.target.value });
    }

    changePasswordHandler = (event) => {
        this.setState({ password: event.target.value });
    }

    changeBirthdayHandler = (event) => {
        this.setState({ birthday: event.target.value });
    }

    changeMobileHandler = (event) => {
        this.setState({ mobile: event.target.value });
    }

    changeSecQuesNoHandler = (event) => {
        this.setState({ sec_ques_no: event.target.value });
    }

    changeSecQuesAnsHandler = (event) => {
        this.setState({ sec_ques_answer: event.target.value });
    }

    changeGenderHandler = (event) => {
        this.setState({ gender: event.target.value });
    }

    changeImageHandler = (event) => {
        this.setState({ image: event.target.value });
    }

    changeAdminTypeHandler = (event) => {
        this.setState({ admin_type: event.target.value });
    }

    getTitle2() {
        if (this.state.id === '_addadmin') {
            return <h3 className="text-center" style={{ fontSize: '35px' }}>EVENTO 365 - ADMIN REGISTRATION</h3>
        } else {
            return <h3 className="text-center" style={{ fontSize: '35px' }}>EVENTO 365 - ADMIN PROFILE UPDATE</h3>
        }
    }

    handleChange = (e) => {
        this.setState({
            sec_ques_no: e.target.value
        })
    }

    changeSecQues() {

        if (this.state.sec_ques_no === 1) {

            return (
                <div class="col-md-6 mb-6 text-left">
                    <label for="state">Security Question</label>
                    <select class="custom-select d-block w-100" onChange={this.changeSecQuesNoHandler} name="secQues" required>
                        <option value="">Choose...⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀▼</option>
                        <option value="1" selected="selected" >What primary school did you attend?</option>
                        <option value="2" >What are the last five digits of your driver's license number?</option>
                        <option value="3" >What were the last four digits of childhood telephone number?</option>
                    </select>

                </div>
            )
        } else if (this.state.sec_ques_no === 2) {
            return (
                <div class="col-md-6 mb-6 text-left">
                    <label for="state">Security Question</label>
                    <select class="custom-select d-block w-100" onChange={this.changeSecQuesNoHandler} name="secQues" required>
                        <option value="">Choose...</option>
                        <option value="1">What primary school did you attend?</option>
                        <option value="2" selected="selected" >What are the last five digits of your driver's license number?</option>
                        <option value="3" >What were the last four digits of childhood telephone number?</option>
                    </select>

                </div>
            )
        } else if (this.state.sec_ques_no === 3) {
            return (
                <div class="col-md-6 mb-6 text-left">
                    <label for="state">Security Question</label>
                    <select class="custom-select d-block w-100" onChange={this.changeSecQuesNoHandler} name="secQues" required>
                        <option value="">Choose...</option>
                        <option value="1">What primary school did you attend?</option>
                        <option value="2"  >What are the last five digits of your driver's license number?</option>
                        <option value="3" selected="selected">What were the last four digits of childhood telephone number?</option>
                    </select>

                </div>
            )
        } else {
            return (
                <div class="col-md-6 mb-6 text-left">
                    <label for="state ">Security Question</label>
                    <select class="custom-select d-block w-100" onChange={this.changeSecQuesNoHandler} name="secQues" required>
                        <option value="" >Choose...</option>
                        <option value="1">What primary school did you attend?</option>
                        <option value="2"  >What are the last five digits of your driver's license number?</option>
                        <option value="3" >What were the last four digits of childhood telephone number?</option>
                    </select>

                </div>
            )
        }
    }

    changeGender() {
        if (this.state.gender === 'Male') {
            return (
                <div>
                    <select class="custom-select d-block w-100" onChange={this.changeGenderHandler} name="secQues" required>
                        <option value="" >Choose...</option>
                        <option value='Male' selected="selected">Male</option>
                        <option value='Female' >Female</option>
                    </select>
                </div>
            )
        } else if (this.state.gender === 'Female') {
            return (
                <div>
                    <select class="custom-select d-block w-100" onChange={this.changeGenderHandler} name="secQues" required>
                        <option value="" >Choose...</option>
                        <option value='Male' >Male</option>
                        <option value='Female' selected="selected" >Female</option>
                    </select>
                </div>
            )
        } else {
            return (
                <div>
                    <select class="custom-select d-block w-100" onChange={this.changeGenderHandler} name="secQues" required>
                        <option value="" >Choose...</option>
                        <option value='Male' >Male</option>
                        <option value='Female' >Female</option>
                    </select>
                </div>
            )
        }
    }
    changeAdminType() {
        if (this.state.admin_type === 'Main') {
            return (
                <div>
                    <label >Admin Type</label>
                    <div class="input-group">
                        <select class="custom-select d-block w-100" onChange={this.changeAdminTypeHandler} name="secQues" required>
                            <option disabled={true}>Choose...</option>
                            <option value="Main" selected="selected" >Main</option>
                            <option value="Booking">Booking</option>
                            <option value="Payment" >Payment</option>
                            <option value="Planner" >Planner</option>
                            <option value="Food" >Food</option>
                            <option value="Store" >Store</option>
                            <option value="Vehicle" >Vehicle</option>
                            <option value="Equipment" >Equipment</option>
                        </select>
                    </div>
                </div>
            )
        } else if (this.state.admin_type === 'Booking') {
            return (
                <div>
                    <label >Admin Type</label>
                    <div class="input-group">
                        <select class="custom-select d-block w-100" onChange={this.changeAdminTypeHandler} name="secQues" required>
                            <option disabled={true}>Choose...</option>
                            <option value="Main">Main</option>
                            <option value="Booking" selected="selected">Booking</option>
                            <option value="Payment" >Payment</option>
                            <option value="Planner" >Planner</option>
                            <option value="Food" >Food</option>
                            <option value="Store" >Store</option>
                            <option value="Vehicle" >Vehicle</option>
                            <option value="Equipment" >Equipment</option>
                        </select>
                    </div>
                </div>
            )
        } else if (this.state.admin_type === 'Payment') {
            return (
                <div>
                    <label >Admin Type</label>
                    <div class="input-group">
                        <select class="custom-select d-block w-100" onChange={this.changeAdminTypeHandler} name="secQues" required>
                            <option disabled={true}>Choose...</option>
                            <option value="Main" >Main</option>
                            <option value="Booking">Booking</option>
                            <option value="Payment" selected="selected">Payment</option>
                            <option value="Planner">Planner</option>
                            <option value="Food" >Food</option>
                            <option value="Store" >Store</option>
                            <option value="Vehicle" >Vehicle</option>
                            <option value="Equipment" >Equipment</option>
                        </select>
                    </div>
                </div>
            )
        } else if (this.state.admin_type === 'Planner') {
            return (
                <div>
                    <label >Admin Type</label>
                    <div class="input-group">
                        <select class="custom-select d-block w-100" onChange={this.changeAdminTypeHandler} name="secQues" required>
                            <option disabled={true}>Choose...</option>
                            <option value="Main">Main</option>
                            <option value="Booking">Booking</option>
                            <option value="Payment" >Payment</option>
                            <option value="Planner" selected="selected">Planner</option>
                            <option value="Food" >Food</option>
                            <option value="Store" >Store</option>
                            <option value="Vehicle" >Vehicle</option>
                            <option value="Equipment" >Equipment</option>
                        </select>
                    </div>
                </div>
            )
        } else if (this.state.admin_type === 'Food') {
            return (
                <div>
                    <label >Admin Type</label>
                    <div class="input-group">
                        <select class="custom-select d-block w-100" onChange={this.changeAdminTypeHandler} name="secQues" required>
                            <option disabled={true}>Choose...</option>
                            <option value="Main">Main</option>
                            <option value="Booking">Booking</option>
                            <option value="Payment" >Payment</option>
                            <option value="Planner" >Planner</option>
                            <option value="Food" selected="selected">Food</option>
                            <option value="Store" >Store</option>
                            <option value="Vehicle" >Vehicle</option>
                            <option value="Equipment" >Equipment</option>
                        </select>
                    </div>
                </div>
            )
        } else if (this.state.admin_type === 'Store') {
            return (
                <div>
                    <label >Admin Type</label>
                    <div class="input-group">
                        <select class="custom-select d-block w-100" onChange={this.changeAdminTypeHandler} name="secQues" required>
                            <option disabled={true}>Choose...</option>
                            <option value="Main">Main</option>
                            <option value="Booking">Booking</option>
                            <option value="Payment" >Payment</option>
                            <option value="Planner" >Planner</option>
                            <option value="Food" >Food</option>
                            <option value="Store" selected="selected">Store</option>
                            <option value="Vehicle" >Vehicle</option>
                            <option value="Equipment" >Equipment</option>
                        </select>
                    </div>
                </div>
            )
        } else if (this.state.admin_type === 'Vehicle') {
            return (
                <div>
                    <label >Admin Type</label>
                    <div class="input-group">
                        <select class="custom-select d-block w-100" onChange={this.changeAdminTypeHandler} name="secQues" required>
                            <option disabled={true}>Choose...</option>
                            <option value="Main">Main</option>
                            <option value="Booking">Booking</option>
                            <option value="Payment" >Payment</option>
                            <option value="Planner" >Planner</option>
                            <option value="Food" >Food</option>
                            <option value="Store" >Store</option>
                            <option value="Vehicle" selected="selected">Vehicle</option>
                            <option value="Equipment" >Equipment</option>
                        </select>
                    </div>
                </div>
            )
        } else if (this.state.admin_type === 'Equipment') {
            return (
                <div>
                    <label >Admin Type</label>
                    <div class="input-group">
                        <select class="custom-select d-block w-100" onChange={this.changeAdminTypeHandler} name="secQues" required>
                            <option disabled={true}>Choose...</option>
                            <option value="Main" selected="selected" >Main</option>
                            <option value="Booking">Booking</option>
                            <option value="Payment" >Payment</option>
                            <option value="Planner" >Planner</option>
                            <option value="Food" >Food</option>
                            <option value="Store" >Store</option>
                            <option value="Vehicle" >Vehicle</option>
                            <option value="Equipment" selected="selected">Equipment</option>
                        </select>
                    </div>
                </div>
            )
        } else {
            return (
                <div>
                    <label >Admin Type</label>
                    <div class="input-group">
                        <select class="custom-select d-block w-100" onChange={this.changeAdminTypeHandler} name="secQues" required>
                            <option disabled={true} selected="selected">Choose...</option>
                            <option value="Main" >Main</option>
                            <option value="Booking">Booking</option>
                            <option value="Payment" >Payment</option>
                            <option value="Planner" >Planner</option>
                            <option value="Food" >Food</option>
                            <option value="Store" >Store</option>
                            <option value="Vehicle" >Vehicle</option>
                            <option value="Equipment">Equipment</option>
                        </select>
                    </div>
                </div>
            )
        }
    }
    goBack() {
        this.props.history.push('/list-admin')
    }

    logout() {
        var result = window.confirm("Are you sure to Logout?");
        if (result) {
            this.props.history.push(`/admin-login`);
        }
    }

    render() {
        return (
            <div >
                <br /><br /><br />
                <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3  border-bottom box-shadow" style={{ width: '100%', margin: 'auto', borderRadius: '5px', boxShadow: '0px 0px 45px -5px', background: 'rgb(250, 235, 215,0.8)' }}>
                    <h5 class="my-0 mr-md-auto font-weight-normal">MAIN ADMIN ➔ ADD NEW ADMIN</h5>
                    <button class="btn btn-secondary" onClick={this.goBack.bind(this)} style={{ marginRight: '30px' }}>❮</button>
                    <button class="btn btn-secondary" onClick={this.logout.bind(this)} style={{ marginRight: '30px' }}>LOGOUT</button>
                    <button class="btn btn-secondary" href="#" style={{ marginRight: '5px' }} disabled>❯</button>
                </div>
                <br />
                <br />
                <br />
                <div class="container">

                    <Grid container spacing={2} justify="center">
                        <div className="text-center transformDiv" style={{ width: '750px', height: '1100px' }}>
                            <div class=" text-center">
                                {
                                    this.getTitle2()
                                }
                            </div>
                            <h4 class="mb-3" style={{ fontSize: '30px' }}>EVENTO 365</h4>
                            <form class="needs-validation" onSubmit={this.saveOrUpdateAdmin} novalidate>
                                <hr class="mb-4" />
                                <div class="mb-3 text-left">
                                    <label  >Name</label>
                                    <input type="text" value={this.state.name} onChange={this.changeNameHandler} class="form-control" placeholder="Ex : John Doe" required />
                                </div>

                                <div class="row">
                                    <div class="col-md-6 mb-3 text-left">
                                        <label for="firstName">Email</label>
                                        <input type="text" value={this.state.email} onChange={this.changeEmailHandler} class="form-control" placeholder="abc@example.com" title='format : example@123.com' pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required />

                                    </div>
                                    <div class="col-md-6 mb-3 text-left">
                                        <label for="lastName">NIC</label>
                                        <input type="text" value={this.state.nic} onChange={this.changeNICHandler} class="form-control" placeholder="123456789V" pattern="[0-9]{9}[V]" title="Ex : 123456789V (Nine digits + V)" required />

                                    </div>
                                </div>
                                <div class="mb-3 text-left">
                                    <label for="email">Address </label>
                                    <input value={this.state.address} onChange={this.changeAddressHandler} class="form-control" id="email" placeholder="Address" required />
                                </div>
                                <div class="row">
                                    <div class="col-md-6 mb-3 text-left">
                                        <label >Username</label>
                                        <input type="text" value={this.state.username} onChange={this.changeUsernameHandler} class="form-control" pattern="[A-Za-z0-9]{5,20}" title="Minimum :5 Maximum:20 (Letters/Numbers)" required />
                                    </div>
                                    <div class="col-md-6 mb-3 text-left">
                                        <label >Password</label>
                                        <input type="password" value={this.state.password} onChange={this.changePasswordHandler} class="form-control" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                            title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters" required />

                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6 mb-3 text-left">
                                        <label >Birthday</label>
                                        <input type="date" value={this.state.birthday} onChange={this.changeBirthdayHandler} class="form-control" id="username" placeholder="077-XXXXXXX" required />

                                    </div>
                                    <div class="col-md-6 mb-3 text-left">
                                        <label >Mobile</label>
                                        <input type="text" value={this.state.mobile} onChange={this.changeMobileHandler} class="form-control" id="username" placeholder="077-XXXXXXX" pattern="[0-9]{10}" title="Must be 10 digits long." required />

                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-3 mb-3 text-left">
                                        <label >Gender</label>
                                        {this.changeGender()}
                                    </div>
                                    {this.changeSecQues()}

                                    <div class="col-md-3 mb-2 text-left">
                                        <label for="zip">Answer</label>
                                        <input type="text" value={this.state.sec_ques_answer} onChange={this.changeSecQuesAnsHandler} class="form-control" id="zip" placeholder="Answer" required />
                                    </div>
                                </div>
                                <div class="mb-3 text-left">
                                    <label >Image<span class="text-muted"> (Put your image link here.)</span></label>
                                    <div class="input-group">

                                        <input type="text" value={this.state.image} onChange={this.changeImageHandler} class="form-control" id="username" placeholder="Ex: https://picsum.photos/200/300" required />
                                    </div>
                                </div>
                                <div class="mb-3 text-left">
                                    {this.changeAdminType()}
                                </div>
                                <hr class="mb-4" />
                                <button type='submit' className="userButtons" style={{ marginBottom: '5px' }} >Save</button>
                                <button className="userButtons" onClick={this.cancel.bind(this)} >Cancel</button>
                                <br />
                            </form>
                            <div>
                                {this.testButtonchange()}
                            </div>
                        </div>
                    </Grid>
                </div>
            </div>

        )
    };
}

export default CreateAdminComponent;