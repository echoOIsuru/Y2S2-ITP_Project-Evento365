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

        if (this.state.id === '_addcus') {
            AdminService.createAdmin(admin).then(res => {
                this.props.history.push('/admin');
            });
        } else {
            AdminService.updateAdmin(admin, this.state.id).then(res => {
                this.props.history.push('/admin');
            });
        }
    }

    cancel() {
        this.props.history.push('/admin');
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

    getTitle1() {
        if (this.state.id === '_addcus') {
            return <h3 className="text-center">EVENTO 365 - CUSTOMER REGISTRATION</h3>
        } else {
            return <h3 className="text-center">Update Admin</h3>
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
                <div class="col-md-6 mb-6">
                    <label for="state">Security Question</label>
                    <select class="custom-select d-block w-100" onChange={this.changeSecQuesNoHandler} name="secQues" required>
                        <option value="">Choose...</option>
                        <option value="1" selected="selected" >What primary school did you attend?</option>
                        <option value="2" >What are the last five digits of your driver's license number?</option>
                        <option value="3" >What were the last four digits of childhood telephone number?</option>
                    </select>

                </div>
            )
        } else if (this.state.sec_ques_no === 2) {
            return (
                <div class="col-md-6 mb-6">
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
                <div class="col-md-6 mb-6">
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
                <div class="col-md-6 mb-6">
                    <label for="state">Security Question</label>
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
        if (this.state.gender === 'M') {
            return (
                <div>
                    <select class="custom-select d-block w-100" onChange={this.changeGenderHandler} name="secQues" required>
                        <option value="" >Choose...</option>
                        <option value='M' selected="selected">Male</option>
                        <option value='F' >Female</option>
                    </select>
                </div>
            )
        } else if (this.state.gender === 'F') {
            return (
                <div>
                    <select class="custom-select d-block w-100" onChange={this.changeGenderHandler} name="secQues" required>
                        <option value="" >Choose...</option>
                        <option value='M' >Male</option>
                        <option value='F' selected="selected" >Female</option>
                    </select>
                </div>
            )
        } else {
            return (
                <div>
                    <select class="custom-select d-block w-100" onChange={this.changeGenderHandler} name="secQues" required>
                        <option value="" >Choose...</option>
                        <option value='M' >Male</option>
                        <option value='F' >Female</option>
                    </select>
                </div>
            )
        }
    }


    render() {


        return (

            <div >
                <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
                    <h5 class="my-0 mr-md-auto font-weight-normal">Company name</h5>
                    <nav class="my-2 my-md-0 mr-md-3">
                        <a class="p-2 text-dark" href="#">Features</a>
                        <a class="p-2 text-dark" href="#">Enterprise</a>
                        <a class="p-2 text-dark" href="#">Support</a>
                        <a class="p-2 text-dark" href="#">Pricing</a>
                    </nav>
                    <a class="btn btn-outline-primary" href="#">Sign up</a>
                </div>
                <div class="container">
                    <div class="py-5 text-center">

                        {
                            this.getTitle1()
                        }
                    </div>


                    <Grid container spacing={2} justify="center">
                        <div className="text-center " style={{ width: '500px' }}>
                            <h4 class="mb-3">EVENTO 365</h4>
                            <form class="needs-validation" novalidate>
                                <hr class="mb-4" />
                                <div class="mb-3">
                                    <label >Name</label>
                                    <input type="text" value={this.state.name} onChange={this.changeNameHandler} class="form-control" id="username" placeholder="Ex : John Doe" required />
                                </div>

                                <div class="row">
                                    <div class="col-md-6 mb-3">
                                        <label for="firstName">Email</label>
                                        <input type="text" value={this.state.email} onChange={this.changeEmailHandler} class="form-control" id="username" placeholder="abc@example.com" required />
                                        <div class="invalid-feedback">
                                            Valid first name is required.
                                        </div>
                                    </div>
                                    <div class="col-md-6 mb-3">
                                        <label for="lastName">NIC</label>
                                        <input type="text" value={this.state.nic} onChange={this.changeNICHandler} class="form-control" id="username" placeholder="123456789V" required />
                                        <div class="invalid-feedback">
                                            Valid last name is required.
                                        </div>
                                    </div>
                                </div>


                                <div class="mb-3">
                                    <label for="email">Address </label>
                                    <input type="email" value={this.state.address} onChange={this.changeAddressHandler} class="form-control" id="email" placeholder="you@example.com" />

                                </div>
                                <div class="row">
                                    <div class="col-md-6 mb-3">
                                        <label for="firstName">Username</label>
                                        <input type="text" value={this.state.username} onChange={this.changeUsernameHandler} class="form-control" id="username" required />
                                        <div class="invalid-feedback">
                                            Valid first name is required.
                                        </div>
                                    </div>
                                    <div class="col-md-6 mb-3">
                                        <label for="lastName">Password</label>
                                        <input type="password" value={this.state.password} onChange={this.changePasswordHandler} class="form-control" id="username" required />
                                        <div class="invalid-feedback">
                                            Valid last name is required.
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6 mb-3">
                                        <label for="firstName">Birthday</label>
                                        <input type="date" value={this.state.birthday} onChange={this.changeBirthdayHandler} class="form-control" id="username" placeholder="077-XXXXXXX" required />
                                        <div class="invalid-feedback">
                                            Valid first name is required.
                                        </div>
                                    </div>
                                    <div class="col-md-6 mb-3">
                                        <label for="lastName">Mobile</label>
                                        <input type="text" value={this.state.mobile} onChange={this.changeMobileHandler} class="form-control" id="username" placeholder="077-XXXXXXX" required />
                                        <div class="invalid-feedback">
                                            Valid last name is required.
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-3 mb-3">
                                        <label >Gender</label>
                                        {this.changeGender()}
                                    </div>

                                    {this.changeSecQues()}

                                    <div class="col-md-3 mb-2">
                                        <label for="zip">Answer</label>
                                        <input type="text" value={this.state.sec_ques_answer} onChange={this.changeSecQuesAnsHandler} class="form-control" id="zip" placeholder="" required />
                                        <div class="invalid-feedback">
                                            Zip code required.
                                        </div>
                                    </div>
                                </div>

                                <div class="mb-3">
                                    <label for="username">Image<span class="text-muted"> (Put your image link here.)</span></label>
                                    <div class="input-group">

                                        <input type="text" value={this.state.image} onChange={this.changeImageHandler} class="form-control" id="username" placeholder="Ex: https://picsum.photos/200/300" required />
                                    </div>
                                </div>

                                <hr class="mb-4" />

                                <button className="btn btn-primary btn-lg btn-block" onClick={this.saveOrUpdateAdmin}>Save</button>
                                <button className="btn btn-primary btn-lg btn-block" onClick={this.cancel.bind(this)} >Cancel</button>

                                <br /><br />
                                <hr class="mb-4" />
                            </form>
                        </div>
                    </Grid>

                    <footer class="my-5 pt-5 text-muted text-center text-small">
                        <p class="mb-1">&copy; 2020-2021 EVENTO 365</p>
                        <ul class="list-inline">
                            <li class="list-inline-item"><a href="#">Privacy</a></li>
                            <li class="list-inline-item"><a href="#">Terms</a></li>
                            <li class="list-inline-item"><a href="#">Support</a></li>
                        </ul>
                    </footer>
                </div>
            </div>

        )
    };
}

export default CreateAdminComponent;