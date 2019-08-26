import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.svg'
import styled from 'styled-components'
import {ButtonContainer} from './Button'


class Navbar extends Component {
    render() {
        return (
            <div>
                <NavWrapper className="navbar navbar-expand-sm  nav-dark px-sm-5">
                    <Link to = '/'>
                    <img src = { logo } alt = "store" className= "nav-brand"/>
                    </Link>
                        <ul className= "navbar-nav align-items-center">
                            <li className= "nav-item ml-5">
                            <Link to ="/" className ="nav-link text-danger">product</Link>
                            </li>
                        </ul>

                        <Link to ="/cart" className = "ml-auto">
                            <ButtonContainer>
                                <span className= "mr-2">
                                    <i className="fa fa-cart-plus" aria-hidden="true"/>  

                                </span>
                                my cart
                            </ButtonContainer>
                        </Link>
                </NavWrapper>
              
                    {/* https://www.iconfinder.com/icons/1243689/call_phone_icon
                    Creative Commons (Attribution 3.0 Unported);
                    https://www.iconfinder.com/Makoto_msk */}
                
            </div>
        );
    }
}

const NavWrapper = styled.nav`
background: var(--mainBlue);

.nav-link {
    color: var(--mainWhite)!important;
    font-size:1.3rem;
    text-transform: capitalize!important;
}


`

export default Navbar;