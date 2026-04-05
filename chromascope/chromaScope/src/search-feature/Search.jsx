import React from "react";
import './search.css'
function Search({setQuery, setSort, setFilter}){
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
            <label htmlFor="filtering">Filter by:</label>
            <select onChange={(e) => setFilter(e.target.value)}>
                <option value="all">All Sizes</option>
                <option value="small">Small ({`<`}1.5 mb)</option>
                <option value="medium">Medium (1.5–2 mb)</option>
                <option value="large">Large ({`>`}2 mb)</option>
            </select>
        </div>

        </div>
    )
}
export default Search