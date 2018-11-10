import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import React, { Component } from 'react';

class NavbarMenu extends Component {
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
          <Navbar color="light" light expand="lg">
            {/* Brandname */}
            <NavbarBrand href="/">
             {/*Must make logo and add here; look into bootstrap media*/}
              Beautifully Clean
              </NavbarBrand>
            {/* Add toggler to auto-collapse */}
  
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              {/*Pull left */}
              <Nav  navbar>
                <NavItem>
                  <NavLink className="mr-auto" onClick={this.props.onClick}>
                    somthing
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="mr-auto" onClick={this.props.onClick}>
                    somthing
                  </NavLink>
                </NavItem>
              </Nav>
            
  
              {/* Pull right */}
              <Nav className="ml-auto" navbar>
                <UncontrolledDropdown inNavbar>
  
                  <DropdownToggle data-toggle="dropdown" nav caret>
                    something
                    </DropdownToggle>
  
                  <DropdownMenu right>
                    <DropdownItem>
                      something
                    </DropdownItem>
                    <DropdownItem>
                      something
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                      something
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      )
    }
  }
  
  export default NavbarMenu;