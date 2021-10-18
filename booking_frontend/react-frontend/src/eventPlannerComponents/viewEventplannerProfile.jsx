import React, { Component } from 'react';
import EventPlannerService from '../eventPlannerServices/EventPlannerService';
class viewEventplannerProfile extends Component {

    
    constructor(props){
        super(props)
            
        this.state={
            id: this.props.match.params.id,
            events:{}
        }

    }

      componentDidMount(){

       EventPlannerService.getEventPlannerById(this.state.id).then(res=>{
         this.setState({events:res.data});


       });

      }

    render() {
        return (
            <div className="container">
                <br />   <br />  <br />
                 <div className="background1"></div>
               <div style={{marginTop:"30px"}}className = "card col-md-12 offset-md-2">
                   <h4  className= "text-center"> EVENT PLANNER DETAILS </h4>
                   <div className="card-body">
  
                   <div className="row">
                   <center>

                    <img style = {{width:"200px", height:"200Px"}}  src={this.state.events.img}/>
                    </center>
   

                </div>
                   <center>

                      <div className="row ml_20">
                    <label> Name:{this.state.events.name } </label>
                    <div></div>
                    
                </div>

                <div className="row ml_20">
                    <label>Email:{this.state.events.email } </label>
                    <div></div>
                    
                </div>

                
                <div className="row ml_20">
                    <label>Phone number:{this.state.events.phone_number }</label>
                    <div></div>
                    
                </div>



                
                <div className="row ml_20">
                    <label>Experience:{this.state.events.experience } </label>
                    <div></div>
                    
                </div>



              


                
                <div className="row ml_20">
                    <label>Skills:{this.state.events.skills } </label>
                    <div></div>
                    
                </div>



                
                <div className="row ml_20">
                    <label>Price: {this.state.events.price }</label>
                    <div></div>
                    
                </div>


</center>
    
        </div>

        
     </div>

 </div>
        );
    }
}

export default viewEventplannerProfile;