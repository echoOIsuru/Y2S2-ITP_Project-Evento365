import React, { Component } from 'react'
import './foodstart.css';

export default class foodfunctionstartcomponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            food: []
        }
        this.addFOOD = this.addFOOD.bind(this);
        this.updelefood = this.updelefood.bind(this);
        this.report = this.report.bind(this);

    }
    cancelfoodpage(){
        this.props.history.push('#');
     }

    addFOOD(){
        this.props.history.push('/add-food');
    }
    updelefood() {
        this.props.history.push('/food');
    }
    report() {
        this.props.history.push('/freport');
    }

    render() {
        return (
            <div>
                <header class="section ">
                    <section class="full-width ">
                        <div className="row">

                            <br />
                            <h2 className="text-center"> CATERING SERVICE MANAGEMENT</h2>
                            <br />
                           
                            <div>
                            <img onClick={this.cancelfoodpage.bind(this)} style={{height:"50px" , marginTop:"-60px"  , marginLeft:"100px"}} src="../images/back.png"/>
                            </div>

                            <center>
                                
                                 <div className="foodaddBtn">
                                    <button onClick={this.addFOOD}> Add New Food </button>
                                </div>
                                <div className="foodModBtn">
                                    <button onClick={this.updelefood}> Modify Food Details </button>
                                </div>
                                <div className="foodReportBtn">
                                    <button onClick={this.report}> Genarate food Report </button>
                                </div>
                            </center>
                        </div>
                    </section>
                </header>

            </div>
        )
    }
}
