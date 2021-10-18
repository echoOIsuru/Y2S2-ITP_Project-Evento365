import React, { useState } from 'react';
import useForm from "./useForm";
import { Button, Form, Alert, Row, Col } from "react-bootstrap";
//import React, { useState } from 'react';
import "../PaymentHandlingStyles/CreditCardComponent.css";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import { useHistory } from "react-router-dom";
import PromoService from '../PaymentHandlingServices/PromoService';
import PaymentService from '../PaymentHandlingServices/PaymentService';

const CreditCardComponent = () => {
  // this.State({

  //   Total:0,
  //   CusID:''

  // })
  const { handleChange, handleFocus, handleSubmit, values, errors } = useForm();
  const history = useHistory();

  function cancel() {

    history.push('/addpaydetails');

  }


  function navigate() {


    //place an order by insert data to payment table
    PaymentService.placeorder(payorder).then(res => {

      history.push('/complete');

    });

    //substract count by 1 and update it from relevent code in promo code table if the promoid is not 0

    promoorder.count = promoorder.count - 1;

    if (promoorder.promoid != 0) {

      PromoService.updatePromocode(promoorder, promoorder.promoid).then(res => {

      });

    }


  }
  //get session 1

  var payorder = sessionStorage.getItem('insertpayment');
  payorder = JSON.parse(payorder);
  console.log(payorder, "Credit card Payment details object");

  //get session 2
  var promoorder = sessionStorage.getItem('UpdatePromoCount');
  promoorder = JSON.parse(promoorder);
  console.log(promoorder, "Credit card Promo details object");


  //get session 3

  var data = sessionStorage.getItem('AmountID');
  data = JSON.parse(data);
  console.log(data, "RETURN VALUES-------->");

  // this.State({

  const [amount, setamount] = useState(data.total)



  var data2 = sessionStorage.getItem('passCID');
  sessionStorage.setItem('passCID', data2);


  // })


  return (
    <div className="container">
      <div >
        <div className="cardcss">
          <div className="box justify-content-center align-items-center">
            <div className="formDiv" style={{ width: 800 }}>
              <div className="creditCard">
                <Cards
                  cvc={values.cardSecurityCode}
                  expiry={values.cardExpiration}
                  focused={values.focus}
                  name={values.cardName}
                  number={values.cardNumber}
                />
              </div>
              <Form id="cardform" onSubmit={handleSubmit}>
                <Form.Group>
                  <Form.Control
                    type="text"
                    id="cardName"
                    data-testid="cardName"
                    name="cardName"
                    placeholder="Cardholder Name"
                    value={values.cardName}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    isValid={errors.cname}
                  />

                </Form.Group>
                <Form.Group>
                  <Form.Control
                    type="number"
                    id="cardNumber"
                    data-testid="cardNumber"
                    name="cardNumber"
                    placeholder="Card Number"
                    value={values.cardNumber}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    isValid={errors.cnumber}
                  />
                </Form.Group>
                <Row>
                  <Col>
                    <Form.Group>
                      <Form.Control
                        type="text"
                        name="cardType"
                        id="cardType"
                        data-testid="cardType"
                        placeholder="Card Type"
                        value={values.cardType}
                        onChange={handleChange}
                        onFocus={handleFocus}
                        isValid={errors.ctype}
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group>
                      <Form.Control
                        type="text"
                        id="cardExpiration"
                        data-testid="cardExpiration"
                        name="cardExpiration"
                        placeholder="Expiration Date"
                        value={values.cardExpiration}
                        onChange={handleChange}
                        onFocus={handleFocus}
                        isValid={errors.cexp}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group>
                      <Form.Control
                        type="number"
                        id="cardSecurityCode"
                        data-testid="cardSecurityCode"
                        name="cardSecurityCode"
                        placeholder="Security Code"
                        value={values.cardSecurityCode}
                        onChange={handleChange}
                        onFocus={handleFocus}
                        isValid={errors.ccvv}
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group id="Pamount">
                      <Form.Control
                        /* type="text"
                         id="cardPostalCode"
                         data-testid="cardPostalCode"
                         name="cardPostalCode"
                         placeholder="Postal Code"
                         value={values.cardPostalCode}
                         onChange={handleChange}
                         onFocus={handleFocus}
                         isValid={errors.cpostal}*/
                        type="number"
                        id="amount"
                        name="amount"
                        value={amount}
                        placeholder="Rs.1000"
                        disabled

                      />
                    </Form.Group>
                  </Col>
                </Row>
                <div className="btnmerge">
                  <div className="valibtn">
                    <Button
                      size={"block"}
                      data-testid="validateButton"
                      id="validateButton"
                      type="submit"
                    >
                      Validate
                    </Button>
                  </div>
                  <div className="confirmbtn">
                    <Button
                      style={{ marginLeft: "10px" }}

                      onClick={navigate}
                    >
                      Confirm
                    </Button>
                  </div>

                </div>

                <button className="Creditcancel" onClick={cancel} style={{ marginLeft: "330px", marginTop: 10 }}>Cancel</button>


              </Form>
            </div>
            <Alert
              id="alertMessage"
              data-testid="alertMessage"
              variant={errors.variant}
              show={errors.show}
            >
              {errors.message}
            </Alert>{" "}

          </div>
        </div>
      </div>
    </div>
  );
};




export default CreditCardComponent;