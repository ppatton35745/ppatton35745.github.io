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

export default class Footer extends Component {
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
        <Navbar color="dark" dark light expand="md" fixed="bottom">
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink to="/" href="#home">
                Git
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/" href="#exp">
                LinkedIn
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/" href="#proj">
                Email
              </NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}
