import {
    // Collapse,
    // Nav,
    // NavItem,
    // NavLink,
    Button,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Input,
    InputGroup,
    InputGroupButtonDropdown,
} from 'reactstrap';
import React, { Component } from 'react';

class SearchbarMid extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
            placeholderText: 'Enter a product or ingredient..'
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    changePlaceholder(dropdown_id) {
        switch (dropdown_id) {
            case 'search_product':
                document.getElementsById("search")[0].value="";
                document.getElementsById("search_input")[0].placeholder="your message";    
                break;        
            case 'search_ingredient':
                document.getElementById("search_input").placeholder = "Enter an ingredient...";    
                break;       
            case 'search_list':
                document.getElementById("search_input").placeholder = "Enter a list of ingredients...";    
                break;
            default:
                {/* Throw something 'cause I should be here at all */}
                console.log('I better not fucking get here.');
        }
    }
    

    render() {
        
        return (
            <div>
            <InputGroup>
            <InputGroupButtonDropdown addonType="append" isOpen={this.state.isOpen} toggle={this.toggle}>
                <DropdownToggle id="all_search" nav caret>
                All
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem id="search_product">Product</DropdownItem>
                    <DropdownItem id="search_ingredient">Ingredient</DropdownItem>
                    <DropdownItem id = "search_list">Ingredient List</DropdownItem>
                </DropdownMenu>
                
            </InputGroupButtonDropdown>
            <Input id="search_input" placeholder={this.props.placeholderText} />
            <Button>Submit</Button>
            </InputGroup>
            </div>
        )
    }
  }
  
  export default SearchbarMid;