import React, { Component } from 'react';
import Fservice from '../eventPlannerServices/Fservice';
import EventPlannerService from '../eventPlannerServices/EventPlannerService';

class UpdateFeedback extends Component {
    constructor(props) {
        super(props)

        this.state = {
            events: [],
            id: this.props.match.params.id,
            cus_name: sessionStorage.getItem('userloginid'),
            eventplanner_name: '',
            feedback: ''

        }
        //this.id=window.location.pathname.replace(/^\D+/g, '');


        this.changeCustomerIdHandler = this.changeCustomerIdHandler.bind(this);
        this.changenameHandler = this.changenameHandler.bind(this);
        this.changfeedbackHandler = this.changfeedbackHandler.bind(this);
        this.updatefeedback = this.updatefeedback.bind(this);
    }


    componentDidMount() {
        console.log(this.id);

        Fservice.getFeedbackById(this.state.id).then((res) => {
            let feedback = res.data;
            this.setState({
                cus_name: feedback.cus_name,
                eventplanner_name: feedback.eventplanner_name,
                feedback: feedback.feedback
            });
        });

    }


    changeEventPlannerHandler = (event) => {

        this.setState({ eventplanner_name: event.target.value });

    }

    changenameHandler = (event) => {


        this.setState({ eventplanner_name: event.target.value });


    }

    componentDidMount() {

        EventPlannerService.getEvevent_planner().then((res) => {
            let events = res.data;
            this.setState({ events: res.data })

            console.log('events =>' + JSON.stringify(events));

        });


    }




    changeCustomerIdHandler = (event) => {


        this.setState({ cus_name: event.target.value });


    }





    changfeedbackHandler = (event) => {


        this.setState({ feedback: event.target.value });


    }


    updatefeedback = (e) => {

        e.preventDefault();


        let feedback = { cus_name: this.state.cus_name, eventplanner_name: this.state.eventplanner_name, feedback: this.state.feedback };
        console.log('feedback=>' + JSON.stringify(feedback));

        Fservice.updateFeedback(feedback, this.state.id).then(res => {
            this.props.history.push('/feedback');

        });


    }
    cancel() {

        this.props.history.push('/feedback')
    }

    render() {
        return (
            <div className="container">
                <br />      <br />      <br />
                <div className="background"></div>
                <div className="container">
                    <div className="row">

                        <div className="card col-md-6 offset-md-3 offset-md-3 form-background-color" style={{ marginTop: "200px",marginBottom:'200px' }}>
                            <h3 className="text-center" style={{fontSize:'30px',marginTop:'20px'}}> UPDATE FEEDBACK </h3>
                            <div className="card-body" >

                                <form onSubmit={this.updatefeedback}>

                                    <div className="from-group">



                                        <label> Event planner name:</label>
                                        <select onChange={this.changeEventPlannerHandler} className="form-control">
                                            <option value={0}>--------select-------</option>
                                            {
                                                this.state.events.map(
                                                    events =>

                                                        <option value={events.name}>{events.name}</option>

                                                )

                                            }
                                        </select>
                                    </div>




                                    <div className="from-group">
                                        <label>Feedback:</label>
                                        <input placeholder="Feedback" name="feedback" className="form-control"
                                            value={this.state.feedback} onChange={this.changfeedbackHandler} required={true} />
                                    </div>



                                    <input type="submit" style={{ marginTop: "30px", marginBottom: "10px" }} className="btn btn-success" value="Update" />
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginTop: "30px", marginBottom: "10px", marginLeft: "10px" }}>Cancel </button>

                                </form>

                            </div>

                        </div>
                    </div>
                </div>
                <br /> <br /> <br /> <br /> <br /> <br />
            </div>
        );
    }
}

export default UpdateFeedback;