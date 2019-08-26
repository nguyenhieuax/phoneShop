import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Modal from './components/Modal'
import ProductList from './components/ProductList'
import Details from './components/Details'
import Default from './components/Default'
import Cart from './components/cart'
import {Switch, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar/>
        <Switch>
          <Route exact path="/" component = {ProductList}></Route>
          <Route path="/details" component = {Details}></Route>
          <Route path="/cart" component = {Cart}></Route> 
          <Route  component = {Default}></Route>
        </Switch>
          <Modal></Modal>
       
      </React.Fragment>
    );
  }
}


export default App;
