import React from "react";
import './search.css'
function Search({setQuery}){
    return (
        <>
        <label htmlFor="site-search">Search the site:</label>
            <input type="search" id="site-search" placeholder="Enter a pool name" onChange={(e)=>setQuery(e.target.value) }/>

        </>
    )
}
export default Search