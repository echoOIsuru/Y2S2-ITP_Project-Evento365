import React, { Component } from 'react';

class FHeaderComponent extends Component {
    constructor(props){
        super(props)

        this.state = {

        }
    }
    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <div><a href="https://javaguides.net" className="navbar-brand">FOOD MANAGEMENT</a></div>

                    </nav>
                </header>
                
            </div>
        );
    }
}

export default FHeaderComponent;