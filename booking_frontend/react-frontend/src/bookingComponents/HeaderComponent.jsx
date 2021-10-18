import React, { Component } from 'react';
import '../css/components.css'
import '../css/responsee.css'
import '../css/template-style.css'
import headerImg from "../Images/headerLogo.png";

class HeaderComponent extends Component {


    render() {
        return (
            <div>
                <header className="fixed-top" style={{width:"100%",backgroundColor:"grey"}}>

                    <header role="banner" className="" style={{width:"100%"}}>
                   
                        <nav class="background-dark background-black-hightlight full-width sticky">         
                            <div class="s-12 l-2">
                                <a href="http://localhost:3000/homepage" class="logo">
                                    <br></br>
                                    <img src={headerImg} style={{height: 60,marginTop:"-40px" }} alt="" />
                                    
                                </a>
                            </div>
                                
                            <ul class="right chevron">
                                        <li><a class="text-white" href="http://localhost:3000/homepage">Home</a></li>
                                        <li><a class="text-white" href="http://localhost:3000/customer-login">Logout</a></li>
                                    </ul>
                        </nav>
                    </header>


                </header>
            </div>
        )
    }
}

export default HeaderComponent;
