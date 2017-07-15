import React, { Component } from 'react';
import { Nav, NavItem, NavLink, Navbar, NavbarBrand, Collapse } from 'reactstrap';


class MainNavBar extends Component {
    render() {
        return (
            <div className="MainNavBar">
                <Navbar color="faded" light toggleable>
                    <NavbarBrand href="/">TruePrice</NavbarBrand>
                    <Collapse isOpen={true} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="#">First Link</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">Second Link</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default MainNavBar;
