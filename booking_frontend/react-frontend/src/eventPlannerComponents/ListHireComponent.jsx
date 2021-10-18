import React, { Component } from 'react';
import HireService from '../eventPlannerServices/HireService';

class ListHireComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            hire: []

        }

        this.addHire = this.addHire.bind(this);
        this.editHire = this.editHire.bind(this);
        this.deleteHire = this.deleteHire.bind(this);
    }

    deleteHire(id) {
        if (window.confirm('Are you sure, want to delete the selected item?')) {

            HireService.deleteHiring(id).then(res => {
                this.setState({ hire: this.state.hire.filter(hire => hire.hiring_id !== id) });

            });

        }
    }


    editHire(id) {

        this.props.history.push(`/update-hire/${id}`);
    }
    // componentDidMount(){
    //HireService.gethiring().then((res)=>{     // all data retriew
    // this.setState({hire:res.data})
    // });

    // }

    componentDidMount() {
        HireService.gethiring().then((res) => {
            this.setState({ hire: res.data.filter(hire => hire.cus_id == sessionStorage.getItem('userloginid')) })
        });

    }
    addHire() {

        this.props.history.push('/add-hire');

    }

    render() {
        return (
            <div className="container">
                <div style={{ marginTop: '100px', width: '800px' }}>
                    <h2 className="text-center" > Hire List</h2>
                    <center>
                        <button className="btn btn-primary" style={{ width: '100%', marginTop: '10px', marginBottom: '20px' }} onClick={this.addHire}>APPLY NEW HIRE</button>

                        <div className="background1" style={{ marginBottom: '300px' }}>
                            <table className="table table-striped table-bordered">
                                <thead>
                                    <tr>
                                        <th>    Event Location    </th>
                                        <th>    Event Date     </th>
                                        <th>    Event Planner ID  </th>
                                        <th>    Action  </th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {

                                        this.state.hire.map(
                                            hire =>
                                                <tr key={hire.hiring_id}>


                                                    <td> {hire.cus_address}</td>
                                                    <td> {hire.event_date}</td>
                                                    <td> {hire.event_planner}</td>

                                                    <td>
                                                        <button onClick={() => this.editHire(hire.hiring_id)} className="btn btn-info">Update</button>
                                                        <button style={{ marginLeft: "10px" }} onClick={() => this.deleteHire(hire.hiring_id)} className="btn btn-danger ">Delete</button>

                                                    </td>

                                                </tr>

                                        )


                                    }



                                </tbody>
                            </table>
                        </div>
                    </center>
                </div>
                <br /><br /><br /><br /><br />
            </div>


        );
    }
}

export default ListHireComponent;