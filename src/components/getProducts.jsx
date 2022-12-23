import React from "react";
import axios from 'axios';
import {Link} from 'react-router-dom';


export default class Productlist extends React.Component {
    state = {
        products: [],
        type: "All",
        filterText: ""
    }

    //UseState is a react hook that lets you set some state to react component.

    componentDidMount() {
        axios.get('/api/products') 
        .then(res => {
            console.log(res);
            this.setState({products: res.data});
        });
    }

    myFilter (type) {
        return () => {
            this.setState({type})
        }
    }


    onChange (e){
        this.setState({filterText: e.target.value})
        
    }
   
    normalizeString(str) {
        return str.toLowerCase().replace(/\s/g, "");
    }
    
    render() {
        
        return (
            
            <div>
                <div className="product-container">
                <div className="search-container">
                <h3 className="searchLabel">Search By Name:</h3>
                <div>
                    <input className="searchBar" type="text" value={this.state.filterText} onChange={(e) => this.onChange(e)}></input>
                </div>
                </div>
            <div id="filter-container">
            <h3>Filter By Category: </h3>          
                    <button id="btn2" onClick={this.myFilter("All")}>All</button>
                    <button id="btn2" onClick={this.myFilter("gaming")}>Gaming</button>
                    <button id="btn2" onClick={this.myFilter("studio")}>Studio</button>
                    <button id="btn2" onClick={this.myFilter("everyday")}>Everyday</button>
            <h3>Sort By Price: </h3> 
                    <Link to ='/products/LowtoHigh' id='btn2'>Low to High</Link>
                    <Link to ='/products/HightoLow' id='btn2'>High to Low</Link>
                    <Link to ='/products' id='btn2'>Reset</Link>
                </div>
                </div>
                <div className="cards-container">
                    {
                        this.state.products 
                        .filter((props) => {
                            if (this.state.filterText === ""){
                                return true
                            } else {
                                return this.normalizeString(props.prodName).includes(this.normalizeString(this.state.filterText))
                            }
                        })

                        .filter((record) => {
                            if (this.state.type === "All"){
                                return true 
                            } else {
                                return this.state.type === record.Category
                            }

                        })
            
                        .map(props => (
                          <section class="card">
                        <div class="card-image">
              <img src={('images/' + props.Image + '.png')} alt={props.Image} />
                         </div>  
             <div class="card-title">
                 <h1>{props.prodName}</h1>
             </div>
             <div class="card-desc">
                 <hr />
                 <p class="desc">{props.prodDesc}</p>
             </div>
             <label><b>Price: </b>{props.Price}</label>
             <div class="btn-2">Add to cart</div>
            </section>   
                        ))
                    }
                </div>
            </div>
        )
    }
}