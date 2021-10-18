import React, { Component } from 'react';
import StoreService from '../StoreServices/StoreService'
const myStyle = {
    /*color: "#000080,*/
    background: "linear-gradient(to bottom, white, #E6E6FA)"  
    };

class ViewStoreItem extends Component {

constructor(props){
    super(props)

    this.state={
        item_id: this.props.match.params.item_id,
        store: {}

    }
}


componentDidMount(){
    StoreService.getItemsById(this.state.item_id).then( res => {
        this.setState({store: res.data});
    })
}


render() {
    return (
        <div class="container" style={{ 
            backgroundImage: `url("https://thumbs.dreamstime.com/b/pastel-watercolor-background-abstract-as-144488478.jpg")` 
          }}>
        <div>
            <br></br>
            
            <div className = "card col-md-8 offset-md-2  " style={myStyle} >
                <h3 className = "text-center"> {this.state.store.item_title }</h3>
                <div className = "card-body">
                    <table>
                   <th></th>
                   <th></th>
                   <tr><th style={{ width:"30%"}}> Item Title:</th>
                   <td style={{color:"#000080"}}>{this.state.store.item_title }</td></tr> <br></br>


                   <tr><th style={{ width:"30%"}}> Description:</th>
                   <td style={{color:"#000080"}}>{this.state.store.description }</td></tr> <br></br>


                   <tr><th style={{ width:"30%"}}> Item Category ID:</th>
                   <td style={{color:"#000080"}}>{this.state.store.itemcategoryid }</td></tr> <br></br>

                   <tr><th style={{ width:"30%"}}>  Colour:</th>
                   <td style={{color:"#000080"}}>{this.state.store.colour }</td></tr> <br></br>

                   <tr><th style={{ width:"30%"}}>  Brand:</th>
                   <td style={{color:"#000080"}}>{this.state.store.brand }</td></tr> <br></br>

                   <tr><th style={{ width:"30%"}}> Price:</th>
                   <td style={{color:"#000080"}}><p>Rs.{this.state.store.price }</p></td></tr> <br></br>

                   <tr><th style={{ width:"30%"}}>Image:</th>
                   <td style={{color:"#000080"}}>
                   <div className="from-group">

<img className="store_pic" src={this.state.store.img_url}/>

        </div>
</td></tr> <br></br>



</table>
                  

                 </div>

            </div>
        </div>
        </div>
    )
}
}


export default ViewStoreItem;