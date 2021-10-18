import React, { Component } from 'react';
import EventPlannerService from '../eventPlannerServices/EventPlannerService';

class UserInterface1 extends Component {

    constructor(props) {
        super(props)

        this.state = {
            events: []
        }
        this.HireEventPlanner = this.HireEventPlanner.bind(this);
        this.viewEventPlanner = this.viewEventPlanner.bind(this);
        this.HireList = this.HireList.bind(this);
        this.FeedbackList = this.FeedbackList.bind(this);
        this.search = this.search.bind(this);
        this.searchbuttonhandle = this.searchbuttonhandle.bind(this);
        this.keywordhandle = this.keywordhandle.bind(this);
    }

    search(val) {

        EventPlannerService.searchEventplanner(val).then((res) => {

            this.setState({ events: res.data });



        });

        if (this.keyword == "") {

            this.componentDidMount();

        } else if (this.keyword == undefined) {

            this.componentDidMount();

        }



    }




    viewEventPlanner(id) {

        this.props.history.push(`/eventplannerprofile/${id}`);


    }


    searchbuttonhandle(event) {

        this.search(this.keyword);



    }


    keywordhandle(event) {

        this.keyword = event.target.value;
        console.log(this.keyword);



    }


    HireList(id) {

        this.props.history.push('/hiring');


    }


    FeedbackList(id) {

        this.props.history.push('/feedback');


    }


    HireEventPlanner(id) {





        this.props.history.push('/hiredlist');


    }



    componentDidMount() {

        EventPlannerService.getEvevent_planner().then((res) => {
            this.setState({ events: res.data })

        });


    }



    render() {
        return (

            <div className="container">
                <div className="row">
                    <div className="background"></div>
                    <br /><br /><br /><br />
                    <div className="customersearchArea" style={{ width: '500px' }}>
                        <input type="text" name="searchBox" onChange={this.keywordhandle.bind(this)} style={{ marginLeft: '400px', }} className="searchBox" />
                        <button onClick={this.searchbuttonhandle.bind(this)} className="searchButtonAdmin userButtons" style={{ width: '100px', height: '30px', marginLeft: '450px' }}>Search</button>
                    </div>
                    <h2 className="text-center"> EVENT PLANNERS DETAILS</h2>
                    <div className="row">
                    </div>
                    <div className="row">
                        <div className="background1">
                            <br />
                            <br />
                            <table className="table table-striped table-bordered">
                                <thead>
                                    <tr>
                                        <th>    ID </th>
                                        <th>    Skill    </th>
                                        <th>    Name  </th>
                                        <th>   Photo  </th>
                                        <th>    Action  </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.events.map(
                                            events =>
                                                <tr key={events.event_planner_id}>
                                                    <td> {events.event_planner_id}</td>
                                                    <td> {events.skills}</td>
                                                    <td> {events.name}</td>
                                                    <td>  <img className="Ev_pro_pic" src={events.img} />
                                                    </td>
                                                    <td>
                                                        <button className="btn btn-success" onClick={() => this.viewEventPlanner(events.event_planner_id)}>View</button>
                                                    </td>

                                                </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                        <br />
                        <div className="combined_btn" style={{marginBottom:'50px'}}>

                            <div style={{margin:'auto'}}>
                                <center>
                                    <button style={{ marginRight: '20px' }} className="btn btn-success" onClick={this.HireList.bind(this)}>MAKE HIRE</button>
                                    <button style={{}} className="btn btn-success" onClick={this.FeedbackList.bind(this)}>SEND FEEDBACK</button>
                                </center>
                            </div>
                        </div>
                    </div>
                    <br /> <br /> <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                </div>
            </div>
        );
    }
}


export default UserInterface1;