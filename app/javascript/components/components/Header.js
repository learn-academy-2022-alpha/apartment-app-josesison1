import React, { Component } from 'react'
import { Nav, NavItem } from 'reactstrap'

class Header extends Component {
    render() {
        const {
            logged_in,
            current_user,
            new_user_route,
            sign_in_route,
            sign_out_route
        } = this.props
        console.log("logged_in:", logged_in)
        console.log("current_user:", current_user)
        return (
            <>
                <h1>Welcome to my Apartment Application!</h1>
                <Nav>
                    <NavItem>
                        <a href={sign_in_route} id="links" className="nav-link">Sign In</a>
                    </NavItem>

                    <NavItem>
                        <a href={new_user_route} className="nav-link">Sign Up</a>
                    </NavItem>

                    <NavItem>
                        <a href={sign_out_route} className="nav-link">Sign Out</a>
                    </NavItem>

                </Nav>
            </>
        )
    }
}
export default Header