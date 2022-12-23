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
        axios.get('/api/products/lowToHigh') 
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
            <div id="filter-container">
            <div className="search-container">
                <h3 className="searchLabel">Search By Name:</h3>
                <div>
                    <input className="searchBar" type="text" value={this.state.filterText} onChange={(e) => this.onChange(e)}></input>
                </div>
                </div>
                <h3>Filter By Category: </h3>          
                    <button id="btn2" onClick={this.myFilter("All")}>All</button>
                    <button id="btn2" onClick={this.myFilter("gaming")}>Gaming</button>
                    <button id="btn2" onClick={this.myFilter("studio")}>Studio</button>
                    <button id="btn2" onClick={this.myFilter("everyday")}>Everyday</button>
                    <button id="btn2"><Link to ='/products/LowtoHigh'>Sort Low to High</Link></button>
                    <button id="btn2"><Link to ='/products/HightoLow'>Sort High to Low</Link></button>
                    <button id="btn2"><Link to ='/products'>Reset</Link></button>
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
              <img src={require('../images/' + props.Image + '.png')} alt={props.Image} />
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