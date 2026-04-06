import { useState, useEffect } from "react";
import './Mempool.css'
import fetchmempool from "./Mempoolapi";
function Mempool(){
    const [daa, showDaa] = useState([])
    useEffect(()=>{
        fetchmempool().then((result)=>{
            console.log(result)
            showDaa(result)
        })
    },[])
    if(daa==''){
        return(
            <p>Loading...</p>
        )
    }
    return (
        <>
        <h1>Live Mempool Stats</h1>
        <h2>No. of uncomfirmed transactions:-  <span className="bro">{daa.count}</span></h2>
        <h2>Total size of mempool:- <span className="bro">{((daa.vsize)/1000000).toFixed(2)} mb</span> </h2>
        <h2>Total fees waiting in mempool:- <span className="bro">{(daa.total_fee/100000000).toFixed(3)} BTC</span></h2>
        </>
    )
}


export default Mempool