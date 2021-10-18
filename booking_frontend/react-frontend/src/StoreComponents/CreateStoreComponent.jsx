import React, { Component } from 'react';
import StoreService from '../StoreServices/StoreService';
const myStyle = {
  /*color: "red",*/
  background: "#DBF3FA"  
  };
/*const inputColor={
   background: "red"
};*/
class CreateStoreComponent extends Component {
    constructor(props){
        super(props)

        this.state ={
            
           item_title: '',
            description: '',
            itemcategory: '',
            colour: '',
          
            additional: '',
            price: '',
            availability: '',
            img_url: ''

        }
        this.changeItemTitleHandler = this.changeItemTitleHandler.bind(this);
        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
        this.changeItemCategoryHandler = this.changeItemCategoryHandler.bind(this);
        this.changeColourHandler = this.changeColourHandler.bind(this);
    
        this.changeAdditionalHandler = this.changeAdditionalHandler.bind(this);
        this.changePriceHandler = this.changePriceHandler.bind(this);
        this.changeAvailabilityHandler = this.changeAvailabilityHandler.bind(this);
        this.changeImageUrlHandler = this.changeImageUrlHandler.bind(this);

        this.saveStore = this.saveStore.bind(this);
    }
   
    //get data to the json
    saveStore = (e) => {
        e.preventDefault();
        let store = {item_id: 0,item_title:this.state.item_title, description:this.state.description, 
            itemcategory:this.state.itemcategory,colour:this.state.colour,
            additional:this.state.additional,price:this.state.price,availability:this.state.availability,img_url:this.state.img_url};
        console.log('store =>' +JSON.stringify(store));
        
        StoreService.createStore(store).then(res =>{
            
            this.props.history.push('/stores');
        });
    }

    changeItemTitleHandler= (event) =>{
        this.setState({item_title: event.target.value});
    }
    changeDescriptionHandler= (event) =>{
        this.setState({description: event.target.value});
    }
    changeItemCategoryHandler= (event) =>{
        this.setState({itemcategory: event.target.value});
    }
    changeColourHandler= (event) =>{
        this.setState({colour: event.target.value});
    }
 
    changeAdditionalHandler= (event) =>{
        this.setState({additional: event.target.value});
    }
    changePriceHandler= (event) =>{
        this.setState({price: event.target.value});
    }
    changeAvailabilityHandler= (event) =>{
        this.setState({availability: event.target.value});
    }
    changeImageUrlHandler= (event) =>{
        this.setState({img_url: event.target.value});
    }

    //redirect to the booking page
    cancel(){
        this.props.history.push('/stores');
    }

    render() {
        return (
            
            <div style={{ 
                backgroundImage: `url("https://thumbs.dreamstime.com/b/pastel-watercolor-background-abstract-as-144488478.jpg")` 
              }}>
            
            <div ><br></br>
                <div className = "container">
                    <div className = "row">
                        
                        <div className = "card col-md-6 offset-md-3 offset-md-3" style={myStyle} >
                            <h3 className="text-center">Add Item</h3>
                            <div className="card-body">
                                <form onSubmit={this.saveStore}>
                                    <div className = "form-group" >
                                    <lable>Item Title</lable>
                                    <input  required={true} class="form-control"  placeholder="Happy Birthday Banner Black" name="item_title" className="form-control" 
                                            onChange={this.changeItemTitleHandler} value={this.state.itemTitle}/>
                                    </div>

                                    <div className = "form-group">
                                    <lable>Description</lable>
                                    <input required={true} placeholder="" name="description" className="form-control" 
                                           onChange={this.changeDescriptionHandler} value={this.state.description}/>
                                    </div>

                                    <div className="form-group ">
                                                <lable >Item Category ID</lable>
                                                <select name="birthday" className="form-control" onChange={ this.changeItemCategoryHandler} value={this.state.itemcategory} required>
                                                    <option value="" disabled={true}>------------Select Category------------</option>
                                                    <option value="Marriage">Marriage</option>
                                                    <option value="Family function">Family Function</option>
                                                    <option value="Birthday">Birthday Party</option>
                                                    <option value="Anniversary">Anniversary Party</option>
                                                    <option value="Farewell party">Farewell Party</option>
                                                    <option value="College events">College Event</option>
                                                </select>
                                            </div>

                
                                    <div className = "form-group">
                                    <lable>Colour</lable>
                                    <input required={true} placeholder="black" name="colour" className="form-control" 
                                           onChange={this.changeColourHandler} value={this.state.colour}/>
                                           
                                    </div>
                                  
                                    <div className = "form-group">
                                    <lable>Additional</lable>
                                    <input required={true} placeholder="" name="additional" className="form-control" 
                                           onChange={this.changeAdditionalHandler} value={this.state.additional}/>
                                           
                                    </div>
                                    <div className = "form-group">
                                    <lable>Price</lable>
                                    <input required={true} placeholder="Rs 300.00" name="price" className="form-control" 
                                           onChange={this.changePriceHandler} value={this.state.price}/>
                                           
                                    </div>
                                    <div className = "form-group">
                                    <lable>Availability</lable>
                                    <input required={true} placeholder="" name="price" className="form-control" 
                                           onChange={this.changeAvailabilityHandler} value={this.state.availability}/>
                                           
                                    </div>
                                    <div className = "form-group">
                                    <lable>Image</lable>
                                    <input  placeholder="" name="img_url" className="form-control" 
                                           onChange={this.changeImageUrlHandler} value={this.state.imageUrl}/>
                                           
                                    </div>
                                    
                                    <input type="submit" className="btn btn-dark" value="ADD" style={{width:"20%"}}  />
                                    <button className="btn btn-dark" onClick={this.cancel.bind(this)} style={{marginLeft: "300px", width:"20%"}}>Cancel</button>

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

export default CreateStoreComponent;
