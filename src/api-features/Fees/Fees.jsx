import { useState, useEffect } from "react";
import './Fees.css'
import { FetchFee } from "./Feesapi";


function fee(){
    const [fees, showFees] = useState(null)
    useEffect(()=>{
        FetchFee().then((result)=>{
            console.log(result)
            showFees(result)
        })
    },[])
    if(!fees){
        return <p>Loading...</p>

    }
    return (
        <>
        <h1>Fee Estimator</h1>
        <h2>Highest Fee:- <span className="bro">{fees.fastestFee} sat/vb</span></h2> 
        <h2>Standard Fee:- <span className="bro">{fees.hourFee} sat/vb</span></h2>
        <h2>Economy Fee:- <span className="bro">{fees.economyFee} sat/vb</span></h2>
        </>
    )
}
export default fee