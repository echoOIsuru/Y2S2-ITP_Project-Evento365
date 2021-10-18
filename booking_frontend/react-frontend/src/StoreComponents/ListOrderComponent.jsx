
//import React, { Component } from 'react';
//import  'react-form-with-constraints';
//import { FormWithConstraints, FieldFeedbacks, Async, FieldFeedback } from 'react-form-with-constraints';
//import { DisplayFields } from 'react-form-with-constraints-tools';
{/*import React, { Component } from 'react';
import StoreService from '../services/StoreService';

class ListOrderComponent extends Component {
    constructor(props){
        super(props);

        this.state ={
            all_stores: []
        }
        

    }

    
    
    componentDidMount(){
       StoreService.getStores().then((res) =>{
            this.setState({all_stores: res.data});
        });
    }

    

    render() {
        return (
            <div>
               {/*   <div className="box" style={{background: `linear-gradient(${color1}, ${color2})`}} /> */}
         {/*
        
        }       
                <h2 className="text-center">Item List</h2>
              
                <div>
                    <button class="btn btn-outline-warning" onClick={this.addStore}>Add Item</button>
                </div>
                <br></br>
                <div className = "row">
                    <table className = "table table-striped table-bordered">
                        <thead  class="table-danger">
                            <tr>
                              
                              
                                <th style={{ width:"5%" }}>Additional</th>                              
                                <th style={{ width:"5%" }}>Price</th>
                                <th style={{ width:"5%" }}>Image</th>
                                <th style={{ width:"18%" }}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.all_stores.map(
                                    stores =>
                                    <tr class="table-info" key = {stores.item_id}>
                                        
                                        <td style={{ width:"5%" }}>{stores.brand}</td>
                                        <td style={{ width:"15%" }}>{stores.additional}</td>
                                        <td style={{ width:"5%" }}>{stores.price}</td>
                                        <td style={{ width:"5%" }}>{stores.img_url}</td>
                                      
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

export default ListStoreComponent;


  const {
        FormWithConstraints,
        FieldFeedbacks,
        FieldFeedback
      } = ReactFormWithConstraints;
      

class ListOrderComponent extends Component {
  
     
        handleChange = e => {
          this.form.validateFields(e.target);
        }
      
        contactSubmit = e => {
          e.preventDefault();
      
          this.form.validateFields();
      
          if (!this.form.isValid()) {
            console.log('form is invalid: do not submit');
          } else {
            console.log('form is valid: submit');
          }
        }
      
        render() {
          return (
            <FormWithConstraints
              ref={form => this.form = form}
              onSubmit={this.contactSubmit}
              noValidate>
      
              <div className="col-md-6">
                <input name="name" size="30" placeholder="Name"
                       required onChange={this.handleChange}
                       className="form-control" />
                <FieldFeedbacks for="name">
                  <FieldFeedback when="*" />
                </FieldFeedbacks>
      
                <input type="email" name="email" size="30" placeholder="Email"
                       required onChange={this.handleChange}
                       className="form-control" />
                <FieldFeedbacks for="email">
                  <FieldFeedback when="*" />
                </FieldFeedbacks>
      
                <input name="phone" size="30" placeholder="Phone"
                       required onChange={this.handleChange}
                       className="form-control" />
                <FieldFeedbacks for="phone">
                  <FieldFeedback when="*" />
                </FieldFeedbacks>
      
                <input name="address" size="30" placeholder="Address"
                       required onChange={this.handleChange}
                       className="form-control" />
                <FieldFeedbacks for="address">
                  <FieldFeedback when="*" />
                </FieldFeedbacks>
              </div>
      
              <div className="col-md-6">
                <textarea name="comments" cols="40" rows="20" placeholder="Message"
                          required minLength={5} maxLength={50}
                          onChange={this.handleChange}
                          className="form-control" />
                <FieldFeedbacks for="comments">
                  <FieldFeedback when="*" />
                </FieldFeedbacks>
              </div>
      
              <div className="col-md-12">
                <button className="btn btn-lg btn-primary">Send Message</button>
              </div>
            </FormWithConstraints>
          );
        }
      }
export default ListOrderComponent;
*/}