import React, { Component } from 'react';

class EmptyCart extends Component {
    render() {
        return (
            <div className= "container mt-5">
               <div className="row">
                   <div className="col-10 mx-auto text-center text-title">
                       <h1>Your cart is curently empty</h1>
                   </div>
                   
               </div> 
            </div>
        );
    }
}

export default EmptyCart;
