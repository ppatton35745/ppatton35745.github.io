import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import { NavLink as RRNavLink } from "react-router-dom";

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
        <Navbar color="dark" dark light expand="md">
          <NavbarBrand href="/">Phil Patton</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink exact to="/" tag={RRNavLink}>
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/about" activeClassName="active" tag={RRNavLink}>
                  About
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to="/experience"
                  activeClassName="active"
                  tag={RRNavLink}
                >
                  Experience
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to="/projects"
                  activeClassName="active"
                  tag={RRNavLink}
                >
                  Projects
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
