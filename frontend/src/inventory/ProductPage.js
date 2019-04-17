import React, { Component } from 'react';
import './ProductPage.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class ProductPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          productName: "Poo",
          date: new Date()
        };
        this.onChange = this.onChange.bind(this);
      }
    
    //   componentDidMount() {
    //     const url = "https://ign-apis.herokuapp.com/content";
    //     fetch(url)
    //       .then(response => response.json())
    //       .then(
    //         (result) => {
    //           this.setState({
    //             isLoaded: true,
    //             data: result.data
    //           })
    //         }
    //         ,
    //         (error) => {
    //           this.setState({
    //             isLoaded: true,
    //             error
    //           })
    //         }
    //       )
    //   }

    onChange(input) {
        this.setState({
            date: input
        });
    }

    renderDate() {
        let date;
        date = <DatePicker
                    selected={this.state.date}
                    onChange={this.onChange}/>;
        return date;
    } 

    render() {
        return (
        <div>
            {/* <header className="product-name">
                <input type="text" placeholder="Product Name">
                </input>
            </header>
            <form>
                {this.renderDate()}
                <input type="text" placeholder="">
                </input>
                <div placeholder="Place bought">
                </div>
            </form> */}
            {/* <div className="box content">
                
            </div> */}
            <div class="wrapper">
            {/* Product Name includes Brand and Name */}
            <div class="box header">Product Name</div>
            <div class="box sidebar">Image</div>
            <div class="box sidebar2">Sidebar 2</div>
            <div class="box content">
                <p>Color/Shade: </p>
                <p>Size:</p> {/*This includes # + units*/}
                <p>Category: </p>
                <p>Date Bought:</p>
                <p>Date Started: </p>
                <p>Price:</p>
                <p>Ingredients: </p>
                    {/* Each ingredient can be hovered and show
                        - EWG Score
                        - Data Availability
                        - Concerns
                        - Allergies
                        - About
                        - Functions
                        - Synonyms */}
                <p>Personal Logistics:</p>
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
            <div class="box footer">Footer</div>
            </div>
        </div>
        );
    }
}

export default ProductPage;
