import React from "react";
import products from './Products.json'


export default class Productlist extends React.Component {
    state = {
        type: "All",
        filterText: ""
    }

    //UseState is a react hook that lets you set some state to react component.

    myFilter (type) {
        return () => {
            this.setState({type})
        }
    }

    onChange (e){
        this.setState({filterText: e.target.value})
        
    }
   
    normalizeString(str) {
        return str.toLowerCase().replace(/\s/g, "")
    }
    render() {
        
        return (
            
            <div>
                <h6>Filter By Category: </h6>
                <div id="fButtons">
                    <button id="button" className="btn btn-light" onClick={this.myFilter("All")}>All</button>
                    <button id="button" className="btn btn-light" onClick={this.myFilter("gaming")}>Gaming</button>
                    <button id="button" className="btn btn-light" onClick={this.myFilter("studio")}>Studio</button>
                    <button id="button" className="btn btn-light" onClick={this.myFilter("everyday")}>Everyday</button>
                </div>
                <div className="search-container">
                <h6 className="searchLabel">Search By Name:</h6>
                <div id="fButtons">
                    <input className="searchBar" type="text" value={this.state.filterText} onChange={(e) => this.onChange(e)}></input>
                </div>
                </div>
                <div className="cards-container">
                    {
                        products
                        .filter((props) => {
                            if (this.state.filterText === ""){
                                return true
                            } else {
                                return this.normalizeString(props.name).includes(this.normalizeString(this.state.filterText))
                            }
                        })

                        .filter((record) => {
                            if (this.state.type === "All"){
                                return true 
                            } else {
                                return this.state.type === record.category
                            }

                        }).map(props => (
                          <section class="card">
            <div class="card-image">
              <img src={require('../images/' + props.image + '.png')} alt={props.image} />
              </div> 
             <div class="card-title">
                 <h1>{props.name}</h1>
             </div>
             <div class="card-desc">
                 <hr />
                 <p class="desc">{props.desc}</p>
             </div>
             <label><b>Price: </b>{props.price}</label>
             <div class="btn-2">Add to cart</div>
            </section>   
                        ))
                    }
                </div>
            </div>
        )
    }
}