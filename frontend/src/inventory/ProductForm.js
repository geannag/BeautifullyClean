import React, { Component } from 'react';
import './ProductForm.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";



class ProductForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          date: new Date(),
          price: "$20.00"
        };
        this.onChange = this.onChange.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
      }

    onChange(input) {
        this.setState({
            date: input
        });
    }

    handleTextChange(new_price) {
        this.setState({
            price: new_price
        })
    }

    renderDate(date_type) {
        let date;
        date = <DatePicker id={date_type}
                    selected={this.state.date}
                    onChange={this.onChange}/>;
        return date;
    } 

    renderLogistics() {
        
    }


    render() {
      return (
        <div class="row">
        <form>
        <div class="row">
        <div class="wrapper">
        
            {/* Product Name includes Brand and Name */}
            <div class="box product-name-type">
                <input id="product_name" type="text" placeholder="Product Name"/>
            </div>
            <div class="box product-image">
                <input type="file" 
                       id="product_img" name="product_img"
                       accept="image/png, image/jpeg"/>
            </div>
            <div class="box ingredients">
                <p>Ingredients</p>
            </div>
            <div class="box basic-info">
                <input id="product_color" type="text" placeholder="N/A"/>
                <input id="product_size" type="text" placeholder="1.00"/>
                <input id="product_unit" type="text" placeholder="g"/>
                <input id="product_category" type="text" placeholder="Foundation"/>
                {this.renderDate("product_buy_date")}
                {this.renderDate("product_start_date")}
                <input id="product_price" type="text" placeholder='$20.00' onChange={this.handleTextChange}/>
                {/* - Consistency
                                - Will buy it again?
                                - Effects:
                                    - 			- Makeup
                                - Oily
                                - Drying
                                - Hydrating
                                - Nice Smell
                                - Nice Color
                                - Pay off
                                - Long wear
                                - Staining
                                - Bleeds
                                - Mattifying
                                - Coverage
                                    - Sheer
                                    - Medium
                                    - Full
                                - Breakout
                                - Brightening
                                - Notes
                            - Skin care
                                - Oily
                                - Drying
                                - Nice Smell
                                - Mattifying
                                - Hydrating
                                - Breakout
                                - Brightening
                                - Anti-Aging
                                - Clears Dark Spots
                                - Clears redness
                                - Sticky
                        */}
                </div>
            <div class="box personal-logistics">Personal Logistics:</div>
            </div>
        </div>
        </form>
        </div>
      );
    }
  }
  
  export default ProductForm;
  
