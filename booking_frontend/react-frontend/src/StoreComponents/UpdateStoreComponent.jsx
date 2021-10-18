import React, { Component } from 'react';
import StoreService from '../StoreServices/StoreService';
const myStyle = {
    /*color: "red",*/
    background: "#DBF3FA"  
    };

class UpdateStoreComponent extends Component {
    constructor(props){
        super(props)

        this.state ={
        id: this.props.match.params.id,
           item_title: '',
            description: '',
           itemcategory: '',
            colour: '',
         
            additional: '',
            price: '',
            availability: '',
            imageUrl: '',

        }
        this.changeItemTitleHandler = this.changeItemTitleHandler.bind(this);
        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
        this.changeItemCategoryHandler = this.changeItemCategoryHandler.bind(this);
        this.changeColourHandler = this.changeColourHandler.bind(this);
      
        this.changeAdditionalHandler = this.changeAdditionalHandler.bind(this);
        this.changeImageUrlHandler = this.changeImageUrlHandler.bind(this);
        this.changePriceHandler = this.changePriceHandler.bind(this);
        this.changeAvailabilityHandler = this.changeAvailabilityHandler.bind(this);
        this.changeImageUrlHandler = this.changeImageUrlHandler.bind(this);

        this.updateStore = this.updateStore.bind(this);
    }
   
    componentDidMount(){
        StoreService.getStoresById(this.state.id).then( (res) =>{
            let store = res.data;
            this.setState({
               item_title:store.item_title, 
                description:store.description, 
               itemcategory:store.itemcategory,
                colour:store.colour,
            
                additional:store.additional,
                price:store.price,
                availability:store.availability,
               img_url:store.img_url
            });
        });
    }
    //get data to the json
    updateStore = (e) => {
        e.preventDefault();
        let store = {item_title:this.state.item_title, description:this.state.description, 
            itemcategory:this.state.itemcategory,colour:this.state.colour,
           additional:this.state.additional,price:this.state.price,availability:this.state.availability,img_url:this.state.img_url};
        console.log('store =>' +JSON.stringify(store));
        
        StoreService.updateStore(store,this.state.id).then(res =>{
            
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
            <div><br></br>
                <div className = "container">
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3"  style={myStyle}>
                            <h3 className="text-center">Update Item</h3>
                            <div className="card-body">
                                <form>
                                    <div className = "form-group">
                                    <lable>Item Title</lable>
                                    <input placeholder="Happy Birthday Banner Black" name="item_title" className="form-control" 
                                            onChange={this.changeItemTitleHandler} value={this.state.item_title}/>
                                    </div>

                                    <div className = "form-group">
                                    <lable>Description</lable>
                                    <input placeholder="" name="description" className="form-control" 
                                           onChange={this.changeDescriptionHandler} value={this.state.description}/>
                                    </div>

                                    <div className="form-group ">
                                                <lable >Item Category ID</lable>
                                                <select name="birthday" className="form-control" onChange={ this.changeItemCategoryHandler} value={this.state.itemcategory} required>
                                                    <option value="" disabled={true}>------------Select Item Category------------</option>
                                                    <option value="Marriage and Anniversary">Birthday</option>
                                                    <option value="Family function">Bride to be party</option>
                                                    <option value="Birthday">Birthday Party</option>
                                                    <option value="Halloween">Anniversary Party</option>
                                                    <option value="Theme party">Farewell Party</option>
                                                    <option value="Baby Shower">College Event</option>
                                                </select>
                                            </div>

                
                                    <div className = "form-group">
                                    <lable>Colour</lable>
                                    <input placeholder="black" name="colour" className="form-control" 
                                           onChange={this.changeColourHandler} value={this.state.colour}/>
                                           
                                    </div>
                                   
                                    <div className = "form-group">
                                    <lable>Additional</lable>
                                    <input placeholder="" name="additional" className="form-control" 
                                           onChange={this.changeAdditionalHandler} value={this.state.additional}/>
                                           
                                    </div>
                                    <div className = "form-group">
                                    <lable>Price</lable>
                                    <input placeholder="Rs 300.00" name="price" className="form-control" 
                                           onChange={this.changePriceHandler} value={this.state.price}/>
                                    
                                    <div className = "form-group">
                                    <lable>Availability</lable>
                                    <input required={true} placeholder="" name="availability" className="form-control" 
                                           onChange={this.changeAvailabilityHandler} value={this.state.availability}/>
                                           
                                    </div>
                                           
                                    </div>
                                    <div className = "form-group">
                                    <lable>Image</lable>
                                    <input placeholder="" name="img_url" className="form-control" 
                                           onChange={this.changeImageUrlHandler} value={this.state.img_url}/>
                                           
                                    </div>
                                    
                                    <button className="btn btn-dark" style={{width:"20%"}} onClick={this.updateStore.bind(this)} >Update </button>
                                    <button className="btn btn-dark"  onClick={this.cancel.bind(this)} style={{marginLeft: "300px", width:"20%"}}> Cancel</button>

                                 


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

export default UpdateStoreComponent;
