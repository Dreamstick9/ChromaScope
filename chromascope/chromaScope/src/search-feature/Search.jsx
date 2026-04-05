import React from "react";
import './search.css'
function Search({setQuery, setSort}){
    return (
        <div className="outer">
        <label htmlFor="site-search">Search the site:</label>
        <div className="inner">
            <input type="search" id="site-search" placeholder="Enter a pool name" onChange={(e)=>setQuery(e.target.value) }/>
            <label htmlFor="sorting">Sort by:</label>
            <select onChange={(e)=> setSort(e.target.value)}>
                <option value={'none'}>Default</option>
                <option value={'fees'}>Total Fees</option>
                <option value={'size'}>Size</option>

            </select>
        </div>

        </div>
    )
}
export default Search