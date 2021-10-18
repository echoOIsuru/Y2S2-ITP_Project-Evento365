import React, { Component } from 'react';
import './adminlandingPage.css';

class AdminHomeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
        this.addItem = this.addItem.bind(this);
        this.modify = this.modify.bind(this);
        this.report = this.report.bind(this);
    }

    addItem(){
        this.props.history.push('/add-rentalitem');
    }

    modify(){
        this.props.history.push('/rentalitems');
    }

    report(){
        this.props.history.push('/reportthar');
    }

    render() {
        return (
            <div>
                <header class="section " style={{marginBottom:'20px'}}>
                    <section class="full-width ">
                        <div className="row">

                            <br />
                            <div className="headingModsLand"  style={{marginBottom: "30px",marginTop: "20px"}}> <h1> ITEM RENTING MANAGEMENT  </h1> </div>
                            <br />
                            <center>
                                <div className="eqladdBtn" >
                                    <button onClick={this.addItem}> Add New Item </button>
                                </div>
                                <div className="eqlModBtn">
                                    <button onClick={this.modify}> View All Items </button>
                                </div>
                                <div className="eqlReportBtn">
                                    <button onClick={this.report}> Genarate Report </button>
                                </div>
                            </center>
                        </div>
                    </section>
                </header>

            </div>
        );
    }
}

export default AdminHomeComponent;