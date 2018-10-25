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
                <NavLink to="/" href="#home" onClick={this.toggle}>
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/" href="#exp" onClick={this.toggle}>
                  Experience
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/" href="#proj" onClick={this.toggle}>
                  Projects
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/" href="#techs" onClick={this.toggle}>
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
