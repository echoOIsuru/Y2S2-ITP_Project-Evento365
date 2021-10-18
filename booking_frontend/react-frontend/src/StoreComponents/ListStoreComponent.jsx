import React, { Component } from 'react';
import StoreService from '../StoreServices/StoreService';



class ListStoreComponent extends Component {
    constructor(props){
        super(props);

        this.state ={
            all_stores: []
        }
        this.addStore =this.addStore.bind(this);
        this.editStore = this.editStore.bind(this);
        this.deleteStore = this.deleteStore.bind(this);

    }

    deleteStore(item_id){
        //rest api
        StoreService.deleteStore(item_id).then( res => {
            this.setState({all_stores: this.state.all_stores.filter(store => store.item_id !== item_id)});
        });
    }

    viewStore(item_id){
        this.props.history.push(`/view-store/${item_id}`);
    }

    editStore(item_id){
        this.props.history.push(`/update-store/${item_id}`);
    }
    
    componentDidMount(){
       StoreService.getStores().then((res) =>{
            this.setState({all_stores: res.data});
        });
    }

    addStore(){
        this.props.history.push('/add-store');
    }


  td = () => {
    return {
      width: "100%",
      marginLeft: "10%",
    };
  };
  th = () => {
    return {
      width: "100%",
      marginLeft: "10%",
    };
  };


    render() {

        return (
            <div style={{ 
                backgroundImage: `url("https://thumbs.dreamstime.com/b/pastel-watercolor-background-abstract-as-144488478.jpg")` 
              }}>
            <div className="container">
            <div>
               {/*   <div className="box" style={{background: `linear-gradient(${color1}, ${color2})`}} /> */}
                
                <h2 className="text-center">Item List</h2>
              
                <div>
                    <button class="btn btn-info" onClick={this.addStore}>Add Item</button>
                </div>
                <br></br>
                <div className = "row">
                    <table className = "table table-striped table-bordered">
                        <thead  class="table-danger">
                            <tr>
                              
                                <th>Item Title</th>
                                <th>Description</th>
                                <th>Item Category</th>                               
                                <th>Colour</th>                              
                               
                                <th>Additional</th>                              
                                <th>Price</th>
                                <th>Availability</th>

                                <th style={{ width:"10%"  }}>Image</th>
                                <th style={{ width:"30%" }}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.all_stores.map(
                                    stores =>
                                    <tr class="table-info" style={{ height:"5%" }} key = {stores.item_id}>
                                        <td>{stores.item_title}</td>
                                        <td style={{ width:"10%" }}>{stores.description}</td>
                                        <td style={{ width:"5%" }}>{stores.itemcategory}</td>
                                        <td>{stores.colour}</td>
                                      
                                        <td style={{ width:"10%" }}>{stores.additional}</td>
                                        <td>{stores.price}</td>
                                        <td>{stores.availability}</td>
                                        <td style={{ width:"10%" }}>{stores.img_url}</td>
                                        <td ><button onClick={ () => this.editStore(stores.item_id)} class="btn btn-outline-primary">Update </button>
                                       <button style={{marginLeft: "10px"}} onClick={ () => this.deleteStore(stores.item_id)} className="btn btn-outline-danger">Delete </button>
                                        <button style={{marginLeft: "10px"}} onClick={ () => this.viewStore(stores.item_id)} className="btn btn-outline-success">View </button></td>
                                    </tr>
                                )
                            }    
                        </tbody>  
                    </table>
                </div>    
            </div>
            </div>
            </div>
        );
    }
}

export default ListStoreComponent;