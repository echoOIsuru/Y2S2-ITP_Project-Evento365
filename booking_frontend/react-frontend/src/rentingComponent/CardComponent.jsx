import React, { Component } from 'react';

import Card from "./Card";
class CardComponent extends Component {
    render() {
        return (
            
      <div>
      <Slider />
      <h4 className="center-align"><br></br>
        <span className="teal-text">Popular</span> Items
      </h4>
      <div className="container">
        <div className="row">
          {this.state.stores.map((stores) => {
            return (
              <Card
                item_id={stores.item_id}
                item_title={stores.item_title}
                description={stores.description}
                itemcategoryid={stores.itemcategoryid}
                colour={stores.colour}
                brand={stores.brand}
               additional={stores.additional}
               price={stores.price}
               img_url={stores.img_url}
              />
            );
          })}
        </div>
      </div>
    </div>
        );
    }
}

export default CardComponent;