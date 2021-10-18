import React, { Component } from 'react';

class FooterComponent extends Component {


    constructor(props){
        super(props)
            
        this.state={
            hire:[]
  
        }
    }  





    render() {
        return (
            
                     <footer className="footer">
                       <span className="text-muted">ALL Right</span>
                          
                     </footer>
            
        );
    }
}

export default FooterComponent;