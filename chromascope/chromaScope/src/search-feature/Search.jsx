import React from "react";
import { BsSearch } from "react-icons/bs";
import './search.css'
function Search(){
    return (
        <>
        <label htmlFor="site-search">Search the site:</label>
            <input type="search" style={{width:"100px"}} id="site-search" name="q" />
            <button></button>
        </>
    )
}
export default Search