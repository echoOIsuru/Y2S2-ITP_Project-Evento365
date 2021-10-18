import React, { Component } from 'react';
import PromoService from '../PaymentHandlingServices/PromoService';
import "../PaymentHandlingStyles/searchbar.css";
import back from "../Images/back.png";

class DeletedPromos extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Deleted_Promo: [],
            keyword: ''
        }

        this.backward = this.backward.bind(this);

    }

    search(val) {
        PromoService.searchDeletedPromos(val).then((res) => {
            this.setState({ Deleted_Promo: res.data });


        });
        if (this.keyword == "") {
            this.componentDidMount();
        } else if (this.keyword == undefined) {
            this.componentDidMount();
        }

    }

    keywordhandle(event) {
        this.keyword = event.target.value;

    }

    searchbuttonhandle(event) {
        this.search(this.keyword);

    }

    componentDidMount() {

        PromoService.deletedPromos().then((res) => {

            this.setState({ Deleted_Promo: res.data });


        });


    }

    backward() {

        this.props.history.push('/promomanage');

    }


    render() {
        return (
            <div className="container">
                <div style={{ marginTop: 120, marginBottom: 800 }}>

                    <div className="row" >
                        <button className="my-button" onClick={this.backward} style={{ marginLeft: 10, marginBottom: 20, width: "9%", color: 'white', borderRadius: 9 }}><img style={{ width: 30, height: 25 }} src={back} alt="edit" /> <div style={{ marginLeft: 10, color: 'white' }}>Back</div></button>
                    </div>

                    <h2 className="text-center">Deleted PromoCodes</h2> <br />

                    <div >
                        <input type="text" name="searchBox" onChange={this.keywordhandle.bind(this)} className="searchBox" style={{ marginLeft: '985px' }} />
                        <button onClick={this.searchbuttonhandle.bind(this)} className="userButtons" style={{ marginLeft: '5px', width: '100px', height: '30px' }} >Search</button>
                    </div>
                    <br />
                    <br />
                    <br />

                    <div className="containert">
                        <table className="table table-striped table-bordered" style={{ backgroundColor: 'white' }}>

                            <thead>
                                <tr>
                                    <th>Promo ID</th>
                                    <th>Promo Code</th>
                                    <th>Amount</th>

                                </tr>
                            </thead>
                            <tbody>
                                {this.state.Deleted_Promo.length === 0 ? <tr>
                                    <td colSpan="5">No entries Available.</td>
                                </tr> :
                                    this.state.Deleted_Promo.map(
                                        Del =>
                                            <tr key={Del.record_ID}>
                                                <td>{Del.promo_ID}</td>
                                                <td>{Del.code}</td>
                                                <td>{Del.amount}</td>
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

export default DeletedPromos;