import React, { Component } from 'react';

class CartColumns extends Component {
    render() {
        return (
           <div className="container-fluid text-center d-lg-block">
               <div className="row">
                   <div className="col-10 mx-auto col-md-2">
                       <p className="text-uppercase">product</p>
                   </div>
                   <div className="col-10 mx-auto col-md-2">
                       <p className="text-uppercase">name of product</p>
                   </div>
                   <div className="col-10 mx-auto col-md-2">
                       <p className="text-uppercase">Price</p>
                   </div>
                   <div className="col-10 mx-auto col-md-2">
                       <p className="text-uppercase">quantitiy</p>
                   </div>
                   <div className="col-10 mx-auto col-md-2">
                       <p className="text-uppercase">remove</p>
                   </div>
                   <div className="col-10 mx-auto col-md-2">
                       <p className="text-uppercase">total</p>
                   </div>
                   
               </div>
           </div>
        );
    }
}

export default CartColumns;