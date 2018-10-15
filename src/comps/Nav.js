import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from "reactstrap";
import { NavLink } from "reactstrap";

export default class NavBar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="dark" dark light expand="md" fixed="top">
          <NavbarBrand href="/#home">Phil Patton</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink to="/" href="#home">
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/" href="#exp">
                  Experience
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/" href="#proj">
                  Projects
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/" href="#techs">
                  Technologies
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
