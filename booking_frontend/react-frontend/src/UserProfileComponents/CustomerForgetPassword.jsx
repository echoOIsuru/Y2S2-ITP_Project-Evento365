import React, { Component } from 'react';
import CustomerService from '../UserServices/CustomerService';
import Grid from '@material-ui/core/Grid';

class CustomerForgetPassword extends Component {

    constructor(props) {
        super(props)

        this.state = {
            email: [],
            secques:'',
            secquesno:'',
            answer:'',
            correctAnswer:'',
            admin:[],
            email:'',
            password:'',
            id:''
        }
        
        this.qnumber = '';
        

    }
    

    
    checkEmail = (l) =>{
        l.preventDefault();
        let email = {email: this.email};
        console.log('email =>'+ JSON.stringify(email));

        
        CustomerService.getByEmail(email).then((res)=>{
           let customer = res.data;
            console.log('customer =>'+ JSON.stringify(customer)); 

            this.state.correctAnswer = res.data.sec_ques_answer;
            this.qnumber = res.data.sec_ques_no;
            this.loadSecQues(res.data.sec_ques_no);
            this.state.id = res.data.id;

            if(res.data.sec_ques_no == 0){
                alert("Email address not found please check back and try again.");
            }

            
        });
                
        }

    loadSecQues(no){
        if(no == 0){
            this.state.secques = "Invalid Email Address.";
            this.forceUpdate();
        }
        else if(no == 1){
            this.state.secques = "What primary school did you attend?";
            this.forceUpdate();
        }else if(no == 2){
            this.state.secques = "What are the last five digits of your driver's license number?";
            this.forceUpdate();
        }else{
            this.state.secques = "What were the last four digits of childhood telephone number?";
            this.forceUpdate();
            
        }
        
    }


    emailhandle(event){
        this.email=event.target.value;
        console.log(this.email);
    }
    answerhandle(event){
        this.state.answer=event.target.value;
        console.log(this.answer);
        

    }

    validateAnswer(val){
        if(this.qnumber !=0){
            if(this.state.correctAnswer === this.state.answer){
                let confirmAction = window.confirm('Are you sure to change your Password?');
                if (confirmAction) {
                    this.props.history.push('/customer-passreset/'+this.state.id);
                  } else {
                    this.props.history.push('/customer-passchange');
                  }
            }else{
                alert('Your Answer is incorrect. Please check that again.');
            }
        }
    }

   
    render() {
        return (
            <Grid container spacing={2} justify="center">
            <div style={{width:'450px'}} >
                <fieldset className="blackborder transformDiv">
                <form id="form_login">
                <p style={{fontSize:'30px'}}>Security Question Validation</p>

                <div className="form-group">
                    <label>Enter your Email</label>
                    <input type="email" className="form-control" placeholder="Enter Email" onChange={this.emailhandle.bind(this)}/>
                </div>

                <button type="button" onClick={this.checkEmail}  className="userButtons" style={{marginTop:'10px'}}>VALIDATE</button>
                <p className="forgot-password text-right">
                
                </p>
            </form>
            <form id="form_login">

                <div className="form-group">
                    <label>Security Question</label>
                    <textarea value={this.state.secques} className="form-control"readOnly/>
                </div>

                <div className="form-group">
                    <label>Answer</label>
                    <input type="answer" className="form-control" placeholder="Answer" onChange={this.answerhandle.bind(this)}/>
                </div>

    

                <button type="button" onClick={() => { this.validateAnswer() }} className="userButtons" style={{marginTop:'10px'}}>RESET PASSWORD</button>
                <p className="forgot-password text-right">
                
                </p>
            </form>
            </fieldset>
            <br/><br/><br/>
            </div>
            </Grid>
            
        );
    }
}



export default CustomerForgetPassword;