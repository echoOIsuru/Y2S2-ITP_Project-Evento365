import React, { Component } from 'react';
import HireService from '../eventPlannerServices/HireService';
// import { Chart } from "react-google-charts";
import ApexCharts from 'apexcharts';
class AdminHireList extends Component {
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


    HireList(id) {

        this.props.history.push('/chart');


    }



    editHire(id) {

        this.props.history.push(`/update-hire/${id}`);
    }
    componentDidMount() {
        HireService.gethiringcount().then((res) => {     // all data retriew
            this.setState({ hire: res.data })
        });

    }

    // componentDidMount(){
    //     HireService.gethiring().then((res)=>{
    //        this.setState({hire:res.data.filter(hire=>hire.cus_id ==2)})
    //        });

    //     }





    addHire() {

        this.props.history.push('/add-hire');

    }

    print() {

        window.print();

    }


    render() {
        return (
            <div className="container">
                <div style={{}}>
                <br />      <br />      <br />
                <div style={{marginTop:'150px'}}>
                    <div className="background1">
                    <h2 className="text-center"> Report</h2>
                        <table className="table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th>  Event Planner ID  </th>
                                    <th>  Name    </th>
                                    <th>  Profile pictute  </th>
                                    <th>  Hiring Count   </th>
                                </tr>

                            </thead>

                            <tbody>

                                {

                                    this.state.hire.map(
                                        hire =>
                                            <tr key={hire.hiring_id}>

                                                <td> {hire.event_planner}</td>
                                                <td> {hire.name}</td>
                                                <td>  <img className="Ev_pro_pic" src={hire.img} /></td>
                                                <td> {hire.count}</td>



                                            </tr>

                                    )


                                }



                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Chart code */}

                
                <div className="combined_btn1">
                <button className="btn btn-success" style={{ marginLeft: "40px", marginBottom: "10px", width: "300px" }} onClick={this.print}>Print</button>
                    <button style={{ marginLeft: "40px", marginBottom: "10px", width: "300px" }} className="btn btn-success" onClick={this.HireList.bind(this)}>Genarate Chart</button></div>
                <br />      <br />      <br />      <br />      <br />      <br />      <br />
</div>
            </div>


        );
    }
}

export default AdminHireList;