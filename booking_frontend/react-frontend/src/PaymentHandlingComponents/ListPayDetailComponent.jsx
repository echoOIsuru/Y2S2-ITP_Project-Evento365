import React, { Component } from 'react';
import PaymentService from '../PaymentHandlingServices/PaymentService';

class ListPayDetailComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // cusID: this.props.match.params.id,
            cusID: 0,
            PaymentDetails: []
        }

        this.testSession = this.testSession.bind(this);

    }
    componentDidMount() {

        this.testSession();
        PaymentService.getPaymentsByCus(this.state.cusID).then((res) => {

            let PaymentDetails = res.data;
            console.log(PaymentDetails, "got the data");

            this.setState({ PaymentDetails: res.data });


        });



        /*PaymentService.getPayments().then((res) => {

            this.setState({PaymentDetails:res.data});

        });*/

    }

    testSession() {
        var data = sessionStorage.getItem('cusid');
        console.log(data, "SESSION Passed Cutomer Id");
        this.state.cusID = data;

    }

    render() {
        return (
            <div className="container">
                <div style={{ marginTop: 120, marginBottom: 150 }}>

                    <h2 className="text-center">Payment History</h2> <br />
                    <div className="containert">
                        <table className="table table-striped table-bordered" style={{ backgroundColor: 'white' }}>

                            <thead>
                                <tr>
                                    <th>Payment ID</th>
                                    <th>Payment Date</th>
                                    <th>Payment Method</th>
                                    <th>Payment Status</th>
                                    <th>Amount</th>

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.PaymentDetails.map(
                                        Payment =>
                                            <tr key={Payment.paymentID}>
                                                <td>{Payment.paymentID}</td>
                                                <td>{Payment.paymentDate}</td>
                                                <td>{Payment.paymentMethod}</td>
                                                <td>{Payment.status}</td>
                                                <td>{Payment.amount}</td>
                                            </tr>
                                    )
                                }


                            </tbody>
                        </table>
                    </div>
                    <br /> <br /><br /> <br />
                </div>
            </div>
        )
    }
}

export default ListPayDetailComponent;