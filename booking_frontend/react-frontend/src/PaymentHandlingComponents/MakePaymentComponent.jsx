import React, { Component } from 'react';
import PromoService from '../PaymentHandlingServices/PromoService';
import PaymentService from '../PaymentHandlingServices/PaymentService';
import "../PaymentHandlingStyles/Payment.css";

class MakePaymentComponent extends Component {

    constructor(props) {
        super(props)

        var today = new Date(),

            date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();


        this.state = {
            code: '',
            fetchedcode: '',
            amount: '',
            count: 0,
            promoid: 0,
            payTypeID: 0,
            storeTotal: 2500,
            calTotal: 0,
            cusID: 0,
            //cusID: 0,
            cusName: '',
            description: '',
            paymentMethod: '',
            status: "Pending",
            currentDate: date
        }
        this.changeCodeHandler = this.changeCodeHandler.bind(this);
        this.retrievecode = this.retrievecode.bind(this);
        this.placeorder = this.placeorder.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.changedescriptionHandler = this.changedescriptionHandler.bind(this);
        this.test = this.test.bind(this);
        this.passCussId = this.passCussId.bind(this);
        this.state.calTotal = this.state.storeTotal;
    }


    componentDidMount() {

        var data = sessionStorage.getItem('payBooking');
        data = JSON.parse(data);
        console.log(data, "RETURN VALUES from booking");

        this.setState({
            cusID: data.cusid,
            payTypeID: data.id,
            storeTotal: data.total,
            calTotal: data.total
        })

        var data = sessionStorage.getItem('payBooking');
        data = JSON.parse(data);

        PaymentService.getCustomerById(data.cusid).then((res) => {
            let Customer = res.data;
            console.log(Customer, "got the customer name");
            this.setState({
                cusName: Customer.name,

            });
        });

        this.passCussId();


    }


    passCussId() {
        var data = sessionStorage.getItem('payBooking');
        data = JSON.parse(data);

        //set session 1
        sessionStorage.setItem('passCID', data.cusid);
        var data = sessionStorage.getItem('test');
        console.log(data, "SESSION Passed Cutomer Id");

    }



    retrievecode() {

        this.changeValue();

    }

    changeValue() {
        //if(this.state.send == true) {

        console.log("Promocode: " + this.state.code);
        //this.state.code;

        PromoService.getPromocodeBycode(this.state.code).then((res) => {
            let Promo_Code = res.data;
            console.log(Promo_Code, "got the data");
            try {

                this.setState({
                    fetchedcode: Promo_Code[0].code,
                    amount: Promo_Code[0].amount,
                    count: Promo_Code[0].count,
                    promoid: Promo_Code[0].promo_ID
                });

                var data = sessionStorage.getItem('payBooking');
                data = JSON.parse(data);

                PaymentService.getPaymentsByCus(data.cusid).then((res) => {
                    let Customer = res.data;
                    console.log(Customer, "payment table customer with promoid");
                    var len = Customer.length;
                    console.log(len, "length of payment retrieved");
                    var promoCount;
                    var flag = 1;

                    //for loop to check already used promos

                    for (var i = 0; i < len; i++) {
                        if (Customer[i].promoID == this.state.promoid && this.state.promoid != 0) {

                            alert("You have already used this promocode!")

                            var data = sessionStorage.getItem('payBooking');
                            data = JSON.parse(data);

                            this.setState({

                                fetchedcode: '',
                                amount: 0,
                                count: 0,
                                promoid: 0,
                                calTotal: data.total

                            });
                            flag = 0;

                        }
                    }
                    if (flag == 1)
                        this.caltotal();
                    //console.log(this.state.calTotal);

                    console.log(this.state.calTotal);


                });



            } catch (error) {
                //this.state.code = 'ROSE19';
                //alert display
                if (this.state.code == ''){

                var data = sessionStorage.getItem('payBooking');
                data = JSON.parse(data);

                this.setState({

                    fetchedcode: '',
                    amount: 0,
                    count: 0,
                    promoid: 0,
                    calTotal: data.total
    
                });

                    alert("Please, Enter a Value!")
                    
                }
                else{
                    var data = sessionStorage.getItem('payBooking');
                    data = JSON.parse(data);

                    this.setState({

                        fetchedcode: '',
                        amount: 0,
                        count: 0,
                        promoid: 0,
                        calTotal: data.total
        
                    });

                    alert("You have Entered an Incorrect Value!")
                }
            }

        });


    }

    caltotal() {

        if (this.state.count == 0) {

            var data = sessionStorage.getItem('payBooking');
            data = JSON.parse(data);

            this.setState({

                fetchedcode: '',
                amount: 0,
                count: 0,
                promoid: 0,
                calTotal: data.total

            });
            alert("Expired Promo code, Please Enter a Valid One!")
        }
        else if (this.state.code == this.state.fetchedcode && this.state.count > 0) {
            this.state.calTotal = this.state.storeTotal - this.state.amount;
            //this.state.count = this.state.count - 1;


        }


    }

    placeorder = (e) => {

        if (this.state.paymentMethod !== "Card Payment" && this.state.paymentMethod !== "Cash on Delivery") {
            alert("Please Select a Payment Method!")
        }

        else {

            if (this.state.paymentMethod == "Cash on Delivery") {

                this.state.count = this.state.count - 1;
            }


            e.preventDefault();
            let payorder = {
                customerId: this.state.cusID, customerName: this.state.cusName, status: this.state.status, promoID: this.state.promoid,
                paymentMethod: this.state.paymentMethod, description: this.state.description, amount: this.state.calTotal, paymentDate: this.state.currentDate, payTypeID: this.state.payTypeID
            };
            //set session 2
            sessionStorage.setItem('insertpayment', JSON.stringify(payorder));
            // var testorder = sessionStorage.getItem('insertpayment');
            // testorder = JSON.parse(testorder);
            // console.log(testorder, "Credit card Payment details object");

            let Promo_Code = { promoid: this.state.promoid, code: this.state.code, amount: this.state.amount, count: this.state.count };

            //set session 3
            sessionStorage.setItem('UpdatePromoCount', JSON.stringify(Promo_Code));

            console.log('payorder => ' + JSON.stringify(payorder));
            console.log('Promo_Code => ' + JSON.stringify(Promo_Code));

            if (this.state.paymentMethod == "Cash on Delivery") {

                PaymentService.placeorder(payorder).then(res => {

                    this.props.history.push('/complete');

                });

            }

            else {

                //console.log(tot);
                //this.props.history.push(`/card/${tot}`);
                //make session
                var data = sessionStorage.getItem('payBooking');
                data = JSON.parse(data);
                let obj = { total: this.state.calTotal, cusid: data.cusid, count: this.state.count };

                //set session 4

                sessionStorage.setItem('AmountID', JSON.stringify(obj));
                this.props.history.push('/card');

            }
            if (Promo_Code.promoid != 0) {

                PromoService.updatePromocode(Promo_Code, this.state.promoid).then(res => {

                });
            }
        }
    }


    changeCodeHandler = (event) => {
        try {
            this.setState({ code: event.target.value });
        } catch (error) {

        }


        this.changeValue();

    }

    changedescriptionHandler = (event) => {
        this.setState({ description: event.target.value });
    }

    handleChange = (event) => {
        this.setState({ paymentMethod: event.target.value });
    }

    test = (event) => {
        this.setState({ code: event.target.value });
    }
    render() {
        return (
            <div className="container">
                <div style={{ marginTop: 100, marginBottom: 100 }}>

                    <div class="row" style={{ marginTop: 75 }}>

                        <div class="col-sm-6">

                            <div class="card">
                                <div class="card-body">



                                    <h3 class="card-title">Payment Methods</h3><br /><br /><br />

                                    <form>
                                        <div className="form-group">
                                            <input type="radio" value="Card Payment" name="paymethod" onChange={this.handleChange} /> Card Payment <br /><br />
                                            <input type="radio" value="Cash on Delivery" name="paymethod" onChange={this.handleChange} /> Cash on Delivery
                                        </div>

                                        <br /><br />

                                        <label style={{ float: "left" }}> Transaction Date: </label>

                                        <div className="datewidth">

                                            {this.state.currentDate}

                                        </div>


                                        <br /><br />
                                        <div className="form-group">
                                            <label> Description </label>
                                            <div style={{ marginTop: 15 }}>
                                                <textarea placeholder="Sender Remark..." name="description" className="form-control"
                                                    value={this.state.description}
                                                    onChange={this.changedescriptionHandler}
                                                />
                                            </div>
                                        </div>

                                    </form>



                                </div>
                            </div>

                        </div>



                        <div class="col-sm-6" style={{ borderRadius: '20%' }}>
                            <div class="card">
                                <div class="card-body">


                                    <h3>Order Summary</h3>
                                    <form>
                                        <br />
                                        <div className="form-group">
                                            <label style={{ float: "left" }}> Store Total </label>
                                            <div className="inputwidth">
                                                <span>

                                                    <div style={{ fontWeight: "bold" }}>Rs. {this.state.storeTotal}</div>

                                                </span>
                                            </div>
                                        </div>
                                    </form>

                                    <br />
                                    <div className="form-group">
                                        <label> Promo Code </label><br /><br />
                                        <div className="samelinebtn">
                                            <div className="inputwidth2">
                                                <input type="text" placeholder="" name="code" className="form-control" value={this.state.code}
                                                    onChange={this.test} />
                                            </div>

                                            <div className="applybtn">

                                                <button onClick={this.retrievecode}>APPLY</button>
                                            </div>
                                        </div>
                                    </div>
                                    <form>





                                        <hr style={{
                                            color: '#000000',
                                            backgroundColor: '#000000',
                                            height: .5,
                                            borderColor: '#000000'
                                        }} />




                                        <div className="form-group">
                                            <label style={{ float: "left" }}> Total </label>
                                            <div className="inputwidth">
                                                <span>

                                                    <div style={{ color: "orange", fontWeight: "bold" }}>Rs. {this.state.calTotal}</div>

                                                </span>
                                            </div>
                                        </div>




                                        <br />



                                        <button className="placebtn" onClick={this.placeorder}>Place Order</button>




                                    </form>
                                </div>

                            </div>

                        </div>



                    </div>
                </div>
            </div>


        );
    }
}

export default MakePaymentComponent;