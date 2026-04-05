import React from "react";
import './search.css'
function Search({setQuery}){
    return (
        <div className="outer">
        <label htmlFor="site-search">Search the site:</label>
        <div className="inner">
            <input type="search" id="site-search" placeholder="Enter a pool name" onChange={(e)=>setQuery(e.target.value) }/>
            <label htmlFor="sorting">Sort by:</label>
            <select>
                <option>Default</option>
                <option>Total Fees</option>
                <option>Size</option>

            </select>
        </div>

        </div>
    )
}
export default Search