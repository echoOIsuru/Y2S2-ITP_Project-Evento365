import React, { Component } from 'react';
import PromoService from '../PaymentHandlingServices/PromoService';

class AddPromoComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            code: '',
            amount: '',
            count: ''
        }
        this.changeCodeHandler = this.changeCodeHandler.bind(this);
        this.changeAmountHandler = this.changeAmountHandler.bind(this);
        this.AddPromo = this.AddPromo.bind(this);
    }


    AddPromo = (e) => {

        e.preventDefault();


        PromoService.getPromocodes().then((res) => {

            let Promocheck = res.data;
            console.log(Promocheck, "promos from database");
            var len = Promocheck.length;
            var flag = 1;


            //for loop to check duplicate records

            for (var i = 0; i < len; i++) {
                if (Promocheck[i].code.toLowerCase() == this.state.code.toLowerCase()) {

                    alert("You have entered a Duplicate Value, Try Again!!")
                    flag = 0;

                }
            }

            if (this.state.count <= 0) {

                alert("Set the Count Value more than 0!!")
                flag = 0;

            }



            if (flag == 1) {

                let Promo_Code = { code: this.state.code, amount: this.state.amount, count: this.state.count };
                console.log('Promo_Code => ' + JSON.stringify(Promo_Code));

                PromoService.AddPromocodes(Promo_Code).then(res => {

                    this.props.history.push('/promomanage');

                });
            }
        });



    }

    changeCodeHandler = (event) => {
        this.setState({ code: event.target.value });
    }

    changeAmountHandler = (event) => {
        this.setState({ amount: event.target.value });
    }

    changeCountHandler = (event) => {
        this.setState({ count: event.target.value });
    }

    cancel() {
        this.props.history.push('/promomanage');
    }

    render() {
        return (
            <div className="container">
                <div style={{ marginTop: 100, marginBottom: 230 }}>
                    <br></br>
                    <div className="form">
                        <div className="row">
                            <div className="formDiv">
                                <h2 className="text-center">Add Promo Code</h2>
                                <div className="card-body">
                                    <form id="form1" onSubmit={this.AddPromo}><br />


                                        <div className="form-group">
                                            <label> Promo Code: </label>
                                            <input placeholder="Code Name" name="code" className="form-control"
                                                value={this.state.code} onChange={this.changeCodeHandler} required />
                                        </div>
                                        <br />
                                        <div className="form-group">
                                            <label> Reduced Amount: </label>
                                            <input placeholder="500" name="amount" className="form-control"
                                                value={this.state.amount} onChange={this.changeAmountHandler} pattern="[0-9]{0,7}" title="The Count should consist of numerical values only." required={true} />
                                        </div>
                                        <br />
                                        <div className="form-group">
                                            <label> Count: </label>
                                            <input placeholder="10" name="count" className="form-control"
                                                value={this.state.count} onChange={this.changeCountHandler} pattern="[0-9]{0,6}" title="The Amount should consist of numerical values with maximum 6 digits only." required={true} />
                                        </div>
                                        <br />

                                        <button type="submit" style={{ marginLeft: "1px" }} className="edidelbtn" >Add</button>
                                        <button className="edidelbtn" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>

                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>
                    <br /> <br /><br /> <br />
                </div>
            </div>
        )
    }
}

export default AddPromoComponent;