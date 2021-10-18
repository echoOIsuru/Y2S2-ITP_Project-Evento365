import React, { Component } from 'react';
import HireService from '../eventPlannerServices/HireService';
class HiredEventPlannersList extends Component {


    constructor(props) {
        super(props)

        this.state = {
            hire: [],

        }

        this.addHire = this.addHire.bind(this);
        this.editHire = this.editHire.bind(this);
        this.deleteHire = this.deleteHire.bind(this);
    }

    deleteHire(id) {

        HireService.deleteHiring(id).then(res => {
            this.setState({ hire: this.state.hire.filter(hire => hire.hiring_id !== id) });

        });

    }



    editHire(id) {

        this.props.history.push(`/update-hire/${id}`);
    }


    componentDidMount() {
        HireService.gethiring().then((res) => {
            this.setState({ hire: res.data })
        });

    }
    addHire() {

        this.props.history.push('/add-hire');

    }

    render() {
        return (
            <div className="container">

                <div className="background"></div>
                <h2 className="text-center"> Hired Event Planners List</h2>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addHire}>APPLY NEW HIRE</button>
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered">

                        <thead>

                            <tr>



                                <th>    Event Date     </th>
                                <th>    Event Planner   </th>

                            </tr>

                        </thead>

                        <tbody>

                            {

                                this.state.hire.map(
                                    hire =>
                                        <tr key={hire.hiring_id}>

                                            <td> {hire.event_date}</td>
                                            <td> {(hire.event_planner).substring(4)}</td>





                                        </tr>

                                )


                            }



                        </tbody>
                    </table>


                </div>
            </div>
        );
    }
}

export default HiredEventPlannersList;